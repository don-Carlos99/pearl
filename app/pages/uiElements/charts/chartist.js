var appChartist = {
    html: `
    <div class="">
	<div class="page-hero page-container" id="page-hero">
		<div class="padding d-flex">
			<div class="page-title">
				<h2 class="text-md text-highlight">Chartist</h2>
				<small class="text-muted">Simple responsive charts</small>
			</div>
			<div class="flex"></div>
			
		</div>
	</div>
	<div class="page-content page-container" id="page-content">
		<div class="padding">
			<div class="row">
				<div class="col-md-6">
					<div class="card">
						<div class="card-header">Line chart</div>
						<div class="card-body">
							<div id="chartist-line" class="pos-rlt" style="height: 240px">
								<div class="chartist-tooltip"></div>
								<svg
									xmlns:ct="http://gionkunz.github.com/chartist-js/ct" width="100%" height="100%" class="ct-chart-line" style="width: 100%; height: 100%;">
									<g class="ct-grids">
										<line x1="50" x2="50" y1="15" y2="205" class="ct-grid ct-horizontal" opacity="1"></line>
										<line x1="147.375" x2="147.375" y1="15" y2="205" class="ct-grid ct-horizontal" opacity="1"></line>
										<line x1="244.75" x2="244.75" y1="15" y2="205" class="ct-grid ct-horizontal" opacity="1"></line>
										<line x1="342.125" x2="342.125" y1="15" y2="205" class="ct-grid ct-horizontal" opacity="1"></line>
										<line x1="439.5" x2="439.5" y1="15" y2="205" class="ct-grid ct-horizontal" opacity="1"></line>
										<line y1="205" y2="205" x1="50" x2="439.5" class="ct-grid ct-vertical" opacity="1"></line>
										<line y1="167" y2="167" x1="50" x2="439.5" class="ct-grid ct-vertical" opacity="1"></line>
										<line y1="129" y2="129" x1="50" x2="439.5" class="ct-grid ct-vertical" opacity="1"></line>
										<line y1="91" y2="91" x1="50" x2="439.5" class="ct-grid ct-vertical" opacity="1"></line>
										<line y1="53" y2="53" x1="50" x2="439.5" class="ct-grid ct-vertical" opacity="1"></line>
										<line y1="15" y2="15" x1="50" x2="439.5" class="ct-grid ct-vertical" opacity="1"></line>
									</g>
									<g>
										<g ct:meta="Google" class="ct-series ct-series-a ct-stroke-3">
											<path d="M50,22.6C82.458,37.8,114.917,56.04,147.375,68.2C179.833,80.36,212.292,98.6,244.75,98.6C277.208,98.6,309.667,83.4,342.125,83.4C374.583,83.4,407.042,113.8,439.5,129" class="ct-line" opacity="1"></path>
											<line x1="50" y1="22.599999999999994" x2="50" y2="22.599999999999994" class="ct-point" ct:value="12" opacity="1"></line>
											<line x1="147.375" y1="68.19999999999999" x2="147.375" y2="68.19999999999999" class="ct-point" ct:value="9" opacity="1"></line>
											<line x1="244.75" y1="98.6" x2="244.75" y2="98.6" class="ct-point" ct:value="7" opacity="1"></line>
											<line x1="342.125" y1="83.4" x2="342.125" y2="83.4" class="ct-point" ct:value="8" opacity="1"></line>
											<line x1="439.5" y1="129" x2="439.5" y2="129" class="ct-point" ct:value="5" opacity="1"></line>
										</g>
										<g ct:meta="Facebook" class="ct-series ct-series-e ct-stroke-4">
											<path d="M50,159.4C82.458,167,114.917,182.2,147.375,182.2C179.833,182.2,212.292,163.059,244.75,151.8C277.208,140.541,309.667,113.8,342.125,113.8C374.583,113.8,407.042,144.2,439.5,159.4" class="ct-line" opacity="1"></path>
											<line x1="50" y1="159.4" x2="50" y2="159.4" class="ct-point" ct:value="3" opacity="1"></line>
											<line x1="147.375" y1="182.2" x2="147.375" y2="182.2" class="ct-point" ct:value="1.5" opacity="1"></line>
											<line x1="244.75" y1="151.8" x2="244.75" y2="151.8" class="ct-point" ct:value="3.5" opacity="1"></line>
											<line x1="342.125" y1="113.8" x2="342.125" y2="113.8" class="ct-point" ct:value="6" opacity="1"></line>
											<line x1="439.5" y1="159.4" x2="439.5" y2="159.4" class="ct-point" ct:value="3" opacity="1"></line>
										</g>
										<g ct:meta="Twitter" class="ct-series ct-series-h ct-stroke-5">
											<path d="M50,189.8C82.458,179.667,114.917,166.156,147.375,159.4C179.833,152.644,212.292,149.267,244.75,144.2C277.208,139.133,309.667,134.067,342.125,129C374.583,123.933,407.042,118.867,439.5,113.8" class="ct-line" opacity="1"></path>
											<line x1="50" y1="189.8" x2="50" y2="189.8" class="ct-point" ct:value="1" opacity="1"></line>
											<line x1="147.375" y1="159.4" x2="147.375" y2="159.4" class="ct-point" ct:value="3" opacity="1"></line>
											<line x1="244.75" y1="144.2" x2="244.75" y2="144.2" class="ct-point" ct:value="4" opacity="1"></line>
											<line x1="342.125" y1="129" x2="342.125" y2="129" class="ct-point" ct:value="5" opacity="1"></line>
											<line x1="439.5" y1="113.8" x2="439.5" y2="113.8" class="ct-point" ct:value="6" opacity="1"></line>
										</g>
									</g>
									<g class="ct-labels">
										<foreignObject style="overflow: visible;" x="50" y="210" width="97.375" height="20">
											<span class="ct-label ct-horizontal ct-end"
												xmlns="http://www.w3.org/2000/xmlns/" style="width: 97px; height: 20px;">Monday
											</span>
										</foreignObject>
										<foreignObject style="overflow: visible;" x="147.375" y="210" width="97.375" height="20">
											<span class="ct-label ct-horizontal ct-end"
												xmlns="http://www.w3.org/2000/xmlns/" style="width: 97px; height: 20px;">Tuesday
											</span>
										</foreignObject>
										<foreignObject style="overflow: visible;" x="244.75" y="210" width="97.375" height="20">
											<span class="ct-label ct-horizontal ct-end"
												xmlns="http://www.w3.org/2000/xmlns/" style="width: 97px; height: 20px;">Wednesday
											</span>
										</foreignObject>
										<foreignObject style="overflow: visible;" x="342.125" y="210" width="97.375" height="20">
											<span class="ct-label ct-horizontal ct-end"
												xmlns="http://www.w3.org/2000/xmlns/" style="width: 97px; height: 20px;">Thursday
											</span>
										</foreignObject>
										<foreignObject style="overflow: visible;" x="439.5" y="210" width="30" height="20">
											<span class="ct-label ct-horizontal ct-end"
												xmlns="http://www.w3.org/2000/xmlns/" style="width: 30px; height: 20px;">Friday
											</span>
										</foreignObject>
										<foreignObject style="overflow: visible;" y="167" x="10" height="38" width="30">
											<span class="ct-label ct-vertical ct-start"
												xmlns="http://www.w3.org/2000/xmlns/" style="height: 38px; width: 30px;">0
											</span>
										</foreignObject>
										<foreignObject style="overflow: visible;" y="129" x="10" height="38" width="30">
											<span class="ct-label ct-vertical ct-start"
												xmlns="http://www.w3.org/2000/xmlns/" style="height: 38px; width: 30px;">2.5
											</span>
										</foreignObject>
										<foreignObject style="overflow: visible;" y="91" x="10" height="38" width="30">
											<span class="ct-label ct-vertical ct-start"
												xmlns="http://www.w3.org/2000/xmlns/" style="height: 38px; width: 30px;">5
											</span>
										</foreignObject>
										<foreignObject style="overflow: visible;" y="53" x="10" height="38" width="30">
											<span class="ct-label ct-vertical ct-start"
												xmlns="http://www.w3.org/2000/xmlns/" style="height: 38px; width: 30px;">7.5
											</span>
										</foreignObject>
										<foreignObject style="overflow: visible;" y="15" x="10" height="38" width="30">
											<span class="ct-label ct-vertical ct-start"
												xmlns="http://www.w3.org/2000/xmlns/" style="height: 38px; width: 30px;">10
											</span>
										</foreignObject>
										<foreignObject style="overflow: visible;" y="-15" x="10" height="30" width="30">
											<span class="ct-label ct-vertical ct-start"
												xmlns="http://www.w3.org/2000/xmlns/" style="height: 30px; width: 30px;">12.5
											</span>
										</foreignObject>
									</g>
								</svg>
							</div>
						</div>
					</div>
				</div>
				<div class="col-md-6">
					<div class="card">
						<div class="card-header">Area chart</div>
						<div class="card-body">
							<div id="chartist-line-area" class="pos-rlt ct-point-hover" style="height: 240px">
								<div class="chartist-tooltip"></div>
								<svg
									xmlns:ct="http://gionkunz.github.com/chartist-js/ct" width="100%" height="100%" class="ct-chart-line" style="width: 100%; height: 100%;">
									<g class="ct-grids">
										<line y1="205" y2="205" x1="50" x2="464.5" class="ct-grid ct-vertical"></line>
										<line y1="173.33333333333334" y2="173.33333333333334" x1="50" x2="464.5" class="ct-grid ct-vertical"></line>
										<line y1="141.66666666666666" y2="141.66666666666666" x1="50" x2="464.5" class="ct-grid ct-vertical"></line>
										<line y1="110" y2="110" x1="50" x2="464.5" class="ct-grid ct-vertical"></line>
										<line y1="78.33333333333333" y2="78.33333333333333" x1="50" x2="464.5" class="ct-grid ct-vertical"></line>
										<line y1="46.66666666666666" y2="46.66666666666666" x1="50" x2="464.5" class="ct-grid ct-vertical"></line>
										<line y1="15" y2="15" x1="50" x2="464.5" class="ct-grid ct-vertical"></line>
									</g>
									<g>
										<g ct:meta="Google" class="ct-series ct-series-a">
											<path d="M 50 110 L 50 78.333 C 79.607 78.333 79.607 46.667 109.214 46.667 C 138.821 46.667 138.821 15 168.429 15 C 198.036 15 198.036 78.333 227.643 78.333 C 257.25 78.333 257.25 173.333 286.857 173.333 C 316.464 173.333 316.464 110 346.071 110 C 375.679 110 375.679 78.333 405.286 78.333 C 434.893 78.333 434.893 110 464.5 110 L 464.5 110 Z" class="ct-area"></path>
											<line x1="50" y1="78.33333333333333" x2="50" y2="78.33333333333333" class="ct-point" ct:value="1" opacity="1"></line>
											<line x1="109.214" y1="46.66666666666666" x2="109.214" y2="46.66666666666666" class="ct-point" ct:value="2" opacity="1"></line>
											<line x1="168.429" y1="15" x2="168.429" y2="15" class="ct-point" ct:value="3" opacity="1"></line>
											<line x1="227.643" y1="78.33333333333333" x2="227.643" y2="78.33333333333333" class="ct-point" ct:value="1" opacity="1"></line>
											<line x1="286.857" y1="173.33333333333334" x2="286.857" y2="173.33333333333334" class="ct-point" ct:value="-2" opacity="1"></line>
											<line x1="346.071" y1="110" x2="346.071" y2="110" class="ct-point" ct:value="0" opacity="1"></line>
											<line x1="405.286" y1="78.33333333333333" x2="405.286" y2="78.33333333333333" class="ct-point" ct:value="1" opacity="1"></line>
											<line x1="464.5" y1="110" x2="464.5" y2="110" class="ct-point" ct:value="0" opacity="1"></line>
										</g>
										<g ct:meta="Apple" class="ct-series ct-series-b">
											<path d="M 50 110 L 50 173.333 C 79.607 173.333 79.607 141.667 109.214 141.667 C 138.821 141.667 138.821 173.333 168.429 173.333 C 198.036 173.333 198.036 141.667 227.643 141.667 C 257.25 141.667 257.25 189.167 286.857 189.167 C 316.464 189.167 316.464 141.667 346.071 141.667 C 375.679 141.667 375.679 173.333 405.286 173.333 C 434.893 173.333 434.893 141.667 464.5 141.667 L 464.5 110 Z" class="ct-area"></path>
											<line x1="50" y1="173.33333333333334" x2="50" y2="173.33333333333334" class="ct-point" ct:value="-2" opacity="1"></line>
											<line x1="109.214" y1="141.66666666666666" x2="109.214" y2="141.66666666666666" class="ct-point" ct:value="-1" opacity="1"></line>
											<line x1="168.429" y1="173.33333333333334" x2="168.429" y2="173.33333333333334" class="ct-point" ct:value="-2" opacity="1"></line>
											<line x1="227.643" y1="141.66666666666666" x2="227.643" y2="141.66666666666666" class="ct-point" ct:value="-1" opacity="1"></line>
											<line x1="286.857" y1="189.16666666666666" x2="286.857" y2="189.16666666666666" class="ct-point" ct:value="-2.5" opacity="1"></line>
											<line x1="346.071" y1="141.66666666666666" x2="346.071" y2="141.66666666666666" class="ct-point" ct:value="-1" opacity="1"></line>
											<line x1="405.286" y1="173.33333333333334" x2="405.286" y2="173.33333333333334" class="ct-point" ct:value="-2" opacity="1"></line>
											<line x1="464.5" y1="141.66666666666666" x2="464.5" y2="141.66666666666666" class="ct-point" ct:value="-1" opacity="1"></line>
										</g>
										<g ct:meta="Microsoft" class="ct-series ct-series-c">
											<path d="M 50 110 L 50 110 C 79.607 110 79.607 110 109.214 110 C 138.821 110 138.821 110 168.429 110 C 198.036 110 198.036 78.333 227.643 78.333 C 257.25 78.333 257.25 46.667 286.857 46.667 C 316.464 46.667 316.464 30.833 346.071 30.833 C 375.679 30.833 375.679 46.667 405.286 46.667 C 434.893 46.667 434.893 78.333 464.5 78.333 L 464.5 110 Z" class="ct-area"></path>
											<line x1="50" y1="110" x2="50" y2="110" class="ct-point" ct:value="0" opacity="1"></line>
											<line x1="109.214" y1="110" x2="109.214" y2="110" class="ct-point" ct:value="0" opacity="1"></line>
											<line x1="168.429" y1="110" x2="168.429" y2="110" class="ct-point" ct:value="0" opacity="1"></line>
											<line x1="227.643" y1="78.33333333333333" x2="227.643" y2="78.33333333333333" class="ct-point" ct:value="1" opacity="1"></line>
											<line x1="286.857" y1="46.66666666666666" x2="286.857" y2="46.66666666666666" class="ct-point" ct:value="2" opacity="1"></line>
											<line x1="346.071" y1="30.833333333333343" x2="346.071" y2="30.833333333333343" class="ct-point" ct:value="2.5" opacity="1"></line>
											<line x1="405.286" y1="46.66666666666666" x2="405.286" y2="46.66666666666666" class="ct-point" ct:value="2" opacity="1"></line>
											<line x1="464.5" y1="78.33333333333333" x2="464.5" y2="78.33333333333333" class="ct-point" ct:value="1" opacity="1"></line>
										</g>
										<g ct:meta="Tesla" class="ct-series ct-series-h">
											<path d="M 50 110 L 50 30.833 C 79.607 30.833 79.607 46.667 109.214 46.667 C 138.821 46.667 138.821 78.333 168.429 78.333 C 198.036 78.333 198.036 94.167 227.643 94.167 C 257.25 94.167 257.25 78.333 286.857 78.333 C 316.464 78.333 316.464 94.167 346.071 94.167 C 375.679 94.167 375.679 141.667 405.286 141.667 C 434.893 141.667 434.893 189.167 464.5 189.167 L 464.5 110 Z" class="ct-area"></path>
											<line x1="50" y1="30.833333333333343" x2="50" y2="30.833333333333343" class="ct-point" ct:value="2.5" opacity="1"></line>
											<line x1="109.214" y1="46.66666666666666" x2="109.214" y2="46.66666666666666" class="ct-point" ct:value="2" opacity="1"></line>
											<line x1="168.429" y1="78.33333333333333" x2="168.429" y2="78.33333333333333" class="ct-point" ct:value="1" opacity="1"></line>
											<line x1="227.643" y1="94.16666666666667" x2="227.643" y2="94.16666666666667" class="ct-point" ct:value="0.5" opacity="1"></line>
											<line x1="286.857" y1="78.33333333333333" x2="286.857" y2="78.33333333333333" class="ct-point" ct:value="1" opacity="1"></line>
											<line x1="346.071" y1="94.16666666666667" x2="346.071" y2="94.16666666666667" class="ct-point" ct:value="0.5" opacity="1"></line>
											<line x1="405.286" y1="141.66666666666666" x2="405.286" y2="141.66666666666666" class="ct-point" ct:value="-1" opacity="1"></line>
											<line x1="464.5" y1="189.16666666666666" x2="464.5" y2="189.16666666666666" class="ct-point" ct:value="-2.5" opacity="1"></line>
										</g>
									</g>
									<g class="ct-labels">
										<foreignObject style="overflow: visible;" y="173.33333333333334" x="10" height="31.666666666666668" width="30">
											<span class="ct-label ct-vertical ct-start"
												xmlns="http://www.w3.org/2000/xmlns/" style="height: 32px; width: 30px;">-3
											</span>
										</foreignObject>
										<foreignObject style="overflow: visible;" y="141.66666666666669" x="10" height="31.666666666666668" width="30">
											<span class="ct-label ct-vertical ct-start"
												xmlns="http://www.w3.org/2000/xmlns/" style="height: 32px; width: 30px;">-2
											</span>
										</foreignObject>
										<foreignObject style="overflow: visible;" y="110" x="10" height="31.666666666666664" width="30">
											<span class="ct-label ct-vertical ct-start"
												xmlns="http://www.w3.org/2000/xmlns/" style="height: 32px; width: 30px;">-1
											</span>
										</foreignObject>
										<foreignObject style="overflow: visible;" y="78.33333333333333" x="10" height="31.66666666666667" width="30">
											<span class="ct-label ct-vertical ct-start"
												xmlns="http://www.w3.org/2000/xmlns/" style="height: 32px; width: 30px;">0
											</span>
										</foreignObject>
										<foreignObject style="overflow: visible;" y="46.66666666666666" x="10" height="31.66666666666667" width="30">
											<span class="ct-label ct-vertical ct-start"
												xmlns="http://www.w3.org/2000/xmlns/" style="height: 32px; width: 30px;">1
											</span>
										</foreignObject>
										<foreignObject style="overflow: visible;" y="15" x="10" height="31.666666666666657" width="30">
											<span class="ct-label ct-vertical ct-start"
												xmlns="http://www.w3.org/2000/xmlns/" style="height: 32px; width: 30px;">2
											</span>
										</foreignObject>
										<foreignObject style="overflow: visible;" y="-15" x="10" height="30" width="30">
											<span class="ct-label ct-vertical ct-start"
												xmlns="http://www.w3.org/2000/xmlns/" style="height: 30px; width: 30px;">3
											</span>
										</foreignObject>
									</g>
								</svg>
							</div>
						</div>
					</div>
				</div>
				<div class="col-md-6">
					<div class="card">
						<div class="card-header">Bar chart</div>
						<div class="card-body">
							<div id="chartist-bar" class="pos-rlt" style="height: 240px">
								<div class="chartist-tooltip"></div>
								<svg
									xmlns:ct="http://gionkunz.github.com/chartist-js/ct" width="100%" height="100%" class="ct-chart-bar" style="width: 100%; height: 100%;">
									<g class="ct-grids">
										<line x1="50" x2="50" y1="15" y2="205" class="ct-grid ct-horizontal"></line>
										<line x1="84.54166666666666" x2="84.54166666666666" y1="15" y2="205" class="ct-grid ct-horizontal"></line>
										<line x1="119.08333333333333" x2="119.08333333333333" y1="15" y2="205" class="ct-grid ct-horizontal"></line>
										<line x1="153.625" x2="153.625" y1="15" y2="205" class="ct-grid ct-horizontal"></line>
										<line x1="188.16666666666666" x2="188.16666666666666" y1="15" y2="205" class="ct-grid ct-horizontal"></line>
										<line x1="222.70833333333331" x2="222.70833333333331" y1="15" y2="205" class="ct-grid ct-horizontal"></line>
										<line x1="257.25" x2="257.25" y1="15" y2="205" class="ct-grid ct-horizontal"></line>
										<line x1="291.79166666666663" x2="291.79166666666663" y1="15" y2="205" class="ct-grid ct-horizontal"></line>
										<line x1="326.3333333333333" x2="326.3333333333333" y1="15" y2="205" class="ct-grid ct-horizontal"></line>
										<line x1="360.875" x2="360.875" y1="15" y2="205" class="ct-grid ct-horizontal"></line>
										<line x1="395.41666666666663" x2="395.41666666666663" y1="15" y2="205" class="ct-grid ct-horizontal"></line>
										<line x1="429.9583333333333" x2="429.9583333333333" y1="15" y2="205" class="ct-grid ct-horizontal"></line>
										<line y1="205" y2="205" x1="50" x2="464.5" class="ct-grid ct-vertical"></line>
										<line y1="181.25" y2="181.25" x1="50" x2="464.5" class="ct-grid ct-vertical"></line>
										<line y1="157.5" y2="157.5" x1="50" x2="464.5" class="ct-grid ct-vertical"></line>
										<line y1="133.75" y2="133.75" x1="50" x2="464.5" class="ct-grid ct-vertical"></line>
										<line y1="110" y2="110" x1="50" x2="464.5" class="ct-grid ct-vertical"></line>
										<line y1="86.25" y2="86.25" x1="50" x2="464.5" class="ct-grid ct-vertical"></line>
										<line y1="62.5" y2="62.5" x1="50" x2="464.5" class="ct-grid ct-vertical"></line>
										<line y1="38.75" y2="38.75" x1="50" x2="464.5" class="ct-grid ct-vertical"></line>
										<line y1="15" y2="15" x1="50" x2="464.5" class="ct-grid ct-vertical"></line>
									</g>
									<g>
										<g ct:meta="Facebook" class="ct-series ct-series-a ct-stroke-4">
											<line x1="63.27083333333333" x2="63.27083333333333" y1="205" y2="110" class="ct-bar" ct:value="5" opacity="1"></line>
											<line x1="97.81249999999999" x2="97.81249999999999" y1="205" y2="129" class="ct-bar" ct:value="4" opacity="1"></line>
											<line x1="132.35416666666666" x2="132.35416666666666" y1="205" y2="148" class="ct-bar" ct:value="3" opacity="1"></line>
											<line x1="166.89583333333334" x2="166.89583333333334" y1="205" y2="72" class="ct-bar" ct:value="7" opacity="1"></line>
											<line x1="201.4375" x2="201.4375" y1="205" y2="110" class="ct-bar" ct:value="5" opacity="1"></line>
											<line x1="235.97916666666666" x2="235.97916666666666" y1="205" y2="15" class="ct-bar" ct:value="10" opacity="1"></line>
											<line x1="270.5208333333333" x2="270.5208333333333" y1="205" y2="148" class="ct-bar" ct:value="3" opacity="1"></line>
											<line x1="305.06249999999994" x2="305.06249999999994" y1="205" y2="129" class="ct-bar" ct:value="4" opacity="1"></line>
											<line x1="339.60416666666663" x2="339.60416666666663" y1="205" y2="53" class="ct-bar" ct:value="8" opacity="1"></line>
											<line x1="374.1458333333333" x2="374.1458333333333" y1="205" y2="15" class="ct-bar" ct:value="10" opacity="1"></line>
											<line x1="408.68749999999994" x2="408.68749999999994" y1="205" y2="91" class="ct-bar" ct:value="6" opacity="1"></line>
											<line x1="443.22916666666663" x2="443.22916666666663" y1="205" y2="53" class="ct-bar" ct:value="8" opacity="1"></line>
										</g>
										<g ct:meta="Twitter" class="ct-series ct-series-g ct-stroke-4">
											<line x1="71.27083333333333" x2="71.27083333333333" y1="205" y2="148" class="ct-bar" ct:value="3" opacity="1"></line>
											<line x1="105.81249999999999" x2="105.81249999999999" y1="205" y2="167" class="ct-bar" ct:value="2" opacity="1"></line>
											<line x1="140.35416666666666" x2="140.35416666666666" y1="205" y2="34" class="ct-bar" ct:value="9" opacity="1"></line>
											<line x1="174.89583333333334" x2="174.89583333333334" y1="205" y2="110" class="ct-bar" ct:value="5" opacity="1"></line>
											<line x1="209.4375" x2="209.4375" y1="205" y2="129" class="ct-bar" ct:value="4" opacity="1"></line>
											<line x1="243.97916666666666" x2="243.97916666666666" y1="205" y2="91" class="ct-bar" ct:value="6" opacity="1"></line>
											<line x1="278.5208333333333" x2="278.5208333333333" y1="205" y2="129" class="ct-bar" ct:value="4" opacity="1"></line>
											<line x1="313.06249999999994" x2="313.06249999999994" y1="205" y2="91" class="ct-bar" ct:value="6" opacity="1"></line>
											<line x1="347.60416666666663" x2="347.60416666666663" y1="205" y2="72" class="ct-bar" ct:value="7" opacity="1"></line>
											<line x1="382.1458333333333" x2="382.1458333333333" y1="205" y2="53" class="ct-bar" ct:value="8" opacity="1"></line>
											<line x1="416.68749999999994" x2="416.68749999999994" y1="205" y2="72" class="ct-bar" ct:value="7" opacity="1"></line>
											<line x1="451.22916666666663" x2="451.22916666666663" y1="205" y2="129" class="ct-bar" ct:value="4" opacity="1"></line>
										</g>
									</g>
									<g class="ct-labels">
										<foreignObject style="overflow: visible;" x="50" y="210" width="34.541666666666664" height="20">
											<span class="ct-label ct-horizontal ct-end"
												xmlns="http://www.w3.org/2000/xmlns/" style="width: 35px; height: 20px;">Jan
											</span>
										</foreignObject>
										<foreignObject style="overflow: visible;" x="84.54166666666666" y="210" width="34.541666666666664" height="20">
											<span class="ct-label ct-horizontal ct-end"
												xmlns="http://www.w3.org/2000/xmlns/" style="width: 35px; height: 20px;">Feb
											</span>
										</foreignObject>
										<foreignObject style="overflow: visible;" x="119.08333333333333" y="210" width="34.54166666666667" height="20">
											<span class="ct-label ct-horizontal ct-end"
												xmlns="http://www.w3.org/2000/xmlns/" style="width: 35px; height: 20px;">Mar
											</span>
										</foreignObject>
										<foreignObject style="overflow: visible;" x="153.625" y="210" width="34.54166666666666" height="20">
											<span class="ct-label ct-horizontal ct-end"
												xmlns="http://www.w3.org/2000/xmlns/" style="width: 35px; height: 20px;">Apr
											</span>
										</foreignObject>
										<foreignObject style="overflow: visible;" x="188.16666666666666" y="210" width="34.54166666666666" height="20">
											<span class="ct-label ct-horizontal ct-end"
												xmlns="http://www.w3.org/2000/xmlns/" style="width: 35px; height: 20px;">May
											</span>
										</foreignObject>
										<foreignObject style="overflow: visible;" x="222.70833333333331" y="210" width="34.541666666666686" height="20">
											<span class="ct-label ct-horizontal ct-end"
												xmlns="http://www.w3.org/2000/xmlns/" style="width: 35px; height: 20px;">Jun
											</span>
										</foreignObject>
										<foreignObject style="overflow: visible;" x="257.25" y="210" width="34.54166666666666" height="20">
											<span class="ct-label ct-horizontal ct-end"
												xmlns="http://www.w3.org/2000/xmlns/" style="width: 35px; height: 20px;">Jul
											</span>
										</foreignObject>
										<foreignObject style="overflow: visible;" x="291.79166666666663" y="210" width="34.54166666666666" height="20">
											<span class="ct-label ct-horizontal ct-end"
												xmlns="http://www.w3.org/2000/xmlns/" style="width: 35px; height: 20px;">Aug
											</span>
										</foreignObject>
										<foreignObject style="overflow: visible;" x="326.3333333333333" y="210" width="34.541666666666686" height="20">
											<span class="ct-label ct-horizontal ct-end"
												xmlns="http://www.w3.org/2000/xmlns/" style="width: 35px; height: 20px;">Sep
											</span>
										</foreignObject>
										<foreignObject style="overflow: visible;" x="360.875" y="210" width="34.54166666666663" height="20">
											<span class="ct-label ct-horizontal ct-end"
												xmlns="http://www.w3.org/2000/xmlns/" style="width: 35px; height: 20px;">Oct
											</span>
										</foreignObject>
										<foreignObject style="overflow: visible;" x="395.41666666666663" y="210" width="34.541666666666686" height="20">
											<span class="ct-label ct-horizontal ct-end"
												xmlns="http://www.w3.org/2000/xmlns/" style="width: 35px; height: 20px;">Nov
											</span>
										</foreignObject>
										<foreignObject style="overflow: visible;" x="429.9583333333333" y="210" width="34.541666666666686" height="20">
											<span class="ct-label ct-horizontal ct-end"
												xmlns="http://www.w3.org/2000/xmlns/" style="width: 35px; height: 20px;">Dec
											</span>
										</foreignObject>
										<foreignObject style="overflow: visible;" y="181.25" x="10" height="23.75" width="30">
											<span class="ct-label ct-vertical ct-start"
												xmlns="http://www.w3.org/2000/xmlns/" style="height: 24px; width: 30px;">0
											</span>
										</foreignObject>
										<foreignObject style="overflow: visible;" y="157.5" x="10" height="23.75" width="30">
											<span class="ct-label ct-vertical ct-start"
												xmlns="http://www.w3.org/2000/xmlns/" style="height: 24px; width: 30px;">1.25
											</span>
										</foreignObject>
										<foreignObject style="overflow: visible;" y="133.75" x="10" height="23.75" width="30">
											<span class="ct-label ct-vertical ct-start"
												xmlns="http://www.w3.org/2000/xmlns/" style="height: 24px; width: 30px;">2.5
											</span>
										</foreignObject>
										<foreignObject style="overflow: visible;" y="110" x="10" height="23.75" width="30">
											<span class="ct-label ct-vertical ct-start"
												xmlns="http://www.w3.org/2000/xmlns/" style="height: 24px; width: 30px;">3.75
											</span>
										</foreignObject>
										<foreignObject style="overflow: visible;" y="86.25" x="10" height="23.75" width="30">
											<span class="ct-label ct-vertical ct-start"
												xmlns="http://www.w3.org/2000/xmlns/" style="height: 24px; width: 30px;">5
											</span>
										</foreignObject>
										<foreignObject style="overflow: visible;" y="62.5" x="10" height="23.75" width="30">
											<span class="ct-label ct-vertical ct-start"
												xmlns="http://www.w3.org/2000/xmlns/" style="height: 24px; width: 30px;">6.25
											</span>
										</foreignObject>
										<foreignObject style="overflow: visible;" y="38.75" x="10" height="23.75" width="30">
											<span class="ct-label ct-vertical ct-start"
												xmlns="http://www.w3.org/2000/xmlns/" style="height: 24px; width: 30px;">7.5
											</span>
										</foreignObject>
										<foreignObject style="overflow: visible;" y="15" x="10" height="23.75" width="30">
											<span class="ct-label ct-vertical ct-start"
												xmlns="http://www.w3.org/2000/xmlns/" style="height: 24px; width: 30px;">8.75
											</span>
										</foreignObject>
										<foreignObject style="overflow: visible;" y="-15" x="10" height="30" width="30">
											<span class="ct-label ct-vertical ct-start"
												xmlns="http://www.w3.org/2000/xmlns/" style="height: 30px; width: 30px;">10
											</span>
										</foreignObject>
									</g>
								</svg>
							</div>
						</div>
					</div>
				</div>
				<div class="col-md-6">
					<div class="card">
						<div class="card-header">Horizental bar chart</div>
						<div class="card-body">
							<div id="chartist-h-bar" class="pos-rlt" style="height: 240px">
								<div class="chartist-tooltip"></div>
								<svg
									xmlns:ct="http://gionkunz.github.com/chartist-js/ct" width="100%" height="100%" class="ct-chart-bar ct-horizontal-bars" style="width: 100%; height: 100%;">
									<g class="ct-grids">
										<line y1="205" y2="205" x1="80" x2="464.5" class="ct-grid ct-vertical"></line>
										<line y1="177.85714285714286" y2="177.85714285714286" x1="80" x2="464.5" class="ct-grid ct-vertical"></line>
										<line y1="150.71428571428572" y2="150.71428571428572" x1="80" x2="464.5" class="ct-grid ct-vertical"></line>
										<line y1="123.57142857142857" y2="123.57142857142857" x1="80" x2="464.5" class="ct-grid ct-vertical"></line>
										<line y1="96.42857142857143" y2="96.42857142857143" x1="80" x2="464.5" class="ct-grid ct-vertical"></line>
										<line y1="69.28571428571428" y2="69.28571428571428" x1="80" x2="464.5" class="ct-grid ct-vertical"></line>
										<line y1="42.14285714285714" y2="42.14285714285714" x1="80" x2="464.5" class="ct-grid ct-vertical"></line>
										<line x1="80" x2="80" y1="15" y2="205" class="ct-grid ct-horizontal"></line>
										<line x1="128.0625" x2="128.0625" y1="15" y2="205" class="ct-grid ct-horizontal"></line>
										<line x1="176.125" x2="176.125" y1="15" y2="205" class="ct-grid ct-horizontal"></line>
										<line x1="224.1875" x2="224.1875" y1="15" y2="205" class="ct-grid ct-horizontal"></line>
										<line x1="272.25" x2="272.25" y1="15" y2="205" class="ct-grid ct-horizontal"></line>
										<line x1="320.3125" x2="320.3125" y1="15" y2="205" class="ct-grid ct-horizontal"></line>
										<line x1="368.375" x2="368.375" y1="15" y2="205" class="ct-grid ct-horizontal"></line>
										<line x1="416.4375" x2="416.4375" y1="15" y2="205" class="ct-grid ct-horizontal"></line>
										<line x1="464.5" x2="464.5" y1="15" y2="205" class="ct-grid ct-horizontal"></line>
									</g>
									<g>
										<g ct:meta="Google" class="ct-series ct-series-c ct-stroke-3">
											<line y1="194.42857142857142" y2="194.42857142857142" x1="80" x2="272.25" class="ct-bar" ct:value="5" opacity="1"></line>
											<line y1="167.28571428571428" y2="167.28571428571428" x1="80" x2="233.8" class="ct-bar" ct:value="4" opacity="1"></line>
											<line y1="140.14285714285714" y2="140.14285714285714" x1="80" x2="195.35" class="ct-bar" ct:value="3" opacity="1"></line>
											<line y1="113" y2="113" x1="80" x2="349.15" class="ct-bar" ct:value="7" opacity="1"></line>
											<line y1="85.85714285714286" y2="85.85714285714286" x1="80" x2="272.25" class="ct-bar" ct:value="5" opacity="1"></line>
											<line y1="58.71428571428571" y2="58.71428571428571" x1="80" x2="464.5" class="ct-bar" ct:value="10" opacity="1"></line>
											<line y1="31.57142857142857" y2="31.57142857142857" x1="80" x2="195.35" class="ct-bar" ct:value="3" opacity="1"></line>
										</g>
										<g ct:meta="Bing" class="ct-series ct-series-h ct-stroke-3">
											<line y1="188.42857142857142" y2="188.42857142857142" x1="80" x2="195.35" class="ct-bar" ct:value="3" opacity="1"></line>
											<line y1="161.28571428571428" y2="161.28571428571428" x1="80" x2="156.9" class="ct-bar" ct:value="2" opacity="1"></line>
											<line y1="134.14285714285714" y2="134.14285714285714" x1="80" x2="426.05" class="ct-bar" ct:value="9" opacity="1"></line>
											<line y1="107" y2="107" x1="80" x2="272.25" class="ct-bar" ct:value="5" opacity="1"></line>
											<line y1="79.85714285714286" y2="79.85714285714286" x1="80" x2="233.8" class="ct-bar" ct:value="4" opacity="1"></line>
											<line y1="52.71428571428571" y2="52.71428571428571" x1="80" x2="310.7" class="ct-bar" ct:value="6" opacity="1"></line>
											<line y1="25.57142857142857" y2="25.57142857142857" x1="80" x2="233.8" class="ct-bar" ct:value="4" opacity="1"></line>
										</g>
									</g>
									<g class="ct-labels">
										<foreignObject style="overflow: visible;" y="177.85714285714286" x="10" height="27.142857142857142" width="60">
											<span class="ct-label ct-vertical ct-start"
												xmlns="http://www.w3.org/2000/xmlns/" style="height: 27px; width: 60px;">Monday
											</span>
										</foreignObject>
										<foreignObject style="overflow: visible;" y="150.71428571428572" x="10" height="27.142857142857142" width="60">
											<span class="ct-label ct-vertical ct-start"
												xmlns="http://www.w3.org/2000/xmlns/" style="height: 27px; width: 60px;">Tuesday
											</span>
										</foreignObject>
										<foreignObject style="overflow: visible;" y="123.57142857142858" x="10" height="27.142857142857146" width="60">
											<span class="ct-label ct-vertical ct-start"
												xmlns="http://www.w3.org/2000/xmlns/" style="height: 27px; width: 60px;">Wednesday
											</span>
										</foreignObject>
										<foreignObject style="overflow: visible;" y="96.42857142857143" x="10" height="27.14285714285714" width="60">
											<span class="ct-label ct-vertical ct-start"
												xmlns="http://www.w3.org/2000/xmlns/" style="height: 27px; width: 60px;">Thursday
											</span>
										</foreignObject>
										<foreignObject style="overflow: visible;" y="69.28571428571428" x="10" height="27.142857142857153" width="60">
											<span class="ct-label ct-vertical ct-start"
												xmlns="http://www.w3.org/2000/xmlns/" style="height: 27px; width: 60px;">Friday
											</span>
										</foreignObject>
										<foreignObject style="overflow: visible;" y="42.14285714285714" x="10" height="27.14285714285714" width="60">
											<span class="ct-label ct-vertical ct-start"
												xmlns="http://www.w3.org/2000/xmlns/" style="height: 27px; width: 60px;">Saturday
											</span>
										</foreignObject>
										<foreignObject style="overflow: visible;" y="12.142857142857139" x="10" height="30" width="60">
											<span class="ct-label ct-vertical ct-start"
												xmlns="http://www.w3.org/2000/xmlns/" style="height: 30px; width: 60px;">Sunday
											</span>
										</foreignObject>
										<foreignObject style="overflow: visible;" x="80" y="210" width="48.0625" height="20">
											<span class="ct-label ct-horizontal ct-end"
												xmlns="http://www.w3.org/2000/xmlns/" style="width: 48px; height: 20px;">0
											</span>
										</foreignObject>
										<foreignObject style="overflow: visible;" x="128.0625" y="210" width="48.0625" height="20">
											<span class="ct-label ct-horizontal ct-end"
												xmlns="http://www.w3.org/2000/xmlns/" style="width: 48px; height: 20px;">1.25
											</span>
										</foreignObject>
										<foreignObject style="overflow: visible;" x="176.125" y="210" width="48.0625" height="20">
											<span class="ct-label ct-horizontal ct-end"
												xmlns="http://www.w3.org/2000/xmlns/" style="width: 48px; height: 20px;">2.5
											</span>
										</foreignObject>
										<foreignObject style="overflow: visible;" x="224.1875" y="210" width="48.0625" height="20">
											<span class="ct-label ct-horizontal ct-end"
												xmlns="http://www.w3.org/2000/xmlns/" style="width: 48px; height: 20px;">3.75
											</span>
										</foreignObject>
										<foreignObject style="overflow: visible;" x="272.25" y="210" width="48.0625" height="20">
											<span class="ct-label ct-horizontal ct-end"
												xmlns="http://www.w3.org/2000/xmlns/" style="width: 48px; height: 20px;">5
											</span>
										</foreignObject>
										<foreignObject style="overflow: visible;" x="320.3125" y="210" width="48.0625" height="20">
											<span class="ct-label ct-horizontal ct-end"
												xmlns="http://www.w3.org/2000/xmlns/" style="width: 48px; height: 20px;">6.25
											</span>
										</foreignObject>
										<foreignObject style="overflow: visible;" x="368.375" y="210" width="48.0625" height="20">
											<span class="ct-label ct-horizontal ct-end"
												xmlns="http://www.w3.org/2000/xmlns/" style="width: 48px; height: 20px;">7.5
											</span>
										</foreignObject>
										<foreignObject style="overflow: visible;" x="416.4375" y="210" width="48.0625" height="20">
											<span class="ct-label ct-horizontal ct-end"
												xmlns="http://www.w3.org/2000/xmlns/" style="width: 48px; height: 20px;">8.75
											</span>
										</foreignObject>
										<foreignObject style="overflow: visible;" x="464.5" y="210" width="30" height="20">
											<span class="ct-label ct-horizontal ct-end"
												xmlns="http://www.w3.org/2000/xmlns/" style="width: 30px; height: 20px;">10
											</span>
										</foreignObject>
									</g>
								</svg>
							</div>
						</div>
					</div>
				</div>
				<div class="col-md-6">
					<div class="card">
						<div class="card-header">Pie chart</div>
						<div class="card-body">
							<div id="chartist-pie" class="pos-rlt" style="height: 240px">
								<div class="chartist-tooltip"></div>
								<svg
									xmlns:ct="http://gionkunz.github.com/chartist-js/ct" width="100%" height="100%" class="ct-chart-donut" style="width: 100%; height: 100%;">
									<g class="ct-series ct-series-a">
										<path d="M274.391,140A40,40,0,0,0,239.75,80" class="ct-slice-donut" ct:value="4" style="stroke-width: 80px;" stroke-dasharray="83.77688598632812px 83.77688598632812px" stroke-dashoffset="-83.77688598632812px">
											<animate attributeName="stroke-dashoffset" id="anim0" dur="1000ms" from="-83.77688598632812px" to="0px" fill="freeze" calcMode="spline" keySplines="0.23 1 0.32 1" keyTimes="0;1"></animate>
										</path>
									</g>
									<g class="ct-series ct-series-b">
										<path d="M219.75,154.641A40,40,0,0,0,274.461,139.879" class="ct-slice-donut" ct:value="3" style="stroke-width: 80px;" stroke-dasharray="62.97222137451172px 62.97222137451172px" stroke-dashoffset="-62.97222137451172px">
											<animate attributeName="stroke-dashoffset" id="anim1" dur="1000ms" from="-62.97222137451172px" to="0px" fill="freeze" begin="anim0.end" calcMode="spline" keySplines="0.23 1 0.32 1" keyTimes="0;1"></animate>
										</path>
									</g>
									<g class="ct-series ct-series-g">
										<path d="M239.75,80A40,40,0,0,0,219.871,154.711" class="ct-slice-donut" ct:value="5" style="stroke-width: 80px;" stroke-dasharray="104.86593627929688px 104.86593627929688px" stroke-dashoffset="-104.86593627929688px">
											<animate attributeName="stroke-dashoffset" id="anim2" dur="1000ms" from="-104.86593627929688px" to="0px" fill="freeze" begin="anim1.end" calcMode="spline" keySplines="0.23 1 0.32 1" keyTimes="0;1"></animate>
										</path>
									</g>
									<g>
										<text dx="326.3525403784439" dy="70" text-anchor="start" class="ct-label">Bananas</text>
										<text dx="265.63190451025207" dy="216.59258262890683" text-anchor="start" class="ct-label">Apples</text>
										<text dx="143.15741737109317" dy="94.11809548974796" text-anchor="end" class="ct-label">Grapes</text>
									</g>
								</svg>
							</div>
						</div>
					</div>
				</div>
				<div class="col-md-6">
					<div class="card">
						<div class="card-header">Dougnut chart</div>
						<div class="card-body">
							<div id="chartist-dougnut" class="pos-rlt" style="height: 240px">
								<div class="chartist-tooltip"></div>
								<svg
									xmlns:ct="http://gionkunz.github.com/chartist-js/ct" width="100%" height="100%" class="ct-chart-donut" style="width: 100%; height: 100%;">
									<g class="ct-series ct-series-k">
										<path d="M219.664,58.181A65,65,0,0,0,174.75,120" class="ct-slice-donut" ct:value="20" ct:meta="Apples" style="stroke-width: 20px;" stroke-dasharray="81.68490600585938px 81.68490600585938px" stroke-dashoffset="-81.68490600585938px">
											<animate attributeName="stroke-dashoffset" id="anim0" dur="1000ms" from="-81.68490600585938px" to="0px" fill="freeze" calcMode="spline" keySplines="0.23 1 0.32 1" keyTimes="0;1"></animate>
										</path>
									</g>
									<g class="ct-series ct-series-l">
										<path d="M259.836,58.181A65,65,0,0,0,219.448,58.252" class="ct-slice-donut" ct:value="10" ct:meta="Grapes" style="stroke-width: 20px;" stroke-dasharray="41.067806243896484px 41.067806243896484px" stroke-dashoffset="-41.067806243896484px">
											<animate attributeName="stroke-dashoffset" id="anim1" dur="1000ms" from="-41.067806243896484px" to="0px" fill="freeze" begin="anim0.end" calcMode="spline" keySplines="0.23 1 0.32 1" keyTimes="0;1"></animate>
										</path>
									</g>
									<g class="ct-series ct-series-g">
										<path d="M174.75,120A65,65,0,1,0,259.62,58.112" class="ct-slice-donut" ct:value="70" ct:meta="Bananas" style="stroke-width: 20px;" stroke-dasharray="286.1395263671875px 286.1395263671875px" stroke-dashoffset="-286.1395263671875px">
											<animate attributeName="stroke-dashoffset" id="anim2" dur="1000ms" from="-286.1395263671875px" to="0px" fill="freeze" begin="anim1.end" calcMode="spline" keySplines="0.23 1 0.32 1" keyTimes="0;1"></animate>
										</path>
									</g>
									<g>
										<text dx="162.89338553438" dy="64.16040103221506" text-anchor="end" class="ct-label">20</text>
										<text dx="239.74999999999997" dy="25" text-anchor="end" class="ct-label">10</text>
										<text dx="295.58959896778504" dy="196.85661446561994" text-anchor="start" class="ct-label">70</text>
									</g>
								</svg>
							</div>
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
    }
}