var sound=document.getElementById('laMusica')
var counter=0

function playmusic(){
	sound.play();
}
function stopmusic(){

	sound.pause();
}

function musicaChange(){
	var songs=["song.mp3","firstsong.mp3","songa.mp3","songb.mp3","songc.mp3","songd.mp3"]
	var randomSong=songs[Math.floor(Math.random()*songs.length)]
	snSource.setAttribute('src',randomSong)
	sound.load();
	sound.play();
}

var snSource=document.getElementById('snSource')

/*function changeBackGround(){
	var imgs=["url('omkalthoum.png')"]
var newimage=imgs[Math.floor(Math.random()*imgs.length)]
	document.body.style.backgroundImage=newimage;
}*/
var btn1=document.getElementById('btn1')
var btn2=document.getElementById('btn2')
var btn3=document.getElementById('btn3')
var btn4=document.getElementById('btn4')
var btn5=document.getElementById('btn5')
var btn6=document.getElementById('btn6')
var btn7=document.getElementById('btn7')
var btn8=document.getElementById('btn8')
var btn9=document.getElementById('btn9')
var plusbtn=document.getElementById('plusbtn')
var minusbtn=document.getElementById('minusbtn')
var multibtn=document.getElementById('multibtn')
var divbtn=document.getElementById('divbtn')
var equalbtn=document.getElementById('equalbtn')

var calbtn=document.getElementsByClassName('calbtn')

var natija=document.getElementById('natija')
var previos=natija.value;

function addNumberOrOperator(x){
if(x=="+"||x=="-"||x=="*"||x=="/"||x=="%"){
	previos=previos+" "+x+" "
}
else {previos=previos+x}

	natija.value=previos;
return previos;
}

function operate(string){
	if(natija.value.includes('=')!==true){
var arr=string.split(" ")
if(arr[arr.length-1]==" "){
arr.splice(arr.length-1,arr.length)
}
var res=parseFloat(arr[0])
for(var i=0;i<arr.length;i++){
if(arr[i]=="%"){
	res=res%parseFloat(arr[i+1])
}
if(arr[i]=="+"){
	res=res+parseFloat(arr[i+1])
}
if (arr[i]=="-") {
	res=res-parseFloat(arr[i+1])
}
if (arr[i]=="*") {
		res=res*parseFloat(arr[i+1])
}
if (arr[i]=="/") {
		res=res/parseFloat(arr[i+1])
}

}
natija.value+=" = "+res
if(natija.value.includes('NaN')){natija.value=''}

return res
}
}
function clearall(){
	previos="";
	natija.value="";
}

function colorchange(id){

	id.style.backgroundColor ='#7FFFD4';
}


function backToFirstColor(btnclass){
    for (var i = 0; i < btnclass.length; i++) {
	btnclass[i].style.backgroundColor='#7FFF00';
}
}