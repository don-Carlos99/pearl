var appWizard = {
    html: `
    <div>
	<div class="page-hero page-container" id="page-hero">
		<div class="padding d-flex">
			<div class="page-title">
				<h2 class="text-md text-highlight">Wizard</h2>
				<small class="text-muted">A wizard out of a formatter tabbable structure</small>
			</div>
			<div class="flex"></div>
			
		</div>
	</div>
	<div class="page-content page-container" id="page-content">
		<div class="padding">
			<div class="card">
				<div class="card-header">
					<strong>Form Wizard</strong>
				</div>
				<div class="card-body">
					<form id="form" novalidate="">
						<div id="rootwizard">
							<ul class="nav mb-3">
								<li class="nav-item">
									<a class="nav-link text-center active" href="#tab1" data-toggle="tab">
										<span class="w-32 d-inline-flex align-items-center justify-content-center circle bg-light active-bg-success">1</span>
										<div class="mt-2">
											<div class="text-muted">Get account</div>
										</div>
									</a>
								</li>
								<li class="nav-item">
									<a class="nav-link text-center" href="#tab2" data-toggle="tab">
										<span class="w-32 d-inline-flex align-items-center justify-content-center circle bg-light active-bg-success">2</span>
										<div class="mt-2">
											<div class="text-muted">Finish form</div>
										</div>
									</a>
								</li>
								<li class="nav-item">
									<a class="nav-link text-center" href="#tab3" data-toggle="tab">
										<span class="w-32 d-inline-flex align-items-center justify-content-center circle bg-light active-bg-success">3</span>
										<div class="mt-2">
											<div class="text-muted">You got there</div>
										</div>
									</a>
								</li>
							</ul>
							<div class="tab-content p-3">
								<div class="tab-pane active" id="tab1">
									<div class="form-group">
										<label>Username</label>
										<input type="text" class="form-control" required="">
										</div>
										<div class="form-group">
											<label>Email</label>
											<input type="email" class="form-control" required="">
											</div>
											<div class="form-group row">
												<div class="col-sm-6">
													<label>Enter password</label>
													<input type="password" class="form-control" required="" id="pwd">
													</div>
													<div class="col-sm-6">
														<label>Confirm password</label>
														<input type="password" class="form-control" data-parsley-equalto="#pwd" required="">
														</div>
													</div>
													<div class="form-group">
														<label>Phone</label>
														<input type="number" class="form-control" placeholder="XXX XXXX XXX" required="">
														</div>
														<div class="checkbox">
															<label class="ui-check">
																<input type="checkbox" name="check" checked="checked" required="true" data-parsley-multiple="check">
																	<i></i> I agree to the 
																	<a href="#" class="text-info">Terms of Service</a>
																</label>
															</div>
														</div>
														<div class="tab-pane" id="tab2">
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
																						<button type="submit" class="btn btn-primary hide">Submit</button>
																					</div>
																					<div class="tab-pane" id="tab3">
																						<div class="form-group">
																							<p>
																								<strong>Congratulations</strong>
																							</p>
																							<p>Massa molestie augue hendrerit congue cursus sed pellentesque semper sit pellentesque id commodo sem risus amet quisque commodo sit odio sit cras turpis lectus sollicitudin dui faucibus in nunc iaculis donec quam arcu arcu, sagittis ridiculus quis sit semper tristique donec pellentesque duis ut maecenas enim volutpat nisi a non</p>
																						</div>
																					</div>
																					<div class="row py-3">
																						<div class="col-6">
																							<a href="#" class="btn btn-white button-next">
																								<svg
																									xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-left">
																									<polyline points="15 18 9 12 15 6"></polyline>
																								</svg>
																							</a>
																							<a href="#" class="btn btn-white button-previous disabled">
																								<svg
																									xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-left">
																									<line x1="19" y1="12" x2="5" y2="12"></line>
																									<polyline points="12 19 5 12 12 5"></polyline>
																								</svg>
																							</a>
																						</div>
																						<div class="col-6">
																							<div class="d-flex justify-content-end">
																								<a href="#" class="btn btn-white button-next">
																									<svg
																										xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-right">
																										<line x1="5" y1="12" x2="19" y2="12"></line>
																										<polyline points="12 5 19 12 12 19"></polyline>
																									</svg>
																								</a>
																								<a href="#" class="btn btn-white button-last">
																									<svg
																										xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right">
																										<polyline points="9 18 15 12 9 6"></polyline>
																									</svg>
																								</a>
																							</div>
																						</div>
																					</div>
																				</div>
																			</div>
																		</form>
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