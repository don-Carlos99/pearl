var appButton = {
    html: `
    <div class="">
	<div class="page-hero page-container" id="page-hero">
		<div class="padding d-flex">
			<div class="page-title">
				<h2 class="text-md text-highlight">Button</h2>
				<small class="text-muted">Button styles for actions in forms, dialogs</small>
			</div>
			<div class="flex"></div>
			
		</div>
	</div>
	<div class="page-content page-container" id="page-content">
		<div class="padding">
			<div class="row">
				<div class="col-sm-6">
					<p>
						<strong>Colors</strong>
					</p>
					<div class="mb-3">
						<button class="btn w-sm mb-1 btn-primary">Primary</button>
						<button class="btn w-sm mb-1 btn-secondary">Secondary</button>
						<button class="btn w-sm mb-1 btn-success">Success</button>
						<button class="btn w-sm mb-1 btn-info">Info</button>
						<button class="btn w-sm mb-1 btn-warning">Warning</button>
						<button class="btn w-sm mb-1 btn-danger">Danger</button>
						<button class="btn w-sm mb-1 btn-white">White</button>
						<button class="btn w-sm mb-1 btn-light">Light</button>
						<button class="btn w-sm mb-1 btn-dark">Dark</button>
					</div>
					<p>
						<strong>Light color</strong>
					</p>
					<div class="mb-3">
						<button class="btn w-sm mb-1 bg-primary-lt">Primary</button>
						<button class="btn w-sm mb-1 bg-secondary-lt">Secondary</button>
						<button class="btn w-sm mb-1 bg-success-lt">Success</button>
						<button class="btn w-sm mb-1 bg-info-lt">Info</button>
						<button class="btn w-sm mb-1 bg-warning-lt">Warning</button>
						<button class="btn w-sm mb-1 bg-danger-lt">Danger</button>
						<button class="btn w-sm mb-1 bg-dark-lt">Dark</button>
					</div>
					<p>
						<strong>Size</strong>
					</p>
					<div class="mb-3">
						<button class="btn w-sm mb-1 btn-sm btn-primary">Small</button>
						<button class="btn w-sm mb-1 btn-secondary">Normal</button>
						<button class="btn w-sm mb-1 btn-md btn-white">Medium</button>
					</div>
					<p>
						<strong>Outline</strong>
					</p>
					<div class="mb-3">
						<button class="btn w-sm mb-1 btn-outline-primary">Primary</button>
						<button class="btn w-sm mb-1 btn-outline-info">Info</button>
						<button class="btn w-sm mb-1 btn-outline-success">Success</button>
						<button class="btn w-sm mb-1 btn-outline-warning">Warning</button>
						<button class="btn w-sm mb-1 btn-outline-danger">Danger</button>
						<button class="btn w-sm mb-1 btn-outline-light">Light</button>
						<button class="btn w-sm mb-1 btn-outline-dark">Dark</button>
					</div>
					<p>
						<strong>Rounded</strong>
					</p>
					<div class="mb-3">
						<button class="btn w-sm mb-1 btn-rounded btn-primary">Primary</button>
						<button class="btn w-sm mb-1 btn-rounded btn-secondary">Secondary</button>
						<button class="btn w-sm mb-1 btn-rounded btn-success">Success</button>
						<button class="btn w-sm mb-1 btn-rounded btn-outline-info">Info</button>
						<button class="btn w-sm mb-1 btn-rounded btn-outline-warning">Warning</button>
						<button class="btn w-sm mb-1 btn-rounded btn-outline-danger">Danger</button>
					</div>
					<p>
						<strong>Block button</strong>
					</p>
					<div class="mb-3">
						<button class="btn btn-white btn-md btn-block">Block level button</button>
					</div>
					<div class="mb-3">
						<button class="btn btn-dark btn-block">Block level button</button>
					</div>
					<p>
						<strong>Icon</strong>
					</p>
					<div class="mb-3">
						<button class="btn btn-white">
							<svg
								xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus">
								<line x1="12" y1="5" x2="12" y2="19"></line>
								<line x1="5" y1="12" x2="19" y2="12"></line>
							</svg>
							<span class="mx-1">Add</span>
						</button>
						<button class="btn btn-icon btn-white">
							<svg
								xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x">
								<line x1="18" y1="6" x2="6" y2="18"></line>
								<line x1="6" y1="6" x2="18" y2="18"></line>
							</svg>
						</button>
						<a href="#" class="btn btn-icon btn-rounded btn-white" title="Facebook">
							<svg
								xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check">
								<polyline points="20 6 9 17 4 12"></polyline>
							</svg>
						</a>
					</div>
				</div>
				<div class="col-sm-6">
					<div class="mb-2">
						<p>Raised button</p>
						<button class="btn btn-raised btn-wave mb-2 w-xs red text-white">Red</button>
						<button class="btn btn-raised btn-wave mb-2 w-xs indigo text-white">Indigo</button>
						<button class="btn btn-raised btn-wave mb-2 w-xs purple text-white">Purple</button>
						<button class="btn btn-raised btn-wave mb-2 w-xs blue text-white">Blue</button>
						<br>
							<button class="btn btn-raised btn-wave mb-2 w-xs green text-white">Green</button>
							<button class="btn btn-raised btn-wave mb-2 w-xs cyan text-white">Cyan</button>
							<button class="btn btn-raised btn-wave mb-2 w-xs" disabled="disabled">Disabled</button>
						</div>
						<div class="mb-2">
							<p>Icon</p>
							<button class="btn btn-lg btn-raised btn-wave btn-icon btn-rounded mb-2 teal text-white">
								<svg
									xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus">
									<line x1="12" y1="5" x2="12" y2="19"></line>
									<line x1="5" y1="12" x2="19" y2="12"></line>
								</svg>
							</button>
							<button class="btn btn-md btn-raised btn-wave btn-icon btn-rounded mb-2 green text-white">
								<svg
									xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-down">
									<line x1="12" y1="5" x2="12" y2="19"></line>
									<polyline points="19 12 12 19 5 12"></polyline>
								</svg>
							</button>
							<button class="btn btn-raised btn-wave btn-icon btn-rounded mb-2 light-green text-white">
								<svg
									xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check">
									<polyline points="20 6 9 17 4 12"></polyline>
								</svg>
							</button>
							<button class="btn btn-raised btn-wave btn-icon btn-rounded mb-2 lime text-white">
								<svg
									xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-horizontal">
									<circle cx="12" cy="12" r="1"></circle>
									<circle cx="19" cy="12" r="1"></circle>
									<circle cx="5" cy="12" r="1"></circle>
								</svg>
							</button>
							<button class="btn btn-raised btn-wave btn-icon btn-rounded mb-2" disabled="disabled">
								<svg
									xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-up">
									<line x1="12" y1="19" x2="12" y2="5"></line>
									<polyline points="5 12 12 5 19 12"></polyline>
								</svg>
							</button>
						</div>
						<p>
							<strong>Checkbox and radio buttons</strong>
						</p>
						<div class="btn-group btn-group-toggle mb-3" data-toggle="buttons">
							<label class="btn active">
								<input type="checkbox" checked="checked"> Active
								</label>
								<label class="btn">
									<input type="checkbox"> Check
									</label>
									<label class="btn">
										<input type="checkbox"> Check
										</label>
									</div>
									<div class="btn-group btn-group-toggle mb-3" data-toggle="buttons">
										<label class="btn active">
											<input type="radio" name="options" id="option1" checked="checked"> Active
											</label>
											<label class="btn">
												<input type="radio" name="options" id="option2"> Radio
												</label>
												<label class="btn">
													<input type="radio" name="options" id="option3"> Radio
													</label>
												</div>
												<p>
													<strong>Group</strong>
												</p>
												<div class="mb-3">
													<div class="btn-group">
														<button type="button" class="btn btn-outline-primary">Left</button>
														<button type="button" class="btn btn-outline-primary">Middle</button>
														<button type="button" class="btn btn-outline-primary">Right</button>
													</div>
												</div>
												<div class="mb-3">
													<div class="btn-group">
														<button type="button" class="btn btn-primary active">Left</button>
														<button type="button" class="btn btn-primary">Middle</button>
														<button type="button" class="btn btn-primary">Right</button>
													</div>
												</div>
												<p>Nested</p>
												<div class="btn-group mb-3">
													<button type="button" class="btn btn-secondary">1</button>
													<button type="button" class="btn btn-secondary">2</button>
													<div class="btn-group dropdown">
														<button type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown">Dropdown</button>
														<ul class="dropdown-menu">
															<li class="dropdown-item">
																<a href="#">Action</a>
															</li>
															<li class="dropdown-item">
																<a href="#">Another action</a>
															</li>
															<li class="dropdown-item">
																<a href="#">Something else here</a>
															</li>
															<li class="divider"></li>
															<li class="dropdown-item">
																<a href="#">Separated link</a>
															</li>
														</ul>
													</div>
												</div>
												<p>Vertical</p>
												<div class="btn-group-vertical mb-3">
													<button type="button" class="btn btn-secondary">Button</button>
													<button type="button" class="btn btn-secondary">Button</button>
													<div class="btn-group dropdown">
														<button type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown">Dropdown</button>
														<ul class="dropdown-menu">
															<li class="dropdown-item">
																<a href="#">Action</a>
															</li>
															<li class="dropdown-item">
																<a href="#">Another action</a>
															</li>
															<li class="dropdown-item">
																<a href="#">Something else here</a>
															</li>
															<li class="divider"></li>
															<li class="dropdown-item">
																<a href="#">Separated link</a>
															</li>
														</ul>
													</div>
												</div>
												<p>Multiple</p>
												<div class="btn-toolbar mb-3">
													<div class="btn-group mr-2">
														<button type="button" class="btn btn-white">1</button>
														<button type="button" class="btn btn-white">2</button>
														<button type="button" class="btn btn-white active">3</button>
														<button type="button" class="btn btn-white">4</button>
													</div>
													<div class="btn-group mr-2">
														<button type="button" class="btn btn-white">5</button>
														<button type="button" class="btn btn-white">6</button>
														<button type="button" class="btn btn-white">7</button>
													</div>
													<div class="btn-group">
														<button type="button" class="btn btn-white">8</button>
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