var appTooltip = {
    html: `
    <div class="">
	<div class="page-hero page-container" id="page-hero">
		<div class="padding d-flex">
			<div class="page-title">
				<h2 class="text-md text-highlight">Tooltip</h2>
				<small class="text-muted">Manage poppers in web applications</small>
			</div>
			<div class="flex"></div>
			
		</div>
	</div>
	<div class="page-content page-container" id="page-content">
		<div class="padding">
			<h6>Popovers</h6>
			<p class="text-muted">Four options are available: top, right, bottom, and left aligned.</p>
			<div class="d-flex flex-wrap mb-3">
				<div class="popover bs-popover-top pos-rlt mr-4" style="z-index: 1">
					<div class="arrow" style="left: 50%"></div>
					<h3 class="popover-header">Popover top</h3>
					<div class="popover-body">
						<p>Sed posuere consectetur est at lobortis. Aenean eu leo quam lacinia quam venenatis.</p>
					</div>
				</div>
				<div class="popover bs-popover-bottom pos-rlt mr-3 mb-2" style="z-index: 1">
					<div class="arrow" style="left: 50%"></div>
					<h3 class="popover-header">Popover bottom</h3>
					<div class="popover-body">
						<p>Sed posuere consectetur est at lobortis. Aenean eu leo quam lacinia quam venenatis.</p>
					</div>
				</div>
			</div>
			<div class="d-flex flex-wrap align-items-end">
				<div class="popover bs-popover-left pos-rlt mr-3 mb-3" style="z-index: 1">
					<div class="arrow" style="top: 50%"></div>
					<h3 class="popover-header">Popover left</h3>
					<div class="popover-body">
						<p>Sed posuere consectetur est at lobortis. Aenean eu leo quam lacinia quam venenatis.</p>
					</div>
				</div>
				<div class="popover bs-popover-right pos-rlt mr-3 mb-3" style="z-index: 1">
					<div class="arrow" style="top: 50%"></div>
					<h3 class="popover-header">Popover right</h3>
					<div class="popover-body">
						<p>Sed posuere consectetur est at lobortis. Aenean eu leo quam lacinia quam venenatis.</p>
					</div>
				</div>
			</div>
			<p class="text-muted">Live demo</p>
			<button type="button" class="btn btn-white" data-toggle="popover" data-trigger="focus" title="" data-content="And here's some amazing content. It's very engaging. Right?" data-original-title="Popover title">Click to toggle popover</button>
			<button type="button" class="btn btn-white" data-toggle="popover" data-trigger="hover" data-html="true" data-content="
				<a href='#'>Abc</a> And here's some amazing content. It's very engaging. Right?" data-original-title="" title="">Hover to show popover
			</button>
			<p class="text-muted mt-3">Fore directions</p>
			<div class="mb-4">
				<button type="button" class="btn btn-white" data-container="body" data-toggle="popover" data-placement="top" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus." data-original-title="" title="">Popover on top</button>
				<button type="button" class="btn btn-white" data-container="body" data-toggle="popover" data-placement="right" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus." data-original-title="" title="">Popover on right</button>
				<button type="button" class="btn btn-white" data-container="body" data-toggle="popover" data-placement="bottom" data-content="Vivamus
    sagittis lacus vel augue laoreet rutrum faucibus." data-original-title="" title="">Popover on bottom</button>
				<button type="button" class="btn btn-white" data-container="body" data-toggle="popover" data-placement="left" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus." data-original-title="" title="">Popover on left</button>
			</div>
			<h6>Tooltips</h6>
			<p class="text-muted">Four options are available: top, right, bottom, and left aligned.</p>
			<div class="mb-3">
				<button type="button" class="btn btn-white" data-toggle="tooltip" data-placement="top" title="" data-original-title="Tooltip on top">Tooltip on top</button>
				<button type="button" class="btn btn-white" data-toggle="tooltip" data-placement="right" title="" data-original-title="Tooltip on right">Tooltip on right</button>
				<button type="button" class="btn btn-white" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Tooltip on bottom">Tooltip on bottom</button>
				<button type="button" class="btn btn-white" data-toggle="tooltip" data-placement="left" title="" data-original-title="Tooltip on left">Tooltip on left</button>
			</div>
		</div>
	</div>
</div>
    `,
    init: function() {
        document.getElementById('content').innerHTML = this.html;
    }
}