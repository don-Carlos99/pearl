var appDropdown = {
    html: `
    <div class="">
	<div class="page-hero page-container" id="page-hero">
		<div class="padding d-flex">
			<div class="page-title">
				<h2 class="text-md text-highlight">Dropdown</h2>
				<small class="text-muted">Toggle contextual overlays for displaying lists of links and more</small>
			</div>
			<div class="flex"></div>
			
		</div>
	</div>
	<div class="page-content page-container" id="page-content">
		<div class="padding">
			<h6>Dropdown menu</h6>
			<div class="d-flex flex-wrap mb-4">
				<div class="dropdown mb-3">
					<ul class="dropdown-menu pos-stc d-inline" role="menu">
						<h6 class="dropdown-header">Dropdown header</h6>
						<li class="dropdown-item">
							<a href="#">Action</a>
						</li>
						<li class="dropdown-item">
							<a href="#">Another action</a>
						</li>
						<li class="dropdown-item">
							<a href="#">Something else here</a>
						</li>
						<li class="dropdown-divider"></li>
						<li class="dropdown-item">
							<a href="#">Separated link</a>
						</li>
						<li class="dropdown-item dropdown-submenu">
							<a href="#">Submenu</a>
							<ul class="dropdown-menu" role="menu">
								<li class="dropdown-item">
									<a href="#">Action</a>
								</li>
								<li class="dropdown-item">
									<a href="#">Another action</a>
								</li>
								<li class="dropdown-item">
									<a href="#">Something else here</a>
								</li>
							</ul>
						</li>
					</ul>
				</div>
				<div class="dropdown mb-3 mx-3">
					<ul class="dropdown-menu pos-stc d-inline bg-dark" role="menu">
						<h6 class="dropdown-header">Dropdown header</h6>
						<li class="dropdown-item">
							<a href="#">Action</a>
						</li>
						<li class="dropdown-item">
							<a href="#">Another action</a>
						</li>
						<li class="dropdown-item">
							<a href="#">Something else here</a>
						</li>
						<li class="dropdown-divider"></li>
						<li class="dropdown-item">
							<a href="#">Separated link</a>
						</li>
						<li class="dropdown-item dropdown-submenu">
							<a href="#">Submenu</a>
							<ul class="dropdown-menu pull-left" role="menu">
								<li class="dropdown-item">
									<a href="#">Action</a>
								</li>
								<li class="dropdown-item">
									<a href="#">Another action</a>
								</li>
								<li class="dropdown-item">
									<a href="#">Something else here</a>
								</li>
							</ul>
						</li>
					</ul>
				</div>
				<div class="dropdown mb-3">
					<ul class="dropdown-menu pos-stc d-inline bg-secondary" role="menu">
						<h6 class="dropdown-header">Dropdown header</h6>
						<li class="dropdown-item">
							<a href="#">Action</a>
						</li>
						<li class="dropdown-item">
							<a href="#">Another action</a>
						</li>
						<li class="dropdown-item">
							<a href="#">Something else here</a>
						</li>
						<li class="dropdown-divider"></li>
						<li class="dropdown-item">
							<a href="#">Separated link</a>
						</li>
						<li class="dropdown-item dropdown-submenu">
							<a href="#">Submenu</a>
							<ul class="dropdown-menu" role="menu">
								<li class="dropdown-item">
									<a href="#">Action</a>
								</li>
								<li class="dropdown-item">
									<a href="#">Another action</a>
								</li>
								<li class="dropdown-item">
									<a href="#">Something else here</a>
								</li>
							</ul>
						</li>
					</ul>
				</div>
			</div>
			<h6>Dropdown icon</h6>
			<div class="d-flex flex-wrap mb-4">
				<div class="dropdown mb-3">
					<div class="dropdown-menu pos-stc d-inline" role="menu">
						<a class="dropdown-item">
							<i class="badge badge-circle xs text-primary"></i> Workshop 
						</a>
						<a class="dropdown-item">
							<i class="badge badge-circle xs text-info"></i> Enterprise 
						</a>
						<a class="dropdown-item">
							<i class="badge badge-circle xs text-success"></i> Personal 
						</a>
						<a class="dropdown-item">
							<i class="badge badge-circle xs text-warning"></i> Private
						</a>
						<div class="dropdown-divider"></div>
						<a class="dropdown-item">
							<svg
								xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus">
								<line x1="12" y1="5" x2="12" y2="19"></line>
								<line x1="5" y1="12" x2="19" y2="12"></line>
							</svg> Create new label
						</a>
					</div>
				</div>
				<div class="dropdown mb-3 mx-3">
					<div class="dropdown-menu pos-stc d-inline" role="menu">
						<a class="dropdown-item">
							<svg
								xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus">
								<line x1="12" y1="5" x2="12" y2="19"></line>
								<line x1="5" y1="12" x2="19" y2="12"></line>
							</svg> Action 
						</a>
						<a class="dropdown-item">
							<svg
								xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-minus">
								<line x1="5" y1="12" x2="19" y2="12"></line>
							</svg> Another action 
						</a>
						<a class="dropdown-item">
							<svg
								xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-down">
								<line x1="12" y1="5" x2="12" y2="19"></line>
								<polyline points="19 12 12 19 5 12"></polyline>
							</svg> Something else here
						</a>
						<div class="dropdown-divider"></div>
						<a class="dropdown-item">
							<svg
								xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x">
								<line x1="18" y1="6" x2="6" y2="18"></line>
								<line x1="6" y1="6" x2="18" y2="18"></line>
							</svg> Separated link 
						</a>
						<a class="dropdown-item">
							<svg
								xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-vertical">
								<circle cx="12" cy="12" r="1"></circle>
								<circle cx="12" cy="5" r="1"></circle>
								<circle cx="12" cy="19" r="1"></circle>
							</svg> More
						</a>
					</div>
				</div>
				<div class="dropdown mb-3">
					<div class="dropdown-menu pos-stc d-inline bg-primary" role="menu">
						<a class="dropdown-item">
							<svg
								xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus">
								<line x1="12" y1="5" x2="12" y2="19"></line>
								<line x1="5" y1="12" x2="19" y2="12"></line>
							</svg> Action 
						</a>
						<a class="dropdown-item">
							<svg
								xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-minus">
								<line x1="5" y1="12" x2="19" y2="12"></line>
							</svg> Another action 
						</a>
						<a class="dropdown-item">
							<svg
								xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-down">
								<line x1="12" y1="5" x2="12" y2="19"></line>
								<polyline points="19 12 12 19 5 12"></polyline>
							</svg> Something else here
						</a>
						<div class="dropdown-divider"></div>
						<a class="dropdown-item">
							<svg
								xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x">
								<line x1="18" y1="6" x2="6" y2="18"></line>
								<line x1="6" y1="6" x2="18" y2="18"></line>
							</svg> Separated link 
						</a>
						<a class="dropdown-item">
							<svg
								xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-vertical">
								<circle cx="12" cy="12" r="1"></circle>
								<circle cx="12" cy="5" r="1"></circle>
								<circle cx="12" cy="19" r="1"></circle>
							</svg> More
						</a>
					</div>
				</div>
			</div>
			<h6>Single button dropdowns</h6>
			<div class="d-inline-flex mb-4 toolbar">
				<div class="dropdown mb-2">
					<button class="btn btn-white dropdown-toggle" data-toggle="dropdown">Dropdown</button>
					<div class="dropdown-menu bg-dark" role="menu">
						<a class="dropdown-item">Action </a>
						<a class="dropdown-item">Another action </a>
						<a class="dropdown-item">Something else here</a>
						<div class="dropdown-divider"></div>
						<a class="dropdown-item">Separated link</a>
					</div>
				</div>
				<div class="dropdown dropup">
					<button class="btn btn-white dropdown-toggle" data-toggle="dropdown">Dropup</button>
					<div class="dropdown-menu bg-dark" role="menu">
						<a class="dropdown-item">Action </a>
						<a class="dropdown-item">Another action </a>
						<a class="dropdown-item">Something else here</a>
						<div class="dropdown-divider"></div>
						<a class="dropdown-item">Separated link</a>
					</div>
				</div>
			</div>
			<h6>Split button dropdowns &amp; variation</h6>
			<div class="d-inline-flex mb-4 toolbar">
				<div class="mb-2">
					<div class="btn-group">
						<button class="btn btn-white">Dropdown</button>
						<button class="btn btn-white dropdown-toggle" data-toggle="dropdown"></button>
						<div class="dropdown-menu bg-dark" role="menu">
							<a class="dropdown-item">Action </a>
							<a class="dropdown-item">Another action </a>
							<a class="dropdown-item">Something else here</a>
							<div class="dropdown-divider"></div>
							<a class="dropdown-item">Separated link</a>
						</div>
					</div>
				</div>
				<div class="mb-2">
					<div class="btn-group">
						<button class="btn btn-white">Dropdown right</button>
						<button class="btn btn-white dropdown-toggle" data-toggle="dropdown"></button>
						<div class="dropdown-menu dropdown-menu-right" role="menu">
							<a class="dropdown-item">Action </a>
							<a class="dropdown-item">Another action </a>
							<a class="dropdown-item">Something else here</a>
							<div class="dropdown-divider"></div>
							<a class="dropdown-item">Separated link</a>
						</div>
					</div>
				</div>
				<div class="mb-2">
					<div class="btn-group dropup">
						<button class="btn btn-white">Dropup</button>
						<button class="btn btn-white dropdown-toggle" data-toggle="dropdown"></button>
						<div class="dropdown-menu bg-dark" role="menu">
							<a class="dropdown-item">Action </a>
							<a class="dropdown-item">Another action </a>
							<a class="dropdown-item">Something else here</a>
							<div class="dropdown-divider"></div>
							<a class="dropdown-item">Separated link</a>
						</div>
					</div>
				</div>
				<div class="mb-2">
					<div class="btn-group dropup">
						<button class="btn btn-white">Dropup right</button>
						<button class="btn btn-white dropdown-toggle" data-toggle="dropdown"></button>
						<div class="dropdown-menu dropdown-menu-right" role="menu">
							<a class="dropdown-item">Action </a>
							<a class="dropdown-item">Another action </a>
							<a class="dropdown-item">Something else here</a>
							<div class="dropdown-divider"></div>
							<a class="dropdown-item">Separated link</a>
						</div>
					</div>
				</div>
			</div>
			<h6>Dropleft &amp; Dropright</h6>
			<div class="d-inline-flex mb-4 toolbar">
				<div class="mb-2">
					<div class="btn-group dropright">
						<button class="btn btn-white dropdown-toggle" data-toggle="dropdown">Dropright</button>
						<div class="dropdown-menu bg-dark" role="menu">
							<a class="dropdown-item">Action </a>
							<a class="dropdown-item">Another action </a>
							<a class="dropdown-item">Something else here</a>
							<div class="dropdown-divider"></div>
							<a class="dropdown-item">Separated link</a>
						</div>
					</div>
				</div>
				<div class="mb-2">
					<div class="btn-group dropright">
						<button class="btn btn-white">Split dropright</button>
						<button class="btn btn-white dropdown-toggle" data-toggle="dropdown"></button>
						<div class="dropdown-menu bg-dark" role="menu">
							<a class="dropdown-item">Action </a>
							<a class="dropdown-item">Another action </a>
							<a class="dropdown-item">Something else here</a>
							<div class="dropdown-divider"></div>
							<a class="dropdown-item">Separated link</a>
						</div>
					</div>
				</div>
				<div class="mb-2">
					<div class="btn-group dropleft">
						<button class="btn btn-white dropdown-toggle" data-toggle="dropdown">Dropleft</button>
						<div class="dropdown-menu bg-dark" role="menu">
							<a class="dropdown-item">Action </a>
							<a class="dropdown-item">Another action </a>
							<a class="dropdown-item">Something else here</a>
							<div class="dropdown-divider"></div>
							<a class="dropdown-item">Separated link</a>
						</div>
					</div>
				</div>
				<div class="mb-2">
					<div class="btn-group">
						<div class="btn-group dropleft">
							<button class="btn btn-white dropdown-toggle" data-toggle="dropdown"></button>
							<div class="dropdown-menu bg-dark" role="menu">
								<a class="dropdown-item">Action </a>
								<a class="dropdown-item">Another action </a>
								<a class="dropdown-item">Something else here</a>
								<div class="dropdown-divider"></div>
								<a class="dropdown-item">Separated link</a>
							</div>
						</div>
						<button class="btn btn-white">Split dropleft</button>
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