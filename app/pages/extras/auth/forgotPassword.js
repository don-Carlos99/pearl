var appForgotPassword = {
    html: `
    <div class="d-flex flex-column flex">
	<div class="row no-gutters h-100">
		<div class="col-md-6 bg-primary r-l" style="">
			<div class="p-3 p-md-5 d-flex flex-column h-100">
				<h4 class="mb-3 text-white">Basik</h4>
				<div class="text-fade">Bootstrap 4 Web Application</div>
				<div class="d-flex flex align-items-center justify-content-center"></div>
				<div class="d-flex text-sm text-fade">
					<a href="index.html" class="text-white">About</a>
					<span class="flex"></span>
					<a href="#" class="text-white mx-1">Terms</a>
					<a href="#" class="text-white mx-1">Policy</a>
				</div>
			</div>
		</div>
		<div class="col-md-6">
			<div id="content-body">
				<div class="p-3 p-md-5">
					<div>
						<h5>Forgot your password?</h5>
						<p class="text-muted my-3">Enter your email below and we will send you instructions on how to change your password.</p>
					</div>
					<form name="reset" class="py-5 my-md-5">
						<div class="form-group">
							<input type="email" placeholder="Email" class="form-control" required="">
							</div>
							<button type="submit" class="btn btn-primary btn-block">Send</button>
						</form>
						<div class="pt-1">Return to 
							<a href="signin.1.html" class="text-primary font-weight-bold" data-pjax-state="">Sign in</a>
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