var appSidebar = {
    html: `
    <div class="">
	<div class="page-hero page-container" id="page-hero">
		<div class="padding d-flex">
			<div class="page-title">
				<h2 class="text-md text-highlight">Sidenav</h2>
				<small class="text-muted">Responsive navigation in a sidebar</small>
			</div>
			<div class="flex"></div>
			
		</div>
	</div>
	<div class="page-content page-container" id="page-content">
		<div class="padding">
			<div class="row">
				<div class="col-md-6 col-lg-3">
					<div class="card">
						<div class="sidenav h-100 modal-dialog bg-light">
							<div class="flex scrollable hover">
								<div class="pt-2">
									<div class="nav-fold px-2">
										<a class="d-flex p-2" data-toggle="dropdown">
											<span class="avatar w-40 rounded hide">J</span>
											<img src="../assets/img/a5.jpg" alt="..." class="w-40 r">
											</a>
											<div class="hidden-folded flex p-2">
												<div class="d-flex">
													<a href="#" class="mr-auto text-nowrap">Jacqueline Reid 
														<small class="d-block text-muted">Super Admin</small>
													</a>
												</div>
											</div>
										</div>
									</div>
									<div class="nav-active-text-primary auto-nav" data-nav="">
										<ul class="nav">
											<li class="nav-header">
												<span class="text-xs hidden-folded">Discover</span>
											</li>
											<li class="active">
												<a href="#">
													<span class="nav-icon">
														<svg
															xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home">
															<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
															<polyline points="9 22 9 12 15 12 15 22"></polyline>
														</svg>
													</span>
													<span class="nav-text">Home</span>
												</a>
											</li>
											<li>
												<a href="#">
													<span class="nav-icon">
														<svg
															xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-shopping-bag">
															<path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
															<line x1="3" y1="6" x2="21" y2="6"></line>
															<path d="M16 10a4 4 0 0 1-8 0"></path>
														</svg>
													</span>
													<span class="nav-text">Shop</span>
													<span class="nav-badge">
														<b class="badge badge-pill bg-danger theme">8</b>
													</span>
													<span class="nav-caret"></span>
												</a>
												<ul class="nav-sub">
													<li>
														<a href="#">
															<span class="nav-text">Products</span>
														</a>
													</li>
													<li>
														<a href="#">
															<span class="nav-text">Customers</span>
														</a>
													</li>
													<li>
														<a href="#">
															<span class="nav-text">Orders</span>
														</a>
													</li>
													<li>
														<a href="#">
															<span class="nav-text">Shipment</span>
														</a>
													</li>
												</ul>
											</li>
											<li>
												<a href="#">
													<span class="nav-icon">
														<svg
															xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-mail">
															<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
															<polyline points="22,6 12,13 2,6"></polyline>
														</svg>
													</span>
													<span class="nav-text">Mail</span>
												</a>
											</li>
											<li>
												<a href="#">
													<span class="nav-icon">
														<svg
															xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-grid">
															<rect x="3" y="3" width="7" height="7"></rect>
															<rect x="14" y="3" width="7" height="7"></rect>
															<rect x="14" y="14" width="7" height="7"></rect>
															<rect x="3" y="14" width="7" height="7"></rect>
														</svg>
													</span>
													<span class="nav-text">Projects</span>
													<span class="nav-badge">
														<b class="badge badge-pill danger">6</b>
													</span>
												</a>
											</li>
											<li>
												<a href="#">
													<span class="nav-icon">
														<svg
															xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-pie-chart">
															<path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path>
															<path d="M22 12A10 10 0 0 0 12 2v10z"></path>
														</svg>
													</span>
													<span class="nav-text">Sales</span>
												</a>
											</li>
											<li class="nav-header hidden-folded">
												<span class="text-xs">Your collection</span>
											</li>
											<li>
												<a href="#">
													<span class="nav-icon">
														<svg
															xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-list">
															<line x1="8" y1="6" x2="21" y2="6"></line>
															<line x1="8" y1="12" x2="21" y2="12"></line>
															<line x1="8" y1="18" x2="21" y2="18"></line>
															<line x1="3" y1="6" x2="3" y2="6"></line>
															<line x1="3" y1="12" x2="3" y2="12"></line>
															<line x1="3" y1="18" x2="3" y2="18"></line>
														</svg>
													</span>
													<span class="nav-text">Tasks</span>
												</a>
											</li>
											<li>
												<a href="#">
													<span class="nav-icon">
														<svg
															xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-calendar">
															<rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
															<line x1="16" y1="2" x2="16" y2="6"></line>
															<line x1="8" y1="2" x2="8" y2="6"></line>
															<line x1="3" y1="10" x2="21" y2="10"></line>
														</svg>
													</span>
													<span class="nav-text">Calendar</span>
												</a>
											</li>
										</ul>
									</div>
								</div>
								<div class="py-2 mt-2 b-t no-shrink">
									<ul class="nav no-border">
										<li>
											<a href="#">
												<span class="nav-icon">
													<svg
														xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-power">
														<path d="M18.36 6.64a9 9 0 1 1-12.73 0"></path>
														<line x1="12" y1="2" x2="12" y2="12"></line>
													</svg>
												</span>
												<span class="nav-text">Logout</span>
											</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
					<div class="col-md-6 col-lg-3">
						<div class="card">
							<div class="sidenav h-100 modal-dialog bg-light">
								<div class="flex scrollable hover">
									<div class="pt-2">
										<div class="nav-fold px-2">
											<a class="d-flex p-2" data-toggle="dropdown">
												<span class="avatar w-40 rounded hide">J</span>
												<img src="../assets/img/a4.jpg" alt="..." class="w-40 r">
												</a>
												<div class="hidden-folded flex p-2">
													<div class="d-flex">
														<a href="#" class="mr-auto text-nowrap">Jacqueline Reid 
															<small class="d-block text-muted">Super Admin</small>
														</a>
													</div>
												</div>
											</div>
										</div>
										<div class="nav-border b-primary auto-nav" data-nav="">
											<ul class="nav">
												<li class="nav-header">
													<span class="text-xs hidden-folded">Discover</span>
												</li>
												<li class="active">
													<a href="#">
														<span class="nav-icon">
															<svg
																xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home">
																<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
																<polyline points="9 22 9 12 15 12 15 22"></polyline>
															</svg>
														</span>
														<span class="nav-text">Home</span>
													</a>
												</li>
												<li>
													<a href="#">
														<span class="nav-icon">
															<svg
																xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-shopping-bag">
																<path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
																<line x1="3" y1="6" x2="21" y2="6"></line>
																<path d="M16 10a4 4 0 0 1-8 0"></path>
															</svg>
														</span>
														<span class="nav-text">Shop</span>
														<span class="nav-badge">
															<b class="badge badge-pill bg-danger theme">11</b>
														</span>
														<span class="nav-caret"></span>
													</a>
													<ul class="nav-sub">
														<li>
															<a href="#">
																<span class="nav-text">Products</span>
															</a>
														</li>
														<li>
															<a href="#">
																<span class="nav-text">Customers</span>
															</a>
														</li>
														<li>
															<a href="#">
																<span class="nav-text">Orders</span>
															</a>
														</li>
														<li>
															<a href="#">
																<span class="nav-text">Shipment</span>
															</a>
														</li>
													</ul>
												</li>
												<li>
													<a href="#">
														<span class="nav-icon">
															<svg
																xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-mail">
																<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
																<polyline points="22,6 12,13 2,6"></polyline>
															</svg>
														</span>
														<span class="nav-text">Mail</span>
													</a>
												</li>
												<li>
													<a href="#">
														<span class="nav-icon">
															<svg
																xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-grid">
																<rect x="3" y="3" width="7" height="7"></rect>
																<rect x="14" y="3" width="7" height="7"></rect>
																<rect x="14" y="14" width="7" height="7"></rect>
																<rect x="3" y="14" width="7" height="7"></rect>
															</svg>
														</span>
														<span class="nav-text">Projects</span>
														<span class="nav-badge">
															<b class="badge badge-pill danger">6</b>
														</span>
													</a>
												</li>
												<li>
													<a href="#">
														<span class="nav-icon">
															<svg
																xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-pie-chart">
																<path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path>
																<path d="M22 12A10 10 0 0 0 12 2v10z"></path>
															</svg>
														</span>
														<span class="nav-text">Sales</span>
													</a>
												</li>
												<li class="nav-header hidden-folded">
													<span class="text-xs">Your collection</span>
												</li>
												<li>
													<a href="#">
														<span class="nav-icon">
															<svg
																xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-list">
																<line x1="8" y1="6" x2="21" y2="6"></line>
																<line x1="8" y1="12" x2="21" y2="12"></line>
																<line x1="8" y1="18" x2="21" y2="18"></line>
																<line x1="3" y1="6" x2="3" y2="6"></line>
																<line x1="3" y1="12" x2="3" y2="12"></line>
																<line x1="3" y1="18" x2="3" y2="18"></line>
															</svg>
														</span>
														<span class="nav-text">Tasks</span>
													</a>
												</li>
												<li>
													<a href="#">
														<span class="nav-icon">
															<svg
																xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-calendar">
																<rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
																<line x1="16" y1="2" x2="16" y2="6"></line>
																<line x1="8" y1="2" x2="8" y2="6"></line>
																<line x1="3" y1="10" x2="21" y2="10"></line>
															</svg>
														</span>
														<span class="nav-text">Calendar</span>
													</a>
												</li>
											</ul>
										</div>
									</div>
									<div class="py-2 mt-2 b-t no-shrink">
										<ul class="nav no-border">
											<li>
												<a href="#">
													<span class="nav-icon">
														<svg
															xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-power">
															<path d="M18.36 6.64a9 9 0 1 1-12.73 0"></path>
															<line x1="12" y1="2" x2="12" y2="12"></line>
														</svg>
													</span>
													<span class="nav-text">Logout</span>
												</a>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
						<div class="col-md-6 col-lg-3">
							<div class="card">
								<div class="sidenav h-100 modal-dialog bg-light">
									<div class="flex scrollable hover">
										<div class="pt-2">
											<div class="nav-fold px-2">
												<a class="d-flex p-2" data-toggle="dropdown">
													<span class="avatar w-40 rounded hide">J</span>
													<img src="../assets/img/a7.jpg" alt="..." class="w-40 r">
													</a>
													<div class="hidden-folded flex p-2">
														<div class="d-flex">
															<a href="#" class="mr-auto text-nowrap">Jacqueline Reid 
																<small class="d-block text-muted">Super Admin</small>
															</a>
														</div>
													</div>
												</div>
											</div>
											<div class="nav-active-primary auto-nav" data-nav="">
												<ul class="nav">
													<li class="nav-header">
														<span class="text-xs hidden-folded">Discover</span>
													</li>
													<li class="active">
														<a href="#">
															<span class="nav-icon">
																<svg
																	xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home">
																	<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
																	<polyline points="9 22 9 12 15 12 15 22"></polyline>
																</svg>
															</span>
															<span class="nav-text">Home</span>
														</a>
													</li>
													<li>
														<a href="#">
															<span class="nav-icon">
																<svg
																	xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-shopping-bag">
																	<path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
																	<line x1="3" y1="6" x2="21" y2="6"></line>
																	<path d="M16 10a4 4 0 0 1-8 0"></path>
																</svg>
															</span>
															<span class="nav-text">Shop</span>
															<span class="nav-badge">
																<b class="badge badge-pill bg-danger theme">7</b>
															</span>
															<span class="nav-caret"></span>
														</a>
														<ul class="nav-sub">
															<li>
																<a href="#">
																	<span class="nav-text">Products</span>
																</a>
															</li>
															<li>
																<a href="#">
																	<span class="nav-text">Customers</span>
																</a>
															</li>
															<li>
																<a href="#">
																	<span class="nav-text">Orders</span>
																</a>
															</li>
															<li>
																<a href="#">
																	<span class="nav-text">Shipment</span>
																</a>
															</li>
														</ul>
													</li>
													<li>
														<a href="#">
															<span class="nav-icon">
																<svg
																	xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-mail">
																	<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
																	<polyline points="22,6 12,13 2,6"></polyline>
																</svg>
															</span>
															<span class="nav-text">Mail</span>
														</a>
													</li>
													<li>
														<a href="#">
															<span class="nav-icon">
																<svg
																	xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-grid">
																	<rect x="3" y="3" width="7" height="7"></rect>
																	<rect x="14" y="3" width="7" height="7"></rect>
																	<rect x="14" y="14" width="7" height="7"></rect>
																	<rect x="3" y="14" width="7" height="7"></rect>
																</svg>
															</span>
															<span class="nav-text">Projects</span>
															<span class="nav-badge">
																<b class="badge badge-pill danger">6</b>
															</span>
														</a>
													</li>
													<li>
														<a href="#">
															<span class="nav-icon">
																<svg
																	xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-pie-chart">
																	<path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path>
																	<path d="M22 12A10 10 0 0 0 12 2v10z"></path>
																</svg>
															</span>
															<span class="nav-text">Sales</span>
														</a>
													</li>
													<li class="nav-header hidden-folded">
														<span class="text-xs">Your collection</span>
													</li>
													<li>
														<a href="#">
															<span class="nav-icon">
																<svg
																	xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-list">
																	<line x1="8" y1="6" x2="21" y2="6"></line>
																	<line x1="8" y1="12" x2="21" y2="12"></line>
																	<line x1="8" y1="18" x2="21" y2="18"></line>
																	<line x1="3" y1="6" x2="3" y2="6"></line>
																	<line x1="3" y1="12" x2="3" y2="12"></line>
																	<line x1="3" y1="18" x2="3" y2="18"></line>
																</svg>
															</span>
															<span class="nav-text">Tasks</span>
														</a>
													</li>
													<li>
														<a href="#">
															<span class="nav-icon">
																<svg
																	xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-calendar">
																	<rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
																	<line x1="16" y1="2" x2="16" y2="6"></line>
																	<line x1="8" y1="2" x2="8" y2="6"></line>
																	<line x1="3" y1="10" x2="21" y2="10"></line>
																</svg>
															</span>
															<span class="nav-text">Calendar</span>
														</a>
													</li>
												</ul>
											</div>
										</div>
										<div class="py-2 mt-2 b-t no-shrink">
											<ul class="nav no-border">
												<li>
													<a href="#">
														<span class="nav-icon">
															<svg
																xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-power">
																<path d="M18.36 6.64a9 9 0 1 1-12.73 0"></path>
																<line x1="12" y1="2" x2="12" y2="12"></line>
															</svg>
														</span>
														<span class="nav-text">Logout</span>
													</a>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
							<div class="col-md-6 col-lg-3">
								<div class="card">
									<div class="sidenav h-100 modal-dialog bg-light">
										<div class="flex scrollable hover">
											<div class="pt-2">
												<div class="nav-fold px-2">
													<a class="d-flex p-2" data-toggle="dropdown">
														<span class="avatar w-40 rounded hide">J</span>
														<img src="../assets/img/a2.jpg" alt="..." class="w-40 r">
														</a>
														<div class="hidden-folded flex p-2">
															<div class="d-flex">
																<a href="#" class="mr-auto text-nowrap">Jacqueline Reid 
																	<small class="d-block text-muted">Super Admin</small>
																</a>
															</div>
														</div>
													</div>
												</div>
												<div class="nav-stacked nav-active-primary auto-nav" data-nav="">
													<ul class="nav">
														<li class="nav-header">
															<span class="text-xs hidden-folded">Discover</span>
														</li>
														<li class="active">
															<a href="#">
																<span class="nav-icon">
																	<svg
																		xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home">
																		<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
																		<polyline points="9 22 9 12 15 12 15 22"></polyline>
																	</svg>
																</span>
																<span class="nav-text">Home</span>
															</a>
														</li>
														<li>
															<a href="#">
																<span class="nav-icon">
																	<svg
																		xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-shopping-bag">
																		<path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
																		<line x1="3" y1="6" x2="21" y2="6"></line>
																		<path d="M16 10a4 4 0 0 1-8 0"></path>
																	</svg>
																</span>
																<span class="nav-text">Shop</span>
																<span class="nav-badge">
																	<b class="badge badge-pill bg-danger theme">9</b>
																</span>
																<span class="nav-caret"></span>
															</a>
															<ul class="nav-sub">
																<li>
																	<a href="#">
																		<span class="nav-text">Products</span>
																	</a>
																</li>
																<li>
																	<a href="#">
																		<span class="nav-text">Customers</span>
																	</a>
																</li>
																<li>
																	<a href="#">
																		<span class="nav-text">Orders</span>
																	</a>
																</li>
																<li>
																	<a href="#">
																		<span class="nav-text">Shipment</span>
																	</a>
																</li>
															</ul>
														</li>
														<li>
															<a href="#">
																<span class="nav-icon">
																	<svg
																		xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-mail">
																		<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
																		<polyline points="22,6 12,13 2,6"></polyline>
																	</svg>
																</span>
																<span class="nav-text">Mail</span>
															</a>
														</li>
														<li>
															<a href="#">
																<span class="nav-icon">
																	<svg
																		xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-grid">
																		<rect x="3" y="3" width="7" height="7"></rect>
																		<rect x="14" y="3" width="7" height="7"></rect>
																		<rect x="14" y="14" width="7" height="7"></rect>
																		<rect x="3" y="14" width="7" height="7"></rect>
																	</svg>
																</span>
																<span class="nav-text">Projects</span>
																<span class="nav-badge">
																	<b class="badge badge-pill danger">6</b>
																</span>
															</a>
														</li>
														<li>
															<a href="#">
																<span class="nav-icon">
																	<svg
																		xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-pie-chart">
																		<path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path>
																		<path d="M22 12A10 10 0 0 0 12 2v10z"></path>
																	</svg>
																</span>
																<span class="nav-text">Sales</span>
															</a>
														</li>
														<li class="nav-header hidden-folded">
															<span class="text-xs">Your collection</span>
														</li>
														<li>
															<a href="#">
																<span class="nav-icon">
																	<svg
																		xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-list">
																		<line x1="8" y1="6" x2="21" y2="6"></line>
																		<line x1="8" y1="12" x2="21" y2="12"></line>
																		<line x1="8" y1="18" x2="21" y2="18"></line>
																		<line x1="3" y1="6" x2="3" y2="6"></line>
																		<line x1="3" y1="12" x2="3" y2="12"></line>
																		<line x1="3" y1="18" x2="3" y2="18"></line>
																	</svg>
																</span>
																<span class="nav-text">Tasks</span>
															</a>
														</li>
														<li>
															<a href="#">
																<span class="nav-icon">
																	<svg
																		xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-calendar">
																		<rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
																		<line x1="16" y1="2" x2="16" y2="6"></line>
																		<line x1="8" y1="2" x2="8" y2="6"></line>
																		<line x1="3" y1="10" x2="21" y2="10"></line>
																	</svg>
																</span>
																<span class="nav-text">Calendar</span>
															</a>
														</li>
													</ul>
												</div>
											</div>
											<div class="py-2 mt-2 b-t no-shrink">
												<ul class="nav no-border">
													<li>
														<a href="#">
															<span class="nav-icon">
																<svg
																	xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-power">
																	<path d="M18.36 6.64a9 9 0 1 1-12.73 0"></path>
																	<line x1="12" y1="2" x2="12" y2="12"></line>
																</svg>
															</span>
															<span class="nav-text">Logout</span>
														</a>
													</li>
												</ul>
											</div>
										</div>
									</div>
								</div>
								<div class="col">
									<div class="d-md-flex">
										<div class="card d-inline-block mr-4 folded">
											<div class="sidenav h-100 modal-dialog bg-light">
												<div class="flex scrollable hover">
													<div class="pt-2">
														<div class="nav-fold px-2">
															<a class="d-flex p-2" data-toggle="dropdown">
																<span class="avatar w-40 rounded hide">J</span>
																<img src="../assets/img/a2.jpg" alt="..." class="w-40 r">
																</a>
																<div class="hidden-folded flex p-2">
																	<div class="d-flex">
																		<a href="#" class="mr-auto text-nowrap">Jacqueline Reid 
																			<small class="d-block text-muted">Super Admin</small>
																		</a>
																	</div>
																</div>
															</div>
														</div>
														<div class="nav-stacked nav-active-primary auto-nav" data-nav="">
															<ul class="nav">
																<li class="nav-header">
																	<span class="text-xs hidden-folded">Discover</span>
																</li>
																<li class="active">
																	<a href="#">
																		<span class="nav-icon">
																			<svg
																				xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home">
																				<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
																				<polyline points="9 22 9 12 15 12 15 22"></polyline>
																			</svg>
																		</span>
																		<span class="nav-text">Home</span>
																	</a>
																</li>
																<li>
																	<a href="#">
																		<span class="nav-icon">
																			<svg
																				xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-shopping-bag">
																				<path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
																				<line x1="3" y1="6" x2="21" y2="6"></line>
																				<path d="M16 10a4 4 0 0 1-8 0"></path>
																			</svg>
																		</span>
																		<span class="nav-text">Shop</span>
																		<span class="nav-badge">
																			<b class="badge badge-pill bg-danger theme">10</b>
																		</span>
																		<span class="nav-caret"></span>
																	</a>
																	<ul class="nav-sub">
																		<li>
																			<a href="#">
																				<span class="nav-text">Products</span>
																			</a>
																		</li>
																		<li>
																			<a href="#">
																				<span class="nav-text">Customers</span>
																			</a>
																		</li>
																		<li>
																			<a href="#">
																				<span class="nav-text">Orders</span>
																			</a>
																		</li>
																		<li>
																			<a href="#">
																				<span class="nav-text">Shipment</span>
																			</a>
																		</li>
																	</ul>
																</li>
																<li>
																	<a href="#">
																		<span class="nav-icon">
																			<svg
																				xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-mail">
																				<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
																				<polyline points="22,6 12,13 2,6"></polyline>
																			</svg>
																		</span>
																		<span class="nav-text">Mail</span>
																	</a>
																</li>
																<li>
																	<a href="#">
																		<span class="nav-icon">
																			<svg
																				xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-grid">
																				<rect x="3" y="3" width="7" height="7"></rect>
																				<rect x="14" y="3" width="7" height="7"></rect>
																				<rect x="14" y="14" width="7" height="7"></rect>
																				<rect x="3" y="14" width="7" height="7"></rect>
																			</svg>
																		</span>
																		<span class="nav-text">Projects</span>
																		<span class="nav-badge">
																			<b class="badge badge-pill danger">6</b>
																		</span>
																	</a>
																</li>
																<li>
																	<a href="#">
																		<span class="nav-icon">
																			<svg
																				xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-pie-chart">
																				<path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path>
																				<path d="M22 12A10 10 0 0 0 12 2v10z"></path>
																			</svg>
																		</span>
																		<span class="nav-text">Sales</span>
																	</a>
																</li>
																<li class="nav-header hidden-folded">
																	<span class="text-xs">Your collection</span>
																</li>
																<li>
																	<a href="#">
																		<span class="nav-icon">
																			<svg
																				xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-list">
																				<line x1="8" y1="6" x2="21" y2="6"></line>
																				<line x1="8" y1="12" x2="21" y2="12"></line>
																				<line x1="8" y1="18" x2="21" y2="18"></line>
																				<line x1="3" y1="6" x2="3" y2="6"></line>
																				<line x1="3" y1="12" x2="3" y2="12"></line>
																				<line x1="3" y1="18" x2="3" y2="18"></line>
																			</svg>
																		</span>
																		<span class="nav-text">Tasks</span>
																	</a>
																</li>
																<li>
																	<a href="#">
																		<span class="nav-icon">
																			<svg
																				xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-calendar">
																				<rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
																				<line x1="16" y1="2" x2="16" y2="6"></line>
																				<line x1="8" y1="2" x2="8" y2="6"></line>
																				<line x1="3" y1="10" x2="21" y2="10"></line>
																			</svg>
																		</span>
																		<span class="nav-text">Calendar</span>
																	</a>
																</li>
															</ul>
														</div>
													</div>
													<div class="py-2 mt-2 b-t no-shrink">
														<ul class="nav no-border">
															<li>
																<a href="#">
																	<span class="nav-icon">
																		<svg
																			xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-power">
																			<path d="M18.36 6.64a9 9 0 1 1-12.73 0"></path>
																			<line x1="12" y1="2" x2="12" y2="12"></line>
																		</svg>
																	</span>
																	<span class="nav-text">Logout</span>
																</a>
															</li>
														</ul>
													</div>
												</div>
											</div>
											<div class="card d-inline-block mr-4 folded md">
												<div class="sidenav h-100 modal-dialog bg-light">
													<div class="flex scrollable hover">
														<div class="pt-2">
															<div class="nav-fold px-2">
																<a class="d-flex p-2" data-toggle="dropdown">
																	<span class="avatar w-40 rounded hide">J</span>
																	<img src="../assets/img/a9.jpg" alt="..." class="w-40 r">
																	</a>
																	<div class="hidden-folded flex p-2">
																		<div class="d-flex">
																			<a href="#" class="mr-auto text-nowrap">Jacqueline Reid 
																				<small class="d-block text-muted">Super Admin</small>
																			</a>
																		</div>
																	</div>
																</div>
															</div>
															<div class="show-text nav-active-text-primary auto-nav" data-nav="">
																<ul class="nav">
																	<li class="nav-header">
																		<span class="text-xs hidden-folded">Discover</span>
																	</li>
																	<li class="active">
																		<a href="#">
																			<span class="nav-icon">
																				<svg
																					xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home">
																					<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
																					<polyline points="9 22 9 12 15 12 15 22"></polyline>
																				</svg>
																			</span>
																			<span class="nav-text">Home</span>
																		</a>
																	</li>
																	<li>
																		<a href="#">
																			<span class="nav-icon">
																				<svg
																					xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-shopping-bag">
																					<path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
																					<line x1="3" y1="6" x2="21" y2="6"></line>
																					<path d="M16 10a4 4 0 0 1-8 0"></path>
																				</svg>
																			</span>
																			<span class="nav-text">Shop</span>
																			<span class="nav-badge">
																				<b class="badge badge-pill bg-danger theme">7</b>
																			</span>
																			<span class="nav-caret"></span>
																		</a>
																		<ul class="nav-sub">
																			<li>
																				<a href="#">
																					<span class="nav-text">Products</span>
																				</a>
																			</li>
																			<li>
																				<a href="#">
																					<span class="nav-text">Customers</span>
																				</a>
																			</li>
																			<li>
																				<a href="#">
																					<span class="nav-text">Orders</span>
																				</a>
																			</li>
																			<li>
																				<a href="#">
																					<span class="nav-text">Shipment</span>
																				</a>
																			</li>
																		</ul>
																	</li>
																	<li>
																		<a href="#">
																			<span class="nav-icon">
																				<svg
																					xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-mail">
																					<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
																					<polyline points="22,6 12,13 2,6"></polyline>
																				</svg>
																			</span>
																			<span class="nav-text">Mail</span>
																		</a>
																	</li>
																	<li>
																		<a href="#">
																			<span class="nav-icon">
																				<svg
																					xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-grid">
																					<rect x="3" y="3" width="7" height="7"></rect>
																					<rect x="14" y="3" width="7" height="7"></rect>
																					<rect x="14" y="14" width="7" height="7"></rect>
																					<rect x="3" y="14" width="7" height="7"></rect>
																				</svg>
																			</span>
																			<span class="nav-text">Projects</span>
																			<span class="nav-badge">
																				<b class="badge badge-pill danger">6</b>
																			</span>
																		</a>
																	</li>
																	<li>
																		<a href="#">
																			<span class="nav-icon">
																				<svg
																					xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-pie-chart">
																					<path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path>
																					<path d="M22 12A10 10 0 0 0 12 2v10z"></path>
																				</svg>
																			</span>
																			<span class="nav-text">Sales</span>
																		</a>
																	</li>
																	<li class="nav-header hidden-folded">
																		<span class="text-xs">Your collection</span>
																	</li>
																	<li>
																		<a href="#">
																			<span class="nav-icon">
																				<svg
																					xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-list">
																					<line x1="8" y1="6" x2="21" y2="6"></line>
																					<line x1="8" y1="12" x2="21" y2="12"></line>
																					<line x1="8" y1="18" x2="21" y2="18"></line>
																					<line x1="3" y1="6" x2="3" y2="6"></line>
																					<line x1="3" y1="12" x2="3" y2="12"></line>
																					<line x1="3" y1="18" x2="3" y2="18"></line>
																				</svg>
																			</span>
																			<span class="nav-text">Tasks</span>
																		</a>
																	</li>
																	<li>
																		<a href="#">
																			<span class="nav-icon">
																				<svg
																					xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-calendar">
																					<rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
																					<line x1="16" y1="2" x2="16" y2="6"></line>
																					<line x1="8" y1="2" x2="8" y2="6"></line>
																					<line x1="3" y1="10" x2="21" y2="10"></line>
																				</svg>
																			</span>
																			<span class="nav-text">Calendar</span>
																		</a>
																	</li>
																</ul>
															</div>
														</div>
														<div class="py-2 mt-2 b-t no-shrink">
															<ul class="nav no-border">
																<li>
																	<a href="#">
																		<span class="nav-icon">
																			<svg
																				xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-power">
																				<path d="M18.36 6.64a9 9 0 1 1-12.73 0"></path>
																				<line x1="12" y1="2" x2="12" y2="12"></line>
																			</svg>
																		</span>
																		<span class="nav-text">Logout</span>
																	</a>
																</li>
															</ul>
														</div>
													</div>
												</div>
												<div class="card d-inline-block mr-4 hover-top folded nav-dropdown">
													<div class="sidenav h-100 modal-dialog bg-light">
														<div class="flex scrollable hover">
															<div class="pt-2">
																<div class="nav-fold px-2">
																	<a class="d-flex p-2" data-toggle="dropdown">
																		<span class="avatar w-40 rounded hide">J</span>
																		<img src="../assets/img/a9.jpg" alt="..." class="w-40 r">
																		</a>
																		<div class="hidden-folded flex p-2">
																			<div class="d-flex">
																				<a href="#" class="mr-auto text-nowrap">Jacqueline Reid 
																					<small class="d-block text-muted">Super Admin</small>
																				</a>
																			</div>
																		</div>
																	</div>
																</div>
																<div class="nav-active-primary auto-nav" data-nav="">
																	<ul class="nav">
																		<li class="nav-header">
																			<span class="text-xs hidden-folded">Discover</span>
																		</li>
																		<li class="active">
																			<a href="#">
																				<span class="nav-icon">
																					<svg
																						xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home">
																						<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
																						<polyline points="9 22 9 12 15 12 15 22"></polyline>
																					</svg>
																				</span>
																				<span class="nav-text">Home</span>
																			</a>
																		</li>
																		<li>
																			<a href="#">
																				<span class="nav-icon">
																					<svg
																						xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-shopping-bag">
																						<path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
																						<line x1="3" y1="6" x2="21" y2="6"></line>
																						<path d="M16 10a4 4 0 0 1-8 0"></path>
																					</svg>
																				</span>
																				<span class="nav-text">Shop</span>
																				<span class="nav-badge">
																					<b class="badge badge-pill bg-danger theme">9</b>
																				</span>
																				<span class="nav-caret"></span>
																			</a>
																			<ul class="nav-sub">
																				<li>
																					<a href="#">
																						<span class="nav-text">Products</span>
																					</a>
																				</li>
																				<li>
																					<a href="#">
																						<span class="nav-text">Customers</span>
																					</a>
																				</li>
																				<li>
																					<a href="#">
																						<span class="nav-text">Orders</span>
																					</a>
																				</li>
																				<li>
																					<a href="#">
																						<span class="nav-text">Shipment</span>
																					</a>
																				</li>
																			</ul>
																		</li>
																		<li>
																			<a href="#">
																				<span class="nav-icon">
																					<svg
																						xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-mail">
																						<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
																						<polyline points="22,6 12,13 2,6"></polyline>
																					</svg>
																				</span>
																				<span class="nav-text">Mail</span>
																			</a>
																		</li>
																		<li>
																			<a href="#">
																				<span class="nav-icon">
																					<svg
																						xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-grid">
																						<rect x="3" y="3" width="7" height="7"></rect>
																						<rect x="14" y="3" width="7" height="7"></rect>
																						<rect x="14" y="14" width="7" height="7"></rect>
																						<rect x="3" y="14" width="7" height="7"></rect>
																					</svg>
																				</span>
																				<span class="nav-text">Projects</span>
																				<span class="nav-badge">
																					<b class="badge badge-pill danger">6</b>
																				</span>
																			</a>
																		</li>
																		<li>
																			<a href="#">
																				<span class="nav-icon">
																					<svg
																						xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-pie-chart">
																						<path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path>
																						<path d="M22 12A10 10 0 0 0 12 2v10z"></path>
																					</svg>
																				</span>
																				<span class="nav-text">Sales</span>
																			</a>
																		</li>
																		<li class="nav-header hidden-folded">
																			<span class="text-xs">Your collection</span>
																		</li>
																		<li>
																			<a href="#">
																				<span class="nav-icon">
																					<svg
																						xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-list">
																						<line x1="8" y1="6" x2="21" y2="6"></line>
																						<line x1="8" y1="12" x2="21" y2="12"></line>
																						<line x1="8" y1="18" x2="21" y2="18"></line>
																						<line x1="3" y1="6" x2="3" y2="6"></line>
																						<line x1="3" y1="12" x2="3" y2="12"></line>
																						<line x1="3" y1="18" x2="3" y2="18"></line>
																					</svg>
																				</span>
																				<span class="nav-text">Tasks</span>
																			</a>
																		</li>
																		<li>
																			<a href="#">
																				<span class="nav-icon">
																					<svg
																						xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-calendar">
																						<rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
																						<line x1="16" y1="2" x2="16" y2="6"></line>
																						<line x1="8" y1="2" x2="8" y2="6"></line>
																						<line x1="3" y1="10" x2="21" y2="10"></line>
																					</svg>
																				</span>
																				<span class="nav-text">Calendar</span>
																			</a>
																		</li>
																	</ul>
																</div>
															</div>
															<div class="py-2 mt-2 b-t no-shrink">
																<ul class="nav no-border">
																	<li>
																		<a href="#">
																			<span class="nav-icon">
																				<svg
																					xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-power">
																					<path d="M18.36 6.64a9 9 0 1 1-12.73 0"></path>
																					<line x1="12" y1="2" x2="12" y2="12"></line>
																				</svg>
																			</span>
																			<span class="nav-text">Logout</span>
																		</a>
																	</li>
																</ul>
															</div>
														</div>
													</div>
													<div class="card d-inline-block mr-4 folded nav-expand">
														<div class="sidenav h-100 modal-dialog bg-light">
															<div class="flex scrollable hover">
																<div class="pt-2">
																	<div class="nav-fold px-2">
																		<a class="d-flex p-2" data-toggle="dropdown">
																			<span class="avatar w-40 rounded hide">J</span>
																			<img src="../assets/img/a3.jpg" alt="..." class="w-40 r">
																			</a>
																			<div class="hidden-folded flex p-2">
																				<div class="d-flex">
																					<a href="#" class="mr-auto text-nowrap">Jacqueline Reid 
																						<small class="d-block text-muted">Super Admin</small>
																					</a>
																				</div>
																			</div>
																		</div>
																	</div>
																	<div class="nav-active-text-primary auto-nav" data-nav="">
																		<ul class="nav">
																			<li class="nav-header">
																				<span class="text-xs hidden-folded">Discover</span>
																			</li>
																			<li class="active">
																				<a href="#">
																					<span class="nav-icon">
																						<svg
																							xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home">
																							<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
																							<polyline points="9 22 9 12 15 12 15 22"></polyline>
																						</svg>
																					</span>
																					<span class="nav-text">Home</span>
																				</a>
																			</li>
																			<li>
																				<a href="#">
																					<span class="nav-icon">
																						<svg
																							xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-shopping-bag">
																							<path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
																							<line x1="3" y1="6" x2="21" y2="6"></line>
																							<path d="M16 10a4 4 0 0 1-8 0"></path>
																						</svg>
																					</span>
																					<span class="nav-text">Shop</span>
																					<span class="nav-badge">
																						<b class="badge badge-pill bg-danger theme">10</b>
																					</span>
																					<span class="nav-caret"></span>
																				</a>
																				<ul class="nav-sub">
																					<li>
																						<a href="#">
																							<span class="nav-text">Products</span>
																						</a>
																					</li>
																					<li>
																						<a href="#">
																							<span class="nav-text">Customers</span>
																						</a>
																					</li>
																					<li>
																						<a href="#">
																							<span class="nav-text">Orders</span>
																						</a>
																					</li>
																					<li>
																						<a href="#">
																							<span class="nav-text">Shipment</span>
																						</a>
																					</li>
																				</ul>
																			</li>
																			<li>
																				<a href="#">
																					<span class="nav-icon">
																						<svg
																							xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-mail">
																							<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
																							<polyline points="22,6 12,13 2,6"></polyline>
																						</svg>
																					</span>
																					<span class="nav-text">Mail</span>
																				</a>
																			</li>
																			<li>
																				<a href="#">
																					<span class="nav-icon">
																						<svg
																							xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-grid">
																							<rect x="3" y="3" width="7" height="7"></rect>
																							<rect x="14" y="3" width="7" height="7"></rect>
																							<rect x="14" y="14" width="7" height="7"></rect>
																							<rect x="3" y="14" width="7" height="7"></rect>
																						</svg>
																					</span>
																					<span class="nav-text">Projects</span>
																					<span class="nav-badge">
																						<b class="badge badge-pill danger">6</b>
																					</span>
																				</a>
																			</li>
																			<li>
																				<a href="#">
																					<span class="nav-icon">
																						<svg
																							xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-pie-chart">
																							<path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path>
																							<path d="M22 12A10 10 0 0 0 12 2v10z"></path>
																						</svg>
																					</span>
																					<span class="nav-text">Sales</span>
																				</a>
																			</li>
																			<li class="nav-header hidden-folded">
																				<span class="text-xs">Your collection</span>
																			</li>
																			<li>
																				<a href="#">
																					<span class="nav-icon">
																						<svg
																							xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-list">
																							<line x1="8" y1="6" x2="21" y2="6"></line>
																							<line x1="8" y1="12" x2="21" y2="12"></line>
																							<line x1="8" y1="18" x2="21" y2="18"></line>
																							<line x1="3" y1="6" x2="3" y2="6"></line>
																							<line x1="3" y1="12" x2="3" y2="12"></line>
																							<line x1="3" y1="18" x2="3" y2="18"></line>
																						</svg>
																					</span>
																					<span class="nav-text">Tasks</span>
																				</a>
																			</li>
																			<li>
																				<a href="#">
																					<span class="nav-icon">
																						<svg
																							xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-calendar">
																							<rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
																							<line x1="16" y1="2" x2="16" y2="6"></line>
																							<line x1="8" y1="2" x2="8" y2="6"></line>
																							<line x1="3" y1="10" x2="21" y2="10"></line>
																						</svg>
																					</span>
																					<span class="nav-text">Calendar</span>
																				</a>
																			</li>
																		</ul>
																	</div>
																</div>
																<div class="py-2 mt-2 b-t no-shrink">
																	<ul class="nav no-border">
																		<li>
																			<a href="#">
																				<span class="nav-icon">
																					<svg
																						xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-power">
																						<path d="M18.36 6.64a9 9 0 1 1-12.73 0"></path>
																						<line x1="12" y1="2" x2="12" y2="12"></line>
																					</svg>
																				</span>
																				<span class="nav-text">Logout</span>
																			</a>
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
								</div>
    `,
    init: function() {
        document.getElementById('content').innerHTML = this.html;
    }
}