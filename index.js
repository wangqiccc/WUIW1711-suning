//SES6
//alert(1);
{
	let imgs=document.querySelectorAll(".imgbox li");
	let pagers=document.querySelectorAll(".pager li");
	let banners=document.querySelector(".banner_middle");
	let next=document.querySelector(".next");
	let prev=document.querySelector(".prev");
	pagers.forEach(function(ele,index){
		ele.onmouseenter=function(){
			for(let i=0;i<pagers.length;i++){
				imgs[i].classList.remove("active");
				pagers[i].classList.remove("active");
			}
			this.classList.add("active");
			imgs[index].classList.add("active");
			n=index;
		}
	});
	let n=0;
	let t=setInterval(move,3000);

	function move(){
		n++;
		if(n===imgs.length){
			n=0;
		}
		if(n<0){
			n=imgs.length-1;
		}
		for(let i=0;i<imgs.length;i++){
				imgs[i].classList.remove("active");
				pagers[i].classList.remove("active");
			}
			imgs[n].classList.add("active");
			pagers[n].classList.add("active");
	}
	banners.onmouseenter=function(){
		clearInterval(t);
	};
	banners.onmouseleave=function(){
		t=setInterval(move,3000);
	};


	let flag=true;
	next.onclick=function(){
		if(flag){
			flag=false;
			move();
		}
	};
	prev.onclick=function(){
		if(flag){
			flag=false;
			n-=2
			move();
		}
	};
	imgs.forEach(function(ele){
		ele.addEventListener("transitionend",function(){
			flag=true;
		})
	})

}

// 显示隐藏
{
	let bar=document.querySelector(".floatdaoh");
	let leftbar=document.querySelector(".leftBar");
	window.onscroll=function(){
		let st=document.documentElement.scrollTop;
		if(st>700){
			bar.style.display="block";
		}else{
			bar.style.display="none";
		}
		if(st>1500){
			leftbar.style.display="block";
		}else{
			leftbar.style.display="none";
		}
	}
}

//返回顶部
	let totop=document.querySelector(".fiexd_tu2");
	console.log(totop);
	totop.onclick=function(){
		//document.documentElement.scrollTop=0;
		let st=document.documentElement.scrollTop;

		let t=setInterval(function(){
			st-=100;
			if(st<0){
				st=0;
				clearInterval(t);
			}
			document.documentElement.scrollTop=st;
		},25)
	}

	let totop2=document.querySelector(".fiexd_tu3");
	console.log(totop);
	totop2.onclick=function(){
		//document.documentElement.scrollTop=0;
		let st=document.documentElement.scrollTop;

		let t=setInterval(function(){
			st-=100;
			if(st<0){
				st=0;
				clearInterval(t);
			}
			document.documentElement.scrollTop=st;
		},25)
	}
{
		let tips=document.querySelectorAll(".leftBar_list");
		let container=document.querySelectorAll(".content_item");
		let leftbar=document.querySelector(".leftBar");
		//console.log(tips);
		tips.forEach(function(ele,index){
			ele.onclick=function(){
				let ot=container[index].offsetTop;
				let now=document.documentElement.scrollTop;
				let speed=(ot-now)/8;
				let time=0;
				let t=setInterval(function(){
					time+=25;
					now+=speed;
					console.log(time)
					if(time===200){
						clearInterval(t);

					}
					document.documentElement.scrollTop=now;
				},25)
			}

		});
		window.addEventListener("scroll",function(){
			let st=document.documentElement.scrollTop;
			for(let i=0;i<container.length;i++){
				if(st>container[i].offsetTop-50){
					for(let i=0;i<tips.length;i++){
						tips[i].classList.remove("active");

					}
					tips[i].classList.add("active");
				}

			}
		})
	}
// banner列表
{
	var list=document.querySelectorAll(".banner_nav li");
	var menu=document.querySelectorAll(".banner_left");
	let obj=menu[0];
	list.forEach(function(ele,index){
		ele.onmouseenter=function(){
			menu[index].style.display="block";
			obj=menu[index];
		}
		ele.onmouseleave=function(){
			menu[index].style.display="none";
		}
	})
}