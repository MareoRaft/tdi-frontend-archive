import React from 'react'
import PropTypes from 'prop-types'

import * as am4core from '@amcharts/amcharts4/core'
import * as am4charts from '@amcharts/amcharts4/charts'
import am4themes_animated from '@amcharts/amcharts4/themes/animated'

// Set theme
am4core.useTheme(am4themes_animated)




class Chart extends React.Component {
	componentDidMount() {
		const chart = am4core.create('chartdiv', am4charts.XYChart)
		const data = []
		let value = 50
		for (let i = 0; i < 300; i++) {
			let date = new Date()
			date.setHours(0, 0, 0, 0)
			date.setDate(i)
			value -= Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10)
			data.push({date, value})
		}
		chart.data = data

		let dateAxis = chart.xAxes.push(new am4charts.DateAxis())
		dateAxis.renderer.minGridDistance = 60

		let valueAxis = chart.yAxes.push(new am4charts.ValueAxis())

		let series = chart.series.push(new am4charts.LineSeries())
		series.dataFields.valueY = 'value'
		series.dataFields.dateX = 'date'
		series.tooltipText = '{value}'
		series.tooltip.pointerOrientation = 'vertical'

		chart.cursor = new am4charts.XYCursor()
		chart.cursor.snapToSeries = series
		chart.cursor.xAxis = dateAxis

		chart.scrollbarX = new am4core.Scrollbar()

		this.chart = chart
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

Chart.propTypes = {
	onClick: PropTypes.func,
	char: PropTypes.string.isRequired,
};

export default Chart;
