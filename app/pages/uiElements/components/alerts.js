var appAlerts = {
    html: `
    <div class="">
	<div class="page-hero page-container" id="page-hero">
		<div class="padding d-flex">
			<div class="page-title">
				<h2 class="text-md text-highlight">Alert</h2>
				<small class="text-muted">Feedback messages for typical user actions</small>
			</div>
			<div class="flex"></div>
			
		</div>
	</div>
	<div class="page-content page-container" id="page-content">
		<div class="padding">
			<div class="row">
				<div class="col-12">
					<div class="alert bg-success mb-5 py-4" role="alert">
						<div class="d-flex">
							<svg
								xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check-circle">
								<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
								<polyline points="22 4 12 14.01 9 11.01"></polyline>
							</svg>
							<div class="px-3">
								<h5 class="alert-heading">Well done!</h5>
								<p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
								<p>Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
								<a href="#" class="btn text-white" data-dismiss="alert" aria-label="Close">Dismiss</a>
								<a href="#" class="btn btn-white mx-1">Continue 
									<svg
										xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-right">
										<line x1="5" y1="12" x2="19" y2="12"></line>
										<polyline points="12 5 19 12 12 19"></polyline>
									</svg>
								</a>
							</div>
						</div>
					</div>
				</div>
				<div class="col-md-6">
					<h6>Icon</h6>
					<div class="alert alert-info" role="alert">
						<svg
							xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-info">
							<circle cx="12" cy="12" r="10"></circle>
							<line x1="12" y1="16" x2="12" y2="12"></line>
							<line x1="12" y1="8" x2="12" y2="8"></line>
						</svg>
						<span class="mx-2">Admin sent you a message</span>
					</div>
					<div class="alert alert-success" role="alert">
						<svg
							xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check">
							<polyline points="20 6 9 17 4 12"></polyline>
						</svg>
						<span class="mx-2">Profile have been updated</span>
					</div>
					<div class="alert alert-warning" role="alert">
						<svg
							xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-alert-circle">
							<circle cx="12" cy="12" r="10"></circle>
							<line x1="12" y1="8" x2="12" y2="12"></line>
							<line x1="12" y1="16" x2="12" y2="16"></line>
						</svg>
						<span class="mx-2">Your payment have not been finished</span>
					</div>
					<h6>Dismiss</h6>
					<div class="alert alert-info alert-dismissible fade show" role="alert">
						<div class="d-flex">
							<span class="w-40 avatar circle gd-info">G</span>
							<div class="mx-3">
								<strong>Holy guacamole!</strong> You should check in on some of those fields below.
							</div>
						</div>
						<button type="button" class="close" data-dismiss="alert" aria-label="Close">
							<span aria-hidden="true">×</span>
						</button>
					</div>
					<h6>Link</h6>
					<div class="alert alert-primary" role="alert">
						<div class="d-flex">
							<svg
								xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-external-link">
								<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
								<polyline points="15 3 21 3 21 9"></polyline>
								<line x1="10" y1="14" x2="21" y2="3"></line>
							</svg>
							<div class="mx-2">This is 
								<a href="#" class="alert-link">an example link</a>. Give it a click if you like.
							</div>
						</div>
					</div>
				</div>
				<div class="col-md-6">
					<h6>Color</h6>
					<div class="alert alert-primary" role="alert">This is a primary alert</div>
					<div class="alert alert-secondary" role="alert">This is a secondary alert</div>
					<div class="alert alert-info" role="alert">This is a info alert</div>
					<div class="alert alert-success" role="alert">This is a success alert</div>
					<div class="alert alert-warning" role="alert">This is a warning alert</div>
					<div class="alert alert-danger" role="alert">This is a danger alert</div>
					<div class="alert alert-light" role="alert">This is a light alert</div>
					<div class="alert alert-dark" role="alert">This is a dark alert</div>
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