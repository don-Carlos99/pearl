var appFooter = {
    html: `
    <div class="d-flex p-3"><span class="text-sm text-muted flex">&copy; Copyright. BlackRuby &nbsp;</span>
    <div class="text-sm text-muted"> Version 1.1.1</div>
    </div>
    `,
    init: function() {
        document.getElementById("footer").innerHTML = this.html;
    }
}