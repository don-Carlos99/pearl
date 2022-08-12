var appLockScreen = {
    html: `
    <div id="ajax-content" class="dark h-v d-flex flex align-items-center">
	<div class="mx-auto w-xl w-auto-xs animate fadeIn text-center">
		<div class="mb-3">
			<img src="../assets/img/a8.jpg" class="w-72 circle">
				<div class="mt-3 font-bold">Jacqueline Reid</div>
			</div>
			<div class="md-form-group">
				<input type="password" class="md-input text-center">
					<label class="d-block w-100">Your Password</label>
				</div>
				<div class="mt-3">
					<a href="dashboard.html" class="btn btn-rounded btn-primary">Unlock</a>
				</div>
			</div>
		</div>
    `,
    init: function() {
        document.getElementById('content').innerHTML = this.html;
    }
}