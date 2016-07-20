window.onload = window.onresize = function(){
/*全屏翻页*/
	var pages=document.getElementById('pages').getElementsByTagName('section'),
		navs=document.getElementById('navs'),
		lis=navs.getElementsByTagName('li'),
		index=0,
		timer=null,
		cH=document.documentElement.clientHeight||document.body.clientHeight;
	/*初始化页面*/
	for(var i=0;i<lis.length;i++){
		pages[i].style.top=i*cH+'px';
		pages[i].index=i;
		lis[i].index=i;
	}
	/*点击切换*/
	navs.onclick=function(e){
		e=e||window.event;
		if(e.target.index==undefined||e.target.index==index){
			return false;
		}
		lis[index].className="";
		index=e.target.index;
		lis[index].className="active";
		changePages();
	}
	/*翻页*/
	function changePages(){
		for(var j=0;j<pages.length;j++){
			pages[j].style.top = (pages[j].index -index)*cH+'px';
		}
		if(index==1){
			Animate();
		}
	}
	/*监听鼠标滚动和键盘*/
	document.onkeydown=function(e){
		e=e||window.event;
		if(e.keyCode==33||e.keyCode==38){
			scrollUp();
		}
		if(e.keyCode==34||e.keyCode==40){
			scrollDown();
		}
	}
	document.onmousewheel=function(e){
		e=e||window.event;
		if(e.wheelDelta>0){
			scrollUp();
		}
		if(e.wheelDelta<0){
			scrollDown();
		}
	}
	document.body.addEventListener("DOMMouseScroll", function(e) {
    if(e.detail<0){
			scrollUp();
		}
		if(e.detail>0){
			scrollDown();
		}
});
	/*上下翻页*/
	function scrollDown(){
		if(index==5){
			return false;
		}
		lis[index].className="";
		index++;
		lis[index].className="active";
		changePages();
	}
	function scrollUp(){
		if(index==0){
			return false;
		}
		lis[index].className="";
		index--;
		lis[index].className="active";
		changePages();
	}
/*其他*/
	/*page1，微信二维码*/
	var weixin=document.getElementById('weixin');
	weixin.onclick=function(e){
		e=e||window.event;
		e.preventDefault();
		weixin.getElementsByTagName('span')[0].style.display="block";
		e.stopPropagation();
	}
	pages[0].onclick=function(){
		weixin.getElementsByTagName('span')[0].style.display="none";
	}
	/*page2,动画效果*/
	function Animate(){
		clearInterval(timer);
		var lis=document.getElementById('skills').getElementsByTagName('li'),
			count=0;
		for(var i=0;i<lis.length;i++){
			lis[i].style.width='0%';
		}
		timer=setInterval(function(){
			for(var i=0;i<lis.length;i++){
				if(count==lis.length){
					clearInterval();
				}
				if(+(lis[i].style.width.replace("%",""))==lis[i].value){
					count++;
					continue;
				}
				if(+(lis[i].style.width.replace("%",""))>=30){
					lis[i].style.backgroundColor='#607E5B';
				}
				if(+(lis[i].style.width.replace("%",""))>=50){
					lis[i].style.backgroundColor='#46AF46';
				}
				if(+(lis[i].style.width.replace("%",""))>=80){
					lis[i].style.backgroundColor='#27F605';
				}
				lis[i].style.width= +(lis[i].style.width.replace("%",""))+1+"%";
			}
		},12);
	}
	/*qq跳转前询问*/
	var qq=document.getElementById('qq');
	qq.onclick=function(e){
		var ask=confirm("打开QQ通话？");
		if(!ask){
			e.preventDefault();
		}
	}
}