window.onload=function(){
	var ms=document.getElementById('ms');
var audio=document.getElementsByTagName("audio")[0];
var page1=document.getElementById("page1");
var page2=document.getElementById("page2");
var page3=document.getElementById("page3");
//当音乐播放完停止时候 自动停止光盘旋转效果 addEventListener监听事件
//audio.addEventListener("ended",function(even){
 // ms.setAttribute("class","");
//},false);
ms.addEventListener("touchstart",function(event){
if(audio.paused){
		 audio.play();
		 this.setAttribute("class","play");
		}else{
			audio.pause();
			this.setAttribute("class","");
		}
},false);
page1.addEventListener("touchstart",function(event){
	page1.style.display="none";
	page2.style.display="block";
	page3.style.display="block";
	page3.style.top="100%";
	setTimeout(function(){
		page2.setAttribute("class"," page fadeOut");
		page3.setAttribute("class"," page fadeIn");
	},5500)

},false);
};
/*
ms.onclick=function(){
	if(audio.paused){
		 audio.play();
		 //this.setAttribute("class","play");改变class属性
		 this.style.animationPlayState="running"
		 //animationPlayState动画播放状态 running播放 paused暂停 但兼容性不太好
		}else{
			 audio.pause();
			 //this.setAttribute("class","");
			 this.style.animationPlayState="paused"
		};

    };*/


