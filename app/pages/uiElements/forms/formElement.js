var appFormElement = {
    html: `
    <div id="content" class="flex">
	<div class="">
		<div class="page-hero page-container" id="page-hero">
			<div class="padding d-flex">
				<div class="page-title">
					<h2 class="text-md text-highlight">Element</h2>
					<small class="text-muted">Custom components for creating a wide variety of forms</small>
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
								<strong>Inputs</strong>
							</div>
							<div class="card-body">
								<div class="form-group row">
									<label class="col-sm-4 col-form-label">Text</label>
									<div class="col-sm-8">
										<input type="text" class="form-control">
										</div>
									</div>
									<div class="form-group row">
										<label class="col-sm-4 col-form-label">Rounded</label>
										<div class="col-sm-8">
											<input type="text" class="form-control circle">
											</div>
										</div>
										<div class="form-group row">
											<label class="col-sm-4 col-form-label" for="input-id-1">Label focus</label>
											<div class="col-sm-8">
												<input type="text" class="form-control" id="input-id-1">
												</div>
											</div>
											<div class="form-group row">
												<label class="col-sm-4 col-form-label">Password</label>
												<div class="col-sm-8">
													<input type="password" name="password" class="form-control">
													</div>
												</div>
												<div class="form-group row">
													<label class="col-sm-4 col-form-label">Placeholder</label>
													<div class="col-sm-8">
														<input type="text" class="form-control" placeholder="placeholder">
														</div>
													</div>
													<div class="form-group row">
														<label class="col-sm-4 col-form-label">Help text</label>
														<div class="col-sm-8">
															<input type="text" class="form-control">
																<small class="form-text text-muted">A block of help text that breaks onto a new line and may extend beyond one line.</small>
															</div>
														</div>
														<div class="form-group row">
															<label class="col-sm-4 col-form-label">Disabled</label>
															<div class="col-sm-8">
																<input class="form-control" type="text" placeholder="Disabled input here..." disabled="disabled">
																</div>
															</div>
															<div class="form-group row">
																<label class="col-sm-4 col-form-label">Readonly</label>
																<div class="col-sm-8">
																	<input class="form-control" type="text" placeholder="Readonly  input here..." readonly="readonly">
																	</div>
																</div>
																<div class="form-group row">
																	<label class="col-sm-4 col-form-label">Readonly plain text</label>
																	<div class="col-sm-8">
																		<div class="form-control-plaintext">email@example.com</div>
																	</div>
																</div>
																<div class="form-group row">
																	<label class="col-sm-4 col-form-label" for="formGroupInputLarge">Large</label>
																	<div class="col-sm-8">
																		<input class="form-control form-control-lg" type="text" id="formGroupInputLarge" placeholder="Large input">
																		</div>
																	</div>
																	<div class="form-group row">
																		<label class="col-sm-4 col-form-label">Default</label>
																		<div class="col-sm-8">
																			<input class="form-control" type="text" placeholder="Default input">
																			</div>
																		</div>
																		<div class="form-group row">
																			<label class="col-sm-4 col-form-label" for="formGroupInputSmall">Small</label>
																			<div class="col-sm-8">
																				<input class="form-control form-control-sm" type="text" id="formGroupInputSmall" placeholder="Small input">
																				</div>
																			</div>
																		</div>
																	</div>
																	<div class="card">
																		<div class="card-header">
																			<strong>Select, Checkbox and radio...</strong>
																		</div>
																		<div class="card-body">
																			<div class="form-group row">
																				<label class="col-sm-4 col-form-label">Select</label>
																				<div class="col-sm-8">
																					<select class="form-control">
																						<option>1</option>
																						<option>2</option>
																						<option>3</option>
																						<option>4</option>
																					</select>
																				</div>
																			</div>
																			<div class="form-group row">
																				<label class="col-sm-4 col-form-label">Select large</label>
																				<div class="col-sm-8">
																					<select class="form-control form-control-lg">
																						<option>1</option>
																						<option>2</option>
																						<option>3</option>
																						<option>4</option>
																					</select>
																				</div>
																			</div>
																			<div class="form-group row">
																				<label class="col-sm-4 col-form-label">Select small</label>
																				<div class="col-sm-8">
																					<select class="form-control form-control-sm">
																						<option>1</option>
																						<option>2</option>
																						<option>3</option>
																						<option>4</option>
																					</select>
																				</div>
																			</div>
																			<div class="form-group row">
																				<label class="col-sm-4 col-form-label">Multiple</label>
																				<div class="col-lg-4">
																					<select multiple="multiple" class="form-control">
																						<option>1</option>
																						<option>2</option>
																						<option>3</option>
																						<option>4</option>
																					</select>
																				</div>
																			</div>
																			<div class="form-group row">
																				<label class="col-sm-4 col-form-label">Disabled</label>
																				<div class="col-sm-8">
																					<select class="form-control" disabled="disabled">
																						<option>1</option>
																						<option>2</option>
																						<option>3</option>
																						<option>4</option>
																					</select>
																				</div>
																			</div>
																			<div class="form-group row">
																				<label class="col-sm-4 col-form-label">Textarea</label>
																				<div class="col-sm-8">
																					<textarea class="form-control" rows="7"></textarea>
																				</div>
																			</div>
																			<div class="form-group row">
																				<label class="col-sm-4 col-form-label">Checkbox</label>
																				<div class="col-sm-8">
																					<div class="form-check">
																						<input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
																							<label class="form-check-label" for="defaultCheck1">Default checkbox</label>
																						</div>
																						<div class="form-check">
																							<input class="form-check-input" type="checkbox" value="" id="defaultCheck2">
																								<label class="form-check-label" for="defaultCheck2">Second default checkbox</label>
																							</div>
																							<div class="form-check">
																								<input class="form-check-input" type="checkbox" value="" id="defaultCheck3" disabled="disabled">
																									<label class="form-check-label" for="defaultCheck3">Disabled checkbox</label>
																								</div>
																							</div>
																						</div>
																						<div class="form-group row">
																							<label class="col-sm-4 col-form-label">Radio</label>
																							<div class="col-sm-8">
																								<div class="form-check">
																									<input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked="checked">
																										<label class="form-check-label" for="exampleRadios1">Default radio</label>
																									</div>
																									<div class="form-check">
																										<input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2">
																											<label class="form-check-label" for="exampleRadios2">Second default radio</label>
																										</div>
																										<div class="form-check disabled">
																											<input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="option3" disabled="disabled">
																												<label class="form-check-label" for="exampleRadios3">Disabled radio</label>
																											</div>
																										</div>
																									</div>
																									<div class="form-group row">
																										<label class="col-sm-4 col-form-label">Checkbox inline</label>
																										<div class="col-sm-8">
																											<div class="mt-2">
																												<div class="form-check form-check-inline">
																													<input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
																														<label class="form-check-label" for="inlineCheckbox1">1</label>
																													</div>
																													<div class="form-check form-check-inline">
																														<input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2">
																															<label class="form-check-label" for="inlineCheckbox2">2</label>
																														</div>
																														<div class="form-check form-check-inline">
																															<input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" disabled="disabled">
																																<label class="form-check-label" for="inlineCheckbox3">3 (disabled)</label>
																															</div>
																														</div>
																													</div>
																												</div>
																												<div class="form-group row">
																													<label class="col-sm-4 col-form-label">Radio inline</label>
																													<div class="col-sm-8">
																														<div class="mt-2 mb-2">
																															<div class="form-check form-check-inline">
																																<input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1">
																																	<label class="form-check-label" for="inlineRadio1">1</label>
																																</div>
																																<div class="form-check form-check-inline">
																																	<input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2">
																																		<label class="form-check-label" for="inlineRadio2">2</label>
																																	</div>
																																	<div class="form-check form-check-inline">
																																		<input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" disabled="disabled">
																																			<label class="form-check-label" for="inlineRadio3">3 (disabled)</label>
																																		</div>
																																	</div>
																																</div>
																															</div>
																														</div>
																													</div>
																												</div>
																												<div class="col-md-6">
																													<div class="card">
																														<div class="card-header">
																															<strong>Input group</strong>
																														</div>
																														<div class="card-body">
																															<div class="input-group mb-3">
																																<div class="input-group-prepend">
																																	<span class="input-group-text" id="basic-addon1">@</span>
																																</div>
																																<input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">
																																</div>
																																<div class="input-group mb-3">
																																	<input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2">
																																		<div class="input-group-append">
																																			<span class="input-group-text" id="basic-addon2">@example.com</span>
																																		</div>
																																	</div>
																																	<label for="basic-url">Your vanity URL</label>
																																	<div class="input-group mb-3">
																																		<div class="input-group-prepend">
																																			<span class="input-group-text" id="basic-addon3">https://example.com/users/</span>
																																		</div>
																																		<input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3">
																																		</div>
																																		<div class="input-group mb-3">
																																			<div class="input-group-prepend">
																																				<span class="input-group-text">$</span>
																																			</div>
																																			<input type="text" class="form-control" aria-label="Amount (to the nearest dollar)">
																																				<div class="input-group-append">
																																					<span class="input-group-text">.00</span>
																																				</div>
																																			</div>
																																			<div class="input-group mb-3">
																																				<div class="input-group-prepend">
																																					<span class="input-group-text">With textarea</span>
																																				</div>
																																				<textarea class="form-control" aria-label="With textarea"></textarea>
																																			</div>
																																			<div class="input-group input-group-sm mb-3">
																																				<div class="input-group-prepend">
																																					<span class="input-group-text" id="inputGroup-sizing-sm">Small</span>
																																				</div>
																																				<input type="text" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm">
																																				</div>
																																				<div class="input-group mb-3">
																																					<div class="input-group-prepend">
																																						<span class="input-group-text" id="inputGroup-sizing-default">Default</span>
																																					</div>
																																					<input type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default">
																																					</div>
																																					<div class="input-group input-group-lg mb-3">
																																						<div class="input-group-prepend">
																																							<span class="input-group-text" id="inputGroup-sizing-lg">Large</span>
																																						</div>
																																						<input type="text" class="form-control" aria-label="Large" aria-describedby="inputGroup-sizing-sm">
																																						</div>
																																						<div class="input-group mb-3">
																																							<div class="input-group-prepend">
																																								<div class="input-group-text">
																																									<input type="checkbox" aria-label="Checkbox for following text input">
																																									</div>
																																								</div>
																																								<input type="text" class="form-control" aria-label="Text input with checkbox">
																																								</div>
																																								<div class="input-group mb-3">
																																									<div class="input-group-prepend">
																																										<div class="input-group-text">
																																											<input type="radio" aria-label="Radio button for following text input">
																																											</div>
																																										</div>
																																										<input type="text" class="form-control" aria-label="Text input with radio button">
																																										</div>
																																										<div class="input-group mb-3">
																																											<div class="input-group-prepend">
																																												<span class="input-group-text" id="">First and last name</span>
																																											</div>
																																											<input type="text" class="form-control">
																																												<input type="text" class="form-control">
																																												</div>
																																												<div class="input-group mb-3">
																																													<div class="input-group-prepend">
																																														<span class="input-group-text">$</span>
																																														<span class="input-group-text">0.00</span>
																																													</div>
																																													<input type="text" class="form-control" aria-label="Amount (to the nearest dollar)">
																																													</div>
																																													<div class="input-group mb-3">
																																														<input type="text" class="form-control" aria-label="Amount (to the nearest dollar)">
																																															<div class="input-group-append">
																																																<span class="input-group-text">$</span>
																																																<span class="input-group-text">0.00</span>
																																															</div>
																																														</div>
																																														<div class="input-group mb-3">
																																															<div class="input-group-prepend">
																																																<button class="btn btn-outline-secondary" type="button">Button</button>
																																															</div>
																																															<input type="text" class="form-control" placeholder="" aria-label="" aria-describedby="basic-addon1">
																																															</div>
																																															<div class="input-group mb-3">
																																																<input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2">
																																																	<div class="input-group-append">
																																																		<button class="btn btn-outline-secondary" type="button">Button</button>
																																																	</div>
																																																</div>
																																																<div class="input-group mb-3">
																																																	<div class="input-group-prepend">
																																																		<button class="btn btn-outline-secondary" type="button">Button</button>
																																																		<button class="btn btn-outline-secondary" type="button">Button</button>
																																																	</div>
																																																	<input type="text" class="form-control" placeholder="" aria-label="" aria-describedby="basic-addon1">
																																																	</div>
																																																	<div class="input-group mb-3">
																																																		<input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2">
																																																			<div class="input-group-append">
																																																				<button class="btn btn-outline-secondary" type="button">Button</button>
																																																				<button class="btn btn-outline-secondary" type="button">Button</button>
																																																			</div>
																																																		</div>
																																																		<div class="input-group mb-3">
																																																			<div class="input-group-prepend">
																																																				<button class="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</button>
																																																				<div class="dropdown-menu">
																																																					<a class="dropdown-item" href="#">Action</a>
																																																					<a class="dropdown-item" href="#">Another action</a>
																																																					<a class="dropdown-item" href="#">Something else here</a>
																																																					<div role="separator" class="dropdown-divider"></div>
																																																					<a class="dropdown-item" href="#">Separated link</a>
																																																				</div>
																																																			</div>
																																																			<input type="text" class="form-control" aria-label="Text input with dropdown button">
																																																			</div>
																																																			<div class="input-group mb-3">
																																																				<input type="text" class="form-control" aria-label="Text input with dropdown button">
																																																					<div class="input-group-append">
																																																						<button class="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</button>
																																																						<div class="dropdown-menu">
																																																							<a class="dropdown-item" href="#">Action</a>
																																																							<a class="dropdown-item" href="#">Another action</a>
																																																							<a class="dropdown-item" href="#">Something else here</a>
																																																							<div role="separator" class="dropdown-divider"></div>
																																																							<a class="dropdown-item" href="#">Separated link</a>
																																																						</div>
																																																					</div>
																																																				</div>
																																																				<div class="input-group mb-3">
																																																					<div class="input-group-prepend">
																																																						<button type="button" class="btn btn-outline-secondary">Action</button>
																																																						<button type="button" class="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
																																																							<span class="sr-only">Toggle Dropdown</span>
																																																						</button>
																																																						<div class="dropdown-menu">
																																																							<a class="dropdown-item" href="#">Action</a>
																																																							<a class="dropdown-item" href="#">Another action</a>
																																																							<a class="dropdown-item" href="#">Something else here</a>
																																																							<div role="separator" class="dropdown-divider"></div>
																																																							<a class="dropdown-item" href="#">Separated link</a>
																																																						</div>
																																																					</div>
																																																					<input type="text" class="form-control" aria-label="Text input with segmented dropdown button">
																																																					</div>
																																																					<div class="input-group mb-3">
																																																						<input type="text" class="form-control" aria-label="Text input with segmented dropdown button">
																																																							<div class="input-group-append">
																																																								<button type="button" class="btn btn-outline-secondary">Action</button>
																																																								<button type="button" class="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
																																																									<span class="sr-only">Toggle Dropdown</span>
																																																								</button>
																																																								<div class="dropdown-menu">
																																																									<a class="dropdown-item" href="#">Action</a>
																																																									<a class="dropdown-item" href="#">Another action</a>
																																																									<a class="dropdown-item" href="#">Something else here</a>
																																																									<div role="separator" class="dropdown-divider"></div>
																																																									<a class="dropdown-item" href="#">Separated link</a>
																																																								</div>
																																																							</div>
																																																						</div>
																																																						<div class="input-group mb-3">
																																																							<div class="input-group-prepend">
																																																								<label class="input-group-text" for="inputGroupSelect01">Options</label>
																																																							</div>
																																																							<select class="custom-select" id="inputGroupSelect01">
																																																								<option selected="selected">Choose...</option>
																																																								<option value="1">One</option>
																																																								<option value="2">Two</option>
																																																								<option value="3">Three</option>
																																																							</select>
																																																						</div>
																																																						<div class="input-group mb-3">
																																																							<select class="custom-select" id="inputGroupSelect02">
																																																								<option selected="selected">Choose...</option>
																																																								<option value="1">One</option>
																																																								<option value="2">Two</option>
																																																								<option value="3">Three</option>
																																																							</select>
																																																							<div class="input-group-append">
																																																								<label class="input-group-text" for="inputGroupSelect02">Options</label>
																																																							</div>
																																																						</div>
																																																						<div class="input-group mb-3">
																																																							<div class="input-group-prepend">
																																																								<button class="btn btn-outline-secondary" type="button">Button</button>
																																																							</div>
																																																							<select class="custom-select" id="inputGroupSelect03">
																																																								<option selected="selected">Choose...</option>
																																																								<option value="1">One</option>
																																																								<option value="2">Two</option>
																																																								<option value="3">Three</option>
																																																							</select>
																																																						</div>
																																																						<div class="input-group mb-3">
																																																							<select class="custom-select" id="inputGroupSelect04">
																																																								<option selected="selected">Choose...</option>
																																																								<option value="1">One</option>
																																																								<option value="2">Two</option>
																																																								<option value="3">Three</option>
																																																							</select>
																																																							<div class="input-group-append">
																																																								<button class="btn btn-outline-secondary" type="button">Button</button>
																																																							</div>
																																																						</div>
																																																						<div class="input-group mb-3">
																																																							<div class="input-group-prepend">
																																																								<span class="input-group-text">Upload</span>
																																																							</div>
																																																							<div class="custom-file">
																																																								<input type="file" class="custom-file-input" id="inputGroupFile01">
																																																									<label class="custom-file-label" for="inputGroupFile01">Choose file</label>
																																																								</div>
																																																							</div>
																																																							<div class="input-group mb-3">
																																																								<div class="custom-file">
																																																									<input type="file" class="custom-file-input" id="inputGroupFile02">
																																																										<label class="custom-file-label" for="inputGroupFile02">Choose file</label>
																																																									</div>
																																																									<div class="input-group-append">
																																																										<span class="input-group-text" id="">Upload</span>
																																																									</div>
																																																								</div>
																																																								<div class="input-group mb-3">
																																																									<div class="input-group-prepend">
																																																										<button class="btn btn-outline-secondary" type="button">Button</button>
																																																									</div>
																																																									<div class="custom-file">
																																																										<input type="file" class="custom-file-input" id="inputGroupFile03">
																																																											<label class="custom-file-label" for="inputGroupFile03">Choose file</label>
																																																										</div>
																																																									</div>
																																																									<div class="input-group">
																																																										<div class="custom-file">
																																																											<input type="file" class="custom-file-input" id="inputGroupFile04">
																																																												<label class="custom-file-label" for="inputGroupFile04">Choose file</label>
																																																											</div>
																																																											<div class="input-group-append">
																																																												<button class="btn btn-outline-secondary" type="button">Button</button>
																																																											</div>
																																																										</div>
																																																									</div>
																																																								</div>
																																																							</div>
																																																							<div class="col-md-6">
																																																								<div class="card">
																																																									<div class="card-header">
																																																										<strong>Custom style</strong>
																																																									</div>
																																																									<div class="card-body">
																																																										<div class="form-group row">
																																																											<label class="col-sm-4 col-form-label">Custom</label>
																																																											<div class="col-sm-8">
																																																												<div class="custom-control custom-checkbox">
																																																													<input type="checkbox" class="custom-control-input" id="customCheck1">
																																																														<label class="custom-control-label" for="customCheck1">Check this custom checkbox</label>
																																																													</div>
																																																													<div class="custom-control custom-radio">
																																																														<input type="radio" class="custom-control-input" id="customRadio1">
																																																															<label class="custom-control-label" for="customRadio1">Toggle this custom radio</label>
																																																														</div>
																																																													</div>
																																																												</div>
																																																												<div class="form-group row">
																																																													<label class="col-sm-4 col-form-label">Styled</label>
																																																													<div class="col-sm-8">
																																																														<div class="checkbox">
																																																															<label class="ui-check">
																																																																<input type="checkbox" value="">
																																																																	<i class="dark-white"></i> one
																																																																</label>
																																																															</div>
																																																															<div class="checkbox">
																																																																<label class="ui-check">
																																																																	<input type="checkbox" checked="checked" value="">
																																																																		<i class="dark-white"></i> two checked
																																																																	</label>
																																																																</div>
																																																																<div class="checkbox disabled">
																																																																	<label class="ui-check">
																																																																		<input type="checkbox" checked="checked" disabled="disabled" value="">
																																																																			<i class="dark-white"></i> three checked and disabled
																																																																		</label>
																																																																	</div>
																																																																	<div class="checkbox disabled">
																																																																		<label class="ui-check">
																																																																			<input type="checkbox" disabled="disabled" value="">
																																																																				<i class="dark-white"></i> four disabled
																																																																			</label>
																																																																		</div>
																																																																		<div class="radio">
																																																																			<label class="ui-check">
																																																																				<input type="radio" name="a" value="option1">
																																																																					<i class="dark-white"></i> one
																																																																				</label>
																																																																			</div>
																																																																			<div class="radio">
																																																																				<label class="ui-check">
																																																																					<input type="radio" name="a" value="option2" checked="checked">
																																																																						<i class="dark-white"></i> two checked
																																																																					</label>
																																																																				</div>
																																																																				<div class="radio disabled">
																																																																					<label class="ui-check">
																																																																						<input type="radio" value="option2" checked="checked" disabled="disabled">
																																																																							<i class="dark-white"></i> three checked and disabled
																																																																						</label>
																																																																					</div>
																																																																					<div class="radio disabled">
																																																																						<label class="ui-check">
																																																																							<input type="radio" name="a" disabled="disabled">
																																																																								<i class="dark-white"></i> four disabled
																																																																							</label>
																																																																						</div>
																																																																						<div class="radio">
																																																																							<label class="ui-check ui-check-md">
																																																																								<input type="radio" name="a">
																																																																									<i class="dark-white"></i> Medium size radio
																																																																								</label>
																																																																							</div>
																																																																							<div class="checkbox">
																																																																								<label class="ui-check ui-check-md">
																																																																									<input type="checkbox">
																																																																										<i class="dark-white"></i> Medium size checkbox
																																																																									</label>
																																																																								</div>
																																																																								<div class="radio">
																																																																									<label class="ui-check ui-check-lg">
																																																																										<input type="radio" name="a">
																																																																											<i class="dark-white"></i> Large size radio
																																																																										</label>
																																																																									</div>
																																																																									<div class="checkbox">
																																																																										<label class="ui-check ui-check-lg">
																																																																											<input type="checkbox">
																																																																												<i class="dark-white"></i> Large size checkbox
																																																																											</label>
																																																																										</div>
																																																																									</div>
																																																																								</div>
																																																																								<div class="form-group row">
																																																																									<label class="col-sm-4 col-form-label">Radio color</label>
																																																																									<div class="col-sm-8">
																																																																										<div class="mt-2">
																																																																											<label class="ui-check ui-check-color">
																																																																												<input type="radio" name="c" checked="checked">
																																																																													<i class="bg-primary"></i>
																																																																												</label>
																																																																												<label class="ui-check ui-check-color">
																																																																													<input type="radio" name="c">
																																																																														<i class="bg-info"></i>
																																																																													</label>
																																																																													<label class="ui-check ui-check-color">
																																																																														<input type="radio" name="c">
																																																																															<i class="bg-success"></i>
																																																																														</label>
																																																																														<label class="ui-check ui-check-color">
																																																																															<input type="radio" name="c">
																																																																																<i class="bg-warning"></i>
																																																																															</label>
																																																																															<label class="ui-check ui-check-color">
																																																																																<input type="radio" name="c">
																																																																																	<i class="bg-danger"></i>
																																																																																</label>
																																																																															</div>
																																																																														</div>
																																																																													</div>
																																																																													<div class="form-group row">
																																																																														<label class="col-sm-4 col-form-label">Switch</label>
																																																																														<div class="col-sm-8">
																																																																															<label class="ui-switch mt-1 mr-2">
																																																																																<input type="checkbox" checked="checked">
																																																																																	<i></i>
																																																																																</label>
																																																																																<label class="ui-switch bg-success mt-1 mr-2">
																																																																																	<input type="checkbox">
																																																																																		<i></i>
																																																																																	</label>
																																																																																	<label class="ui-switch bg-info mt-1 mr-2">
																																																																																		<input type="checkbox">
																																																																																			<i></i>
																																																																																		</label>
																																																																																		<label class="ui-switch bg-warning mt-1 mr-2">
																																																																																			<input type="checkbox">
																																																																																				<i></i>
																																																																																			</label>
																																																																																			<label class="ui-switch bg-danger mt-1 mr-2">
																																																																																				<input type="checkbox">
																																																																																					<i></i>
																																																																																				</label>
																																																																																			</div>
																																																																																		</div>
																																																																																		<div class="form-group row">
																																																																																			<label class="col-sm-4 col-form-label">Radio Switch</label>
																																																																																			<div class="col-sm-8">
																																																																																				<label class="ui-switch mt-1 mr-2">
																																																																																					<input type="radio" name="switch" checked="checked">
																																																																																						<i></i>
																																																																																					</label>
																																																																																					<label class="ui-switch mt-1 mr-2">
																																																																																						<input type="radio" name="switch">
																																																																																							<i></i>
																																																																																						</label>
																																																																																					</div>
																																																																																				</div>
																																																																																				<div class="form-group row">
																																																																																					<label class="col-sm-4 col-form-label">Medium</label>
																																																																																					<div class="col-sm-8">
																																																																																						<label class="ui-switch ui-switch-md info m-t-xs">
																																																																																							<input type="checkbox" checked="checked">
																																																																																								<i></i>
																																																																																							</label>
																																																																																						</div>
																																																																																					</div>
																																																																																					<div class="form-group row">
																																																																																						<label class="col-sm-4 col-form-label">Large</label>
																																																																																						<div class="col-sm-8">
																																																																																							<label class="ui-switch ui-switch-lg dark mt-1 mr-2">
																																																																																								<input type="checkbox">
																																																																																									<i></i>
																																																																																								</label>
																																																																																							</div>
																																																																																						</div>
																																																																																						<div class="form-group row">
																																																																																							<label class="col-sm-4 col-form-label">Select</label>
																																																																																							<div class="col-sm-8">
																																																																																								<select class="custom-select">
																																																																																									<option selected="selected">Open this select menu</option>
																																																																																									<option value="1">One</option>
																																																																																									<option value="2">Two</option>
																																																																																									<option value="3">Three</option>
																																																																																								</select>
																																																																																								<select class="custom-select blue mt-3">
																																																																																									<option selected="selected">Open this select menu</option>
																																																																																									<option value="1">One</option>
																																																																																									<option value="2">Two</option>
																																																																																									<option value="3">Three</option>
																																																																																								</select>
																																																																																							</div>
																																																																																						</div>
																																																																																						<div class="form-group row">
																																																																																							<label class="col-sm-4 col-form-label">File browser</label>
																																																																																							<div class="col-sm-8">
																																																																																								<div class="custom-file">
																																																																																									<input type="file" class="custom-file-input" id="customFile">
																																																																																										<label class="custom-file-label" for="customFile">Choose file</label>
																																																																																									</div>
																																																																																								</div>
																																																																																							</div>
																																																																																							<div class="form-group row">
																																																																																								<label class="col-sm-4 col-form-label">Range</label>
																																																																																								<div class="col-sm-8">
																																																																																									<input type="range" min="100" max="500" step="10" class="custom-range mt-2" id="customRange">
																																																																																									</div>
																																																																																								</div>
																																																																																							</div>
																																																																																						</div>
																																																																																					</div>
																																																																																					<div class="col-md-6">
																																																																																						<div class="card">
																																																																																							<div class="card-header">
																																																																																								<strong>Material design form style</strong>
																																																																																							</div>
																																																																																							<div class="card-body">
																																																																																								<div class="row row-sm">
																																																																																									<div class="col-sm-12">
																																																																																										<div class="md-form-group">
																																																																																											<input class="md-input" disabled="disabled">
																																																																																												<label>Company(disabled)</label>
																																																																																											</div>
																																																																																										</div>
																																																																																										<div class="col-sm-6">
																																																																																											<div class="md-form-group float-label">
																																																																																												<input class="md-input" value="" onkeyup="this.setAttribute('value', this.value);" required="">
																																																																																													<label>First Name</label>
																																																																																												</div>
																																																																																											</div>
																																																																																											<div class="col-sm-6">
																																																																																												<div class="md-form-group float-label">
																																																																																													<input class="md-input" value="" onkeyup="this.setAttribute('value', this.value);" required="">
																																																																																														<label>Last Name</label>
																																																																																													</div>
																																																																																												</div>
																																																																																												<div class="col-sm-12">
																																																																																													<div class="md-form-group">
																																																																																														<input class="md-input">
																																																																																															<label>Address</label>
																																																																																														</div>
																																																																																													</div>
																																																																																													<div class="col-sm-4">
																																																																																														<div class="md-form-group">
																																																																																															<input class="md-input">
																																																																																																<label>City</label>
																																																																																																<span class="md-input-msg right">30/30</span>
																																																																																															</div>
																																																																																														</div>
																																																																																														<div class="col-sm-4">
																																																																																															<div class="md-form-group">
																																																																																																<input class="md-input">
																																																																																																	<label>State</label>
																																																																																																</div>
																																																																																															</div>
																																																																																															<div class="col-sm-4">
																																																																																																<div class="md-form-group">
																																																																																																	<input class="md-input">
																																																																																																		<label>Postal Code</label>
																																																																																																	</div>
																																																																																																</div>
																																																																																																<div class="col-sm-12">
																																																																																																	<div class="md-form-group">
																																																																																																		<textarea class="md-input" rows="4"></textarea>
																																																																																																		<label>Biography</label>
																																																																																																	</div>
																																																																																																</div>
																																																																																															</div>
																																																																																															<div class="row">
																																																																																																<div class="col-sm-6">
																																																																																																	<div class="mb-3">
																																																																																																		<label class="md-check">
																																																																																																			<input type="checkbox">
																																																																																																				<i class="indigo"></i> Checkbox
																																																																																																			</label>
																																																																																																		</div>
																																																																																																		<div class="mb-3">
																																																																																																			<label class="md-check">
																																																																																																				<input type="checkbox" checked="checked">undefined<i class="blue"></i> Checked
																																																																																																				</label>
																																																																																																			</div>
																																																																																																			<div class="mb-3">
																																																																																																				<label class="md-check">undefined<input type="checkbox" disabled="disabled">undefined<i class="indigo"></i> Disabledundefined</label>
																																																																																																				</div>
																																																																																																				<div class="mb-3">undefined<label class="md-check">undefined<input type="checkbox" checked="checked" disabled="disabled">undefined<i class="indigo"></i> Checked and disabledundefined</label>undefined</div>undefined<div class="mb-3">undefined<label class="md-check">undefined<input type="checkbox">undefined<i class="pink"></i> Pinkundefined</label>undefined</div>undefined<div class="mb-3">undefined<label class="md-check">undefined<input type="checkbox" checked="checked">undefined<i class="green"></i> Greenundefined</label>undefined</div>undefined<div class="mb-3">undefined<label class="md-check">undefined<input type="checkbox" checked="checked">undefined<i class="teal no-icon"></i> No iconundefined</label>undefined</div>undefined</div>undefined<div class="col-sm-6">undefined<div class="mb-3">undefined<label class="md-check">undefined<input type="radio" name="radio">undefined<i class="indigo"></i> Radioundefined</label>undefined</div>undefined<div class="mb-3">undefined<label class="md-check">undefined<input type="radio" name="radio" checked="checked">undefined<i class="blue"></i> Checkedundefined</label>undefined</div>undefined<div class="mb-3">undefined<label class="md-check">undefined<input type="radio" name="a" disabled="disabled">undefined<i class="indigo"></i> Disabledundefined</label>undefined</div>undefined<div class="mb-3">undefined<label class="md-check">undefined<input type="radio" name="a" checked="checked" disabled="disabled">undefined<i class="indigo"></i> Checked and disabledundefined</label>undefined</div>undefined<div class="mb-3">undefined<label class="md-check">undefined<input type="radio" name="radio">undefined<i class="pink"></i> Pinkundefined</label>undefined</div>undefined<div class="mb-3">undefined<label class="md-check">undefined<input type="radio" checked="checked" name="b">undefined<i class="green"></i> Greenundefined</label>undefined</div>undefined<div class="mb-3">undefined<label class="md-check">undefined<input type="radio" name="b">undefined<i class="teal no-icon"></i> No iconundefined</label>undefined</div>undefined</div>undefined<div class="col-md-12">undefined<div class="row mt-3">undefined<div class="col-sm-6">undefined<div class="mb-3">undefined<label class="md-switch">undefined<input type="checkbox">undefined<i class="indigo"></i> Switchundefined</label>undefined</div>undefined<div class="mb-3">undefined<label class="md-switch">undefined<input type="checkbox" checked="checked">undefined<i class="blue"></i> Checkedundefined</label>undefined</div>undefined<div class="mb-3">undefined<label class="md-switch">undefined<input type="checkbox" disabled="disabled">undefined<i class="blue"></i> Disabledundefined</label>undefined</div>undefined</div>undefined<div class="col-sm-6">undefined<div class="mb-3">undefined<label class="md-switch">undefined<input type="checkbox" checked="checked" disabled="disabled">undefined<i class="blue"></i> Checked and disabledundefined</label>undefined</div>undefined<div class="mb-3">undefined<label class="md-switch">undefined<input type="radio" name="switch" checked="checked">undefined<i class="green"></i> Radio 1undefined</label>undefined</div>undefined<div class="mb-3">undefined<label class="md-switch">undefined<input type="radio" name="switch">undefined<i class="orange"></i> Radio 2undefined</label>undefined</div>undefined</div>undefined</div>undefined</div>undefined</div>undefined</div>undefined</div>undefined</div>undefined</div>undefined</div>undefined</div>undefined</div>undefined</div>
    `,
    init: function() {
        document.getElementById('content').innerHTML = this.html;
    }
}