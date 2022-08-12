var appCalender = {
    html: `
    <div class="">
	<div class="b-b">
		<div class="d-flex padding">
			<div>
				<h2 class="text-md text-highlight">Calendar</h2>
				<small class="text-muted">Saturday, 28 July 2018</small>
				<a class="badge badge-sm badge-pill b-a mx-1" id="todayview">Today</a>
			</div>
			<span class="flex"></span>
			<div>
				<button id="btn-new" class="btn btn-sm box-shadows btn-rounded gd-primary text-white">Add Event</button>
			</div>
		</div>
		<div class="nav-active-border b-success px-3">
			<ul class="nav text-sm" role="tablist">
				<li class="nav-item">
					<a class="nav-link" id="dayview" data-toggle="tab">Day</a>
				</li>
				<li class="nav-item">
					<a class="nav-link active" id="weekview" data-toggle="tab">Week</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" id="monthview" data-toggle="tab">Month</a>
				</li>
			</ul>
		</div>
	</div>
	<div id="newEvent" class="modal fade">
		<div class="modal-dialog text-dark">
			<div class="modal-content">
				<div class="modal-header bg-primary">
					<h5 class="modal-title text-white">Event</h5>
					<button class="close" data-dismiss="modal">×</button>
				</div>
				<div class="modal-body">
					<form>
						<div class="form-group row">
							<label class="col-sm-3 col-form-label">Title</label>
							<div class="col-sm-9">
								<input id="event-title" type="text" class="form-control" placeholder="Title">
								</div>
							</div>
							<div class="form-group row">
								<label class="col-sm-3 col-form-label">Event type</label>
								<div class="col-sm-9">
									<div class="mt-2" id="event-type">
										<div class="form-check form-check-inline">
											<label class="form-check-label">
												<input class="form-check-input" type="radio" name="type" value="Appointment"> Appointment
												</label>
											</div>
											<div class="form-check form-check-inline">
												<label class="form-check-label">
													<input class="form-check-input" type="radio" name="type" value="Meeting"> Meeting
													</label>
												</div>
											</div>
										</div>
									</div>
									<div class="form-group row row-sm">
										<label class="col-sm-3 col-form-label">Start</label>
										<div class="col-sm-5">
											<input id="event-start-date" type="date" class="form-control" placeholder="Date">
											</div>
											<div class="col-sm-4">
												<input id="event-start-time" type="time" class="form-control" placeholder="Time">
												</div>
											</div>
											<div class="form-group row row-sm">
												<label class="col-sm-3 col-form-label">End</label>
												<div class="col-sm-5">
													<input id="event-end-date" type="date" class="form-control" placeholder="Date">
													</div>
													<div class="col-sm-4">
														<input id="event-end-time" type="time" class="form-control" placeholder="Time">
														</div>
													</div>
													<div class="form-group row">
														<label class="col-sm-3 col-form-label">Participate</label>
														<div class="col-sm-9">
															<div class="d-flex">
																<div id="event-participant" class="avatar-group">
																	<a href="#" class="avatar w-32 b-a b-white">
																		<img src="../assets/img/a0.jpg">
																		</a>
																		<a href="#" class="avatar w-32 b-a b-white">
																			<img src="../assets/img/a2.jpg">
																			</a>
																			<a href="#" class="avatar w-32 b-a b-white">
																				<img src="../assets/img/a3.jpg">
																				</a>
																				<a href="#" class="avatar w-32 b-a b-white">
																					<img src="../assets/img/a4.jpg">
																					</a>
																					<a href="#" class="avatar w-32 b-a b-white">
																						<img src="../assets/img/a5.jpg">
																						</a>
																					</div>
																					<a href="#" class="btn btn-icon btn-rounded btn-primary ml-1">
																						<svg
																							xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus">
																							<line x1="12" y1="5" x2="12" y2="19"></line>
																							<line x1="5" y1="12" x2="19" y2="12"></line>
																						</svg>
																					</a>
																				</div>
																			</div>
																		</div>
																		<div class="form-group row">
																			<label class="col-sm-3 col-form-label">Description</label>
																			<div class="col-sm-9">
																				<textarea id="event-desc" class="form-control" rows="6"></textarea>
																			</div>
																		</div>
																		<div class="form-group row">
																			<label class="col-sm-3"></label>
																			<div class="col-sm-9">
																				<button type="button" id="btn-save" class="btn gd-primary text-white btn-rounded">Save</button>
																			</div>
																		</div>
																	</form>
																</div>
															</div>
														</div>
													</div>
													<div id="fullcalendar" class="fc fc-unthemed fc-ltr" data-sr-id="19" style="; visibility: visible;  -webkit-transform: translateX(0) scale(1); opacity: 1;transform: translateX(0) scale(1); opacity: 1;-webkit-transition: -webkit-transform 0.5s cubic-bezier(0.6, 0.2, 0.1, 1) 0.01s, opacity 0.5s cubic-bezier(0.6, 0.2, 0.1, 1) 0.01s; transition: transform 0.5s cubic-bezier(0.6, 0.2, 0.1, 1) 0.01s, opacity 0.5s cubic-bezier(0.6, 0.2, 0.1, 1) 0.01s; ">
														<div class="fc-toolbar fc-header-toolbar">
															<div class="fc-left">
																<h2>Sep 22 – 28, 2019</h2>
																<button type="button" class="fc-prev-button fc-button fc-state-default fc-corner-left fc-corner-right">
																	<span class="fc-icon fc-icon-left-single-arrow"></span>
																</button>
																<button type="button" class="fc-next-button fc-button fc-state-default fc-corner-left fc-corner-right">
																	<span class="fc-icon fc-icon-right-single-arrow"></span>
																</button>
															</div>
															<div class="fc-right"></div>
															<div class="fc-center"></div>
															<div class="fc-clear"></div>
														</div>
														<div class="fc-view-container" style="">
															<div class="fc-view fc-agendaWeek-view fc-agenda-view">
																<table class="">
																	<thead class="fc-head">
																		<tr>
																			<td class="fc-head-container fc-widget-header">
																				<div class="fc-row fc-widget-header">
																					<table class="">
																						<thead>
																							<tr>
																								<th class="fc-axis fc-widget-header" style="width:34px"></th>
																								<th class="fc-day-header fc-widget-header fc-sun fc-past" data-date="2019-09-22">
																									<span>22</span>
																									<span class="fc-week-title">Sunday</span>
																								</th>
																								<th class="fc-day-header fc-widget-header fc-mon fc-past" data-date="2019-09-23">
																									<span>23</span>
																									<span class="fc-week-title">Monday</span>
																								</th>
																								<th class="fc-day-header fc-widget-header fc-tue fc-today" data-date="2019-09-24">
																									<span>24</span>
																									<span class="fc-week-title">Tuesday</span>
																								</th>
																								<th class="fc-day-header fc-widget-header fc-wed fc-future" data-date="2019-09-25">
																									<span>25</span>
																									<span class="fc-week-title">Wednesday</span>
																								</th>
																								<th class="fc-day-header fc-widget-header fc-thu fc-future" data-date="2019-09-26">
																									<span>26</span>
																									<span class="fc-week-title">Thursday</span>
																								</th>
																								<th class="fc-day-header fc-widget-header fc-fri fc-future" data-date="2019-09-27">
																									<span>27</span>
																									<span class="fc-week-title">Friday</span>
																								</th>
																								<th class="fc-day-header fc-widget-header fc-sat fc-future" data-date="2019-09-28">
																									<span>28</span>
																									<span class="fc-week-title">Saturday</span>
																								</th>
																							</tr>
																						</thead>
																					</table>
																				</div>
																			</td>
																		</tr>
																	</thead>
																	<tbody class="fc-body">
																		<tr>
																			<td class="fc-widget-content">
																				<div class="fc-day-grid fc-unselectable">
																					<div class="fc-row fc-week fc-widget-content">
																						<div class="fc-bg">
																							<table class="">
																								<tbody>
																									<tr>
																										<td class="fc-axis fc-widget-content" style="width:34px">
																											<span>all-day</span>
																										</td>
																										<td class="fc-day fc-widget-content fc-sun fc-past" data-date="2019-09-22"></td>
																										<td class="fc-day fc-widget-content fc-mon fc-past" data-date="2019-09-23"></td>
																										<td class="fc-day fc-widget-content fc-tue fc-today " data-date="2019-09-24"></td>
																										<td class="fc-day fc-widget-content fc-wed fc-future" data-date="2019-09-25"></td>
																										<td class="fc-day fc-widget-content fc-thu fc-future" data-date="2019-09-26"></td>
																										<td class="fc-day fc-widget-content fc-fri fc-future" data-date="2019-09-27"></td>
																										<td class="fc-day fc-widget-content fc-sat fc-future" data-date="2019-09-28"></td>
																									</tr>
																								</tbody>
																							</table>
																						</div>
																						<div class="fc-content-skeleton">
																							<table>
																								<tbody>
																									<tr>
																										<td class="fc-axis" style="width:34px"></td>
																										<td></td>
																										<td></td>
																										<td></td>
																										<td></td>
																										<td></td>
																										<td></td>
																										<td></td>
																									</tr>
																								</tbody>
																							</table>
																						</div>
																					</div>
																				</div>
																				<hr class="fc-divider fc-widget-header">
																					<div class="fc-scroller fc-time-grid-container" style="overflow: hidden auto; height: auto;">
																						<div class="fc-time-grid fc-unselectable">
																							<div class="fc-bg">
																								<table class="">
																									<tbody>
																										<tr>
																											<td class="fc-axis fc-widget-content" style="width:34px"></td>
																											<td class="fc-day fc-widget-content fc-sun fc-past" data-date="2019-09-22"></td>
																											<td class="fc-day fc-widget-content fc-mon fc-past" data-date="2019-09-23"></td>
																											<td class="fc-day fc-widget-content fc-tue fc-today " data-date="2019-09-24"></td>
																											<td class="fc-day fc-widget-content fc-wed fc-future" data-date="2019-09-25"></td>
																											<td class="fc-day fc-widget-content fc-thu fc-future" data-date="2019-09-26"></td>
																											<td class="fc-day fc-widget-content fc-fri fc-future" data-date="2019-09-27"></td>
																											<td class="fc-day fc-widget-content fc-sat fc-future" data-date="2019-09-28"></td>
																										</tr>
																									</tbody>
																								</table>
																							</div>
																							<div class="fc-slats">
																								<table class="">
																									<tbody>
																										<tr data-time="00:00:00">
																											<td class="fc-axis fc-time fc-widget-content" style="width:34px">
																												<span>12am</span>
																											</td>
																											<td class="fc-widget-content"></td>
																										</tr>
																										<tr data-time="00:30:00" class="fc-minor">
																											<td class="fc-axis fc-time fc-widget-content" style="width:34px"></td>
																											<td class="fc-widget-content"></td>
																										</tr>
																										<tr data-time="01:00:00">
																											<td class="fc-axis fc-time fc-widget-content" style="width:34px">
																												<span>1am</span>
																											</td>
																											<td class="fc-widget-content"></td>
																										</tr>
																										<tr data-time="01:30:00" class="fc-minor">
																											<td class="fc-axis fc-time fc-widget-content" style="width:34px"></td>
																											<td class="fc-widget-content"></td>
																										</tr>
																										<tr data-time="02:00:00">
																											<td class="fc-axis fc-time fc-widget-content" style="width:34px">
																												<span>2am</span>
																											</td>
																											<td class="fc-widget-content"></td>
																										</tr>
																										<tr data-time="02:30:00" class="fc-minor">
																											<td class="fc-axis fc-time fc-widget-content" style="width:34px"></td>
																											<td class="fc-widget-content"></td>
																										</tr>
																										<tr data-time="03:00:00">
																											<td class="fc-axis fc-time fc-widget-content" style="width:34px">
																												<span>3am</span>
																											</td>
																											<td class="fc-widget-content"></td>
																										</tr>
																										<tr data-time="03:30:00" class="fc-minor">
																											<td class="fc-axis fc-time fc-widget-content" style="width:34px"></td>
																											<td class="fc-widget-content"></td>
																										</tr>
																										<tr data-time="04:00:00">
																											<td class="fc-axis fc-time fc-widget-content" style="width:34px">
																												<span>4am</span>
																											</td>
																											<td class="fc-widget-content"></td>
																										</tr>
																										<tr data-time="04:30:00" class="fc-minor">
																											<td class="fc-axis fc-time fc-widget-content" style="width:34px"></td>
																											<td class="fc-widget-content"></td>
																										</tr>
																										<tr data-time="05:00:00">
																											<td class="fc-axis fc-time fc-widget-content" style="width:34px">
																												<span>5am</span>
																											</td>
																											<td class="fc-widget-content"></td>
																										</tr>
																										<tr data-time="05:30:00" class="fc-minor">
																											<td class="fc-axis fc-time fc-widget-content" style="width:34px"></td>
																											<td class="fc-widget-content"></td>
																										</tr>
																										<tr data-time="06:00:00">
																											<td class="fc-axis fc-time fc-widget-content" style="width:34px">
																												<span>6am</span>
																											</td>
																											<td class="fc-widget-content"></td>
																										</tr>
																										<tr data-time="06:30:00" class="fc-minor">
																											<td class="fc-axis fc-time fc-widget-content" style="width:34px"></td>
																											<td class="fc-widget-content"></td>
																										</tr>
																										<tr data-time="07:00:00">
																											<td class="fc-axis fc-time fc-widget-content" style="width:34px">
																												<span>7am</span>
																											</td>
																											<td class="fc-widget-content"></td>
																										</tr>
																										<tr data-time="07:30:00" class="fc-minor">
																											<td class="fc-axis fc-time fc-widget-content" style="width:34px"></td>
																											<td class="fc-widget-content"></td>
																										</tr>
																										<tr data-time="08:00:00">
																											<td class="fc-axis fc-time fc-widget-content" style="width:34px">
																												<span>8am</span>
																											</td>
																											<td class="fc-widget-content"></td>
																										</tr>
																										<tr data-time="08:30:00" class="fc-minor">
																											<td class="fc-axis fc-time fc-widget-content" style="width:34px"></td>
																											<td class="fc-widget-content"></td>
																										</tr>
																										<tr data-time="09:00:00">
																											<td class="fc-axis fc-time fc-widget-content" style="width:34px">
																												<span>9am</span>
																											</td>
																											<td class="fc-widget-content"></td>
																										</tr>
																										<tr data-time="09:30:00" class="fc-minor">
																											<td class="fc-axis fc-time fc-widget-content" style="width:34px"></td>
																											<td class="fc-widget-content"></td>
																										</tr>
																										<tr data-time="10:00:00">
																											<td class="fc-axis fc-time fc-widget-content" style="width:34px">
																												<span>10am</span>
																											</td>
																											<td class="fc-widget-content"></td>
																										</tr>
																										<tr data-time="10:30:00" class="fc-minor">
																											<td class="fc-axis fc-time fc-widget-content" style="width:34px"></td>
																											<td class="fc-widget-content"></td>
																										</tr>
																										<tr data-time="11:00:00">
																											<td class="fc-axis fc-time fc-widget-content" style="width:34px">
																												<span>11am</span>
																											</td>
																											<td class="fc-widget-content"></td>
																										</tr>
																										<tr data-time="11:30:00" class="fc-minor">
																											<td class="fc-axis fc-time fc-widget-content" style="width:34px"></td>
																											<td class="fc-widget-content"></td>
																										</tr>
																										<tr data-time="12:00:00">
																											<td class="fc-axis fc-time fc-widget-content" style="width:34px">
																												<span>12pm</span>
																											</td>
																											<td class="fc-widget-content"></td>
																										</tr>
																										<tr data-time="12:30:00" class="fc-minor">
																											<td class="fc-axis fc-time fc-widget-content" style="width:34px"></td>
																											<td class="fc-widget-content"></td>
																										</tr>
																										<tr data-time="13:00:00">
																											<td class="fc-axis fc-time fc-widget-content" style="width:34px">
																												<span>1pm</span>
																											</td>
																											<td class="fc-widget-content"></td>
																										</tr>
																										<tr data-time="13:30:00" class="fc-minor">
																											<td class="fc-axis fc-time fc-widget-content" style="width:34px"></td>
																											<td class="fc-widget-content"></td>
																										</tr>
																										<tr data-time="14:00:00">
																											<td class="fc-axis fc-time fc-widget-content" style="width:34px">
																												<span>2pm</span>
																											</td>
																											<td class="fc-widget-content"></td>
																										</tr>
																										<tr data-time="14:30:00" class="fc-minor">
																											<td class="fc-axis fc-time fc-widget-content" style="width:34px"></td>
																											<td class="fc-widget-content"></td>
																										</tr>
																										<tr data-time="15:00:00">
																											<td class="fc-axis fc-time fc-widget-content" style="width:34px">
																												<span>3pm</span>
																											</td>
																											<td class="fc-widget-content"></td>
																										</tr>
																										<tr data-time="15:30:00" class="fc-minor">
																											<td class="fc-axis fc-time fc-widget-content" style="width:34px"></td>
																											<td class="fc-widget-content"></td>
																										</tr>
																										<tr data-time="16:00:00">
																											<td class="fc-axis fc-time fc-widget-content" style="width:34px">
																												<span>4pm</span>
																											</td>
																											<td class="fc-widget-content"></td>
																										</tr>
																										<tr data-time="16:30:00" class="fc-minor">
																											<td class="fc-axis fc-time fc-widget-content" style="width:34px"></td>
																											<td class="fc-widget-content"></td>
																										</tr>
																										<tr data-time="17:00:00">
																											<td class="fc-axis fc-time fc-widget-content" style="width:34px">
																												<span>5pm</span>
																											</td>
																											<td class="fc-widget-content"></td>
																										</tr>
																										<tr data-time="17:30:00" class="fc-minor">
																											<td class="fc-axis fc-time fc-widget-content" style="width:34px"></td>
																											<td class="fc-widget-content"></td>
																										</tr>
																										<tr data-time="18:00:00">
																											<td class="fc-axis fc-time fc-widget-content" style="width:34px">
																												<span>6pm</span>
																											</td>
																											<td class="fc-widget-content"></td>
																										</tr>
																										<tr data-time="18:30:00" class="fc-minor">
																											<td class="fc-axis fc-time fc-widget-content" style="width:34px"></td>
																											<td class="fc-widget-content"></td>
																										</tr>
																										<tr data-time="19:00:00">
																											<td class="fc-axis fc-time fc-widget-content" style="width:34px">
																												<span>7pm</span>
																											</td>
																											<td class="fc-widget-content"></td>
																										</tr>
																										<tr data-time="19:30:00" class="fc-minor">
																											<td class="fc-axis fc-time fc-widget-content" style="width:34px"></td>
																											<td class="fc-widget-content"></td>
																										</tr>
																										<tr data-time="20:00:00">
																											<td class="fc-axis fc-time fc-widget-content" style="width:34px">
																												<span>8pm</span>
																											</td>
																											<td class="fc-widget-content"></td>
																										</tr>
																										<tr data-time="20:30:00" class="fc-minor">
																											<td class="fc-axis fc-time fc-widget-content" style="width:34px"></td>
																											<td class="fc-widget-content"></td>
																										</tr>
																										<tr data-time="21:00:00">
																											<td class="fc-axis fc-time fc-widget-content" style="width:34px">
																												<span>9pm</span>
																											</td>
																											<td class="fc-widget-content"></td>
																										</tr>
																										<tr data-time="21:30:00" class="fc-minor">
																											<td class="fc-axis fc-time fc-widget-content" style="width:34px"></td>
																											<td class="fc-widget-content"></td>
																										</tr>
																										<tr data-time="22:00:00">
																											<td class="fc-axis fc-time fc-widget-content" style="width:34px">
																												<span>10pm</span>
																											</td>
																											<td class="fc-widget-content"></td>
																										</tr>
																										<tr data-time="22:30:00" class="fc-minor">
																											<td class="fc-axis fc-time fc-widget-content" style="width:34px"></td>
																											<td class="fc-widget-content"></td>
																										</tr>
																										<tr data-time="23:00:00">
																											<td class="fc-axis fc-time fc-widget-content" style="width:34px">
																												<span>11pm</span>
																											</td>
																											<td class="fc-widget-content"></td>
																										</tr>
																										<tr data-time="23:30:00" class="fc-minor">
																											<td class="fc-axis fc-time fc-widget-content" style="width:34px"></td>
																											<td class="fc-widget-content"></td>
																										</tr>
																									</tbody>
																								</table>
																							</div>
																							<div class="fc-content-skeleton">
																								<table>
																									<tbody>
																										<tr>
																											<td class="fc-axis" style="width:34px"></td>
																											<td>
																												<div class="fc-content-col">
																													<div class="fc-event-container fc-helper-container"></div>
																													<div class="fc-event-container">
																														<a class="fc-time-grid-event fc-v-event fc-event fc-start fc-end block b-t b-t-2x b-primary fc-draggable fc-resizable" data-sr-id="37" style="top: 351px; bottom: -879px; z-index: 1; left: 0%; right: 0%; visibility: visible; transform: none; opacity: 1; transition: transform 0.5s cubic-bezier(0.6, 0.2, 0.1, 1) 0.5s, opacity 0.5s cubic-bezier(0.6, 0.2, 0.1, 1) 0.5s;">
																															<div class="fc-content">
																																<div class="fc-time" data-start="8:00" data-full="8:00 AM - 8:00 PM">
																																	<span>8:00 - 8:00</span>
																																</div>
																																<div class="fc-title">New Project Kick-off meeting</div>
																																<div class="mt-1 text-muted">Augue onec eleifend nisl eu</div>
																																<div class="d-flex my-3 avatar-group">
																																	<a href="#" class="avatar w-24">
																																		<img src="../assets/img/a1.jpg">
																																		</a>
																																		<a href="#" class="avatar w-24">
																																			<img src="../assets/img/a2.jpg">
																																			</a>
																																			<a href="#" class="avatar w-24">
																																				<img src="../assets/img/a4.jpg">
																																				</a>
																																				<a href="#" class="avatar w-24">
																																					<img src="../assets/img/a7.jpg">
																																					</a>
																																					<a href="#" class="avatar w-24">
																																						<img src="../assets/img/a9.jpg">
																																						</a>
																																					</div>
																																				</div>
																																				<div class="fc-bg"></div>
																																				<div class="fc-resizer fc-end-resizer"></div>
																																			</a>
																																		</div>
																																		<div class="fc-highlight-container"></div>
																																		<div class="fc-bgevent-container"></div>
																																		<div class="fc-business-container"></div>
																																	</div>
																																</td>
																																<td>
																																	<div class="fc-content-col">
																																		<div class="fc-event-container fc-helper-container"></div>
																																		<div class="fc-event-container">
																																			<a class="fc-time-grid-event fc-v-event fc-event fc-start fc-end block b-t b-t-2x b-info fc-draggable fc-resizable" data-sr-id="38" style="top: 266.667px; bottom: -589.333px; z-index: 1; left: 0%; right: 0%; visibility: visible; transform: none; opacity: 1; transition: transform 0.5s cubic-bezier(0.6, 0.2, 0.1, 1) 0.5s, opacity 0.5s cubic-bezier(0.6, 0.2, 0.1, 1) 0.5s;">
																																				<div class="fc-content">
																																					<div class="fc-time" data-start="6:05" data-full="6:05 AM - 1:25 PM">
																																						<span>6:05 - 1:25</span>
																																					</div>
																																					<div class="fc-title">Meet Mike at company office</div>
																																					<div class="mt-1 text-muted">Phasellus at ultricies neque augue</div>
																																					<div class="d-flex my-3 avatar-group">
																																						<a href="#" class="avatar w-24">
																																							<img src="../assets/img/a4.jpg">
																																							</a>
																																							<a href="#" class="avatar w-24">
																																								<img src="../assets/img/a5.jpg">
																																								</a>
																																								<a href="#" class="avatar w-24">
																																									<img src="../assets/img/a7.jpg">
																																									</a>
																																									<a href="#" class="avatar w-24">
																																										<img src="../assets/img/a8.jpg">
																																										</a>
																																									</div>
																																								</div>
																																								<div class="fc-bg"></div>
																																								<div class="fc-resizer fc-end-resizer"></div>
																																							</a>
																																						</div>
																																						<div class="fc-highlight-container"></div>
																																						<div class="fc-bgevent-container"></div>
																																						<div class="fc-business-container"></div>
																																					</div>
																																				</td>
																																				<td>
																																					<div class="fc-content-col">
																																						<div class="fc-event-container fc-helper-container"></div>
																																						<div class="fc-event-container">
																																							<a class="fc-time-grid-event fc-v-event fc-event fc-start fc-end block b-t b-t-2x b-success fc-draggable fc-resizable" data-sr-id="39" style="top: 358.333px; bottom: -519.667px; z-index: 1; left: 0%; right: 0%; visibility: visible; transform: none; opacity: 1; transition: transform 0.5s cubic-bezier(0.6, 0.2, 0.1, 1) 0.5s, opacity 0.5s cubic-bezier(0.6, 0.2, 0.1, 1) 0.5s;">
																																								<div class="fc-content">
																																									<div class="fc-time" data-start="8:10" data-full="8:10 AM - 11:50 AM">
																																										<span>8:10 - 11:50</span>
																																									</div>
																																									<div class="fc-title">Travel IOS application mockup design</div>
																																									<div class="mt-1 text-muted">Quis malesuada augue</div>
																																									<div class="d-flex my-3 avatar-group">
																																										<a href="#" class="avatar w-24">
																																											<img src="../assets/img/a6.jpg">
																																											</a>
																																											<a href="#" class="avatar w-24">
																																												<img src="../assets/img/a7.jpg">
																																												</a>
																																											</div>
																																										</div>
																																										<div class="fc-bg"></div>
																																										<div class="fc-resizer fc-end-resizer"></div>
																																									</a>
																																								</div>
																																								<div class="fc-highlight-container"></div>
																																								<div class="fc-bgevent-container"></div>
																																								<div class="fc-business-container"></div>
																																							</div>
																																						</td>
																																						<td>
																																							<div class="fc-content-col">
																																								<div class="fc-event-container fc-helper-container"></div>
																																								<div class="fc-event-container">
																																									<a class="fc-time-grid-event fc-v-event fc-event fc-start fc-end block b-t b-t-2x b-danger fc-draggable fc-resizable" data-sr-id="40" style="top: 10.5px; bottom: -582px; z-index: 1; left: 0%; right: 0%; visibility: visible; transform: none; opacity: 1; transition: transform 0.5s cubic-bezier(0.6, 0.2, 0.1, 1) 0.5s, opacity 0.5s cubic-bezier(0.6, 0.2, 0.1, 1) 0.5s;">
																																										<div class="fc-content">
																																											<div class="fc-time" data-start="12:15" data-full="12:15 AM - 1:15 PM">
																																												<span>12:15 - 1:15</span>
																																											</div>
																																											<div class="fc-title">Weekly report meeting</div>
																																											<div class="mt-1 text-muted">Donec eleifend nisl eu consectetur.</div>
																																											<div class="d-flex my-3 avatar-group">
																																												<a href="#" class="avatar w-24">
																																													<img src="../assets/img/a3.jpg">
																																													</a>
																																													<a href="#" class="avatar w-24">
																																														<img src="../assets/img/a6.jpg">
																																														</a>
																																													</div>
																																												</div>
																																												<div class="fc-bg"></div>
																																												<div class="fc-resizer fc-end-resizer"></div>
																																											</a>
																																											<a class="fc-time-grid-event fc-v-event fc-event fc-start fc-not-end block b-t b-t-2x b-warning fc-draggable fc-short" data-sr-id="41" style="top: 1025.67px; bottom: -1055px; z-index: 1; left: 0%; right: 0%; visibility: visible; transform: none; opacity: 1; transition: transform 0.5s cubic-bezier(0.6, 0.2, 0.1, 1) 0.5s, opacity 0.5s cubic-bezier(0.6, 0.2, 0.1, 1) 0.5s;">
																																												<div class="fc-content">
																																													<div class="fc-time" data-start="11:20" data-full="11:20 PM - 12:00 AM">
																																														<span>11:20 - 12:00</span>
																																													</div>
																																													<div class="fc-title">All day Meeting</div>
																																													<div class="mt-1 text-muted">Malesuada augue onec eleifend nisl eu.</div>
																																													<div class="d-flex my-3 avatar-group">
																																														<a href="#" class="avatar w-24">
																																															<img src="../assets/img/a2.jpg">
																																															</a>
																																															<a href="#" class="avatar w-24">
																																																<img src="../assets/img/a6.jpg">
																																																</a>
																																																<a href="#" class="avatar w-24">
																																																	<img src="../assets/img/a8.jpg">
																																																	</a>
																																																	<a href="#" class="avatar w-24">
																																																		<img src="../assets/img/a9.jpg">
																																																		</a>
																																																	</div>
																																																</div>
																																																<div class="fc-bg"></div>
																																															</a>
																																														</div>
																																														<div class="fc-highlight-container"></div>
																																														<div class="fc-bgevent-container"></div>
																																														<div class="fc-business-container"></div>
																																													</div>
																																												</td>
																																												<td>
																																													<div class="fc-content-col">
																																														<div class="fc-event-container fc-helper-container"></div>
																																														<div class="fc-event-container">
																																															<a class="fc-time-grid-event fc-v-event fc-event fc-not-start fc-end block b-t b-t-2x b-warning fc-draggable fc-resizable" data-sr-id="42" style="top: 0px; bottom: -424.333px; z-index: 1; left: 0%; right: 0%; visibility: visible; transform: none; opacity: 1; transition: transform 0.5s cubic-bezier(0.6, 0.2, 0.1, 1) 0.5s, opacity 0.5s cubic-bezier(0.6, 0.2, 0.1, 1) 0.5s;">
																																																<div class="fc-content">
																																																	<div class="fc-time" data-start="12:00" data-full="12:00 AM - 9:40 AM">
																																																		<span>12:00 - 9:40</span>
																																																	</div>
																																																	<div class="fc-title">All day Meeting</div>
																																																	<div class="mt-1 text-muted">Malesuada augue onec eleifend nisl eu.</div>
																																																	<div class="d-flex my-3 avatar-group">
																																																		<a href="#" class="avatar w-24">
																																																			<img src="../assets/img/a2.jpg">
																																																			</a>
																																																			<a href="#" class="avatar w-24">
																																																				<img src="../assets/img/a6.jpg">
																																																				</a>
																																																				<a href="#" class="avatar w-24">
																																																					<img src="../assets/img/a8.jpg">
																																																					</a>
																																																					<a href="#" class="avatar w-24">
																																																						<img src="../assets/img/a9.jpg">
																																																						</a>
																																																					</div>
																																																				</div>
																																																				<div class="fc-bg"></div>
																																																				<div class="fc-resizer fc-end-resizer"></div>
																																																			</a>
																																																			<a class="fc-time-grid-event fc-v-event fc-event fc-start fc-not-end block b-t b-t-2x b-primary fc-draggable fc-short" data-sr-id="43" style="top: 1029.33px; bottom: -1055px; z-index: 1; left: 0%; right: 0%; visibility: visible; transform: none; opacity: 1; transition: transform 0.5s cubic-bezier(0.6, 0.2, 0.1, 1) 0.5s, opacity 0.5s cubic-bezier(0.6, 0.2, 0.1, 1) 0.5s;">
																																																				<div class="fc-content">
																																																					<div class="fc-time" data-start="11:25" data-full="11:25 PM - 12:00 AM">
																																																						<span>11:25 - 12:00</span>
																																																					</div>
																																																					<div class="fc-title">Repeating Meeting</div>
																																																					<div class="mt-1 text-muted">Donec eleifend nisl eu consectetur.</div>
																																																					<div class="d-flex my-3 avatar-group">
																																																						<a href="#" class="avatar w-24">
																																																							<img src="../assets/img/a6.jpg">
																																																							</a>
																																																							<a href="#" class="avatar w-24">
																																																								<img src="../assets/img/a9.jpg">
																																																								</a>
																																																							</div>
																																																						</div>
																																																						<div class="fc-bg"></div>
																																																					</a>
																																																				</div>
																																																				<div class="fc-highlight-container"></div>
																																																				<div class="fc-bgevent-container"></div>
																																																				<div class="fc-business-container"></div>
																																																			</div>
																																																		</td>
																																																		<td>
																																																			<div class="fc-content-col">
																																																				<div class="fc-event-container fc-helper-container"></div>
																																																				<div class="fc-event-container">
																																																					<a class="fc-time-grid-event fc-v-event fc-event fc-not-start fc-end block b-t b-t-2x b-primary fc-draggable fc-resizable" data-sr-id="44" style="top: 0px; bottom: -574.667px; z-index: 1; left: 0%; right: 0%; visibility: visible; transform: none; opacity: 1; transition: transform 0.5s cubic-bezier(0.6, 0.2, 0.1, 1) 0.5s, opacity 0.5s cubic-bezier(0.6, 0.2, 0.1, 1) 0.5s;">
																																																						<div class="fc-content">
																																																							<div class="fc-time" data-start="12:00" data-full="12:00 AM - 1:05 PM">
																																																								<span>12:00 - 1:05</span>
																																																							</div>
																																																							<div class="fc-title">Repeating Meeting</div>
																																																							<div class="mt-1 text-muted">Donec eleifend nisl eu consectetur.</div>
																																																							<div class="d-flex my-3 avatar-group">
																																																								<a href="#" class="avatar w-24">
																																																									<img src="../assets/img/a6.jpg">
																																																									</a>
																																																									<a href="#" class="avatar w-24">
																																																										<img src="../assets/img/a9.jpg">
																																																										</a>
																																																									</div>
																																																								</div>
																																																								<div class="fc-bg"></div>
																																																								<div class="fc-resizer fc-end-resizer"></div>
																																																							</a>
																																																						</div>
																																																						<div class="fc-highlight-container"></div>
																																																						<div class="fc-bgevent-container"></div>
																																																						<div class="fc-business-container"></div>
																																																					</div>
																																																				</td>
																																																				<td>
																																																					<div class="fc-content-col">
																																																						<div class="fc-event-container fc-helper-container"></div>
																																																						<div class="fc-event-container"></div>
																																																						<div class="fc-highlight-container"></div>
																																																						<div class="fc-bgevent-container"></div>
																																																						<div class="fc-business-container"></div>
																																																					</div>
																																																				</td>
																																																			</tr>
																																																		</tbody>
																																																	</table>
																																																</div>
																																																<hr class="fc-divider fc-widget-header" style="display: none;">
																																																</div>
																																															</div>
																																														</td>
																																													</tr>
																																												</tbody>
																																											</table>
																																										</div>
																																									</div>
																																								</div>
																																							</div>
    `,
    init: function() {
        document.getElementById('content').innerHTML = this.html;
    }
}