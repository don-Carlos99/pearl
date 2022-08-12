var appModal = {
    html: `
    <div class="">
	<div class="page-hero page-container" id="page-hero">
		<div class="padding d-flex">
			<div class="page-title">
				<h2 class="text-md text-highlight">Modal</h2>
				<small class="text-muted">Add dialogs to your application</small>
			</div>
			<div class="flex"></div>
			
		</div>
	</div>
	<div class="page-content page-container" id="page-content">
		<div class="padding">
			<div class="row">
				<div class="col-sm-3">
					<p>Modal size</p>
					<div class="mb-3">
						<button class="btn btn-white btn-block mb-2" data-toggle="modal" data-target="#modal">Normal</button>
						<button class="btn btn-white btn-block mb-2" data-toggle="modal" data-target="#modal-sm">Small size</button>
						<button class="btn btn-white btn-block mb-2" data-toggle="modal" data-target="#modal-lg">Large size</button>
					</div>
					<p>Backdrop</p>
					<div class="mb-3">
						<button class="btn btn-white btn-block mb-2" data-toggle="modal" data-target="#modal-backdrop">Without</button>
						<button class="btn btn-white btn-block mb-2" data-toggle="modal" data-target="#modal-backdrop-white">white style</button>
						<button class="btn btn-white btn-block mb-2" data-toggle="modal" data-target="#modal-backdrop-dark">Dark style</button>
					</div>
					<p>Animation</p>
					<div class="mb-3 btn-groups">
						<button class="btn btn-white btn-block mb-2" data-toggle="modal" data-target="#modal-animate" data-toggle-class="fade-right" data-toggle-class-target=".animate">Right</button>
						<button class="btn btn-white btn-block mb-2" data-toggle="modal" data-target="#modal-animate" data-toggle-class="fade-left" data-toggle-class-target=".animate">Left</button>
						<button class="btn btn-white btn-block mb-2" data-toggle="modal" data-target="#modal-animate" data-toggle-class="fade-up" data-toggle-class-target=".animate">Up</button>
						<button class="btn btn-white btn-block mb-2" data-toggle="modal" data-target="#modal-animate" data-toggle-class="fade-down" data-toggle-class-target=".animate">Down</button>
					</div>
					<p>Aside</p>
					<div class="mb-3">
						<button class="btn btn-white btn-block mb-2" data-toggle="modal" data-target="#modal-right" data-toggle-class="modal-open-aside">Right</button>
						<button class="btn btn-white btn-block mb-2" data-toggle="modal" data-target="#modal-left" data-toggle-class="modal-open-aside">Left</button>
						<button class="btn btn-white btn-block mb-2" data-toggle="modal" data-target="#modal-top">Top</button>
						<button class="btn btn-white btn-block mb-2" data-toggle="modal" data-target="#modal-bottom">Bottom</button>
					</div>
				</div>
				<div class="col-sm-9">
					<p>Modal style</p>
					<div class="row">
						<div class="col-md-6">
							<div class="modal-content box-shadow mb-4">
								<div class="modal-header">
									<h5 class="modal-title">Modal title</h5>
									<button class="close" data-dismiss="modal">×</button>
								</div>
								<div class="modal-body">
									<p>Modal content</p>
								</div>
								<div class="modal-footer">
									<button class="btn btn-light">Cancel</button>
									<button class="btn btn-primary">OK</button>
								</div>
							</div>
						</div>
						<div class="col-md-6">
							<div class="modal-content box-shadow mb-4 bg-dark">
								<div class="modal-header b-b">
									<h5 class="modal-title">Modal title</h5>
								</div>
								<div class="modal-body">
									<p>Modal content</p>
								</div>
								<div class="modal-footer b-t">
									<button class="btn btn-light">Cancel</button>
									<button class="btn btn-primary">OK</button>
								</div>
							</div>
						</div>
						<div class="col-md-6">
							<div class="modal-content box-shadow mb-4">
								<div class="modal-header">
									<h5 class="modal-title">Form</h5>
									<button class="close" data-dismiss="modal">×</button>
								</div>
								<div class="modal-body p-4">
									<form class="" role="form" action="dashboard.html">
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
										</div>
									</div>
									<div class="col-md-6">
										<div class="modal-content box-shadow mb-4">
											<div class="modal-header">
												<h5 class="modal-title">List</h5>
												<button class="close" data-dismiss="modal">×</button>
											</div>
											<div class="modal-body p-4">
												<div class="list list-row">
													<div class="list-item" data-id="3">
														<div>
															<label class="ui-check m-0">
																<input type="checkbox" name="id" value="3">
																	<i></i>
																</label>
															</div>
															<div>
																<a href="#">
																	<span class="w-24 avatar gd-primary">
																		<img src="../assets/img/a3.jpg" alt=".">
																		</span>
																	</a>
																</div>
																<div class="flex">
																	<a href="#" class="item-author text-color">Jordan Stephens</a>
																</div>
															</div>
															<div class="list-item" data-id="15">
																<div>
																	<label class="ui-check m-0">
																		<input type="checkbox" name="id" value="15">
																			<i></i>
																		</label>
																	</div>
																	<div>
																		<a href="#">
																			<span class="w-24 avatar gd-success">J</span>
																		</a>
																	</div>
																	<div class="flex">
																		<a href="#" class="item-author text-color">Jean Armstrong</a>
																	</div>
																</div>
																<div class="list-item" data-id="10">
																	<div>
																		<label class="ui-check m-0">
																			<input type="checkbox" name="id" value="10">
																				<i></i>
																			</label>
																		</div>
																		<div>
																			<a href="#">
																				<span class="w-24 avatar gd-danger">
																					<img src="../assets/img/a10.jpg" alt=".">
																					</span>
																				</a>
																			</div>
																			<div class="flex">
																				<a href="#" class="item-author text-color">Edward Clark</a>
																			</div>
																		</div>
																		<div class="list-item" data-id="12">
																			<div>
																				<label class="ui-check m-0">
																					<input type="checkbox" name="id" value="12">
																						<i></i>
																					</label>
																				</div>
																				<div>
																					<a href="#">
																						<span class="w-24 avatar gd-info">A</span>
																					</a>
																				</div>
																				<div class="flex">
																					<a href="#" class="item-author text-color">Alan Richards</a>
																				</div>
																			</div>
																			<div class="list-item" data-id="11">
																				<div>
																					<label class="ui-check m-0">
																						<input type="checkbox" name="id" value="11">
																							<i></i>
																						</label>
																					</div>
																					<div>
																						<a href="#">
																							<span class="w-24 avatar gd-info">K</span>
																						</a>
																					</div>
																					<div class="flex">
																						<a href="#" class="item-author text-color">Kenneth Pierce</a>
																					</div>
																				</div>
																			</div>
																		</div>
																		<div class="modal-footer">
																			<button class="btn btn-light">Select All</button>
																			<button class="btn btn-primary">Save</button>
																		</div>
																	</div>
																</div>
																<div class="col-12">
																	<div class="modal-content box-shadow mb-4">
																		<div class="modal-header">
																			<h5 class="modal-title">Event</h5>
																			<button class="close" data-dismiss="modal">×</button>
																		</div>
																		<div class="modal-body p-4">
																			<form>
																				<div class="form-group row">
																					<label class="col-sm-3 col-form-label">Title</label>
																					<div class="col-sm-9">
																						<input id="event-title" type="text" class="form-control" placeholder="Title">
																						</div>
																					</div>
																					<div class="form-group row">
																						<label class="col-sm-3 col-form-label">Event type</label>
																						<div class="col-sm-9">
																							<div class="mt-2" id="event-type">
																								<div class="form-check form-check-inline">
																									<label class="form-check-label">
																										<input class="form-check-input" type="radio" name="type" value="Appointment"> Appointment
																										</label>
																									</div>
																									<div class="form-check form-check-inline">
																										<label class="form-check-label">
																											<input class="form-check-input" type="radio" name="type" value="Meeting"> Meeting
																											</label>
																										</div>
																									</div>
																								</div>
																							</div>
																							<div class="form-group row row-sm">
																								<label class="col-sm-3 col-form-label">Start</label>
																								<div class="col-sm-5">
																									<input id="event-start-date" type="date" class="form-control" placeholder="Date">
																									</div>
																									<div class="col-sm-4">
																										<input id="event-start-time" type="time" class="form-control" placeholder="Time">
																										</div>
																									</div>
																									<div class="form-group row row-sm">
																										<label class="col-sm-3 col-form-label">End</label>
																										<div class="col-sm-5">
																											<input id="event-end-date" type="date" class="form-control" placeholder="Date">
																											</div>
																											<div class="col-sm-4">
																												<input id="event-end-time" type="time" class="form-control" placeholder="Time">
																												</div>
																											</div>
																											<div class="form-group row">
																												<label class="col-sm-3 col-form-label">Participate</label>
																												<div class="col-sm-9">
																													<div class="d-flex">
																														<div id="event-participant" class="avatar-group">
																															<a href="#" class="avatar w-32 b-a b-white">
																																<img src="../assets/img/a0.jpg">
																																</a>
																																<a href="#" class="avatar w-32 b-a b-white">
																																	<img src="../assets/img/a2.jpg">
																																	</a>
																																	<a href="#" class="avatar w-32 b-a b-white">
																																		<img src="../assets/img/a3.jpg">
																																		</a>
																																		<a href="#" class="avatar w-32 b-a b-white">
																																			<img src="../assets/img/a4.jpg">
																																			</a>
																																			<a href="#" class="avatar w-32 b-a b-white">
																																				<img src="../assets/img/a5.jpg">
																																				</a>
																																			</div>
																																			<a href="#" class="btn btn-icon btn-rounded btn-primary ml-1">
																																				<svg
																																					xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus">
																																					<line x1="12" y1="5" x2="12" y2="19"></line>
																																					<line x1="5" y1="12" x2="19" y2="12"></line>
																																				</svg>
																																			</a>
																																		</div>
																																	</div>
																																</div>
																																<div class="form-group row">
																																	<label class="col-sm-3 col-form-label">Description</label>
																																	<div class="col-sm-9">
																																		<textarea id="event-desc" class="form-control" rows="6"></textarea>
																																	</div>
																																</div>
																																<div class="form-group row">
																																	<label class="col-sm-3"></label>
																																	<div class="col-sm-9">
																																		<button type="button" id="btn-save" class="btn gd-primary text-white btn-rounded">Save</button>
																																	</div>
																																</div>
																															</form>
																														</div>
																													</div>
																												</div>
																											</div>
																										</div>
																									</div>
																									<div id="modal" class="modal fade" data-backdrop="true">
																										<div class="modal-dialog">
																											<div class="modal-content">
																												<div class="modal-header">
																													<div class="modal-title text-md">Modal title</div>
																													<button class="close" data-dismiss="modal">×</button>
																												</div>
																												<div class="modal-body">
																													<div class="p-4 text-center">
																														<p>Woohoo, you're reading this text in a modal!</p>
																													</div>
																												</div>
																												<div class="modal-footer">
																													<button type="button" class="btn btn-light" data-dismiss="modal">Close</button>
																													<button type="button" class="btn btn-primary" data-dismiss="modal">Save Changes</button>
																												</div>
																											</div>
																										</div>
																									</div>
																									<div id="modal-sm" class="modal fade" data-backdrop="true">
																										<div class="modal-dialog modal-sm">
																											<div class="modal-content">
																												<div class="modal-header">
																													<div class="modal-title text-md">Modal title</div>
																													<button class="close" data-dismiss="modal">×</button>
																												</div>
																												<div class="modal-body">
																													<div class="p-4 text-center">
																														<p>Woohoo, you're reading this text in a modal!</p>
																													</div>
																												</div>
																												<div class="modal-footer">
																													<button type="button" class="btn btn-light" data-dismiss="modal">Close</button>
																													<button type="button" class="btn btn-primary" data-dismiss="modal">Save Changes</button>
																												</div>
																											</div>
																										</div>
																									</div>
																									<div id="modal-lg" class="modal fade" data-backdrop="true">
																										<div class="modal-dialog modal-lg">
																											<div class="modal-content">
																												<div class="modal-header">
																													<div class="modal-title text-md">Modal title</div>
																													<button class="close" data-dismiss="modal">×</button>
																												</div>
																												<div class="modal-body">
																													<div class="p-4 text-center">
																														<p>Woohoo, you're reading this text in a modal!</p>
																													</div>
																												</div>
																												<div class="modal-footer">
																													<button type="button" class="btn btn-light" data-dismiss="modal">Close</button>
																													<button type="button" class="btn btn-primary" data-dismiss="modal">Save Changes</button>
																												</div>
																											</div>
																										</div>
																									</div>
																									<div id="modal-backdrop" class="modal fade" data-backdrop="false">
																										<div class="modal-dialog">
																											<div class="modal-content box-shadow">
																												<div class="modal-header">
																													<div class="modal-title text-md">Modal title</div>
																													<button class="close" data-dismiss="modal">×</button>
																												</div>
																												<div class="modal-body">
																													<div class="p-4 text-center">
																														<p>Woohoo, you're reading this text in a modal!</p>
																													</div>
																												</div>
																												<div class="modal-footer">
																													<button type="button" class="btn btn-light" data-dismiss="modal">Close</button>
																													<button type="button" class="btn btn-primary" data-dismiss="modal">Save Changes</button>
																												</div>
																											</div>
																										</div>
																									</div>
																									<div id="modal-backdrop-white" class="modal bg-white fade" data-backdrop="false">
																										<div class="modal-dialog">
																											<div class="modal-content box-shadow">
																												<div class="modal-header">
																													<div class="modal-title text-md">Modal title</div>
																													<button class="close" data-dismiss="modal">×</button>
																												</div>
																												<div class="modal-body">
																													<div class="p-4 text-center">
																														<p>Woohoo, you're reading this text in a modal!</p>
																													</div>
																												</div>
																												<div class="modal-footer">
																													<button type="button" class="btn btn-light" data-dismiss="modal">Close</button>
																													<button type="button" class="btn btn-primary" data-dismiss="modal">Save Changes</button>
																												</div>
																											</div>
																										</div>
																									</div>
																									<div id="modal-backdrop-dark" class="modal bg-dark fade" data-backdrop="false">
																										<div class="modal-dialog">
																											<div class="modal-content">
																												<div class="modal-header">
																													<div class="modal-title text-md">Modal title</div>
																													<button class="close" data-dismiss="modal">×</button>
																												</div>
																												<div class="modal-body">
																													<div class="p-4 text-center">
																														<p>Woohoo, you're reading this text in a modal!</p>
																													</div>
																												</div>
																												<div class="modal-footer">
																													<button type="button" class="btn btn-light" data-dismiss="modal">Close</button>
																													<button type="button" class="btn btn-primary" data-dismiss="modal">Save Changes</button>
																												</div>
																											</div>
																										</div>
																									</div>
																									<div id="modal-animate" class="modal fade" data-backdrop="true">
																										<div class="modal-dialog animate">
																											<div class="modal-content">
																												<div class="modal-header">
																													<div class="modal-title text-md">Modal title</div>
																													<button class="close" data-dismiss="modal">×</button>
																												</div>
																												<div class="modal-body">
																													<div class="p-4 text-center">
																														<p>Woohoo, you're reading this text in a modal!</p>
																													</div>
																												</div>
																												<div class="modal-footer">
																													<button type="button" class="btn btn-light" data-dismiss="modal">Close</button>
																													<button type="button" class="btn btn-primary" data-dismiss="modal">Save Changes</button>
																												</div>
																											</div>
																										</div>
																									</div>
																									<div id="modal-right" class="modal fade" data-backdrop="true">
																										<div class="modal-dialog modal-right w-xl">
																											<div class="modal-content h-100 no-radius">
																												<div class="modal-header">
																													<div class="modal-title text-md">Modal title</div>
																													<button class="close" data-dismiss="modal">×</button>
																												</div>
																												<div class="modal-body">
																													<div class="p-4 text-center">
																														<p>Woohoo, you're reading this text in a modal!</p>
																													</div>
																												</div>
																												<div class="modal-footer">
																													<button type="button" class="btn btn-light" data-dismiss="modal">Close</button>
																													<button type="button" class="btn btn-primary" data-dismiss="modal">Save Changes</button>
																												</div>
																											</div>
																										</div>
																									</div>
																									<div id="modal-left" class="modal fade" data-backdrop="true">
																										<div class="modal-dialog modal-left w-xl">
																											<div class="modal-content h-100 no-radius">
																												<div class="modal-header">
																													<div class="modal-title text-md">Modal title</div>
																													<button class="close" data-dismiss="modal">×</button>
																												</div>
																												<div class="modal-body">
																													<div class="p-4 text-center">
																														<p>Woohoo, you're reading this text in a modal!</p>
																													</div>
																												</div>
																												<div class="modal-footer">
																													<button type="button" class="btn btn-light" data-dismiss="modal">Close</button>
																													<button type="button" class="btn btn-primary" data-dismiss="modal">Save Changes</button>
																												</div>
																											</div>
																										</div>
																									</div>
																									<div id="modal-top" class="modal fade" data-backdrop="true">
																										<div class="modal-dialog modal-top">
																											<div class="modal-content no-radius">
																												<div class="modal-header">
																													<div class="modal-title text-md">Modal title</div>
																													<button class="close" data-dismiss="modal">×</button>
																												</div>
																												<div class="modal-body">
																													<div class="p-4 text-center">
																														<p>Woohoo, you're reading this text in a modal!</p>
																													</div>
																												</div>
																												<div class="modal-footer">
																													<button type="button" class="btn btn-light" data-dismiss="modal">Close</button>
																													<button type="button" class="btn btn-primary" data-dismiss="modal">Save Changes</button>
																												</div>
																											</div>
																										</div>
																									</div>
																									<div id="modal-bottom" class="modal fade" data-backdrop="true">
																										<div class="modal-dialog modal-bottom">
																											<div class="modal-content no-radius">
																												<div class="modal-header">
																													<div class="modal-title text-md">Modal title</div>
																													<button class="close" data-dismiss="modal">×</button>
																												</div>
																												<div class="modal-body">
																													<div class="p-4 text-center">
																														<p>Woohoo, you're reading this text in a modal!</p>
																													</div>
																												</div>
																												<div class="modal-footer">
																													<button type="button" class="btn btn-light" data-dismiss="modal">Close</button>
																													<button type="button" class="btn btn-primary" data-dismiss="modal">Save Changes</button>
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