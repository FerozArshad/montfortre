/* global AreaGuide, AreaGuideData */

// Find all not initialized pie widgets and init them
AreaGuide.pie = function ($) {
	$('.agw-pie:not(.initialized)').each(function () {
		new AreaGuide._pie($, $(this));
	});
};

AreaGuide.pie.options = {
	animation: !AreaGuideData.isEditorPreview,
	legend: {
		orient: 'horizontal',
		y: 'bottom',
		itemWidth: 10,
		itemHeight: 10,
		icon: 'circle',
		textStyle: {
			fontSize: 14,
			color: AreaGuideData.bodyFontColor,
			padding: [0, 0, 0, 5],
		}
	},
	series: [
		{
			type: 'pie',
			center: ['50%', '40%'],
			radius: ['50%', '70%'],
			avoidLabelOverlap: true,
			label: {
				show: false,
				position: 'center'
			},
			emphasis: {
				label: {
					show: true,
					fontSize: '20',
					fontWeight: 'bold',
					formatter: [
						'{c|{c}%}',
						'{b|{b}}'
					].join('\n'),
					rich: {
						c: {
							color: '#222',
							fontSize: 26,
							lineHeight: 40,
							fontWeight: 700
						},
						b: {
							color: '#999',
							fontSize: 12
						}
					}
				}
			},
			data: []
		}
	]
};

