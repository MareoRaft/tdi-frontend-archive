import React from 'react'
import * as am4core from '@amcharts/amcharts4/core'
import * as am4charts from '@amcharts/amcharts4/charts'
import am4themes_animated from '@amcharts/amcharts4/themes/animated'

import data from './data'

// See for chart usage:
// https://www.amcharts.com/docs/v4/getting-started/integrations/using-react/

// Set theme
am4core.useTheme(am4themes_animated)



class Component extends React.Component {
	componentDidMount() {
		const chart = am4core.create('chartdiv', am4charts.RadarChart)
		// for initial fade-in
		chart.hiddenState.properties.opacity = 0
		chart.data = data
		chart.colors.step = 4

		const categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis())
		categoryAxis.dataFields.category = 'category'
		categoryAxis.renderer.labels.template.location = 0.5
		categoryAxis.renderer.labels.template.horizontalCenter = 'right'
		categoryAxis.renderer.grid.template.location = 0
		categoryAxis.renderer.tooltipLocation = 0.5
		categoryAxis.renderer.grid.template.strokeOpacity = 0.07
		categoryAxis.renderer.axisFills.template.disabled = true
		categoryAxis.interactionsEnabled = false
		categoryAxis.renderer.minGridDistance = 10
		categoryAxis.renderer.inversed = true

		const valueAxis = chart.xAxes.push(new am4charts.ValueAxis())
		valueAxis.tooltip.disabled = true;
		valueAxis.renderer.labels.template.horizontalCenter = "left"
		valueAxis.min = 0
		// valueAxis.max = // automatic
		valueAxis.strictMinMax = true
		valueAxis.renderer.maxLabelPosition = 0.99
		valueAxis.renderer.minGridDistance = 100
		valueAxis.renderer.grid.template.strokeOpacity = 0.07
		valueAxis.renderer.axisFills.template.disabled = true
		valueAxis.interactionsEnabled = false

		const series1 = chart.series.push(new am4charts.RadarColumnSeries())
		series1.columns.template.tooltipText = "{categoryY.category}: {valueX.value}"
		series1.name = 'Series 1'
		series1.dataFields.categoryY = 'category'
		series1.dataFields.valueX = 'value1'
		series1.stacked = true

		chart.seriesContainer.zIndex = -1

		chart.scrollbarX = new am4core.Scrollbar()
		chart.scrollbarX.exportable = false
		chart.scrollbarY = new am4core.Scrollbar()
		chart.scrollbarY.exportable = false

		chart.cursor = new am4charts.RadarCursor()
		chart.cursor.lineY.disabled = true

		this.chart = chart
	}
	componentDidUpdate(oldProps) {
		console.log('did update')
		if (oldProps.data !== this.props.data) {
			console.log('new data')
			this.chart.data = this.props.data
		}
	}
	componentWillUnmount() {
		if (this.chart) {
			this.chart.dispose()
		}
	}
	render() {
		return (
			<div
				id='chartdiv'
				style={{width: '100%', height: '500px'}}
				onClick={this.props.onClick}
			>
			</div>
		);
	}
}

export default Component;
