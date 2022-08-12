var appGrid = {
    html: `
    <div class="">
	<div class="page-hero page-container" id="page-hero">
		<div class="padding d-flex">
			<div class="page-title">
				<h2 class="text-md text-highlight">Grid</h2>
				<small class="text-muted">Powerful mobile-first flexbox grid</small>
			</div>
			<div class="flex"></div>
			
		</div>
	</div>
	<div class="page-content page-container" id="page-content">
		<div class="padding">
			<h6 class="mb-3">Stacked-to-horizontal</h6>
			<div class="row">
				<div class="col-md-2">
					<div class="card p-3">.col-md-2</div>
				</div>
				<div class="col-md-2">
					<div class="card p-3">.col-md-2</div>
				</div>
				<div class="col-md-2">
					<div class="card p-3">.col-md-2</div>
				</div>
				<div class="col-md-2">
					<div class="card p-3">.col-md-2</div>
				</div>
				<div class="col-md-2">
					<div class="card p-3">.col-md-2</div>
				</div>
				<div class="col-md-2">
					<div class="card p-3">.col-md-2</div>
				</div>
			</div>
			<div class="row">
				<div class="col-md-8">
					<div class="card p-3">.col-md-8</div>
				</div>
				<div class="col-md-4">
					<div class="card p-3">.col-md-4</div>
				</div>
			</div>
			<div class="row">
				<div class="col-md-4">
					<div class="card p-3">.col-md-4</div>
				</div>
				<div class="col-md-4">
					<div class="card p-3">.col-md-4</div>
				</div>
				<div class="col-md-4">
					<div class="card p-3">.col-md-4</div>
				</div>
			</div>
			<div class="row">
				<div class="col-md-6">
					<div class="card p-3">.col-md-6</div>
				</div>
				<div class="col-md-6">
					<div class="card p-3">.col-md-6</div>
				</div>
			</div>
			<h6 class="mb-3">Mobile and desktop</h6>
			<div class="row">
				<div class="col-12 col-md-8">
					<div class="card p-3">.col-12 .col-md-8</div>
				</div>
				<div class="col-6 col-md-4">
					<div class="card p-3">.col-6 .col-md-4</div>
				</div>
			</div>
			<div class="row">
				<div class="col-6 col-md-4">
					<div class="card p-3">.col-6 .col-md-4</div>
				</div>
				<div class="col-6 col-md-4">
					<div class="card p-3">.col-6 .col-md-4</div>
				</div>
				<div class="col-6 col-md-4">
					<div class="card p-3">.col-6 .col-md-4</div>
				</div>
			</div>
			<div class="row">
				<div class="col-6">
					<div class="card p-3">.col-6</div>
				</div>
				<div class="col-6">
					<div class="card p-3">.col-6</div>
				</div>
			</div>
			<h6 class="mb-3">Mobile, tablet, desktops</h6>
			<div class="row">
				<div class="col-12 col-sm-6 col-md-8">
					<div class="card p-3">.col-12 .col-sm-6 .col-md-8</div>
				</div>
				<div class="col-6 col-md-4">
					<div class="card p-3">.col-6 .col-md-4</div>
				</div>
			</div>
			<div class="row">
				<div class="col-6 col-sm-4">
					<div class="card p-3">.col-6 .col-sm-4</div>
				</div>
				<div class="col-6 col-sm-4">
					<div class="card p-3">.col-6 .col-sm-4</div>
				</div>
				<div class="clearfix visible-xs-block"></div>
				<div class="col-6 col-sm-4">
					<div class="card p-3">.col-6 .col-sm-4</div>
				</div>
			</div>
			<h6 class="mb-3">Offsetting columns</h6>
			<div class="row">
				<div class="col-md-4">
					<div class="card p-3">.col-md-4</div>
				</div>
				<div class="col-md-4 ml-auto">
					<div class="card p-3">.col-md-4 .ml-auto</div>
				</div>
			</div>
			<div class="row">
				<div class="col-md-3 ml-auto">
					<div class="card p-3">.col-md-3 .ml-auto</div>
				</div>
				<div class="col-md-3 ml-auto">
					<div class="card p-3">.col-md-3 .ml-auto</div>
				</div>
			</div>
			<div class="row">
				<div class="col-md-6 ml-auto">
					<div class="card p-3">.col-md-6 .ml-auto</div>
				</div>
			</div>
			<h6 class="mb-3">Column ordering</h6>
			<div class="row">
				<div class="col-md-9 order-md-2">
					<div class="card p-3">.col-md-9 .order-md-2</div>
				</div>
				<div class="col-md-3 order-md-1">
					<div class="card p-3">.col-md-3 .order-md-1</div>
				</div>
			</div>
			<h6 class="mb-3">Grid options</h6>
			<p>See how aspects of the Bootstrap grid system work across multiple devices with a handy table.</p>
			<table class="table table-bordered table-striped bg-white">
				<thead>
					<tr>
						<th></th>
						<th class="text-center">Extra small
							<br>
								<small>&lt;576px</small>
							</th>
							<th class="text-center">Small
								<br>
									<small>≥576px</small>
								</th>
								<th class="text-center">Medium
									<br>
										<small>≥768px</small>
									</th>
									<th class="text-center">Large
										<br>
											<small>≥992px</small>
										</th>
										<th class="text-center">Extra large
											<br>
												<small>≥1200px</small>
											</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<th class="text-nowrap" scope="row">Max container width</th>
											<td>None (auto)</td>
											<td>540px</td>
											<td>720px</td>
											<td>960px</td>
											<td>1140px</td>
										</tr>
										<tr>
											<th class="text-nowrap" scope="row">Class prefix</th>
											<td>
												<code>.col-</code>
											</td>
											<td>
												<code>.col-sm-</code>
											</td>
											<td>
												<code>.col-md-</code>
											</td>
											<td>
												<code>.col-lg-</code>
											</td>
											<td>
												<code>.col-xl-</code>
											</td>
										</tr>
										<tr>
											<th class="text-nowrap" scope="row"># of columns</th>
											<td colspan="5">12</td>
										</tr>
										<tr>
											<th class="text-nowrap" scope="row">Gutter width</th>
											<td colspan="5">30px (15px on each side of a column)</td>
										</tr>
										<tr>
											<th class="text-nowrap" scope="row">Nestable</th>
											<td colspan="5">Yes</td>
										</tr>
										<tr>
											<th class="text-nowrap" scope="row">Column ordering</th>
											<td colspan="5">Yes</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
    `,
    init: function() {
        document.getElementById('content').innerHTML = this.html;
    }
}