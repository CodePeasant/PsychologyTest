var duration=500;
var count_train_1=0;
var count_train_2=0;
var probility=0.5;
var good_bonus=5000000;
var bad_bonus=-100000;
var fix_bonus=300000;
$(function(){
	$("#accepted").click(function(){
		$("#instruction").slideUp(duration);
		$("#information").slideDown(duration);
	})
	/*
	$("#submit").click(function(){
		$("#information").slideUp(duration);
		$("#grouping").slideDown(duration);
	})
	*/
	/**
	 * page animat for group1
	 */
	$("#group1").click(function(){
		$("#grouping").slideUp(duration);
		$("#group1_1").slideDown(duration);
	})
	$("#group1_A,#group1_B").click(function(){
		$("#group1_1").slideUp(duration);
		$("#group1_2").slideDown(duration);
	})
	$("#group1_C,#group1_D").click(function(){
		$("#group1_2").slideUp(duration);
		$("#thanks").slideDown(duration);
	})
	
	$("#group2").click(function(){
		$("#grouping").slideUp(duration);
		$("#group2_1").slideDown(duration);
	})
	/**
	 * animat for group 2
	 */
	$("#group2_train_begin").click(function(){
		$("#group2_1").slideUp(duration);
		$("#group2_2").slideDown(duration);
	})
	$("#group2_train_end").click(function(){
		$("#group2_2").slideUp(duration);
		$("#group2_3").slideDown(duration);
	})
	$("#group2_test_1,#group2_test_2").click(function(){
		setTimeout(function(){
			$("#group2_3").slideUp(duration);
			$("#thanks").slideDown(duration);
		},5000)
	})
	/**
	 * train experiment for gourp2
	 */
	$("#group2_train_1").click(function(){		
		var result=Math.random()<probility?good_bonus:bad_bonus;
		count_train_1++;
		$("#group2_train_bonus").val(result+",方案一第"+count_train_1+"次");
	})
	$("#group2_train_2").click(function(){
		count_train_2++;
		$("#group2_train_bonus").val(fix_bonus+",方案二第"+count_train_2+"次");
	})
	/**
	 * test experiment for gourp2
	 */
	$("#group2_test_1").click(function(){		
		$("#group2_test_bonus").val(Math.random()<probility?good_bonus:bad_bonus);
	})
	$("#group2_test_2").click(function(){
		$("#group2_test_bonus").val(fix_bonus);
	})
	/**
	 * for register
	 */
	$("#submit").click(function(){
		//get data
		data={name:$("#name").val(),
		age:$("#age").val(),
		school:$("#school").val(),
		major:$("#major").val()
		
		}
		$.get("/register",data,
			function (data){
				alert(data);
			});
	})
	
});