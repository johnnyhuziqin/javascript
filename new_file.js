/**
 * @author h
 */
var myLogoName = "";
function print_text() {
	var my_string;
	var fso, file;
	var ipt = document.getElementsByTagName("input");
	var len = ipt.length;
	var ipt_str = new Array(len - 2);

	var sel = document.getElementsByTagName("select");
	var sel_len = sel.length;
	var sel_str = new Array(sel_len);

	len -= 3;
	//最后有1个text和2个按钮
	
	var input_text = document.getElementById("idmylogo").value;
	//alert("new logo is:"+input_text);
	


	for (var i = 0; i < len; i++) {
		//alert("this is "+i);
		//alert(i+ " type is "+ ipt[i].type);
		if (ipt[i].type == "checkbox") {
			if (ipt[i].checked) {
				ipt_str[i] = "#define " + ipt[i].value;
			} else {
				ipt_str[i] = "//#define " + ipt[i].value;
			}
		} else if (ipt[i].type == "radio") {
			if (ipt[i].checked) {
				ipt_str[i] = "#define " + ipt[i].value;
			} else {
				ipt_str[i] = "//#define " + ipt[i].value;
			}
		}

	}

	for (var j = 0; j < sel_len; j++) {
		sel_str[j] = "#define " + sel[j].name + " " + sel[j].options[sel[j].selectedIndex].text;
	}

	//----------------
	//myInput = document.getElementById("input3");
	//var myOsdValue = "#define ENGLISH_DEFAULT "+myInput.options[myInput.selectedIndex].text;

	for ( i = 0; i < len; i++) {
		document.write(ipt_str[i]);
		document.write("<br />");
	}

	for ( j = 0; j < sel_len; j++) {
		document.write(sel_str[j]);
		document.write("<br />");
	}
	
	if(input_text != "")
	{
		//alert("new logo is:"+input_text);
		//alert("not empty");
		my_string = "#undef CUSTOM_LOGO"+"<br />"+"#define CUSTOM_LOGO  logo_"+input_text;
		 document.write(my_string);
		document.write("<br />");
	}
	else{
		//alert("text empty");
	}
	
	
	fso = new ActiveXObject("Scripting.FileSystemObject");
	if(fso.FolderExists("d:\\javascript") == false)
	{
		fso.CreateFolder("d:\\javascript");
	}
	file = fso.CreateTextFile("d:\\javascript\\cfg_js.h", true);
	for ( i = 0; i < len; i++) {
		file.WriteLine(ipt_str[i]);
	}
	for ( j = 0; j < sel_len; j++) {
		file.WriteLine(sel_str[j]);
	}
	
	if(input_text != "")
	{
		my_string = "#undef CUSTOM_LOGO";//+"<br />"+"#define CUSTOM_LOGO  "+input_text;
		file.WriteLine(my_string);
		my_string = "#define CUSTOM_LOGO  logo_"+input_text;
		file.WriteLine(my_string);
	}
	file.Close();
}


function resetall() {
	var myFrLen = document.forms.length;
	for (var i = 0; i < myFrLen; i++) {
		document.forms[i].reset();
	}
}
