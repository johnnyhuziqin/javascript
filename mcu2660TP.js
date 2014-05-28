/**
 * @author h
 */
var myLogoName = "";
var ipt_str = new Array();
document.getElementById("idVol").output = function() {
	//alert("this is it"+this.value);
	if(this.checked)
	{
		//ipt_str[0] = "#define " + this.value;
		ipt_str.push("#define " + this.value);
	}
	else
	{
		ipt_str.push("//#define " + this.value);
	}
};


document.getElementById("idMd3001").output = function() {
	if(this.checked)
	{
		//ipt_str[0] = "#define " + this.value;
		ipt_str.push("#define " + this.value);
	}
	else
	{
		ipt_str.push("//#define " + this.value);
	}
};

document.getElementById("idMd701").output = function() {
	if(this.checked)
	{
		//ipt_str[0] = "#define " + this.value;
		ipt_str.push("#define " + this.value);
	}
	else
	{
		ipt_str.push("//#define " + this.value);
	}
};

document.getElementById("idMd1004").output = function() {
	if(this.checked)
	{
		//ipt_str[0] = "#define " + this.value;
		ipt_str.push("#define " + this.value);
	}
	else
	{
		ipt_str.push("//#define " + this.value);
	}
};

document.getElementById("id55Key").output = function() {
	if(this.checked)
	{
		ipt_str.push("#define _REMOTE_CONTROLLER     _IR_FZ_55KEYS");
	}
};

document.getElementById("id44Key").output = function() {
	//#define _REMOTE_CONTROLLER     _IR_FZ_44KEYS
	if(this.checked)
	{
		ipt_str.push("#define _REMOTE_CONTROLLER     _IR_FZ_44KEYS");
	}
};

document.getElementById("idEnglish").output = function() {
	//如果选择，只需要 #define _LANGUAGE                   0x00
	if(this.checked)
	{
		ipt_str.push("#define _LANGUAGE  0x00");
	}
};

document.getElementById("idSpanish").output = function() {
	//如果选择，只需要 #define _LANGUAGE                   0x00
	//0:Eng 1:Schi 2:Fra 3:Ita 4:Deu 5:Esp 6:Tchi 7:Jap 8:Kor 9:Rus/Turky
	if(this.checked)
	{
		ipt_str.push("#define _LANGUAGE  0x05");
	}
};

document.getElementById("idTurkish").output = function() {
	//如果选择，只需要 #define _LANGUAGE                   0x00
	if(this.checked)
	{
		ipt_str.push("#define _LANGUAGE  0x09");
	}
};

document.getElementById("idItalian").output = function() {
	//如果选择，只需要 #define _LANGUAGE                   0x00
	if(this.checked)
	{
		ipt_str.push("#define _LANGUAGE  0x03");
	}
};

document.getElementById("idJapanese").output = function() {
	//如果选择，只需要 #define _LANGUAGE                   0x00
	//0:Eng 1:Schi 2:Fra 3:Ita 4:Deu 5:Esp 6:Tchi 7:Jap 8:Kor 9:Rus/Turky
	if(this.checked)
	{
		ipt_str.push("#define _LANGUAGE  0x07");
	}
};

document.getElementById("idRussian").output = function() {
	//如果选择，只需要 #define _LANGUAGE                   0x00
	//0:Eng 1:Schi 2:Fra 3:Ita 4:Deu 5:Esp 6:Tchi 7:Jap 8:Kor 9:Rus/Turky
	if(this.checked)
	{
		ipt_str.push("#define SUPPORT_RUSSIAN_OSD");  //只有俄文才要定义这个
		ipt_str.push("#define _LANGUAGE  0x09");
	}
};

document.getElementById("idKorean").output = function() {
	//如果选择，只需要 #define _LANGUAGE                   0x00
	//0:Eng 1:Schi 2:Fra 3:Ita 4:Deu 5:Esp 6:Tchi 7:Jap 8:Kor 9:Rus/Turky
	if(this.checked)
	{
		ipt_str.push("#define _LANGUAGE  0x08");
	}
};

document.getElementById("idTchinese").output = function() {
	//如果选择，只需要 #define _LANGUAGE                   0x00
	//0:Eng 1:Schi 2:Fra 3:Ita 4:Deu 5:Esp 6:Tchi 7:Jap 8:Kor 9:Rus/Turky
	if(this.checked)
	{
		ipt_str.push("#define _LANGUAGE  0x06");
	}
};

document.getElementById("idChinese").output = function() {
	//如果选择，只需要 #define _LANGUAGE                   0x00
	//0:Eng 1:Schi 2:Fra 3:Ita 4:Deu 5:Esp 6:Tchi 7:Jap 8:Kor 9:Rus/Turky
	if(this.checked)
	{
		ipt_str.push("#define _LANGUAGE  0x01");
	}
};

