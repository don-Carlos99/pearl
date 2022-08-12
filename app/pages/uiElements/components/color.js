var appColor = {
    html: `
    <div class="">
	<div class="page-hero page-container" id="page-hero">
		<div class="padding d-flex">
			<div class="page-title">
				<h2 class="text-md text-highlight">Color</h2>
				<small class="text-muted">Convey meaning through color with a handful of color utility classes</small>
			</div>
			<div class="flex"></div>
			
		</div>
	</div>
	<div class="page-content page-container" id="page-content">
		<div class="padding">
			<div class="mb-4">
				<p>
					<strong>Background colors</strong>
				</p>
				<p class="text-muted">.bg-primary[primary, secondary, info, success, warning, danger, light, dark, white]</p>
				<div class="d-flex">
					<div class="w-32 circle bg-primary" data-toggle="tooltip" title="" data-original-title="Primary"></div>
					<div class="w-32 circle bg-secondary" data-toggle="tooltip" title="" data-original-title="Secondary"></div>
					<div class="w-32 circle bg-info" data-toggle="tooltip" title="" data-original-title="Info"></div>
					<div class="w-32 circle bg-success" data-toggle="tooltip" title="" data-original-title="Success"></div>
					<div class="w-32 circle bg-warning" data-toggle="tooltip" title="" data-original-title="Warning">
						<div class="hover-show">Warning</div>
					</div>
					<div class="w-32 circle bg-danger" data-toggle="tooltip" title="" data-original-title="Danger">
						<div class="hover-show">Danger</div>
					</div>
					<div class="w-32 circle bg-light" data-toggle="tooltip" title="" data-original-title="Light">
						<div class="hover-show">Light</div>
					</div>
					<div class="w-32 circle bg-dark" data-toggle="tooltip" title="" data-original-title="Dark">
						<div class="hover-show">Dark</div>
					</div>
					<div class="w-32 circle bg-white" data-toggle="tooltip" title="" data-original-title="White">
						<div class="hover-show">White</div>
					</div>
				</div>
			</div>
			<div class="mb-4">
				<p>
					<strong>Color palette</strong>
				</p>
				<p class="text-muted">Material Design color palette</p>
				<div class="box-body">
					<div class="d-flex flex-nowrap">
						<div class="w-32 circle red" data-toggle="tooltip" title="" data-original-title="Red"></div>
						<div class="w-32 circle pink" data-toggle="tooltip" title="" data-original-title="Pink"></div>
						<div class="w-32 circle purple" data-toggle="tooltip" title="" data-original-title="Purple"></div>
						<div class="w-32 circle deep-purple" data-toggle="tooltip" title="" data-original-title="Deep-purple"></div>
						<div class="w-32 circle indigo" data-toggle="tooltip" title="" data-original-title="Indigo"></div>
						<div class="w-32 circle blue" data-toggle="tooltip" title="" data-original-title="Blue"></div>
						<div class="w-32 circle light-blue" data-toggle="tooltip" title="" data-original-title="Light-blue"></div>
						<div class="w-32 circle cyan" data-toggle="tooltip" title="" data-original-title="Cyan"></div>
						<div class="w-32 circle teal" data-toggle="tooltip" title="" data-original-title="Teal"></div>
						<div class="w-32 circle green" data-toggle="tooltip" title="" data-original-title="Green"></div>
						<div class="w-32 circle light-green" data-toggle="tooltip" title="" data-original-title="Light-green"></div>
						<div class="w-32 circle lime" data-toggle="tooltip" title="" data-original-title="Lime"></div>
						<div class="w-32 circle yellow" data-toggle="tooltip" title="" data-original-title="Yellow"></div>
						<div class="w-32 circle amber" data-toggle="tooltip" title="" data-original-title="Amber"></div>
						<div class="w-32 circle orange" data-toggle="tooltip" title="" data-original-title="Orange"></div>
						<div class="w-32 circle deep-orange" data-toggle="tooltip" title="" data-original-title="Deep-orange"></div>
						<div class="w-32 circle brown" data-toggle="tooltip" title="" data-original-title="Brown"></div>
						<div class="w-32 circle blue-grey" data-toggle="tooltip" title="" data-original-title="Blue-grey"></div>
						<div class="w-32 circle grey" data-toggle="tooltip" title="" data-original-title="Grey"></div>
					</div>
				</div>
			</div>
			<div class="mb-4">
				<p>
					<strong>Text options</strong>
				</p>
				<p class="text-muted">text-primary[primary, info, success, warning, danger]</p>
				<div class="">
					<span class="text-primary mr-2">text-primary</span>
					<span class="text-info mr-2">text-info</span>
					<span class="text-success mr-2">text-success</span>
					<span class="text-warning mr-2">text-warning</span>
					<span class="text-danger mr-2">text-danger</span>
					<span class="text-dark mr-2">text-dark</span>
					<span class="text-white mr-2">text-white</span>
				</div>
			</div>
			<div class="mb-4">
				<p>
					<strong>Border options</strong>
				</p>
				<p class="text-muted">
					<strong>color:</strong> b-t[top, right, bottom, left]-primary[primary, info, success, warning, danger, accent, dark]
					<br>
						<strong>width:</strong> b-t[top, right, bottom, left]-2x[2x, 3x, 4x, 5x]
					</p>
					<div class="mb-3 d-inline-flex flex-wrap">
						<div class="card p-3 r-3x b-t b-t-primary mr-3">b-t-primary</div>
						<div class="card p-3 r-3x b-r b-r-info mr-3">b-r-info</div>
						<div class="card p-3 r-3x b-b b-b-success mr-3">b-b-success</div>
						<div class="card p-3 r-3x b-l b-l-warning mr-3">b-l-warning</div>
						<div class="card p-3 r-3x b-t b-t-danger b-t-2x mr-3">b-t-2x</div>
						<div class="card p-3 r-3x b-r b-r-dark b-r-3x mr-3">b-r-3x</div>
						<div class="card p-3 r-3x b-b b-b-light b-b-4x mr-3">b-b-4x</div>
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