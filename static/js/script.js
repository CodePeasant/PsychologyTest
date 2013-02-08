var duration=500;
var count_train_1=0;
var count_train_2=0;
var probility;
var good_bonus;
var bad_bonus;
var fix_bonus;

$(function(){
	/**
	 * get the data used by javascript from the server
	 * and set the global variable like probility
	 */
	$.get("/getcondition",function(data){
		probility = data["probility_good"];
		good_bonus= data["bonus_good"]
		bad_bonus = data["bonus_bad"];
		fix_bonus = data["bonus_fix"];
	},"json");
	/**
	 * if the volunteer accept the agreement, 
	 * turn to the register page
	 */
	$("#accepted").click(function(){
		$("#instruction").slideUp(duration);
		$("#information").slideDown(duration);
	})
	/**
	 * post the volunteer register information to the server
	 */
	$("#submit").click(function(){
		//get data
		data={
			age:$("#age").val(),
			sex:$("#sex").val(),
			major:$("#major").val()
		}
		//post the data to the server
		$.get("/register",data);
		//page convert animat
		$("#information").slideUp(duration);
		$("#grouping").slideDown(duration);
	})
	
	/**
	 * in the grouping page, the volunteer choose the group 1,
	 * and the code after server for the experiment of group 1
	 */
	$("#group1").click(function(){
		//get data
		data={
			group_id:1
		}
		//post the data to the server
		$.get("/grouping",data,function(data){
			alert(data)
		});
		//page convert animat
		$("#grouping").slideUp(duration);
		$("#group1_1").slideDown(duration);
		
	})
	$("#group1_A").click(function(){
		//post the data to the server
		data={
			group1_1:"A"
		}
		$.get("/group1_1",data);
		//page convert animat
		$("#group1_1").slideUp(duration);
		$("#group1_2").slideDown(duration);
	})
	$("#group1_B").click(function(){
		//post the data to the server
		data={
			group1_1:"B"
		}
		$.get("/group1_1",data);
		//page convert animat
		$("#group1_1").slideUp(duration);
		$("#group1_2").slideDown(duration);
	})
	
	$("#group1_C").click(function(){
		//post the data to the server
		data={
			group1_2:"C"
		}
		$.get("/group1_2",data);
		//page convert animat
		$("#group1_2").slideUp(duration);
		$("#thanks").slideDown(duration);
	})
	$("#group1_D").click(function(){
		//post the data to the server
		data={
			group1_2:"D"
		}
		$.get("/group1_2",data);
		//page convert animat
		$("#group1_2").slideUp(duration);
		$("#thanks").slideDown(duration);
	})
	
	/**
	 * in the grouping page, the volunteer choose the group 2,
	 * and the code after server for the experiment of group 2
	 */
	$("#group2").click(function(){
		//get data
		data={
			group_id:2
		}
		//post the data to the server
		$.get("/grouping",data);
		//page convert animat
		$("#grouping").slideUp(duration);
		$("#group2_1").slideDown(duration);
	})
	
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
		},2000)
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
		//show data		
		$("#group2_test_bonus").val(Math.random()<probility?good_bonus:bad_bonus);
		//post the data to the server
		data={
			group2:"A"
		}
		$.get("/group2",data);
		
	})
	$("#group2_test_2").click(function(){
		//show data
		$("#group2_test_bonus").val(fix_bonus);
		//post the data to the server
		data={
			group2:"B"
		}
		$.get("/group2",data);
	})
	
	
	
});
/*
 *  
 */