var duration=500;
$(function(){
	/**
	 * get the condition data from the server
	 */
	$.get("/getcondition",function(data){
		$("#probility_good").val(data["probility_good"]);
		$("#bonus_good").val(data["bonus_good"]);
		$("#bonus_bad").val(data["bonus_bad"]);
		$("#bonus_fix").val(data["bonus_fix"]);
	},"json");
	/**
	 * post the volunteer register information to the server
	 */
	$("#saved").click(function(){
		//get data
		data={
			probility_good:$("#probility_good").val(),
			bonus_good:$("#bonus_good").val(),
			bonus_bad:$("#bonus_bad").val(),
			bonus_fix:$("#bonus_fix").val()
		}
		//post the data to the server
		$.get("/setcondition",data,function(data){
			alert(data)
		});
		
	})
	/**
	 * login validate
	 */
	$("#submit").click(function(){
		if($("#username").val()=="imis" && $("#password").val()=="0901"){
			//page convert animat
			$("#login").slideUp(duration);
			$("#admin").slideDown(duration);
		}
		
	})
	
})