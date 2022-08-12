var appFileUpload = {
    html: `
    <div class="">
	<div class="page-hero page-container" id="page-hero">
		<div class="padding d-flex">
			<div class="page-title">
				<h2 class="text-md text-highlight">Dropzone</h2>
				<small class="text-muted">Drag and drop file uploader</small>
			</div>
			<div class="flex"></div>
			
		</div>
	</div>
	<div class="page-content page-container" id="page-content">
		<div class="padding">
			<p class="text-muted">DropzoneJS is an open source library that provides drag’n’drop file uploads with image previews.</p>
			<form action="api/dropzone" class="dropzone white b-a b-3x b-dashed b-primary p-a rounded p-5 text-center">
				<div class="dz-message">
					<h4 class="my-4">Drop files here or click to upload.</h4>
					<span class="text-muted d-block mb-4">(This is just a demo dropzone. Selected files are 
						<strong>not</strong> actually uploaded.)
					</span>
				</div>
			</form>
		</div>
	</div>
</div>
    `,
    init: function() {
        document.getElementById('content').innerHTML = this.html;
    }
}