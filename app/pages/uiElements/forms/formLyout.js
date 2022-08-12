var appFormLyout = {
    html: `
    <div class="">
	<div class="page-hero page-container" id="page-hero">
		<div class="padding d-flex">
			<div class="page-title">
				<h2 class="text-md text-highlight">Layout</h2>
				<small class="text-muted">Grid layout in form controls</small>
			</div>
			<div class="flex"></div>
			
		</div>
	</div>
	<div class="page-content page-container" id="page-content">
		<div class="padding">
			<div class="row">
				<div class="col-md-6">
					<div class="card">
						<div class="card-header">
							<strong>Basic form</strong>
						</div>
						<div class="card-body">
							<form>
								<div class="form-group">
									<label class="text-muted" for="exampleInputEmail1">Email address</label>
									<input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
										<small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
									</div>
									<div class="form-group">
										<label class="text-muted" for="exampleInputPassword1">Password</label>
										<input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
											<small id="passwordHelp" class="form-text text-muted">Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.</small>
										</div>
										<div class="form-group">
											<div class="form-check">
												<input type="checkbox" class="form-check-input">
													<label class="form-check-label">Check me out</label>
												</div>
											</div>
											<button type="submit" class="btn btn-primary">Submit</button>
										</form>
									</div>
								</div>
							</div>
							<div class="col-md-6">
								<div class="card">
									<div class="card-header">
										<strong>Horizontal form</strong>
									</div>
									<div class="card-body">
										<form>
											<div class="form-group row">
												<label for="inputEmail3" class="col-sm-3 col-form-label">Email</label>
												<div class="col-sm-9">
													<input type="email" class="form-control" id="inputEmail3" placeholder="Email">
													</div>
												</div>
												<div class="form-group row">
													<label for="inputPassword3" class="col-sm-3 col-form-label">Password</label>
													<div class="col-sm-9">
														<input type="password" class="form-control" id="inputPassword3" placeholder="Password">
														</div>
													</div>
													<div class="form-group row">
														<label class="col-sm-3 col-form-label">Select</label>
														<div class="col-sm-9">
															<select class="form-control">
																<option>Choose...</option>
															</select>
														</div>
													</div>
													<div class="form-group">
														<div class="row">
															<div class="col-sm-3 col-form-label pt-0">Radios</div>
															<div class="col-sm-9">
																<div class="form-check">
																	<label class="form-check-label">
																		<input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked="checked"> Option one is this and that
																		</label>
																	</div>
																	<div class="form-check">
																		<label class="form-check-label">
																			<input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2"> Option two can be something else
																			</label>
																		</div>
																	</div>
																</div>
															</div>
															<div class="form-group row">
																<div class="col-sm-3 col-form-label pt-0">Checkbox</div>
																<div class="col-sm-9">
																	<div class="form-check">
																		<label class="form-check-label">
																			<input class="form-check-input" type="checkbox"> Check me out
																			</label>
																		</div>
																	</div>
																</div>
																<button type="submit" class="btn btn-primary mt-1">Submit</button>
															</form>
														</div>
													</div>
												</div>
												<div class="col-lg-12">
													<div class="card">
														<div class="card-header">
															<strong>Column sizing</strong>
														</div>
														<div class="card-body">
															<div class="row row-sm">
																<div class="col-3">
																	<input type="text" class="form-control" placeholder=".col-3">
																	</div>
																	<div class="col-4">
																		<input type="text" class="form-control" placeholder=".col-4">
																		</div>
																		<div class="col-5">
																			<input type="text" class="form-control" placeholder=".col-5">
																			</div>
																		</div>
																	</div>
																</div>
																<div class="card">
																	<div class="card-header">
																		<strong>Inline form</strong>
																	</div>
																	<div class="card-body">
																		<form class="form-inline" role="form">
																			<label class="sr-only" for="inlineFormInputName2">Name</label>
																			<input type="text" class="form-control mb-2 mr-sm-2" id="inlineFormInputName2" placeholder="Jane Doe">
																				<label class="sr-only" for="inlineFormInputGroupUsername2">Username</label>
																				<div class="input-group mb-2 mr-sm-2">
																					<div class="input-group-prepend">
																						<div class="input-group-text">@</div>
																					</div>
																					<input type="text" class="form-control" id="inlineFormInputGroupUsername2" placeholder="Username">
																					</div>
																					<div class="form-check mb-2 mr-sm-2">
																						<input class="form-check-input" type="checkbox" id="inlineFormCheck">
																							<label class="form-check-label" for="inlineFormCheck">Remember me</label>
																						</div>
																						<button type="submit" class="btn btn-primary mb-2">Sign in</button>
																					</form>
																				</div>
																			</div>
																		</div>
																		<div class="col-md-6">
																			<div class="card">
																				<div class="card-header">
																					<strong>Billing form</strong>
																				</div>
																				<div class="card-body">
																					<form>
																						<div class="form-row">
																							<div class="form-group col-md-6">
																								<label class="text-muted">First Name</label>
																								<input type="text" class="form-control" placeholder="First name">
																								</div>
																								<div class="form-group col-md-6">
																									<label class="text-muted">Last Name</label>
																									<input type="text" class="form-control" placeholder="Last name">
																									</div>
																								</div>
																								<div class="form-row">
																									<div class="form-group col-md-6">
																										<label class="text-muted">Email</label>
																										<input type="email" class="form-control" placeholder="Email">
																										</div>
																										<div class="form-group col-md-6">
																											<label class="text-muted">Password 
																												<small>(Register account)</small>
																											</label>
																											<input type="password" class="form-control" placeholder="Password">
																											</div>
																										</div>
																										<div class="form-group">
																											<label class="text-muted">Address</label>
																											<input type="text" class="form-control" placeholder="1234 Main St">
																											</div>
																											<div class="form-row">
																												<div class="form-group col-md-6">
																													<label class="text-muted">City</label>
																													<input type="text" class="form-control">
																													</div>
																													<div class="form-group col-md-4">
																														<label for="inputState" class="text-muted d-block">State</label>
																														<select class="custom-select">
																															<option selected="selected">Choose...</option>
																															<option>...</option>
																														</select>
																													</div>
																													<div class="form-group col-md-2">
																														<label class="text-muted">Zip</label>
																														<input type="text" class="form-control">
																														</div>
																													</div>
																													<button type="submit" class="btn btn-primary">Submit</button>
																												</form>
																											</div>
																										</div>
																									</div>
																									<div class="col-md-6">
																										<div class="card">
																											<div class="card-header">
																												<strong>Event form</strong>
																											</div>
																											<div class="card-body">
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
																																	</div>
    `,
    init: function() {
        document.getElementById('content').innerHTML = this.html;
    }
}