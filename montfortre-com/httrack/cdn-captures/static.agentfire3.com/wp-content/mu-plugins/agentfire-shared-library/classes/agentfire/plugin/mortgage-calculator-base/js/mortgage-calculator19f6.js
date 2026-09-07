/**
 * Some of the references.
 *  1. http://stackoverflow.com/questions/5645058/how-to-add-months-to-a-date-in-javascript
 *  2. http://www.hughcalc.org/formula.php
 *  3. http://homeguides.sfgate.com/calculate-five-year-arm-mortgages-9260.html
 *  4. http://stackoverflow.com/questions/2207449/financial-formula-for-calculating-an-adjustable-rate-mortgage
 *  5. http://belkcollegeofbusiness.uncc.edu/buttimer/MBAD%206160/Topic%204%20-%20Adjustable%20Rate%20Mortgages.ppt
 *  6. https://pocketsense.com/calculate-biweekly-mortgages-5790181.html
 *
 * @type {{calculateMortgage: calculateMortgage, calculateAmortizations: calculateAmortizations}}
 */

jQuery.fn.exists = function () {
	return jQuery(this).length > 0;
};

if (String.prototype.endsWith === undefined) {
	String.prototype.endsWith = function (searchString, position) {
		var subjectString = this.toString();
		if (typeof position !== 'number' || !isFinite(position) || Math.floor(position) !== position || position > subjectString.length) {
			position = subjectString.length;
		}
		position -= searchString.length;
		var lastIndex = subjectString.indexOf(searchString, position);
		return lastIndex !== -1 && lastIndex === position;
	};
}

