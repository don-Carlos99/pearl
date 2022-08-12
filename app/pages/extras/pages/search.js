var appSearch = {
    html: `
    <div class="">
    <div class="page-hero page-container" id="page-hero">
        <div class="padding d-flex">
            <div class="page-title">
                <h2 class="text-md text-highlight">Search</h2><small class="text-muted">Search what you want</small></div>
            <div class="flex"></div>
            
        </div>
    </div>
    <div class="page-content page-container" id="page-content">
        <div class="padding" id="search-list">
            <form action="#" class="mb-3">
                <div class="input-group"><input type="text" class="form-control form-control-theme search" placeholder="Type keyword"> <span class="input-group-append"><button class="btn btn-white no-border" type="button">Search</button></span></div>
            </form>
            <p class="mb-3"><strong>203</strong> Results found for: <strong>Keyword</strong></p>
            <ul class="nav nav-pills nav-active-primary mb-3 clearfix">
                <li class="nav-item"><a class="nav-link active" href="#" data-toggle="tab" data-target="#tab_1">All <span class="badge badge-sm bg-primary ml-1">32</span></a></li>
                <li class="nav-item"><a class="nav-link" href="#" data-toggle="tab" data-target="#tab_2">Users <span class="badge badge-sm bg-primary ml-1">14</span></a></li>
            </ul>
            <div class="tab-content">
                <div class="tab-pane active" id="tab_1">
                    <div class="card">
                        <div class="list list-row">
                            <div class="list-item" data-id="12">
                                <div class="flex">
                                    <div class="item-feed h-2x"><a href="#">Support</a> team updated the status</div>
                                </div>
                                <div class="no-wrap">
                                    <div class="item-date text-muted text-sm d-none d-md-block">5 hours ago</div>
                                </div>
                            </div>
                            <div class="list-item" data-id="13">
                                <div class="flex">
                                    <div class="item-feed h-2x">Thanks! Awesome to see good support on Twitter</div>
                                </div>
                                <div class="no-wrap">
                                    <div class="item-date text-muted text-sm d-none d-md-block">3 weeks ago</div>
                                </div>
                            </div>
                            <div class="list-item" data-id="10">
                                <div class="flex">
                                    <div class="item-feed h-2x">Developers of <a href="#">@iAI</a>, the AI assistant based on Free Software</div>
                                </div>
                                <div class="no-wrap">
                                    <div class="item-date text-muted text-sm d-none d-md-block">1 day ago</div>
                                </div>
                            </div>
                            <div class="list-item" data-id="3">
                                <div class="flex">
                                    <div class="item-feed h-2x"><a href="#">@NextUI</a> submit a ticket request</div>
                                </div>
                                <div class="no-wrap">
                                    <div class="item-date text-muted text-sm d-none d-md-block">1 hour ago</div>
                                </div>
                            </div>
                            <div class="list-item" data-id="7">
                                <div class="flex">
                                    <div class="item-feed h-2x">From design to dashboard, <a href="#">@Dash</a> builds custom hardware according to on-site requirements</div>
                                </div>
                                <div class="no-wrap">
                                    <div class="item-date text-muted text-sm d-none d-md-block">21 July</div>
                                </div>
                            </div>
                            <div class="list-item" data-id="17">
                                <div class="flex">
                                    <div class="item-feed h-2x">Alibaba made a smart screen <a href="#">@Alibaba</a></div>
                                </div>
                                <div class="no-wrap">
                                    <div class="item-date text-muted text-sm d-none d-md-block">13/12 18</div>
                                </div>
                            </div>
                            <div class="list-item" data-id="17">
                                <div class="flex">
                                    <div class="item-feed h-2x">AI will deliver adaptive learning processes in assessments &amp; digital textbooks to personalize learning</div>
                                </div>
                                <div class="no-wrap">
                                    <div class="item-date text-muted text-sm d-none d-md-block">13/12 18</div>
                                </div>
                            </div>
                            <div class="list-item" data-id="20">
                                <div class="flex">
                                    <div class="item-feed h-2x"><a href="#">@Netflix</a> hackathon</div>
                                </div>
                                <div class="no-wrap">
                                    <div class="item-date text-muted text-sm d-none d-md-block">25/12 18</div>
                                </div>
                            </div>
                            <div class="list-item" data-id="8">
                                <div class="flex">
                                    <div class="item-feed h-2x">The biggest software developer conference</div>
                                </div>
                                <div class="no-wrap">
                                    <div class="item-date text-muted text-sm d-none d-md-block">02/11 18</div>
                                </div>
                            </div>
                            <div class="list-item" data-id="6">
                                <div class="flex">
                                    <div class="item-feed h-2x">Just saw this on the <a href="#">@eBay</a> dashboard, dude is an absolute unit.</div>
                                </div>
                                <div class="no-wrap">
                                    <div class="item-date text-muted text-sm d-none d-md-block">1 Week ago</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="no-result hide">
                        <div class="p-4 text-center">No Results</div>
                    </div>
                    <ul class="pagination">
                        <li class="active"><a class="page" href="javascript:function Z(){Z=&quot;&quot;}Z()">1</a></li>
                        <li><a class="page" href="javascript:function Z(){Z=&quot;&quot;}Z()">2</a></li>
                    </ul>
                </div>
                <div class="tab-pane" id="tab_2">
                    <div class="card p-4">
                        <div class="list list-row row">
                            <div class="list-item col-sm-6 no-border" data-id="13">
                                <div><a href="#"><span class="w-40 avatar gd-primary"><span class="avatar-status off b-white avatar-right"></span> L</span></a></div>
                                <div class="flex"><a href="#" class="item-author text-color">Lisa Chapman</a> <a href="#" class="item-company text-muted h-1x">JoeJoe company</a></div>
                            </div>
                            <div class="list-item col-sm-6 no-border" data-id="1">
                                <div><a href="#"><span class="w-40 avatar gd-primary"><span class="avatar-status on b-white avatar-right"></span> <img src="../assets/img/a1.jpg" alt="."></span></a></div>
                                <div class="flex"><a href="#" class="item-author text-color">Joyce McCoy</a> <a href="#" class="item-company text-muted h-1x">Samsum Inc.</a></div>
                            </div>
                            <div class="list-item col-sm-6 no-border" data-id="3">
                                <div><a href="#"><span class="w-40 avatar gd-primary"><span class="avatar-status away b-white avatar-right"></span> <img src="../assets/img/a3.jpg" alt="."></span></a></div>
                                <div class="flex"><a href="#" class="item-author text-color">Jordan Stephens</a> <a href="#" class="item-company text-muted h-1x">Wealth corp</a></div>
                            </div>
                            <div class="list-item col-sm-6 no-border" data-id="14">
                                <div><a href="#"><span class="w-40 avatar gd-warning"><span class="avatar-status off b-white avatar-right"></span> B</span></a></div>
                                <div class="flex"><a href="#" class="item-author text-color">Benjamin Fields</a> <a href="#" class="item-company text-muted h-1x">Luckman corp</a></div>
                            </div>
                            <div class="list-item col-sm-6 no-border" data-id="17">
                                <div><a href="#"><span class="w-40 avatar gd-warning"><span class="avatar-status on b-white avatar-right"></span> H</span></a></div>
                                <div class="flex"><a href="#" class="item-author text-color">Helen Valdez</a> <a href="#" class="item-company text-muted h-1x">AI</a></div>
                            </div>
                            <div class="list-item col-sm-6 no-border" data-id="15">
                                <div><a href="#"><span class="w-40 avatar gd-success"><span class="avatar-status on b-white avatar-right"></span> J</span></a></div>
                                <div class="flex"><a href="#" class="item-author text-color">Jean Armstrong</a> <a href="#" class="item-company text-muted h-1x">Google</a></div>
                            </div>
                            <div class="list-item col-sm-6 no-border" data-id="8">
                                <div><a href="#"><span class="w-40 avatar gd-success"><span class="avatar-status on b-white avatar-right"></span> <img src="../assets/img/a8.jpg" alt="."></span></a></div>
                                <div class="flex"><a href="#" class="item-author text-color">Lawrence Cole</a> <a href="#" class="item-company text-muted h-1x">Jet</a></div>
                            </div>
                            <div class="list-item col-sm-6 no-border" data-id="10">
                                <div><a href="#"><span class="w-40 avatar gd-danger"><span class="avatar-status on b-white avatar-right"></span> <img src="../assets/img/a10.jpg" alt="."></span></a></div>
                                <div class="flex"><a href="#" class="item-author text-color">Edward Clark</a> <a href="#" class="item-company text-muted h-1x">Goldage</a></div>
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