a = document.getElementById("gmail")
b = document.getElementById("fanchant")

function moveImage(elem){
	document.getElementById("euphoria").classList.add("fly-forward1");
	a.classList.add("gmail");
	a.style.display="flex";
}

function playSound(elem){
	document.getElementById("jungkook-sound").play();
	console.log("play sound")
}

function gmailAppear(elem){
	document.getElementById("urgent").style.display="flex";
	b.classList.add("fanchant");
	b.style.display="flex";
	
}

function fanchantAppear(elem){
	document.getElementById("mots").style.display="flex";
}

function otAppear(elem){
	document.getElementBYId("OT7").classList.remove
}

ot=0

function checkRelavence(){
	if (ot= 7){
		console.log("complete")
		document.getElementById("OT7").classList.add
	}
	else (ot = >7){
		console.log("incomplete")
	}


a=false
b=false
c=false
d=false
e=false
f=false
g=false

function removeGrey1(elem){
	document.getElementById("namjoon").classList.remove("all-grey");
	document.getElementById("namjoon").classList.add("done");
	a=true
	checkPictures()
	ot=ot+1
}

function removeGrey2(elem){
	document.getElementById("jin").classList.remove("all-grey");
	b=true
	checkPictures()
	ot=ot+1
}

function removeGrey3(elem){
	document.getElementById("yoongi").classList.remove("all-grey");
	c=true
	checkPictures()
	ot=ot+1
}
function removeGrey4(elem){
	document.getElementById("jhope").classList.remove("all-grey");
	d=true
	checkPictures()
	ot=ot+1
}
function removeGrey5(elem){
	document.getElementById("jimin").classList.remove("all-grey");
	e=true
	checkPictures()
	ot=ot+1
}
function removeGrey6(elem){
	document.getElementById("taehyung").classList.remove("all-grey");
	f=true
	checkPictures()
	ot=ot+1
}
function removeGrey7(elem){
	document.getElementById("jungkook").classList.remove("all-grey");
	g=true
	checkPictures()
	ot=ot+1
}

function checkPictures(elem){
	if(a && b && c && d && e && f && g ){
		document.getElementById("start").classList.remove("start");
		document.getElementById("start").innerHTML="";
		document.getElementById("main").style.display="flex";
		console.log("pictures checked")
	}
}
function musicAppear(elem){
	document.getElementById("mv").style.display="flex";
}

function bwlAppear(elem){
	document.getElementById("BWL-sound").play();
	console.log("play sound")
	document.getElementById("BWL-sound").classList.toggle("boy")
}
//}
//
//element.classList.contains(class);
//make variables

