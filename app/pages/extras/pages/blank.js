var appBlank = {
    html: `
    <div>
        <div class="page-hero page-container" id="page-hero">
            <div class="padding d-flex">
                <div class="page-title">
                    <h2 class="text-md text-highlight">Blank</h2>
                    <small class="text-muted">Start application in a blank page</small>
                </div>
            </div>
        </div>
        <div class="page-content page-container" id="page-content">
        </div>
    </div>
    `,
    init: function() {
        document.getElementById('content').innerHTML = this.html;
    }
}