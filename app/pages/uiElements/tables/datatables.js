var appDatatables = {
    html: `
    <div>
	<div class="page-hero page-container" id="page-hero">
		<div class="padding d-flex">
			<div class="page-title">
				<h2 class="text-md text-highlight">Datatables</h2>
				<small class="text-muted">Tables plug-in for jQuery</small>
			</div>
			<div class="flex"></div>
			
		</div>
	</div>
	<div class="page-content page-container" id="page-content">
		<div class="padding">
			<div class="table-responsive">
				<div id="datatable_wrapper" class="dataTables_wrapper dt-bootstrap4 no-footer">
					<div class="row">
						<div class="col-sm-12 col-md-6">
							<div class="dataTables_length" id="datatable_length">
								<label>Show 
									<select name="datatable_length" aria-controls="datatable" class="custom-select custom-select-sm form-control form-control-sm">
										<option value="10">10</option>
										<option value="25">25</option>
										<option value="50">50</option>
										<option value="100">100</option>
									</select> entries
								</label>
							</div>
						</div>
						<div class="col-sm-12 col-md-6">
							<div id="datatable_filter" class="dataTables_filter">
								<label>Search:
									<input type="search" class="form-control form-control-sm" placeholder="" aria-controls="datatable">
									</label>
								</div>
							</div>
						</div>
						<div class="row">
							<div class="col-sm-12">
								<table id="datatable" class="table table-theme table-row v-middle dataTable no-footer" role="grid" aria-describedby="datatable_info">
									<thead>
										<tr role="row">
											<th class="sorting_asc" tabindex="0" aria-controls="datatable" rowspan="1" colspan="1" aria-sort="ascending" aria-label="ID: activate to sort column descending" style="width: 29px;">
												<span class="text-muted">ID</span>
											</th>
											<th class="sorting" tabindex="0" aria-controls="datatable" rowspan="1" colspan="1" aria-label="Owner: activate to sort column ascending" style="width: 38px;">
												<span class="text-muted">Owner</span>
											</th>
											<th class="sorting" tabindex="0" aria-controls="datatable" rowspan="1" colspan="1" aria-label="Project: activate to sort column ascending" style="width: 761px;">
												<span class="text-muted">Project</span>
											</th>
											<th class="sorting_disabled" rowspan="1" colspan="1" aria-label="Tasks" style="width: 32px;">
												<span class="text-muted d-none d-sm-block">Tasks</span>
											</th>
											<th class="sorting_disabled" rowspan="1" colspan="1" aria-label="Finish" style="width: 34px;">
												<span class="text-muted d-none d-sm-block">Finish</span>
											</th>
											<th class="sorting_disabled" rowspan="1" colspan="1" aria-label="" style="width: 19px;"></th>
										</tr>
									</thead>
									<tbody>
										<tr class="odd" data-id="1" role="row">
											<td style="min-width:30px;text-align:center" class="sorting_1">
												<small class="text-muted">1</small>
											</td>
											<td>
												<a href="#">
													<span class="w-32 avatar gd-primary">
														<img src="../assets/img/a1.jpg" alt=".">
														</span>
													</a>
												</td>
												<td class="flex">
													<a href="#" class="item-title text-color">WordPress dashboard redesign</a>
													<div class="item-except text-muted text-sm h-1x">In WordPress Tutorial, we’ll streamline the process for you by pointing out the all key features of the WordPress</div>
												</td>
												<td>
													<span class="item-amount d-none d-sm-block text-sm">210</span>
												</td>
												<td>
													<span class="item-amount d-none d-sm-block text-sm [object Object]">5</span>
												</td>
												<td>
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
											<tr class="even" data-id="3" role="row">
												<td style="min-width:30px;text-align:center" class="sorting_1">
													<small class="text-muted">3</small>
												</td>
												<td>
													<a href="#">
														<span class="w-32 avatar gd-primary">
															<img src="../assets/img/a3.jpg" alt=".">
															</span>
														</a>
													</td>
													<td class="flex">
														<a href="#" class="item-title text-color">Html5 dashboard conference</a>
														<div class="item-except text-muted text-sm h-1x">Less than a month till we head over to the UK &amp; Ireland with @NextUI</div>
													</td>
													<td>
														<span class="item-amount d-none d-sm-block text-sm">10</span>
													</td>
													<td>
														<span class="item-amount d-none d-sm-block text-sm [object Object]">50</span>
													</td>
													<td>
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
												<tr class="odd" data-id="4" role="row">
													<td style="min-width:30px;text-align:center" class="sorting_1">
														<small class="text-muted">4</small>
													</td>
													<td>
														<a href="#">
															<span class="w-32 avatar gd-success">
																<img src="../assets/img/a4.jpg" alt=".">
																</span>
															</a>
														</td>
														<td class="flex">
															<a href="#" class="item-title text-color">Open source project public release</a>
															<div class="item-except text-muted text-sm h-1x">New out-of-the box dashboards and enhanced security and compliance</div>
														</td>
														<td>
															<span class="item-amount d-none d-sm-block text-sm">20</span>
														</td>
														<td>
															<span class="item-amount d-none d-sm-block text-sm [object Object]">7</span>
														</td>
														<td>
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
													<tr class="even" data-id="5" role="row">
														<td style="min-width:30px;text-align:center" class="sorting_1">
															<small class="text-muted">5</small>
														</td>
														<td>
															<a href="#">
																<span class="w-32 avatar gd-warning">
																	<img src="../assets/img/a5.jpg" alt=".">
																	</span>
																</a>
															</td>
															<td class="flex">
																<a href="#" class="item-title text-color">Google Analytics training</a>
																<div class="item-except text-muted text-sm h-1x">Free Worksheet included. Read on through or save for later but face the fear of entering your Google Analytics</div>
															</td>
															<td>
																<span class="item-amount d-none d-sm-block text-sm">100</span>
															</td>
															<td>
																<span class="item-amount d-none d-sm-block text-sm [object Object]">3</span>
															</td>
															<td>
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
														<tr class="odd" data-id="6" role="row">
															<td style="min-width:30px;text-align:center" class="sorting_1">
																<small class="text-muted">6</small>
															</td>
															<td>
																<a href="#">
																	<span class="w-32 avatar gd-danger">
																		<img src="../assets/img/a6.jpg" alt=".">
																		</span>
																	</a>
																</td>
																<td class="flex">
																	<a href="#" class="item-title text-color">eBay Dashboard</a>
																	<div class="item-except text-muted text-sm h-1x">This makes me believe there are good people in the world still</div>
																</td>
																<td>
																	<span class="item-amount d-none d-sm-block text-sm">220</span>
																</td>
																<td>
																	<span class="item-amount d-none d-sm-block text-sm [object Object]">5</span>
																</td>
																<td>
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
															<tr class="even" data-id="8" role="row">
																<td style="min-width:30px;text-align:center" class="sorting_1">
																	<small class="text-muted">8</small>
																</td>
																<td>
																	<a href="#">
																		<span class="w-32 avatar gd-success">
																			<img src="../assets/img/a8.jpg" alt=".">
																			</span>
																		</a>
																	</td>
																	<td class="flex">
																		<a href="#" class="item-title text-color">DEV DAY 2018</a>
																		<div class="item-except text-muted text-sm h-1x">Working on a research piece on the history of vocational schools in America.</div>
																	</td>
																	<td>
																		<span class="item-amount d-none d-sm-block text-sm">220</span>
																	</td>
																	<td>
																		<span class="item-amount d-none d-sm-block text-sm [object Object]">4</span>
																	</td>
																	<td>
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
																<tr class="odd" data-id="9" role="row">
																	<td style="min-width:30px;text-align:center" class="sorting_1">
																		<small class="text-muted">9</small>
																	</td>
																	<td>
																		<a href="#">
																			<span class="w-32 avatar gd-info">
																				<img src="../assets/img/a9.jpg" alt=".">
																				</span>
																			</a>
																		</td>
																		<td class="flex">
																			<a href="#" class="item-title text-color">Web App develop tutorial</a>
																			<div class="item-except text-muted text-sm h-1x">Build a progressive web app using jQuery</div>
																		</td>
																		<td>
																			<span class="item-amount d-none d-sm-block text-sm">2310</span>
																		</td>
																		<td>
																			<span class="item-amount d-none d-sm-block text-sm [object Object]">20</span>
																		</td>
																		<td>
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
																	<tr class="even" data-id="10" role="row">
																		<td style="min-width:30px;text-align:center" class="sorting_1">
																			<small class="text-muted">10</small>
																		</td>
																		<td>
																			<a href="#">
																				<span class="w-32 avatar gd-danger">
																					<img src="../assets/img/a10.jpg" alt=".">
																					</span>
																				</a>
																			</td>
																			<td class="flex">
																				<a href="#" class="item-title text-color">AI assistant</a>
																				<div class="item-except text-muted text-sm h-1x">Leaders are running an AMA on Reddit. Ask your question and find out how the project is going</div>
																			</td>
																			<td>
																				<span class="item-amount d-none d-sm-block text-sm">240</span>
																			</td>
																			<td>
																				<span class="item-amount d-none d-sm-block text-sm [object Object]">50</span>
																			</td>
																			<td>
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
																		<tr class="odd" data-id="11" role="row">
																			<td style="min-width:30px;text-align:center" class="sorting_1">
																				<small class="text-muted">11</small>
																			</td>
																			<td>
																				<a href="#">
																					<span class="w-32 avatar gd-info">K</span>
																				</a>
																			</td>
																			<td class="flex">
																				<a href="#" class="item-title text-color">Fitness application</a>
																				<div class="item-except text-muted text-sm h-1x">@DataAPI Implemented new API for transation data from client to server.</div>
																			</td>
																			<td>
																				<span class="item-amount d-none d-sm-block text-sm">240</span>
																			</td>
																			<td>
																				<span class="item-amount d-none d-sm-block text-sm [object Object]">50</span>
																			</td>
																			<td>
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
																		<tr class="even" data-id="12" role="row">
																			<td style="min-width:30px;text-align:center" class="sorting_1">
																				<small class="text-muted">12</small>
																			</td>
																			<td>
																				<a href="#">
																					<span class="w-32 avatar gd-info">A</span>
																				</a>
																			</td>
																			<td class="flex">
																				<a href="#" class="item-title text-color">Sales Support</a>
																				<div class="item-except text-muted text-sm h-1x">Our client is an IT Healthcare start-up that provides process improvement solutions</div>
																			</td>
																			<td>
																				<span class="item-amount d-none d-sm-block text-sm">14</span>
																			</td>
																			<td>
																				<span class="item-amount d-none d-sm-block text-sm [object Object]">20</span>
																			</td>
																			<td>
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
														</div>
														<div class="row">
															<div class="col-sm-12 col-md-5">
																<div class="dataTables_info" id="datatable_info" role="status" aria-live="polite">Showing 1 to 10 of 15 entries</div>
															</div>
															<div class="col-sm-12 col-md-7">
																<div class="dataTables_paginate paging_simple_numbers" id="datatable_paginate">
																	<ul class="pagination">
																		<li class="paginate_button page-item previous disabled" id="datatable_previous">
																			<a href="#" aria-controls="datatable" data-dt-idx="0" tabindex="0" class="page-link">Previous</a>
																		</li>
																		<li class="paginate_button page-item active">
																			<a href="#" aria-controls="datatable" data-dt-idx="1" tabindex="0" class="page-link">1</a>
																		</li>
																		<li class="paginate_button page-item ">
																			<a href="#" aria-controls="datatable" data-dt-idx="2" tabindex="0" class="page-link">2</a>
																		</li>
																		<li class="paginate_button page-item next" id="datatable_next">
																			<a href="#" aria-controls="datatable" data-dt-idx="3" tabindex="0" class="page-link">Next</a>
																		</li>
																	</ul>
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