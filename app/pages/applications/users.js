var appUsers = {
    html: `
    <div class="d-flex flex fixed-content">
	<div class="fade aside aside-sm" id="content-aside">
		<div class="modal-dialog d-flex flex-column w-md bg-body" id="user-nav">
			<div class="navbar">
				<span class="text-md mx-2">Groups</span>
				<div class="dropdown dropright">
					<button data-toggle="dropdown" class="btn btn-sm btn-icon no-bg no-shadow">
						<svg
							xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus">
							<line x1="12" y1="5" x2="12" y2="19"></line>
							<line x1="5" y1="12" x2="19" y2="12"></line>
						</svg>
					</button>
					<div class="dropdown-menu w-lg">
						<div class="p-3">
							<div class="input-group">
								<input type="text" class="form-control form-control-sm" id="newField" placeholder="Group name" required="">
									<span class="input-group-append">
										<button class="btn btn-white no-shadow btn-sm" type="button" id="newBtn">
											<svg
												xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check">
												<polyline points="20 6 9 17 4 12"></polyline>
											</svg>
										</button>
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="scrollable hover">
					<div class="sidenav p-2">
						<nav class="nav-active-text-primary" data-nav="">
							<ul class="nav">
								<li>
									<a href="app.user.html#all" data-pjax-state="">
										<span class="nav-text">All</span>
										<span class="nav-badge">
											<b class="badge badge-sm badge-pill gd-danger">15</b>
										</span>
									</a>
								</li>
								<li>
									<a href="app.user.html#company" data-pjax-state="">
										<span class="nav-text">Company</span>
										<span class="nav-badge">
											<b class="badge badge-sm badge-pill gd-info">3</b>
										</span>
									</a>
								</li>
								<li>
									<a href="app.user.html#personal" data-pjax-state="">
										<span class="nav-text">Personal</span>
									</a>
								</li>
								<li>
									<a href="app.user.html#team" data-pjax-state="">
										<span class="nav-text">Team</span>
									</a>
								</li>
								<li class="nav-header hidden-folded mt-2">
									<span class="d-block pt-1 text-sm text-muted">Tags</span>
								</li>
								<li>
									<a href="app.user.html#client" data-pjax-state="">
										<span class="mx-2">
											<b class="badge badge-circle sm text-primary"></b>
										</span>
										<span class="nav-text">Clients</span>
									</a>
								</li>
								<li>
									<a href="app.user.html#supplier" data-pjax-state="">
										<span class="mx-2">
											<b class="badge badge-circle sm text-info"></b>
										</span>
										<span class="nav-text">Suppliers</span>
									</a>
								</li>
								<li>
									<a href="app.user.html#competitor" data-pjax-state="">
										<span class="mx-2">
											<b class="badge badge-circle sm text-success"></b>
										</span>
										<span class="nav-text">Competitors</span>
									</a>
								</li>
								<li>
									<a href="app.user.html#corp" data-pjax-state="">
										<span class="mx-2">
											<b class="badge badge-circle sm text-warning"></b>
										</span>
										<span class="nav-text">Corps</span>
									</a>
								</li>
							</ul>
						</nav>
					</div>
				</div>
			</div>
		</div>
		<div class="d-flex flex" id="content-body">
			<div class="d-flex flex-column flex" id="user-list">
				<div class="p-3">
					<div class="toolbar">
						<div class="btn-group">
							<button class="btn btn-sm btn-icon btn-white" data-toggle="tooltip" title="" id="btn-trash" data-original-title="Trash">
								<svg
									xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash text-muted">
									<polyline points="3 6 5 6 21 6"></polyline>
									<path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
								</svg>
							</button>
							<button class="btn btn-sm btn-icon btn-white sort" data-sort="item-author" data-toggle="tooltip" title="" data-original-title="Sort">
								<i class="sorting"></i>
							</button>
						</div>
						<div class="dropdown">
							<button class="btn btn-sm btn-white no-wrap" data-toggle="dropdown">A-Z</button>
							<div class="dropdown-menu p-3" id="filter">
								<span class="badge pointer">A</span>
								<span class="badge pointer">B</span>
								<span class="badge pointer">C</span>
								<span class="badge pointer">D</span>
								<span class="badge pointer">E</span>
								<span class="badge pointer">F</span>
								<span class="badge pointer">G</span>
								<span class="badge pointer">H</span>
								<span class="badge pointer">I</span>
								<span class="badge pointer">J</span>
								<span class="badge pointer">K</span>
								<span class="badge pointer">L</span>
								<span class="badge pointer">M</span>
								<span class="badge pointer">N</span>
								<span class="badge pointer">O</span>
								<span class="badge pointer">P</span>
								<span class="badge pointer">Q</span>
								<span class="badge pointer">R</span>
								<span class="badge pointer">S</span>
								<span class="badge pointer">T</span>
								<span class="badge pointer">U</span>
								<span class="badge pointer">V</span>
								<span class="badge pointer">W</span>
								<span class="badge pointer">X</span>
								<span class="badge pointer">Y</span>
								<span class="badge pointer">Z</span>
							</div>
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
							<button data-toggle="modal" data-target="#content-aside" data-modal="" class="btn btn-sm btn-icon btn-white d-md-none">
								<svg
									xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-menu">
									<line x1="3" y1="12" x2="21" y2="12"></line>
									<line x1="3" y1="6" x2="21" y2="6"></line>
									<line x1="3" y1="18" x2="21" y2="18"></line>
								</svg>
							</button>
						</div>
					</div>
					<div class="scroll-y mx-3 mb-0 card">
						<div class="list list-row">
							<div class="list-item" data-id="2" data-sr-id="30" style="visibility: visible; transform: none; opacity: 1; transition: transform 0.5s cubic-bezier(0.6, 0.2, 0.1, 1) 0s, opacity 0.5s cubic-bezier(0.6, 0.2, 0.1, 1) 0s;">
								<div>
									<label class="ui-check m-0">
										<input type="checkbox" name="id" value="2">
											<i></i>
										</label>
									</div>
									<div>
										<a href="#" data-toggle-class="" data-pjax-state="">
											<svg
												xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bookmark active-primary text-muted">
												<path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
											</svg>
										</a>
									</div>
									<div>
										<a href="app.user.detail.html#2" data-pjax-state="">
											<span class="w-40 avatar gd-primary" data-toggle-class="loading">
												<span class="avatar-status off b-white avatar-right"></span>
												<img src="../assets/img/a2.jpg" alt=".">
												</span>
											</a>
										</div>
										<div class="flex">
											<a href="app.user.detail.html#2" class="item-author text-color" data-pjax-state="">Kathy Alexander</a>
											<div class="item-mail text-muted h-1x d-none d-sm-block">kathy-alexander@microsoft.com</div>
											<div class="item-tag tag hide">Clients,Team,Personal,Company,Work,Friends,Suppliers,Partners</div>
										</div>
										<div>
											<div class="item-action dropdown">
												<a href="#" data-toggle="dropdown" class="text-muted" data-pjax-state="">
													<svg
														xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-vertical">
														<circle cx="12" cy="12" r="1"></circle>
														<circle cx="12" cy="5" r="1"></circle>
														<circle cx="12" cy="19" r="1"></circle>
													</svg>
												</a>
												<div class="dropdown-menu dropdown-menu-right bg-black" role="menu">
													<a class="dropdown-item" href="#" data-pjax-state="">See detail </a>
													<a class="dropdown-item download" data-pjax-state="">Download </a>
													<a class="dropdown-item edit" data-pjax-state="">Edit</a>
													<div class="dropdown-divider"></div>
													<a class="dropdown-item trash" data-pjax-state="">Delete item</a>
												</div>
											</div>
										</div>
									</div>
									<div class="list-item" data-id="1" data-sr-id="31" style="visibility: visible; transform: none; opacity: 1; transition: transform 0.5s cubic-bezier(0.6, 0.2, 0.1, 1) 0s, opacity 0.5s cubic-bezier(0.6, 0.2, 0.1, 1) 0s;">
										<div>
											<label class="ui-check m-0">
												<input type="checkbox" name="id" value="1">
													<i></i>
												</label>
											</div>
											<div>
												<a href="#" data-toggle-class="" data-pjax-state="">
													<svg
														xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bookmark active-primary text-muted">
														<path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
													</svg>
												</a>
											</div>
											<div>
												<a href="app.user.detail.html#1" data-pjax-state="">
													<span class="w-40 avatar gd-primary" data-toggle-class="loading">
														<span class="avatar-status on b-white avatar-right"></span>
														<img src="../assets/img/a1.jpg" alt=".">
														</span>
													</a>
												</div>
												<div class="flex">
													<a href="app.user.detail.html#1" class="item-author text-color" data-pjax-state="">Joyce McCoy</a>
													<div class="item-mail text-muted h-1x d-none d-sm-block">joyce-mccoy@samsuminc..com</div>
													<div class="item-tag tag hide">Suppliers,Work,Friends,Personal,Company,Partners,Team,Clients</div>
												</div>
												<div>
													<div class="item-action dropdown">
														<a href="#" data-toggle="dropdown" class="text-muted" data-pjax-state="">
															<svg
																xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-vertical">
																<circle cx="12" cy="12" r="1"></circle>
																<circle cx="12" cy="5" r="1"></circle>
																<circle cx="12" cy="19" r="1"></circle>
															</svg>
														</a>
														<div class="dropdown-menu dropdown-menu-right bg-black" role="menu">
															<a class="dropdown-item" href="#" data-pjax-state="">See detail </a>
															<a class="dropdown-item download" data-pjax-state="">Download </a>
															<a class="dropdown-item edit" data-pjax-state="">Edit</a>
															<div class="dropdown-divider"></div>
															<a class="dropdown-item trash" data-pjax-state="">Delete item</a>
														</div>
													</div>
												</div>
											</div>
											<div class="list-item" data-id="16" data-sr-id="32" style="visibility: visible; transform: none; opacity: 1; transition: transform 0.5s cubic-bezier(0.6, 0.2, 0.1, 1) 0s, opacity 0.5s cubic-bezier(0.6, 0.2, 0.1, 1) 0s;">
												<div>
													<label class="ui-check m-0">
														<input type="checkbox" name="id" value="16">
															<i></i>
														</label>
													</div>
													<div>
														<a href="#" data-toggle-class="" data-pjax-state="">
															<svg
																xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bookmark active-primary text-muted">
																<path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
															</svg>
														</a>
													</div>
													<div>
														<a href="app.user.detail.html#16" data-pjax-state="">
															<span class="w-40 avatar gd-info" data-toggle-class="loading">
																<span class="avatar-status on b-white avatar-right"></span> F
															</span>
														</a>
													</div>
													<div class="flex">
														<a href="app.user.detail.html#16" class="item-author text-color" data-pjax-state="">Frances Stewart</a>
														<div class="item-mail text-muted h-1x d-none d-sm-block">frances-stewart@microsoft.com</div>
														<div class="item-tag tag hide">Partners,Company,Work,Personal,Friends,Team,Clients,Suppliers</div>
													</div>
													<div>
														<div class="item-action dropdown">
															<a href="#" data-toggle="dropdown" class="text-muted" data-pjax-state="">
																<svg
																	xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-vertical">
																	<circle cx="12" cy="12" r="1"></circle>
																	<circle cx="12" cy="5" r="1"></circle>
																	<circle cx="12" cy="19" r="1"></circle>
																</svg>
															</a>
															<div class="dropdown-menu dropdown-menu-right bg-black" role="menu">
																<a class="dropdown-item" href="#" data-pjax-state="">See detail </a>
																<a class="dropdown-item download" data-pjax-state="">Download </a>
																<a class="dropdown-item edit" data-pjax-state="">Edit</a>
																<div class="dropdown-divider"></div>
																<a class="dropdown-item trash" data-pjax-state="">Delete item</a>
															</div>
														</div>
													</div>
												</div>
												<div class="list-item" data-id="7" data-sr-id="33" style="visibility: visible; transform: none; opacity: 1; transition: transform 0.5s cubic-bezier(0.6, 0.2, 0.1, 1) 0s, opacity 0.5s cubic-bezier(0.6, 0.2, 0.1, 1) 0s;">
													<div>
														<label class="ui-check m-0">
															<input type="checkbox" name="id" value="7">
																<i></i>
															</label>
														</div>
														<div>
															<a href="#" data-toggle-class="" data-pjax-state="">
																<svg
																	xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bookmark active-primary text-muted">
																	<path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
																</svg>
															</a>
														</div>
														<div>
															<a href="app.user.detail.html#7" data-pjax-state="">
																<span class="w-40 avatar gd-primary" data-toggle-class="loading">
																	<span class="avatar-status on b-white avatar-right"></span>
																	<img src="../assets/img/a7.jpg" alt=".">
																	</span>
																</a>
															</div>
															<div class="flex">
																<a href="app.user.detail.html#7" class="item-author text-color" data-pjax-state="">Frank Kelley</a>
																<div class="item-mail text-muted h-1x d-none d-sm-block">frank-kelley@lostcorp.com</div>
																<div class="item-tag tag hide">Company,Partners,Work,Suppliers,Personal,Friends,Clients,Team</div>
															</div>
															<div>
																<div class="item-action dropdown">
																	<a href="#" data-toggle="dropdown" class="text-muted" data-pjax-state="">
																		<svg
																			xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-vertical">
																			<circle cx="12" cy="12" r="1"></circle>
																			<circle cx="12" cy="5" r="1"></circle>
																			<circle cx="12" cy="19" r="1"></circle>
																		</svg>
																	</a>
																	<div class="dropdown-menu dropdown-menu-right bg-black" role="menu">
																		<a class="dropdown-item" href="#" data-pjax-state="">See detail </a>
																		<a class="dropdown-item download" data-pjax-state="">Download </a>
																		<a class="dropdown-item edit" data-pjax-state="">Edit</a>
																		<div class="dropdown-divider"></div>
																		<a class="dropdown-item trash" data-pjax-state="">Delete item</a>
																	</div>
																</div>
															</div>
														</div>
														<div class="list-item" data-id="12" data-sr-id="34" style="visibility: visible; transform: none; opacity: 1; transition: transform 0.5s cubic-bezier(0.6, 0.2, 0.1, 1) 0s, opacity 0.5s cubic-bezier(0.6, 0.2, 0.1, 1) 0s;">
															<div>
																<label class="ui-check m-0">
																	<input type="checkbox" name="id" value="12">
																		<i></i>
																	</label>
																</div>
																<div>
																	<a href="#" data-toggle-class="" data-pjax-state="">
																		<svg
																			xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bookmark active-primary text-muted">
																			<path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
																		</svg>
																	</a>
																</div>
																<div>
																	<a href="app.user.detail.html#12" data-pjax-state="">
																		<span class="w-40 avatar gd-info" data-toggle-class="loading">
																			<span class="avatar-status off b-white avatar-right"></span> A
																		</span>
																	</a>
																</div>
																<div class="flex">
																	<a href="app.user.detail.html#12" class="item-author text-color" data-pjax-state="">Alan Richards</a>
																	<div class="item-mail text-muted h-1x d-none d-sm-block">alan-richards@drafty.com</div>
																	<div class="item-tag tag hide">Friends,Personal,Clients,Partners,Company,Work,Team,Suppliers</div>
																</div>
																<div>
																	<div class="item-action dropdown">
																		<a href="#" data-toggle="dropdown" class="text-muted" data-pjax-state="">
																			<svg
																				xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-vertical">
																				<circle cx="12" cy="12" r="1"></circle>
																				<circle cx="12" cy="5" r="1"></circle>
																				<circle cx="12" cy="19" r="1"></circle>
																			</svg>
																		</a>
																		<div class="dropdown-menu dropdown-menu-right bg-black" role="menu">
																			<a class="dropdown-item" href="#" data-pjax-state="">See detail </a>
																			<a class="dropdown-item download" data-pjax-state="">Download </a>
																			<a class="dropdown-item edit" data-pjax-state="">Edit</a>
																			<div class="dropdown-divider"></div>
																			<a class="dropdown-item trash" data-pjax-state="">Delete item</a>
																		</div>
																	</div>
																</div>
															</div>
															<div class="list-item" data-id="11" data-sr-id="35" style="visibility: visible; transform: none; opacity: 1; transition: transform 0.5s cubic-bezier(0.6, 0.2, 0.1, 1) 0s, opacity 0.5s cubic-bezier(0.6, 0.2, 0.1, 1) 0s;">
																<div>
																	<label class="ui-check m-0">
																		<input type="checkbox" name="id" value="11">
																			<i></i>
																		</label>
																	</div>
																	<div>
																		<a href="#" data-toggle-class="" data-pjax-state="">
																			<svg
																				xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bookmark active-primary text-muted">
																				<path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
																			</svg>
																		</a>
																	</div>
																	<div>
																		<a href="app.user.detail.html#11" data-pjax-state="">
																			<span class="w-40 avatar gd-info" data-toggle-class="loading">
																				<span class="avatar-status on b-white avatar-right"></span> K
																			</span>
																		</a>
																	</div>
																	<div class="flex">
																		<a href="app.user.detail.html#11" class="item-author text-color" data-pjax-state="">Kenneth Pierce</a>
																		<div class="item-mail text-muted h-1x d-none d-sm-block">kenneth-pierce@kisskiss.com</div>
																		<div class="item-tag tag hide">Clients,Suppliers,Personal,Partners,Team,Friends,Company,Work</div>
																	</div>
																	<div>
																		<div class="item-action dropdown">
																			<a href="#" data-toggle="dropdown" class="text-muted" data-pjax-state="">
																				<svg
																					xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-vertical">
																					<circle cx="12" cy="12" r="1"></circle>
																					<circle cx="12" cy="5" r="1"></circle>
																					<circle cx="12" cy="19" r="1"></circle>
																				</svg>
																			</a>
																			<div class="dropdown-menu dropdown-menu-right bg-black" role="menu">
																				<a class="dropdown-item" href="#" data-pjax-state="">See detail </a>
																				<a class="dropdown-item download" data-pjax-state="">Download </a>
																				<a class="dropdown-item edit" data-pjax-state="">Edit</a>
																				<div class="dropdown-divider"></div>
																				<a class="dropdown-item trash" data-pjax-state="">Delete item</a>
																			</div>
																		</div>
																	</div>
																</div>
																<div class="list-item" data-id="9" data-sr-id="36" style="visibility: visible; transform: none; opacity: 1; transition: transform 0.5s cubic-bezier(0.6, 0.2, 0.1, 1) 0s, opacity 0.5s cubic-bezier(0.6, 0.2, 0.1, 1) 0s;">
																	<div>
																		<label class="ui-check m-0">
																			<input type="checkbox" name="id" value="9">
																				<i></i>
																			</label>
																		</div>
																		<div>
																			<a href="#" data-toggle-class="" data-pjax-state="">
																				<svg
																					xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bookmark active-primary text-muted">
																					<path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
																				</svg>
																			</a>
																		</div>
																		<div>
																			<a href="app.user.detail.html#9" data-pjax-state="">
																				<span class="w-40 avatar gd-info" data-toggle-class="loading">
																					<span class="avatar-status on b-white avatar-right"></span>
																					<img src="../assets/img/a9.jpg" alt=".">
																					</span>
																				</a>
																			</div>
																			<div class="flex">
																				<a href="app.user.detail.html#9" class="item-author text-color" data-pjax-state="">Steven Cruz</a>
																				<div class="item-mail text-muted h-1x d-none d-sm-block">steven-cruz@hhhinc.com</div>
																				<div class="item-tag tag hide">Work,Suppliers,Personal,Partners,Team,Company,Clients,Friends</div>
																			</div>
																			<div>
																				<div class="item-action dropdown">
																					<a href="#" data-toggle="dropdown" class="text-muted" data-pjax-state="">
																						<svg
																							xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-vertical">
																							<circle cx="12" cy="12" r="1"></circle>
																							<circle cx="12" cy="5" r="1"></circle>
																							<circle cx="12" cy="19" r="1"></circle>
																						</svg>
																					</a>
																					<div class="dropdown-menu dropdown-menu-right bg-black" role="menu">
																						<a class="dropdown-item" href="#" data-pjax-state="">See detail </a>
																						<a class="dropdown-item download" data-pjax-state="">Download </a>
																						<a class="dropdown-item edit" data-pjax-state="">Edit</a>
																						<div class="dropdown-divider"></div>
																						<a class="dropdown-item trash" data-pjax-state="">Delete item</a>
																					</div>
																				</div>
																			</div>
																		</div>
																		<div class="list-item" data-id="14" data-sr-id="37" style="visibility: visible; transform: none; opacity: 1; transition: transform 0.5s cubic-bezier(0.6, 0.2, 0.1, 1) 0s, opacity 0.5s cubic-bezier(0.6, 0.2, 0.1, 1) 0s;">
																			<div>
																				<label class="ui-check m-0">
																					<input type="checkbox" name="id" value="14">
																						<i></i>
																					</label>
																				</div>
																				<div>
																					<a href="#" data-toggle-class="" data-pjax-state="">
																						<svg
																							xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bookmark active-primary text-muted">
																							<path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
																						</svg>
																					</a>
																				</div>
																				<div>
																					<a href="app.user.detail.html#14" data-pjax-state="">
																						<span class="w-40 avatar gd-warning" data-toggle-class="loading">
																							<span class="avatar-status off b-white avatar-right"></span> B
																						</span>
																					</a>
																				</div>
																				<div class="flex">
																					<a href="app.user.detail.html#14" class="item-author text-color" data-pjax-state="">Benjamin Fields</a>
																					<div class="item-mail text-muted h-1x d-none d-sm-block">benjamin-fields@luckmancorp.com</div>
																					<div class="item-tag tag hide">Suppliers,Team,Personal,Work,Friends,Clients,Partners,Company</div>
																				</div>
																				<div>
																					<div class="item-action dropdown">
																						<a href="#" data-toggle="dropdown" class="text-muted" data-pjax-state="">
																							<svg
																								xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-vertical">
																								<circle cx="12" cy="12" r="1"></circle>
																								<circle cx="12" cy="5" r="1"></circle>
																								<circle cx="12" cy="19" r="1"></circle>
																							</svg>
																						</a>
																						<div class="dropdown-menu dropdown-menu-right bg-black" role="menu">
																							<a class="dropdown-item" href="#" data-pjax-state="">See detail </a>
																							<a class="dropdown-item download" data-pjax-state="">Download </a>
																							<a class="dropdown-item edit" data-pjax-state="">Edit</a>
																							<div class="dropdown-divider"></div>
																							<a class="dropdown-item trash" data-pjax-state="">Delete item</a>
																						</div>
																					</div>
																				</div>
																			</div>
																			<div class="list-item" data-id="10" data-sr-id="38" style="visibility: visible; transform: none; opacity: 1; transition: transform 0.5s cubic-bezier(0.6, 0.2, 0.1, 1) 0s, opacity 0.5s cubic-bezier(0.6, 0.2, 0.1, 1) 0s;">
																				<div>
																					<label class="ui-check m-0">
																						<input type="checkbox" name="id" value="10">
																							<i></i>
																						</label>
																					</div>
																					<div>
																						<a href="#" data-toggle-class="" data-pjax-state="">
																							<svg
																								xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bookmark active-primary text-muted">
																								<path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
																							</svg>
																						</a>
																					</div>
																					<div>
																						<a href="app.user.detail.html#10" data-pjax-state="">
																							<span class="w-40 avatar gd-danger" data-toggle-class="loading">
																								<span class="avatar-status on b-white avatar-right"></span>
																								<img src="../assets/img/a10.jpg" alt=".">
																								</span>
																							</a>
																						</div>
																						<div class="flex">
																							<a href="app.user.detail.html#10" class="item-author text-color" data-pjax-state="">Edward Clark</a>
																							<div class="item-mail text-muted h-1x d-none d-sm-block">edward-clark@goldage.com</div>
																							<div class="item-tag tag hide">Clients,Company,Personal,Friends,Partners,Work,Suppliers,Team</div>
																						</div>
																						<div>
																							<div class="item-action dropdown">
																								<a href="#" data-toggle="dropdown" class="text-muted" data-pjax-state="">
																									<svg
																										xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-vertical">
																										<circle cx="12" cy="12" r="1"></circle>
																										<circle cx="12" cy="5" r="1"></circle>
																										<circle cx="12" cy="19" r="1"></circle>
																									</svg>
																								</a>
																								<div class="dropdown-menu dropdown-menu-right bg-black" role="menu">
																									<a class="dropdown-item" href="#" data-pjax-state="">See detail </a>
																									<a class="dropdown-item download" data-pjax-state="">Download </a>
																									<a class="dropdown-item edit" data-pjax-state="">Edit</a>
																									<div class="dropdown-divider"></div>
																									<a class="dropdown-item trash" data-pjax-state="">Delete item</a>
																								</div>
																							</div>
																						</div>
																					</div>
																					<div class="list-item" data-id="20" data-sr-id="39" style="visibility: visible; transform: none; opacity: 1; transition: transform 0.5s cubic-bezier(0.6, 0.2, 0.1, 1) 0s, opacity 0.5s cubic-bezier(0.6, 0.2, 0.1, 1) 0s;">
																						<div>
																							<label class="ui-check m-0">
																								<input type="checkbox" name="id" value="20">
																									<i></i>
																								</label>
																							</div>
																							<div>
																								<a href="#" data-toggle-class="" data-pjax-state="">
																									<svg
																										xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bookmark active-primary text-muted">
																										<path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
																									</svg>
																								</a>
																							</div>
																							<div>
																								<a href="app.user.detail.html#20" data-pjax-state="">
																									<span class="w-40 avatar gd-warning" data-toggle-class="loading">
																										<span class="avatar-status on b-white avatar-right"></span> G
																									</span>
																								</a>
																							</div>
																							<div class="flex">
																								<a href="app.user.detail.html#20" class="item-author text-color" data-pjax-state="">Gloria Williams</a>
																								<div class="item-mail text-muted h-1x d-none d-sm-block">gloria-williams@netflix.com</div>
																								<div class="item-tag tag hide">Clients,Partners,Team,Personal,Suppliers,Work,Friends,Company</div>
																							</div>
																							<div>
																								<div class="item-action dropdown">
																									<a href="#" data-toggle="dropdown" class="text-muted" data-pjax-state="">
																										<svg
																											xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-vertical">
																											<circle cx="12" cy="12" r="1"></circle>
																											<circle cx="12" cy="5" r="1"></circle>
																											<circle cx="12" cy="19" r="1"></circle>
																										</svg>
																									</a>
																									<div class="dropdown-menu dropdown-menu-right bg-black" role="menu">
																										<a class="dropdown-item" href="#" data-pjax-state="">See detail </a>
																										<a class="dropdown-item download" data-pjax-state="">Download </a>
																										<a class="dropdown-item edit" data-pjax-state="">Edit</a>
																										<div class="dropdown-divider"></div>
																										<a class="dropdown-item trash" data-pjax-state="">Delete item</a>
																									</div>
																								</div>
																							</div>
																						</div>
																					</div>
																					<div class="no-result hide">
																						<div class="p-4 text-center">No Results</div>
																					</div>
																				</div>
																				<div class="px-3 py-3 mt-auto">
																					<div class="d-flex align-items-center">
																						<div class="flex d-flex flex-row">
																							<button class="btn btn-sm no-bg no-shadow px-0 pager-prev">
																								<svg
																									xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-left">
																									<polyline points="15 18 9 12 15 6"></polyline>
																								</svg>
																							</button>
																							<div class="pagination pagination-sm mx-1">
																								<li class="active">
																									<a class="page" href="javascript:function Z(){Z=&quot;&quot;}Z()">1</a>
																								</li>
																								<li>
																									<a class="page" href="javascript:function Z(){Z=&quot;&quot;}Z()">2</a>
																								</li>
																							</div>
																							<button class="btn btn-sm no-bg no-shadow px-0 pager-next">
																								<svg
																									xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right">
																									<polyline points="9 18 15 12 9 6"></polyline>
																								</svg>
																							</button>
																						</div>
																						<div>
																							<span class="text-muted">Total:</span>
																							<span id="count">20</span>
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