var appSortable = {
    html: `
    <div class="">
	<div class="page-hero page-container" id="page-hero">
		<div class="padding d-flex">
			<div class="page-title">
				<h2 class="text-md text-highlight">Sortable</h2>
				<small class="text-muted">Reorderable drag-and-drop lists.</small>
			</div>
			<div class="flex"></div>
			
		</div>
	</div>
	<div class="page-content page-container" id="page-content">
		<div class="padding">
			<div class="row">
				<div class="col-sm-6">
					<p>
						<strong>HTML5 Sortable</strong>
					</p>
					<div class="list list-row card" id="sortable" data-sortable-id="0" aria-dropeffect="move">
						<div class="list-item" data-id="12" data-item-sortable-id="0" draggable="true" role="option" aria-grabbed="false">
							<div>
								<a href="#">
									<span class="w-40 avatar gd-info">A</span>
								</a>
							</div>
							<div class="flex">
								<a href="#" class="item-author text-color">Alan Richards</a>
								<div class="item-except text-muted text-sm h-1x">Our client is an IT Healthcare start-up that provides process improvement solutions</div>
							</div>
							<div class="no-wrap">
								<div class="item-date text-muted text-sm d-none d-md-block">5 hours ago</div>
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
						<div class="list-item" data-id="14" data-item-sortable-id="0" draggable="true" role="option" aria-grabbed="false">
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
							<div class="no-wrap">
								<div class="item-date text-muted text-sm d-none d-md-block">1 day ago</div>
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
						<div class="list-item" data-id="20" data-item-sortable-id="0" draggable="true" role="option" aria-grabbed="false">
							<div>
								<a href="#">
									<span class="w-40 avatar gd-warning">G</span>
								</a>
							</div>
							<div class="flex">
								<a href="#" class="item-author text-color">Gloria Williams</a>
								<div class="item-except text-muted text-sm h-1x">Netflix hackathon creates eye tracking option for iOS app</div>
							</div>
							<div class="no-wrap">
								<div class="item-date text-muted text-sm d-none d-md-block">25/12 18</div>
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
						<div class="list-item" data-id="10" data-item-sortable-id="0" draggable="true" role="option" aria-grabbed="false">
							<div>
								<a href="#">
									<span class="w-40 avatar gd-danger">
										<img src="../assets/img/a10.jpg" alt=".">
										</span>
									</a>
								</div>
								<div class="flex">
									<a href="#" class="item-author text-color">Edward Clark</a>
									<div class="item-except text-muted text-sm h-1x">Leaders are running an AMA on Reddit. Ask your question and find out how the project is going</div>
								</div>
								<div class="no-wrap">
									<div class="item-date text-muted text-sm d-none d-md-block">1 day ago</div>
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
							<div class="list-item" data-id="6" data-item-sortable-id="0" draggable="true" role="option" aria-grabbed="false">
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
									<div class="no-wrap">
										<div class="item-date text-muted text-sm d-none d-md-block">1 Week ago</div>
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
								<div class="list-item" data-id="2" data-item-sortable-id="0" draggable="true" role="option" aria-grabbed="false">
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
										<div class="no-wrap">
											<div class="item-date text-muted text-sm d-none d-md-block">45 minutes ago</div>
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
									<div class="list-item" data-id="15" data-item-sortable-id="0" draggable="true" role="option" aria-grabbed="false">
										<div>
											<a href="#">
												<span class="w-40 avatar gd-success">J</span>
											</a>
										</div>
										<div class="flex">
											<a href="#" class="item-author text-color">Jean Armstrong</a>
											<div class="item-except text-muted text-sm h-1x">You don’t have to switch tools to review code, share input on projects, or open up the conversation to the rest of your team.</div>
										</div>
										<div class="no-wrap">
											<div class="item-date text-muted text-sm d-none d-md-block">03/12 18</div>
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
									<div class="list-item" data-id="17" data-item-sortable-id="0" draggable="true" role="option" aria-grabbed="false">
										<div>
											<a href="#">
												<span class="w-40 avatar gd-warning">H</span>
											</a>
										</div>
										<div class="flex">
											<a href="#" class="item-author text-color">Helen Valdez</a>
											<div class="item-except text-muted text-sm h-1x">AI will highlight &amp; emphasize key areas where students need help, allowing teachers to focus on facilitating the learning process</div>
										</div>
										<div class="no-wrap">
											<div class="item-date text-muted text-sm d-none d-md-block">13/12 18</div>
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
							<div class="col-sm-6">
								<p>
									<strong>Handles</strong>
								</p>
								<div class="list list-row card" id="sortable-handle" data-sortable-id="1" aria-dropeffect="move">
									<div class="list-item" data-id="15" data-item-sortable-id="1" role="option" aria-grabbed="false">
										<div>
											<div class="text-muted js-handle" draggable="true">
												<svg
													xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-menu">
													<line x1="3" y1="12" x2="21" y2="12"></line>
													<line x1="3" y1="6" x2="21" y2="6"></line>
													<line x1="3" y1="18" x2="21" y2="18"></line>
												</svg>
											</div>
										</div>
										<div>
											<a href="#">
												<span class="w-40 avatar gd-success">J</span>
											</a>
										</div>
										<div class="flex">
											<a href="#" class="item-author text-color">Jean Armstrong</a>
											<div class="item-except text-muted text-sm h-1x">You don’t have to switch tools to review code, share input on projects, or open up the conversation to the rest of your team.</div>
										</div>
										<div class="no-wrap">
											<div class="item-date text-muted text-sm d-none d-md-block">03/12 18</div>
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
									<div class="list-item" data-id="2" data-item-sortable-id="1" role="option" aria-grabbed="false">
										<div>
											<div class="text-muted js-handle" draggable="true">
												<svg
													xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-menu">
													<line x1="3" y1="12" x2="21" y2="12"></line>
													<line x1="3" y1="6" x2="21" y2="6"></line>
													<line x1="3" y1="18" x2="21" y2="18"></line>
												</svg>
											</div>
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
											<div class="no-wrap">
												<div class="item-date text-muted text-sm d-none d-md-block">45 minutes ago</div>
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
										<div class="list-item" data-id="13" data-item-sortable-id="1" role="option" aria-grabbed="false">
											<div>
												<div class="text-muted js-handle" draggable="true">
													<svg
														xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-menu">
														<line x1="3" y1="12" x2="21" y2="12"></line>
														<line x1="3" y1="6" x2="21" y2="6"></line>
														<line x1="3" y1="18" x2="21" y2="18"></line>
													</svg>
												</div>
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
											<div class="no-wrap">
												<div class="item-date text-muted text-sm d-none d-md-block">3 weeks ago</div>
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
										<div class="list-item" data-id="7" data-item-sortable-id="1" role="option" aria-grabbed="false">
											<div>
												<div class="text-muted js-handle" draggable="true">
													<svg
														xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-menu">
														<line x1="3" y1="12" x2="21" y2="12"></line>
														<line x1="3" y1="6" x2="21" y2="6"></line>
														<line x1="3" y1="18" x2="21" y2="18"></line>
													</svg>
												</div>
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
												<div class="no-wrap">
													<div class="item-date text-muted text-sm d-none d-md-block">21 July</div>
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
											<div class="list-item" data-id="3" data-item-sortable-id="1" role="option" aria-grabbed="false">
												<div>
													<div class="text-muted js-handle" draggable="true">
														<svg
															xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-menu">
															<line x1="3" y1="12" x2="21" y2="12"></line>
															<line x1="3" y1="6" x2="21" y2="6"></line>
															<line x1="3" y1="18" x2="21" y2="18"></line>
														</svg>
													</div>
												</div>
												<div>
													<a href="#">
														<span class="w-40 avatar gd-primary">
															<img src="../assets/img/a3.jpg" alt=".">
															</span>
														</a>
													</div>
													<div class="flex">
														<a href="#" class="item-author text-color">Jordan Stephens</a>
														<div class="item-except text-muted text-sm h-1x">Less than a month till we head over to the UK &amp; Ireland with @NextUI</div>
													</div>
													<div class="no-wrap">
														<div class="item-date text-muted text-sm d-none d-md-block">1 hour ago</div>
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
												<div class="list-item" data-id="4" data-item-sortable-id="1" role="option" aria-grabbed="false">
													<div>
														<div class="text-muted js-handle" draggable="true">
															<svg
																xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-menu">
																<line x1="3" y1="12" x2="21" y2="12"></line>
																<line x1="3" y1="6" x2="21" y2="6"></line>
																<line x1="3" y1="18" x2="21" y2="18"></line>
															</svg>
														</div>
													</div>
													<div>
														<a href="#">
															<span class="w-40 avatar gd-success">
																<img src="../assets/img/a4.jpg" alt=".">
																</span>
															</a>
														</div>
														<div class="flex">
															<a href="#" class="item-author text-color">Billy Johnston</a>
															<div class="item-except text-muted text-sm h-1x">New out-of-the box dashboards and enhanced security and compliance</div>
														</div>
														<div class="no-wrap">
															<div class="item-date text-muted text-sm d-none d-md-block">2 hours ago</div>
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
													<div class="list-item" data-id="12" data-item-sortable-id="1" role="option" aria-grabbed="false">
														<div>
															<div class="text-muted js-handle" draggable="true">
																<svg
																	xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-menu">
																	<line x1="3" y1="12" x2="21" y2="12"></line>
																	<line x1="3" y1="6" x2="21" y2="6"></line>
																	<line x1="3" y1="18" x2="21" y2="18"></line>
																</svg>
															</div>
														</div>
														<div>
															<a href="#">
																<span class="w-40 avatar gd-info">A</span>
															</a>
														</div>
														<div class="flex">
															<a href="#" class="item-author text-color">Alan Richards</a>
															<div class="item-except text-muted text-sm h-1x">Our client is an IT Healthcare start-up that provides process improvement solutions</div>
														</div>
														<div class="no-wrap">
															<div class="item-date text-muted text-sm d-none d-md-block">5 hours ago</div>
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
													<div class="list-item" data-id="17" data-item-sortable-id="1" role="option" aria-grabbed="false">
														<div>
															<div class="text-muted js-handle" draggable="true">
																<svg
																	xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-menu">
																	<line x1="3" y1="12" x2="21" y2="12"></line>
																	<line x1="3" y1="6" x2="21" y2="6"></line>
																	<line x1="3" y1="18" x2="21" y2="18"></line>
																</svg>
															</div>
														</div>
														<div>
															<a href="#">
																<span class="w-40 avatar gd-warning">A</span>
															</a>
														</div>
														<div class="flex">
															<a href="#" class="item-author text-color">Alan Mendez</a>
															<div class="item-except text-muted text-sm h-1x">Alibaba made a smart screen to help blind people shop and it costs next to nothing</div>
														</div>
														<div class="no-wrap">
															<div class="item-date text-muted text-sm d-none d-md-block">13/12 18</div>
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
										<p>
											<strong>Sortable table</strong>
										</p>
										<table class="table table-theme v-middle">
											<thead class="text-muted">
												<tr>
													<th>#</th>
													<th>User</th>
													<th>Information</th>
													<th>Num</th>
												</tr>
											</thead>
											<tbody id="sortable-table" data-sortable-id="2" aria-dropeffect="move">
												<tr class="v-middle" data-id="5" data-item-sortable-id="2" draggable="true" role="option" aria-grabbed="false">
													<td style="min-width:30px;text-align:center">
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
															<a href="#" class="item-author text-color">Sara George</a>
															<div class="item-except text-muted text-sm h-1x">Free Worksheet included. Read on through or save for later but face the fear of entering your Google Analytics</div>
														</td>
														<td>
															<span class="item-amount d-none d-sm-block text-sm">100</span>
														</td>
													</tr>
													<tr class="v-middle" data-id="6" data-item-sortable-id="2" draggable="true" role="option" aria-grabbed="false">
														<td style="min-width:30px;text-align:center">
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
																<a href="#" class="item-author text-color">Wayne Gray</a>
																<div class="item-except text-muted text-sm h-1x">This makes me believe there are good people in the world still</div>
															</td>
															<td>
																<span class="item-amount d-none d-sm-block text-sm">220</span>
															</td>
														</tr>
														<tr class="v-middle" data-id="20" data-item-sortable-id="2" draggable="true" role="option" aria-grabbed="false">
															<td style="min-width:30px;text-align:center">
																<small class="text-muted">20</small>
															</td>
															<td>
																<a href="#">
																	<span class="w-32 avatar gd-warning">G</span>
																</a>
															</td>
															<td class="flex">
																<a href="#" class="item-author text-color">Gloria Williams</a>
																<div class="item-except text-muted text-sm h-1x">Netflix hackathon creates eye tracking option for iOS app</div>
															</td>
															<td>
																<span class="item-amount d-none d-sm-block text-sm">120</span>
															</td>
														</tr>
														<tr class="v-middle" data-id="14" data-item-sortable-id="2" draggable="true" role="option" aria-grabbed="false">
															<td style="min-width:30px;text-align:center">
																<small class="text-muted">14</small>
															</td>
															<td>
																<a href="#">
																	<span class="w-32 avatar gd-warning">B</span>
																</a>
															</td>
															<td class="flex">
																<a href="#" class="item-author text-color">Benjamin Fields</a>
																<div class="item-except text-muted text-sm h-1x">Managing data in all software or applications becomes simplified when you make use of the best 
																	<a href="#">#DatabaseMan</a>
																</div>
															</td>
															<td>
																<span class="item-amount d-none d-sm-block text-sm">14</span>
															</td>
														</tr>
														<tr class="v-middle" data-id="12" data-item-sortable-id="2" draggable="true" role="option" aria-grabbed="false">
															<td style="min-width:30px;text-align:center">
																<small class="text-muted">12</small>
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
													</tbody>
												</table>
											</div>
										</div>
									</div>
    `,
    init: function() {
        document.getElementById('content').innerHTML = this.html;
    }
}