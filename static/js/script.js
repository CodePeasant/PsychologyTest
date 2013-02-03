function showSideBar(){
	var sidebar = document.getElementById("catalogue");
	sidebar.style.display = "block";
	var sidebar_title = document.getElementById("catalogue_title");
	sidebar_title.style.display = "inline";
}
function hideSideBar(){
	var sidebar = document.getElementById("catalogue");
	sidebar.style.display = "none";
	var sidebar_title = document.getElementById("catalogue_title");
	sidebar_title.style.display = "none";
}