document.getElementById("idGermany").output = function() {
	//如果选择，只需要 #define _LANGUAGE                   0x00
	//0:Eng 1:Schi 2:Fra 3:Ita 4:Deu 5:Esp 6:Tchi 7:Jap 8:Kor 9:Rus/Turky
	if(this.checked)
	{
		ipt_str.push("#define _LANGUAGE  0x04");
	}
};

document.getElementById("idVolType1").output = function() {
	if(this.checked)
	{
		ipt_str.push("#define  "+this.value);
	}
};

document.getElementById("idVolType2").output = function() {
	if(this.checked)
	{
		ipt_str.push("#define  "+this.value);
	}
};

document.getElementById("idVolType3").output = function() {
	if(this.checked)
	{
		ipt_str.push("#define  "+this.value);
	}
};

document.getElementById("idVolType4").output = function() {
	if(this.checked)
	{
		ipt_str.push("#define  "+this.value);
	}
};

document.getElementById("idVolType5").output = function() {
	if(this.checked)
	{
		ipt_str.push("#define  "+this.value);
	}
};

document.getElementById("idVolType6").output = function() {
	if(this.checked)
	{
		ipt_str.push("#define  "+this.value);
	}
};

document.getElementById("selTvType").output = function(){
	//列表元素，输出#define A  B
	if(this.selectedIndex == 0)
	{
		ipt_str.push("#define  "+this.name+"  0");
		ipt_str.push("#define _VIDEO_TV_SUPPORT   _ON");
		ipt_str.push("#define _CMMB_DIGITAL_TV_SUPPORT    _OFF");
	}
	
	if(this.selectedIndex == 1)
	{
		ipt_str.push("#define  "+this.name+"  1");
		ipt_str.push("#define _VIDEO_TV_SUPPORT   _ON");
		ipt_str.push("#define _CMMB_DIGITAL_TV_SUPPORT    _ON");
		
	}
	
	if(this.selectedIndex == 2)
	{
		ipt_str.push("#define  "+this.name+"  1");
		ipt_str.push("#define _VIDEO_TV_SUPPORT   _OFF");
		ipt_str.push("#define _CMMB_DIGITAL_TV_SUPPORT    _OFF");
	}
};

document.getElementById("selHdmiEn").output = function(){
	//列表元素，输出#define A  B
	if(this.selectedIndex == 0)
	{
		ipt_str.push("#define  "+this.name+"  0");
	}
	
	if(this.selectedIndex == 1)
	{
		ipt_str.push("#define  "+this.name+"  1");
	}
};

function print_text() {
	var my_string;
	var fso, file;
	var ipt = document.getElementsByTagName("input");
	var len = ipt.length;

	var sel;
	//= document.getElementsByTagName("select");
	//var sel_len = sel.length;
	//var sel_str = new Array(sel_len);

	len -= 3;	//最后有1个text和2个按钮

	document.getElementById("idVol").output();
    document.getElementById("idMd3001").output();
    document.getElementById("idMd701").output();
    document.getElementById("idMd1004").output();
    
    document.getElementById("id55Key").output();
    document.getElementById("id44Key").output();
    	
	document.getElementById("idEnglish").output();
	document.getElementById("idSpanish").output();
	document.getElementById("idTurkish").output();
	document.getElementById("idItalian").output();
	document.getElementById("idJapanese").output();
	document.getElementById("idRussian").output();
	document.getElementById("idKorean").output();
	document.getElementById("idTchinese").output();
	document.getElementById("idChinese").output();
	document.getElementById("idGermany").output();
	
	document.getElementById("idVolType1").output();
	document.getElementById("idVolType2").output();
	document.getElementById("idVolType3").output();
	document.getElementById("idVolType4").output();
	document.getElementById("idVolType5").output();
	document.getElementById("idVolType6").output();
	
	document.getElementById("selTvType").output();
	document.getElementById("selHdmiEn").output();
	

	for ( i = 0; i < ipt_str.length; i++) {
		document.write(ipt_str[i]);
		document.write("<br />");
	}


	fso = new ActiveXObject("Scripting.FileSystemObject");
	if (fso.FolderExists("d:\\javascript") == false) {
		fso.CreateFolder("d:\\javascript");
	}
	file = fso.CreateTextFile("d:\\javascript\\cfg_js_mcu2660.h", true);
	for ( i = 0; i < ipt_str.length; i++) {
		file.WriteLine(ipt_str[i]);
	}
	file.Close();
}

function resetall() {
	var myFrLen = document.forms.length;
	for (var i = 0; i < myFrLen; i++) {
		document.forms[i].reset();
	}
}
