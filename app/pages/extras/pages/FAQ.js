var appFAQ = {
    html: `
    <div class="">
    <div class="page-hero page-container" id="page-hero">
        <div class="padding d-flex">
            <div class="page-title">
                <h2 class="text-md text-highlight">Faq</h2><small class="text-muted">Frequently asked and answered</small></div>
            <div class="flex"></div>
            
        </div>
    </div>
    <div class="page-content page-container" id="page-content">
        <div class="padding">
            <div class="row">
                <div class="col-sm-8 col-md-9">
                    <p><strong>Frequently asked</strong></p>
                    <div class="mb-4">
                        <div class="card mb-2">
                            <div class="card-header no-border"><a data-toggle="collapse" data-target="#c_1"><strong>Q:</strong> How to use Bootstrap grid system to build responsive layout</a></div>
                            <div id="c_1" class="collapse in b-t">
                                <div class="card-body">
                                    <div class="float-left mr-2"><span class="text-md w-32 avatar circle bg-success">A</span></div>
                                    <p class="text-muted">Eget et, porttitor nec faucibus etiam consectetur libero, odio sollicitudin libero, augue tincidunt dictumst diam morbi molestie non a quis condimentum tincidunt semper vestibulum rhoncus augue tortor sit leo et id
                                        arcu semper tempor, sit eu felis pellentesque tempus neque, tincidunt lorem tortor consectetur gravida vel accumsan, arcu venenatis ipsum ultrices orci pellentesque malesuada lectus scelerisque pulvinar posuere
                                        est sit egestas arcu lobortis tincidunt purus rhoncus cras elit morbi proin est amet, non senectus congue sagittis quam turpis massa, elementum bibendum donec aliquet enim imperdiet maecenas adipiscing eget amet
                                        ut tellus facilisis enim amet, quis semper faucibus sed nec pulvinar</p>
                                </div>
                            </div>
                        </div>
                        <div class="card mb-2">
                            <div class="card-header no-border"><a data-toggle="collapse" data-target="#c_2"><strong>Q:</strong> How to use SCSS variables to build custom color</a></div>
                            <div id="c_2" class="collapse b-t">
                                <div class="card-body">
                                    <div class="float-left mr-2"><span class="text-md w-32 avatar circle bg-info">A</span></div>
                                    <p class="text-muted">Ipsum venenatis, morbi dignissim purus augue nunc in sit ullamcorper amet dignissim penatibus mattis eu vel vitae dolor ipsum sed viverra diam tortor ultrices sapien consequat vivamus morbi sollicitudin in fames eu
                                        elementum et elementum sollicitudin rhoncus urna duis aliquet sed in fringilla commodo cursus id mollis quis odio dictum id accumsan at odio elementum quisque enim posuere nullam elit nunc pellentesque convallis
                                        eget accumsan enim enim arcu, commodo enim phasellus vel consectetur scelerisque metus turpis risus, urna sit amet, quis at sit scelerisque rhoncus massa urna</p>
                                </div>
                            </div>
                        </div>
                        <div class="card mb-2">
                            <div class="card-header no-border"><a data-toggle="collapse" data-target="#c_3"><strong>Q:</strong> What is the flex layout</a></div>
                            <div id="c_3" class="collapse b-t">
                                <div class="card-body">
                                    <div class="float-left mr-2"><span class="text-md w-32 avatar circle bg-warning">A</span></div>
                                    <p class="text-muted">Ultrices id pretium pellentesque ut elit vel nisl sed et at sit fermentum porttitor vitae iaculis diam felis mattis sit odio malesuada tellus tempor odio fames orci ac ipsum consectetur porttitor amet, placerat placerat
                                        nunc duis libero orci posuere ac, turpis fames scelerisque tellus consectetur purus, egestas orci, bibendum eu vivamus pulvinar vestibulum eu nunc in id eget ante risus sit gravida porttitor vel diam vestibulum,
                                        vitae pellentesque urna arcu eu et quam faucibus nulla commodo nulla id blandit vel, ullamcorper massa netus pharetra diam vitae, sit pellentesque eu suscipit ac malesuada</p>
                                </div>
                            </div>
                        </div>
                        <div class="card mb-2">
                            <div class="card-header no-border"><a data-toggle="collapse" data-target="#c_4"><strong>Q:</strong> Where to buy this UI dashboard</a></div>
                            <div id="c_4" class="collapse b-t">
                                <div class="card-body">
                                    <div class="float-left mr-2"><span class="text-md w-32 avatar circle bg-success">A</span></div>
                                    <p class="text-muted">Lacinia aliquam tincidunt malesuada dictum ornare a eu ullamcorper et arcu scelerisque sed porttitor sapien adipiscing adipiscing feugiat sodales sed pretium blandit tellus purus ultrices magna nulla hac sed proin et
                                        lobortis lorem vitae augue vitae netus molestie tellus gravida mi at duis urna, sit erat ut quis eget eleifend ante</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p><strong>Submit ticket</strong></p>
                    <form>
                        <div class="form-group row">
                            <div class="col-sm-6"><label>Your name</label><input type="text" class="form-control" placeholder="Name" required=""></div>
                            <div class="col-sm-6"><label>Email</label><input type="email" class="form-control" placeholder="Enter email" required=""></div>
                        </div>
                        <div class="form-group"><label>Subject</label><select class="form-control c-select"><option></option><option>Website Errors</option><option>Product Services</option><option>Login/Signup Problem</option></select></div>
                        <div class="form-group"><label>Description</label><textarea class="form-control" rows="6" placeholder="hmm.."></textarea></div><button type="submit" class="btn btn-primary">Submit</button></form>
                </div>
                <div class="col-sm-4 col-md-3">
                    <div class="card">
                        <div class="p-3 text-muted">Category</div>
                        <ul class="nav flex-column">
                            <li class="nav-item"><a class="nav-link" href="#"><span class="badge badge-circle text-primary mx-1"></span> <span class="nav-text">Applications</span></a></li>
                            <li class="nav-item"><a class="nav-link" href="#"><span class="badge badge-circle text-info mx-1"></span> <span class="nav-text">UI Elements</span></a></li>
                            <li class="nav-item"><a class="nav-link" href="#"><span class="badge badge-circle text-success mx-1"></span> <span class="nav-text">Components</span></a></li>
                            <li class="nav-item"><a class="nav-link" href="#"><span class="badge badge-circle text-danger mx-1"></span> <span class="nav-text">Build process</span></a></li>
                        </ul>
                        <div class="p-3 text-muted">Supporters</div>
                        <div class="list list-row">
                            <div class="list-item" data-id="20">
                                <div><a href="#"><span class="w-40 avatar gd-warning"><span class="avatar-status on b-white avatar-right"></span> G</span></a></div>
                                <div class="flex"><a href="#" class="item-author text-color">Gloria Williams</a> <a href="#" class="item-company text-muted h-1x">Netflix</a></div>
                            </div>
                            <div class="list-item" data-id="9">
                                <div><a href="#"><span class="w-40 avatar gd-info"><span class="avatar-status on b-white avatar-right"></span> <img src="../assets/img/a9.jpg" alt="."></span></a></div>
                                <div class="flex"><a href="#" class="item-author text-color">Steven Cruz</a> <a href="#" class="item-company text-muted h-1x">HHH inc</a></div>
                            </div>
                            <div class="list-item" data-id="17">
                                <div><a href="#"><span class="w-40 avatar gd-warning"><span class="avatar-status on b-white avatar-right"></span> A</span></a></div>
                                <div class="flex"><a href="#" class="item-author text-color">Alan Mendez</a> <a href="#" class="item-company text-muted h-1x">Alibaba</a></div>
                            </div>
                            <div class="list-item" data-id="16">
                                <div><a href="#"><span class="w-40 avatar gd-info"><span class="avatar-status on b-white avatar-right"></span> F</span></a></div>
                                <div class="flex"><a href="#" class="item-author text-color">Frances Stewart</a> <a href="#" class="item-company text-muted h-1x">Microsoft</a></div>
                            </div>
                            <div class="list-item" data-id="15">
                                <div><a href="#"><span class="w-40 avatar gd-success"><span class="avatar-status on b-white avatar-right"></span> J</span></a></div>
                                <div class="flex"><a href="#" class="item-author text-color">Jean Armstrong</a> <a href="#" class="item-company text-muted h-1x">Google</a></div>
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