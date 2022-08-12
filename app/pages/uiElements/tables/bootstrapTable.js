var appBootstraptables = {
    html: `
    <div>
	<div class="page-hero page-container" id="page-hero">
		<div class="padding d-flex">
			<div class="page-title">
				<h2 class="text-md text-highlight">Bootstrap</h2>
				<small class="text-muted">An extended Bootstrap table with radio, checkbox, sort, pagination</small>
			</div>
			<div class="flex"></div>
			
		</div>
	</div>
	<div class="page-content page-container" id="page-content">
		<div class="padding">
			<div class="bootstrap-table">
				<div class="fixed-table-toolbar">
					<div class="bs-bars float-left">
						<div id="toolbar"></div>
					</div>
					<div class="columns columns-right btn-group float-right">
						<div class="keep-open btn-group" title="Columns">
							<button type="button" aria-label="columns" class="btn btn-white dropdown-toggle" data-toggle="dropdown">
								<i class="fa icon-column"></i>
								<span class="caret"></span>
							</button>
							<div class="dropdown-menu dropdown-menu-right">
								<label class="dropdown-item">
									<input type="checkbox" data-field="id" value="0" checked="checked"> ID
									</label>
									<label class="dropdown-item">
										<input type="checkbox" data-field="owner" value="1" checked="checked"> Owner
										</label>
										<label class="dropdown-item">
											<input type="checkbox" data-field="project" value="2" checked="checked"> Project
											</label>
											<label class="dropdown-item">
												<input type="checkbox" data-field="task" value="3" checked="checked">
													<span class="d-none d-sm-block">Tasks</span>
												</label>
												<label class="dropdown-item">
													<input type="checkbox" data-field="finish" value="4" checked="checked">
														<span class="d-none d-sm-block">Finish</span>
													</label>
													<label class="dropdown-item">
														<input type="checkbox" data-field="5" value="5" checked="checked">
														</label>
													</div>
												</div>
												<div class="export btn-group">
													<button class="btn btn-white dropdown-toggle" aria-label="export type" title="Export data" data-toggle="dropdown" type="button">
														<i class="fa icon-export"></i>
														<span class="caret"></span>
													</button>
													<ul class="dropdown-menu" role="menu">
														<li role="menuitem" data-type="json">
															<a href="javascript:void(0)">JSON</a>
														</li>
														<li role="menuitem" data-type="xml">
															<a href="javascript:void(0)">XML</a>
														</li>
														<li role="menuitem" data-type="csv">
															<a href="javascript:void(0)">CSV</a>
														</li>
														<li role="menuitem" data-type="txt">
															<a href="javascript:void(0)">TXT</a>
														</li>
														<li role="menuitem" data-type="sql">
															<a href="javascript:void(0)">SQL</a>
														</li>
														<li role="menuitem" data-type="excel">
															<a href="javascript:void(0)">MS-Excel</a>
														</li>
													</ul>
												</div>
											</div>
											<div class="float-left search">
												<input class="form-control" type="text" placeholder="Search">
												</div>
											</div>
											<div class="fixed-table-container" style="padding-bottom: 0px;">
												<div class="fixed-table-header" style="display: none;">
													<table></table>
												</div>
												<div class="fixed-table-body">
													<div class="fixed-table-loading" style="top: 41px;">Loading, please wait...</div>
													<table id="table" class="table table-theme v-middle table-hover" data-toolbar="#toolbar" data-search="true" data-search-align="left" data-show-export="true" data-show-columns="true" data-detail-view="false" data-mobile-responsive="true" data-pagination="true" data-page-list="[10, 25, 50, 100, ALL]">
														<thead>
															<tr>
																<th style="" data-field="id">
																	<div class="th-inner sortable both">ID</div>
																	<div class="fht-cell"></div>
																</th>
																<th style="" data-field="owner">
																	<div class="th-inner sortable both">Owner</div>
																	<div class="fht-cell"></div>
																</th>
																<th style="" data-field="project">
																	<div class="th-inner sortable both">Project</div>
																	<div class="fht-cell"></div>
																</th>
																<th style="" data-field="task">
																	<div class="th-inner ">
																		<span class="d-none d-sm-block">Tasks</span>
																	</div>
																	<div class="fht-cell"></div>
																</th>
																<th style="" data-field="finish">
																	<div class="th-inner ">
																		<span class="d-none d-sm-block">Finish</span>
																	</div>
																	<div class="fht-cell"></div>
																</th>
																<th style="" data-field="5">
																	<div class="th-inner "></div>
																	<div class="fht-cell"></div>
																</th>
															</tr>
														</thead>
														<tbody>
															<tr class="" data-index="0" data-id="5">
																<td style="">
																	<small class="text-muted">5</small>
																</td>
																<td style="">
																	<a href="#">
																		<span class="w-32 avatar gd-warning">
																			<img src="../assets/img/a5.jpg" alt=".">
																			</span>
																		</a>
																	</td>
																	<td class="flex" style="">
																		<a href="#" class="item-title text-color">Google Analytics training</a>
																		<div class="item-except text-muted text-sm h-1x">Free Worksheet included. Read on through or save for later but face the fear of entering your Google Analytics</div>
																	</td>
																	<td style="">
																		<span class="item-amount d-none d-sm-block text-sm">100</span>
																	</td>
																	<td style="">
																		<span class="item-amount d-none d-sm-block text-sm [object Object]">3</span>
																	</td>
																	<td style="">
																		<div class="item-action dropdown">
																			<a href="#" data-toggle="dropdown" class="text-muted">
																				<svg
																					xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-vertical">
																					<circle cx="12" cy="12" r="1"></circle>
																					<circle cx="12" cy="5" r="1"></circle>
																					<circle cx="12" cy="19" r="1"></circle>
																				</svg>
																			</a>
																			<div class="dropdown-menu dropdown-menu-right bg-black" role="menu">
																				<a class="dropdown-item" href="#">See detail </a>
																				<a class="dropdown-item download">Download </a>
																				<a class="dropdown-item edit">Edit</a>
																				<div class="dropdown-divider"></div>
																				<a class="dropdown-item trash">Delete item</a>
																			</div>
																		</div>
																	</td>
																</tr>
																<tr class="" data-index="1" data-id="17">
																	<td style="">
																		<small class="text-muted">17</small>
																	</td>
																	<td style="">
																		<a href="#">
																			<span class="w-32 avatar gd-warning">H</span>
																		</a>
																	</td>
																	<td class="flex" style="">
																		<a href="#" class="item-title text-color">AI Could Uber</a>
																		<div class="item-except text-muted text-sm h-1x">AI will highlight &amp; emphasize key areas where students need help, allowing teachers to focus on facilitating the learning process</div>
																	</td>
																	<td style="">
																		<span class="item-amount d-none d-sm-block text-sm">200</span>
																	</td>
																	<td style="">
																		<span class="item-amount d-none d-sm-block text-sm [object Object]">53</span>
																	</td>
																	<td style="">
																		<div class="item-action dropdown">
																			<a href="#" data-toggle="dropdown" class="text-muted">
																				<svg
																					xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-vertical">
																					<circle cx="12" cy="12" r="1"></circle>
																					<circle cx="12" cy="5" r="1"></circle>
																					<circle cx="12" cy="19" r="1"></circle>
																				</svg>
																			</a>
																			<div class="dropdown-menu dropdown-menu-right bg-black" role="menu">
																				<a class="dropdown-item" href="#">See detail </a>
																				<a class="dropdown-item download">Download </a>
																				<a class="dropdown-item edit">Edit</a>
																				<div class="dropdown-divider"></div>
																				<a class="dropdown-item trash">Delete item</a>
																			</div>
																		</div>
																	</td>
																</tr>
																<tr class="" data-index="2" data-id="17">
																	<td style="">
																		<small class="text-muted">17</small>
																	</td>
																	<td style="">
																		<a href="#">
																			<span class="w-32 avatar gd-warning">A</span>
																		</a>
																	</td>
																	<td class="flex" style="">
																		<a href="#" class="item-title text-color">AI Could Uber</a>
																		<div class="item-except text-muted text-sm h-1x">Alibaba made a smart screen to help blind people shop and it costs next to nothing</div>
																	</td>
																	<td style="">
																		<span class="item-amount d-none d-sm-block text-sm">320</span>
																	</td>
																	<td style="">
																		<span class="item-amount d-none d-sm-block text-sm [object Object]">25</span>
																	</td>
																	<td style="">
																		<div class="item-action dropdown">
																			<a href="#" data-toggle="dropdown" class="text-muted">
																				<svg
																					xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-vertical">
																					<circle cx="12" cy="12" r="1"></circle>
																					<circle cx="12" cy="5" r="1"></circle>
																					<circle cx="12" cy="19" r="1"></circle>
																				</svg>
																			</a>
																			<div class="dropdown-menu dropdown-menu-right bg-black" role="menu">
																				<a class="dropdown-item" href="#">See detail </a>
																				<a class="dropdown-item download">Download </a>
																				<a class="dropdown-item edit">Edit</a>
																				<div class="dropdown-divider"></div>
																				<a class="dropdown-item trash">Delete item</a>
																			</div>
																		</div>
																	</td>
																</tr>
																<tr class="" data-index="3" data-id="20">
																	<td style="">
																		<small class="text-muted">20</small>
																	</td>
																	<td style="">
																		<a href="#">
																			<span class="w-32 avatar gd-warning">G</span>
																		</a>
																	</td>
																	<td class="flex" style="">
																		<a href="#" class="item-title text-color">Netflix hackathon ios app</a>
																		<div class="item-except text-muted text-sm h-1x">Netflix hackathon creates eye tracking option for iOS app</div>
																	</td>
																	<td style="">
																		<span class="item-amount d-none d-sm-block text-sm">120</span>
																	</td>
																	<td style="">
																		<span class="item-amount d-none d-sm-block text-sm [object Object]">20</span>
																	</td>
																	<td style="">
																		<div class="item-action dropdown">
																			<a href="#" data-toggle="dropdown" class="text-muted">
																				<svg
																					xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-vertical">
																					<circle cx="12" cy="12" r="1"></circle>
																					<circle cx="12" cy="5" r="1"></circle>
																					<circle cx="12" cy="19" r="1"></circle>
																				</svg>
																			</a>
																			<div class="dropdown-menu dropdown-menu-right bg-black" role="menu">
																				<a class="dropdown-item" href="#">See detail </a>
																				<a class="dropdown-item download">Download </a>
																				<a class="dropdown-item edit">Edit</a>
																				<div class="dropdown-divider"></div>
																				<a class="dropdown-item trash">Delete item</a>
																			</div>
																		</div>
																	</td>
																</tr>
																<tr class="" data-index="4" data-id="2">
																	<td style="">
																		<small class="text-muted">2</small>
																	</td>
																	<td style="">
																		<a href="#">
																			<span class="w-32 avatar gd-primary">
																				<img src="../assets/img/a2.jpg" alt=".">
																				</span>
																			</a>
																		</td>
																		<td class="flex" style="">
																			<a href="#" class="item-title text-color">Data analytics application</a>
																			<div class="item-except text-muted text-sm h-1x">With 
																				<a href="#">@Dashboard</a>, you can create fully customized and interactive snapshots, scorecards, and dashboards. Visit our live dashboard gallery to see a glimpse of what's possible.
																			</div>
																		</td>
																		<td style="">
																			<span class="item-amount d-none d-sm-block text-sm">10</span>
																		</td>
																		<td style="">
																			<span class="item-amount d-none d-sm-block text-sm [object Object]">4</span>
																		</td>
																		<td style="">
																			<div class="item-action dropdown">
																				<a href="#" data-toggle="dropdown" class="text-muted">
																					<svg
																						xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-vertical">
																						<circle cx="12" cy="12" r="1"></circle>
																						<circle cx="12" cy="5" r="1"></circle>
																						<circle cx="12" cy="19" r="1"></circle>
																					</svg>
																				</a>
																				<div class="dropdown-menu dropdown-menu-right bg-black" role="menu">
																					<a class="dropdown-item" href="#">See detail </a>
																					<a class="dropdown-item download">Download </a>
																					<a class="dropdown-item edit">Edit</a>
																					<div class="dropdown-divider"></div>
																					<a class="dropdown-item trash">Delete item</a>
																				</div>
																			</div>
																		</td>
																	</tr>
																	<tr class="" data-index="5" data-id="14">
																		<td style="">
																			<small class="text-muted">14</small>
																		</td>
																		<td style="">
																			<a href="#">
																				<span class="w-32 avatar gd-warning">B</span>
																			</a>
																		</td>
																		<td class="flex" style="">
																			<a href="#" class="item-title text-color">Database management</a>
																			<div class="item-except text-muted text-sm h-1x">Managing data in all software or applications becomes simplified when you make use of the best 
																				<a href="#">#DatabaseMan</a>
																			</div>
																		</td>
																		<td style="">
																			<span class="item-amount d-none d-sm-block text-sm">14</span>
																		</td>
																		<td style="">
																			<span class="item-amount d-none d-sm-block text-sm [object Object]">20</span>
																		</td>
																		<td style="">
																			<div class="item-action dropdown">
																				<a href="#" data-toggle="dropdown" class="text-muted">
																					<svg
																						xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-vertical">
																						<circle cx="12" cy="12" r="1"></circle>
																						<circle cx="12" cy="5" r="1"></circle>
																						<circle cx="12" cy="19" r="1"></circle>
																					</svg>
																				</a>
																				<div class="dropdown-menu dropdown-menu-right bg-black" role="menu">
																					<a class="dropdown-item" href="#">See detail </a>
																					<a class="dropdown-item download">Download </a>
																					<a class="dropdown-item edit">Edit</a>
																					<div class="dropdown-divider"></div>
																					<a class="dropdown-item trash">Delete item</a>
																				</div>
																			</div>
																		</td>
																	</tr>
																	<tr class="" data-index="6" data-id="16">
																		<td style="">
																			<small class="text-muted">16</small>
																		</td>
																		<td style="">
																			<a href="#">
																				<span class="w-32 avatar gd-info">F</span>
																			</a>
																		</td>
																		<td class="flex" style="">
																			<a href="#" class="item-title text-color">AI Could Uber</a>
																			<div class="item-except text-muted text-sm h-1x">When it comes to artificial intelligence, little things can add up in big ways</div>
																		</td>
																		<td style="">
																			<span class="item-amount d-none d-sm-block text-sm">200</span>
																		</td>
																		<td style="">
																			<span class="item-amount d-none d-sm-block text-sm [object Object]">53</span>
																		</td>
																		<td style="">
																			<div class="item-action dropdown">
																				<a href="#" data-toggle="dropdown" class="text-muted">
																					<svg
																						xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-vertical">
																						<circle cx="12" cy="12" r="1"></circle>
																						<circle cx="12" cy="5" r="1"></circle>
																						<circle cx="12" cy="19" r="1"></circle>
																					</svg>
																				</a>
																				<div class="dropdown-menu dropdown-menu-right bg-black" role="menu">
																					<a class="dropdown-item" href="#">See detail </a>
																					<a class="dropdown-item download">Download </a>
																					<a class="dropdown-item edit">Edit</a>
																					<div class="dropdown-divider"></div>
																					<a class="dropdown-item trash">Delete item</a>
																				</div>
																			</div>
																		</td>
																	</tr>
																	<tr class="" data-index="7" data-id="9">
																		<td style="">
																			<small class="text-muted">9</small>
																		</td>
																		<td style="">
																			<a href="#">
																				<span class="w-32 avatar gd-info">
																					<img src="../assets/img/a9.jpg" alt=".">
																					</span>
																				</a>
																			</td>
																			<td class="flex" style="">
																				<a href="#" class="item-title text-color">Web App develop tutorial</a>
																				<div class="item-except text-muted text-sm h-1x">Build a progressive web app using jQuery</div>
																			</td>
																			<td style="">
																				<span class="item-amount d-none d-sm-block text-sm">2310</span>
																			</td>
																			<td style="">
																				<span class="item-amount d-none d-sm-block text-sm [object Object]">20</span>
																			</td>
																			<td style="">
																				<div class="item-action dropdown">
																					<a href="#" data-toggle="dropdown" class="text-muted">
																						<svg
																							xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-vertical">
																							<circle cx="12" cy="12" r="1"></circle>
																							<circle cx="12" cy="5" r="1"></circle>
																							<circle cx="12" cy="19" r="1"></circle>
																						</svg>
																					</a>
																					<div class="dropdown-menu dropdown-menu-right bg-black" role="menu">
																						<a class="dropdown-item" href="#">See detail </a>
																						<a class="dropdown-item download">Download </a>
																						<a class="dropdown-item edit">Edit</a>
																						<div class="dropdown-divider"></div>
																						<a class="dropdown-item trash">Delete item</a>
																					</div>
																				</div>
																			</td>
																		</tr>
																		<tr class="" data-index="8" data-id="7">
																			<td style="">
																				<small class="text-muted">7</small>
																			</td>
																			<td style="">
																				<a href="#">
																					<span class="w-32 avatar gd-primary">
																						<img src="../assets/img/a7.jpg" alt=".">
																						</span>
																					</a>
																				</td>
																				<td class="flex" style="">
																					<a href="#" class="item-title text-color">Design improvement</a>
																					<div class="item-except text-muted text-sm h-1x">Today we're working on improving the design to make the data you need more accessible!</div>
																				</td>
																				<td style="">
																					<span class="item-amount d-none d-sm-block text-sm">510</span>
																				</td>
																				<td style="">
																					<span class="item-amount d-none d-sm-block text-sm [object Object]">5</span>
																				</td>
																				<td style="">
																					<div class="item-action dropdown">
																						<a href="#" data-toggle="dropdown" class="text-muted">
																							<svg
																								xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-vertical">
																								<circle cx="12" cy="12" r="1"></circle>
																								<circle cx="12" cy="5" r="1"></circle>
																								<circle cx="12" cy="19" r="1"></circle>
																							</svg>
																						</a>
																						<div class="dropdown-menu dropdown-menu-right bg-black" role="menu">
																							<a class="dropdown-item" href="#">See detail </a>
																							<a class="dropdown-item download">Download </a>
																							<a class="dropdown-item edit">Edit</a>
																							<div class="dropdown-divider"></div>
																							<a class="dropdown-item trash">Delete item</a>
																						</div>
																					</div>
																				</td>
																			</tr>
																			<tr class="" data-index="9" data-id="6">
																				<td style="">
																					<small class="text-muted">6</small>
																				</td>
																				<td style="">
																					<a href="#">
																						<span class="w-32 avatar gd-danger">
																							<img src="../assets/img/a6.jpg" alt=".">
																							</span>
																						</a>
																					</td>
																					<td class="flex" style="">
																						<a href="#" class="item-title text-color">eBay Dashboard</a>
																						<div class="item-except text-muted text-sm h-1x">This makes me believe there are good people in the world still</div>
																					</td>
																					<td style="">
																						<span class="item-amount d-none d-sm-block text-sm">220</span>
																					</td>
																					<td style="">
																						<span class="item-amount d-none d-sm-block text-sm [object Object]">5</span>
																					</td>
																					<td style="">
																						<div class="item-action dropdown">
																							<a href="#" data-toggle="dropdown" class="text-muted">
																								<svg
																									xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-vertical">
																									<circle cx="12" cy="12" r="1"></circle>
																									<circle cx="12" cy="5" r="1"></circle>
																									<circle cx="12" cy="19" r="1"></circle>
																								</svg>
																							</a>
																							<div class="dropdown-menu dropdown-menu-right bg-black" role="menu">
																								<a class="dropdown-item" href="#">See detail </a>
																								<a class="dropdown-item download">Download </a>
																								<a class="dropdown-item edit">Edit</a>
																								<div class="dropdown-divider"></div>
																								<a class="dropdown-item trash">Delete item</a>
																							</div>
																						</div>
																					</td>
																				</tr>
																			</tbody>
																		</table>
																	</div>
																	<div class="fixed-table-footer" style="display: none;">
																		<table>
																			<tbody>
																				<tr></tr>
																			</tbody>
																		</table>
																	</div>
																</div>
																<div class="fixed-table-pagination">
																	<div class="float-left pagination-detail">
																		<span class="pagination-info">Showing 1 to 10 of 15 rows</span>
																		<span class="page-list">
																			<span class="btn-group dropup">
																				<button type="button" class="btn btn-white dropdown-toggle" data-toggle="dropdown">
																					<span class="page-size">10</span>
																					<span class="caret"></span>
																				</button>
																				<div class="dropdown-menu">
																					<a class="dropdown-item active" href="#">10</a>
																					<a class="dropdown-item " href="#">25</a>
																				</div>
																			</span> rows per page
																		</span>
																	</div>
																	<div class="float-right pagination">
																		<ul class="pagination">
																			<li class="page-item page-pre">
																				<a class="page-link" href="#">‹</a>
																			</li>
																			<li class="page-item active">
																				<a class="page-link" href="#">1</a>
																			</li>
																			<li class="page-item">
																				<a class="page-link" href="#">2</a>
																			</li>
																			<li class="page-item page-next">
																				<a class="page-link" href="#">›</a>
																			</li>
																		</ul>
																	</div>
																</div>
															</div>
															<div class="clearfix"></div>
														</div>
													</div>
												</div>
    `,
    init: function() {
        document.getElementById('content').innerHTML = this.html;
    }
}