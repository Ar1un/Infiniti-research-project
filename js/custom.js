$(document).ready(function() {
    function toggleNavbarMethod() {
        if ($(window).width() > 768) {
            $('.navbar .dropdown').on('mouseover', function(){
                $('.dropdown-toggle', this).trigger('click'); 
            }).on('mouseout', function(){
                $('.dropdown-toggle', this).trigger('click').blur();
            });
        }
        else {
            $('.navbar .dropdown').off('mouseover').off('mouseout');
        }
    }

     	// toggle navbar hover
        toggleNavbarMethod();
        
        // bind resize event
        $(window).resize(toggleNavbarMethod);
});

$(document).ready(function () {
    $('.gallery .col-md-3:lt(4)').show();
    $('.less').hide();
    var items =  12;
    var shown =  4;
    $('.more').click(function () {
        $('.less').show();
        shown = $('.gallery .col-md-3:visible').length+4;
        if(shown< items) {
          $('.gallery .col-md-3:lt('+shown+')').show(300);
        } else {
          $('.gallery .col-md-3:lt('+items+')').show(300);
          $('.more').hide();
        }
    });
    $('.less').click(function () {
        $('.gallery .col-md-3').not(':lt(4)').hide(300);
        $('.more').show();
        $('.less').hide();
    });
});

//page scroll top
$(document).ready(function() { //document ready start
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    }); 
    
//Scroll Top Icon 
    $('.scrollup').click(function() {
        $("html, body").animate({scrollTop: 0}, 600);
        return false;
    });
});



$(document).ready(function() {
        $('.header-topbar').scrollToFixed();
        var summaries = $('.summary');
        summaries.each(function(i) {
            var summary = $(summaries[i]);
            var next = summaries[i + 1];

            summary.scrollToFixed({
                marginTop: $('.header-topbar').outerHeight(true) + 10,
                limit: function() {
                    var limit = 0;
                    if (next) {
                        limit = $(next).offset().top - $(this).outerHeight(true) - 10;
                    } else {
                        //limit = $('.footer').offset().top - $(this).outerHeight(true) - 10;
                    }
                    return limit;
                },
                zIndex: 999
            });
        });
    });

$(function() {
  $('input[name="daterange"]').daterangepicker({
    opens: 'right'
  }, function(start, end, label) {
    console.log("A new date selection was made: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
  });
});


$(function() {

  $('#sample-01').autocomplete({
    maxShowItems:10,
    source: [
      'Afghanistan', 'Åland Islands', 'Albania', 'Algeria', 'American Samoa', 'Andorra', 'Angola', 'Anguilla', 'Antigua and Barbuda', 'Argentina', 'Armenia', 'Aruba', 'Australia', 'Austria', 'Azerbaijan', 'Bangladesh', 'Barbados', 'Bahamas', 'Bahrain', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bermuda', 'Bhutan', 'Bolivia', 'Bosnia and Herzegovina', 'Botswana', 'Brazil', 'British Indian Ocean Territory', 'British Virgin Islands', 'Brunei Darussalam', 'Bulgaria', 'Burkina Faso', 'Burma', 'Burundi', 'Cambodia', 'Cameroon', 'Canada', 'Cape Verde', 'Cayman Islands', 'Central African Republic', 'Chad', 'Chile', 'China', 'Christmas Island', 'Cocos (Keeling) Islands', 'Colombia', 'Comoros', 'Congo-Brazzaville', 'Congo-Kinshasa', 'Cook Islands', 'Costa Rica', '$_[', 'Croatia', 'Curaçao', 'Cyprus', 'Czech Republic', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic', 'East Timor', 'Ecuador', 'El Salvador', 'Egypt', 'Equatorial Guinea', 'Eritrea', 'Estonia', 'Ethiopia', 'Falkland Islands', 'Faroe Islands', 'Federated States of Micronesia', 'Fiji', 'Finland', 'France', 'French Guiana', 'French Polynesia', 'French Southern Lands', 'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Gibraltar', 'Greece', 'Greenland', 'Grenada', 'Guadeloupe', 'Guam', 'Guatemala', 'Guernsey', 'Guinea', 'Guinea-Bissau', 'Guyana', 'Haiti', 'Heard and McDonald Islands', 'Honduras', 'Hong Kong', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iraq', 'Ireland', 'Isle of Man', 'Israel', 'Italy', 'Jamaica', 'Japan', 'Jersey', 'Jordan', 'Kazakhstan', 'Kenya', 'Kiribati', 'Kuwait', 'Kyrgyzstan', 'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Macau', 'Macedonia', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Marshall Islands', 'Martinique', 'Mauritania', 'Mauritius', 'Mayotte', 'Mexico', 'Moldova', 'Monaco', 'Mongolia', 'Montenegro', 'Montserrat', 'Morocco', 'Mozambique', 'Namibia', 'Nauru', 'Nepal', 'Netherlands', 'New Caledonia', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'Niue', 'Norfolk Island', 'Northern Mariana Islands', 'Norway', 'Oman', 'Pakistan', 'Palau', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Pitcairn Islands', 'Poland', 'Portugal', 'Puerto Rico', 'Qatar', 'Réunion', 'Romania', 'Russia', 'Rwanda', 'Saint Barthélemy', 'Saint Helena', 'Saint Kitts and Nevis', 'Saint Lucia', 'Saint Martin', 'Saint Pierre and Miquelon', 'Saint Vincent', 'Samoa', 'San Marino', 'São Tomé and Príncipe', 'Saudi Arabia', 'Senegal', 'Serbia', 'Seychelles', 'Sierra Leone', 'Singapore', 'Sint Maarten', 'Slovakia', 'Slovenia', 'Solomon Islands', 'Somalia', 'South Africa', 'South Georgia', 'South Korea', 'Spain', 'Sri Lanka', 'Sudan', 'Suriname', 'Svalbard and Jan Mayen', 'Sweden', 'Swaziland', 'Switzerland', 'Syria', 'Taiwan', 'Tajikistan', 'Tanzania', 'Thailand', 'Togo', 'Tokelau', 'Tonga', 'Trinidad and Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Turks and Caicos Islands', 'Tuvalu', 'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'United States', 'Uruguay', 'Uzbekistan', 'Vanuatu', 'Vatican City', 'Vietnam', 'Venezuela', 'Wallis and Futuna', 'Western Sahara', 'Yemen', 'Zambia', 'Zimbabwe'
    ]
  });

});


function changeState(el) {
        if (el.readOnly) el.checked=el.readOnly=false;
        else if (!el.checked) el.readOnly=el.indeterminate=true;
}

$(function() {
  $('input[name="startdate"]').daterangepicker({
    singleDatePicker: true,
    showDropdowns: true,
    minYear: 1901,
    maxYear: parseInt(moment().format('YYYY'),10)
  }, function(start, end, label) {
    var years = moment().diff(start, 'years');
    //alert("You are " + years + " years old!");
  });
});


$(function() {
  $('input[name="enddate"]').daterangepicker({
    singleDatePicker: true,
    showDropdowns: true,
    minYear: 1901,
    maxYear: parseInt(moment().format('YYYY'),10)
  }, function(start, end, label) {
    var years = moment().diff(start, 'years');
    //alert("You are " + years + " years old!");
  });
});

 $(document).ready(function(){
            $('.single-slider').jRange({
                from: -2.0,
                to: 2.0,
                step: 0.5,
                scale: [-2.0,-1.0,0.0,1.0,2.0],
                format: '%s',
                width: 300,
                showLabels: true,
                snap: true
            });
            $('.range-slider').jRange({
                from: 0,
                to: 100,
                step: 1,
                scale: [0,25,50,75,100],
                format: '%s',
                width: 500,
                showLabels: true,
                isRange : true
            });
});

$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip();   
});
		
		
$(function () {
        window.pagObj = $('#pagination').twbsPagination({
            totalPages: 35,
            visiblePages: 10,
            onPageClick: function (event, page) {
                console.info(page + ' (from options)');
            }
        }).on('page', function (event, page) {
            console.info(page + ' (from event listening)');
        });
    });		
	
