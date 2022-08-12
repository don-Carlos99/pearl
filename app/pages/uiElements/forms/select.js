var appSelect = {
    html: `
    <div class="">
	<div class="page-hero page-container" id="page-hero">
		<div class="padding d-flex">
			<div class="page-title">
				<h2 class="text-md text-highlight">Select</h2>
				<small class="text-muted">Replacement for select boxes</small>
			</div>
			<div class="flex"></div>
			
		</div>
	</div>
	<div class="page-content page-container" id="page-content">
		<div class="padding">
			<div class="row">
				<div class="col-sm-6">
					<div class="form-group">
						<label>Select2 single select</label>
						<select id="select2-single" class="form-control select2-hidden-accessible" tabindex="-1" aria-hidden="true">
							<optgroup label="Alaskan/Hawaiian Time Zone">
								<option value="AK">Alaska</option>
								<option value="HI" disabled="disabled">Hawaii</option>
							</optgroup>
							<optgroup label="Pacific Time Zone">
								<option value="CA">California</option>
								<option value="NV">Nevada</option>
								<option value="OR">Oregon</option>
								<option value="WA">Washington</option>
							</optgroup>
							<optgroup label="Mountain Time Zone">
								<option value="AZ">Arizona</option>
								<option value="CO">Colorado</option>
								<option value="ID">Idaho</option>
								<option value="MT">Montana</option>
								<option value="NE">Nebraska</option>
								<option value="NM">New Mexico</option>
								<option value="ND">North Dakota</option>
								<option value="UT">Utah</option>
								<option value="WY">Wyoming</option>
							</optgroup>
							<optgroup label="Central Time Zone">
								<option value="AL">Alabama</option>
								<option value="AR">Arkansas</option>
								<option value="IL">Illinois</option>
								<option value="IA">Iowa</option>
								<option value="KS">Kansas</option>
								<option value="KY">Kentucky</option>
								<option value="LA">Louisiana</option>
								<option value="MN">Minnesota</option>
								<option value="MS">Mississippi</option>
								<option value="MO">Missouri</option>
								<option value="OK">Oklahoma</option>
								<option value="SD">South Dakota</option>
								<option value="TX">Texas</option>
								<option value="TN">Tennessee</option>
								<option value="WI">Wisconsin</option>
							</optgroup>
							<optgroup label="Eastern Time Zone">
								<option value="CT">Connecticut</option>
								<option value="DE">Delaware</option>
								<option value="FL">Florida</option>
								<option value="GA">Georgia</option>
								<option value="IN">Indiana</option>
								<option value="ME">Maine</option>
								<option value="MD">Maryland</option>
								<option value="MA">Massachusetts</option>
								<option value="MI">Michigan</option>
								<option value="NH">New Hampshire</option>
								<option value="NJ">New Jersey</option>
								<option value="NY">New York</option>
								<option value="NC">North Carolina</option>
								<option value="OH">Ohio</option>
								<option value="PA">Pennsylvania</option>
								<option value="RI">Rhode Island</option>
								<option value="SC">South Carolina</option>
								<option value="VT">Vermont</option>
								<option value="VA">Virginia</option>
								<option value="WV">West Virginia</option>
							</optgroup>
						</select>
						<span class="select2 select2-container select2-container--default" dir="ltr" style="width: 519.5px;">
							<span class="selection">
								<span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-labelledby="select2-select2-single-container">
									<span class="select2-selection__rendered" id="select2-select2-single-container" title="Alaska">Alaska</span>
									<span class="select2-selection__arrow" role="presentation">
										<b role="presentation"></b>
									</span>
								</span>
							</span>
							<span class="dropdown-wrapper" aria-hidden="true"></span>
						</span>
					</div>
					<div class="form-group">
						<label>Select2 multi select</label>
						<select id="select2-multiple" class="form-control select2-hidden-accessible" multiple="" tabindex="-1" aria-hidden="true">
							<optgroup label="Alaskan/Hawaiian Time Zone">
								<option value="AK">Alaska</option>
								<option value="HI" disabled="disabled">Hawaii</option>
							</optgroup>
							<optgroup label="Pacific Time Zone">
								<option value="CA">California</option>
								<option value="NV">Nevada</option>
								<option value="OR">Oregon</option>
								<option value="WA">Washington</option>
							</optgroup>
							<optgroup label="Mountain Time Zone">
								<option value="AZ">Arizona</option>
								<option value="CO">Colorado</option>
								<option value="ID">Idaho</option>
								<option value="MT">Montana</option>
								<option value="NE">Nebraska</option>
								<option value="NM">New Mexico</option>
								<option value="ND">North Dakota</option>
								<option value="UT">Utah</option>
								<option value="WY">Wyoming</option>
							</optgroup>
							<optgroup label="Central Time Zone">
								<option value="AL">Alabama</option>
								<option value="AR">Arkansas</option>
								<option value="IL">Illinois</option>
								<option value="IA">Iowa</option>
								<option value="KS">Kansas</option>
								<option value="KY">Kentucky</option>
								<option value="LA">Louisiana</option>
								<option value="MN">Minnesota</option>
								<option value="MS">Mississippi</option>
								<option value="MO">Missouri</option>
								<option value="OK">Oklahoma</option>
								<option value="SD">South Dakota</option>
								<option value="TX">Texas</option>
								<option value="TN">Tennessee</option>
								<option value="WI">Wisconsin</option>
							</optgroup>
							<optgroup label="Eastern Time Zone">
								<option value="CT">Connecticut</option>
								<option value="DE">Delaware</option>
								<option value="FL">Florida</option>
								<option value="GA">Georgia</option>
								<option value="IN">Indiana</option>
								<option value="ME">Maine</option>
								<option value="MD">Maryland</option>
								<option value="MA">Massachusetts</option>
								<option value="MI">Michigan</option>
								<option value="NH">New Hampshire</option>
								<option value="NJ">New Jersey</option>
								<option value="NY">New York</option>
								<option value="NC">North Carolina</option>
								<option value="OH">Ohio</option>
								<option value="PA">Pennsylvania</option>
								<option value="RI">Rhode Island</option>
								<option value="SC">South Carolina</option>
								<option value="VT">Vermont</option>
								<option value="VA">Virginia</option>
								<option value="WV">West Virginia</option>
							</optgroup>
						</select>
						<span class="select2 select2-container select2-container--default" dir="ltr" style="width: 519.5px;">
							<span class="selection">
								<span class="select2-selection select2-selection--multiple" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="-1">
									<ul class="select2-selection__rendered">
										<li class="select2-search select2-search--inline">
											<input class="select2-search__field" type="search" tabindex="0" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" role="textbox" aria-autocomplete="list" placeholder="" style="width: 0.75em;">
											</li>
										</ul>
									</span>
								</span>
								<span class="dropdown-wrapper" aria-hidden="true"></span>
							</span>
						</div>
						<div class="form-group">
							<label>Datasource</label>
							<select id="select2-data" class="form-control select2-hidden-accessible" tabindex="-1" aria-hidden="true">
								<option value="0">enhancement</option>
								<option value="1">bug</option>
								<option value="2">duplicate</option>
								<option value="3">invalid</option>
								<option value="4">wontfix</option>
							</select>
							<span class="select2 select2-container select2-container--default" dir="ltr" style="width: 519.5px;">
								<span class="selection">
									<span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-labelledby="select2-select2-data-container">
										<span class="select2-selection__rendered" id="select2-select2-data-container" title="enhancement">enhancement</span>
										<span class="select2-selection__arrow" role="presentation">
											<b role="presentation"></b>
										</span>
									</span>
								</span>
								<span class="dropdown-wrapper" aria-hidden="true"></span>
							</span>
						</div>
						<div class="form-group">
							<label>Ajax</label>
							<select id="select2-ajax" class="form-control select2-hidden-accessible" data-placeholder="Search a repo" tabindex="-1" aria-hidden="true"></select>
							<span class="select2 select2-container select2-container--default" dir="ltr" style="width: 519.5px;">
								<span class="selection">
									<span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-labelledby="select2-select2-ajax-container">
										<span class="select2-selection__rendered" id="select2-select2-ajax-container">
											<span class="select2-selection__placeholder">Search a repo</span>
										</span>
										<span class="select2-selection__arrow" role="presentation">
											<b role="presentation"></b>
										</span>
									</span>
								</span>
								<span class="dropdown-wrapper" aria-hidden="true"></span>
							</span>
						</div>
					</div>
					<div class="col-sm-6">
						<div class="form-group">
							<label>Placeholder</label>
							<select class="form-control select2-hidden-accessible" data-placeholder="Select an option" tabindex="-1" aria-hidden="true">
								<option></option>
								<optgroup label="Alaskan/Hawaiian Time Zone">
									<option value="AK">Alaska</option>
									<option value="HI" disabled="disabled">Hawaii</option>
								</optgroup>
								<optgroup label="Pacific Time Zone">
									<option value="CA">California</option>
									<option value="NV">Nevada</option>
									<option value="OR">Oregon</option>
									<option value="WA">Washington</option>
								</optgroup>
								<optgroup label="Mountain Time Zone">
									<option value="AZ">Arizona</option>
									<option value="CO">Colorado</option>
									<option value="ID">Idaho</option>
									<option value="MT">Montana</option>
									<option value="NE">Nebraska</option>
									<option value="NM">New Mexico</option>
									<option value="ND">North Dakota</option>
									<option value="UT">Utah</option>
									<option value="WY">Wyoming</option>
								</optgroup>
								<optgroup label="Central Time Zone">
									<option value="AL">Alabama</option>
									<option value="AR">Arkansas</option>
									<option value="IL">Illinois</option>
									<option value="IA">Iowa</option>
									<option value="KS">Kansas</option>
									<option value="KY">Kentucky</option>
									<option value="LA">Louisiana</option>
									<option value="MN">Minnesota</option>
									<option value="MS">Mississippi</option>
									<option value="MO">Missouri</option>
									<option value="OK">Oklahoma</option>
									<option value="SD">South Dakota</option>
									<option value="TX">Texas</option>
									<option value="TN">Tennessee</option>
									<option value="WI">Wisconsin</option>
								</optgroup>
								<optgroup label="Eastern Time Zone">
									<option value="CT">Connecticut</option>
									<option value="DE">Delaware</option>
									<option value="FL">Florida</option>
									<option value="GA">Georgia</option>
									<option value="IN">Indiana</option>
									<option value="ME">Maine</option>
									<option value="MD">Maryland</option>
									<option value="MA">Massachusetts</option>
									<option value="MI">Michigan</option>
									<option value="NH">New Hampshire</option>
									<option value="NJ">New Jersey</option>
									<option value="NY">New York</option>
									<option value="NC">North Carolina</option>
									<option value="OH">Ohio</option>
									<option value="PA">Pennsylvania</option>
									<option value="RI">Rhode Island</option>
									<option value="SC">South Carolina</option>
									<option value="VT">Vermont</option>
									<option value="VA">Virginia</option>
									<option value="WV">West Virginia</option>
								</optgroup>
							</select>
							<span class="select2 select2-container select2-container--default" dir="ltr" style="width: 519.5px;">
								<span class="selection">
									<span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-labelledby="select2-casc-container">
										<span class="select2-selection__rendered" id="select2-casc-container">
											<span class="select2-selection__placeholder">Select an option</span>
										</span>
										<span class="select2-selection__arrow" role="presentation">
											<b role="presentation"></b>
										</span>
									</span>
								</span>
								<span class="dropdown-wrapper" aria-hidden="true"></span>
							</span>
						</div>
						<div class="form-group">
							<label>Allow clear</label>
							<select class="form-control select2-hidden-accessible" id="select2-allow-clear" multiple="" data-allow-clear="true" tabindex="-1" aria-hidden="true">
								<optgroup label="Alaskan/Hawaiian Time Zone">
									<option value="AK">Alaska</option>
									<option value="HI" disabled="disabled">Hawaii</option>
								</optgroup>
								<optgroup label="Pacific Time Zone">
									<option value="CA">California</option>
									<option value="NV">Nevada</option>
									<option value="OR">Oregon</option>
									<option value="WA">Washington</option>
								</optgroup>
								<optgroup label="Mountain Time Zone">
									<option value="AZ">Arizona</option>
									<option value="CO">Colorado</option>
									<option value="ID">Idaho</option>
									<option value="MT">Montana</option>
									<option value="NE">Nebraska</option>
									<option value="NM">New Mexico</option>
									<option value="ND">North Dakota</option>
									<option value="UT">Utah</option>
									<option value="WY">Wyoming</option>
								</optgroup>
								<optgroup label="Central Time Zone">
									<option value="AL">Alabama</option>
									<option value="AR">Arkansas</option>
									<option value="IL">Illinois</option>
									<option value="IA">Iowa</option>
									<option value="KS">Kansas</option>
									<option value="KY">Kentucky</option>
									<option value="LA">Louisiana</option>
									<option value="MN">Minnesota</option>
									<option value="MS">Mississippi</option>
									<option value="MO">Missouri</option>
									<option value="OK">Oklahoma</option>
									<option value="SD">South Dakota</option>
									<option value="TX">Texas</option>
									<option value="TN">Tennessee</option>
									<option value="WI">Wisconsin</option>
								</optgroup>
								<optgroup label="Eastern Time Zone">
									<option value="CT">Connecticut</option>
									<option value="DE">Delaware</option>
									<option value="FL">Florida</option>
									<option value="GA">Georgia</option>
									<option value="IN">Indiana</option>
									<option value="ME">Maine</option>
									<option value="MD">Maryland</option>
									<option value="MA">Massachusetts</option>
									<option value="MI">Michigan</option>
									<option value="NH">New Hampshire</option>
									<option value="NJ">New Jersey</option>
									<option value="NY">New York</option>
									<option value="NC">North Carolina</option>
									<option value="OH">Ohio</option>
									<option value="PA">Pennsylvania</option>
									<option value="RI">Rhode Island</option>
									<option value="SC">South Carolina</option>
									<option value="VT">Vermont</option>
									<option value="VA">Virginia</option>
									<option value="WV">West Virginia</option>
								</optgroup>
							</select>
							<span class="select2 select2-container select2-container--default" dir="ltr" style="width: 519.5px;">
								<span class="selection">
									<span class="select2-selection select2-selection--multiple" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="-1">
										<ul class="select2-selection__rendered">
											<li class="select2-search select2-search--inline">
												<input class="select2-search__field" type="search" tabindex="0" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" role="textbox" aria-autocomplete="list" placeholder="" style="width: 0.75em;">
												</li>
											</ul>
										</span>
									</span>
									<span class="dropdown-wrapper" aria-hidden="true"></span>
								</span>
							</div>
							<div class="form-group">
								<label>Disabling options</label>
								<select class="form-control select2-hidden-accessible" tabindex="-1" aria-hidden="true">
									<option value="one">First</option>
									<option value="two" disabled="disabled">Second (disabled)</option>
									<option value="three">Third</option>
								</select>
								<span class="select2 select2-container select2-container--default" dir="ltr" style="width: 519.5px;">
									<span class="selection">
										<span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-labelledby="select2-25gl-container">
											<span class="select2-selection__rendered" id="select2-25gl-container" title="First">First</span>
											<span class="select2-selection__arrow" role="presentation">
												<b role="presentation"></b>
											</span>
										</span>
									</span>
									<span class="dropdown-wrapper" aria-hidden="true"></span>
								</span>
							</div>
							<div class="form-group">
								<label>Disabling search</label>
								<select class="form-control select2-hidden-accessible" data-minimum-results-for-search="Infinity" tabindex="-1" aria-hidden="true">
									<option value="one">First</option>
									<option value="two" disabled="disabled">Second (disabled)</option>
									<option value="three">Third</option>
								</select>
								<span class="select2 select2-container select2-container--default" dir="ltr" style="width: 519.5px;">
									<span class="selection">
										<span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-labelledby="select2-oo2k-container">
											<span class="select2-selection__rendered" id="select2-oo2k-container" title="First">First</span>
											<span class="select2-selection__arrow" role="presentation">
												<b role="presentation"></b>
											</span>
										</span>
									</span>
									<span class="dropdown-wrapper" aria-hidden="true"></span>
								</span>
							</div>
						</div>
					</div>
					<p>
						<strong>Typeahead</strong>
					</p>
					<div class="card p-3">
						<form class="input-group m-2 my-lg-0">
							<div class="input-group-prepend">
								<button type="button" class="btn no-shadow no-bg px-0">
									<svg
										xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search">
										<circle cx="11" cy="11" r="8"></circle>
										<line x1="21" y1="21" x2="16.65" y2="16.65"></line>
									</svg>
								</button>
							</div>
							<span class="twitter-typeahead" style="position: relative; display: inline-block;">
								<input type="text" class="form-control no-border no-shadow no-bg typeahead tt-hint" data-api="../assets/api/menu.json" readonly="" autocomplete="off" spellcheck="false" tabindex="-1" style="position: absolute; top: 0px; left: 0px; border-color: transparent; box-shadow: none; opacity: 1; background: none 0px 0px / auto repeat scroll padding-box border-box rgba(0, 0, 0, 0);" dir="ltr">
									<input type="text" class="form-control no-border no-shadow no-bg typeahead tt-input" placeholder="Search components..." data-api="../assets/api/menu.json" autocomplete="off" spellcheck="false" dir="auto" style="position: relative; vertical-align: top; background-color: transparent;">
										<pre aria-hidden="true" style="position: absolute; visibility: hidden; white-space: pre; font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;; font-size: 14px; font-style: normal; font-variant: normal; font-weight: 400; word-spacing: 0px; letter-spacing: 0px; text-indent: 0px; text-rendering: auto; text-transform: none;"></pre>
										<div class="dropdown-menu mt-3" style="position: absolute; top: 100%; left: 0px; z-index: 100; display: none;">
											<div class="tt-dataset tt-dataset-3"></div>
										</div>
									</span>
								</form>
							</div>
						</div>
					</div>
				</div>
    `,
    init: function() {
        document.getElementById('content').innerHTML = this.html;
    }
}