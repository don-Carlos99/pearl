var appStyles = {
    html: `
    <div class="">
	<div class="page-hero page-container" id="page-hero">
		<div class="padding d-flex">
			<div class="page-title">
				<h2 class="text-md text-highlight">Style</h2>
				<small class="text-muted">Format data into a table</small>
			</div>
			<div class="flex"></div>
			
		</div>
	</div>
	<div class="page-content page-container" id="page-content">
		<div class="padding">
			<div class="mb-5">
				<div class="toolbar">
					<div class="btn-group">
						<button class="btn btn-sm btn-icon btn-white" data-toggle="tooltip" title="" id="btn-trash" data-original-title="Trash">
							<svg
								xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash text-muted">
								<polyline points="3 6 5 6 21 6"></polyline>
								<path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
							</svg>
						</button>
						<button class="btn btn-sm btn-icon btn-white sort" data-sort="item-title" data-toggle="tooltip" title="" data-original-title="Sort">
							<i class="sorting"></i>
						</button>
					</div>
					<form class="flex">
						<div class="input-group">
							<input type="text" class="form-control form-control-theme form-control-sm search" placeholder="Search" required="">
								<span class="input-group-append">
									<button class="btn btn-white no-border btn-sm" type="button">
										<span class="d-flex text-muted">
											<svg
												xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search">
												<circle cx="11" cy="11" r="8"></circle>
												<line x1="21" y1="21" x2="16.65" y2="16.65"></line>
											</svg>
										</span>
									</button>
								</span>
							</div>
						</form>
					</div>
					<div class="table-responsive">
						<table class="table table-theme table-row v-middle">
							<thead>
								<tr>
									<th style="width:20px">
										<label class="ui-check m-0">
											<input type="checkbox">
												<i></i>
											</label>
										</th>
										<th class="text-muted">Owner</th>
										<th class="text-muted sortable" data-toggle-class="asc">Project</th>
										<th class="text-muted">
											<span class="d-none d-sm-block">Tasks</span>
										</th>
										<th class="text-muted">
											<span class="d-none d-sm-block">Finish</span>
										</th>
										<th style="width:50px"></th>
									</tr>
								</thead>
								<tbody>
									<tr class="v-middle" data-id="9">
										<td>
											<label class="ui-check m-0">
												<input type="checkbox" name="id" value="9">
													<i></i>
												</label>
											</td>
											<td>
												<div class="avatar-group">
													<a href="#" class="avatar ajax w-32" data-toggle="tooltip" title="" data-pjax-state="" data-original-title="Euismod">
														<img src="../assets/img/a7.jpg" alt=".">
														</a>
													</div>
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
											<tr class="v-middle" data-id="1">
												<td>
													<label class="ui-check m-0">
														<input type="checkbox" name="id" value="1">
															<i></i>
														</label>
													</td>
													<td>
														<div class="avatar-group">
															<a href="#" class="avatar ajax w-32" data-toggle="tooltip" title="" data-pjax-state="" data-original-title="Duis">
																<img src="../assets/img/a2.jpg" alt=".">
																</a>
																<a href="#" class="avatar ajax w-32" data-toggle="tooltip" title="" data-pjax-state="" data-original-title="At">
																	<img src="../assets/img/a14.jpg" alt=".">
																	</a>
																</div>
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
														<tr class="v-middle" data-id="14">
															<td>
																<label class="ui-check m-0">
																	<input type="checkbox" name="id" value="14">
																		<i></i>
																	</label>
																</td>
																<td>
																	<div class="avatar-group">
																		<a href="#" class="avatar ajax w-32" data-toggle="tooltip" title="" data-pjax-state="" data-original-title="Justo,">
																			<img src="../assets/img/a8.jpg" alt=".">
																			</a>
																			<a href="#" class="avatar ajax w-32" data-toggle="tooltip" title="" data-pjax-state="" data-original-title="Lobortis">
																				<img src="../assets/img/a9.jpg" alt=".">
																				</a>
																				<a href="#" class="avatar ajax w-32" data-toggle="tooltip" title="" data-pjax-state="" data-original-title="Nam">
																					<img src="../assets/img/a11.jpg" alt=".">
																					</a>
																				</div>
																			</td>
																			<td class="flex">
																				<a href="#" class="item-title text-color">Database management</a>
																				<div class="item-except text-muted text-sm h-1x">Managing data in all software or applications becomes simplified when you make use of the best 
																					<a href="#">#DatabaseMan</a>
																				</div>
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
																		<tr class="v-middle" data-id="2">
																			<td>
																				<label class="ui-check m-0">
																					<input type="checkbox" name="id" value="2">
																						<i></i>
																					</label>
																				</td>
																				<td>
																					<div class="avatar-group">
																						<a href="#" class="avatar ajax w-32" data-toggle="tooltip" title="" data-pjax-state="" data-original-title="Tincidunt">
																							<img src="../assets/img/a2.jpg" alt=".">
																							</a>
																							<a href="#" class="avatar ajax w-32" data-toggle="tooltip" title="" data-pjax-state="" data-original-title="Massa">
																								<img src="../assets/img/a1.jpg" alt=".">
																								</a>
																								<a href="#" class="avatar ajax w-32" data-toggle="tooltip" title="" data-pjax-state="" data-original-title="Ornare">
																									<img src="../assets/img/a1.jpg" alt=".">
																									</a>
																								</div>
																							</td>
																							<td class="flex">
																								<a href="#" class="item-title text-color">Data analytics application</a>
																								<div class="item-except text-muted text-sm h-1x">With 
																									<a href="#">@Dashboard</a>, you can create fully customized and interactive snapshots, scorecards, and dashboards. Visit our live dashboard gallery to see a glimpse of what's possible.
																								</div>
																							</td>
																							<td>
																								<span class="item-amount d-none d-sm-block text-sm">10</span>
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
																						<tr class="v-middle" data-id="16">
																							<td>
																								<label class="ui-check m-0">
																									<input type="checkbox" name="id" value="16">
																										<i></i>
																									</label>
																								</td>
																								<td>
																									<div class="avatar-group">
																										<a href="#" class="avatar ajax w-32" data-toggle="tooltip" title="" data-pjax-state="" data-original-title="Nibh">
																											<img src="../assets/img/a15.jpg" alt=".">
																											</a>
																											<a href="#" class="avatar ajax w-32" data-toggle="tooltip" title="" data-pjax-state="" data-original-title="Quam">
																												<img src="../assets/img/a13.jpg" alt=".">
																												</a>
																											</div>
																										</td>
																										<td class="flex">
																											<a href="#" class="item-title text-color">AI Could Uber</a>
																											<div class="item-except text-muted text-sm h-1x">When it comes to artificial intelligence, little things can add up in big ways</div>
																										</td>
																										<td>
																											<span class="item-amount d-none d-sm-block text-sm">200</span>
																										</td>
																										<td>
																											<span class="item-amount d-none d-sm-block text-sm [object Object]">53</span>
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
																									<tr class="v-middle" data-id="10">
																										<td>
																											<label class="ui-check m-0">
																												<input type="checkbox" name="id" value="10">
																													<i></i>
																												</label>
																											</td>
																											<td>
																												<div class="avatar-group">
																													<a href="#" class="avatar ajax w-32" data-toggle="tooltip" title="" data-pjax-state="" data-original-title="Sed">
																														<img src="../assets/img/a12.jpg" alt=".">
																														</a>
																														<a href="#" class="avatar ajax w-32" data-toggle="tooltip" title="" data-pjax-state="" data-original-title="Non">
																															<img src="../assets/img/a5.jpg" alt=".">
																															</a>
																															<a href="#" class="avatar ajax w-32" data-toggle="tooltip" title="" data-pjax-state="" data-original-title="Nibh">
																																<img src="../assets/img/a8.jpg" alt=".">
																																</a>
																															</div>
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
																													<tr class="v-middle" data-id="3">
																														<td>
																															<label class="ui-check m-0">
																																<input type="checkbox" name="id" value="3">
																																	<i></i>
																																</label>
																															</td>
																															<td>
																																<div class="avatar-group">
																																	<a href="#" class="avatar ajax w-32" data-toggle="tooltip" title="" data-pjax-state="" data-original-title="Massa">
																																		<img src="../assets/img/a12.jpg" alt=".">
																																		</a>
																																	</div>
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
																															<tr class="v-middle" data-id="20">
																																<td>
																																	<label class="ui-check m-0">
																																		<input type="checkbox" name="id" value="20">
																																			<i></i>
																																		</label>
																																	</td>
																																	<td>
																																		<div class="avatar-group">
																																			<a href="#" class="avatar ajax w-32" data-toggle="tooltip" title="" data-pjax-state="" data-original-title="Luctus">
																																				<img src="../assets/img/a6.jpg" alt=".">
																																				</a>
																																				<a href="#" class="avatar ajax w-32" data-toggle="tooltip" title="" data-pjax-state="" data-original-title="Cras">
																																					<img src="../assets/img/a12.jpg" alt=".">
																																					</a>
																																					<a href="#" class="avatar ajax w-32" data-toggle="tooltip" title="" data-pjax-state="" data-original-title="A,">
																																						<img src="../assets/img/a13.jpg" alt=".">
																																						</a>
																																					</div>
																																				</td>
																																				<td class="flex">
																																					<a href="#" class="item-title text-color">Netflix hackathon ios app</a>
																																					<div class="item-except text-muted text-sm h-1x">Netflix hackathon creates eye tracking option for iOS app</div>
																																				</td>
																																				<td>
																																					<span class="item-amount d-none d-sm-block text-sm">120</span>
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
																																			<tr class="v-middle" data-id="4">
																																				<td>
																																					<label class="ui-check m-0">
																																						<input type="checkbox" name="id" value="4">
																																							<i></i>
																																						</label>
																																					</td>
																																					<td>
																																						<div class="avatar-group">
																																							<a href="#" class="avatar ajax w-32" data-toggle="tooltip" title="" data-pjax-state="" data-original-title="Tortor">
																																								<img src="../assets/img/a9.jpg" alt=".">
																																								</a>
																																							</div>
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
																																					<tr class="v-middle" data-id="19">
																																						<td>
																																							<label class="ui-check m-0">
																																								<input type="checkbox" name="id" value="19">
																																									<i></i>
																																								</label>
																																							</td>
																																							<td>
																																								<div class="avatar-group">
																																									<a href="#" class="avatar ajax w-32" data-toggle="tooltip" title="" data-pjax-state="" data-original-title="Non">
																																										<img src="../assets/img/a15.jpg" alt=".">
																																										</a>
																																										<a href="#" class="avatar ajax w-32" data-toggle="tooltip" title="" data-pjax-state="" data-original-title="Orci">
																																											<img src="../assets/img/a4.jpg" alt=".">
																																											</a>
																																											<a href="#" class="avatar ajax w-32" data-toggle="tooltip" title="" data-pjax-state="" data-original-title="Neque">
																																												<img src="../assets/img/a9.jpg" alt=".">
																																												</a>
																																											</div>
																																										</td>
																																										<td class="flex">
																																											<a href="#" class="item-title text-color">IOS Application</a>
																																											<div class="item-except text-muted text-sm h-1x">We design and implement native iOS apps that harmonize simplicity of design and complexity of function</div>
																																										</td>
																																										<td>
																																											<span class="item-amount d-none d-sm-block text-sm">320</span>
																																										</td>
																																										<td>
																																											<span class="item-amount d-none d-sm-block text-sm [object Object]">25</span>
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
																																						<div class="d-flex">
																																							<ul class="pagination">
																																								<li class="page-item disabled">
																																									<a class="page-link" href="#" aria-label="Previous">
																																										<span aria-hidden="true">«</span>
																																										<span class="sr-only">Previous</span>
																																									</a>
																																								</li>
																																								<li class="page-item active">
																																									<a class="page-link" href="#">1 
																																										<span class="sr-only">(current)</span>
																																									</a>
																																								</li>
																																								<li class="page-item">
																																									<a class="page-link" href="#">2</a>
																																								</li>
																																								<li class="page-item">
																																									<a class="page-link" href="#">3</a>
																																								</li>
																																								<li class="page-item">
																																									<a class="page-link" href="#">4</a>
																																								</li>
																																								<li class="page-item">
																																									<a class="page-link" href="#">5</a>
																																								</li>
																																								<li class="page-item">
																																									<a class="page-link" href="#" aria-label="Next">
																																										<span aria-hidden="true">»</span>
																																										<span class="sr-only">Next</span>
																																									</a>
																																								</li>
																																							</ul>
																																							<small class="text-muted py-2 mx-2">Total 
																																								<span id="count">15</span> items
																																							</small>
																																						</div>
																																					</div>
																																					<div class="row">
																																						<div class="col-sm-6">
																																							<table class="table table-theme v-middle">
																																								<thead class="text-muted">
																																									<tr>
																																										<th></th>
																																										<th>User</th>
																																										<th>Information</th>
																																										<th>Num</th>
																																									</tr>
																																								</thead>
																																								<tbody>
																																									<tr class="v-middle" data-id="2">
																																										<td>
																																											<label class="ui-check m-0">
																																												<input type="checkbox" name="id" value="2">
																																													<i></i>
																																												</label>
																																											</td>
																																											<td>
																																												<a href="#">
																																													<span class="w-32 avatar gd-primary">
																																														<img src="../assets/img/a2.jpg" alt=".">
																																														</span>
																																													</a>
																																												</td>
																																												<td class="flex">
																																													<a href="#" class="item-author text-color">Kathy Alexander</a>
																																													<div class="item-except text-muted text-sm h-1x">With 
																																														<a href="#">@Dashboard</a>, you can create fully customized and interactive snapshots, scorecards, and dashboards. Visit our live dashboard gallery to see a glimpse of what's possible.
																																													</div>
																																												</td>
																																												<td>
																																													<span class="item-amount d-none d-sm-block text-sm">10</span>
																																												</td>
																																											</tr>
																																											<tr class="v-middle" data-id="12">
																																												<td>
																																													<label class="ui-check m-0">
																																														<input type="checkbox" name="id" value="12">
																																															<i></i>
																																														</label>
																																													</td>
																																													<td>
																																														<a href="#">
																																															<span class="w-32 avatar gd-info">A</span>
																																														</a>
																																													</td>
																																													<td class="flex">
																																														<a href="#" class="item-author text-color">Alan Richards</a>
																																														<div class="item-except text-muted text-sm h-1x">Our client is an IT Healthcare start-up that provides process improvement solutions</div>
																																													</td>
																																													<td>
																																														<span class="item-amount d-none d-sm-block text-sm">14</span>
																																													</td>
																																												</tr>
																																												<tr class="v-middle" data-id="1">
																																													<td>
																																														<label class="ui-check m-0">
																																															<input type="checkbox" name="id" value="1">
																																																<i></i>
																																															</label>
																																														</td>
																																														<td>
																																															<a href="#">
																																																<span class="w-32 avatar gd-primary">
																																																	<img src="../assets/img/a1.jpg" alt=".">
																																																	</span>
																																																</a>
																																															</td>
																																															<td class="flex">
																																																<a href="#" class="item-author text-color">Joyce McCoy</a>
																																																<div class="item-except text-muted text-sm h-1x">In WordPress Tutorial, we’ll streamline the process for you by pointing out the all key features of the WordPress</div>
																																															</td>
																																															<td>
																																																<span class="item-amount d-none d-sm-block text-sm">210</span>
																																															</td>
																																														</tr>
																																														<tr class="v-middle" data-id="17">
																																															<td>
																																																<label class="ui-check m-0">
																																																	<input type="checkbox" name="id" value="17">
																																																		<i></i>
																																																	</label>
																																																</td>
																																																<td>
																																																	<a href="#">
																																																		<span class="w-32 avatar gd-warning">A</span>
																																																	</a>
																																																</td>
																																																<td class="flex">
																																																	<a href="#" class="item-author text-color">Alan Mendez</a>
																																																	<div class="item-except text-muted text-sm h-1x">Alibaba made a smart screen to help blind people shop and it costs next to nothing</div>
																																																</td>
																																																<td>
																																																	<span class="item-amount d-none d-sm-block text-sm">320</span>
																																																</td>
																																															</tr>
																																															<tr class="v-middle" data-id="11">
																																																<td>
																																																	<label class="ui-check m-0">
																																																		<input type="checkbox" name="id" value="11">
																																																			<i></i>
																																																		</label>
																																																	</td>
																																																	<td>
																																																		<a href="#">
																																																			<span class="w-32 avatar gd-info">K</span>
																																																		</a>
																																																	</td>
																																																	<td class="flex">
																																																		<a href="#" class="item-author text-color">Kenneth Pierce</a>
																																																		<div class="item-except text-muted text-sm h-1x">@DataAPI Implemented new API for transation data from client to server.</div>
																																																	</td>
																																																	<td>
																																																		<span class="item-amount d-none d-sm-block text-sm">240</span>
																																																	</td>
																																																</tr>
																																															</tbody>
																																														</table>
																																													</div>
																																													<div class="col-sm-6">
																																														<table class="table table-theme v-middle table-hover">
																																															<thead class="text-muted">
																																																<tr>
																																																	<th>#</th>
																																																	<th>Project</th>
																																																	<th>
																																																		<span class="d-none d-sm-block">Income</span>
																																																	</th>
																																																	<th>
																																																		<span class="d-none d-sm-block">Date</span>
																																																	</th>
																																																</tr>
																																															</thead>
																																															<tbody>
																																																<tr class="v-middle" data-id="19">
																																																	<td style="min-width:30px;text-align:center">
																																																		<small class="text-muted">19</small>
																																																	</td>
																																																	<td class="flex">
																																																		<a href="#" class="item-title text-color h-1x">IOS Application</a>
																																																		<a href="#" class="item-company text-muted h-1x">AI</a>
																																																	</td>
																																																	<td>
																																																		<span class="item-amount d-none d-sm-block text-sm">320</span>
																																																	</td>
																																																	<td class="no-wrap">
																																																		<div class="item-date text-muted text-sm d-none d-md-block">13/12 18</div>
																																																	</td>
																																																</tr>
																																																<tr class="v-middle" data-id="16">
																																																	<td style="min-width:30px;text-align:center">
																																																		<small class="text-muted">16</small>
																																																	</td>
																																																	<td class="flex">
																																																		<a href="#" class="item-title text-color h-1x">AI Could Uber</a>
																																																		<a href="#" class="item-company text-muted h-1x">Microsoft</a>
																																																	</td>
																																																	<td>
																																																		<span class="item-amount d-none d-sm-block text-sm">200</span>
																																																	</td>
																																																	<td class="no-wrap">
																																																		<div class="item-date text-muted text-sm d-none d-md-block">03/12 18</div>
																																																	</td>
																																																</tr>
																																																<tr class="v-middle" data-id="17">
																																																	<td style="min-width:30px;text-align:center">
																																																		<small class="text-muted">17</small>
																																																	</td>
																																																	<td class="flex">
																																																		<a href="#" class="item-title text-color h-1x">AI Could Uber</a>
																																																		<a href="#" class="item-company text-muted h-1x">Alibaba</a>
																																																	</td>
																																																	<td>
																																																		<span class="item-amount d-none d-sm-block text-sm">320</span>
																																																	</td>
																																																	<td class="no-wrap">
																																																		<div class="item-date text-muted text-sm d-none d-md-block">13/12 18</div>
																																																	</td>
																																																</tr>
																																																<tr class="v-middle" data-id="13">
																																																	<td style="min-width:30px;text-align:center">
																																																		<small class="text-muted">13</small>
																																																	</td>
																																																	<td class="flex">
																																																		<a href="#" class="item-title text-color h-1x">Feed Reader</a>
																																																		<a href="#" class="item-company text-muted h-1x">JoeJoe company</a>
																																																	</td>
																																																	<td>
																																																		<span class="item-amount d-none d-sm-block text-sm">14</span>
																																																	</td>
																																																	<td class="no-wrap">
																																																		<div class="item-date text-muted text-sm d-none d-md-block">3 weeks ago</div>
																																																	</td>
																																																</tr>
																																																<tr class="v-middle" data-id="5">
																																																	<td style="min-width:30px;text-align:center">
																																																		<small class="text-muted">5</small>
																																																	</td>
																																																	<td class="flex">
																																																		<a href="#" class="item-title text-color h-1x">Google Analytics training</a>
																																																		<a href="#" class="item-company text-muted h-1x">Sun</a>
																																																	</td>
																																																	<td>
																																																		<span class="item-amount d-none d-sm-block text-sm">100</span>
																																																	</td>
																																																	<td class="no-wrap">
																																																		<div class="item-date text-muted text-sm d-none d-md-block">3 days ago</div>
																																																	</td>
																																																</tr>
																																															</tbody>
																																														</table>
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