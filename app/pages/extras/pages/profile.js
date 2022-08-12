var appProfile = {
    html: `
    <div class="">
	<div class="page-hero page-container" id="page-hero">
		<div class="padding d-flex">
			<div class="page-title">
				<h2 class="text-md text-highlight">Profile</h2>
				<small class="text-muted">Your personal information</small>
			</div>
			<div class="flex"></div>
			
		</div>
	</div>
	<div class="page-content page-container" id="page-content">
		<div class="padding sr">
			<div class="card" data-sr-id="2" style="visibility: visible; transform: none; opacity: 1; transition: none 0s ease 0s;">
				<div class="card-header bg-dark bg-img p-0 no-border" data-stellar-background-ratio="0.1" style="background-image: url(&quot;../assets/img/b1.jpg&quot;); background-position: 50% -178.2px;">
					<div class="bg-dark-overlay r-2x no-r-b">
						<div class="d-md-flex">
							<div class="p-4">
								<div class="d-flex">
									<a href="#">
										<span class="avatar w-64">
											<img src="../assets/img/a6.jpg" alt=".">
												<i class="on"></i>
											</span>
										</a>
										<div class="mx-3">
											<h5 class="mt-2">Jacqueline Reid</h5>
											<div class="text-fade text-sm">
												<span class="m-r">Senior Industrial Designer</span>
												<small>
													<i class="fa fa-map-marker mr-2"></i>London, UK
												</small>
											</div>
										</div>
									</div>
								</div>
								<span class="flex"></span>
								<div class="align-items-center d-flex p-4">
									<div class="toolbar">
										<a href="#" class="btn btn-sm bg-dark-overlay btn-rounded text-white bg-success active" data-toggle-class="bg-success">
											<span class="d-inline">Follow</span>
											<span class="d-none">Following</span>
										</a>
										<a href="#" class="btn btn-sm btn-icon bg-dark-overlay btn-rounded">
											<svg
												xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-phone text-fade">
												<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
											</svg>
										</a>
										<a href="#" class="btn btn-sm btn-icon bg-dark-overlay btn-rounded">
											<svg
												xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-vertical text-fade">
												<circle cx="12" cy="12" r="1"></circle>
												<circle cx="12" cy="5" r="1"></circle>
												<circle cx="12" cy="19" r="1"></circle>
											</svg>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="p-3">
						<div class="d-flex">
							<ul class="nav nav-pills">
								<li class="nav-item">
									<a class="nav-link active" href="#" data-toggle="tab" data-target="#tab_1">Feed</a>
								</li>
								<li class="nav-item">
									<a class="nav-link" href="#" data-toggle="tab" data-target="#tab_2">Activity</a>
								</li>
								<li class="nav-item">
									<a class="nav-link" href="#" data-toggle="tab" data-target="#tab_3">Friends</a>
								</li>
								<li class="nav-item">
									<a class="nav-link" href="#" data-toggle="tab" data-target="#tab_4">Profile</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-sm-7 col-lg-8">
						<div class="tab-content">
							<div class="tab-pane fade show active" id="tab_1">
								<div class="card" id="feed-1" data-sr-id="3" style="visibility: visible; transform: none; opacity: 1; transition: none 0s ease 0s;">
									<div class="card-header d-flex">
										<a href="#">
											<img src="../assets/img/a3.jpg" class="avatar w-40">
											</a>
											<div class="mx-3">
												<a href="#">Jacqueline Reid</a>
												<div class="text-muted text-sm">6 days ago</div>
											</div>
										</div>
										<div class="card-body">
											<div class="card-text mb-3">
												<p>Nibh non tellus eu, at condimentum ultricies eu est ut ultrices morbi</p>
											</div>
										</div>
										<div class="p-3 b-t">
											<div class="toolbar toolbar-mx">
												<a href="#" class="text-muted">199 Likes </a>
												<a href="#feed-form-1" class="text-muted" data-toggle="collapse">20 Comments </a>
												<a href="#" class="text-muted">
													<svg
														xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-share-2">
														<circle cx="18" cy="5" r="3"></circle>
														<circle cx="6" cy="12" r="3"></circle>
														<circle cx="18" cy="19" r="3"></circle>
														<line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
														<line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
													</svg> Share
												</a>
											</div>
										</div>
										<div class="p-3 b-t collapse show" id="feed-form-1">
											<form>
												<textarea class="form-control" rows="3"></textarea>
												<div class="d-flex pt-2">
													<div class="toolbar my-1">
														<a href="#" class="text-muted mx-1">
															<svg
																xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-image">
																<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
																<circle cx="8.5" cy="8.5" r="1.5"></circle>
																<polyline points="21 15 16 10 5 21"></polyline>
															</svg>
														</a>
														<a href="#" class="text-muted mx-1">
															<svg
																xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-camera">
																<path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
																<circle cx="12" cy="13" r="4"></circle>
															</svg>
														</a>
														<a href="#" class="text-muted mx-1">
															<svg
																xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-map-pin">
																<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
																<circle cx="12" cy="10" r="3"></circle>
															</svg>
														</a>
														<a href="#" class="text-muted mx-1">
															<svg
																xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-paperclip">
																<path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path>
															</svg>
														</a>
													</div>
													<span class="flex"></span>
													<button class="btn btn-sm btn-primary">Post</button>
												</div>
											</form>
										</div>
									</div>
									<div class="card" id="feed-2" data-sr-id="4" style="visibility: visible; transform: none; opacity: 1; transition: none 0s ease 0s;">
										<div class="card-header d-flex">
											<a href="#">
												<img src="../assets/img/a6.jpg" class="avatar w-40">
												</a>
												<div class="mx-3">
													<a href="#">Jacqueline Reid</a>
													<div class="text-muted text-sm">4 days ago</div>
												</div>
											</div>
											<div class="card-body">
												<div class="card-text mb-3">
													<p>Dictum ipsum, vel tellus sed semper condimentum cras tellus augue mauris justo hac</p>
												</div>
												<div class="row row-xs">
													<div class="col-4">
														<div class="media media-4x3 r">
															<a class="media-content" style="background-image: url(../assets/img/b2.jpg)"></a>
														</div>
													</div>
													<div class="col-4">
														<div class="media media-4x3 r">
															<a class="media-content" style="background-image: url(../assets/img/b9.jpg)"></a>
														</div>
													</div>
													<div class="col-4">
														<div class="media media-4x3 r">
															<a class="media-content" style="background-image: url(../assets/img/b16.jpg)"></a>
														</div>
													</div>
												</div>
											</div>
											<div class="p-3 b-t">
												<div class="toolbar toolbar-mx">
													<a href="#" class="text-muted">209 Likes </a>
													<a href="#feed-form-2" class="text-muted" data-toggle="collapse">30 Comments </a>
													<a href="#" class="text-muted">
														<svg
															xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-share-2">
															<circle cx="18" cy="5" r="3"></circle>
															<circle cx="6" cy="12" r="3"></circle>
															<circle cx="18" cy="19" r="3"></circle>
															<line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
															<line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
														</svg> Share
													</a>
												</div>
											</div>
											<div class="p-3 b-t collapse" id="feed-form-2">
												<form>
													<textarea class="form-control" rows="3"></textarea>
													<div class="d-flex pt-2">
														<div class="toolbar my-1">
															<a href="#" class="text-muted mx-1">
																<svg
																	xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-image">
																	<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
																	<circle cx="8.5" cy="8.5" r="1.5"></circle>
																	<polyline points="21 15 16 10 5 21"></polyline>
																</svg>
															</a>
															<a href="#" class="text-muted mx-1">
																<svg
																	xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-camera">
																	<path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
																	<circle cx="12" cy="13" r="4"></circle>
																</svg>
															</a>
															<a href="#" class="text-muted mx-1">
																<svg
																	xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-map-pin">
																	<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
																	<circle cx="12" cy="10" r="3"></circle>
																</svg>
															</a>
															<a href="#" class="text-muted mx-1">
																<svg
																	xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-paperclip">
																	<path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path>
																</svg>
															</a>
														</div>
														<span class="flex"></span>
														<button class="btn btn-sm btn-primary">Post</button>
													</div>
												</form>
											</div>
										</div>
										<div class="card" id="feed-3" data-sr-id="5" style="visibility: visible; transform: none; opacity: 1; transition: none 0s ease 0s;">
											<div class="card-header d-flex">
												<a href="#">
													<img src="../assets/img/a8.jpg" class="avatar w-40">
													</a>
													<div class="mx-3">
														<a href="#">Jacqueline Reid</a>
														<div class="text-muted text-sm">11 days ago</div>
													</div>
												</div>
												<div class="card-body">
													<div class="card-text mb-3">
														<p>Quam in consectetur leo, enim vitae pretium, sit arcu, vel tincidunt</p>
													</div>
													<div class="row row-xs">
														<div class="col-6">
															<div class="media media-16x9 r">
																<a class="media-content media-16x9" style="background-image: url(../assets/img/b5.jpg)"></a>
															</div>
														</div>
														<div class="col-6">
															<div class="media media-16x9 r">
																<a class="media-content media-16x9" style="background-image: url(../assets/img/b6.jpg)"></a>
															</div>
														</div>
													</div>
												</div>
												<div class="card-body d-flex b-t">
													<a href="#">
														<img src="../assets/img/a6.jpg" class="avatar w-40">
														</a>
														<div class="mx-3 flex">
															<div class="mb-3">
																<a href="#">Jacqueline Reid</a>
																<div class="text-muted text-sm">8:00 pm</div>
															</div>
															<div class="card-text">
																<p>Turpis a pharetra id egestas tortor elementum ultrices pellentesque tristique vestibulum, praesent ultrices dictum varius aliquam fusce aliquet lectus et</p>
															</div>
														</div>
													</div>
													<div class="card-body d-flex b-t">
														<a href="#">
															<img src="../assets/img/a6.jpg" class="avatar w-40" alt=".">
															</a>
															<div class="mx-3 flex">
																<div class="mb-3">
																	<a href="#">Jacqueline Reid</a>
																	<div class="text-muted text-sm">1:20 pm</div>
																</div>
																<div class="row row-xs">
																	<div class="col-12">
																		<div class="media media-2x1 r">
																			<a class="media-content" style="background-image: url(../assets/img/b1.jpg)"></a>
																			<div class="media-action active">
																				<a href="#" class="btn btn-md btn-icon btn-white btn-rounded">
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
														</div>
														<div class="p-3 b-t">
															<div class="toolbar toolbar-mx">
																<a href="#" class="text-muted">300 Likes </a>
																<a href="#feed-form-3" class="text-muted" data-toggle="collapse">23 Comments </a>
																<a href="#" class="text-muted">
																	<svg
																		xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-share-2">
																		<circle cx="18" cy="5" r="3"></circle>
																		<circle cx="6" cy="12" r="3"></circle>
																		<circle cx="18" cy="19" r="3"></circle>
																		<line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
																		<line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
																	</svg> Share
																</a>
															</div>
														</div>
														<div class="p-3 b-t collapse" id="feed-form-3">
															<form>
																<textarea class="form-control" rows="3"></textarea>
																<div class="d-flex pt-2">
																	<div class="toolbar my-1">
																		<a href="#" class="text-muted mx-1">
																			<svg
																				xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-image">
																				<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
																				<circle cx="8.5" cy="8.5" r="1.5"></circle>
																				<polyline points="21 15 16 10 5 21"></polyline>
																			</svg>
																		</a>
																		<a href="#" class="text-muted mx-1">
																			<svg
																				xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-camera">
																				<path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
																				<circle cx="12" cy="13" r="4"></circle>
																			</svg>
																		</a>
																		<a href="#" class="text-muted mx-1">
																			<svg
																				xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-map-pin">
																				<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
																				<circle cx="12" cy="10" r="3"></circle>
																			</svg>
																		</a>
																		<a href="#" class="text-muted mx-1">
																			<svg
																				xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-paperclip">
																				<path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path>
																			</svg>
																		</a>
																	</div>
																	<span class="flex"></span>
																	<button class="btn btn-sm btn-primary">Post</button>
																</div>
															</form>
														</div>
													</div>
													<div class="card" id="feed-4" data-sr-id="6" style="visibility: visible; transform: none; opacity: 1; transition: none 0s ease 0s;">
														<div class="card-header d-flex">
															<a href="#">
																<img src="../assets/img/a3.jpg" class="avatar w-40">
																</a>
																<div class="mx-3">
																	<a href="#">Jacqueline Reid</a>
																	<div class="text-muted text-sm">6 days ago</div>
																</div>
															</div>
															<div class="card-body">
																<div class="card-text mb-3">
																	<p>Sagittis habitasse volutpat eros elit pellentesque</p>
																</div>
																<div class="row row-xs">
																	<div class="col-12">
																		<div class="media media-2x1 r">
																			<a class="media-content" style="background-image: url(../assets/img/b19.jpg)"></a>
																			<div class="media-action active">
																				<a href="#" class="btn btn-md btn-icon btn-white btn-rounded">
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
															<div class="p-3 b-t">
																<div class="toolbar toolbar-mx">
																	<a href="#" class="text-muted">197 Likes </a>
																	<a href="#feed-form-4" class="text-muted" data-toggle="collapse">20 Comments </a>
																	<a href="#" class="text-muted">
																		<svg
																			xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-share-2">
																			<circle cx="18" cy="5" r="3"></circle>
																			<circle cx="6" cy="12" r="3"></circle>
																			<circle cx="18" cy="19" r="3"></circle>
																			<line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
																			<line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
																		</svg> Share
																	</a>
																</div>
															</div>
															<div class="p-3 b-t collapse" id="feed-form-4">
																<form>
																	<textarea class="form-control" rows="3"></textarea>
																	<div class="d-flex pt-2">
																		<div class="toolbar my-1">
																			<a href="#" class="text-muted mx-1">
																				<svg
																					xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-image">
																					<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
																					<circle cx="8.5" cy="8.5" r="1.5"></circle>
																					<polyline points="21 15 16 10 5 21"></polyline>
																				</svg>
																			</a>
																			<a href="#" class="text-muted mx-1">
																				<svg
																					xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-camera">
																					<path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
																					<circle cx="12" cy="13" r="4"></circle>
																				</svg>
																			</a>
																			<a href="#" class="text-muted mx-1">
																				<svg
																					xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-map-pin">
																					<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
																					<circle cx="12" cy="10" r="3"></circle>
																				</svg>
																			</a>
																			<a href="#" class="text-muted mx-1">
																				<svg
																					xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-paperclip">
																					<path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path>
																				</svg>
																			</a>
																		</div>
																		<span class="flex"></span>
																		<button class="btn btn-sm btn-primary">Post</button>
																	</div>
																</form>
															</div>
														</div>
														<div class="card" id="feed-5" data-sr-id="7" style="visibility: visible; transform: none; opacity: 1; transition: none 0s ease 0s;">
															<div class="card-header d-flex">
																<a href="#">
																	<img src="../assets/img/a5.jpg" class="avatar w-40">
																	</a>
																	<div class="mx-3">
																		<a href="#">Jacqueline Reid</a>
																		<div class="text-muted text-sm">2 days ago</div>
																	</div>
																</div>
																<div class="card-body">
																	<div class="card-text mb-3">
																		<p>Morbi ultrices aenean sed condimentum facilisis metus, lectus fermentum montes, commodo morbi ac quam mattis lacus, senectus in augue semper</p>
																	</div>
																	<div class="row row-xs">
																		<div class="col-6 d-flex">
																			<div class="media flex r">
																				<a class="media-content" style="background-image: url(../assets/img/b2.jpg)"></a>
																			</div>
																		</div>
																		<div class="col-6">
																			<div class="media media-2x1 mb-2 r">
																				<a class="media-content" style="background-image: url(../assets/img/b8.jpg)"></a>
																			</div>
																			<div class="row row-xs">
																				<div class="col-6">
																					<div class="media r">
																						<a class="media-content" style="background-image: url(../assets/img/b13.jpg)"></a>
																					</div>
																				</div>
																				<div class="col-6">
																					<div class="media r">
																						<a class="media-content" style="background-image: url(../assets/img/b18.jpg)"></a>
																						<a class="media-overlay active bg-dark-overlay">
																							<small class="text-white mx-auto">4+</small>
																						</a>
																					</div>
																				</div>
																			</div>
																		</div>
																	</div>
																</div>
																<div class="p-3 b-t">
																	<div class="toolbar toolbar-mx">
																		<a href="#" class="text-muted">241 Likes </a>
																		<a href="#feed-form-5" class="text-muted" data-toggle="collapse">20 Comments </a>
																		<a href="#" class="text-muted">
																			<svg
																				xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-share-2">
																				<circle cx="18" cy="5" r="3"></circle>
																				<circle cx="6" cy="12" r="3"></circle>
																				<circle cx="18" cy="19" r="3"></circle>
																				<line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
																				<line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
																			</svg> Share
																		</a>
																	</div>
																</div>
																<div class="p-3 b-t collapse" id="feed-form-5">
																	<form>
																		<textarea class="form-control" rows="3"></textarea>
																		<div class="d-flex pt-2">
																			<div class="toolbar my-1">
																				<a href="#" class="text-muted mx-1">
																					<svg
																						xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-image">
																						<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
																						<circle cx="8.5" cy="8.5" r="1.5"></circle>
																						<polyline points="21 15 16 10 5 21"></polyline>
																					</svg>
																				</a>
																				<a href="#" class="text-muted mx-1">
																					<svg
																						xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-camera">
																						<path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
																						<circle cx="12" cy="13" r="4"></circle>
																					</svg>
																				</a>
																				<a href="#" class="text-muted mx-1">
																					<svg
																						xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-map-pin">
																						<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
																						<circle cx="12" cy="10" r="3"></circle>
																					</svg>
																				</a>
																				<a href="#" class="text-muted mx-1">
																					<svg
																						xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-paperclip">
																						<path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path>
																					</svg>
																				</a>
																			</div>
																			<span class="flex"></span>
																			<button class="btn btn-sm btn-primary">Post</button>
																		</div>
																	</form>
																</div>
															</div>
															<div class="card" id="feed-6" data-sr-id="8" style="visibility: visible; transform: none; opacity: 1; transition: none 0s ease 0s;">
																<div class="card-header d-flex">
																	<a href="#">
																		<img src="../assets/img/a5.jpg" class="avatar w-40">
																		</a>
																		<div class="mx-3">
																			<a href="#">Jacqueline Reid</a>
																			<div class="text-muted text-sm">4 days ago</div>
																		</div>
																	</div>
																	<div class="card-body">
																		<div class="card-text mb-3">
																			<p>Lectus viverra egestas eu aliquet eros, suspendisse arcu</p>
																		</div>
																		<div class="row row-xs">
																			<div class="col-6 mb-2">
																				<div class="media media-2x1 r">
																					<a class="media-content" style="background-image: url(../assets/img/b1.jpg)"></a>
																				</div>
																			</div>
																			<div class="col-6 mb-2">
																				<div class="media media-2x1 r">
																					<a class="media-content" style="background-image: url(../assets/img/b5.jpg)"></a>
																				</div>
																			</div>
																			<div class="col-4">
																				<div class="media media-4x3 r">
																					<a class="media-content" style="background-image: url(../assets/img/b16.jpg)"></a>
																				</div>
																			</div>
																			<div class="col-4">
																				<div class="media media-4x3 r">
																					<a class="media-content" style="background-image: url(../assets/img/b17.jpg)"></a>
																				</div>
																			</div>
																			<div class="col-4">
																				<div class="media media-4x3 r">
																					<a class="media-content" style="background-image: url(../assets/img/b20.jpg)"></a>
																				</div>
																			</div>
																		</div>
																	</div>
																	<div class="card-body d-flex b-t">
																		<a href="#">
																			<img src="../assets/img/a4.jpg" class="avatar w-40">
																			</a>
																			<div class="mx-3 flex">
																				<div class="mb-3">
																					<a href="#">Jacqueline Reid</a>
																					<div class="text-muted text-sm">5:50 pm</div>
																				</div>
																				<div class="card-text">
																					<p>Netus et nullam facilisis proin id mattis nec urna, urna turpis nam molestie</p>
																				</div>
																			</div>
																		</div>
																		<div class="card-body d-flex b-t">
																			<a href="#">
																				<img src="../assets/img/a5.jpg" class="avatar w-40" alt=".">
																				</a>
																				<div class="mx-3 flex">
																					<div class="mb-3">
																						<a href="#">Jacqueline Reid</a>
																						<div class="text-muted text-sm">4:00 pm</div>
																					</div>
																					<div class="row row-xs">
																						<div class="col-6">
																							<div class="media media-16x9 r">
																								<a class="media-content media-16x9" style="background-image: url(../assets/img/b1.jpg)"></a>
																							</div>
																						</div>
																						<div class="col-6">
																							<div class="media media-16x9 r">
																								<a class="media-content media-16x9" style="background-image: url(../assets/img/b7.jpg)"></a>
																							</div>
																						</div>
																					</div>
																				</div>
																			</div>
																			<div class="p-3 b-t">
																				<div class="toolbar toolbar-mx">
																					<a href="#" class="text-muted">292 Likes </a>
																					<a href="#feed-form-6" class="text-muted" data-toggle="collapse">30 Comments </a>
																					<a href="#" class="text-muted">
																						<svg
																							xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-share-2">
																							<circle cx="18" cy="5" r="3"></circle>
																							<circle cx="6" cy="12" r="3"></circle>
																							<circle cx="18" cy="19" r="3"></circle>
																							<line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
																							<line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
																						</svg> Share
																					</a>
																				</div>
																			</div>
																			<div class="p-3 b-t collapse" id="feed-form-6">
																				<form>
																					<textarea class="form-control" rows="3"></textarea>
																					<div class="d-flex pt-2">
																						<div class="toolbar my-1">
																							<a href="#" class="text-muted mx-1">
																								<svg
																									xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-image">
																									<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
																									<circle cx="8.5" cy="8.5" r="1.5"></circle>
																									<polyline points="21 15 16 10 5 21"></polyline>
																								</svg>
																							</a>
																							<a href="#" class="text-muted mx-1">
																								<svg
																									xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-camera">
																									<path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
																									<circle cx="12" cy="13" r="4"></circle>
																								</svg>
																							</a>
																							<a href="#" class="text-muted mx-1">
																								<svg
																									xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-map-pin">
																									<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
																									<circle cx="12" cy="10" r="3"></circle>
																								</svg>
																							</a>
																							<a href="#" class="text-muted mx-1">
																								<svg
																									xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-paperclip">
																									<path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path>
																								</svg>
																							</a>
																						</div>
																						<span class="flex"></span>
																						<button class="btn btn-sm btn-primary">Post</button>
																					</div>
																				</form>
																			</div>
																		</div>
																		<div class="card" id="feed-7" data-sr-id="9" style="visibility: visible; transform: none; opacity: 1; transition: none 0s ease 0s;">
																			<div class="card-header d-flex">
																				<a href="#">
																					<img src="../assets/img/a3.jpg" class="avatar w-40">
																					</a>
																					<div class="mx-3">
																						<a href="#">Jacqueline Reid</a>
																						<div class="text-muted text-sm">1 days ago</div>
																					</div>
																				</div>
																				<div class="card-body">
																					<div class="card-text mb-3">
																						<p>Sit at justo in a nunc velit tortor nulla</p>
																					</div>
																					<div class="row row-xs">
																						<div class="col-12 mb-2">
																							<div class="media media-3x1 r">
																								<a class="media-content" style="background-image: url(../assets/img/b2.jpg)"></a>
																							</div>
																						</div>
																						<div class="col-6">
																							<div class="media media-2x1 r">
																								<a class="media-content" style="background-image: url(../assets/img/b15.jpg)"></a>
																							</div>
																						</div>
																						<div class="col-6">
																							<div class="media media-2x1 r">
																								<a class="media-content" style="background-image: url(../assets/img/b18.jpg)"></a>
																							</div>
																						</div>
																					</div>
																				</div>
																				<div class="p-3 b-t">
																					<div class="toolbar toolbar-mx">
																						<a href="#" class="text-muted">256 Likes </a>
																						<a href="#feed-form-7" class="text-muted" data-toggle="collapse">25 Comments </a>
																						<a href="#" class="text-muted">
																							<svg
																								xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-share-2">
																								<circle cx="18" cy="5" r="3"></circle>
																								<circle cx="6" cy="12" r="3"></circle>
																								<circle cx="18" cy="19" r="3"></circle>
																								<line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
																								<line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
																							</svg> Share
																						</a>
																					</div>
																				</div>
																				<div class="p-3 b-t collapse" id="feed-form-7">
																					<form>
																						<textarea class="form-control" rows="3"></textarea>
																						<div class="d-flex pt-2">
																							<div class="toolbar my-1">
																								<a href="#" class="text-muted mx-1">
																									<svg
																										xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-image">
																										<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
																										<circle cx="8.5" cy="8.5" r="1.5"></circle>
																										<polyline points="21 15 16 10 5 21"></polyline>
																									</svg>
																								</a>
																								<a href="#" class="text-muted mx-1">
																									<svg
																										xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-camera">
																										<path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
																										<circle cx="12" cy="13" r="4"></circle>
																									</svg>
																								</a>
																								<a href="#" class="text-muted mx-1">
																									<svg
																										xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-map-pin">
																										<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
																										<circle cx="12" cy="10" r="3"></circle>
																									</svg>
																								</a>
																								<a href="#" class="text-muted mx-1">
																									<svg
																										xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-paperclip">
																										<path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path>
																									</svg>
																								</a>
																							</div>
																							<span class="flex"></span>
																							<button class="btn btn-sm btn-primary">Post</button>
																						</div>
																					</form>
																				</div>
																			</div>
																			<div class="card" id="feed-8" data-sr-id="10" style="visibility: visible; transform: none; opacity: 1; transition: none 0s ease 0s;">
																				<div class="card-header d-flex">
																					<a href="#">
																						<img src="../assets/img/a7.jpg" class="avatar w-40">
																						</a>
																						<div class="mx-3">
																							<a href="#">Jacqueline Reid</a>
																							<div class="text-muted text-sm">8 days ago</div>
																						</div>
																					</div>
																					<div class="card-body">
																						<div class="card-text mb-3">
																							<p>Pellentesque eget ut commodo in iaculis duis scelerisque velit vitae nunc, ornare</p>
																						</div>
																					</div>
																					<div class="p-3 b-t">
																						<div class="toolbar toolbar-mx">
																							<a href="#" class="text-muted">162 Likes </a>
																							<a href="#feed-form-8" class="text-muted" data-toggle="collapse">26 Comments </a>
																							<a href="#" class="text-muted">
																								<svg
																									xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-share-2">
																									<circle cx="18" cy="5" r="3"></circle>
																									<circle cx="6" cy="12" r="3"></circle>
																									<circle cx="18" cy="19" r="3"></circle>
																									<line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
																									<line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
																								</svg> Share
																							</a>
																						</div>
																					</div>
																					<div class="p-3 b-t collapse" id="feed-form-8">
																						<form>
																							<textarea class="form-control" rows="3"></textarea>
																							<div class="d-flex pt-2">
																								<div class="toolbar my-1">
																									<a href="#" class="text-muted mx-1">
																										<svg
																											xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-image">
																											<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
																											<circle cx="8.5" cy="8.5" r="1.5"></circle>
																											<polyline points="21 15 16 10 5 21"></polyline>
																										</svg>
																									</a>
																									<a href="#" class="text-muted mx-1">
																										<svg
																											xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-camera">
																											<path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
																											<circle cx="12" cy="13" r="4"></circle>
																										</svg>
																									</a>
																									<a href="#" class="text-muted mx-1">
																										<svg
																											xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-map-pin">
																											<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
																											<circle cx="12" cy="10" r="3"></circle>
																										</svg>
																									</a>
																									<a href="#" class="text-muted mx-1">
																										<svg
																											xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-paperclip">
																											<path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path>
																										</svg>
																									</a>
																								</div>
																								<span class="flex"></span>
																								<button class="btn btn-sm btn-primary">Post</button>
																							</div>
																						</form>
																					</div>
																				</div>
																			</div>
																			<div class="tab-pane fade" id="tab_2">
																				<div class="card p-4" data-sr-id="11" style="visibility: visible; transform: none; opacity: 1; transition: none 0s ease 0s;">
																					<div class="timeline animates animates-fadeInUp">
																						<div class="tl-item active">
																							<div class="tl-dot"></div>
																							<div class="tl-content">
																								<div class="">Do you know which are the popular ones? Leave a comment and get to know more from professional developers</div>
																								<div class="tl-date text-muted mt-1">1 day ago</div>
																							</div>
																						</div>
																						<div class="tl-item">
																							<div class="tl-dot"></div>
																							<div class="tl-content">
																								<div class="">
																									<a href="#">@Netflix</a> hackathon
																								</div>
																								<div class="tl-date text-muted mt-1">25/12 18</div>
																							</div>
																						</div>
																						<div class="tl-item">
																							<div class="tl-dot"></div>
																							<div class="tl-content">
																								<div class="">The biggest software developer conference</div>
																								<div class="tl-date text-muted mt-1">02/11 18</div>
																							</div>
																						</div>
																						<div class="tl-item">
																							<div class="tl-dot"></div>
																							<div class="tl-content">
																								<div class="">Learn how to use 
																									<a href="#">Google Analytics</a> to discover vital information about your readers.
																								</div>
																								<div class="tl-date text-muted mt-1">3 days ago</div>
																							</div>
																						</div>
																						<div class="tl-item">
																							<div class="tl-dot"></div>
																							<div class="tl-content">
																								<div class="">From design to dashboard, 
																									<a href="#">@Dash</a> builds custom hardware according to on-site requirements
																								</div>
																								<div class="tl-date text-muted mt-1">21 July</div>
																							</div>
																						</div>
																						<div class="tl-item">
																							<div class="tl-dot"></div>
																							<div class="tl-content">
																								<div class="">
																									<a href="#">@WordPress</a> How To Get Started With WordPress
																								</div>
																								<div class="tl-date text-muted mt-1">20 minutes ago</div>
																							</div>
																						</div>
																						<div class="tl-item">
																							<div class="tl-dot"></div>
																							<div class="tl-content">
																								<div class="">Added to 
																									<a href="#">@TUT</a> team
																								</div>
																								<div class="tl-date text-muted mt-1">2 days ago</div>
																							</div>
																						</div>
																						<div class="tl-item">
																							<div class="tl-dot"></div>
																							<div class="tl-content">
																								<div class="">Just saw this on the 
																									<a href="#">@eBay</a> dashboard, dude is an absolute unit.
																								</div>
																								<div class="tl-date text-muted mt-1">1 Week ago</div>
																							</div>
																						</div>
																						<div class="tl-item">
																							<div class="tl-dot"></div>
																							<div class="tl-content">
																								<div class="">What if AI Could Uber the Health Care Industry?</div>
																								<div class="tl-date text-muted mt-1">03/12 18</div>
																							</div>
																						</div>
																						<div class="tl-item">
																							<div class="tl-dot"></div>
																							<div class="tl-content">
																								<div class="">Fun project from this weekend. Both computer replicas are fully functional</div>
																								<div class="tl-date text-muted mt-1">03/12 18</div>
																							</div>
																						</div>
																					</div>
																				</div>
																			</div>
																			<div class="tab-pane fade" id="tab_3">
																				<div class="card p-4" data-sr-id="12" style="visibility: visible; transform: none; opacity: 1; transition: none 0s ease 0s;">
																					<div class="list list-row row">
																						<div class="list-item col-sm-6 no-border" data-id="11" data-sr-id="13" style="visibility: visible; transform: none; opacity: 1; transition: none 0s ease 0s;">
																							<div>
																								<a href="#">
																									<span class="w-40 avatar gd-info">
																										<span class="avatar-status on b-white avatar-right"></span> K
																									</span>
																								</a>
																							</div>
																							<div class="flex">
																								<a href="#" class="item-author text-color">Kenneth Pierce</a>
																								<a href="#" class="item-company text-muted h-1x">KissKiss</a>
																							</div>
																						</div>
																						<div class="list-item col-sm-6 no-border" data-id="8" data-sr-id="14" style="visibility: visible; transform: none; opacity: 1; transition: none 0s ease 0s;">
																							<div>
																								<a href="#">
																									<span class="w-40 avatar gd-success">
																										<span class="avatar-status on b-white avatar-right"></span>
																										<img src="../assets/img/a8.jpg" alt=".">
																										</span>
																									</a>
																								</div>
																								<div class="flex">
																									<a href="#" class="item-author text-color">Lawrence Cole</a>
																									<a href="#" class="item-company text-muted h-1x">Jet</a>
																								</div>
																							</div>
																							<div class="list-item col-sm-6 no-border" data-id="1" data-sr-id="15" style="visibility: visible; transform: none; opacity: 1; transition: none 0s ease 0s;">
																								<div>
																									<a href="#">
																										<span class="w-40 avatar gd-primary">
																											<span class="avatar-status on b-white avatar-right"></span>
																											<img src="../assets/img/a1.jpg" alt=".">
																											</span>
																										</a>
																									</div>
																									<div class="flex">
																										<a href="#" class="item-author text-color">Joyce McCoy</a>
																										<a href="#" class="item-company text-muted h-1x">Samsum Inc.</a>
																									</div>
																								</div>
																								<div class="list-item col-sm-6 no-border" data-id="14" data-sr-id="16" style="visibility: visible; transform: none; opacity: 1; transition: none 0s ease 0s;">
																									<div>
																										<a href="#">
																											<span class="w-40 avatar gd-warning">
																												<span class="avatar-status off b-white avatar-right"></span> B
																											</span>
																										</a>
																									</div>
																									<div class="flex">
																										<a href="#" class="item-author text-color">Benjamin Fields</a>
																										<a href="#" class="item-company text-muted h-1x">Luckman corp</a>
																									</div>
																								</div>
																								<div class="list-item col-sm-6 no-border" data-id="5" data-sr-id="17" style="visibility: visible; transform: none; opacity: 1; transition: none 0s ease 0s;">
																									<div>
																										<a href="#">
																											<span class="w-40 avatar gd-warning">
																												<span class="avatar-status on b-white avatar-right"></span>
																												<img src="../assets/img/a5.jpg" alt=".">
																												</span>
																											</a>
																										</div>
																										<div class="flex">
																											<a href="#" class="item-author text-color">Sara George</a>
																											<a href="#" class="item-company text-muted h-1x">Sun</a>
																										</div>
																									</div>
																									<div class="list-item col-sm-6 no-border" data-id="6" data-sr-id="18" style="visibility: visible; transform: none; opacity: 1; transition: none 0s ease 0s;">
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
																												<a href="#" class="item-company text-muted h-1x">Google</a>
																											</div>
																										</div>
																										<div class="list-item col-sm-6 no-border" data-id="3" data-sr-id="19" style="visibility: visible; transform: none; opacity: 1; transition: none 0s ease 0s;">
																											<div>
																												<a href="#">
																													<span class="w-40 avatar gd-primary">
																														<span class="avatar-status away b-white avatar-right"></span>
																														<img src="../assets/img/a3.jpg" alt=".">
																														</span>
																													</a>
																												</div>
																												<div class="flex">
																													<a href="#" class="item-author text-color">Jordan Stephens</a>
																													<a href="#" class="item-company text-muted h-1x">Wealth corp</a>
																												</div>
																											</div>
																											<div class="list-item col-sm-6 no-border" data-id="7" data-sr-id="20" style="visibility: visible; transform: none; opacity: 1; transition: none 0s ease 0s;">
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
																														<a href="#" class="item-company text-muted h-1x">Lostcorp</a>
																													</div>
																												</div>
																											</div>
																										</div>
																									</div>
																									<div class="tab-pane fade" id="tab_4">
																										<div class="card" data-sr-id="21" style="visibility: visible; transform: none; opacity: 1; transition: none 0s ease 0s;">
																											<div class="px-2">
																												<div class="py-3">
																													<ul class="nav flex-column">
																														<li class="nav-item">
																															<a class="nav-link">
																																<span>Califorlia</span>
																															</a>
																														</li>
																														<li class="nav-item">
																															<a class="nav-link">
																																<span>320-654-123</span>
																															</a>
																														</li>
																														<li class="nav-item">
																															<a class="nav-link">
																																<span>July 10</span>
																															</a>
																														</li>
																														<li class="nav-item">
																															<a class="nav-link">
																																<span>garret@gmail.com</span>
																															</a>
																														</li>
																													</ul>
																												</div>
																											</div>
																											<div class="px-4 py-4">
																												<div class="row mb-2">
																													<div class="col-6">
																														<small class="text-muted">Cell Phone</small>
																														<div class="my-2">1243 0303 0333</div>
																													</div>
																													<div class="col-6">
																														<small class="text-muted">Family Phone</small>
																														<div class="my-2">+32(0) 3003 234 543</div>
																													</div>
																												</div>
																												<div class="row mb-2">
																													<div class="col-6">
																														<small class="text-muted">Reporter</small>
																														<div class="my-2">Coch Jose</div>
																													</div>
																													<div class="col-6">
																														<small class="text-muted">Manager</small>
																														<div class="my-2">James Richo</div>
																													</div>
																												</div>
																												<div>
																													<small class="text-muted">Bio</small>
																													<div class="my-2">Sem tempus mauris imperdiet ac pellentesque magna tempus aenean aliquet egestas elementum ultrices massa sagittis magna bibendum laoreet quisque tincidunt arcu morbi vulputate in duis risus vulputate dolor pellentesque dui, ultricies ante habitasse eu, vel donec purus at nibh morbi scelerisque ac amet, posuere ridiculus sit tortor lacus mauris, eget pretium purus gravida ipsum tempus in morbi vitae quis sagittis</div>
																												</div>
																											</div>
																										</div>
																									</div>
																								</div>
																							</div>
																							<div class="col-sm-5 col-lg-4">
																								<div class="card sticky" style="z-index: 1; visibility: visible; transform: none; opacity: 1; transition: none 0s ease 0s;" data-sr-id="22">
																									<div class="card-header">
																										<strong>You know these people?</strong>
																									</div>
																									<div class="list list-row">
																										<div class="list-item" data-id="17" data-sr-id="23" style="visibility: visible; transform: none; opacity: 1; transition: none 0s ease 0s;">
																											<div>
																												<a href="#">
																													<span class="w-40 avatar gd-warning">
																														<span class="avatar-status on b-white avatar-right"></span> H
																													</span>
																												</a>
																											</div>
																											<div class="flex">
																												<a href="#" class="item-author text-color">Helen Valdez</a>
																												<a href="#" class="item-company text-muted h-1x">AI</a>
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
																										<div class="list-item" data-id="9" data-sr-id="24" style="visibility: visible; transform: none; opacity: 1; transition: none 0s ease 0s;">
																											<div>
																												<a href="#">
																													<span class="w-40 avatar gd-info">
																														<span class="avatar-status on b-white avatar-right"></span>
																														<img src="../assets/img/a9.jpg" alt=".">
																														</span>
																													</a>
																												</div>
																												<div class="flex">
																													<a href="#" class="item-author text-color">Steven Cruz</a>
																													<a href="#" class="item-company text-muted h-1x">HHH inc</a>
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
																											<div class="list-item" data-id="12" data-sr-id="25" style="visibility: visible; transform: none; opacity: 1; transition: none 0s ease 0s;">
																												<div>
																													<a href="#">
																														<span class="w-40 avatar gd-info">
																															<span class="avatar-status off b-white avatar-right"></span> A
																														</span>
																													</a>
																												</div>
																												<div class="flex">
																													<a href="#" class="item-author text-color">Alan Richards</a>
																													<a href="#" class="item-company text-muted h-1x">Drafty</a>
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
																											<div class="list-item" data-id="19" data-sr-id="26" style="visibility: visible; transform: none; opacity: 1; transition: none 0s ease 0s;">
																												<div>
																													<a href="#">
																														<span class="w-40 avatar gd-warning">
																															<span class="avatar-status on b-white avatar-right"></span> T
																														</span>
																													</a>
																												</div>
																												<div class="flex">
																													<a href="#" class="item-author text-color">Tiffany Baker</a>
																													<a href="#" class="item-company text-muted h-1x">AI</a>
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
																											<div class="list-item" data-id="3" data-sr-id="27" style="visibility: visible; transform: none; opacity: 1; transition: none 0s ease 0s;">
																												<div>
																													<a href="#">
																														<span class="w-40 avatar gd-primary">
																															<span class="avatar-status away b-white avatar-right"></span>
																															<img src="../assets/img/a3.jpg" alt=".">
																															</span>
																														</a>
																													</div>
																													<div class="flex">
																														<a href="#" class="item-author text-color">Jordan Stephens</a>
																														<a href="#" class="item-company text-muted h-1x">Wealth corp</a>
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
																												<div class="list-item" data-id="15" data-sr-id="28" style="visibility: visible; transform: none; opacity: 1; transition: none 0s ease 0s;">
																													<div>
																														<a href="#">
																															<span class="w-40 avatar gd-success">
																																<span class="avatar-status on b-white avatar-right"></span> J
																															</span>
																														</a>
																													</div>
																													<div class="flex">
																														<a href="#" class="item-author text-color">Jean Armstrong</a>
																														<a href="#" class="item-company text-muted h-1x">Google</a>
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
																												<div class="list-item" data-id="11" data-sr-id="29" style="visibility: visible; transform: none; opacity: 1; transition: none 0s ease 0s;">
																													<div>
																														<a href="#">
																															<span class="w-40 avatar gd-info">
																																<span class="avatar-status on b-white avatar-right"></span> K
																															</span>
																														</a>
																													</div>
																													<div class="flex">
																														<a href="#" class="item-author text-color">Kenneth Pierce</a>
																														<a href="#" class="item-company text-muted h-1x">KissKiss</a>
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
																												<div class="list-item" data-id="16" data-sr-id="30" style="visibility: visible; transform: none; opacity: 1; transition: none 0s ease 0s;">
																													<div>
																														<a href="#">
																															<span class="w-40 avatar gd-info">
																																<span class="avatar-status on b-white avatar-right"></span> F
																															</span>
																														</a>
																													</div>
																													<div class="flex">
																														<a href="#" class="item-author text-color">Frances Stewart</a>
																														<a href="#" class="item-company text-muted h-1x">Microsoft</a>
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
																					</div>
    `,
    init: function() {
        document.getElementById('content').innerHTML = this.html;
    }
}