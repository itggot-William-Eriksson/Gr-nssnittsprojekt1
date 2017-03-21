function openLangMenu(variabel) {
	var element = document.querySelector(variabel);
	element.classList.remove("closed");
}

function closeLangMenu(variabel) {
	var element = document.querySelector(variabel);
	element.classList.add("closed");
}

function changeLang(variabel) {
	var tempAll = document.querySelectorAll(".lang_block");
	for (var i = 0; i < tempAll.length; i++){
		var e = tempAll[i];
		e.classList.add("closed");
	}
	var tempAll = document.querySelectorAll(variabel);
	for (var i = 0; i < tempAll.length; i++) {
		var e = tempAll[i];
		e.classList.remove("closed");
	}
}