// Separate function to init each pie widget
AreaGuide._pie = function ($, $element) {
	var app = this;

	var convertHexToRGBA = function (hexCode, opacity) {
		return 'rgba('
		       + parseInt(hexCode.substring(1, 3), 16) + ','
		       + parseInt(hexCode.substring(3, 5), 16) + ','
		       + parseInt(hexCode.substring(5, 7), 16) + ','
		       + opacity / 100 + ')';
	};

	this.slider = null;

	this._occupancy = function (canvas, data) {
		var chart = echarts.init(canvas);

		var total = Math.round(data.household_owned) + Math.round(data.household_rented),
			ownedPercent = Math.round(( data.household_owned / total ) * 100),
			rentedPercent = Math.round(( data.household_rented / total ) * 100);

		var options = jQuery.extend(true, {
			legend: {
				data: ['Owned', 'Rented'],
				formatter: function(name) {
					var percent = name === 'Owned' ? ownedPercent : rentedPercent;
					return '{name|' + name + '}\n{percent|' + percent + '%}';
				},
				textStyle: {
					fontSize: 14,
					color: '#A5A4A5',
					padding: [0, 0, 0, 10],
					rich: {
						name: {
							fontSize: 14,
							color: '#A5A4A5',
						},
						percent: {
							fontSize: 16,
							lineHeight: 28,
							color: AreaGuideData.bodyFontColor,
						}
					}
				}
			},
			series: [{
				name: 'Occupancy',
				data: [
					{ value: Math.round(data.household_owned), name: 'Owned', itemStyle: { color: AreaGuideData.primaryColor } },
					{ value: Math.round(data.household_rented), name: 'Rented', itemStyle: { color: convertHexToRGBA(AreaGuideData.primaryColor, 70) } }
				]
			}]
	}, AreaGuide.pie.options);

		chart.setOption(options);
	};

	this._age = function (canvas, data) {
		var chart = echarts.init(canvas);
		var ageData = [
			{value: Math.round(data.population_age_25_to_34), name: '25-34', itemStyle: {color: convertHexToRGBA(AreaGuideData.primaryColor, 80)}},
			{value: Math.round(data.population_age_35_to_44), name: '35-44', itemStyle: {color: convertHexToRGBA(AreaGuideData.primaryColor, 70)}},
			{value: Math.round(data.population_age_45_to_54), name: '45-54', itemStyle: {color: convertHexToRGBA(AreaGuideData.primaryColor, 60)}},
			{value: Math.round(data.population_age_55_to_64), name: '55-64', itemStyle: {color: convertHexToRGBA(AreaGuideData.primaryColor, 50)}},
			{
				value: Math.round(data.population_age_65_to_74 + data.population_age_75_to_84 + data.population_age_85_plus),
				name: '65+', 
				itemStyle: {color: convertHexToRGBA(AreaGuideData.primaryColor, 40)}
			},
		];

		if (AreaGuideData.isLocalLogicActive) {
			ageData = [
				{
					value: Math.round(data.population_age_0_to_4 + data.population_age_5_to_9 + data.population_age_10_to_14),
					name: '0-14', 
					itemStyle: {color: AreaGuideData.primaryColor}
				},
				{value: Math.round(data.population_age_15_to_24), name: '15-24', itemStyle: {color: convertHexToRGBA(AreaGuideData.primaryColor, 90)}},
			].concat(ageData);
		} else {
			ageData = [
				{value: Math.round(data.population_age_0_to_5 + data.population_age_6_to_11), name: '0-12', itemStyle: {color: AreaGuideData.primaryColor}},
				{value: Math.round(data.population_age_12_to_17 + data.population_age_18_to_24), name: '12-24', itemStyle: {color: convertHexToRGBA(AreaGuideData.primaryColor, 90)}},
			].concat(ageData);
		}

		var legendData = ageData.map(function (item) {
			return item.name;
		});

		var options = jQuery.extend(true, {
			legend: {
				data: legendData,
			},
			series: [{
				name: 'Age',
				data: ageData,
			}]
		}, AreaGuide.pie.options);

		chart.setOption(options);
	};

	this._employment = function (canvas, data) {
		var chart = echarts.init(canvas);

		var employData = [
			{label: 'Administration', value: data.employee_administration},
			{label: 'Agriculture', value: data.employee_agriculture},
			{label: 'Arts', value: data.employee_arts},
			{label: 'Construction', value: data.employee_construction},
			{label: 'Education', value: data.employee_educational},
			{label: 'Management', value: data.employee_management},
			{label: 'Finance', value: data.employee_finance},
			{label: 'Government', value: data.employee_government},
			{label: 'Accommodations', value: data.employee_accommodations},
			{label: 'Healthcare', value: data.employee_healthcare},
			{label: 'Technology', value: data.employee_technology},
			{label: 'Manufacturing', value: data.employee_manufacturing},
			{label: 'Mining', value: data.employee_mining},
			{label: 'Professional', value: data.employee_professional},
			{label: 'Real Estate', value: data.employee_real_estate},
			{label: 'Retail', value: data.employee_retail_trade},
			{label: 'Transportation', value: data.employee_transportation},
			{label: 'Utilities', value: data.employee_utilities},
			{label: 'Wholesale', value: data.employee_wholesale},
			{label: 'Other', value: data.employee_other}
		];

		employData.sort(function (a, b) {
			return b.value - a.value;
		});

		var labels = [], seriesData = [], other = 0;
		for (var i = 0; i < employData.length; i++) {
			if (i < 5) {
				var opacity = 100 - (i * 10);
				labels.push(employData[i].label);
				seriesData.push({value: Math.round(employData[i].value), name: employData[i].label, itemStyle: {color: convertHexToRGBA(AreaGuideData.primaryColor, opacity)}});
			} else {
				other += employData[i].value;
			}
		}
		labels.push('Other');
		seriesData.push({value: Math.round(other), name: 'Other', itemStyle: {color: convertHexToRGBA(AreaGuideData.primaryColor, 50)}});

		var options = jQuery.extend(true, {
			legend: {
				data: labels,
			},
			series: [{
				name: 'Employment',
				data: seriesData,
			}]
		}, AreaGuide.pie.options);

		chart.setOption(options);
	};

	this._education = function (canvas, data) {
		var chart = echarts.init(canvas);

		// Extract raw values from the data object
		var valHS = data.education_high_school || 0;
		var valAS = data.education_associate_degree || 0;
		var valBA = data.education_bachelor_degree || 0;
		var valGR = data.education_graduate_degree || 0;

		// Calculate the total sum of only these 4 selected categories
		var totalSelected = valHS + valAS + valBA + valGR;

		// Helper function to calculate relative percentage (Normalization)
		var getRelativePercentage = function(value) {
			if (totalSelected <= 0) return 0;
			// Calculate what portion of the 'totalSelected' this value represents
			return Math.round((value / totalSelected) * 100);
		};

		// Prepare data points with normalized values
		var allData = [
			{
				value: getRelativePercentage(valHS),
				name: 'High school',
				itemStyle: { color: AreaGuideData.primaryColor }
			},
			{
				value: getRelativePercentage(valAS),
				name: 'Associate',
				itemStyle: { color: convertHexToRGBA(AreaGuideData.primaryColor, 80) }
			},
			{
				value: getRelativePercentage(valBA),
				name: 'Bachelor',
				itemStyle: { color: convertHexToRGBA(AreaGuideData.primaryColor, 60) }
			},
			{
				value: getRelativePercentage(valGR),
				name: 'Graduate',
				itemStyle: { color: convertHexToRGBA(AreaGuideData.primaryColor, 40) }
			}
		];

		// Filter out items with zero or null values to keep the chart clean
		var filteredData = allData.filter(function(item) {
			return item.value > 0;
		});

		// Extract names from filtered data to synchronize the legend
		var filteredLegend = filteredData.map(function(item) {
			return item.name;
		});

		var options = jQuery.extend(true, {
			legend: {
				data: filteredLegend,
			},
			series: [{
				name: 'Education',
				data: filteredData
			}]
		}, AreaGuide.pie.options);

		chart.setOption(options);
	};

	this._commute_mode = function (canvas, data) {
		var chart = echarts.init(canvas);

		var options = jQuery.extend(true, {
			legend: {
				data: ['Car', 'Public transit', 'Foot', 'Bicycle', 'Other']
			},
			series: [{
				name: 'Commute Type',
				data: [
					{value: Math.round(data.commute_mode_drive), name: 'Car', itemStyle: {color: AreaGuideData.primaryColor}},
					{value: Math.round(data.commute_mode_transit), name: 'Public transit', itemStyle: {color: convertHexToRGBA(AreaGuideData.primaryColor, 85)}},
					{value: Math.round(data.commute_mode_foot), name: 'Foot', itemStyle: {color: convertHexToRGBA(AreaGuideData.primaryColor, 70)}},
					{value: Math.round(data.commute_mode_bicycle), name: 'Bicycle', itemStyle: {color: convertHexToRGBA(AreaGuideData.primaryColor, 55)}},
					{value: Math.round(data.commute_mode_other), name: 'Other',itemStyle: {color: convertHexToRGBA(AreaGuideData.primaryColor, 40)}}
				]
			}]
		}, AreaGuide.pie.options);

		chart.setOption(options);
	};

	this._initSlider = function () {
		var $sliderElement = $element.find('.agw-pie__items');
		app.slider = $sliderElement.slick({
			dots: false,
			infinite: false,
			speed: 300,
			slidesToShow: $sliderElement.data('xs'),
			slidesToScroll: 1,
			mobileFirst: true,
			rows: 0,
			prevArrow: $element.find('.agw-pie__btn--prev'),
			nextArrow: $element.find('.agw-pie__btn--next'),
			responsive: [
				{
					breakpoint: 575,
					settings: {
						slidesToShow: $sliderElement.data('sm')
					}
				},
				{
					breakpoint: 767,
					settings: {
						slidesToShow: $sliderElement.data('md')
					}
				},
				{
					breakpoint: 991,
					settings: {
						slidesToShow: $sliderElement.data('lg')
					}
				},
				{
					breakpoint: 1199,
					settings: {
						slidesToShow: $sliderElement.data('xl')
					}
				}
			]
		});

		setTimeout(function () {
			app.slider.on('setPosition', function () {
				var $charts = $element.find('.agw-pie__canvas');
				for (var i = 0; i < $charts.length; i++) {
					var chart = echarts.getInstanceByDom($charts[i]);
					if (typeof chart !== 'undefined') {
						chart.resize();
					}
				}
			});
		}, 2000);
	};

	this._initCharts = function () {
		var $charts = $element.find('.agw-pie__canvas');
		if ($charts.length) {
			AreaGuide.loadCommunityData(function (data) {
				for (var i = 0; i < $charts.length; i++) {
					var chartType = $($charts[i]).data('type');
					if (typeof app['_' + chartType] === 'function') {
						app['_' + chartType]($charts[i], data);
					}
				}
			}, function (errorMessage) {
				$charts.html('<div class="alert alert-danger text-wrap">' + errorMessage + '</div>');
			});
		}
	};

	this._initSlider();
	this._initCharts();

	// mark this widget  as initialized
	$element.addClass('initialized');
};
