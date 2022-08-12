var appList = {
    html: `
    <div class="">
	<div class="page-hero page-container" id="page-hero">
		<div class="padding d-flex">
			<div class="page-title">
				<h2 class="text-md text-highlight">List</h2>
				<small class="text-muted">Display data with in a list way</small>
			</div>
			<div class="flex"></div>
			
		</div>
	</div>
	<div class="page-content page-container" id="page-content">
		<div class="padding">
			<div class="row">
				<div class="col-sm-6">
					<p>Basic</p>
					<div class="list list-row block">
						<div class="list-item" data-id="13">
							<div>
								<a href="#">
									<span class="w-48 avatar gd-primary">L</span>
								</a>
							</div>
							<div class="flex">
								<a href="#" class="item-author text-color">Lisa Chapman</a>
								<div class="item-except text-muted text-sm h-1x">Email message from a happy user: 'Neat tool.. seems to be the easiest of' 
									<a href="#">#big data</a>
								</div>
							</div>
							<div class="no-wrap">
								<div class="item-date text-muted text-sm d-none d-md-block">3 weeks ago</div>
							</div>
						</div>
						<div class="list-item" data-id="8">
							<div>
								<a href="#">
									<span class="w-48 avatar gd-success">
										<img src="../assets/img/a8.jpg" alt=".">
										</span>
									</a>
								</div>
								<div class="flex">
									<a href="#" class="item-author text-color">Lawrence Cole</a>
									<div class="item-except text-muted text-sm h-1x">Working on a research piece on the history of vocational schools in America.</div>
								</div>
								<div class="no-wrap">
									<div class="item-date text-muted text-sm d-none d-md-block">02/11 18</div>
								</div>
							</div>
							<div class="list-item" data-id="12">
								<div>
									<a href="#">
										<span class="w-48 avatar gd-info">A</span>
									</a>
								</div>
								<div class="flex">
									<a href="#" class="item-author text-color">Alan Richards</a>
									<div class="item-except text-muted text-sm h-1x">Our client is an IT Healthcare start-up that provides process improvement solutions</div>
								</div>
								<div class="no-wrap">
									<div class="item-date text-muted text-sm d-none d-md-block">5 hours ago</div>
								</div>
							</div>
							<div class="list-item" data-id="15">
								<div>
									<a href="#">
										<span class="w-48 avatar gd-success">J</span>
									</a>
								</div>
								<div class="flex">
									<a href="#" class="item-author text-color">Jean Armstrong</a>
									<div class="item-except text-muted text-sm h-1x">You don’t have to switch tools to review code, share input on projects, or open up the conversation to the rest of your team.</div>
								</div>
								<div class="no-wrap">
									<div class="item-date text-muted text-sm d-none d-md-block">03/12 18</div>
								</div>
							</div>
							<div class="list-item" data-id="14">
								<div>
									<a href="#">
										<span class="w-48 avatar gd-warning">B</span>
									</a>
								</div>
								<div class="flex">
									<a href="#" class="item-author text-color">Benjamin Fields</a>
									<div class="item-except text-muted text-sm h-1x">Managing data in all software or applications becomes simplified when you make use of the best 
										<a href="#">#DatabaseMan</a>
									</div>
								</div>
								<div class="no-wrap">
									<div class="item-date text-muted text-sm d-none d-md-block">1 day ago</div>
								</div>
							</div>
						</div>
					</div>
					<div class="col-sm-6">
						<p>Element</p>
						<div class="list list-row block">
							<div class="list-item" data-id="20">
								<div>
									<label class="ui-check m-0">
										<input type="checkbox" name="id" value="20">
											<i></i>
										</label>
									</div>
									<div>
										<a href="#">
											<span class="w-48 avatar gd-warning">G</span>
										</a>
									</div>
									<div class="flex">
										<div class="item-feed h-2x">
											<a href="#">@Netflix</a> hackathon
										</div>
									</div>
									<div class="no-wrap">
										<div class="item-date text-muted text-sm d-none d-md-block">25/12 18</div>
									</div>
								</div>
								<div class="list-item" data-id="17">
									<div>
										<label class="ui-check m-0">
											<input type="checkbox" name="id" value="17">
												<i></i>
											</label>
										</div>
										<div>
											<a href="#">
												<span class="w-48 avatar gd-warning">A</span>
											</a>
										</div>
										<div class="flex">
											<div class="item-feed h-2x">Alibaba made a smart screen 
												<a href="#">@Alibaba</a>
											</div>
										</div>
										<div class="no-wrap">
											<div class="item-date text-muted text-sm d-none d-md-block">13/12 18</div>
										</div>
									</div>
									<div class="list-item" data-id="1">
										<div>
											<label class="ui-check m-0">
												<input type="checkbox" name="id" value="1">
													<i></i>
												</label>
											</div>
											<div>
												<a href="#">
													<span class="w-48 avatar gd-primary">
														<img src="../assets/img/a1.jpg" alt=".">
														</span>
													</a>
												</div>
												<div class="flex">
													<div class="item-feed h-2x">
														<a href="#">@WordPress</a> How To Get Started With WordPress
													</div>
												</div>
												<div class="no-wrap">
													<div class="item-date text-muted text-sm d-none d-md-block">20 minutes ago</div>
												</div>
											</div>
											<div class="list-item" data-id="13">
												<div>
													<label class="ui-check m-0">
														<input type="checkbox" name="id" value="13">
															<i></i>
														</label>
													</div>
													<div>
														<a href="#">
															<span class="w-48 avatar gd-primary">L</span>
														</a>
													</div>
													<div class="flex">
														<div class="item-feed h-2x">Thanks! Awesome to see good support on Twitter</div>
													</div>
													<div class="no-wrap">
														<div class="item-date text-muted text-sm d-none d-md-block">3 weeks ago</div>
													</div>
												</div>
												<div class="list-item" data-id="16">
													<div>
														<label class="ui-check m-0">
															<input type="checkbox" name="id" value="16">
																<i></i>
															</label>
														</div>
														<div>
															<a href="#">
																<span class="w-48 avatar gd-info">F</span>
															</a>
														</div>
														<div class="flex">
															<div class="item-feed h-2x">What if AI Could Uber the Health Care Industry?</div>
														</div>
														<div class="no-wrap">
															<div class="item-date text-muted text-sm d-none d-md-block">03/12 18</div>
														</div>
													</div>
												</div>
											</div>
											<div class="col-sm-6">
												<div class="list list-row block">
													<div class="list-item" data-id="14">
														<div>
															<a href="#" data-toggle-class="">
																<svg
																	xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bookmark active-primary text-muted">
																	<path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
																</svg>
															</a>
														</div>
														<div>
															<a href="#">
																<span class="w-40 avatar gd-warning">B</span>
															</a>
														</div>
														<div class="flex">
															<a href="#" class="item-author text-color">Benjamin Fields</a>
															<div class="item-except text-muted text-sm h-1x">Managing data in all software or applications becomes simplified when you make use of the best 
																<a href="#">#DatabaseMan</a>
															</div>
														</div>
													</div>
													<div class="list-item" data-id="7">
														<div>
															<a href="#" data-toggle-class="">
																<svg
																	xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bookmark active-primary text-muted">
																	<path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
																</svg>
															</a>
														</div>
														<div>
															<a href="#">
																<span class="w-40 avatar gd-primary">
																	<img src="../assets/img/a7.jpg" alt=".">
																	</span>
																</a>
															</div>
															<div class="flex">
																<a href="#" class="item-author text-color">Frank Kelley</a>
																<div class="item-except text-muted text-sm h-1x">Today we're working on improving the design to make the data you need more accessible!</div>
															</div>
														</div>
														<div class="list-item" data-id="6">
															<div>
																<a href="#" data-toggle-class="">
																	<svg
																		xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bookmark active-primary text-muted">
																		<path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
																	</svg>
																</a>
															</div>
															<div>
																<a href="#">
																	<span class="w-40 avatar gd-danger">
																		<img src="../assets/img/a6.jpg" alt=".">
																		</span>
																	</a>
																</div>
																<div class="flex">
																	<a href="#" class="item-author text-color">Wayne Gray</a>
																	<div class="item-except text-muted text-sm h-1x">This makes me believe there are good people in the world still</div>
																</div>
															</div>
															<div class="list-item" data-id="2">
																<div>
																	<a href="#" data-toggle-class="">
																		<svg
																			xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bookmark active-primary text-muted">
																			<path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
																		</svg>
																	</a>
																</div>
																<div>
																	<a href="#">
																		<span class="w-40 avatar gd-primary">
																			<img src="../assets/img/a2.jpg" alt=".">
																			</span>
																		</a>
																	</div>
																	<div class="flex">
																		<a href="#" class="item-author text-color">Kathy Alexander</a>
																		<div class="item-except text-muted text-sm h-1x">With 
																			<a href="#">@Dashboard</a>, you can create fully customized and interactive snapshots, scorecards, and dashboards. Visit our live dashboard gallery to see a glimpse of what's possible.
																		</div>
																	</div>
																</div>
																<div class="list-item" data-id="1">
																	<div>
																		<a href="#" data-toggle-class="">
																			<svg
																				xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bookmark active-primary text-muted">
																				<path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
																			</svg>
																		</a>
																	</div>
																	<div>
																		<a href="#">
																			<span class="w-40 avatar gd-primary">
																				<img src="../assets/img/a1.jpg" alt=".">
																				</span>
																			</a>
																		</div>
																		<div class="flex">
																			<a href="#" class="item-author text-color">Joyce McCoy</a>
																			<div class="item-except text-muted text-sm h-1x">In WordPress Tutorial, we’ll streamline the process for you by pointing out the all key features of the WordPress</div>
																		</div>
																	</div>
																	<div class="list-item" data-id="13">
																		<div>
																			<a href="#" data-toggle-class="">
																				<svg
																					xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bookmark active-primary text-muted">
																					<path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
																				</svg>
																			</a>
																		</div>
																		<div>
																			<a href="#">
																				<span class="w-40 avatar gd-primary">L</span>
																			</a>
																		</div>
																		<div class="flex">
																			<a href="#" class="item-author text-color">Lisa Chapman</a>
																			<div class="item-except text-muted text-sm h-1x">Email message from a happy user: 'Neat tool.. seems to be the easiest of' 
																				<a href="#">#big data</a>
																			</div>
																		</div>
																	</div>
																	<div class="list-item" data-id="16">
																		<div>
																			<a href="#" data-toggle-class="">
																				<svg
																					xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bookmark active-primary text-muted">
																					<path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
																				</svg>
																			</a>
																		</div>
																		<div>
																			<a href="#">
																				<span class="w-40 avatar gd-info">F</span>
																			</a>
																		</div>
																		<div class="flex">
																			<a href="#" class="item-author text-color">Frances Stewart</a>
																			<div class="item-except text-muted text-sm h-1x">When it comes to artificial intelligence, little things can add up in big ways</div>
																		</div>
																	</div>
																	<div class="list-item" data-id="11">
																		<div>
																			<a href="#" data-toggle-class="">
																				<svg
																					xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bookmark active-primary text-muted">
																					<path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
																				</svg>
																			</a>
																		</div>
																		<div>
																			<a href="#">
																				<span class="w-40 avatar gd-info">K</span>
																			</a>
																		</div>
																		<div class="flex">
																			<a href="#" class="item-author text-color">Kenneth Pierce</a>
																			<div class="item-except text-muted text-sm h-1x">@DataAPI Implemented new API for transation data from client to server.</div>
																		</div>
																	</div>
																</div>
															</div>
															<div class="col-sm-6">
																<div class="list list-row block">
																	<div class="list-item" data-id="7">
																		<div>
																			<a href="#">
																				<span class="w-40 avatar gd-primary">
																					<span class="avatar-status on b-white avatar-right"></span>
																					<img src="../assets/img/a7.jpg" alt=".">
																					</span>
																				</a>
																			</div>
																			<div class="flex">
																				<a href="#" class="item-author text-color">Frank Kelley</a>
																				<div class="item-except text-muted text-sm h-1x">Today we're working on improving the design to make the data you need more accessible!</div>
																			</div>
																			<div>
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
																			</div>
																		</div>
																		<div class="list-item" data-id="17">
																			<div>
																				<a href="#">
																					<span class="w-40 avatar gd-warning">
																						<span class="avatar-status on b-white avatar-right"></span> H
																					</span>
																				</a>
																			</div>
																			<div class="flex">
																				<a href="#" class="item-author text-color">Helen Valdez</a>
																				<div class="item-except text-muted text-sm h-1x">AI will highlight &amp; emphasize key areas where students need help, allowing teachers to focus on facilitating the learning process</div>
																			</div>
																			<div>
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
																			</div>
																		</div>
																		<div class="list-item" data-id="19">
																			<div>
																				<a href="#">
																					<span class="w-40 avatar gd-warning">
																						<span class="avatar-status on b-white avatar-right"></span> T
																					</span>
																				</a>
																			</div>
																			<div class="flex">
																				<a href="#" class="item-author text-color">Tiffany Baker</a>
																				<div class="item-except text-muted text-sm h-1x">We design and implement native iOS apps that harmonize simplicity of design and complexity of function</div>
																			</div>
																			<div>
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
																			</div>
																		</div>
																		<div class="list-item" data-id="6">
																			<div>
																				<a href="#">
																					<span class="w-40 avatar gd-danger">
																						<span class="avatar-status on b-white avatar-right"></span>
																						<img src="../assets/img/a6.jpg" alt=".">
																						</span>
																					</a>
																				</div>
																				<div class="flex">
																					<a href="#" class="item-author text-color">Wayne Gray</a>
																					<div class="item-except text-muted text-sm h-1x">This makes me believe there are good people in the world still</div>
																				</div>
																				<div>
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
																				</div>
																			</div>
																			<div class="list-item" data-id="13">
																				<div>
																					<a href="#">
																						<span class="w-40 avatar gd-primary">
																							<span class="avatar-status off b-white avatar-right"></span> L
																						</span>
																					</a>
																				</div>
																				<div class="flex">
																					<a href="#" class="item-author text-color">Lisa Chapman</a>
																					<div class="item-except text-muted text-sm h-1x">Email message from a happy user: 'Neat tool.. seems to be the easiest of' 
																						<a href="#">#big data</a>
																					</div>
																				</div>
																				<div>
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
																				</div>
																			</div>
																			<div class="list-item" data-id="10">
																				<div>
																					<a href="#">
																						<span class="w-40 avatar gd-danger">
																							<span class="avatar-status on b-white avatar-right"></span>
																							<img src="../assets/img/a10.jpg" alt=".">
																							</span>
																						</a>
																					</div>
																					<div class="flex">
																						<a href="#" class="item-author text-color">Edward Clark</a>
																						<div class="item-except text-muted text-sm h-1x">Leaders are running an AMA on Reddit. Ask your question and find out how the project is going</div>
																					</div>
																					<div>
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
																					</div>
																				</div>
																				<div class="list-item" data-id="14">
																					<div>
																						<a href="#">
																							<span class="w-40 avatar gd-warning">
																								<span class="avatar-status off b-white avatar-right"></span> B
																							</span>
																						</a>
																					</div>
																					<div class="flex">
																						<a href="#" class="item-author text-color">Benjamin Fields</a>
																						<div class="item-except text-muted text-sm h-1x">Managing data in all software or applications becomes simplified when you make use of the best 
																							<a href="#">#DatabaseMan</a>
																						</div>
																					</div>
																					<div>
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
																					</div>
																				</div>
																				<div class="list-item" data-id="16">
																					<div>
																						<a href="#">
																							<span class="w-40 avatar gd-info">
																								<span class="avatar-status on b-white avatar-right"></span> F
																							</span>
																						</a>
																					</div>
																					<div class="flex">
																						<a href="#" class="item-author text-color">Frances Stewart</a>
																						<div class="item-except text-muted text-sm h-1x">When it comes to artificial intelligence, little things can add up in big ways</div>
																					</div>
																					<div>
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