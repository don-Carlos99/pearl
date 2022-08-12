var appTimeline = {
    html: `
    <div class="">
	<div class="page-hero page-container" id="page-hero">
		<div class="padding d-flex">
			<div class="page-title">
				<h2 class="text-md text-highlight">Timeline</h2>
				<small class="text-muted">Activities in history</small>
			</div>
			<div class="flex"></div>
			
		</div>
	</div>
	<div class="page-content page-container" id="page-content">
		<div class="padding">
			<div class="row">
				<div class="col-lg-6">
					<p>Basic</p>
					<div class="timeline p-4 block mb-4">
						<div class="tl-item active">
							<div class="tl-dot">
								<a class="tl-author" href="#">
									<span class="w-32 avatar circle gd-success">J</span>
								</a>
							</div>
							<div class="tl-content">
								<div class="">Fun project from this weekend. Both computer replicas are fully functional</div>
								<div class="tl-date text-muted mt-1">03/12 18</div>
							</div>
						</div>
						<div class="tl-item">
							<div class="tl-dot">
								<a class="tl-author" href="#">
									<span class="w-32 avatar circle gd-warning">B</span>
								</a>
							</div>
							<div class="tl-content">
								<div class="">Do you know which are the popular ones? Leave a comment and get to know more from professional developers</div>
								<div class="tl-date text-muted mt-1">1 day ago</div>
							</div>
						</div>
						<div class="tl-item">
							<div class="tl-dot">
								<a class="tl-author" href="#">
									<span class="w-32 avatar circle gd-danger">
										<img src="../assets/img/a10.jpg" alt=".">
										</span>
									</a>
								</div>
								<div class="tl-content">
									<div class="">Developers of 
										<a href="#">@iAI</a>, the AI assistant based on Free Software
									</div>
									<div class="tl-date text-muted mt-1">1 day ago</div>
								</div>
							</div>
							<div class="tl-item">
								<div class="tl-dot">
									<a class="tl-author" href="#">
										<span class="w-32 avatar circle gd-primary">
											<img src="../assets/img/a2.jpg" alt=".">
											</span>
										</a>
									</div>
									<div class="tl-content">
										<div class="">Can data lead us to making the best possible decisions?</div>
										<div class="tl-date text-muted mt-1">45 minutes ago</div>
									</div>
								</div>
								<div class="tl-item">
									<div class="tl-dot">
										<a class="tl-author" href="#">
											<span class="w-32 avatar circle gd-warning">G</span>
										</a>
									</div>
									<div class="tl-content">
										<div class="">
											<a href="#">@Netflix</a> hackathon
										</div>
										<div class="tl-date text-muted mt-1">25/12 18</div>
									</div>
								</div>
							</div>
						</div>
						<div class="col-lg-6">
							<p>Line</p>
							<div class="timeline p-4 block mb-4">
								<div class="tl-item active">
									<div class="tl-dot b-success"></div>
									<div class="tl-content">
										<div class="">Fun project from this weekend. Both computer replicas are fully functional</div>
										<div class="tl-date text-muted mt-1">03/12 18</div>
									</div>
								</div>
								<div class="tl-item">
									<div class="tl-dot b-info"></div>
									<div class="tl-content">
										<div class="">What if AI Could Uber the Health Care Industry?</div>
										<div class="tl-date text-muted mt-1">03/12 18</div>
									</div>
								</div>
								<div class="tl-item">
									<div class="tl-dot b-info"></div>
									<div class="tl-content">
										<div class="">Added to 
											<a href="#">@TUT</a> team
										</div>
										<div class="tl-date text-muted mt-1">2 days ago</div>
									</div>
								</div>
								<div class="tl-item">
									<div class="tl-dot b-warning"></div>
									<div class="tl-content">
										<div class="">Learn how to use 
											<a href="#">Google Analytics</a> to discover vital information about your readers.
										</div>
										<div class="tl-date text-muted mt-1">3 days ago</div>
									</div>
								</div>
								<div class="tl-item">
									<div class="tl-dot b-info"></div>
									<div class="tl-content">
										<div class="">
											<a href="#">Support</a> team updated the status
										</div>
										<div class="tl-date text-muted mt-1">5 hours ago</div>
									</div>
								</div>
							</div>
						</div>
						<div class="col-lg-6">
							<p>Alternative</p>
							<div class="timeline p-4 block mb-4">
								<div class="tl-item active">
									<div class="tl-dot">
										<a class="tl-author" href="#">
											<span class="w-32 avatar circle gd-success">
												<img src="../assets/img/a8.jpg" alt=".">
												</span>
											</a>
										</div>
										<div class="tl-date text-muted">02/11 18</div>
										<div class="tl-content">
											<div class="">The biggest software developer conference</div>
										</div>
									</div>
									<div class="tl-item">
										<div class="tl-dot">
											<a class="tl-author" href="#">
												<span class="w-32 avatar circle gd-warning">G</span>
											</a>
										</div>
										<div class="tl-date text-muted">25/12 18</div>
										<div class="tl-content">
											<div class="">
												<a href="#">@Netflix</a> hackathon
											</div>
										</div>
									</div>
									<div class="tl-item">
										<div class="tl-dot">
											<a class="tl-author" href="#">
												<span class="w-32 avatar circle gd-primary">
													<img src="../assets/img/a3.jpg" alt=".">
													</span>
												</a>
											</div>
											<div class="tl-date text-muted">1 hour ago</div>
											<div class="tl-content">
												<div class="">
													<a href="#">@NextUI</a> submit a ticket request
												</div>
											</div>
										</div>
										<div class="tl-item">
											<div class="tl-dot">
												<a class="tl-author" href="#">
													<span class="w-32 avatar circle gd-info">K</span>
												</a>
											</div>
											<div class="tl-date text-muted">20 minutes ago</div>
											<div class="tl-content">
												<div class="">Prepare the documentation for the 
													<a href="#">Fitness app</a>
												</div>
											</div>
										</div>
										<div class="tl-item">
											<div class="tl-dot">
												<a class="tl-author" href="#">
													<span class="w-32 avatar circle gd-warning">
														<img src="../assets/img/a5.jpg" alt=".">
														</span>
													</a>
												</div>
												<div class="tl-date text-muted">3 days ago</div>
												<div class="tl-content">
													<div class="">Learn how to use 
														<a href="#">Google Analytics</a> to discover vital information about your readers.
													</div>
												</div>
											</div>
										</div>
									</div>
									<div class="col-lg-6">
										<p>Active</p>
										<div class="timeline p-4 block mb-4">
											<div class="tl-item active">
												<div class="tl-dot"></div>
												<div class="tl-date text-muted">25/12 18</div>
												<div class="tl-content">
													<div class="">
														<a href="#">@Netflix</a> hackathon
													</div>
												</div>
											</div>
											<div class="tl-item">
												<div class="tl-dot"></div>
												<div class="tl-date text-muted">3 weeks ago</div>
												<div class="tl-content">
													<div class="">Thanks! Awesome to see good support on Twitter</div>
												</div>
											</div>
											<div class="tl-item">
												<div class="tl-dot"></div>
												<div class="tl-date text-muted">03/12 18</div>
												<div class="tl-content">
													<div class="">Fun project from this weekend. Both computer replicas are fully functional</div>
												</div>
											</div>
											<div class="tl-item">
												<div class="tl-dot"></div>
												<div class="tl-date text-muted">2 days ago</div>
												<div class="tl-content">
													<div class="">Added to 
														<a href="#">@TUT</a> team
													</div>
												</div>
											</div>
											<div class="tl-item">
												<div class="tl-dot"></div>
												<div class="tl-date text-muted">1 day ago</div>
												<div class="tl-content">
													<div class="">Developers of 
														<a href="#">@iAI</a>, the AI assistant based on Free Software
													</div>
												</div>
											</div>
											<div class="tl-item">
												<div class="tl-dot"></div>
												<div class="tl-date text-muted">20 minutes ago</div>
												<div class="tl-content">
													<div class="">Prepare the documentation for the 
														<a href="#">Fitness app</a>
													</div>
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