var appSideBar = {
    html: `
        <div class="sidenav h-100 modal-dialog bg-light">
            <div class="navbar">
            <a onclick="route('appDashboard')" class="navbar-brand">
            <span class="hidden-folded d-inline l-s-n-1x">Pearl</span>
            </a>
            </div>
            <div class="flex scrollable hover">
                <div class="nav-active-text-primary" data-nav>
                    <ul class="nav bg">
                        <li class="nav-header hidden-folded"><span class="text-muted">Main</span></li>
                        <li><a onclick="route('appDashboard')"><span class="nav-icon text-primary"><i data-feather="home"></i></span> <span class="nav-text">Dashboard</span></a></li>
                        <li class="nav-header hidden-folded"><span class="text-muted">Applications</span></li>
                        <li><a onclick="route('appCalender')"><span class="nav-icon text-info"><i data-feather="calendar"></i></span> <span class="nav-text">Calendar</span> <span class="nav-badge"><b class="badge-circle xs text-danger"></b></span></a></li>
                        <li><a onclick="route('appUsers')"><span class="nav-icon text-success"><i data-feather="users"></i></span> <span class="nav-text">Users</span></a></li>
                        <li><a onclick="route('appMessages')"><span class="nav-icon text-warning"><i data-feather="message-circle"></i></span> <span class="nav-text">Messages</span> <span class="nav-badge"><b class="badge-circle xs text-warning"></b></span></a></li>
                        <li><a onclick="route('appEmails')"><span class="nav-icon text-danger"><i data-feather="mail"></i></span> <span class="nav-text">Email</span></a></li>
                    </ul>
                    <ul class="nav">
                        <li class="nav-header hidden-folded"><span class="text-muted">UI elements</span></li>
                        <li><a class=""><span class="nav-icon"><i data-feather="grid"></i></span> <span class="nav-text">Components</span> <span class="nav-caret"></span></a>
                            <ul class="nav-sub nav-mega">
                                <li><a onclick="route('appAlerts')" class=""><span class="nav-text">Alert</span></a></li>
                                <li><a onclick="route('appBadge')" class=""><span class="nav-text">Badge</span></a></li>
                                <li><a onclick="route('appButton')" class=""><span class="nav-text">Button</span></a></li>
                                <li><a onclick="route('appCard')" class=""><span class="nav-text">Card</span></a></li>
                                <li><a onclick="route('appCarousel')" class=""><span class="nav-text">Carousel</span></a></li>
                                <li><a onclick="route('appColor')" class=""><span class="nav-text">Color</span></a></li>
                                <li><a onclick="route('appDropdown')" class=""><span class="nav-text">Dropdown</span></a></li>
                                <li><a onclick="route('appGrid')" class=""><span class="nav-text">Grid</span></a></li>
                                <li><a onclick="route('appIcons')" class=""><span class="nav-text">Icon</span></a></li>
                                <li><a onclick="route('appList')" class=""><span class="nav-text">List</span></a></li>
                                <li><a onclick="route('appModal')" class=""><span class="nav-text">Modal</span></a></li>
                                <li><a onclick="route('appNavbar')" class=""><span class="nav-text">Navbar</span></a></li>
                                <li><a onclick="route('appSidebar')" class=""><span class="nav-text">Sidenav</span></a></li>
                                <li><a onclick="route('appTimeline')" class=""><span class="nav-text">Timeline</span></a></li>
                                <li><a onclick="route('appTabs')" class=""><span class="nav-text">Tab &amp; Collpase</span></a></li>
                                <li><a onclick="route('appTooltip')" class=""><span class="nav-text">Tooltip &amp; Popover</span></a></li>
                            </ul>
                        </li>
                        <li><a class=""><span class="nav-icon"><i data-feather="box"></i></span> <span class="nav-text">Plugins</span> <span class="nav-caret"></span></a>
                            <ul class="nav-sub nav-mega">
                                <li><a onclick="route('appInfiniteScroll')" class=""><span class="nav-text">Infinite Scroll</span></a></li>
                                <li><a onclick="route('appSortable')" class=""><span class="nav-text">Sortable</span></a></li>
                                <li><a onclick="route('appVectorMAp')" class=""><span class="nav-text">Vector Map</span></a></li>
                            </ul>
                        </li>
                        <li><a class=""><span class="nav-icon"><i data-feather="activity"></i></span> <span class="nav-text">Animation</span> <span class="nav-caret"></span></a>
                        <ul class="nav-sub nav-mega">
                            <li><a onclick="route('svgAnimation')" class=""><span class="nav-text">SVG Animation</span></a></li>
                        </ul>
                    </li>
                        <li><a class=""><span class="nav-icon"><i data-feather="disc"></i></span> <span class="nav-text">Form</span> <span class="nav-caret"></span></a>
                            <ul class="nav-sub nav-mega">
                                <li><a onclick="route('appFormElement')" class=""><span class="nav-text">Form Element</span></a></li>
                                <li><a onclick="route('appFormLyout')" class=""><span class="nav-text">Form Layout</span></a></li>
                                <li><a onclick="route('appFormValidation')" class=""><span class="nav-text">Form Validation</span></a></li>
                                <li><a onclick="route('appEditor')" class=""><span class="nav-text">Editor</span></a></li>
                                <li><a onclick="route('appDatepicker')" class=""><span class="nav-text">Datepicker</span></a></li>
                                <li><a onclick="route('appSelect')" class=""><span class="nav-text">Select</span></a></li>
                                <li><a onclick="route('appWizard')" class=""><span class="nav-text">Wizard</span></a></li>
                                <li><a onclick="route('appFileUpload')" class=""><span class="nav-text">File Upload</span></a></li>
                            </ul>
                        </li>
                        <li><a class=""><span class="nav-icon"><i data-feather="list"></i></span> <span class="nav-text">Tables</span> <span class="nav-caret"></span></a>
                            <ul class="nav-sub nav-mega">
                                <li><a onclick="route('appStyles')" class=""><span class="nav-text">Style</span></a></li>
                                <li><a onclick="route('appBootstraptables')" class=""><span class="nav-text">Bootstrap Table</span></a></li>
                                <li><a onclick="route('appDatatables')" class=""><span class="nav-text">Datatables</span></a></li>
                            </ul>
                        </li>
                        <li><a class=""><span class="nav-icon"><i data-feather="pie-chart"></i></span> <span class="nav-text">Charts</span> <span class="nav-caret"></span></a>
                            <ul class="nav-sub nav-mega">
                                <li><a onclick="route('appChartist')" class=""><span class="nav-text">Chartist</span></a></li>
                                <li><a onclick="route('appChartsjs')" class=""><span class="nav-text">Chartjs</span></a></li>
                            </ul>
                        </li>
                        <li class="nav-header hidden-folded"><span class="text-muted">Extra</span></li>
                        <li><a class=""><span class="nav-icon"><i data-feather="file"></i></span> <span class="nav-text">Pages</span> <span class="nav-caret"></span></a>
                            <ul class="nav-sub nav-mega">
                                <li><a onclick="route('appProfile')" class=""><span class="nav-text">Profile</span></a></li>
                                <li><a onclick="route('appSearch')" class=""><span class="nav-text">Search</span></a></li>
                                <li><a onclick="route('appInvoice')" class=""><span class="nav-text">Invoice</span></a></li>
                                <li><a onclick="route('appFAQ')" class=""><span class="nav-text">FAQ</span></a></li>
                                <li><a onclick="route('appPrice')" class=""><span class="nav-text">Price</span></a></li>
                                <li><a onclick="route('appSettings')" class=""><span class="nav-text">Setting</span></a></li>
                                <li><a onclick="route('appBlank')" class=""><span class="nav-text">Blank</span></a></li>
                            </ul>
                        </li>
                        <li><a class=""><span class="nav-icon"><i data-feather="lock"></i></span> <span class="nav-text">Auth</span> <span class="nav-caret"></span></a>
                            <ul class="nav-sub nav-mega">
                                <li><a onclick="route('appSignin')" class=""><span class="nav-text">Signin</span></a></li>
                                <li><a onclick="route('appSignup')" class=""><span class="nav-text">Signup</span></a></li>
                                <li><a onclick="route('appForgotPassword')" class=""><span class="nav-text">Forgot Password</span></a></li>
                                <li><a onclick="route('appLockScreen')" class=""><span class="nav-text">Lockme Screen</span></a></li>
                                <li><a onclick="route('appError404')" class=""><span class="nav-text">Error 404</span></a></li>
                                <li><a onclick="route('appError505')" class=""><span class="nav-text">Error 505</span></a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="no-shrink">
                <div class="p-3 d-flex align-items-center">
                    <div class="text-sm hidden-folded text-muted">Trial: 35%</div>
                    <div class="progress mx-2 flex" style="height:4px">
                        <div class="progress-bar gd-success" style="width: 35%"></div>
                    </div>
                </div>
            </div>
        </div>
    `,
    init: function() {
        document.getElementById("aside").innerHTML = this.html;
        $('.nav > li ').on('click', moreDetails);

        function moreDetails(e) {
            if ($(this).hasClass('active')) {
                $(this).toggleClass("active");
            } else {
                // $('.nav > li ').removeClass('active')
                $(this).toggleClass("active");
            }
        }
    }
}