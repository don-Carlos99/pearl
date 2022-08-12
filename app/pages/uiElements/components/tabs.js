var appTabs = {
    html: `
    <div class="">
	<div class="page-hero page-container" id="page-hero">
		<div class="padding d-flex">
			<div class="page-title">
				<h2 class="text-md text-highlight">Tab</h2>
				<small class="text-muted">Toggle the visibility of content</small>
			</div>
			<div class="flex"></div>
			
		</div>
	</div>
	<div class="page-content page-container" id="page-content">
		<div class="padding">
			<div class="mb-5">
				<a class="btn text-align-auto btn-white" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">Link with href</a>
				<button class="btn text-align-auto btn-white" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">Button with data-target</button>
				<a class="btn text-align-auto btn-white" data-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">Toggle first element</a>
				<button class="btn text-align-auto btn-white" type="button" data-toggle="collapse" data-target="#multiCollapseExample2" aria-expanded="false" aria-controls="multiCollapseExample2">Toggle second element</button>
				<button class="btn text-align-auto btn-white" type="button" data-toggle="collapse" data-target=".multi-collapse" aria-expanded="false" aria-controls="multiCollapseExample1 multiCollapseExample2">Toggle both elements</button>
			</div>
			<div class="collapse" id="collapseExample">
				<div class="card card-body">
					<p>Ut rhoncus risus, sit ornare elementum nullam consectetur diam suspendisse eget justo, dignissim ultrices duis justo, vel tincidunt nibh facilisis</p>
				</div>
			</div>
			<div class="row">
				<div class="col">
					<div class="collapse multi-collapse" id="multiCollapseExample1">
						<div class="card card-body">
							<p>Pellentesque cursus lectus semper volutpat ut in enim faucibus sit et lectus faucibus diam turpis fermentum ornare diam tristique dui,</p>
						</div>
					</div>
				</div>
				<div class="col">
					<div class="collapse multi-collapse" id="multiCollapseExample2">
						<div class="card card-body">
							<p>Quisque dis condimentum vitae eu nam amet vestibulum auctor et est sem facilisi sed ut eu ante praesent felis ut</p>
						</div>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-md-6">
					<h6>Accordion</h6>
					<div id="accordion" class="mb-4">
						<div class="card mb-1">
							<div class="card-header no-border" id="headingOne">
								<a href="#" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">Collapsible Group Item #1</a>
							</div>
							<div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
								<div class="card-body">
									<p>Malesuada lobortis velit a nisl, pharetra tempor consectetur elementum faucibus metus, arcu at eu felis porttitor ultrices tristique viverra id</p>
								</div>
							</div>
						</div>
						<div class="card mb-1">
							<div class="card-header no-border" id="headingTwo">
								<a href="#" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">Collapsible Group Item #2</a>
							</div>
							<div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
								<div class="card-body">
									<p>Lorem sit amet ipsum, mauris malesuada praesent ut tellus elit magnis consequat pellentesque et vestibulum sapien cursus elit a, egestas</p>
								</div>
							</div>
						</div>
						<div class="card mb-1">
							<div class="card-header no-border" id="headingThree">
								<a href="#" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">Collapsible Group Item #3</a>
							</div>
							<div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
								<div class="card-body">
									<p>Mauris tellus eu, lectus pellentesque at neque purus mi sed dolor egestas in ut neque, platea in ipsum massa quis</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="col-md-6">
					<h6>Tabs</h6>
					<div class="card p-3">
						<div class="row">
							<div class="col-4">
								<div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
									<a class="nav-link active" data-toggle="pill" href="#v-pills-home" role="tab">Home</a>
									<a class="nav-link" data-toggle="pill" href="#v-pills-profile" role="tab">Profile</a>
									<a class="nav-link" data-toggle="pill" href="#v-pills-messages" role="tab">Messages</a>
									<a class="nav-link" data-toggle="pill" href="#v-pills-settings" role="tab">Settings</a>
									<a class="nav-link" data-toggle="pill" href="#v-pills-payment" role="tab">Payment</a>
								</div>
							</div>
							<div class="col-8">
								<div class="tab-content" id="v-pills-tabContent">
									<div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
										<p>Amet hendrerit feugiat cum eu odio massa condimentum arcu integer nibh congue senectus ac, feugiat condimentum mauris eget tortor, tincidunt</p>
									</div>
									<div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
										<p>Fames diam nunc senectus sed consequat sed non penatibus sed risus tellus fringilla sed suscipit est netus tempus vestibulum ac</p>
									</div>
									<div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
										<p>Sit at vitae, faucibus tempor odio cursus in cursus nec tincidunt eu quis malesuada fermentum, faucibus amet aliquet at maecenas</p>
									</div>
									<div class="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">
										<p>Tristique dui viverra sem purus mi neque, tincidunt dolor vitae morbi adipiscing quis eget nec malesuada convallis nisi sodales cras</p>
									</div>
									<div class="tab-pane fade" id="v-pills-payment" role="tabpanel" aria-labelledby="v-pills-settings-tab">
										<p>Massa dictum aliquam scelerisque ut quis semper vitae, et netus rutrum id sed est pretium in eget enim sed volutpat,</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<h6>Tab styles</h6>
			<div class="row">
				<div class="col-sm-6">
					<div class="b-b b-theme nav-active-theme mb-3">
						<ul class="nav nav-tabs" id="myTab" role="tablist">
							<li class="nav-item">
								<a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Home</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Profile</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Contact</a>
							</li>
						</ul>
					</div>
					<div class="tab-content mb-4">
						<div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
							<p>Ut purus, elementum leo mollis cursus blandit nisi, cursus purus dictum ultrices aliquet viverra duis velit id vitae eu convallis</p>
						</div>
						<div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
							<p>Nisi vestibulum leo nunc tortor, arcu elit facilisi porta sit vel nunc in parturient sit vestibulum ullamcorper dignissim pharetra feugiat</p>
						</div>
						<div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
							<p>Massa amet netus consequat, phasellus tortor faucibus blandit sit eget diam habitant lorem mattis amet quis placerat vestibulum tellus purus</p>
						</div>
					</div>
				</div>
				<div class="col-sm-6">
					<div class="mb-3">
						<ul class="nav nav-pills" id="myTab" role="tablist">
							<li class="nav-item">
								<a class="nav-link active" id="home-tab" data-toggle="tab" href="#home2" role="tab" aria-controls="home" aria-selected="true">Home</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile2" role="tab" aria-controls="profile" aria-selected="false">Profile</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" id="contact-tab" data-toggle="tab" href="#contact2" role="tab" aria-controls="contact" aria-selected="false">Contact</a>
							</li>
						</ul>
					</div>
					<div class="tab-content mb-4">
						<div class="tab-pane fade show active" id="home2" role="tabpanel" aria-labelledby="home-tab">
							<p>Morbi felis lacus, volutpat, id sit integer pellentesque velit sed phasellus ante diam mi lectus pellentesque in est integer lacinia</p>
						</div>
						<div class="tab-pane fade" id="profile2" role="tabpanel" aria-labelledby="profile-tab">
							<p>Mattis nullam vulputate parturient odio eu hendrerit metus volutpat, turpis fermentum eu est nunc aliquet dolor elit diam eleifend dui</p>
						</div>
						<div class="tab-pane fade" id="contact2" role="tabpanel" aria-labelledby="contact-tab">
							<p>Turpis enim sodales id nunc arcu at et quis tempus leo ac neque, in dapibus id nisi, eros mauris dapibus</p>
						</div>
					</div>
				</div>
				<div class="col-sm-6">
					<div class="card">
						<div class="b-b">
							<div class="nav-active-border b-primary bottom">
								<ul class="nav" id="myTab" role="tablist">
									<li class="nav-item">
										<a class="nav-link active" id="home-tab" data-toggle="tab" href="#home3" role="tab" aria-controls="home" aria-selected="true">Home</a>
									</li>
									<li class="nav-item">
										<a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile3" role="tab" aria-controls="profile" aria-selected="false">Profile</a>
									</li>
									<li class="nav-item">
										<a class="nav-link" id="contact-tab" data-toggle="tab" href="#contact3" role="tab" aria-controls="contact" aria-selected="false">Contact</a>
									</li>
								</ul>
							</div>
						</div>
						<div class="tab-content p-3">
							<div class="tab-pane fade show active" id="home3" role="tabpanel" aria-labelledby="home-tab">
								<p>Amet varius donec ut nunc et eros ultrices ac ut sed non sagittis nam semper neque massa, in tincidunt eget</p>
							</div>
							<div class="tab-pane fade" id="profile3" role="tabpanel" aria-labelledby="profile-tab">
								<p>Non quis risus congue scelerisque sit sit pulvinar semper auctor at nisl, faucibus tellus pellentesque tincidunt faucibus eu quis ut</p>
							</div>
							<div class="tab-pane fade" id="contact3" role="tabpanel" aria-labelledby="contact-tab">
								<p>Ultrices diam diam volutpat mauris vitae amet velit, ut non pretium augue nunc felis, est ornare viverra consectetur est nec,</p>
							</div>
						</div>
					</div>
				</div>
				<div class="col-sm-6">
					<div class="card">
						<div class="b-b">
							<div class="nav-active-border b-success top">
								<ul class="nav" id="myTab" role="tablist">
									<li class="nav-item">
										<a class="nav-link active" id="home-tab" data-toggle="tab" href="#home4" role="tab" aria-controls="home" aria-selected="true">Home</a>
									</li>
									<li class="nav-item">
										<a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile4" role="tab" aria-controls="profile" aria-selected="false">Profile</a>
									</li>
									<li class="nav-item">
										<a class="nav-link" id="contact-tab" data-toggle="tab" href="#contact4" role="tab" aria-controls="contact" aria-selected="false">Contact</a>
									</li>
								</ul>
							</div>
						</div>
						<div class="tab-content p-3">
							<div class="tab-pane fade show active" id="home4" role="tabpanel" aria-labelledby="home-tab">
								<p>Urna tortor at et, sed et velit dui mi gravida ultrices consequat eleifend tellus nisl sed fermentum feugiat fermentum, eget</p>
							</div>
							<div class="tab-pane fade" id="profile4" role="tabpanel" aria-labelledby="profile-tab">
								<p>Nibh at amet interdum a, libero, pharetra, pharetra convallis dignissim vitae, orci, diam id netus elementum consectetur libero pellentesque pretium</p>
							</div>
							<div class="tab-pane fade" id="contact4" role="tabpanel" aria-labelledby="contact-tab">
								<p>Turpis eu egestas eget aliquet sed id eu aliquet est, blandit ac, enim congue cras nunc nisl ut aliquam cras</p>
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