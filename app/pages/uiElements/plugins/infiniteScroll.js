var appInfiniteScroll = {
    html: `
    <div class="">
	<div class="page-hero page-container" id="page-hero">
		<div class="padding d-flex">
			<div class="page-title">
				<h2 class="text-md text-highlight">Scroll</h2>
				<small class="text-muted">An infinite scrolling plugin</small>
			</div>
			<div class="flex"></div>
			
		</div>
	</div>
	<div class="page-content page-container" id="page-content">
		<div class="padding">
			<div class="row">
				<div class="col-sm-12">
					<div class="card">
						<div class="card-header">
							<strong>Infinite Scroll</strong>
						</div>
						<div class="list list-row">
							<div class="infiniteScroll1">
										
									</div>
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
        this.getNext10();
        this.infiniteScroll();
    },
    printData: function(data) {
        for (element of data) {
            var a =
                `<div class="list-item" >
			    <div>
				<a href="#">
					<span class="w-48 avatar gd-${element.avatarColor}">
					${element.avatar}
						</span>
					</a>
				</div>
				<div class="flex">
					<a href="#" class="item-author text-color text-muted">${element.name}</a>
					<div class="item-feed h-2x">${element.text}</div>
				</div>
				<div class="no-wrap">
					<div class="item-date text-muted text-sm d-none d-md-block">${element.date}</div>
				</div>
			</div>`;
            $(".infiniteScroll1").append(a);
            // console.log('this is the data ', element);

        }
    },
    getNext10: function() {
        this.printData(this.generateData());
    },
    generateData: function() {
        var number = 10;
        var listArray = [];
        var avatarColor = ['info', 'warning', 'danger', 'success'];
        var avatar = ['A', 'B', 'F', 'P', 'I', 'U', 'G', '<img src="../assets/img/a8.jpg" alt=".">', '<img src="../assets/img/a1.jpg" alt=".">', '<img src="../assets/img/a4.jpg" alt=".">', ];
        var text = [
            'Alibaba made a smart screen @Alibaba',
            'Prepare the documentation for the Fitness app',
            'Fun project from this weekend. Both computer replicas are fully functional',
            'AI will deliver adaptive learning processes in assessments & digital textbooks to personalize learning',
            'Just saw this on the @eBay dashboard, dude is an absolute unit.',
            'The biggest software developer conference',
            'Thanks! Awesome to see good support on Twitter',
            'Big News! Introducing NextUX Enterprise 2.1 - additional #Windows Server support',
            'Thanks! Awesome to see good support on Twitter',
        ]

        for (var i = 0; i < number; i++) {
            listArray.push({
                avatar: avatar[Math.floor(Math.random() * avatar.length)],
                avatarColor: avatarColor[Math.floor(Math.random() * avatarColor.length)],
                name: Math.random().toString(36).substring(7),
                date: moment(new Date(+(new Date()) - Math.floor(Math.random() * 10000000000))).format('MM/DD/YYYY'),
                text: text[Math.floor(Math.random() * text.length)]
            })
        }
        return listArray;
    },
    infiniteScroll: function() {
        window.onscroll = function(ev) {
            if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
                appInfiniteScroll.getNext10()
            }
        };
    }
}