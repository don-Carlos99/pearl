var appChartsjs = {
    html: `
    <div class="">
	<div class="page-hero page-container" id="page-hero">
		<div class="padding d-flex">
			<div class="page-title">
				<h2 class="text-md text-highlight">Chartjs</h2>
				<small class="text-muted">Simple HTML5 Charts using the canvas tag</small>
			</div>
			<div class="flex"></div>
			
		</div>
	</div>
	<div class="page-content page-container" id="page-content">
		<div class="padding">
			<div class="row">
				<div class="col-sm-6 col-md-4">
					<div class="card">
						<div class="card-header">Line chart</div>
						<div class="card-body" style="height: 240px">
							<div class="chartjs-size-monitor" style="position: absolute; left: 0px; top: 0px; right: 0px; bottom: 0px; overflow: hidden; pointer-events: none; visibility: hidden; z-index: -1;">
								<div class="chartjs-size-monitor-expand" style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;">
									<div style="position:absolute;width:1000000px;height:1000000px;left:0;top:0"></div>
								</div>
								<div class="chartjs-size-monitor-shrink" style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;">
									<div style="position:absolute;width:200%;height:200%;left:0; top:0"></div>
								</div>
							</div>
							<canvas id="chart-line" width="296" height="200" class="chartjs-render-monitor" style="display: block; width: 296px; height: 200px;"></canvas>
						</div>
					</div>
				</div>
				<div class="col-sm-6 col-md-4">
					<div class="card">
						<div class="card-header">Bar chart</div>
						<div class="card-body" style="height: 240px">
							<div class="chartjs-size-monitor" style="position: absolute; left: 0px; top: 0px; right: 0px; bottom: 0px; overflow: hidden; pointer-events: none; visibility: hidden; z-index: -1;">
								<div class="chartjs-size-monitor-expand" style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;">
									<div style="position:absolute;width:1000000px;height:1000000px;left:0;top:0"></div>
								</div>
								<div class="chartjs-size-monitor-shrink" style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;">
									<div style="position:absolute;width:200%;height:200%;left:0; top:0"></div>
								</div>
							</div>
							<canvas id="chart-bar" width="296" height="200" class="chartjs-render-monitor" style="display: block; width: 296px; height: 200px;"></canvas>
						</div>
					</div>
				</div>
				<div class="col-sm-6 col-md-4">
					<div class="card">
						<div class="card-header">Radar chart</div>
						<div class="card-body" style="height: 240px">
							<div class="chartjs-size-monitor" style="position: absolute; left: 0px; top: 0px; right: 0px; bottom: 0px; overflow: hidden; pointer-events: none; visibility: hidden; z-index: -1;">
								<div class="chartjs-size-monitor-expand" style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;">
									<div style="position:absolute;width:1000000px;height:1000000px;left:0;top:0"></div>
								</div>
								<div class="chartjs-size-monitor-shrink" style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;">
									<div style="position:absolute;width:200%;height:200%;left:0; top:0"></div>
								</div>
							</div>
							<canvas id="chart-radar" width="296" height="200" class="chartjs-render-monitor" style="display: block; width: 296px; height: 200px;"></canvas>
						</div>
					</div>
				</div>
				<div class="col-sm-6 col-md-4">
					<div class="card">
						<div class="card-header">Polar Area chart</div>
						<div class="card-body" style="height: 240px">
							<div class="chartjs-size-monitor" style="position: absolute; left: 0px; top: 0px; right: 0px; bottom: 0px; overflow: hidden; pointer-events: none; visibility: hidden; z-index: -1;">
								<div class="chartjs-size-monitor-expand" style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;">
									<div style="position:absolute;width:1000000px;height:1000000px;left:0;top:0"></div>
								</div>
								<div class="chartjs-size-monitor-shrink" style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;">
									<div style="position:absolute;width:200%;height:200%;left:0; top:0"></div>
								</div>
							</div>
							<canvas id="chart-polar" width="296" height="200" class="chartjs-render-monitor" style="display: block; width: 296px; height: 200px;"></canvas>
						</div>
					</div>
				</div>
				<div class="col-sm-6 col-md-4">
					<div class="card">
						<div class="card-header">Pie chart</div>
						<div class="card-body" style="height: 240px">
							<div class="chartjs-size-monitor" style="position: absolute; left: 0px; top: 0px; right: 0px; bottom: 0px; overflow: hidden; pointer-events: none; visibility: hidden; z-index: -1;">
								<div class="chartjs-size-monitor-expand" style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;">
									<div style="position:absolute;width:1000000px;height:1000000px;left:0;top:0"></div>
								</div>
								<div class="chartjs-size-monitor-shrink" style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;">
									<div style="position:absolute;width:200%;height:200%;left:0; top:0"></div>
								</div>
							</div>
							<canvas id="chart-pie" width="296" height="200" class="chartjs-render-monitor" style="display: block; width: 296px; height: 200px;"></canvas>
						</div>
					</div>
				</div>
				<div class="col-sm-6 col-md-4">
					<div class="card">
						<div class="card-header">Doughnut chart</div>
						<div class="card-body" style="height: 240px">
							<div class="chartjs-size-monitor" style="position: absolute; left: 0px; top: 0px; right: 0px; bottom: 0px; overflow: hidden; pointer-events: none; visibility: hidden; z-index: -1;">
								<div class="chartjs-size-monitor-expand" style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;">
									<div style="position:absolute;width:1000000px;height:1000000px;left:0;top:0"></div>
								</div>
								<div class="chartjs-size-monitor-shrink" style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;">
									<div style="position:absolute;width:200%;height:200%;left:0; top:0"></div>
								</div>
							</div>
							<canvas id="chart-doughnut" width="296" height="200" class="chartjs-render-monitor" style="display: block; width: 296px; height: 200px;"></canvas>
						</div>
					</div>
				</div>
				<div class="col-sm-6 col-md-4">
					<div class="card">
						<div class="card-header">Bubble chart</div>
						<div class="card-body" style="height: 240px">
							<div class="chartjs-size-monitor" style="position: absolute; left: 0px; top: 0px; right: 0px; bottom: 0px; overflow: hidden; pointer-events: none; visibility: hidden; z-index: -1;">
								<div class="chartjs-size-monitor-expand" style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;">
									<div style="position:absolute;width:1000000px;height:1000000px;left:0;top:0"></div>
								</div>
								<div class="chartjs-size-monitor-shrink" style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;">
									<div style="position:absolute;width:200%;height:200%;left:0; top:0"></div>
								</div>
							</div>
							<canvas id="chart-bubble" width="296" height="200" class="chartjs-render-monitor" style="display: block; width: 296px; height: 200px;"></canvas>
						</div>
					</div>
				</div>
				<div class="col-sm-6 col-md-4">
					<div class="card">
						<div class="card-header">Line line chart</div>
						<div class="card-body" style="height: 240px">
							<div class="chartjs-size-monitor" style="position: absolute; left: 0px; top: 0px; right: 0px; bottom: 0px; overflow: hidden; pointer-events: none; visibility: hidden; z-index: -1;">
								<div class="chartjs-size-monitor-expand" style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;">
									<div style="position:absolute;width:1000000px;height:1000000px;left:0;top:0"></div>
								</div>
								<div class="chartjs-size-monitor-shrink" style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;">
									<div style="position:absolute;width:200%;height:200%;left:0; top:0"></div>
								</div>
							</div>
							<canvas id="chart-line-line" width="296" height="200" class="chartjs-render-monitor" style="display: block; width: 296px; height: 200px;"></canvas>
						</div>
					</div>
				</div>
				<div class="col-sm-6 col-md-4">
					<div class="card">
						<div class="card-header">Bar line chart</div>
						<div class="card-body" style="height: 240px">
							<div class="chartjs-size-monitor" style="position: absolute; left: 0px; top: 0px; right: 0px; bottom: 0px; overflow: hidden; pointer-events: none; visibility: hidden; z-index: -1;">
								<div class="chartjs-size-monitor-expand" style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;">
									<div style="position:absolute;width:1000000px;height:1000000px;left:0;top:0"></div>
								</div>
								<div class="chartjs-size-monitor-shrink" style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;">
									<div style="position:absolute;width:200%;height:200%;left:0; top:0"></div>
								</div>
							</div>
							<canvas id="chart-line-bar" width="296" height="200" class="chartjs-render-monitor" style="display: block; width: 296px; height: 200px;"></canvas>
						</div>
					</div>
				</div>
				<div class="col-sm-6 col-md-4">
					<div class="card">
						<div class="card-header">Bar bar chart</div>
						<div class="card-body" style="height: 240px">
							<div class="chartjs-size-monitor" style="position: absolute; left: 0px; top: 0px; right: 0px; bottom: 0px; overflow: hidden; pointer-events: none; visibility: hidden; z-index: -1;">
								<div class="chartjs-size-monitor-expand" style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;">
									<div style="position:absolute;width:1000000px;height:1000000px;left:0;top:0"></div>
								</div>
								<div class="chartjs-size-monitor-shrink" style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;">
									<div style="position:absolute;width:200%;height:200%;left:0; top:0"></div>
								</div>
							</div>
							<canvas id="chart-bar-bar" width="296" height="200" class="chartjs-render-monitor" style="display: block; width: 296px; height: 200px;"></canvas>
						</div>
					</div>
				</div>
				<div class="col-sm-6 col-md-4">
					<div class="card">
						<div class="card-header">Bar bar chart</div>
						<div class="card-body" style="height: 240px">
							<div class="chartjs-size-monitor" style="position: absolute; left: 0px; top: 0px; right: 0px; bottom: 0px; overflow: hidden; pointer-events: none; visibility: hidden; z-index: -1;">
								<div class="chartjs-size-monitor-expand" style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;">
									<div style="position:absolute;width:1000000px;height:1000000px;left:0;top:0"></div>
								</div>
								<div class="chartjs-size-monitor-shrink" style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;">
									<div style="position:absolute;width:200%;height:200%;left:0; top:0"></div>
								</div>
							</div>
							<canvas id="chart-bar-bar-h" width="296" height="200" class="chartjs-render-monitor" style="display: block; width: 296px; height: 200px;"></canvas>
						</div>
					</div>
				</div>
				<div class="col-sm-6 col-md-4">
					<div class="card">
						<div class="card-header">Line line chart</div>
						<div class="card-body" style="height: 240px">
							<div class="chartjs-size-monitor" style="position: absolute; left: 0px; top: 0px; right: 0px; bottom: 0px; overflow: hidden; pointer-events: none; visibility: hidden; z-index: -1;">
								<div class="chartjs-size-monitor-expand" style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;">
									<div style="position:absolute;width:1000000px;height:1000000px;left:0;top:0"></div>
								</div>
								<div class="chartjs-size-monitor-shrink" style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;">
									<div style="position:absolute;width:200%;height:200%;left:0; top:0"></div>
								</div>
							</div>
							<canvas id="chart-line-line-line" width="296" height="200" class="chartjs-render-monitor" style="display: block; width: 296px; height: 200px;"></canvas>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
    `,
    init: function() {
        document.getElementById('content').innerHTML = this.html;
        this.lineChart();
    },
    lineChart: function() {
        new Chart(document.getElementById("chart-line-line-line"), {
            type: 'line',
            data: {
                labels: [1500, 1600, 1700, 1750, 1800, 1850, 1900, 1950, 1999, 2050],
                datasets: [{
                    data: [86, 114, 106, 106, 107, 111, 133, 221, 783, 2478],
                    label: "Africa",
                    borderColor: "#3e95cd",
                    fill: false
                }, {
                    data: [282, 350, 411, 502, 635, 809, 947, 1402, 3700, 5267],
                    label: "Asia",
                    borderColor: "#8e5ea2",
                    fill: false
                }, {
                    data: [168, 170, 178, 190, 203, 276, 408, 547, 675, 734],
                    label: "Europe",
                    borderColor: "#3cba9f",
                    fill: false
                }, {
                    data: [40, 20, 10, 16, 24, 38, 74, 167, 508, 784],
                    label: "Latin America",
                    borderColor: "#e8c3b9",
                    fill: false
                }, {
                    data: [6, 3, 2, 2, 7, 26, 82, 172, 312, 433],
                    label: "North America",
                    borderColor: "#c45850",
                    fill: false
                }]
            },
            options: {
                title: {
                    display: true,
                    text: 'World population per region (in millions)'
                }
            }
        });
    },
    barChart: function() {},
    radarChart: function() {},
    polarAreaChart: function() {},
    pieChart: function() {},
    doughnutChart: function() {},
    bubbleChart: function() {},
    lineLineChart: function() {},
    barLineChart: function() {},
    barBarChart: function() {},
    lineLineChart2: function() {},
}