$(document).ready(function(){
	
	console.log("jQuery is working");
	
	$('#attendHighError').append('#attendHighRadio');
	//Page 1
	
	//Yes no show and hide page 1
	
	$("#workYes").click(function () {
		$('#workNo').removeClass('required');
        $('#workWhen').show().addClass("required");
    });
	
	$("#workNo").click(function () {
        $('#workWhen').hide();
    });
	
	$("#felonyYes").click(function () {
        $('#felonyExplain').show().addClass("required");
    });
	
	$("#felonyNo").click(function () {
        $('#felonyExplain').hide();
    });
	
	
	//Yes no show and hide page 2
	
	$("#attendHighYes").click(function () {
        $('#highSchool').show();
		$('div.highColumn').css('width', '13em');
		$('div.highTable').css('display', 'grid').css('grid-template-columns', '1fr 1fr 1fr');
    });
	
	$("#attendHighNo").click(function () {
        $('#highSchool').hide();
    });
	
	$("#attendCollegeYes").click(function () {
        $('#college').show();
		$('div.collegeColumn').css('width', '13em');
		$('div.collegeTable').css('display', 'grid').css('grid-template-columns', '1fr 1fr 1fr');
    });
	
	$("#attendCollegeNo").click(function () {
        $('#college').hide();
    });
	
	$("#collegeYes").click(function (){
		$('#degreeShow').show().addClass("required");
		$('#fromTwo').css('marginBottom', '0');
	});
	
	$("#collegeNo").click(function (){
		$('#degreeShow').hide();
	});
	
	//Page 3
	$("#oneRefrence").click(function (){
		$('#oneTable').show();
		$('#twoTable').hide();
		$('#threeTable').hide();
		$('.referenceColumn').css('width', '13em');
		$('.referenceTable').css('display', 'grid').css('grid-template-columns', '1fr 1fr 1fr');
		
	});
	$("#twoRefrence").click(function(){
		$('#oneTable').show()
		$('#twoTable').show()
		$('#threeTable').hide();
		$('.referenceColum').css('width', '13em');
		$('.referenceTable').css('display', 'grid').css('grid-template-columns', '1fr 1fr 1fr');
	});
	$("#threeRefrence").click(function(){
		$('#oneTable').show();
		$('#twoTable').show();
		$('#threeTable').show();
		$('.referenceColum').css('width', '13em');
		$('.referenceTable').css('display', 'grid').css('grid-template-columns', '1fr 1fr 1fr');
		$('.bigReference').css('marginTop', '2em');
		$('#tabs-3').css('height', '170vh');
	});
	
	
	//Yes no show page 4
	
	 $("#militaryYes").click(function () {
        $('#armyInfo').show();
		$('div.column').css('width', '13em');
		$('div.table').css('display', 'grid').css('grid-template-columns', '1fr 1fr 1fr');
		$('#armyInfo').css('marginBottom', '3em;')
    });
	
	$("#militaryNo").click(function () {
        $('#armyInfo').hide();
    });
	
	$('#dischargeYes').click(function(){
		$('#whyExplain').show()
		$('#why').addClass('required');
	});
	
	$('#dischargeNo').click(function(){
		$('#whyExplain').hide();
	});
	
	// Yes no show page 5
	$('#aggreeButton').click(function(){
		$('#last').show();
		$('#final').css('display', 'none');
	});
	
	//Masks
	$(".phone").mask('(000) 000-0000', {
        placeholder: "(___) ___-____"
    });
    $(".social").mask("000-00-0000", {
        placeholder: "___-__-____"
    });
    $(".zip").mask("00000");
	
	$('.when').mask("0000");
	
	//validation

	$("#personal").validate({
        rules: {
            required : true,
            phoneNumber:{
                phoneUS : true
            },
            email :true 
        }
    });
	
	$("#education").validate({
        rules: {
            required : true
        }
    });
	
	$("#refrences").validate({
        rules: {
            required : true
        }
    });
	
	$("#previous").validate({
        rules: {
            required : true
        }
    });
	
	$("#military").validate({
        rules: {
            required : true
        }
    });
	
	$("#submit").validate({
        rules: {
            required : true
        }
    });
	
	$("#tabs").tabs({
		
		disabled: [ 1, 2, 3, 4, 5 ],
		active: 0,
		heightStyle: "fill"
	});
	
	
	
	$("#personalSubmit").button();
	$("#personalSubmit").click(function(){
		
		if( $("#personal").valid() ){
			$("#tabs").tabs({
				disabled: [ 0, 2, 3, 4, 5 ],
				active: 1
			});
		}
		
	});
	
	$("#educationSubmit").button();
	$("#educationSubmit").click(function(){
		
		if( $("#education").valid() ){
			$("#tabs").tabs({
				disabled: [ 0, 1, 3, 4, 5 ],
				active: 2
			});
		}
		
	});	
	
	$("#referencesSubmit").button();
	$("#referencesSubmit").click(function(){
		
		if( $("#refrences").valid() ){
			$("#tabs").tabs({
				disabled: [ 0, 1, 2, 4, 5 ],
				active: 3
			});
		}
	});	
	
	$("#previousSubmit").button();
	$("#previousSubmit").click(function(){
		
		if( $("#previous").valid() ){
			$("#tabs").tabs({
				disabled: [ 0, 1, 2, 3, 5 ],
				active: 4
			});
		}
	});	
	
	$("#militarySubmit").button();
	$("#militarySubmit").click(function(){
		
		if( $("#military").valid() ){
			$("#tabs").tabs({
				disabled: [ 0, 1, 2, 3, 4 ],
				active: 5
			});
		}
	});	
	
	//Diaglog Stuff
	$("#confirm").dialog({
		title: "Submit application?",
		autoOpen: false,
		buttons: [
			{
			  text: "I agree",
			  id: "aggreeButton",
			  icon: "ui-icon-check",
			  click: function() {
				$( this ).dialog( "close" );
			  }
			},
			{
			  text: "Cancel",
			  icon: "ui-icon-cancel",
			  click: function() {
				$(this).dialog( "close" );
			  }
			}
		]
	});
	
	$("#finalSubmit").button();
	$("#finalSubmit").click(function(){
		if( $("#final").valid() ){
			// bring up a jqueryui confirm dialog
			$("#confirm").dialog("open");
		}
	});	
	
	//Seceret Page!
	$('#aggreeButton').click(function(){
		$('#tabs-6').hide();
		$('#thanksPage').show();
		$('#thanksPage').css('display', 'flex').css('justifyContent', 'center').css('flexWrap', 'wrap').css('flexDirection', 'column').css('alignItems', 'center');
		$('#thanks').css('marginBottom', 'none');
		$('#thanksInfo').css('marginTop', '1em').css('marginBottom', '6em').css('fontSize', '1.3em');
	});
	
	

	$( "#dialog-link, #icons li" ).hover(
			function() {
				$( this ).addClass( "ui-state-hover" );
			},
			function() {
				$( this ).removeClass( "ui-state-hover" );
			}
		);
	
	//states
		
	var states = [
		"Alabama",
		"Alaska",
		"Arizona",
		"Arkansas",
		"California",
		"Colorado",
		"Connecticut",
		"Delaware",
		"Florida",
		"Georgia",
		"Hawaii",
		"Idaho",
		"Illinois",
		"Indiana",
		"Iowa",
		"Kansas",
		"Kentucky",
		"Louisiana",
		"Maine",
		"Maryland",
		"Massachusetts",
		"Michigan",
		"Minnesota",
		"Mississippi",
		"Missouri",
		"Montana",
		"Nebraska",
		"Nevada",
		"New Hampshire",
		"New Jersey",
		"New Mexico",
		"New York",
		"North Carolina",
		"North Dakota",
		"Ohio",
		"Oklahoma",
		"Oregon",
		"Pennsylvania",
		"Rhode Island",
		"South Carolina",
		"South Dakota",
		"Tennessee",
		"Texas",
		"Utah",
		"Vermont",
		"Virginia",
		"Washington",
		"West Virginia",
		"Wisconsin",
		"Wyoming"
	];
	
	$("#state").autocomplete({
        source: states
    });


//datepicker
	

	$(".dateInput").datepicker();

	$( "#slider" ).slider({
		range: true,
		values: [ 17, 67 ]
	});

	$( "#progressbar" ).progressbar({
		value: 20
	});

	$( "#spinner" ).spinner();

	$( "#menu" ).menu();

	$( "#tooltip" ).tooltip();

	$( "#selectmenu" ).selectmenu();
	
	$('.date').datepicker({
		changeMonth: true,
		changeYear: true,
		maxDate: 0
	});
	
//Jquery ui stuff

$( "#accordion" ).accordion();

	var availableTags = [
		"ActionScript",
		"AppleScript",
		"Asp",
		"BASIC",
		"C",
		"C++",
		"Clojure",
		"COBOL",
		"ColdFusion",
		"Erlang",
		"Fortran",
		"Groovy",
		"Haskell",
		"Java",
		"JavaScript",
		"Lisp",
		"Perl",
		"PHP",
		"Python",
		"Ruby",
		"Scala",
		"Scheme"
	];
	$( "#autocomplete" ).autocomplete({
		source: availableTags
	});

	$( "#button" ).button();
	$( "#button-icon" ).button({
		icon: "ui-icon-gear",
		showLabel: false
	});

	$( "#radioset" ).buttonset();

	$( "#controlgroup" ).controlgroup();

});


	