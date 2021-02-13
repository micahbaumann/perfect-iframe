

var pifIframeId=new Array();
function getRatio(width, height) {
		nWidth = width;
		nHeight = height;
		if (nWidth.endsWith("%")) {
			nWidth = nWidth.replace("%", "");
		}
		if (nHeight.endsWith("%")) {
			nHeight = nHeight.replace("%", "");
		}

		nWidth = parseInt(nWidth);
		nHeight = parseInt(nHeight);

		raito = (nHeight / nWidth).toString().substring(2);

		if (raito.length > 2) {
			raito = raito.substring(0, 2) + "." + raito.substring(2);
		}

		return raito + "%";
	}
$(document).ready(function() {
	$("iframe").wrap("<div class=\"pif-iframe-wrap\"/>");
	$(".pif-iframe-wrap").each(function(index){
		var pifRandomNumber = Math.random().toString(32).substring(2, 8) + (new Date()).getTime().toString();
		$(this).attr("id", "pif-iframe-wrap-" + pifRandomNumber);
		$(this).wrap("<div class=\"pif-iframe-container\" id=\"pif-iframe-container-" + pifRandomNumber + "\"/>");
		$(this).attr("id", "pif-iframe-wrap-" + pifRandomNumber);
		$(this).children().attr("id", "pif-iframe-" + pifRandomNumber);
		pifIframeId[index] = [pifRandomNumber];
		pifIframeId[index][2] = $("#pif-iframe-" + pifIframeId[index][0]).attr("width");
		pifIframeId[index][3] = $("#pif-iframe-" + pifIframeId[index][0]).attr("height");
		pifIframeId[index][1] = getRatio(pifIframeId[index][2], pifIframeId[index][3]);
		pifIframeId[index][4] = $("#pif-iframe-" + pifIframeId[index][0]).attr("data-width");
		pifIframeId[index][5] = $("#pif-iframe-" + pifIframeId[index][0]).attr("data-height");
		pifIframeId[index][6] = $("#pif-iframe-" + pifIframeId[index][0]).attr("data-style");
		$(this).css("padding-top", pifIframeId[index][1]);
		$(this).children().removeAttr("width");
		$(this).children().removeAttr("height");
		$(this).parent().attr("style", pifIframeId[index][6]);
	});
	$(".pif-iframe-wrap").css({"overflow":"hidden","position":"relative"});
	$(".pif-iframe-wrap iframe").css({"border":0,"height":"100%","left":0,"position":"absolute","top":0,"width":"100%"});
});