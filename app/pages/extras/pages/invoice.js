var appInvoice = {
    html: `
    <div class="">
    <div class="page-hero page-container" id="page-hero">
        <div class="padding d-flex">
            <div class="page-title">
                <h2 class="text-md text-highlight">Invoice</h2><small class="text-muted">Invoice application</small></div>
            <div class="flex"></div>
            
        </div>
    </div>
    <div class="page-content page-container" id="page-content">
        <div class="padding">
            <div id="invoice-list">
                <div class="toolbar">
                    <div class="btn-group"><button class="btn btn-sm btn-icon btn-white" data-toggle="tooltip" title="" id="btn-trash" data-original-title="Trash"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash text-muted"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg></button>                        <button class="btn btn-sm btn-icon btn-white sort hide" data-sort="item-title" data-toggle="tooltip" title="" data-original-title="Sort"><i class="sorting"></i></button></div>
                    <form class="flex">
                        <div class="input-group"><input type="text" class="form-control form-control-theme form-control-sm search" placeholder="Search" required=""> <span class="input-group-append"><button class="btn btn-white no-border btn-sm" type="button"><span class="d-flex text-muted"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg></span></button>
                            </span>
                        </div>
                    </form>
                </div>
                <div class="table-responsive">
                    <table class="table table-theme table-row v-middle">
                        <thead>
                            <tr>
                                <th style="width:20px"></th>
                                <th class="text-muted sort sortable" data-sort="id" style="width:40px;text-align:center">No.</th>
                                <th class="text-muted sort sortable" data-sort="item-company">Client</th>
                                <th class="text-muted sort sortable" data-sort="item-amount" style="width:60px">Amount</th>
                                <th class="text-muted sort sortable" data-sort="item-badge" style="width:60px">Status</th>
                                <th class="text-muted" style="width:120px">Date</th>
                                <th style="width:50px"></th>
                            </tr>
                        </thead>
                        <tbody class="list">
                            <tr class="v-middle" data-id="20">
                                <td><label class="ui-check m-0"><input type="checkbox" name="id" value="20"> <i></i></label></td>
                                <td style="min-width:30px;text-align:center"><small class="text-muted">20</small></td>
                                <td class="flex"><a href="page.invoice.detail.html" class="item-company ajax h-1x" data-pjax-state="">Netflix</a>
                                    <div class="item-mail text-muted h-1x d-none d-sm-block">gloria-williams@netflix.com</div>
                                </td>
                                <td><span class="item-amount d-none d-sm-block text-sm">120</span></td>
                                <td><span class="item-badge badge text-uppercase bg-success">Paid</span></td>
                                <td class="no-wrap">
                                    <div class="item-date text-muted text-sm d-none d-md-block">25/12 18</div>
                                </td>
                                <td>
                                    <div class="item-action dropdown"><a href="#" data-toggle="dropdown" class="text-muted"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-vertical"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg></a>
                                        <div
                                            class="dropdown-menu dropdown-menu-right bg-black" role="menu"><a class="dropdown-item" href="#">See detail </a><a class="dropdown-item download">Download </a><a class="dropdown-item edit">Edit</a>
                                            <div class="dropdown-divider"></div><a class="dropdown-item trash">Delete item</a></div>
                </div>
                </td>
                </tr>
                <tr class="v-middle" data-id="8">
                    <td><label class="ui-check m-0"><input type="checkbox" name="id" value="8"> <i></i></label></td>
                    <td style="min-width:30px;text-align:center"><small class="text-muted">8</small></td>
                    <td class="flex"><a href="page.invoice.detail.html" class="item-company ajax h-1x" data-pjax-state="">Jet</a>
                        <div class="item-mail text-muted h-1x d-none d-sm-block">lawrence-cole@jet.com</div>
                    </td>
                    <td><span class="item-amount d-none d-sm-block text-sm">220</span></td>
                    <td><span class="item-badge badge text-uppercase bg-success">Paid</span></td>
                    <td class="no-wrap">
                        <div class="item-date text-muted text-sm d-none d-md-block">02/11 18</div>
                    </td>
                    <td>
                        <div class="item-action dropdown"><a href="#" data-toggle="dropdown" class="text-muted"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-vertical"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg></a>
                            <div
                                class="dropdown-menu dropdown-menu-right bg-black" role="menu"><a class="dropdown-item" href="#">See detail </a><a class="dropdown-item download">Download </a><a class="dropdown-item edit">Edit</a>
                                <div class="dropdown-divider"></div><a class="dropdown-item trash">Delete item</a></div>
            </div>
            </td>
            </tr>
            <tr class="v-middle" data-id="9">
                <td><label class="ui-check m-0"><input type="checkbox" name="id" value="9"> <i></i></label></td>
                <td style="min-width:30px;text-align:center"><small class="text-muted">9</small></td>
                <td class="flex"><a href="page.invoice.detail.html" class="item-company ajax h-1x" data-pjax-state="">HHH inc</a>
                    <div class="item-mail text-muted h-1x d-none d-sm-block">steven-cruz@hhhinc.com</div>
                </td>
                <td><span class="item-amount d-none d-sm-block text-sm">2310</span></td>
                <td><span class="item-badge badge text-uppercase bg-success">Paid</span></td>
                <td class="no-wrap">
                    <div class="item-date text-muted text-sm d-none d-md-block">2 days ago</div>
                </td>
                <td>
                    <div class="item-action dropdown"><a href="#" data-toggle="dropdown" class="text-muted"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-vertical"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg></a>
                        <div
                            class="dropdown-menu dropdown-menu-right bg-black" role="menu"><a class="dropdown-item" href="#">See detail </a><a class="dropdown-item download">Download </a><a class="dropdown-item edit">Edit</a>
                            <div class="dropdown-divider"></div><a class="dropdown-item trash">Delete item</a></div>
        </div>
        </td>
        </tr>
        <tr class="v-middle" data-id="13">
            <td><label class="ui-check m-0"><input type="checkbox" name="id" value="13"> <i></i></label></td>
            <td style="min-width:30px;text-align:center"><small class="text-muted">13</small></td>
            <td class="flex"><a href="page.invoice.detail.html" class="item-company ajax h-1x" data-pjax-state="">JoeJoe company</a>
                <div class="item-mail text-muted h-1x d-none d-sm-block">lisa-chapman@joejoecompany.com</div>
            </td>
            <td><span class="item-amount d-none d-sm-block text-sm">14</span></td>
            <td><span class="item-badge badge text-uppercase bg-secondary">Unpaid</span></td>
            <td class="no-wrap">
                <div class="item-date text-muted text-sm d-none d-md-block">3 weeks ago</div>
            </td>
            <td>
                <div class="item-action dropdown"><a href="#" data-toggle="dropdown" class="text-muted"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-vertical"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg></a>
                    <div
                        class="dropdown-menu dropdown-menu-right bg-black" role="menu"><a class="dropdown-item" href="#">See detail </a><a class="dropdown-item download">Download </a><a class="dropdown-item edit">Edit</a>
                        <div class="dropdown-divider"></div><a class="dropdown-item trash">Delete item</a></div>
    </div>
    </td>
    </tr>
    <tr class="v-middle" data-id="7">
        <td><label class="ui-check m-0"><input type="checkbox" name="id" value="7"> <i></i></label></td>
        <td style="min-width:30px;text-align:center"><small class="text-muted">7</small></td>
        <td class="flex"><a href="page.invoice.detail.html" class="item-company ajax h-1x" data-pjax-state="">Lostcorp</a>
            <div class="item-mail text-muted h-1x d-none d-sm-block">frank-kelley@lostcorp.com</div>
        </td>
        <td><span class="item-amount d-none d-sm-block text-sm">510</span></td>
        <td><span class="item-badge badge text-uppercase bg-success">Paid</span></td>
        <td class="no-wrap">
            <div class="item-date text-muted text-sm d-none d-md-block">21 July</div>
        </td>
        <td>
            <div class="item-action dropdown"><a href="#" data-toggle="dropdown" class="text-muted"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-vertical"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg></a>
                <div
                    class="dropdown-menu dropdown-menu-right bg-black" role="menu"><a class="dropdown-item" href="#">See detail </a><a class="dropdown-item download">Download </a><a class="dropdown-item edit">Edit</a>
                    <div class="dropdown-divider"></div><a class="dropdown-item trash">Delete item</a></div>
</div>
</td>
</tr>
<tr class="v-middle" data-id="15">
    <td><label class="ui-check m-0"><input type="checkbox" name="id" value="15"> <i></i></label></td>
    <td style="min-width:30px;text-align:center"><small class="text-muted">15</small></td>
    <td class="flex"><a href="page.invoice.detail.html" class="item-company ajax h-1x" data-pjax-state="">Google</a>
        <div class="item-mail text-muted h-1x d-none d-sm-block">jean-armstrong@google.com</div>
    </td>
    <td><span class="item-amount d-none d-sm-block text-sm">240</span></td>
    <td><span class="item-badge badge text-uppercase bg-success">Paid</span></td>
    <td class="no-wrap">
        <div class="item-date text-muted text-sm d-none d-md-block">03/12 18</div>
    </td>
    <td>
        <div class="item-action dropdown"><a href="#" data-toggle="dropdown" class="text-muted"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-vertical"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg></a>
            <div
                class="dropdown-menu dropdown-menu-right bg-black" role="menu"><a class="dropdown-item" href="#">See detail </a><a class="dropdown-item download">Download </a><a class="dropdown-item edit">Edit</a>
                <div class="dropdown-divider"></div><a class="dropdown-item trash">Delete item</a></div>
        </div>
    </td>
</tr>
<tr class="v-middle" data-id="4">
    <td><label class="ui-check m-0"><input type="checkbox" name="id" value="4"> <i></i></label></td>
    <td style="min-width:30px;text-align:center"><small class="text-muted">4</small></td>
    <td class="flex"><a href="page.invoice.detail.html" class="item-company ajax h-1x" data-pjax-state="">GE</a>
        <div class="item-mail text-muted h-1x d-none d-sm-block">billy-johnston@ge.com</div>
    </td>
    <td><span class="item-amount d-none d-sm-block text-sm">20</span></td>
    <td><span class="item-badge badge text-uppercase bg-secondary">Unpaid</span></td>
    <td class="no-wrap">
        <div class="item-date text-muted text-sm d-none d-md-block">2 hours ago</div>
    </td>
    <td>
        <div class="item-action dropdown"><a href="#" data-toggle="dropdown" class="text-muted"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-vertical"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg></a>
            <div
                class="dropdown-menu dropdown-menu-right bg-black" role="menu"><a class="dropdown-item" href="#">See detail </a><a class="dropdown-item download">Download </a><a class="dropdown-item edit">Edit</a>
                <div class="dropdown-divider"></div><a class="dropdown-item trash">Delete item</a></div>
        </div>
    </td>
</tr>
<tr class="v-middle" data-id="19">
    <td><label class="ui-check m-0"><input type="checkbox" name="id" value="19"> <i></i></label></td>
    <td style="min-width:30px;text-align:center"><small class="text-muted">19</small></td>
    <td class="flex"><a href="page.invoice.detail.html" class="item-company ajax h-1x" data-pjax-state="">AI</a>
        <div class="item-mail text-muted h-1x d-none d-sm-block">tiffany-baker@ai.com</div>
    </td>
    <td><span class="item-amount d-none d-sm-block text-sm">320</span></td>
    <td><span class="item-badge badge text-uppercase bg-success">Paid</span></td>
    <td class="no-wrap">
        <div class="item-date text-muted text-sm d-none d-md-block">13/12 18</div>
    </td>
    <td>
        <div class="item-action dropdown"><a href="#" data-toggle="dropdown" class="text-muted"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-vertical"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg></a>
            <div
                class="dropdown-menu dropdown-menu-right bg-black" role="menu"><a class="dropdown-item" href="#">See detail </a><a class="dropdown-item download">Download </a><a class="dropdown-item edit">Edit</a>
                <div class="dropdown-divider"></div><a class="dropdown-item trash">Delete item</a></div>
        </div>
    </td>
</tr>
<tr class="v-middle" data-id="1">
    <td><label class="ui-check m-0"><input type="checkbox" name="id" value="1"> <i></i></label></td>
    <td style="min-width:30px;text-align:center"><small class="text-muted">1</small></td>
    <td class="flex"><a href="page.invoice.detail.html" class="item-company ajax h-1x" data-pjax-state="">Samsum Inc.</a>
        <div class="item-mail text-muted h-1x d-none d-sm-block">joyce-mccoy@samsuminc..com</div>
    </td>
    <td><span class="item-amount d-none d-sm-block text-sm">210</span></td>
    <td><span class="item-badge badge text-uppercase bg-success">Paid</span></td>
    <td class="no-wrap">
        <div class="item-date text-muted text-sm d-none d-md-block">20 minutes ago</div>
    </td>
    <td>
        <div class="item-action dropdown"><a href="#" data-toggle="dropdown" class="text-muted"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-vertical"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg></a>
            <div
                class="dropdown-menu dropdown-menu-right bg-black" role="menu"><a class="dropdown-item" href="#">See detail </a><a class="dropdown-item download">Download </a><a class="dropdown-item edit">Edit</a>
                <div class="dropdown-divider"></div><a class="dropdown-item trash">Delete item</a></div>
        </div>
    </td>
</tr>
<tr class="v-middle" data-id="14">
    <td><label class="ui-check m-0"><input type="checkbox" name="id" value="14"> <i></i></label></td>
    <td style="min-width:30px;text-align:center"><small class="text-muted">14</small></td>
    <td class="flex"><a href="page.invoice.detail.html" class="item-company ajax h-1x" data-pjax-state="">Luckman corp</a>
        <div class="item-mail text-muted h-1x d-none d-sm-block">benjamin-fields@luckmancorp.com</div>
    </td>
    <td><span class="item-amount d-none d-sm-block text-sm">14</span></td>
    <td><span class="item-badge badge text-uppercase bg-secondary">Unpaid</span></td>
    <td class="no-wrap">
        <div class="item-date text-muted text-sm d-none d-md-block">1 day ago</div>
    </td>
    <td>
        <div class="item-action dropdown"><a href="#" data-toggle="dropdown" class="text-muted"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-vertical"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg></a>
            <div
                class="dropdown-menu dropdown-menu-right bg-black" role="menu"><a class="dropdown-item" href="#">See detail </a><a class="dropdown-item download">Download </a><a class="dropdown-item edit">Edit</a>
                <div class="dropdown-divider"></div><a class="dropdown-item trash">Delete item</a></div>
        </div>
    </td>
</tr>
</tbody>
</table>
</div>
<div class="d-flex">
    <ul class="pagination">
        <li class="active"><a class="page" href="javascript:function Z(){Z=&quot;&quot;}Z()">1</a></li>
        <li><a class="page" href="javascript:function Z(){Z=&quot;&quot;}Z()">2</a></li>
    </ul><small class="text-muted py-2 mx-2">Total <span id="count">15</span> items</small></div>
</div>
<div id="modal" class="modal fade" data-backdrop="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">New invoice</h5>
            </div>
            <div class="modal-body p-4">
                <form>
                    <div class="form-row">
                        <div class="form-group col-md-6"><label class="text-muted">First Name</label><input type="text" class="form-control" placeholder="First name"></div>
                        <div class="form-group col-md-6"><label class="text-muted">Last Name</label><input type="text" class="form-control" placeholder="Last name"></div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-6"><label class="text-muted">Email</label><input type="email" class="form-control" placeholder="Email"></div>
                        <div class="form-group col-md-6"><label class="text-muted">Password <small>(Register account)</small></label><input type="password" class="form-control" placeholder="Password"></div>
                    </div>
                    <div class="form-group"><label class="text-muted">Address</label><input type="text" class="form-control" placeholder="1234 Main St"></div>
                    <div class="form-row">
                        <div class="form-group col-md-6"><label class="text-muted">City</label><input type="text" class="form-control"></div>
                        <div class="form-group col-md-4"><label for="inputState" class="text-muted d-block">State</label><select class="custom-select"><option selected="selected">Choose...</option><option>...</option></select></div>
                        <div class="form-group col-md-2"><label class="text-muted">Zip</label><input type="text" class="form-control"></div>
                    </div><button type="submit" class="btn btn-primary">Submit</button></form>
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