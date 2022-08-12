var appMessages = {
    html: `
    <div class="d-flex flex fixed-content">
	<div class="aside aside-sm" id="content-aside">
		<div class="d-flex flex-column w-xl modal-dialog bg-body" id="chat-nav">
			<div class="navbar">
				<div class="input-group flex bg-light rounded">
					<input type="text" class="form-control no-bg no-border no-shadow search" placeholder="Search" required="">
						<span class="input-group-append">
							<button class="btn no-bg no-shadow" type="button">
								<svg
									xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search text-fade">
									<circle cx="11" cy="11" r="8"></circle>
									<line x1="21" y1="21" x2="16.65" y2="16.65"></line>
								</svg>
							</button>
						</span>
					</div>
				</div>
				<div class="scrollable hover">
					<div class="list list-row">
						<div class="list-item" data-id="10">
							<div>
								<span class="avatar-status on"></span>
							</div>
							<div>
								<a href="app.message.html" data-pjax-state="">
									<span class="w-40 avatar gd-danger">
										<img src="../assets/img/a10.jpg" alt=".">
										</span>
									</a>
								</div>
								<div class="flex">
									<a href="app.message.html" class="item-author text-color" data-pjax-state="">Edward Clark</a>
									<div class="item-except text-muted text-sm h-1x">Leaders are running an AMA on Reddit. Ask your question and find out how the project is going</div>
								</div>
								<div></div>
							</div>
							<div class="list-item" data-id="15">
								<div>
									<span class="avatar-status on"></span>
								</div>
								<div>
									<a href="app.message.html" data-pjax-state="">
										<span class="w-40 avatar gd-success">J</span>
									</a>
								</div>
								<div class="flex">
									<a href="app.message.html" class="item-author text-color" data-pjax-state="">Jean Armstrong</a>
									<div class="item-except text-muted text-sm h-1x">You don’t have to switch tools to review code, share input on projects, or open up the conversation to the rest of your team.</div>
								</div>
								<div></div>
							</div>
							<div class="list-item" data-id="9">
								<div>
									<span class="avatar-status on"></span>
								</div>
								<div>
									<a href="app.message.html" data-pjax-state="">
										<span class="w-40 avatar gd-info">
											<img src="../assets/img/a9.jpg" alt=".">
											</span>
										</a>
									</div>
									<div class="flex">
										<a href="app.message.html" class="item-author text-color" data-pjax-state="">Steven Cruz</a>
										<div class="item-except text-muted text-sm h-1x">Build a progressive web app using jQuery</div>
									</div>
									<div>
										<span class="item-amount d-none d-sm-block badge badge-pill gd-warning">5</span>
									</div>
								</div>
								<div class="list-item" data-id="6">
									<div>
										<span class="avatar-status on"></span>
									</div>
									<div>
										<a href="app.message.html" data-pjax-state="">
											<span class="w-40 avatar gd-danger">
												<img src="../assets/img/a6.jpg" alt=".">
												</span>
											</a>
										</div>
										<div class="flex">
											<a href="app.message.html" class="item-author text-color" data-pjax-state="">Wayne Gray</a>
											<div class="item-except text-muted text-sm h-1x">This makes me believe there are good people in the world still</div>
										</div>
										<div>
											<span class="item-amount d-none d-sm-block badge badge-pill gd-warning">2</span>
										</div>
									</div>
									<div class="list-item" data-id="17">
										<div>
											<span class="avatar-status on"></span>
										</div>
										<div>
											<a href="app.message.html" data-pjax-state="">
												<span class="w-40 avatar gd-warning">H</span>
											</a>
										</div>
										<div class="flex">
											<a href="app.message.html" class="item-author text-color" data-pjax-state="">Helen Valdez</a>
											<div class="item-except text-muted text-sm h-1x">AI will highlight &amp; emphasize key areas where students need help, allowing teachers to focus on facilitating the learning process</div>
										</div>
										<div>
											<span class="item-amount d-none d-sm-block badge badge-pill gd-warning">20</span>
										</div>
									</div>
									<div class="list-item" data-id="20">
										<div>
											<span class="avatar-status on"></span>
										</div>
										<div>
											<a href="app.message.html" data-pjax-state="">
												<span class="w-40 avatar gd-warning">G</span>
											</a>
										</div>
										<div class="flex">
											<a href="app.message.html" class="item-author text-color" data-pjax-state="">Gloria Williams</a>
											<div class="item-except text-muted text-sm h-1x">Netflix hackathon creates eye tracking option for iOS app</div>
										</div>
										<div>
											<span class="item-amount d-none d-sm-block badge badge-pill gd-warning">50</span>
										</div>
									</div>
									<div class="list-item" data-id="1">
										<div>
											<span class="avatar-status on"></span>
										</div>
										<div>
											<a href="app.message.html" data-pjax-state="">
												<span class="w-40 avatar gd-primary">
													<img src="../assets/img/a1.jpg" alt=".">
													</span>
												</a>
											</div>
											<div class="flex">
												<a href="app.message.html" class="item-author text-color" data-pjax-state="">Joyce McCoy</a>
												<div class="item-except text-muted text-sm h-1x">In WordPress Tutorial, we’ll streamline the process for you by pointing out the all key features of the WordPress</div>
											</div>
											<div></div>
										</div>
										<div class="list-item" data-id="13">
											<div>
												<span class="avatar-status off"></span>
											</div>
											<div>
												<a href="app.message.html" data-pjax-state="">
													<span class="w-40 avatar gd-primary">L</span>
												</a>
											</div>
											<div class="flex">
												<a href="app.message.html" class="item-author text-color" data-pjax-state="">Lisa Chapman</a>
												<div class="item-except text-muted text-sm h-1x">Email message from a happy user: 'Neat tool.. seems to be the easiest of' 
													<a href="#" data-pjax-state="">#big data</a>
												</div>
											</div>
											<div></div>
										</div>
									</div>
									<div class="no-result hide">
										<div class="p-4 text-center">No Results</div>
									</div>
								</div>
							</div>
						</div>
						<div class="d-flex flex pr-md-3" id="content-body">
							<div class="d-flex flex-column flex card m-0 mb-md-3" id="chat-list">
								<div class="navbar flex-nowrap b-b">
									<button data-toggle="modal" data-target="#content-aside" data-modal="" class="d-md-none btn btn-sm btn-icon no-bg">
										<span>
											<svg
												xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-menu">
												<line x1="3" y1="12" x2="21" y2="12"></line>
												<line x1="3" y1="6" x2="21" y2="6"></line>
												<line x1="3" y1="18" x2="21" y2="18"></line>
											</svg>
										</span>
									</button>
									<span class="text-ellipsis flex mx-1">
										<span class="text-md text-highlight mx-2">Team messages</span>
									</span>
									<span class="flex"></span>
									<div>
										<div class="d-flex flex-wrap align-items-center avatar-group">
											<a href="app.message.html" class="w-24 avatar circle bg-danger-lt" data-pjax-state="">
												<img src="../assets/img/a6.jpg" alt=".">
												</a>
												<a href="app.message.html" class="w-24 avatar circle bg-primary-lt" data-pjax-state="">
													<img src="../assets/img/a7.jpg" alt=".">
													</a>
													<a href="app.message.html" class="w-24 avatar circle bg-primary-lt" data-pjax-state="">
														<img src="../assets/img/a2.jpg" alt=".">
														</a>
														<a href="app.message.html" class="w-24 avatar circle bg-primary-lt" data-pjax-state="">L </a>
														<a class="w-24 avatar circle bg-primary" data-pjax-state="">
															<svg
																xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus">
																<line x1="12" y1="5" x2="12" y2="19"></line>
																<line x1="5" y1="12" x2="19" y2="12"></line>
															</svg>
														</a>
													</div>
												</div>
											</div>
											<div class="scrollable hover">
												<div class="list">
													<div class="p-3">
														<div class="chat-list">
															<div class="chat-item" data-class="null" data-sr-id="2" style="visibility: visible; transform: none; opacity: 1; transition: transform 0.5s cubic-bezier(0.6, 0.2, 0.1, 1) 0s, opacity 0.5s cubic-bezier(0.6, 0.2, 0.1, 1) 0s;">
																<a href="#" class="avatar w-40" data-pjax-state="">
																	<img src="../assets/img/a2.jpg" alt=".">
																	</a>
																	<div class="chat-body">
																		<div class="chat-content rounded msg bg-body">New photos coming...</div>
																		<div class="w-md my-3">
																			<div class="row row-xs">
																				<div class="col-4">
																					<div class="media media-4x3 r box-shadows">
																						<a class="media-content" style="background-image: url(../assets/img/b1.jpg)" data-pjax-state=""></a>
																					</div>
																				</div>
																				<div class="col-4">
																					<div class="media media-4x3 r box-shadows">
																						<a class="media-content" style="background-image: url(../assets/img/b6.jpg)" data-pjax-state=""></a>
																					</div>
																				</div>
																				<div class="col-4">
																					<div class="media media-4x3 r box-shadows">
																						<a class="media-content" style="background-image: url(../assets/img/b12.jpg)" data-pjax-state=""></a>
																					</div>
																				</div>
																			</div>
																		</div>
																		<div class="chat-date date">2 days ago</div>
																	</div>
																</div>
																<div class="chat-item" data-class="alt" data-sr-id="3" style="visibility: visible; transform: none; opacity: 1; transition: transform 0.5s cubic-bezier(0.6, 0.2, 0.1, 1) 0s, opacity 0.5s cubic-bezier(0.6, 0.2, 0.1, 1) 0s;">
																	<a href="#" class="avatar w-40" data-pjax-state="">
																		<img class="image" src="../assets/img/a0.jpg" alt=".">
																		</a>
																		<div class="chat-body">
																			<div class="chat-content rounded msg bg-body">Hi, Jacqueline Reid...</div>
																			<div class="w-md my-3">
																				<div class="row row-xs">
																					<div class="col-12">
																						<div class="media media-2x1 r box-shadows">
																							<a class="media-content" style="background-image: url(../assets/img/b8.jpg)" data-pjax-state=""></a>
																							<div class="media-action active">
																								<a href="#" class="btn btn-md btn-icon btn-white btn-rounded" data-pjax-state="">
																									<svg
																										xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-play">
																										<polygon points="5 3 19 12 5 21 5 3"></polygon>
																									</svg>
																								</a>
																							</div>
																						</div>
																					</div>
																				</div>
																			</div>
																			<div class="chat-date date">8 hrs ago</div>
																		</div>
																	</div>
																	<div class="chat-item" data-class="null" data-sr-id="4" style="visibility: visible; transform: none; opacity: 1; transition: transform 0.5s cubic-bezier(0.6, 0.2, 0.1, 1) 0s, opacity 0.5s cubic-bezier(0.6, 0.2, 0.1, 1) 0s;">
																		<a href="#" class="avatar w-40" data-pjax-state="">
																			<img class="image" src="../assets/img/a2.jpg" alt=".">
																			</a>
																			<div class="chat-body">
																				<div class="chat-content rounded msg block bg-primary--lt">
																					<a href="#" data-pjax-state="">document.pdf 
																						<span class="text-muted">2.5mb</span>
																						<svg
																							xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-download text-muted">
																							<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
																							<polyline points="7 10 12 15 17 10"></polyline>
																							<line x1="12" y1="15" x2="12" y2="3"></line>
																						</svg>
																					</a>
																				</div>
																				<div class="chat-date date">2 hrs ago</div>
																			</div>
																		</div>
																		<div class="chat-item" data-class="null" data-sr-id="5" style="visibility: visible; transform: none; opacity: 1; transition: transform 0.5s cubic-bezier(0.6, 0.2, 0.1, 1) 0s, opacity 0.5s cubic-bezier(0.6, 0.2, 0.1, 1) 0s;">
																			<a href="#" class="avatar w-40" data-pjax-state="">
																				<img class="image" src="../assets/img/a2.jpg" alt=".">
																				</a>
																				<div class="chat-body">
																					<div class="chat-content rounded msg bg-body">Typing...</div>
																					<div class="chat-date date">Just now</div>
																				</div>
																			</div>
																		</div>
																		<div class="hide">
																			<div class="chat-item" id="chat-item" data-class="" data-sr-id="6" style="visibility: visible; transform: none; opacity: 1; transition: transform 0.5s cubic-bezier(0.6, 0.2, 0.1, 1) 0s, opacity 0.5s cubic-bezier(0.6, 0.2, 0.1, 1) 0s;">
																				<a href="#" class="avatar w-40" data-pjax-state="">
																					<img class="image" src="" alt=".">
																					</a>
																					<div class="chat-body">
																						<div class="chat-content rounded msg block bg-body"></div>
																						<div class="chat-date date"></div>
																					</div>
																				</div>
																			</div>
																		</div>
																	</div>
																</div>
																<div class="mt-auto b-t" id="chat-form">
																	<div class="p-2">
																		<div class="px-3">
																			<div class="toolbar my-1">
																				<a href="#" class="text-muted mx-1" data-pjax-state="">
																					<svg
																						xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-image">
																						<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
																						<circle cx="8.5" cy="8.5" r="1.5"></circle>
																						<polyline points="21 15 16 10 5 21"></polyline>
																					</svg>
																				</a>
																				<a href="#" class="text-muted mx-1" data-pjax-state="">
																					<svg
																						xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-camera">
																						<path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
																						<circle cx="12" cy="13" r="4"></circle>
																					</svg>
																				</a>
																				<a href="#" class="text-muted mx-1" data-pjax-state="">
																					<svg
																						xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-map-pin">
																						<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
																						<circle cx="12" cy="10" r="3"></circle>
																					</svg>
																				</a>
																				<a href="#" class="text-muted mx-1" data-pjax-state="">
																					<svg
																						xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-paperclip">
																						<path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path>
																					</svg>
																				</a>
																			</div>
																		</div>
																		<div class="input-group">
																			<input type="text" class="form-control p-3 no-shadow no-border" placeholder="Say something" id="newField">
																				<button class="btn btn-icon btn-rounded gd-success" type="button" id="newBtn">
																					<svg
																						xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-up">
																						<line x1="12" y1="19" x2="12" y2="5"></line>
																						<polyline points="5 12 12 5 19 12"></polyline>
																					</svg>
																				</button>
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