$(document).ready(function(){ 
	$(".btn-hum").click(function(){
		$("#panel").slideToggle("slow");
		$(this).toggleClass("is-active"); return false;
	});
});	


$(document).ready(function(){ 
	$(".btn-slide").click(function(){
		$("#sortby").slideToggle("");
		$(this).toggleClass("active-filter"); return false;
	});
});


$(document).ready(function(){ 
	$(".btn-slide-review").click(function(){
		$("#respond").slideToggle("");
		$(this).toggleClass("active-filter"); return false;
	});
});

/* Tour Details Date Picker Adult Children Section */
$(function() {
  $('input[name="birthday"]').daterangepicker({
    singleDatePicker: true,
    showDropdowns: true,
    minYear: 1901,
    maxYear: parseInt(moment().format('YYYY'),10)
  }, function(start, end, label) {
    var years = moment().diff(start, 'years');
    //alert("You are " + years + " years old!");
  });
});
	

/* Tour Details Gallery Settings	*/
$( document ).ready(function( $ ) {
		$( '#example3' ).sliderPro({
			width: 960,
			height: 500,
			fade: true,
			arrows: true,
			buttons: false,
			fullScreen: true,
			shuffle: true,
			smallSize: 500,
			mediumSize: 1000,
			largeSize: 3000,
			thumbnailArrows: true,
			autoplay: false
		});
});	

		
/* Price range */
    $(".price_range").each(function () {
        var min = $(this).data('min');
        var max = $(this).data('max');
        var step = $(this).data('step');
        var value = $(this).val();
        var from = value.split(';');
        var prefix_symbol = $(this).data('symbol');
        var to = from[1];
        from = from[0];
        $(this).ionRangeSlider({
            min: min,
            max: max,
            type: 'double',
            prefix: prefix_symbol,
            prettify: false,
            step: step,
            onFinish: function (data) {
                set_price_range_val(data, $('input[name="price_range"]'));
            },
            from: from,
            to: to,
            force_edges: true
        });
    });
    function set_price_range_val(data, element) {
        var exchange = 1;
        var from = Math.round(parseInt(data.from) / exchange);
        var to = Math.round(parseInt(data.to) / exchange);
        var text = from + ";" + to;
        element.val(text);
    }
	
	
// Remember set you events before call bootstrapSwitch or they will fire after bootstrapSwitch's events
$("[name='checkbox2']").change(function() {
	if(!confirm('Do you wanna cancel me!')) {
		this.checked = true;
	}
});

$('#after').bootstrapNumber();
$('#after2').bootstrapNumber();
$('#colorful').bootstrapNumber({
	upClass: 'success',
	downClass: 'danger'
});  	

