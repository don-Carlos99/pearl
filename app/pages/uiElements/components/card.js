var appCard = {
    html: `
    <div class="">
	<div class="page-hero page-container" id="page-hero">
		<div class="padding d-flex">
			<div class="page-title">
				<h2 class="text-md text-highlight">Card</h2>
				<small class="text-muted">A flexible and extensible content container</small>
			</div>
			<div class="flex"></div>
			
		</div>
	</div>
	<div class="page-content page-container" id="page-content">
		<div class="padding">
			<div class="row">
				<div class="col-sm-4">
					<div class="card">
						<div class="media media-2x1 gd-primary">
							<a class="media-content" style="background-image:url()">
								<strong class="text-fade">Card media</strong>
							</a>
						</div>
						<div class="card-body">
							<h5 class="card-title">Card title</h5>
							<p class="card-text">Some quick example text to build on the card title and make up the card's content.</p>
						</div>
						<ul class="list-group list-group-flush">
							<li class="list-group-item">Cras justo odio</li>
							<li class="list-group-item">Vestibulum at eros</li>
						</ul>
						<div class="card-body">
							<a href="#" class="card-link">Card link</a>
							<a href="#" class="card-link">Another link</a>
						</div>
					</div>
				</div>
				<div class="col-sm-8">
					<div class="card">
						<div class="card-header">Featured</div>
						<div class="card-body">
							<h5 class="card-title">Special title treatment</h5>
							<p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
							<a href="#" class="btn btn-primary">Go somewhere</a>
						</div>
					</div>
					<div class="card text-center">
						<div class="card-header">
							<ul class="nav nav-pills card-header-pills no-border">
								<li class="nav-item">
									<a class="nav-link active" href="#">Active</a>
								</li>
								<li class="nav-item">
									<a class="nav-link" href="#">Link</a>
								</li>
								<li class="nav-item">
									<a class="nav-link disabled" href="#">Disabled</a>
								</li>
							</ul>
						</div>
						<div class="card-body">
							<h5 class="card-title">Special title treatment</h5>
							<p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
							<a href="#" class="btn btn-primary">Go somewhere</a>
						</div>
					</div>
				</div>
				<div class="col-sm-12">
					<div class="card-columns">
						<div class="card">
							<div class="media media-4x3 gd-info">
								<a class="media-content" style="background-image:url()">
									<strong class="text-fade">Card media</strong>
								</a>
							</div>
							<div class="card-body">
								<h5 class="card-title">Card title that wraps to a new line</h5>
								<p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
							</div>
						</div>
						<div class="card p-3">
							<blockquote class="blockquote mb-0 card-body">
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
								<footer class="blockquote-footer">
									<small class="text-muted">Someone famous in 
										<cite title="Source Title">Source Title</cite>
									</small>
								</footer>
							</blockquote>
						</div>
						<div class="card">
							<div class="media media-2x1">
								<a class="media-content" style="background-image:url()">
									<strong class="text-fade">Card media</strong>
								</a>
							</div>
							<div class="card-body">
								<h5 class="card-title">Card title</h5>
								<p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
								<p class="card-text">
									<small class="text-muted">Last updated 3 mins ago</small>
								</p>
							</div>
						</div>
						<div class="card bg-primary text-white text-center p-3">
							<blockquote class="blockquote mb-0">
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat.</p>
								<footer class="text-fade text-sm">Someone famous in 
									<cite title="Source Title">Source Title</cite>
								</footer>
							</blockquote>
						</div>
						<div class="card text-center">
							<div class="card-body">
								<h5 class="card-title">Card title</h5>
								<p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
								<p class="card-text">
									<small class="text-muted">Last updated 3 mins ago</small>
								</p>
							</div>
						</div>
						<div class="card">
							<div class="media media-16x9">
								<a class="media-content" style="background-image:url()">
									<strong class="text-fade">Card media</strong>
								</a>
							</div>
						</div>
						<div class="card p-3 text-right">
							<blockquote class="blockquote mb-0">
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
								<footer class="text-sm">
									<small class="text-muted">Someone famous in 
										<cite title="Source Title">Source Title</cite>
									</small>
								</footer>
							</blockquote>
						</div>
						<div class="card">
							<div class="card-body">
								<h5 class="card-title">Card title</h5>
								<p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
								<p class="card-text">
									<small class="text-muted">Last updated 3 mins ago</small>
								</p>
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