var appSettings = {
    html: `
    <div>
    <div class="page-hero page-container" id="page-hero">
        <div class="padding d-flex">
            <div class="page-title">
                <h2 class="text-md text-highlight">Setting</h2><small class="text-muted">Configure the things</small></div>
            <div class="flex"></div>
            
        </div>
    </div>
    <div class="page-content page-container" id="page-content">
        <div class="padding">
            <div id="accordion">
                <p class="text-muted"><strong>Account</strong></p>
                <div class="card">
                    <div class="d-flex align-items-center px-4 py-3 pointer" data-toggle="collapse" data-parent="#accordion" data-target="#c_1">
                        <div><span class="w-48 avatar circle bg-info-lt" data-toggle-class="loading"><img src="../assets/img/a9.jpg" alt="."></span></div>
                        <div class="mx-3 d-none d-md-block"><strong>Jacqueline Reid</strong>
                            <div class="text-sm text-muted">jacqueline@company.co</div>
                        </div>
                        <div class="flex"></div>
                        <div class="mx-3"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg></div>
                        <div><a href="signin.1.html" class="text-prmary text-sm">Sign Out</a></div>
                    </div>
                    <div class="collapse p-4" id="c_1">
                        <form role="form">
                            <div class="form-group"><label>Profile picture</label>
                                <div class="custom-file"><input type="file" class="custom-file-input" id="customFile"><label class="custom-file-label" for="customFile">Choose file</label></div>
                            </div>
                            <div class="form-group"><label>First Name</label><input type="text" class="form-control"></div>
                            <div class="form-group"><label>Last Name</label><input type="text" class="form-control"></div><button type="submit" class="btn btn-primary mt-2">Update</button></form>
                    </div>
                    <div class="d-flex align-items-center px-4 py-3 b-t"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-refresh-cw"><polyline points="23 4 23 10 17 10"></polyline><polyline points="1 20 1 14 7 14"></polyline><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path></svg>
                        <div
                            class="px-3">
                            <div>Sync</div>
                            <div class="text-sm text-muted">On - Sync everything</div>
                    </div>
                    <div class="flex"></div><span><label class="ui-switch ui-switch-md"><input type="checkbox" checked="checked"> <i></i></label></span></div>
                <div class="d-flex align-items-center px-4 py-3 b-t pointer" data-toggle="collapse" data-parent="#accordion" data-target="#c_2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-lock"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                    <div
                        class="px-3">
                        <div>Password</div>
                </div>
                <div class="flex"></div>
                <div><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg></div>
            </div>
            <div class="collapse p-4" id="c_2">
                <form role="form">
                    <div class="form-group"><label>Old Password</label><input type="password" class="form-control"></div>
                    <div class="form-group"><label>New Password</label><input type="password" class="form-control"></div>
                    <div class="form-group"><label>New Password Again</label><input type="password" class="form-control"></div><button type="submit" class="btn btn-primary mt-2">Update</button></form>
            </div>
            <div class="d-flex align-items-center px-4 py-3 b-t pointer" data-toggle="collapse" data-parent="#accordion" data-target="#c_3"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-credit-card"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line></svg>
                <div
                    class="px-3">
                    <div>Payment methods</div>
            </div>
            <div class="flex"></div>
            <div><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg></div>
        </div>
        <div class="collapse p-4" id="c_3">
            <form role="form">
                <div class="form-group"><label>Paypal account</label><input type="input" class="form-control"></div><button type="submit" class="btn btn-primary mt-2">Update</button></form>
        </div>
        <div class="d-flex align-items-center px-4 py-3 b-t pointer" data-toggle="collapse" data-parent="#accordion" data-target="#c_4"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-map-pin"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
            <div
                class="px-3">
                <div>Addresses and more</div>
        </div>
        <div class="flex"></div>
        <div><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg></div>
    </div>
    <div class="collapse p-4" id="c_4">
        <form role="form">
            <div class="form-group"><label>URL</label><input type="text" class="form-control"></div>
            <div class="form-group"><label>Company</label><input type="text" class="form-control"></div>
            <div class="form-group"><label>Location</label><input type="text" class="form-control"></div><button type="submit" class="btn btn-primary mt-2">Update</button></form>
    </div>
</div>
<p class="text-muted"><strong>Notifications</strong></p>
<div class="card">
    <div class="d-flex align-items-center px-4 py-3">
        <div>Anyone seeing my profile page</div>
        <div class="flex"></div><span><label class="ui-switch ui-switch-md"><input type="checkbox"> <i></i></label></span></div>
    <div class="d-flex align-items-center px-4 py-3 b-t">
        <div>Anyone follow me</div>
        <div class="flex"></div><span><label class="ui-switch ui-switch-md"><input type="checkbox" checked="checked"> <i></i></label></span></div>
    <div class="d-flex align-items-center px-4 py-3 b-t">
        <div>Anyone send me a message</div>
        <div class="flex"></div><span><label class="ui-switch ui-switch-md"><input type="checkbox" checked="checked"> <i></i></label></span></div>
    <div class="d-flex align-items-center px-4 py-3 b-t">
        <div>Anyone invite me to group</div>
        <div class="flex"></div><span><label class="ui-switch ui-switch-md"><input type="checkbox"> <i></i></label></span></div>
    <div class="d-flex align-items-center px-4 py-3 b-t">
        <div>Update</div>
        <div class="flex"></div><span><label class="ui-switch ui-switch-md"><input type="checkbox" checked="checked"> <i></i></label></span></div>
</div>
<p class="text-muted"><strong>Emails</strong></p>
<div class="card">
    <div class="d-flex align-items-center px-4 py-3">
        <div>Anyone posts a comment on my post</div>
        <div class="flex"></div><span><label class="ui-switch ui-switch-md"><input type="checkbox"> <i></i></label></span></div>
    <div class="d-flex align-items-center px-4 py-3 b-t">
        <div>Anyone follow me</div>
        <div class="flex"></div><span><label class="ui-switch ui-switch-md"><input type="checkbox" checked="checked"> <i></i></label></span></div>
    <div class="d-flex align-items-center px-4 py-3 b-t">
        <div>Anyone repost</div>
        <div class="flex"></div><span><label class="ui-switch ui-switch-md"><input type="checkbox"> <i></i></label></span></div>
</div>
<p class="text-muted"><strong>Security</strong></p>
<div class="card">
    <div class="d-flex align-items-center px-4 py-3 b-t pointer" data-toggle="collapse" data-parent="#accordion" data-target="#c_5">
        <div>Delete account?</div>
        <div class="flex"></div>
        <div><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg></div>
    </div>
    <div class="collapse p-4" id="c_5">
        <div class="py-3">
            <p>Are you sure to delete your account?</p><button type="button" class="btn btn-white">No</button> <button type="button" class="btn btn-danger">Yes</button></div>
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