(function($){
	var MortgageCalculator = {
		calculateMortgage: function(options) {

			Date.isLeapYear = function (year) {
				return (((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0));
			};

			Date.getDaysInMonth = function (year, month) {
				return [31, (Date.isLeapYear(year) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month];
			};

			Date.prototype.isLeapYear = function () {
				var y = this.getFullYear();
				return (((y % 4 === 0) && (y % 100 !== 0)) || (y % 400 === 0));
			};

			Date.prototype.getDaysInMonth = function () {
				return Date.getDaysInMonth(this.getFullYear(), this.getMonth());
			};

			Date.prototype.addMonths = function (value) {
				var n = this.getDate();
				this.setDate(1);
				this.setMonth(this.getMonth() + value);
				this.setDate(Math.min(n, this.getDaysInMonth()));
				return this;
			};

			function initOptions (options) {
				var mortgage = {};
				mortgage.loanTermMonths        = parseInt(options.loanTermMonths)    || 12 * 30;
				mortgage.salePrice             = parseFloat(options.salePrice)       || 500000;
				mortgage.interestRate          = parseFloat(options.interestRate)    || 5.00;
				mortgage.downPayment           = getDownPayment(mortgage, options.downPayment  || '20%');
				mortgage.pmi                   = parseFloat(options.pmi);
				mortgage.pmi_threshold         = parseFloat(options.pmi_threshold);
				mortgage.extras                = options.extras                      || [];
				mortgage.propertyTaxRate       = parseFloat(options.propertyTaxRate) || 0;
				mortgage.homeInsurance         = parseFloat(options.homeInsurance)   || 0;
				mortgage.hoaFees               = parseFloat(options.hoaFees)         || 0;
				mortgage.paymentFrequency      = options.paymentFrequency            || 'm';
				mortgage.startDate             = options.startDate                   || new Date();
				mortgage.mbwPayment            = parseFloat(options.mbwPayment)      || 0;

				return mortgage;
			}

			function getDates(dateStart) {
				var currentDate = dateStart,
					dates = [];
				var endYearDate = new Date(dateStart.valueOf());
				endYearDate.setMonth(11);
				endYearDate.setDate(31);
				while (currentDate <= endYearDate) {
					dates.push(currentDate);
					var d = new Date(currentDate.valueOf());
					d.setDate(d.getDate() + 14);
					currentDate = d;
				}
				return dates;
			}

			function getYearAdditionalPayments(mortgage) {
				for (var i = 0; i < mortgage.additionalPayments.length; i++) {
					var payment = mortgage.additionalPayments[i];
					switch (payment.paymentType) {
						case 'pmi_year':
							// calculatePMI(mortgage, payment);
							break;
						case 'home_insurance_year':
							break;
						case 'hoa_fees_month':
							break;
						case 'one_time_expenses':
							break;
						default:
							break;
					}
				}
			}

			function getBwPaymentsCount(d) {
				d.setMonth(0);
				d.setDate(1);
				var dates = getDates(d);
				return dates.length;
			}

			/**
			 * @param {object} mortgage Mortgage object
			 * @param {number} remainingLoanBalance In cents
			 * @returns {number} PMI payment, in cents
			 */
			function calculatePMI(mortgage, remainingLoanBalance) {
				if (mortgage.pmi_threshold && mortgage.downPercent >= mortgage.pmi_threshold) {
					return 0;
				}

				var remainingLoanBalancePercents = roundDecimals(remainingLoanBalance / mortgage.salePrice, 2);

				// The Homeowners Protection Act of 1998 requires that lenders remove private mortgage insurance when a borrower reaches a 78 percent loan-to-value ratio.
				if (remainingLoanBalancePercents <= 78) {
					return 0;
				}

				// PMI, cents per year
				var pmiYear = mortgage.pmi / 100 * remainingLoanBalance;
				// PMI, cents per payment
				var pmi = pmiYear / mortgage.yearPaymentsCount;

				return pmi;
			}

			function getPaymentsCount(mortgage) {
				var result = 12;
				if (mortgage.paymentFrequency === 'bw') {
					// result = getBwPaymentsCount(mortgage.startDate);
					result = 26;
				}
				return result;
			}

			function getDownPayment(mortgage, downPayment) {
				if (typeof downPayment === 'string') {
					mortgage.downPercent = parseFloat(downPayment.substr(0, downPayment.indexOf('%')));
					downPayment = (mortgage.salePrice * (mortgage.downPercent / 100));
				} else {
					mortgage.downPercent = downPayment / mortgage.salePrice * 100;
				}

				return downPayment;
			}

			function calculateLoanAmount (mortgage) {
				var loanAmount = mortgage.salePrice - mortgage.downPayment;

				return loanAmount;
			}

			function roundDecimals (num, decimals = 2) {
				return Math.round(num * Math.pow(10, decimals)) / Math.pow(10, decimals);
			}

			function roundAmortizationValues (amortization) {
				amortization.monthlyPayment = roundDecimals(amortization.monthlyPayment);
				amortization.interest = roundDecimals(amortization.interest);
				amortization.interestToDate = roundDecimals(amortization.interestToDate);
				amortization.interestLoanYearToDate = roundDecimals(amortization.interestLoanYearToDate);
				amortization.principal = roundDecimals(amortization.principal);
				amortization.principalLoanYearToDate = roundDecimals(amortization.principalLoanYearToDate);
				amortization.principalToDate = roundDecimals(amortization.principalToDate);
				amortization.extra = roundDecimals(amortization.extra);
				amortization.principalTotal = roundDecimals(amortization.principalTotal);
				amortization.paymentTotal = roundDecimals(amortization.paymentTotal);

				return amortization;
			}

			function checkPaymentDate(paymentDate, currentDate, lastPaymentDate) {
				var pd = paymentDate.getTime();
				var cd = currentDate.getTime();
				var ld = lastPaymentDate.getTime();
				var result = false;
				if ((cd > pd && pd > ld) || pd === cd) {
					result = true;
				}
				return result;
			}

			function setupNewPaymentDate(mortgage, i) {
				var currentPaymentDate = new Date(mortgage.extras[i].startDate.getTime());

				switch (mortgage.extras[i].monthInterval) {
					case 1:
						if (mortgage.paymentFrequency === 'bw') {
							currentPaymentDate.setDate(currentPaymentDate.getDate() + 14);
						} else {
							currentPaymentDate.addMonths(1);
						}
						break;
					case 3:
						currentPaymentDate.addMonths(mortgage.extras[i].monthInterval);
						break;
					case 12:
						currentPaymentDate.setFullYear(currentPaymentDate.getFullYear() + 1);
						break;
					default:
						break;
				}

				if (mortgage.paymentFrequency !== 'bw') {
					currentPaymentDate = mod_payment_date(mortgage, currentPaymentDate);
				}

				mortgage.extras[i].startDate = currentPaymentDate;
			}

			function mod_payment_date (mortgage, modDate) {
				var baseDay = mortgage.startDate.getDate();
				var modDateDay = modDate.getDate();
				if (baseDay !== modDateDay) {
					if (baseDay <= modDate.getDaysInMonth()) {

						var year = modDate.getFullYear();
						var month = modDate.getMonth();
						modDate = new Date(year, month, baseDay);

					}
				}
				return modDate;
			}

			function calculateExtraPayment (mortgage, currentDate, lastPaymentDate) {
				var totalExtra = 0;
				if (mortgage.extras) {
					for (var i in mortgage.extras) {
						var extra = mortgage.extras[i];
						var paymentDate = new Date(extra.startDate);
						var checkPayment = checkPaymentDate(paymentDate, currentDate, lastPaymentDate);
						var d = {
							'monthInterval':   extra.monthInterval,
							'paymentDate':     paymentDate,
							'currentDate':     currentDate,
							'lastPaymentDate': lastPaymentDate,
							'checkPayment':    checkPayment
						};
						mortgage.debug.push(d);
						if (checkPayment) {
							totalExtra += extra.amount * 100;
							setupNewPaymentDate(mortgage, i);
						}
					}
				}
				return totalExtra;
			}

			function aprToMonthlyInterest (mortgage) {
				return mortgage.interestRate / (12 * 100);
			}

			function aprToBiWeeklyInterest (mortgage) {
				// return roundDecimals(mortgage.interestRate / (mortgage.yearPaymentsCount * 100), 6);
				return mortgage.interestRate / (26 * 100);
			}

			function calculatePropertyTax(mortgage) {
				var monthlyPropertyTax;
				if (mortgage.propertyTaxRate && mortgage.propertyTaxRate > 0) {
					monthlyPropertyTax = (mortgage.salePrice * 100 * (options.propertyTaxRate / 100)) / mortgage.yearPaymentsCount;
				} else {
					monthlyPropertyTax = 0;
				}

				return monthlyPropertyTax;
			}

			function calculateHomeInsurance(mortgage) {
				var monthlyHomeInsurance;
				if (mortgage.homeInsurance && mortgage.homeInsurance > 0) {
					monthlyHomeInsurance = (mortgage.salePrice * 100 * (options.homeInsurance / 100)) / mortgage.yearPaymentsCount;
				} else {
					monthlyHomeInsurance = 0;
				}

				return monthlyHomeInsurance;
			}

			function calculateHoaFees(mortgage) {
				var monthlyHoaFees;
				monthlyHoaFees = mortgage.hoaFees * 100 * 12 / mortgage.yearPaymentsCount;

				return monthlyHoaFees;
			}

			function calculateMonthlyPayment (mortgage) {
				var chi = mortgage.monthlyInterestRate * Math.pow(1 + mortgage.monthlyInterestRate, mortgage.loanTermMonths);
				var zna = Math.pow(1 + mortgage.monthlyInterestRate, mortgage.loanTermMonths) - 1;
				var monthlyPayment = mortgage.loanAmount * (chi / zna);
				return monthlyPayment;
			}

			function calculateAmortizations (mortgage) {

				// To avoid rounding errors, all dollars will be converted to cents and converted back to dollars
				// to response objects.
				var remainingLoanAmountInCents = mortgage.loanAmount * 100;
				var loanAmountInCents = mortgage.loanAmount * 100;
				var monthlyPmi = 0;
				var monthlyPropertyTaxInCents = calculatePropertyTax(mortgage);
				var monthlyHomeInsuranceInCents = calculateHomeInsurance(mortgage);
				var monthlyHoaFees = calculateHoaFees(mortgage);
				var amortizations = [];
				var amortizationsByMonth = {};
				var previousAmortization;
				var loanMonth = 1;
				var loanYear = 1;
				var loanYearRollUpSummary = {};
				var currentYear = mortgage.startDate.getFullYear();
				var currentMonth = mortgage.startDate.getMonth();
				var currentMonthlyPaymentInCents;
				var rollupSummaryFields = ['interest', 'principal', 'extra', 'principalTotal', 'propertyTax', 'paymentTotal', 'hoaFees', 'homeInsurance', 'pmi'];
				var report = {
					years:               [],
					principal:           [],
					interest:            [],
					taxes:               [],
					pit:                 [],
					balance:             [],
					loanPaidToDateChart: [],
					loanPaidToDate:      [],
					extra:               []
				};
				var paymentNumber = 0;

				// PMI, USD per payment
				mortgage.pmi_eval = roundDecimals(calculatePMI(mortgage, mortgage.loanAmount * 100) / 100);

				mortgage.debug = [];

				while(remainingLoanAmountInCents >= 1) {

					paymentNumber++;

					var amortization = {};

					if (mortgage.lastPaymentDate === false) {
						mortgage.lastPaymentDate = new Date(mortgage.startDate.getTime());
						amortization.paymentDate = mortgage.lastPaymentDate;
					} else {
						if (mortgage.paymentFrequency === 'bw') {
							amortization.paymentDate = new Date(mortgage.lastPaymentDate.getTime());
							amortization.paymentDate.setDate(amortization.paymentDate.getDate() + 14);
						} else {
							amortization.paymentDate = new Date(mortgage.lastPaymentDate.getTime()).addMonths(1);
							amortization.paymentDate = mod_payment_date(mortgage, amortization.paymentDate);
						}
					}

					if (currentMonth !== amortization.paymentDate.getMonth()) {
						loanMonth++;
						currentMonth = amortization.paymentDate.getMonth();
					}

					currentMonthlyPaymentInCents = mortgage.currentMonthlyPaymentInCents;

					amortization.interestRate = mortgage.interestRate;
					if (mortgage.paymentFrequency === 'bw') {
						currentMonthlyPaymentInCents = currentMonthlyPaymentInCents / 2;
						amortization.interest = remainingLoanAmountInCents * mortgage.biWeeklyInterestRate;
					} else {
						amortization.interest = remainingLoanAmountInCents * mortgage.monthlyInterestRate;
					}
					amortization.scheduledMonthlyPayment  = currentMonthlyPaymentInCents;
					amortization.principal = currentMonthlyPaymentInCents - amortization.interest;


					amortization.debug = amortization.principal + ', ' + remainingLoanAmountInCents;

					if (remainingLoanAmountInCents < amortization.principal) {
						amortization.principal = remainingLoanAmountInCents;
						amortization.extra = 0;
					} else {
						if (loanMonth === 1) {
							var tempLastPaymentDate = new Date(mortgage.lastPaymentDate.getTime());
							if (mortgage.paymentFrequency === 'bw') {
								tempLastPaymentDate.setDate(tempLastPaymentDate.getDate() - 14);
							} else {
								tempLastPaymentDate.addMonths(-1);
							}
							// amortization.extra = calculateExtraPayment(mortgage, amortization.paymentDate, tempLastPaymentDate);
							amortization.extra = calculateExtraPayment(mortgage, amortization.paymentDate, mortgage.lastPaymentDate);
							amortization.debug_variant = '1';
						} else {
							amortization.extra = calculateExtraPayment(mortgage, amortization.paymentDate, mortgage.lastPaymentDate);
							amortization.debug_variant = '2';
						}
					}

					amortization.principalTotal = amortization.principal + amortization.extra;

					amortization.propertyTax = monthlyPropertyTaxInCents;
					amortization.homeInsurance = monthlyHomeInsuranceInCents;
					amortization.hoaFees = monthlyHoaFees;

					// Each year, your PMI is recalculated using your current loan balance, so the amount you pay decreases as you pay down the loan.
					if (loanMonth % 12 === 1) {
						monthlyPmi = calculatePMI(mortgage, remainingLoanAmountInCents);
					}

					amortization.pmi = monthlyPmi;
					if (amortization.pmi > 0) {
						mortgage.pmiLastDate = amortization.paymentDate;
					}

					remainingLoanAmountInCents -= amortization.principalTotal;

					// If remaining loan amount is less than zero, then set it to zero.
					if (remainingLoanAmountInCents < 0) {
						remainingLoanAmountInCents = 0;
					}
					amortization.remainingLoanBalance = remainingLoanAmountInCents;

					// amortization.taxes = roundDecimals((monthlyPropertyTaxInCents + monthlyHomeInsuranceInCents + amortization.hoaFees + amortization.pmi) / 100);
					amortization.taxes = roundDecimals(monthlyPropertyTaxInCents / 100);

					amortization.paymentTotal = amortization.interest + amortization.principalTotal + monthlyPropertyTaxInCents + monthlyHomeInsuranceInCents + amortization.hoaFees + amortization.pmi;

					amortization.loanMonth = loanMonth;
					amortization.loanYear = loanYear;
					rollupSummaryFields.map(function(field) {
						if (loanYearRollUpSummary[field]) {
							loanYearRollUpSummary[field] += amortization[field];
						} else {
							loanYearRollUpSummary[field] = amortization[field];
						}

						amortization[field + 'LoanYearToDate'] = loanYearRollUpSummary[field];
					});


					if (currentYear !== amortization.paymentDate.getFullYear()) {
						loanYearRollUpSummary = {};
						loanYear++;
						currentYear = amortization.paymentDate.getFullYear();
					}

					rollupSummaryFields.map(function(field) {
						if (previousAmortization) {
							amortization[field + 'ToDate'] = previousAmortization[field + 'ToDate'] + amortization[field];
						} else {
							amortization[field + 'ToDate'] = amortization[field];
						}
					});

					previousAmortization = amortization;
					amortizations.push(amortization);

					var aby = amortization.paymentDate.getFullYear();
					var abm = amortization.paymentDate.getMonth();

					var keyY = 'y' + aby;
					var keyM = 'm' + abm;

					if (amortizationsByMonth[keyY] === undefined) {
						amortizationsByMonth[keyY] = [];
					}

					amortizationsByMonth[keyY].push(amortization);

					if (report.years.indexOf(aby) === -1) {
						report.years.push(aby);
					}
					mortgage.lastPaymentDate = new Date(amortization.paymentDate.getTime());

				}

				// Round all amortization values to dollars.
				mortgage.totalLoanCost = 0;
				mortgage.totalTaxes = 0;
				var additionalFieldsToProcess = ['scheduledMonthlyPayment', 'remainingLoanBalance'];

				for (var i = 0; i < amortizations.length; i++) {
					var amortization = amortizations[i];
					rollupSummaryFields.map(function(field) {
						amortization[field] = roundDecimals(amortization[field] / 100);
						amortization[field + 'ToDate'] = roundDecimals(amortization[field + 'ToDate'] / 100);
						amortization[field + 'LoanYearToDate'] = roundDecimals(amortization[field + 'LoanYearToDate'] / 100);
					});

					additionalFieldsToProcess.map(function(field) {
						amortization[field] = roundDecimals(amortization[field] / 100);
					});

					mortgage.totalLoanCost += amortization.interest;
					mortgage.totalTaxes += amortization.taxes;

					amortization.pit = roundDecimals(amortization.principal + amortization.interest + amortization.taxes);
					amortization.loanPaidToDate = roundDecimals(100 - ((mortgage.loanAmount - amortization.principalTotalToDate) / (mortgage.loanAmount / 100)));
				}

				mortgage.totalTaxes = roundDecimals(mortgage.totalTaxes, 2);

				report.years.map(function(y) {
					var yearPayments = amortizationsByMonth['y' + y];
					var ms = Object.keys(yearPayments);
					var last_month_key = ms[ms.length - 1];
					var lastPaymentInYear = yearPayments[last_month_key];


					var calculationYearPrincipal = 0;
					var calculationYearInterest = 0;
					var calculationYearTaxes = 0;
					var calculationYearPit = 0;
					var calculationYearLoanPaidToDate = 0;
					var calculationYearExtra = 0;

					for (var i = 0; i < yearPayments.length; i++) {
						calculationYearPrincipal += yearPayments[i].principal;
						calculationYearInterest += yearPayments[i].interest;
						calculationYearTaxes += yearPayments[i].taxes;
						calculationYearPit += roundDecimals(yearPayments[i].principalTotal + yearPayments[i].interest + yearPayments[i].taxes);
						calculationYearExtra += yearPayments[i].extra;
					}

					report.principal.push(roundDecimals(calculationYearPrincipal));
					report.interest.push(roundDecimals(calculationYearInterest));
					report.taxes.push(roundDecimals(calculationYearTaxes));
					report.balance.push(lastPaymentInYear.remainingLoanBalance);
					calculationYearLoanPaidToDate = roundDecimals((mortgage.loanAmount - lastPaymentInYear.principalTotalToDate) / (mortgage.loanAmount / 100));
					report.loanPaidToDateChart.push(roundDecimals(calculationYearLoanPaidToDate));
					report.loanPaidToDate.push(roundDecimals(100 - calculationYearLoanPaidToDate));
					report.pit.push(roundDecimals(calculationYearPit));
					report.extra.push(roundDecimals(calculationYearExtra));

				});

				mortgage.totalLoanCostNotRounded = mortgage.totalLoanCost;
				mortgage.totalLoanCost = roundDecimals(mortgage.totalLoanCost);
				mortgage.paymentSchedule = amortizations;
				mortgage.paymentScheduleByMonth = amortizationsByMonth;
				mortgage.report = report;
				mortgage.numberOfPayments = mortgage.paymentSchedule.length;
				mortgage.monthlyPayment = mortgage.paymentSchedule[0].scheduledMonthlyPayment;
			}

			var mortgage = initOptions(options);
			mortgage.lastPaymentDate = false;
			mortgage.yearPaymentsCount = getPaymentsCount(mortgage);
			mortgage.monthlyInterestRate = aprToMonthlyInterest(mortgage);
			mortgage.biWeeklyInterestRate = aprToBiWeeklyInterest(mortgage);

			if (mortgage.paymentFrequency === 'bw') {
				mortgage.totalPaymentsCount = mortgage.loanTermMonths / 12 *  mortgage.yearPaymentsCount;
			} else {
				mortgage.totalPaymentsCount = mortgage.loanTermMonths;
			}

			mortgage.loanAmount = calculateLoanAmount(mortgage);

			mortgage.currentMonthlyPayment = calculateMonthlyPayment(mortgage);
			mortgage.currentMonthlyPaymentInCents = mortgage.currentMonthlyPayment * 100;

			calculateAmortizations(mortgage);
			return mortgage;
		}
	};

	window.mortgage_calculator = (function() {

		var $container;

		var mortgage_calculation;

		var months;
		var full_months;

		var i18n_format;

		var share_link = '';

		var with_extras;

		var monthly_chart = null;
		var fulltime_chart = null;

		// #7bed9f
		var color_primary = '#6CBC35';

		// var comparison = { m: {}, bw: {} };

		var chart_data = {
			monthly: {
				month_principal_interest: '',
				extra_payment:            '',
				property_taxes:           '',
				homeowners_insurance:     '',
				pmi:                      '',
				pmi_last_date:            '',
				monthly:                  ''
			},
			total: {
				down_payment:   0,
				principal:      0,
				extra_payments: 0,
				interest:       0,
				taxes:          0
			}
		};

		var init = function(element_id, conf) {
			$container = $(element_id);

			if (conf.color_primary) {
				color_primary = conf.color_primary;
			}

			register_actions();

			i18n_format = new Intl.NumberFormat('en-US');

			months = 'Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec'.split(' ');
			full_months = 'January February March April May June July August September October November December'.split(' ');

			calculate_progress();

			calc();
		};

		var format = function(num) {
			return i18n_format.format(num);
		};

		var calculate_progress = function() {
			$container.find('.toap-progress-bar').each(function(i, e) {
				if (!$(e).children('span').exists()) {
					var $sp = $('<span>').attr('class', 'progress-line');
					$(e).append($sp);
				}
				// var w = $(e).width();
				var p = $(e).attr('data-progress') * 1;
				// var progress_width = Math.ceil(w / 100 * p);
				// $(e).children('span').width(progress_width);
				$(e).children('span').width(p + '%');
			});
		};

		var fill_total_monthly_payment = function () {
			$container.find('.month_principal_interest').html(format(chart_data.monthly.month_principal_interest));
			$container.find('.month_extra_payment').html(format(chart_data.monthly.extra_payment));

			$container.find('.month_total').html(format(chart_data.monthly.total));
			$container.find('.monthly-payment-sum .sum').html(format(chart_data.monthly.total));

			var pmi_last_date = chart_data.monthly.pmi_last_date;
			if (chart_data.monthly.pmi > 0) {
				if (pmi_last_date) {
					$container.find('.pmi_last_date').html('(until ' + full_months[pmi_last_date.getMonth()] + ' ' + pmi_last_date.getDate() + ', ' + pmi_last_date.getFullYear() + ')').show();
				} else {
					$container.find('.pmi_last_date').hide();
				}
				$container.find('.pmi_not_required').hide();
			} else {
				$container.find('.pmi_not_required').show();
				$container.find('.pmi_last_date').hide();
			}

		};

		var fill_total_of_all_payments = function() {
			var max_value = 0;
			for (var i in chart_data.total) {
				if (i === 'total') {
					continue;
				}
				var t = parseFloat(chart_data.total[i]);
				if (t > max_value) {
					max_value = t;
				}
			}
			for (var k in chart_data.total) {
				var v = parseFloat(chart_data.total[k]);
				var p = Math.ceil(v / max_value * 100);
				$container.find('.total-of-all-payments .' + k + ' .toap-progress-bar').attr('data-progress', p);
				$container.find('.total-of-all-payments .' + k + ' .toap-value').html(format(v));
			}
			calculate_progress();
		};

		var copy_to_clipboard = function(share_link) {
			if ($container.find('.mortgage_share_link').exists()) {
				$container.find('.mortgage_share_link').remove();
			}
			var $x = $('<input>').attr('class', 'mortgage_share_link').attr('type', 'text').attr('type', 'text').val(share_link);
			$container.find('.share-link-container').append($x);
			var copyText = $container.find('.share-link-container .mortgage_share_link')[0];
			copyText.select();
			document.execCommand('copy');
			alert('Link copied to clipboard');
		};

		var generate_share_link = function() {
			if ($container.find('.mortgage_share_link').exists()) {
				$container.find('.mortgage_share_link').remove();
			}
			var form = get_form_as_obj();
			var data = [ form ];
			AgentFire.Request.put('/wp-json/agentfire/v1/mortgage-calculator/share', data, function (response) {
				share_link = $container.find('input[name="share_url"]') + '?' +  response.data;
			}, function(response) {});
		};

		var register_actions = function() {

			$(window).on('resize', function() {
				change_chart_size();
			});

			$container.on('input', 'input[type="text"]:not(.hasDatepicker)', function () {
				var value = $(this).val().replace(/[^0-9\.]+/g, '');
				if (value === '') {
					value = 0;
				} else {
					if (value.endsWith('.') === false) {
						value = parseFloat(value);
					}
				}
				$(this).val(value);
			});

			$container.on('input', 'input[type="text"].hasDatepicker', function () {
				var value = $(this).val().replace(/[^0-9\/\w\s\,\.\-]+/g, '');
				if (value === '') {
					var d = new Date();
					value = full_months[ d.getMonth() ] + ' ' + d.getDate() + ', ' + d.getFullYear();
				}
				$(this).val(value);
			});

			$container.find('.home_value').on('change', function() {
				var value = $(this).val().replace(/[^0-9]+/g,'');
				$(this).val(format(value));
			});

			$container.find('.home_value_slider').rangeslider({
				polyfill: false,
				onInit: function() {},
				onSlide: function(position, value) {
					$container.find('.home_value').val(format(value));
				},
				onSlideEnd: function(position, value) {
					$container.find('.home_value').val(format(value));
				}
			});

			$container.on('change', 'form input', function() {
				calc();
			});

			$container.on('focusout', 'form input', function() {
				calc();
			});

			$container.on('click', '.share-link', function(e) {
				copy_to_clipboard(share_link);
			});

			$container.on('click', '.input-switch .input-switch-option', function() {
				if (!$(this).hasClass('active')) {
					var inpt = $(this).parent().data('input'),
						inpt_type = $(this).parent().data('input-type'),
						home_value = $container.find('.home_value').val().replace(/[^0-9]+/g,''),
						mortgage_amount = $container.find('.mortgage_amount').val();

					var $target = $container.find('.' + inpt),
						$target_type = $container.find('.' + inpt_type);

					var to = $(this).data('option');
					var value = $target.val();
					var result = 0;
					switch (inpt_type) {
						case 'down_payment_type':
							result = percents_dollars(to, value, home_value);
							break;
						case 'pmi_year_type':
							result = percents_dollars(to, value, mortgage_amount);
							break;
						case 'amortization_period_type':
							result = months_years(to, value);
							break;
						case 'payment_frequency_type':
							result = to;
							break;
						case 'one_time_expenses_type':
							result = percents_dollars(to, value, home_value);
							break;
						case 'property_taxes_year_type':
							result = percents_dollars(to, value, home_value);
							break;
						case 'home_insurance_year_type':
							result = percents_dollars(to, value, home_value);
							break;
						default:
							break;
					}
					$target.val(result);
					$target_type.val(to);
					$(this).parent().children('.input-switch-option').toggleClass('active');
					if (inpt_type === 'payment_frequency_type') {
						calc();
					}
				}
			});

			$container.on('click', '.add-extra-payment', function() {
				$container.find('.add-extra-payment-title').trigger('click');
			});

			$container.on('click', '.remove-extra-payments', function() {
				$container.find('.add-extra-payment-title').trigger('click');
			});

			$container.on('click', '.add-extra-payment-title', function() {
				if (!$container.find('.add-extra-payment-title').hasClass('active')) {
					$container.find('.extra-payments').slideDown();
					$container.find('.add-extra-payment-title').addClass('active');
					$container.find('.add-extra-payment-title').html($('.add-extra-payment-title').data('expanded-text'));
				} else {
					$container.find('.add-extra-payment-title').html($('.add-extra-payment-title').data('text'));
					$container.find('.add-extra-payment-title').removeClass('active');
					$container.find('.extra-payments').slideUp();
					$container.find('.ep_monthly_or_bi_weekly').val(0);
					$container.find('.ep_yearly').val(0);
					$container.find('.ep_quarterly').val(0);
					$container.find('.ep_one_time_only').val(0);
					calc();
				}
				$([document.documentElement, document.body]).animate({
					scrollTop: $container.find('.add-extra-payment-title').offset().top
				}, 2000);
			});

			var startDate = new Date();
			$container.find('.mgc-date').datepicker().datepicker('setDate', startDate);

			$container.find('[data-toggle="tooltip"]').tooltip({container: $container});
		};

		var months_years = function(to, value) {
			var result = 0;
			switch (to) {
				case 'y':
					result = roundDecimals(parseInt(value) / 12);
					break;
				case 'm':
					result = parseInt(value) * 12;
					break;
			}
			return result;
		};

		var percents_dollars = function(to, value, amount) {
			var result = 0;
			switch (to) {
				case 'percents':
					result = roundDecimals(parseFloat(value) / (parseFloat(amount) / 100));
					break;
				case 'dollars':
					result = roundDecimals(parseFloat(amount) / 100 * parseFloat(value));
					break;
			}
			return result;
		};

		var get_form_as_obj = function() {
			var form_data = $container.find('form').serializeArray();
			var returnArray = {};
			for (var i = 0; i < form_data.length; i++) {
				var key = form_data[i]['name'],
					value = form_data[i]['value'];
				if (key === 'home_value') {
					value = value.replace(/[^0-9]+/g,'');
				}
				returnArray[key] = value;
			}
			return returnArray;
		};

		var calc = function() {

			var form = get_form_as_obj();

			var amortization_period = parseInt(form.amortization_period);
			if (form.amortization_period_type === 'y') {
				amortization_period = parseInt(form.amortization_period * 12);
			}

			var down_payment = form.down_payment + '%';
			if (form.down_payment_type === 'dollars') {
				down_payment = parseFloat(form.down_payment);
			}

			var pmi = form.pmi_year;
			if (form.pmi_year_type === 'dollars') {
				pmi = percents_dollars('percents', pmi, form.home_value);
			}

			var propertyTaxRate = form.property_taxes_year;
			if (form.property_taxes_year_type === 'dollars') {
				propertyTaxRate = percents_dollars('percents', propertyTaxRate, form.home_value);
			}

			var homeInsurance = form.home_insurance_year;
			if (form.home_insurance_year_type === 'dollars') {
				homeInsurance = percents_dollars('percents', homeInsurance, form.home_value);
			}

			var oneTimeExpenses = form.one_time_expenses;
			if (form.one_time_expenses_type === 'percents') {
				oneTimeExpenses = percents_dollars('dollars', oneTimeExpenses, form.home_value);
			}

			// Mortgage extra payments

			var extraPayments = [];
			var mbwPayment = 0;

			if (parseFloat(form.ep_monthly_or_bi_weekly) > 0) {
				extraPayments.push({
					monthInterval: 1,
					startDate: new Date(form.ep_monthly_or_bi_weekly_date),
					amount: parseFloat(form.ep_monthly_or_bi_weekly)
				});
				mbwPayment = parseFloat(form.ep_monthly_or_bi_weekly);
			}

			if (parseFloat(form.ep_one_time_only) > 0) {
				extraPayments.push({
					monthInterval: 0,
					startDate: new Date(form.ep_one_time_only_date),
					amount: parseFloat(form.ep_one_time_only)
				});
			}

			if (parseFloat(form.ep_quarterly) > 0) {
				extraPayments.push({
					monthInterval: 3,
					startDate: new Date(form.ep_quarterly_date),
					amount: parseFloat(form.ep_quarterly)
				});
			}

			if (parseFloat(form.ep_yearly) > 0) {
				extraPayments.push({
					monthInterval: 12,
					startDate: new Date(form.ep_yearly_date),
					amount: parseFloat(form.ep_yearly)
				});
			}

			var start_date = new Date(form.payments_start_date);

			var options = {
				loanTermMonths:   amortization_period,
				salePrice:        parseInt(form.home_value),
				downPayment:      down_payment,
				interestRate:     parseFloat(form.interest_rate),
				startDate:        start_date,
				paymentFrequency: form.payment_frequency,
				pmi:              pmi,
				pmi_threshold:    form.pmi_threshold,
				propertyTaxRate:  propertyTaxRate,
				homeInsurance:    homeInsurance,
				hoaFees:          form.hoa_fees_month,
				extras:           extraPayments,
				mbwPayment:       mbwPayment
			};

			mortgage_calculation = MortgageCalculator.calculateMortgage(options);

			$container.find('.mortgage_amount').val(mortgage_calculation.loanAmount);

			with_extras = false;

			chart_data.monthly.month_principal_interest = mortgage_calculation.monthlyPayment;
			if (parseFloat(form.ep_monthly_or_bi_weekly) > 0) {
				chart_data.monthly.extra_payment = parseFloat(form.ep_monthly_or_bi_weekly);
			} else {
				chart_data.monthly.extra_payment = 0;
			}
			chart_data.monthly.homeowners_insurance = mortgage_calculation.paymentSchedule[0].homeInsurance;
			chart_data.monthly.property_taxes = mortgage_calculation.paymentSchedule[0].propertyTax;
			chart_data.monthly.hoa_fees = mortgage_calculation.paymentSchedule[0].hoaFees;
			chart_data.monthly.pmi = mortgage_calculation.pmi_eval;
			chart_data.monthly.pmi_last_date = mortgage_calculation.pmiLastDate;
			chart_data.monthly.total = chart_data.monthly.month_principal_interest + chart_data.monthly.extra_payment + chart_data.monthly.property_taxes + chart_data.monthly.homeowners_insurance + chart_data.monthly.pmi + chart_data.monthly.hoa_fees;

			chart_data.total.down_payment = parseFloat(mortgage_calculation.salePrice) - parseFloat(mortgage_calculation.loanAmount) + parseFloat(oneTimeExpenses);
			chart_data.total.principal = mortgage_calculation.paymentSchedule[mortgage_calculation.numberOfPayments - 1].principalToDate;
			chart_data.total.extra_payments = mortgage_calculation.paymentSchedule[mortgage_calculation.numberOfPayments - 1].extraToDate;
			chart_data.total.interest = mortgage_calculation.paymentSchedule[mortgage_calculation.numberOfPayments - 1].interestToDate;
			chart_data.total.taxes = mortgage_calculation.totalTaxes;
			chart_data.total.pmi = mortgage_calculation.paymentSchedule[mortgage_calculation.numberOfPayments - 1].pmiToDate;
			chart_data.total.home_insurance = mortgage_calculation.paymentSchedule[mortgage_calculation.numberOfPayments - 1].homeInsuranceToDate;
			chart_data.total.hoa_fees = mortgage_calculation.paymentSchedule[mortgage_calculation.numberOfPayments - 1].hoaFeesToDate;
			chart_data.total.total = chart_data.total.down_payment + chart_data.total.principal + chart_data.total.extra_payments + chart_data.total.interest + chart_data.total.taxes;

			if (extraPayments.length > 0) {
				// comparison.with_extra = mortgage_calculation;
				// options.extras = [];
				// comparison[form.payment_frequency] = MortgageCalculator.calculateMortgage(options);
				// $container.find('.paymentschedule thead #extra').removeClass('hidden');
				with_extras = true;
			} else {
				// comparison[form.payment_frequency] = mortgage_calculation;
			}

			// var another_calc_key = 'm';
			var frequency_text = 'Bi-weekly';
			if (form.payment_frequency === 'm') {
				frequency_text = 'Monthly';
				// another_calc_key = 'bw';
			}
			$('.payment_frequency_type').html(frequency_text);

			// options.paymentFrequency = another_calc_key;
			// comparison[another_calc_key] = MortgageCalculator.calculateMortgage(options);

			// $container.find('.table-last-pmi-date').html(mortgage_calculation.pmiLastDate.getDate() + '-' + months[mortgage_calculation.pmiLastDate.getMonth()] + ' ' + mortgage_calculation.pmiLastDate.getFullYear());

			fill_total_monthly_payment();
			fill_total_of_all_payments();

			if (monthly_chart === null && fulltime_chart === null) {
				init_charts();
			} else {
				monthly_chart.series[0].setData([
					Math.round(chart_data.monthly.month_principal_interest),
					Math.round(chart_data.monthly.extra_payment),
					Math.round(chart_data.monthly.homeowners_insurance),
					Math.round(chart_data.monthly.property_taxes),
					Math.round(chart_data.monthly.hoa_fees),
					Math.round(chart_data.monthly.pmi)
				]);
				monthly_chart.setTitle({
					text: '<span class="radial-chart-sign">$ </span><span class="radial-chart-sum">' + format(chart_data.monthly.total) + '</span><br/><span class="radial-chart-text">' + frequency_text + ' payment</span>'
				});
				fulltime_chart.series[0].setData(mortgage_calculation.report.balance);
				fulltime_chart.series[1].setData(mortgage_calculation.report.interest);
				fulltime_chart.series[2].setData(mortgage_calculation.report.principal);

			}
			change_chart_size();

			// generate_share_link();

			calculate_progress();

			var d = new Date(mortgage_calculation.lastPaymentDate);
			var last_month_day = full_months[ d.getMonth() ] + ' ' + d.getDate();
			var last_year = d.getFullYear();
			$container.find('.total-chart-report .date-end .month-day').html(last_month_day);
			$container.find('.total-chart-report .date-end .year').html(last_year);

			$container.find('.cur-chart-state .payment-date').html(mortgage_calculation.report.years[0]);
			$container.find('.cur-chart-state .total-remaning-balance span').html(mortgage_calculator.format(mortgage_calculation.report.balance[0]));
			$container.find('.cur-chart-state .total-principal span').html(mortgage_calculator.format(mortgage_calculation.report.principal[0]));
			$container.find('.cur-chart-state .total-interest span').html(mortgage_calculator.format(mortgage_calculation.report.interest[0]));

		};

		var change_chart_size = function() {
			var w = $container.find('.monthly-report').width();
			var h = 500;
			if (w < 376) {
				w = Math.round(w * 0.8);
			} else {
				w = 350;
			}
			// monthly_chart.setSize(w, h, true);
			$container.find('.monthly-chart-inner').width(w);
			$container.find('.monthly-chart-inner').height(500);
			monthly_chart.setSize(null);
			$container.find('.highcharts-series-group > g.highcharts-pie-series').attr('transform', 'translate(0,-50) scale(1 1)');
		};

		var roundDecimals = function(num) {
			var decimals = 2;
			return Math.round(num * Math.pow(10, decimals)) / Math.pow(10, decimals);
		};

		var chart_balance = function(year) {
			var report =  mortgage_calculation.report;
			var key = report.years.indexOf(year);
			var result = roundDecimals(100 - (mortgage_calculation.loanAmount - report.balance[key]) / (mortgage_calculation.loanAmount / 100));
			return result;
		};

		var init_charts = function() {

			monthly_chart = new Highcharts.Chart('monthly-chart', {
				chart: {
					backgroundColor: "transparent",
					plotBackgroundColor: "transparent",
					borderWidth: null,
					plotBorderWidth: null,
					plotShadow: !1,
					margin: [0, 0, 0, 0],
					spacing: [0, 0, 0, 0],
					events: {
						load: function (e) {
							$container.find('tspan.radial-chart-sign').attr('dy', '20');
							$container.find('tspan.radial-chart-sum').attr('dx', '5');
							$container.find('tspan.radial-chart-sum').attr('dy', '5');
							$container.find('tspan.radial-chart-text').attr('dy', '40');
						},
						render: function (e) {
							// $(e.target.legend.allItems).each(function(i, legendElement) {
							// 	if (legendElement.y === 0) {
							// 		$container.find('.highcharts-legend-item.highcharts-color-' + i).remove();
							// 	}
							// });
						}
					}
				},
				title: {
					text: '<span class="radial-chart-sign">$ </span><span class="radial-chart-sum">' + format(chart_data.monthly.total) + '</span><br/><span class="radial-chart-text">Monthly payment</span>',
					align: "center",
					verticalAlign: "middle",
					y: -45,
					x: 0
				},
				tooltip: {
					formatter: function() {
						return this.point.name + ": $" + this.y + " (" + Math.round(this.percentage) + "%)";
					}
				},
				plotOptions: {
					pie: {
						size: "100%",
						// #3fa9f5, #ff7f50
						colors: [color_primary, '#70a1ff', '#7bed9f', '#ff6b81', '#eccc68', '#5352ed'],
						innerSize: "70%",
						allowPointSelect: true,
						cursor: 'pointer',
						dataLabels: {
							enabled: false
						},
						showInLegend: true
					}
				},
				series: [{
					type: "pie",
					name: "Total of Payments",
					data: [
						["Principal & Interest", Math.round(chart_data.monthly.month_principal_interest)],
						["Extra Payments", Math.round(chart_data.monthly.extra_payment)],
						["Home Insurance", Math.round(chart_data.monthly.homeowners_insurance)],
						["Property Taxes", Math.round(chart_data.monthly.property_taxes)],
						["HOA Fees", Math.round(chart_data.monthly.hoa_fees)],
						["PMI", Math.round(chart_data.monthly.pmi)]
					],
					events: {
						afterAnimate: function(e) {
							// var that = this;
							// var dy = 7;
							// $container.find('.highcharts-legend-item').each(function(i, legendElement) {
							// 	var attribute = 'translate(12,' + dy + ')';
							// 	$(this).attr('transform', attribute);
							// 	dy = dy + 16;
							// });
							// var legend_items_count = $container.find('.highcharts-legend-item').length;
							// var legend_container_height = legend_items_count * 16 + 16;
							// $container.find('.highcharts-legend-box').attr('height', legend_container_height);
						}
					}
				}],
				credits: {
					enabled: false
				},
				legend: {
					enabled: true,
					align: 'center',
					verticalAlign: 'bottom',
					x: 0,
					y: 0,
					floating: false,
					labelFormatter: function () {
						return this.name + ' : $' + this.y;
					},
					borderRadius: 8,
					padding: 12,
					squareSymbol: true,
					backgroundColor: '#f7f7f7'
				}
			});

			fulltime_chart = new Highcharts.Chart('mortgage_calc_2d_chart', {
				chart: {
					type: 'area',
					options: {
						elements: {
							point:{
								radius: 0
							}
						}
					},
					defaultSeriesType: "column",
					backgroundColor: "transparent",
					plotBackgroundColor: "transparent",
					borderWidth: null,
					plotBorderWidth: null,
					plotShadow: false,
					C: 0,
					G: 0
				},
				title: {
					text: ""
				},
				xAxis: {
					categories: mortgage_calculation.report.years,
					minorTickInterval: "auto",
					tickmarkPlacement: "on",
					labels: {
						rotation: -45,
						align: "right",
						step: 8 < mortgage_calculation.report.years.length ? 2 : 1,
						style: {
							font: "normal 9px Verdana, sans-serif"
						},
						formatter: function() {
							return this.value;
						}
					},
					crosshair: {
						width: 3,
						color: '#3fa9f5'
					}
				},
				yAxis: [{
					min: 0,
					title: {
						text: "Mortgage Payment / year"
					},
					stackLabels: {
						enabled: !1,
						style: {
							fontWeight: "bold",
							color: Highcharts.theme && Highcharts.theme.j || "gray"
						}
					},
					opposite: !0,
					labels: {
						formatter: function() {
							return this.value;
						}
					}
				}, {
					min: 0,
					title: {
						text: "Balance"
					},
					stackLabels: {
						enabled: !1,
						style: {
							fontWeight: "bold",
							color: Highcharts.theme && Highcharts.theme.j || "gray"
						}
					},
					labels: {
						formatter: function() {
							return this.value;
						}
					}
				}],
				legend: {
					enabled: false
				},
				plotOptions: {
					column: {
						borderWidth: 0,
						stacking: "normal",
						dataLabels: {
							enabled: !1,
							color: Highcharts.theme && Highcharts.theme.u || "white"
						}
					},
					area: {
						marker: {
							enabled: false,
							symbol: 'circle',
							radius: 4,
							states: {
								hover: {
									enabled: true
								}
							}
						},
						fillOpacity: 0.35
					},
					series: {
						lineWidth: 0
					}
				},
				tooltip: {
					formatter: function() {
						$container.find('.cur-chart-state .payment-date').html(this.points[0].x);
						$container.find('.cur-chart-state .total-remaning-balance span').html(mortgage_calculator.format(this.points[0].y));
						$container.find('.cur-chart-state .total-principal span').html(mortgage_calculator.format(this.points[2].y));
						$container.find('.cur-chart-state .total-interest span').html(mortgage_calculator.format(this.points[1].y));
						return '';
					},
					valueDecimals: 2,
					split: true,
					hideDelay: 10000,
					lineWidth: 3
				},
				series: [
					{
						name: 'Balance',
						data: mortgage_calculation.report.balance,
						yAxis: 1,
						legendIndex: 5,
						color: '#3fa9f5'
					},
					{
						name: 'Interest',
						data: mortgage_calculation.report.interest,
						yAxis: 0,
						legendIndex: 3,
						color: '#ff7f50'
					},
					{
						name: 'Principal',
						data: mortgage_calculation.report.principal,
						yAxis: 0,
						legendIndex: 1,
						color: color_primary // #7bed9f
					}
				],
				credits: {
					enabled: false
				}
			});

		};

		return {
			status_changed: false,
			chart_balance:  chart_balance,
			format:         format,
			init:           init,
			monthly_chart:  monthly_chart,
			fulltime_chart: fulltime_chart
		};

	})();


	$.fn.MortgageCalculator = function (a) {
		var b, conf = $.extend(true, {}, a),
			returnArr = [];
		this.each(function () {
			b = this;
			if (!b.MortgageCalculator) {
				b.MortgageCalculator = mortgage_calculator.init($(b), conf);
			}
			returnArr.push(b.MortgageCalculator);
		});
		return returnArr.length > 1 ? returnArr : returnArr[0];
	};
})(jQuery);
