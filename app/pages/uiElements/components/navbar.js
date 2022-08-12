var appNavbar = {
    html: `
    <div class="">
	<div class="page-hero page-container" id="page-hero">
		<div class="padding d-flex">
			<div class="page-title">
				<h2 class="text-md text-highlight">Navbar</h2>
				<small class="text-muted">Responsive navigation header</small>
			</div>
			<div class="flex"></div>
			
		</div>
	</div>
	<div class="page-content page-container" id="page-content">
		<div class="padding">
			<p>Big search</p>
			<div class="card">
				<div class="navbar navbar-expand-lg">
					<a href="index.html" class="navbar-brand">
						<svg width="32" height="32" viewBox="0 0 512 512"
							xmlns="http://www.w3.org/2000/svg" fill="currentColor">
							<g class="loading-spin" style="transform-origin: 256px 256px">
								<path d="M200.043 106.067c-40.631 15.171-73.434 46.382-90.717 85.933H256l-55.957-85.933zM412.797 288A160.723 160.723 0 0 0 416 256c0-36.624-12.314-70.367-33.016-97.334L311 288h101.797zM359.973 134.395C332.007 110.461 295.694 96 256 96c-7.966 0-15.794.591-23.448 1.715L310.852 224l49.121-89.605zM99.204 224A160.65 160.65 0 0 0 96 256c0 36.639 12.324 70.394 33.041 97.366L201 224H99.204zM311.959 405.932c40.631-15.171 73.433-46.382 90.715-85.932H256l55.959 85.932zM152.046 377.621C180.009 401.545 216.314 416 256 416c7.969 0 15.799-.592 23.456-1.716L201.164 288l-49.118 89.621z"></path>
							</g>
						</svg>
						<span class="hidden-folded d-inline l-s-n-1x">Basik</span>
					</a>
					<div class="collapse navbar-collapse order-2 order-lg-1" id="navbarToggler">
						<form class="input-group m-2 my-lg-0">
							<div class="input-group-prepend">
								<button type="button" class="btn no-shadow no-bg px-0">
									<svg
										xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search">
										<circle cx="11" cy="11" r="8"></circle>
										<line x1="21" y1="21" x2="16.65" y2="16.65"></line>
									</svg>
								</button>
							</div>
							<span class="twitter-typeahead" style="position: relative; display: inline-block;">
								<input type="text" class="form-control no-border no-shadow no-bg typeahead tt-hint" data-api="../assets/api/menu.json" readonly="" autocomplete="off" spellcheck="false" tabindex="-1" style="position: absolute; top: 0px; left: 0px; border-color: transparent; box-shadow: none; opacity: 1; background: none 0px 0px / auto repeat scroll padding-box border-box rgba(0, 0, 0, 0);" dir="ltr">
									<input type="text" class="form-control no-border no-shadow no-bg typeahead tt-input" placeholder="Search components..." data-api="../assets/api/menu.json" autocomplete="off" spellcheck="false" dir="auto" style="position: relative; vertical-align: top; background-color: transparent;">
										<pre aria-hidden="true" style="position: absolute; visibility: hidden; white-space: pre; font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;; font-size: 14px; font-style: normal; font-variant: normal; font-weight: 400; word-spacing: 0px; letter-spacing: 0px; text-indent: 0px; text-rendering: auto; text-transform: none;"></pre>
										<div class="dropdown-menu mt-3" style="position: absolute; top: 100%; left: 0px; z-index: 100; display: none;">
											<div class="tt-dataset tt-dataset-30"></div>
										</div>
									</span>
								</form>
							</div>
							<ul class="nav navbar-menu order-1 order-lg-2">
								<li class="nav-item d-none d-sm-block">
									<a class="nav-link px-2" data-toggle="fullscreen">
										<svg
											xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-maximize">
											<path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path>
										</svg>
									</a>
								</li>
								<li class="nav-item dropdown">
									<a class="nav-link px-2" data-toggle="dropdown">
										<svg
											xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-settings">
											<circle cx="12" cy="12" r="3"></circle>
											<path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
										</svg>
									</a>
									<div class="dropdown-menu dropdown-menu-center mt-3 w animate fadeIn">
										<div class="setting px-3">
											<div class="mb-2 text-muted">
												<strong>Setting:</strong>
											</div>
											<div class="mb-3" id="settingLayout">
												<label class="ui-check ui-check-rounded my-1 d-block">
													<input type="checkbox" name="stickyHeader">
														<i></i>
														<small>Sticky header</small>
													</label>
													<label class="ui-check ui-check-rounded my-1 d-block">
														<input type="checkbox" name="stickyAside">
															<i></i>
															<small>Sticky aside</small>
														</label>
														<label class="ui-check ui-check-rounded my-1 d-block">
															<input type="checkbox" name="foldedAside">
																<i></i>
																<small>Folded Aside</small>
															</label>
															<label class="ui-check ui-check-rounded my-1 d-block">
																<input type="checkbox" name="hideAside">
																	<i></i>
																	<small>Hide Aside</small>
																</label>
															</div>
															<div class="mb-2 text-muted">
																<strong>Color:</strong>
															</div>
															<div class="mb-2">
																<label class="radio radio-inline ui-check ui-check-md">
																	<input type="radio" name="bg" value="">
																		<i></i>
																	</label>
																	<label class="radio radio-inline ui-check ui-check-color ui-check-md">
																		<input type="radio" name="bg" value="bg-dark">
																			<i class="bg-dark"></i>
																		</label>
																	</div>
																	<div class="mb-2 text-muted">
																		<strong>Layouts:</strong>
																	</div>
																	<div class="mb-3">
																		<a href="dashboard.html" class="btn btn-xs btn-white no-ajax mb-1">Default</a>
																		<a href="layout.a.html?bg" class="btn btn-xs btn-primary no-ajax mb-1">A</a>
																		<a href="layout.b.html?bg" class="btn btn-xs btn-info no-ajax mb-1">B</a>
																		<a href="layout.c.html?bg" class="btn btn-xs btn-success no-ajax mb-1">C</a>
																	</div>
																	<div class="mb-2 text-muted">
																		<strong>Apps:</strong>
																	</div>
																	<div>
																		<a href="dashboard.html" class="btn btn-sm btn-white no-ajax mb-1">Dashboard</a>
																		<a href="music.html?bg" class="btn btn-sm btn-white no-ajax mb-1">Music</a>
																		<a href="video.html?bg" class="btn btn-sm btn-white no-ajax mb-1">Video</a>
																	</div>
																</div>
															</div>
														</li>
														<li class="nav-item dropdown">
															<a class="nav-link px-2 mr-lg-2" data-toggle="dropdown">
																<svg
																	xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bell">
																	<path d="M22 17H2a3 3 0 0 0 3-3V9a7 7 0 0 1 14 0v5a3 3 0 0 0 3 3zm-8.27 4a2 2 0 0 1-3.46 0"></path>
																</svg>
																<span class="badge badge-pill badge-up bg-primary">6</span>
															</a>
															<div class="dropdown-menu dropdown-menu-right mt-3 w-md animate fadeIn p-0">
																<div class="scrollable hover" style="max-height: 250px">
																	<div class="list list-row">
																		<div class="list-item" data-id="12">
																			<div>
																				<a href="#">
																					<span class="w-32 avatar gd-info">A</span>
																				</a>
																			</div>
																			<div class="flex">
																				<div class="item-feed h-2x">
																					<a href="#">Support</a> team updated the status
																				</div>
																			</div>
																		</div>
																		<div class="list-item" data-id="17">
																			<div>
																				<a href="#">
																					<span class="w-32 avatar gd-warning">H</span>
																				</a>
																			</div>
																			<div class="flex">
																				<div class="item-feed h-2x">AI will deliver adaptive learning processes in assessments &amp; digital textbooks to personalize learning</div>
																			</div>
																		</div>
																		<div class="list-item" data-id="6">
																			<div>
																				<a href="#">
																					<span class="w-32 avatar gd-danger">
																						<img src="../assets/img/a6.jpg" alt=".">
																						</span>
																					</a>
																				</div>
																				<div class="flex">
																					<div class="item-feed h-2x">Just saw this on the 
																						<a href="#">@eBay</a> dashboard, dude is an absolute unit.
																					</div>
																				</div>
																			</div>
																			<div class="list-item" data-id="1">
																				<div>
																					<a href="#">
																						<span class="w-32 avatar gd-primary">
																							<img src="../assets/img/a1.jpg" alt=".">
																							</span>
																						</a>
																					</div>
																					<div class="flex">
																						<div class="item-feed h-2x">
																							<a href="#">@WordPress</a> How To Get Started With WordPress
																						</div>
																					</div>
																				</div>
																				<div class="list-item" data-id="20">
																					<div>
																						<a href="#">
																							<span class="w-32 avatar gd-warning">G</span>
																						</a>
																					</div>
																					<div class="flex">
																						<div class="item-feed h-2x">
																							<a href="#">@Netflix</a> hackathon
																						</div>
																					</div>
																				</div>
																				<div class="list-item" data-id="15">
																					<div>
																						<a href="#">
																							<span class="w-32 avatar gd-success">J</span>
																						</a>
																					</div>
																					<div class="flex">
																						<div class="item-feed h-2x">Fun project from this weekend. Both computer replicas are fully functional</div>
																					</div>
																				</div>
																			</div>
																		</div>
																		<div class="d-flex px-3 py-2 b-t">
																			<div class="flex">
																				<span>6 Notifications</span>
																			</div>
																			<a href="page.setting.html">See all 
																				<i class="fa fa-angle-right text-muted"></i>
																			</a>
																		</div>
																	</div>
																</li>
																<li class="nav-item dropdown">
																	<a href="#" data-toggle="dropdown" class="nav-link d-flex align-items-center px-2 text-color">
																		<span class="avatar w-24" style="margin: -2px">
																			<img src="../assets/img/a1.jpg" alt="...">
																			</span>
																		</a>
																		<div class="dropdown-menu dropdown-menu-right w mt-3 animate fadeIn">
																			<a class="dropdown-item" href="page.profile.html">
																				<span>Jacqueline Reid</span>
																			</a>
																			<a class="dropdown-item" href="page.price.html">
																				<span class="badge bg-success text-uppercase">Upgrade</span>
																				<span>to Pro</span>
																			</a>
																			<div class="dropdown-divider"></div>
																			<a class="dropdown-item" href="page.profile.html">
																				<span>Profile</span>
																			</a>
																			<a class="dropdown-item d-flex" href="page.invoice.html">
																				<span class="flex">Invoice</span>
																				<span>
																					<b class="badge badge-pill gd-warning">5</b>
																				</span>
																			</a>
																			<a class="dropdown-item" href="page.faq.html">Need help?</a>
																			<div class="dropdown-divider"></div>
																			<a class="dropdown-item" href="page.setting.html">
																				<span>Account Settings</span>
																			</a>
																			<a class="dropdown-item" href="signin.1.html">Sign out</a>
																		</div>
																	</li>
																	<li class="nav-item d-lg-none">
																		<a href="#" class="nav-link px-2" data-toggle="collapse" data-toggle-class="" data-target="#navbarToggler">
																			<svg
																				xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search">
																				<circle cx="11" cy="11" r="8"></circle>
																				<line x1="21" y1="21" x2="16.65" y2="16.65"></line>
																			</svg>
																		</a>
																	</li>
																	<li class="nav-item d-lg-none">
																		<a class="nav-link px-1" data-toggle="modal" data-target="#aside">
																			<svg
																				xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-menu">
																				<line x1="3" y1="12" x2="21" y2="12"></line>
																				<line x1="3" y1="6" x2="21" y2="6"></line>
																				<line x1="3" y1="18" x2="21" y2="18"></line>
																			</svg>
																		</a>
																	</li>
																</ul>
															</div>
														</div>
														<p>Dropdown menu</p>
														<div class="card">
															<div class="navbar navbar-expand-lg">
																<a href="index.html" class="navbar-brand">
																	<svg width="32" height="32" viewBox="0 0 512 512"
																		xmlns="http://www.w3.org/2000/svg" fill="currentColor">
																		<g class="loading-spin" style="transform-origin: 256px 256px">
																			<path d="M200.043 106.067c-40.631 15.171-73.434 46.382-90.717 85.933H256l-55.957-85.933zM412.797 288A160.723 160.723 0 0 0 416 256c0-36.624-12.314-70.367-33.016-97.334L311 288h101.797zM359.973 134.395C332.007 110.461 295.694 96 256 96c-7.966 0-15.794.591-23.448 1.715L310.852 224l49.121-89.605zM99.204 224A160.65 160.65 0 0 0 96 256c0 36.639 12.324 70.394 33.041 97.366L201 224H99.204zM311.959 405.932c40.631-15.171 73.433-46.382 90.715-85.932H256l55.959 85.932zM152.046 377.621C180.009 401.545 216.314 416 256 416c7.969 0 15.799-.592 23.456-1.716L201.164 288l-49.118 89.621z"></path>
																		</g>
																	</svg>
																	<span class="hidden-folded d-inline l-s-n-1x">Basik</span>
																</a>
																<div class="collapse navbar-collapse order-2 order-lg-1" id="navbarToggler">
																	<ul class="navbar-nav mt-lg-0 mx-0 mx-lg-2 text-hover-primary">
																		<li class="nav-item">
																			<a href="#" class="nav-link">Dashboard</a>
																		</li>
																		<li class="nav-item dropdown">
																			<a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">New</a>
																			<div class="dropdown-menu dropdown-menu-right mt-3" role="menu">
																				<a class="dropdown-item">Action </a>
																				<a class="dropdown-item">Another action </a>
																				<a class="dropdown-item">Something else here</a>
																				<div class="dropdown-divider"></div>
																				<a class="dropdown-item">Separated link</a>
																			</div>
																		</li>
																	</ul>
																	<form class="input-group m-2 my-lg-0 flex">
																		<div class="input-group-prepend">
																			<button type="button" class="btn no-shadow no-bg px-0">
																				<svg
																					xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search">
																					<circle cx="11" cy="11" r="8"></circle>
																					<line x1="21" y1="21" x2="16.65" y2="16.65"></line>
																				</svg>
																			</button>
																		</div>
																		<span class="twitter-typeahead" style="position: relative; display: inline-block;">
																			<input type="text" class="form-control no-border no-shadow no-bg typeahead tt-hint" data-api="../assets/api/menu.json" readonly="" autocomplete="off" spellcheck="false" tabindex="-1" style="position: absolute; top: 0px; left: 0px; border-color: transparent; box-shadow: none; opacity: 1; background: none 0px 0px / auto repeat scroll padding-box border-box rgba(0, 0, 0, 0);" dir="ltr">
																				<input type="text" class="form-control no-border no-shadow no-bg typeahead tt-input" placeholder="Search components..." data-api="../assets/api/menu.json" autocomplete="off" spellcheck="false" dir="auto" style="position: relative; vertical-align: top; background-color: transparent;">
																					<pre aria-hidden="true" style="position: absolute; visibility: hidden; white-space: pre; font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;; font-size: 14px; font-style: normal; font-variant: normal; font-weight: 400; word-spacing: 0px; letter-spacing: 0px; text-indent: 0px; text-rendering: auto; text-transform: none;"></pre>
																					<div class="dropdown-menu mt-3" style="position: absolute; top: 100%; left: 0px; z-index: 100; display: none;">
																						<div class="tt-dataset tt-dataset-32"></div>
																					</div>
																				</span>
																			</form>
																		</div>
																		<ul class="nav navbar-menu order-1 order-lg-2">
																			<li class="nav-item d-none d-sm-block">
																				<a class="nav-link px-2" data-toggle="fullscreen">
																					<svg
																						xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-maximize">
																						<path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path>
																					</svg>
																				</a>
																			</li>
																			<li class="nav-item dropdown">
																				<a class="nav-link px-2" data-toggle="dropdown">
																					<svg
																						xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-settings">
																						<circle cx="12" cy="12" r="3"></circle>
																						<path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
																					</svg>
																				</a>
																				<div class="dropdown-menu dropdown-menu-center mt-3 w animate fadeIn">
																					<div class="setting px-3">
																						<div class="mb-2 text-muted">
																							<strong>Setting:</strong>
																						</div>
																						<div class="mb-3" id="settingLayout">
																							<label class="ui-check ui-check-rounded my-1 d-block">
																								<input type="checkbox" name="stickyHeader">
																									<i></i>
																									<small>Sticky header</small>
																								</label>
																								<label class="ui-check ui-check-rounded my-1 d-block">
																									<input type="checkbox" name="stickyAside">
																										<i></i>
																										<small>Sticky aside</small>
																									</label>
																									<label class="ui-check ui-check-rounded my-1 d-block">
																										<input type="checkbox" name="foldedAside">
																											<i></i>
																											<small>Folded Aside</small>
																										</label>
																										<label class="ui-check ui-check-rounded my-1 d-block">
																											<input type="checkbox" name="hideAside">
																												<i></i>
																												<small>Hide Aside</small>
																											</label>
																										</div>
																										<div class="mb-2 text-muted">
																											<strong>Color:</strong>
																										</div>
																										<div class="mb-2">
																											<label class="radio radio-inline ui-check ui-check-md">
																												<input type="radio" name="bg" value="">
																													<i></i>
																												</label>
																												<label class="radio radio-inline ui-check ui-check-color ui-check-md">
																													<input type="radio" name="bg" value="bg-dark">
																														<i class="bg-dark"></i>
																													</label>
																												</div>
																												<div class="mb-2 text-muted">
																													<strong>Layouts:</strong>
																												</div>
																												<div class="mb-3">
																													<a href="dashboard.html" class="btn btn-xs btn-white no-ajax mb-1">Default</a>
																													<a href="layout.a.html?bg" class="btn btn-xs btn-primary no-ajax mb-1">A</a>
																													<a href="layout.b.html?bg" class="btn btn-xs btn-info no-ajax mb-1">B</a>
																													<a href="layout.c.html?bg" class="btn btn-xs btn-success no-ajax mb-1">C</a>
																												</div>
																												<div class="mb-2 text-muted">
																													<strong>Apps:</strong>
																												</div>
																												<div>
																													<a href="dashboard.html" class="btn btn-sm btn-white no-ajax mb-1">Dashboard</a>
																													<a href="music.html?bg" class="btn btn-sm btn-white no-ajax mb-1">Music</a>
																													<a href="video.html?bg" class="btn btn-sm btn-white no-ajax mb-1">Video</a>
																												</div>
																											</div>
																										</div>
																									</li>
																									<li class="nav-item dropdown">
																										<a class="nav-link px-2 mr-lg-2" data-toggle="dropdown">
																											<svg
																												xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bell">
																												<path d="M22 17H2a3 3 0 0 0 3-3V9a7 7 0 0 1 14 0v5a3 3 0 0 0 3 3zm-8.27 4a2 2 0 0 1-3.46 0"></path>
																											</svg>
																											<span class="badge badge-pill badge-up bg-primary">8</span>
																										</a>
																										<div class="dropdown-menu dropdown-menu-right mt-3 w-md animate fadeIn p-0">
																											<div class="scrollable hover" style="max-height: 250px">
																												<div class="list list-row">
																													<div class="list-item" data-id="15">
																														<div>
																															<a href="#">
																																<span class="w-32 avatar gd-success">J</span>
																															</a>
																														</div>
																														<div class="flex">
																															<div class="item-feed h-2x">Fun project from this weekend. Both computer replicas are fully functional</div>
																														</div>
																													</div>
																													<div class="list-item" data-id="9">
																														<div>
																															<a href="#">
																																<span class="w-32 avatar gd-info">
																																	<img src="../assets/img/a9.jpg" alt=".">
																																	</span>
																																</a>
																															</div>
																															<div class="flex">
																																<div class="item-feed h-2x">Added to 
																																	<a href="#">@TUT</a> team
																																</div>
																															</div>
																														</div>
																														<div class="list-item" data-id="11">
																															<div>
																																<a href="#">
																																	<span class="w-32 avatar gd-info">K</span>
																																</a>
																															</div>
																															<div class="flex">
																																<div class="item-feed h-2x">Prepare the documentation for the 
																																	<a href="#">Fitness app</a>
																																</div>
																															</div>
																														</div>
																														<div class="list-item" data-id="14">
																															<div>
																																<a href="#">
																																	<span class="w-32 avatar gd-warning">B</span>
																																</a>
																															</div>
																															<div class="flex">
																																<div class="item-feed h-2x">Do you know which are the popular ones? Leave a comment and get to know more from professional developers</div>
																															</div>
																														</div>
																														<div class="list-item" data-id="7">
																															<div>
																																<a href="#">
																																	<span class="w-32 avatar gd-primary">
																																		<img src="../assets/img/a7.jpg" alt=".">
																																		</span>
																																	</a>
																																</div>
																																<div class="flex">
																																	<div class="item-feed h-2x">From design to dashboard, 
																																		<a href="#">@Dash</a> builds custom hardware according to on-site requirements
																																	</div>
																																</div>
																															</div>
																															<div class="list-item" data-id="5">
																																<div>
																																	<a href="#">
																																		<span class="w-32 avatar gd-warning">
																																			<img src="../assets/img/a5.jpg" alt=".">
																																			</span>
																																		</a>
																																	</div>
																																	<div class="flex">
																																		<div class="item-feed h-2x">Learn how to use 
																																			<a href="#">Google Analytics</a> to discover vital information about your readers.
																																		</div>
																																	</div>
																																</div>
																															</div>
																														</div>
																														<div class="d-flex px-3 py-2 b-t">
																															<div class="flex">
																																<span>6 Notifications</span>
																															</div>
																															<a href="page.setting.html">See all 
																																<i class="fa fa-angle-right text-muted"></i>
																															</a>
																														</div>
																													</div>
																												</li>
																												<li class="nav-item dropdown">
																													<a href="#" data-toggle="dropdown" class="nav-link d-flex align-items-center px-2 text-color">
																														<span class="avatar w-24" style="margin: -2px">
																															<img src="../assets/img/a4.jpg" alt="...">
																															</span>
																														</a>
																														<div class="dropdown-menu dropdown-menu-right w mt-3 animate fadeIn">
																															<a class="dropdown-item" href="page.profile.html">
																																<span>Jacqueline Reid</span>
																															</a>
																															<a class="dropdown-item" href="page.price.html">
																																<span class="badge bg-success text-uppercase">Upgrade</span>
																																<span>to Pro</span>
																															</a>
																															<div class="dropdown-divider"></div>
																															<a class="dropdown-item" href="page.profile.html">
																																<span>Profile</span>
																															</a>
																															<a class="dropdown-item d-flex" href="page.invoice.html">
																																<span class="flex">Invoice</span>
																																<span>
																																	<b class="badge badge-pill gd-warning">5</b>
																																</span>
																															</a>
																															<a class="dropdown-item" href="page.faq.html">Need help?</a>
																															<div class="dropdown-divider"></div>
																															<a class="dropdown-item" href="page.setting.html">
																																<span>Account Settings</span>
																															</a>
																															<a class="dropdown-item" href="signin.1.html">Sign out</a>
																														</div>
																													</li>
																													<li class="nav-item d-lg-none">
																														<a href="#" class="nav-link px-2" data-toggle="collapse" data-toggle-class="" data-target="#navbarToggler">
																															<svg
																																xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search">
																																<circle cx="11" cy="11" r="8"></circle>
																																<line x1="21" y1="21" x2="16.65" y2="16.65"></line>
																															</svg>
																														</a>
																													</li>
																													<li class="nav-item d-lg-none">
																														<a class="nav-link px-1" data-toggle="modal" data-target="#aside">
																															<svg
																																xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-menu">
																																<line x1="3" y1="12" x2="21" y2="12"></line>
																																<line x1="3" y1="6" x2="21" y2="6"></line>
																																<line x1="3" y1="18" x2="21" y2="18"></line>
																															</svg>
																														</a>
																													</li>
																												</ul>
																											</div>
																										</div>
																										<p>Left menu</p>
																										<div class="card">
																											<div class="navbar navbar-expand-lg">
																												<a href="index.html" class="navbar-brand">
																													<svg width="32" height="32" viewBox="0 0 512 512"
																														xmlns="http://www.w3.org/2000/svg" fill="currentColor">
																														<g class="loading-spin" style="transform-origin: 256px 256px">
																															<path d="M200.043 106.067c-40.631 15.171-73.434 46.382-90.717 85.933H256l-55.957-85.933zM412.797 288A160.723 160.723 0 0 0 416 256c0-36.624-12.314-70.367-33.016-97.334L311 288h101.797zM359.973 134.395C332.007 110.461 295.694 96 256 96c-7.966 0-15.794.591-23.448 1.715L310.852 224l49.121-89.605zM99.204 224A160.65 160.65 0 0 0 96 256c0 36.639 12.324 70.394 33.041 97.366L201 224H99.204zM311.959 405.932c40.631-15.171 73.433-46.382 90.715-85.932H256l55.959 85.932zM152.046 377.621C180.009 401.545 216.314 416 256 416c7.969 0 15.799-.592 23.456-1.716L201.164 288l-49.118 89.621z"></path>
																														</g>
																													</svg>
																													<span class="hidden-folded d-inline l-s-n-1x">Basik</span>
																												</a>
																												<div class="collapse navbar-collapse order-2 order-lg-1" id="navbarToggler">
																													<ul class="navbar-nav mt-lg-0 mx-0 mx-lg-2">
																														<li class="nav-item">
																															<a href="#" class="nav-link">Dashboard</a>
																														</li>
																														<li class="nav-item dropdown">
																															<a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">New</a>
																															<div class="dropdown-menu mt-3" role="menu">
																																<a class="dropdown-item">Action </a>
																																<a class="dropdown-item">Another action </a>
																																<a class="dropdown-item">Something else here</a>
																																<div class="dropdown-divider"></div>
																																<a class="dropdown-item">Separated link</a>
																															</div>
																														</li>
																													</ul>
																												</div>
																												<ul class="nav navbar-menu order-1 order-lg-2">
																													<li class="nav-item d-none d-sm-block">
																														<a class="nav-link px-2" data-toggle="fullscreen">
																															<svg
																																xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-maximize">
																																<path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path>
																															</svg>
																														</a>
																													</li>
																													<li class="nav-item dropdown">
																														<a class="nav-link px-2" data-toggle="dropdown">
																															<svg
																																xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-settings">
																																<circle cx="12" cy="12" r="3"></circle>
																																<path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
																															</svg>
																														</a>
																														<div class="dropdown-menu dropdown-menu-center mt-3 w animate fadeIn">
																															<div class="setting px-3">
																																<div class="mb-2 text-muted">
																																	<strong>Setting:</strong>
																																</div>
																																<div class="mb-3" id="settingLayout">
																																	<label class="ui-check ui-check-rounded my-1 d-block">
																																		<input type="checkbox" name="stickyHeader">
																																			<i></i>
																																			<small>Sticky header</small>
																																		</label>
																																		<label class="ui-check ui-check-rounded my-1 d-block">
																																			<input type="checkbox" name="stickyAside">
																																				<i></i>
																																				<small>Sticky aside</small>
																																			</label>
																																			<label class="ui-check ui-check-rounded my-1 d-block">
																																				<input type="checkbox" name="foldedAside">
																																					<i></i>
																																					<small>Folded Aside</small>
																																				</label>
																																				<label class="ui-check ui-check-rounded my-1 d-block">
																																					<input type="checkbox" name="hideAside">
																																						<i></i>
																																						<small>Hide Aside</small>
																																					</label>
																																				</div>
																																				<div class="mb-2 text-muted">
																																					<strong>Color:</strong>
																																				</div>
																																				<div class="mb-2">
																																					<label class="radio radio-inline ui-check ui-check-md">
																																						<input type="radio" name="bg" value="">
																																							<i></i>
																																						</label>
																																						<label class="radio radio-inline ui-check ui-check-color ui-check-md">
																																							<input type="radio" name="bg" value="bg-dark">
																																								<i class="bg-dark"></i>
																																							</label>
																																						</div>
																																						<div class="mb-2 text-muted">
																																							<strong>Layouts:</strong>
																																						</div>
																																						<div class="mb-3">
																																							<a href="dashboard.html" class="btn btn-xs btn-white no-ajax mb-1">Default</a>
																																							<a href="layout.a.html?bg" class="btn btn-xs btn-primary no-ajax mb-1">A</a>
																																							<a href="layout.b.html?bg" class="btn btn-xs btn-info no-ajax mb-1">B</a>
																																							<a href="layout.c.html?bg" class="btn btn-xs btn-success no-ajax mb-1">C</a>
																																						</div>
																																						<div class="mb-2 text-muted">
																																							<strong>Apps:</strong>
																																						</div>
																																						<div>
																																							<a href="dashboard.html" class="btn btn-sm btn-white no-ajax mb-1">Dashboard</a>
																																							<a href="music.html?bg" class="btn btn-sm btn-white no-ajax mb-1">Music</a>
																																							<a href="video.html?bg" class="btn btn-sm btn-white no-ajax mb-1">Video</a>
																																						</div>
																																					</div>
																																				</div>
																																			</li>
																																			<li class="nav-item dropdown">
																																				<a class="nav-link px-2 mr-lg-2" data-toggle="dropdown">
																																					<svg
																																						xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bell">
																																						<path d="M22 17H2a3 3 0 0 0 3-3V9a7 7 0 0 1 14 0v5a3 3 0 0 0 3 3zm-8.27 4a2 2 0 0 1-3.46 0"></path>
																																					</svg>
																																					<span class="badge badge-pill badge-up bg-primary">3</span>
																																				</a>
																																				<div class="dropdown-menu dropdown-menu-right mt-3 w-md animate fadeIn p-0">
																																					<div class="scrollable hover" style="max-height: 250px">
																																						<div class="list list-row">
																																							<div class="list-item" data-id="2">
																																								<div>
																																									<a href="#">
																																										<span class="w-32 avatar gd-primary">
																																											<img src="../assets/img/a2.jpg" alt=".">
																																											</span>
																																										</a>
																																									</div>
																																									<div class="flex">
																																										<div class="item-feed h-2x">Can data lead us to making the best possible decisions?</div>
																																									</div>
																																								</div>
																																								<div class="list-item" data-id="13">
																																									<div>
																																										<a href="#">
																																											<span class="w-32 avatar gd-primary">L</span>
																																										</a>
																																									</div>
																																									<div class="flex">
																																										<div class="item-feed h-2x">Thanks! Awesome to see good support on Twitter</div>
																																									</div>
																																								</div>
																																								<div class="list-item" data-id="8">
																																									<div>
																																										<a href="#">
																																											<span class="w-32 avatar gd-success">
																																												<img src="../assets/img/a8.jpg" alt=".">
																																												</span>
																																											</a>
																																										</div>
																																										<div class="flex">
																																											<div class="item-feed h-2x">The biggest software developer conference</div>
																																										</div>
																																									</div>
																																									<div class="list-item" data-id="20">
																																										<div>
																																											<a href="#">
																																												<span class="w-32 avatar gd-warning">G</span>
																																											</a>
																																										</div>
																																										<div class="flex">
																																											<div class="item-feed h-2x">
																																												<a href="#">@Netflix</a> hackathon
																																											</div>
																																										</div>
																																									</div>
																																									<div class="list-item" data-id="3">
																																										<div>
																																											<a href="#">
																																												<span class="w-32 avatar gd-primary">
																																													<img src="../assets/img/a3.jpg" alt=".">
																																													</span>
																																												</a>
																																											</div>
																																											<div class="flex">
																																												<div class="item-feed h-2x">
																																													<a href="#">@NextUI</a> submit a ticket request
																																												</div>
																																											</div>
																																										</div>
																																										<div class="list-item" data-id="15">
																																											<div>
																																												<a href="#">
																																													<span class="w-32 avatar gd-success">J</span>
																																												</a>
																																											</div>
																																											<div class="flex">
																																												<div class="item-feed h-2x">Fun project from this weekend. Both computer replicas are fully functional</div>
																																											</div>
																																										</div>
																																									</div>
																																								</div>
																																								<div class="d-flex px-3 py-2 b-t">
																																									<div class="flex">
																																										<span>6 Notifications</span>
																																									</div>
																																									<a href="page.setting.html">See all 
																																										<i class="fa fa-angle-right text-muted"></i>
																																									</a>
																																								</div>
																																							</div>
																																						</li>
																																						<li class="nav-item dropdown">
																																							<a href="#" data-toggle="dropdown" class="nav-link d-flex align-items-center px-2 text-color">
																																								<span class="mx-2 d-none l-h-1x d-lg-block text-right">
																																									<small class="text-fade d-block mb-1">Hello, Welcome</small>Pablo Nouvelle
																																								</span>
																																								<span class="avatar w-24" style="margin: -2px">
																																									<img src="../assets/img/a3.jpg" alt="...">
																																									</span>
																																								</a>
																																								<div class="dropdown-menu dropdown-menu-right w mt-3 animate fadeIn">
																																									<a class="dropdown-item" href="page.profile.html">
																																										<span>Jacqueline Reid</span>
																																									</a>
																																									<a class="dropdown-item" href="page.price.html">
																																										<span class="badge bg-success text-uppercase">Upgrade</span>
																																										<span>to Pro</span>
																																									</a>
																																									<div class="dropdown-divider"></div>
																																									<a class="dropdown-item" href="page.profile.html">
																																										<span>Profile</span>
																																									</a>
																																									<a class="dropdown-item d-flex" href="page.invoice.html">
																																										<span class="flex">Invoice</span>
																																										<span>
																																											<b class="badge badge-pill gd-warning">5</b>
																																										</span>
																																									</a>
																																									<a class="dropdown-item" href="page.faq.html">Need help?</a>
																																									<div class="dropdown-divider"></div>
																																									<a class="dropdown-item" href="page.setting.html">
																																										<span>Account Settings</span>
																																									</a>
																																									<a class="dropdown-item" href="signin.1.html">Sign out</a>
																																								</div>
																																							</li>
																																							<li class="nav-item d-lg-none">
																																								<a href="#" class="nav-link px-2" data-toggle="collapse" data-toggle-class="" data-target="#navbarToggler">
																																									<svg
																																										xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search">
																																										<circle cx="11" cy="11" r="8"></circle>
																																										<line x1="21" y1="21" x2="16.65" y2="16.65"></line>
																																									</svg>
																																								</a>
																																							</li>
																																							<li class="nav-item d-lg-none">
																																								<a class="nav-link px-1" data-toggle="modal" data-target="#aside">
																																									<svg
																																										xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-menu">
																																										<line x1="3" y1="12" x2="21" y2="12"></line>
																																										<line x1="3" y1="6" x2="21" y2="6"></line>
																																										<line x1="3" y1="18" x2="21" y2="18"></line>
																																									</svg>
																																								</a>
																																							</li>
																																						</ul>
																																					</div>
																																				</div>
																																				<p>Left menu with search</p>
																																				<div class="card">
																																					<div class="navbar navbar-expand-lg">
																																						<a href="index.html" class="navbar-brand">
																																							<svg width="32" height="32" viewBox="0 0 512 512"
																																								xmlns="http://www.w3.org/2000/svg" fill="currentColor">
																																								<g class="loading-spin" style="transform-origin: 256px 256px">
																																									<path d="M200.043 106.067c-40.631 15.171-73.434 46.382-90.717 85.933H256l-55.957-85.933zM412.797 288A160.723 160.723 0 0 0 416 256c0-36.624-12.314-70.367-33.016-97.334L311 288h101.797zM359.973 134.395C332.007 110.461 295.694 96 256 96c-7.966 0-15.794.591-23.448 1.715L310.852 224l49.121-89.605zM99.204 224A160.65 160.65 0 0 0 96 256c0 36.639 12.324 70.394 33.041 97.366L201 224H99.204zM311.959 405.932c40.631-15.171 73.433-46.382 90.715-85.932H256l55.959 85.932zM152.046 377.621C180.009 401.545 216.314 416 256 416c7.969 0 15.799-.592 23.456-1.716L201.164 288l-49.118 89.621z"></path>
																																								</g>
																																							</svg>
																																							<span class="hidden-folded d-inline l-s-n-1x">Basik</span>
																																						</a>
																																						<div class="collapse navbar-collapse order-2 order-lg-1" id="navbarToggler">
																																							<ul class="navbar-nav mt-lg-0 mx-0 mx-lg-2">
																																								<li class="nav-item">
																																									<a href="#" class="nav-link">Dashboard</a>
																																								</li>
																																								<li class="nav-item dropdown">
																																									<a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">New</a>
																																									<div class="dropdown-menu mt-3" role="menu">
																																										<a class="dropdown-item">Action </a>
																																										<a class="dropdown-item">Another action </a>
																																										<a class="dropdown-item">Something else here</a>
																																										<div class="dropdown-divider"></div>
																																										<a class="dropdown-item">Separated link</a>
																																									</div>
																																								</li>
																																							</ul>
																																							<form class="input-group m-2 my-lg-0">
																																								<div class="input-group-prepend">
																																									<button type="button" class="btn no-shadow no-bg px-0">
																																										<svg
																																											xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search">
																																											<circle cx="11" cy="11" r="8"></circle>
																																											<line x1="21" y1="21" x2="16.65" y2="16.65"></line>
																																										</svg>
																																									</button>
																																								</div>
																																								<span class="twitter-typeahead" style="position: relative; display: inline-block;">
																																									<input type="text" class="form-control no-border no-shadow no-bg typeahead tt-hint" data-api="../assets/api/menu.json" readonly="" autocomplete="off" spellcheck="false" tabindex="-1" style="position: absolute; top: 0px; left: 0px; border-color: transparent; box-shadow: none; opacity: 1; background: none 0px 0px / auto repeat scroll padding-box border-box rgba(0, 0, 0, 0);" dir="ltr">
																																										<input type="text" class="form-control no-border no-shadow no-bg typeahead tt-input" placeholder="Search components..." data-api="../assets/api/menu.json" autocomplete="off" spellcheck="false" dir="auto" style="position: relative; vertical-align: top; background-color: transparent;">
																																											<pre aria-hidden="true" style="position: absolute; visibility: hidden; white-space: pre; font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;; font-size: 14px; font-style: normal; font-variant: normal; font-weight: 400; word-spacing: 0px; letter-spacing: 0px; text-indent: 0px; text-rendering: auto; text-transform: none;"></pre>
																																											<div class="dropdown-menu mt-3" style="position: absolute; top: 100%; left: 0px; z-index: 100; display: none;">
																																												<div class="tt-dataset tt-dataset-34"></div>
																																											</div>
																																										</span>
																																									</form>
																																								</div>
																																								<ul class="nav navbar-menu order-1 order-lg-2">
																																									<li class="nav-item d-none d-sm-block">
																																										<a class="nav-link px-2" data-toggle="fullscreen">
																																											<svg
																																												xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-maximize">
																																												<path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path>
																																											</svg>
																																										</a>
																																									</li>
																																									<li class="nav-item dropdown">
																																										<a class="nav-link px-2" data-toggle="dropdown">
																																											<svg
																																												xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-settings">
																																												<circle cx="12" cy="12" r="3"></circle>
																																												<path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
																																											</svg>
																																										</a>
																																										<div class="dropdown-menu dropdown-menu-center mt-3 w animate fadeIn">
																																											<div class="setting px-3">
																																												<div class="mb-2 text-muted">
																																													<strong>Setting:</strong>
																																												</div>
																																												<div class="mb-3" id="settingLayout">
																																													<label class="ui-check ui-check-rounded my-1 d-block">
																																														<input type="checkbox" name="stickyHeader">
																																															<i></i>
																																															<small>Sticky header</small>
																																														</label>
																																														<label class="ui-check ui-check-rounded my-1 d-block">
																																															<input type="checkbox" name="stickyAside">
																																																<i></i>
																																																<small>Sticky aside</small>
																																															</label>
																																															<label class="ui-check ui-check-rounded my-1 d-block">
																																																<input type="checkbox" name="foldedAside">
																																																	<i></i>
																																																	<small>Folded Aside</small>
																																																</label>
																																																<label class="ui-check ui-check-rounded my-1 d-block">
																																																	<input type="checkbox" name="hideAside">
																																																		<i></i>
																																																		<small>Hide Aside</small>
																																																	</label>
																																																</div>
																																																<div class="mb-2 text-muted">
																																																	<strong>Color:</strong>
																																																</div>
																																																<div class="mb-2">
																																																	<label class="radio radio-inline ui-check ui-check-md">
																																																		<input type="radio" name="bg" value="">
																																																			<i></i>
																																																		</label>
																																																		<label class="radio radio-inline ui-check ui-check-color ui-check-md">
																																																			<input type="radio" name="bg" value="bg-dark">
																																																				<i class="bg-dark"></i>
																																																			</label>
																																																		</div>
																																																		<div class="mb-2 text-muted">
																																																			<strong>Layouts:</strong>
																																																		</div>
																																																		<div class="mb-3">
																																																			<a href="dashboard.html" class="btn btn-xs btn-white no-ajax mb-1">Default</a>
																																																			<a href="layout.a.html?bg" class="btn btn-xs btn-primary no-ajax mb-1">A</a>
																																																			<a href="layout.b.html?bg" class="btn btn-xs btn-info no-ajax mb-1">B</a>
																																																			<a href="layout.c.html?bg" class="btn btn-xs btn-success no-ajax mb-1">C</a>
																																																		</div>
																																																		<div class="mb-2 text-muted">
																																																			<strong>Apps:</strong>
																																																		</div>
																																																		<div>
																																																			<a href="dashboard.html" class="btn btn-sm btn-white no-ajax mb-1">Dashboard</a>
																																																			<a href="music.html?bg" class="btn btn-sm btn-white no-ajax mb-1">Music</a>
																																																			<a href="video.html?bg" class="btn btn-sm btn-white no-ajax mb-1">Video</a>
																																																		</div>
																																																	</div>
																																																</div>
																																															</li>
																																															<li class="nav-item dropdown">
																																																<a class="nav-link px-2 mr-lg-2" data-toggle="dropdown">
																																																	<svg
																																																		xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bell">
																																																		<path d="M22 17H2a3 3 0 0 0 3-3V9a7 7 0 0 1 14 0v5a3 3 0 0 0 3 3zm-8.27 4a2 2 0 0 1-3.46 0"></path>
																																																	</svg>
																																																	<span class="badge badge-pill badge-up bg-primary">6</span>
																																																</a>
																																																<div class="dropdown-menu dropdown-menu-right mt-3 w-md animate fadeIn p-0">
																																																	<div class="scrollable hover" style="max-height: 250px">
																																																		<div class="list list-row">
																																																			<div class="list-item" data-id="14">
																																																				<div>
																																																					<a href="#">
																																																						<span class="w-32 avatar gd-warning">B</span>
																																																					</a>
																																																				</div>
																																																				<div class="flex">
																																																					<div class="item-feed h-2x">Do you know which are the popular ones? Leave a comment and get to know more from professional developers</div>
																																																				</div>
																																																			</div>
																																																			<div class="list-item" data-id="2">
																																																				<div>
																																																					<a href="#">
																																																						<span class="w-32 avatar gd-primary">
																																																							<img src="../assets/img/a2.jpg" alt=".">
																																																							</span>
																																																						</a>
																																																					</div>
																																																					<div class="flex">
																																																						<div class="item-feed h-2x">Can data lead us to making the best possible decisions?</div>
																																																					</div>
																																																				</div>
																																																				<div class="list-item" data-id="5">
																																																					<div>
																																																						<a href="#">
																																																							<span class="w-32 avatar gd-warning">
																																																								<img src="../assets/img/a5.jpg" alt=".">
																																																								</span>
																																																							</a>
																																																						</div>
																																																						<div class="flex">
																																																							<div class="item-feed h-2x">Learn how to use 
																																																								<a href="#">Google Analytics</a> to discover vital information about your readers.
																																																							</div>
																																																						</div>
																																																					</div>
																																																					<div class="list-item" data-id="9">
																																																						<div>
																																																							<a href="#">
																																																								<span class="w-32 avatar gd-info">
																																																									<img src="../assets/img/a9.jpg" alt=".">
																																																									</span>
																																																								</a>
																																																							</div>
																																																							<div class="flex">
																																																								<div class="item-feed h-2x">Added to 
																																																									<a href="#">@TUT</a> team
																																																								</div>
																																																							</div>
																																																						</div>
																																																						<div class="list-item" data-id="19">
																																																							<div>
																																																								<a href="#">
																																																									<span class="w-32 avatar gd-warning">T</span>
																																																								</a>
																																																							</div>
																																																							<div class="flex">
																																																								<div class="item-feed h-2x">We help companies deliver reliable and beautiful 
																																																									<a href="#">@IOSapps</a>
																																																								</div>
																																																							</div>
																																																						</div>
																																																						<div class="list-item" data-id="6">
																																																							<div>
																																																								<a href="#">
																																																									<span class="w-32 avatar gd-danger">
																																																										<img src="../assets/img/a6.jpg" alt=".">
																																																										</span>
																																																									</a>
																																																								</div>
																																																								<div class="flex">
																																																									<div class="item-feed h-2x">Just saw this on the 
																																																										<a href="#">@eBay</a> dashboard, dude is an absolute unit.
																																																									</div>
																																																								</div>
																																																							</div>
																																																						</div>
																																																					</div>
																																																					<div class="d-flex px-3 py-2 b-t">
																																																						<div class="flex">
																																																							<span>6 Notifications</span>
																																																						</div>
																																																						<a href="page.setting.html">See all 
																																																							<i class="fa fa-angle-right text-muted"></i>
																																																						</a>
																																																					</div>
																																																				</div>
																																																			</li>
																																																			<li class="nav-item dropdown">
																																																				<a href="#" data-toggle="dropdown" class="nav-link d-flex align-items-center px-2 text-color">
																																																					<span class="avatar w-24" style="margin: -2px">
																																																						<img src="../assets/img/a2.jpg" alt="...">
																																																						</span>
																																																					</a>
																																																					<div class="dropdown-menu dropdown-menu-right w mt-3 animate fadeIn">
																																																						<a class="dropdown-item" href="page.profile.html">
																																																							<span>Jacqueline Reid</span>
																																																						</a>
																																																						<a class="dropdown-item" href="page.price.html">
																																																							<span class="badge bg-success text-uppercase">Upgrade</span>
																																																							<span>to Pro</span>
																																																						</a>
																																																						<div class="dropdown-divider"></div>
																																																						<a class="dropdown-item" href="page.profile.html">
																																																							<span>Profile</span>
																																																						</a>
																																																						<a class="dropdown-item d-flex" href="page.invoice.html">
																																																							<span class="flex">Invoice</span>
																																																							<span>
																																																								<b class="badge badge-pill gd-warning">5</b>
																																																							</span>
																																																						</a>
																																																						<a class="dropdown-item" href="page.faq.html">Need help?</a>
																																																						<div class="dropdown-divider"></div>
																																																						<a class="dropdown-item" href="page.setting.html">
																																																							<span>Account Settings</span>
																																																						</a>
																																																						<a class="dropdown-item" href="signin.1.html">Sign out</a>
																																																					</div>
																																																				</li>
																																																				<li class="nav-item d-lg-none">
																																																					<a href="#" class="nav-link px-2" data-toggle="collapse" data-toggle-class="" data-target="#navbarToggler">
																																																						<svg
																																																							xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search">
																																																							<circle cx="11" cy="11" r="8"></circle>
																																																							<line x1="21" y1="21" x2="16.65" y2="16.65"></line>
																																																						</svg>
																																																					</a>
																																																				</li>
																																																				<li class="nav-item d-lg-none">
																																																					<a class="nav-link px-1" data-toggle="modal" data-target="#aside">
																																																						<svg
																																																							xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-menu">
																																																							<line x1="3" y1="12" x2="21" y2="12"></line>
																																																							<line x1="3" y1="6" x2="21" y2="6"></line>
																																																							<line x1="3" y1="18" x2="21" y2="18"></line>
																																																						</svg>
																																																					</a>
																																																				</li>
																																																			</ul>
																																																		</div>
																																																	</div>
																																																	<p>Search with right menu</p>
																																																	<div class="card">
																																																		<div class="navbar navbar-expand-lg">
																																																			<a href="index.html" class="navbar-brand">
																																																				<svg width="32" height="32" viewBox="0 0 512 512"
																																																					xmlns="http://www.w3.org/2000/svg" fill="currentColor">
																																																					<g class="loading-spin" style="transform-origin: 256px 256px">
																																																						<path d="M200.043 106.067c-40.631 15.171-73.434 46.382-90.717 85.933H256l-55.957-85.933zM412.797 288A160.723 160.723 0 0 0 416 256c0-36.624-12.314-70.367-33.016-97.334L311 288h101.797zM359.973 134.395C332.007 110.461 295.694 96 256 96c-7.966 0-15.794.591-23.448 1.715L310.852 224l49.121-89.605zM99.204 224A160.65 160.65 0 0 0 96 256c0 36.639 12.324 70.394 33.041 97.366L201 224H99.204zM311.959 405.932c40.631-15.171 73.433-46.382 90.715-85.932H256l55.959 85.932zM152.046 377.621C180.009 401.545 216.314 416 256 416c7.969 0 15.799-.592 23.456-1.716L201.164 288l-49.118 89.621z"></path>
																																																					</g>
																																																				</svg>
																																																				<span class="hidden-folded d-inline l-s-n-1x">Basik</span>
																																																			</a>
																																																			<div class="collapse navbar-collapse order-2 order-lg-1" id="navbarToggler">
																																																				<form class="input-group m-2 my-lg-0">
																																																					<div class="input-group-prepend">
																																																						<button type="button" class="btn no-shadow no-bg px-0">
																																																							<svg
																																																								xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search">
																																																								<circle cx="11" cy="11" r="8"></circle>
																																																								<line x1="21" y1="21" x2="16.65" y2="16.65"></line>
																																																							</svg>
																																																						</button>
																																																					</div>
																																																					<span class="twitter-typeahead" style="position: relative; display: inline-block;">
																																																						<input type="text" class="form-control no-border no-shadow no-bg typeahead tt-hint" data-api="../assets/api/menu.json" readonly="" autocomplete="off" spellcheck="false" tabindex="-1" style="position: absolute; top: 0px; left: 0px; border-color: transparent; box-shadow: none; opacity: 1; background: none 0px 0px / auto repeat scroll padding-box border-box rgba(0, 0, 0, 0);" dir="ltr">
																																																							<input type="text" class="form-control no-border no-shadow no-bg typeahead tt-input" placeholder="Search components..." data-api="../assets/api/menu.json" autocomplete="off" spellcheck="false" dir="auto" style="position: relative; vertical-align: top; background-color: transparent;">
																																																								<pre aria-hidden="true" style="position: absolute; visibility: hidden; white-space: pre; font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;; font-size: 14px; font-style: normal; font-variant: normal; font-weight: 400; word-spacing: 0px; letter-spacing: 0px; text-indent: 0px; text-rendering: auto; text-transform: none;"></pre>
																																																								<div class="dropdown-menu mt-3" style="position: absolute; top: 100%; left: 0px; z-index: 100; display: none;">
																																																									<div class="tt-dataset tt-dataset-36"></div>
																																																								</div>
																																																							</span>
																																																						</form>
																																																						<ul class="navbar-nav mt-lg-0 mx-0 mx-lg-2">
																																																							<li class="nav-item">
																																																								<a href="layout.a.html" class="nav-link">Dashboard</a>
																																																							</li>
																																																							<li class="nav-item dropdown">
																																																								<a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">Applications</a>
																																																								<div class="dropdown-menu mt-3 dropdown-menu-right" role="menu">
																																																									<a href="app.mail.html" class="dropdown-item">Email </a>
																																																									<a href="app.message.html" class="dropdown-item">Message </a>
																																																									<a href="app.calendar.html" class="dropdown-item">Calendar </a>
																																																									<a href="app.user.html" class="dropdown-item">Users</a>
																																																									<div class="dropdown-divider"></div>
																																																									<a href="page.invoice.html" class="dropdown-item">Invoice </a>
																																																									<a href="page.faq.html" class="dropdown-item">FAQ</a>
																																																								</div>
																																																							</li>
																																																						</ul>
																																																					</div>
																																																					<ul class="nav navbar-menu order-1 order-lg-2">
																																																						<li class="nav-item d-none d-sm-block">
																																																							<a class="nav-link px-2" data-toggle="fullscreen">
																																																								<svg
																																																									xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-maximize">
																																																									<path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path>
																																																								</svg>
																																																							</a>
																																																						</li>
																																																						<li class="nav-item dropdown">
																																																							<a class="nav-link px-2" data-toggle="dropdown">
																																																								<svg
																																																									xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-settings">
																																																									<circle cx="12" cy="12" r="3"></circle>
																																																									<path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
																																																								</svg>
																																																							</a>
																																																							<div class="dropdown-menu dropdown-menu-center mt-3 w animate fadeIn">
																																																								<div class="setting px-3">
																																																									<div class="mb-2 text-muted">
																																																										<strong>Setting:</strong>
																																																									</div>
																																																									<div class="mb-3" id="settingLayout">
																																																										<label class="ui-check ui-check-rounded my-1 d-block">
																																																											<input type="checkbox" name="stickyHeader">
																																																												<i></i>
																																																												<small>Sticky header</small>
																																																											</label>
																																																											<label class="ui-check ui-check-rounded my-1 d-block">
																																																												<input type="checkbox" name="stickyAside">
																																																													<i></i>
																																																													<small>Sticky aside</small>
																																																												</label>
																																																												<label class="ui-check ui-check-rounded my-1 d-block">
																																																													<input type="checkbox" name="foldedAside">
																																																														<i></i>
																																																														<small>Folded Aside</small>
																																																													</label>
																																																													<label class="ui-check ui-check-rounded my-1 d-block">
																																																														<input type="checkbox" name="hideAside">
																																																															<i></i>
																																																															<small>Hide Aside</small>
																																																														</label>
																																																													</div>
																																																													<div class="mb-2 text-muted">
																																																														<strong>Color:</strong>
																																																													</div>
																																																													<div class="mb-2">
																																																														<label class="radio radio-inline ui-check ui-check-md">
																																																															<input type="radio" name="bg" value="">
																																																																<i></i>
																																																															</label>
																																																															<label class="radio radio-inline ui-check ui-check-color ui-check-md">
																																																																<input type="radio" name="bg" value="bg-dark">
																																																																	<i class="bg-dark"></i>
																																																																</label>
																																																															</div>
																																																															<div class="mb-2 text-muted">
																																																																<strong>Layouts:</strong>
																																																															</div>
																																																															<div class="mb-3">
																																																																<a href="dashboard.html" class="btn btn-xs btn-white no-ajax mb-1">Default</a>
																																																																<a href="layout.a.html?bg" class="btn btn-xs btn-primary no-ajax mb-1">A</a>
																																																																<a href="layout.b.html?bg" class="btn btn-xs btn-info no-ajax mb-1">B</a>
																																																																<a href="layout.c.html?bg" class="btn btn-xs btn-success no-ajax mb-1">C</a>
																																																															</div>
																																																															<div class="mb-2 text-muted">
																																																																<strong>Apps:</strong>
																																																															</div>
																																																															<div>
																																																																<a href="dashboard.html" class="btn btn-sm btn-white no-ajax mb-1">Dashboard</a>
																																																																<a href="music.html?bg" class="btn btn-sm btn-white no-ajax mb-1">Music</a>
																																																																<a href="video.html?bg" class="btn btn-sm btn-white no-ajax mb-1">Video</a>
																																																															</div>
																																																														</div>
																																																													</div>
																																																												</li>
																																																												<li class="nav-item dropdown">
																																																													<a class="nav-link px-2 mr-lg-2" data-toggle="dropdown">
																																																														<svg
																																																															xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bell">
																																																															<path d="M22 17H2a3 3 0 0 0 3-3V9a7 7 0 0 1 14 0v5a3 3 0 0 0 3 3zm-8.27 4a2 2 0 0 1-3.46 0"></path>
																																																														</svg>
																																																														<span class="badge badge-pill badge-up bg-primary">3</span>
																																																													</a>
																																																													<div class="dropdown-menu dropdown-menu-right mt-3 w-md animate fadeIn p-0">
																																																														<div class="scrollable hover" style="max-height: 250px">
																																																															<div class="list list-row">
																																																																<div class="list-item" data-id="3">
																																																																	<div>
																																																																		<a href="#">
																																																																			<span class="w-32 avatar gd-primary">
																																																																				<img src="../assets/img/a3.jpg" alt=".">
																																																																				</span>
																																																																			</a>
																																																																		</div>
																																																																		<div class="flex">
																																																																			<div class="item-feed h-2x">
																																																																				<a href="#">@NextUI</a> submit a ticket request
																																																																			</div>
																																																																		</div>
																																																																	</div>
																																																																	<div class="list-item" data-id="14">
																																																																		<div>
																																																																			<a href="#">
																																																																				<span class="w-32 avatar gd-warning">B</span>
																																																																			</a>
																																																																		</div>
																																																																		<div class="flex">
																																																																			<div class="item-feed h-2x">Do you know which are the popular ones? Leave a comment and get to know more from professional developers</div>
																																																																		</div>
																																																																	</div>
																																																																	<div class="list-item" data-id="1">
																																																																		<div>
																																																																			<a href="#">
																																																																				<span class="w-32 avatar gd-primary">
																																																																					<img src="../assets/img/a1.jpg" alt=".">
																																																																					</span>
																																																																				</a>
																																																																			</div>
																																																																			<div class="flex">
																																																																				<div class="item-feed h-2x">
																																																																					<a href="#">@WordPress</a> How To Get Started With WordPress
																																																																				</div>
																																																																			</div>
																																																																		</div>
																																																																		<div class="list-item" data-id="8">
																																																																			<div>
																																																																				<a href="#">
																																																																					<span class="w-32 avatar gd-success">
																																																																						<img src="../assets/img/a8.jpg" alt=".">
																																																																						</span>
																																																																					</a>
																																																																				</div>
																																																																				<div class="flex">
																																																																					<div class="item-feed h-2x">The biggest software developer conference</div>
																																																																				</div>
																																																																			</div>
																																																																			<div class="list-item" data-id="16">
																																																																				<div>
																																																																					<a href="#">
																																																																						<span class="w-32 avatar gd-info">F</span>
																																																																					</a>
																																																																				</div>
																																																																				<div class="flex">
																																																																					<div class="item-feed h-2x">What if AI Could Uber the Health Care Industry?</div>
																																																																				</div>
																																																																			</div>
																																																																			<div class="list-item" data-id="12">
																																																																				<div>
																																																																					<a href="#">
																																																																						<span class="w-32 avatar gd-info">A</span>
																																																																					</a>
																																																																				</div>
																																																																				<div class="flex">
																																																																					<div class="item-feed h-2x">
																																																																						<a href="#">Support</a> team updated the status
																																																																					</div>
																																																																				</div>
																																																																			</div>
																																																																		</div>
																																																																	</div>
																																																																	<div class="d-flex px-3 py-2 b-t">
																																																																		<div class="flex">
																																																																			<span>6 Notifications</span>
																																																																		</div>
																																																																		<a href="page.setting.html">See all 
																																																																			<i class="fa fa-angle-right text-muted"></i>
																																																																		</a>
																																																																	</div>
																																																																</div>
																																																															</li>
																																																															<li class="nav-item dropdown">
																																																																<a href="#" data-toggle="dropdown" class="nav-link d-flex align-items-center px-2 text-color">
																																																																	<span class="avatar w-24" style="margin: -2px">
																																																																		<img src="../assets/img/a2.jpg" alt="...">
																																																																		</span>
																																																																	</a>
																																																																	<div class="dropdown-menu dropdown-menu-right w mt-3 animate fadeIn">
																																																																		<a class="dropdown-item" href="page.profile.html">
																																																																			<span>Jacqueline Reid</span>
																																																																		</a>
																																																																		<a class="dropdown-item" href="page.price.html">
																																																																			<span class="badge bg-success text-uppercase">Upgrade</span>
																																																																			<span>to Pro</span>
																																																																		</a>
																																																																		<div class="dropdown-divider"></div>
																																																																		<a class="dropdown-item" href="page.profile.html">
																																																																			<span>Profile</span>
																																																																		</a>
																																																																		<a class="dropdown-item d-flex" href="page.invoice.html">
																																																																			<span class="flex">Invoice</span>
																																																																			<span>
																																																																				<b class="badge badge-pill gd-warning">5</b>
																																																																			</span>
																																																																		</a>
																																																																		<a class="dropdown-item" href="page.faq.html">Need help?</a>
																																																																		<div class="dropdown-divider"></div>
																																																																		<a class="dropdown-item" href="page.setting.html">
																																																																			<span>Account Settings</span>
																																																																		</a>
																																																																		<a class="dropdown-item" href="signin.1.html">Sign out</a>
																																																																	</div>
																																																																</li>
																																																																<li class="nav-item d-lg-none">
																																																																	<a href="#" class="nav-link px-2" data-toggle="collapse" data-toggle-class="" data-target="#navbarToggler">
																																																																		<svg
																																																																			xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search">
																																																																			<circle cx="11" cy="11" r="8"></circle>
																																																																			<line x1="21" y1="21" x2="16.65" y2="16.65"></line>
																																																																		</svg>
																																																																	</a>
																																																																</li>
																																																																<li class="nav-item d-lg-none">
																																																																	<a class="nav-link px-1" data-toggle="modal" data-target="#aside">
																																																																		<svg
																																																																			xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-menu">
																																																																			<line x1="3" y1="12" x2="21" y2="12"></line>
																																																																			<line x1="3" y1="6" x2="21" y2="6"></line>
																																																																			<line x1="3" y1="18" x2="21" y2="18"></line>
																																																																		</svg>
																																																																	</a>
																																																																</li>
																																																															</ul>
																																																														</div>
																																																													</div>
																																																													<p>Before login</p>
																																																													<div class="card">
																																																														<div class="navbar navbar-expand-lg">
																																																															<a href="index.html" class="navbar-brand">
																																																																<svg width="32" height="32" viewBox="0 0 512 512"
																																																																	xmlns="http://www.w3.org/2000/svg" fill="currentColor">
																																																																	<g class="loading-spin" style="transform-origin: 256px 256px">
																																																																		<path d="M200.043 106.067c-40.631 15.171-73.434 46.382-90.717 85.933H256l-55.957-85.933zM412.797 288A160.723 160.723 0 0 0 416 256c0-36.624-12.314-70.367-33.016-97.334L311 288h101.797zM359.973 134.395C332.007 110.461 295.694 96 256 96c-7.966 0-15.794.591-23.448 1.715L310.852 224l49.121-89.605zM99.204 224A160.65 160.65 0 0 0 96 256c0 36.639 12.324 70.394 33.041 97.366L201 224H99.204zM311.959 405.932c40.631-15.171 73.433-46.382 90.715-85.932H256l55.959 85.932zM152.046 377.621C180.009 401.545 216.314 416 256 416c7.969 0 15.799-.592 23.456-1.716L201.164 288l-49.118 89.621z"></path>
																																																																	</g>
																																																																</svg>
																																																																<span class="hidden-folded d-inline l-s-n-1x">Basik</span>
																																																															</a>
																																																															<div class="collapse navbar-collapse order-2 order-lg-1" id="navbarToggler">
																																																																<ul class="navbar-nav mt-lg-0 mx-0 mx-lg-2">
																																																																	<li class="nav-item">
																																																																		<a href="#" class="nav-link">Dashboard</a>
																																																																	</li>
																																																																	<li class="nav-item dropdown">
																																																																		<a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">New</a>
																																																																		<div class="dropdown-menu mt-3" role="menu">
																																																																			<a class="dropdown-item">Action </a>
																																																																			<a class="dropdown-item">Another action </a>
																																																																			<a class="dropdown-item">Something else here</a>
																																																																			<div class="dropdown-divider"></div>
																																																																			<a class="dropdown-item">Separated link</a>
																																																																		</div>
																																																																	</li>
																																																																</ul>
																																																															</div>
																																																															<ul class="nav navbar-menu order-1 order-lg-2">
																																																																<li class="nav-item dropdown">
																																																																	<a class="nav-link" data-toggle="dropdown">Sign in</a>
																																																																	<div class="dropdown-menu dropdown-menu-right">
																																																																		<div class="p-4">
																																																																			<form class="dropdown-menu-right" role="form" action="dashboard.html">
																																																																				<div class="form-group">
																																																																					<label>Email</label>
																																																																					<input type="email" class="form-control" placeholder="Enter email">
																																																																					</div>
																																																																					<div class="form-group">
																																																																						<label>Password</label>
																																																																						<input type="password" class="form-control" placeholder="Password">
																																																																							<div class="my-3 text-right">
																																																																								<a href="forgot-password.html" class="text-muted">Forgot password?</a>
																																																																							</div>
																																																																						</div>
																																																																						<div class="checkbox mb-3">
																																																																							<label class="ui-check">
																																																																								<input type="checkbox">
																																																																									<i></i> Remember me
																																																																								</label>
																																																																							</div>
																																																																							<button type="submit" class="btn btn-primary mb-4">Sign in</button>
																																																																							<div>Do not have an account? 
																																																																								<a href="signup.1.html" class="text-primary">Sign up</a>
																																																																							</div>
																																																																						</form>
																																																																					</div>
																																																																					<div class="dropdown-divider"></div>
																																																																					<a class="dropdown-item" href="#">New around here? Sign up</a>
																																																																					<a class="dropdown-item" href="#">Forgot password?</a>
																																																																				</div>
																																																																			</li>
																																																																			<li class="d-flex align-items-center">
																																																																				<a href="#" class="btn btn-rounded btn-sm btn-primary d-none d-lg-block">Register</a>
																																																																			</li>
																																																																			<li class="nav-item d-lg-none">
																																																																				<a href="#" class="nav-link px-2" data-toggle="collapse" data-toggle-class="" data-target="#navbarToggler">
																																																																					<svg
																																																																						xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search">
																																																																						<circle cx="11" cy="11" r="8"></circle>
																																																																						<line x1="21" y1="21" x2="16.65" y2="16.65"></line>
																																																																					</svg>
																																																																				</a>
																																																																			</li>
																																																																			<li class="nav-item d-lg-none">
																																																																				<a class="nav-link px-1" data-toggle="modal" data-target="#aside">
																																																																					<svg
																																																																						xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-menu">
																																																																						<line x1="3" y1="12" x2="21" y2="12"></line>
																																																																						<line x1="3" y1="6" x2="21" y2="6"></line>
																																																																						<line x1="3" y1="18" x2="21" y2="18"></line>
																																																																					</svg>
																																																																				</a>
																																																																			</li>
																																																																		</ul>
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