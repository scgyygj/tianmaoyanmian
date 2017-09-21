
/////////////////////
//   new_element=document.createElement("script");
// 　　new_element.setAttribute("type","text/javascript");
// 　　new_element.setAttribute("src","base.js");// 在这里引入了a.js
// 　　document.body.appendChild(new_element);
/////////////////////
window.onload=function(){
	/////////////////
function getClass(classname,range){
		var range=range||document;
			if(document.getElementsByClassName){
				return range.getElementsByClassName(classname);
			}
			else
			{
			var newarr=[];
			var all=range.getElementsByTagName('*');
			for (var i=0;i<all.length;i++){
				if(checkClass(all[i].className,classname)){
					newarr.push(all[i]);
				}
			}
			return newarr;
			}
		}
		function checkClass(className,classname){
			var arr=className.split(' ');
			for(var i=0;i<arr.length;i++){
				if(arr[i]==classname){
                   return true;
			    }
			    
			}
			return false;
		}
		
function $(select,range){
	var range=range||document;
	var first=select.charAt(0);
	if(first=='.'){
		return getClass(select.substring(1),range);
	}else if(first=='#'){
		return document.getElementById(select.substring(1));
	}
	else if(/^[a-z][a-z1-6]{0,7}$/.test(select)){
		return document.getElementsByTagName(select);
	}
}
	////////////////
	let bannerLeft=$('.banner-left')[0];
	let lis1=bannerLeft.getElementsByTagName('li');
	let items=document.getElementsByClassName('items');
	for(let i=0;i<lis1.length;i++){
		lis1[i].onmouseover=function(){
			items[i].style.display='block';
		}
		lis1[i].onmouseout=function(){
			items[i].style.display='none';
		}
	}
	let yuan=document.getElementsByClassName('yuan')[0];
	let divs=yuan.getElementsByTagName('div');
	let bannerImg=document.getElementsByClassName('bannerImg');
	let bannerbg=document.getElementsByClassName('banner')[0];
	//点圆点换图片方法一
	for(let i=0;i<divs.length;i++){

		divs[i].onclick=function(){

			for(let j=0;j<bannerImg.length;j++){
				animate(bannerImg[j],{opacity:0});
				divs[j].style.background='#a2a2a2';
			}
			divs[i].style.background='#fff';
			animate(bannerImg[i],{opacity:1});
			num=i;
		}
			}
    //自动轮播
    let num=0;
    let time=window.setInterval(fn,3000);
    function fn(){

       num++;
       if(num==bannerImg.length){
       	num=0;
       }
       for (let i=0;i<bannerImg.length;i++){
         // divs[0].style.background='#fff';
       	// bannerImg[i].style.display='none';
       	animate(bannerImg[i],{opacity:0});
       	divs[i].style.background='#a2a2a2';
       }
       // bannerImg[num].style.display='block';
       	animate(bannerImg[num],{opacity:1});
       divs[num].style.background='#fff';
    }
	// 鼠标移入停止自动轮播
	
	  bannerbg.onmouseover=function(){
	  	clearInterval(time);
	  }  
	  bannerbg.onmouseout=function(){
	  	// num=i;
	  	time=window.setInterval(fn,3000);

	  } 
	  
} 

  
