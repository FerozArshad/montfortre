/* global AreaGuide, AreaGuideData, echarts */

// Find all not initialized graph widgets and init them
AreaGuide.graph = function ($) {
	$('.agw-graph:not(.initialized)').each(function () {
		new AreaGuide._graph($, $(this));
	});
};

AreaGuide.graph.options = {
	animation: ! AreaGuideData.isEditorPreview,
	yAxis: {
		type: 'category',
		splitLine: { show: false },
		axisLine: { show: false },
		axisTick: { show: false },
		axisLabel: {
			textStyle: { color: AreaGuideData.bodyFontColor, fontSize: 16 },
			align: 'left'
		},
		data: []
	},
	xAxis: { show: false },
	series: []
};

// Separate function to init each graph widget
AreaGuide._graph = function ($, $element) {
	var app = this;

	var convertHexToRGBA = function (hexCode, opacity) {
		return 'rgba('
			+ parseInt(hexCode.substring(1, 3), 16) + ','
			+ parseInt(hexCode.substring(3, 5), 16) + ','
			+ parseInt(hexCode.substring(5, 7), 16) + ','
			+ opacity / 100 + ')';
	};

	this._population = function (canvas, data) {
		var chart = echarts.init(canvas);

		var option = {
			grid: {left: 80, top: 15, right: 0, bottom: 10},
			xAxis: {
				type: 'category',
				data: ['1990', '2000', '2010', 'Current'],
				axisLine: {show: false},
				axisTick: {show: false},
				axisLabel: {margin: 80, textStyle: {color: AreaGuideData.bodyFontColor, fontSize: 12}},
				splitLine: {
					show: true,
					lineStyle: {
						type: 'line',
						color: '#F3F3F3'
					}
				}
			},
			yAxis: {
				min: 0,
				type: 'value',
				axisLine: {show: false},
				axisTick: {show: false},
				axisLabel: {margin: 80, textStyle: {color: AreaGuideData.bodyFontColor, fontSize: 12}, align: 'left'},
				splitLine: {
					lineStyle: {width: 1, color: "#F3F3F3"}
				},
				scale: true,
				splitNumber: 3,
			},
			tooltip: {
				trigger: 'axis',
				backgroundColor: '#ffffff',
				padding: [16, 24],
				borderColor: '#ccc',
				borderWidth: 1,
				extraCssText: 'border-radius: 4px;',
				textStyle: {color: '#777'},
				formatter: function (params) {
					return '<div style="font-size: .9em; text-align:center;">' + params[0].name + '</div>' + '<div style="font-size:1.1em; color: #222;">' + params[0].value.toLocaleString() + '</div>';
				},
				axisPointer: {
					snap: 'true',
					type: 'none',
					animation: false
				}
			},
			series: [{
				data: [data.population_1990, data.population_2000, data.population_2010, data.population_current],
				type: 'line',
				lineStyle: {
					width: 5,
					color: convertHexToRGBA(AreaGuideData.primaryColor, 50)
				},
				itemStyle: {
					color: AreaGuideData.primaryColor,
				},
				symbolSize: 7,
				symbol: 'circle'
			}]
		};


		chart.setOption(option);

		$(window).on('resize', function () {
			setTimeout(function () {
				chart.resize();
			}, 200);
		});
	};

	this._age_distribution = function (canvas, data) {
		var chart = echarts.init(canvas);

		var options = jQuery.extend(true, {
			grid: {left: 110, top: 0, right: 60, bottom: 0},
			yAxis: {
				data: ['85+','75-84','65-74', '55-64','45-54',
					'35-44','25-34','15-24','10-14','5-9', '0-4'],
				axisLabel: { margin: 90 }
			},
			series: [{
				type: 'bar',
				itemStyle: {barBorderRadius: 3,color: AreaGuideData.primaryColor},
				barWidth: 30,
				cursor: "auto",
				name: 'Population By Age',
				label: {
					show: true,
					position: 'right',
					distance: 15,
					color: AreaGuideData.bodyFontColor,
					fontSize: 16,
					formatter: function (name) {
						return name.value.toLocaleString() + '%';
					}
				},
				data: [
					{value: data.population_age_85_plus},
					{value: data.population_age_75_to_84},
					{value: data.population_age_65_to_74},
					{value: data.population_age_55_to_64},
					{value: data.population_age_45_to_54},
					{value: data.population_age_35_to_44},
					{value: data.population_age_25_to_34},
					{value: data.population_age_15_to_24},
					{value: data.population_age_10_to_14},
					{value: data.population_age_5_to_9},
					{value: data.population_age_0_to_4}
				]
			}]
		}, AreaGuide.graph.options);

		chart.setOption(options);

		$(window).on('resize', function () {
			setTimeout(function () {
				chart.resize();
			}, 200);
		});
	};

	this._household = function (canvas, data) {
		var chart = echarts.init(canvas);

		var options = jQuery.extend(true, {
			grid: { left: 130, top: 0, right: 150, bottom: 0 },
			yAxis: {
				data: [
					'200k +', '150 to 200k', '125 to 150k', '100 to 125k', '75 to 100k',
					'50 to 75k', '35 to 50k', '25 to 35k', '15 to 25k', '0 to 15k'
				],
				axisLabel: { margin: 130 }
			},
			series: [
				{
					type: 'bar',
					barWidth: 10,
					barGap: '-100%',
					itemStyle: {
						color: 'rgba(33, 34, 36, 0.05)',
						borderRadius: [10, 10, 10, 10]
					},
					label: {
						show: true,
						position: 'insideRight',
						formatter: function(params) {
							var valueIndex = params.dataIndex,
								seriesData = chart.getOption().series[1].data,
								actualValue = typeof seriesData[valueIndex] === 'object' ? seriesData[valueIndex].value : seriesData[valueIndex];
							return actualValue.toLocaleString() + '%';
						},
						color: AreaGuideData.bodyFontColor,
						fontSize: 16,
						offset: [ 150, 0 ]
					},
					silent: true,
					data: [ 100, 100, 100, 100, 100, 100, 100, 100, 100, 100 ],
				},
				{
					type: 'bar',
					name: 'Name',
					itemStyle: {color: AreaGuideData.primaryColor, borderRadius: [10, 10, 10, 10] },
					barWidth: 10,
					cursor: "auto",
					data: [
						{ value: data.household_income_200_plus },
						{ value: data.household_income_150_to_200 },
						{ value: data.household_income_125_to_150 },
						{ value: data.household_income_100_to_125 },
						{ value: data.household_income_75_to_100 },
						{ value: data.household_income_50_to_75 },
						{ value: data.household_income_35_to_50 },
						{ value: data.household_income_25_to_35 },
						{ value: data.household_income_15_to_25 },
						{ value: data.household_income_0_to_15 }
					]
				}
			]
		}, AreaGuide.graph.options);

		$element.find('[data-value="household_income_average"]').text(
			Math.round(data.household_income_average/1000) + 'k'
		);

		chart.setOption(options);

		$(window).on('resize', function () {
			setTimeout(function () {
				chart.resize();
			}, 200);
		});
	};

	this._cost = function (canvas, data) {
		var chart = echarts.init(canvas);

		var yAxisLabels = [
			'Utilities Cost VS National AVG',
			'Entertainment Cost VS National AVG',
			'Housing Cost VS National AVG',
			'Overall Cost VS National AVG'
		];

		var yAxisLabelsMobile = [
			'Utilities Cost',
			'Entertainment Cost',
			'Housing Cost',
			'Overall Cost'
		];

		var seriesData = [
			{itemStyle: {color: AreaGuideData.primaryColor}, value: data.expense_utilities - 100},
			{itemStyle: {color: AreaGuideData.primaryColor}, value: data.expense_entertainment - 100},
			{itemStyle: {color: AreaGuideData.primaryColor}, value: data.expense_household_operations - 100},
			{itemStyle: {color: AreaGuideData.primaryColor}, value: data.expense_total -100}
		];

		// Add crime rate if enabled in options
		if (!AreaGuideData.hideCrime) {
			yAxisLabels.unshift('Crime Rate VS National AVG');
			yAxisLabelsMobile.unshift('Crime Rate');
			seriesData.unshift({
				itemStyle: {color: AreaGuideData.primaryColor}, value: data.crime_total - 100
			})
		}

		// Add label position depends of value
		var max = 0,
			min = 0;
		for (var i = 0; i<seriesData.length; i++) {
			seriesData[i].label = {position: seriesData[i].value > 0 ? 'left' : 'right'};
			if (seriesData[i].value > max) {
				max = seriesData[i].value;
			}
			if (seriesData[i].value < min) {
				min = seriesData[i].value;
			}
		}
		if (min > -30) {
			min = -30;
		}
		if (max < 30) {
			max = 30;
		}

		var options = jQuery.extend(true, {
			grid: {left: '330', top: 0, right: 0, bottom: 0},
			yAxis: {
				data: yAxisLabels,
				axisLabel: {margin: 330}
			},
			xAxis: {
				type: 'value',
				min: min,
				max: max
			},
			series: [{
				barCategoryGap: '15px',
				itemStyle: {
					color: AreaGuideData.primaryColor,
					barBorderRadius: [100, 100, 100, 100]
				},
				barWidth: 30,
				cursor: "auto",
				name: 'Cost',
				type: 'bar',
				label: {
					show: true,
					position: 'right',
					distance: 15,
					color: AreaGuideData.bodyFontColor,
					fontSize: 16,
					formatter: function (name) {
						return name.value > 0 ? '+' + Math.round(name.value) + '% higher' : Math.round(name.value) + '% lower';
					}
				},
				data: seriesData
			}],
			media: [
				{
					query: {
						maxWidth: 575
					},
					option: {
						grid: {left: 0, top: 0, right: 0, bottom: 0},
						yAxis: {
							show: false,
							data: yAxisLabelsMobile
						},
						series: [{
							label: {
								formatter: function (name) {
									return name.name + '\n' + (name.value > 0 ? '+' + Math.round(name.value) + '% higher' : Math.round(name.value) + '% lower');
								}
							}
						}]
					}
				}
			]
		}, AreaGuide.graph.options);

		chart.setOption(options);

		$(window).on('resize', function () {
			setTimeout(function () {
				chart.resize();
			}, 200);
		});
	};

	this._initCharts = function() {
		var $charts = $element.find('.agw-graph__canvas');
		if ($charts.length) {
			AreaGuide.loadCommunityData(function (data) {
				for (var i = 0; i < $charts.length; i++) {
					var chartType = $($charts[i]).data('type');
					app['_' + chartType]($charts[i], data);
				}
			}, function (errorMessage) {
				$charts.html('<div class="alert alert-danger text-wrap">' + errorMessage + '</div>');
			});
		}
	};

	this._initCategoriesDropdown = function() {
		$element.find('.ag-dropdown').on('ag.dropdown.selected', function(e){
			var $selected = e.relatedTarget,
				$currentTab = $element.find('[data-tab="' + $selected.data('for') + '"]'),
				chart = echarts.getInstanceByDom($currentTab.find('.agw-graph__canvas')[0]);
			$element.find('.agw-graph__tab').addClass('d-none');
			$currentTab.removeClass('d-none');
			chart.resize();
		});
	};

	this._initCharts();
	this._initCategoriesDropdown();

	// mark this widget  as initialized
	$element.addClass('initialized');
};
