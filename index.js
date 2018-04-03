//SES6
//alert(1);
//轮播图
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
			n-=2;
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
		if(st>1500&&st<6600){
			leftbar.style.display="block";
		}else{
			leftbar.style.display="none";
		}
	}
}

//返回顶部
{
	let totop=document.querySelector(".fiexd_tu2");
	totop.onclick=function(){
		let st=document.documentElement.scrollTop;
		let t=setInterval(function(){
			st-=100;
			if(st<0){
				st=0;
				clearInterval(t);
			}
			document.documentElement.scrollTop=st;
		},25)
	};

	let totop2=document.querySelector(".fiexd_tu3");
	totop2.onclick=function(){
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
}	

//楼层跳转
{		
	let tips=document.querySelectorAll(".leftBar_list");
	let container=document.querySelectorAll(".content_item");
	let leftbar=document.querySelector(".leftBar");
	tips.forEach(function(ele,index){
		ele.onclick=function(){
            console.log(ele);
			flag=false;
			let ot=container[index].offsetTop-50;
			let now=document.documentElement.scrollTop;
			let speed=(ot-now)/8;
			let time=0;
			let t=setInterval(function(){
				time+=25;
				now+=speed;
				if(time===200){
					clearInterval(t);
					flag=true;
				}
				document.documentElement.scrollTop=now;
			},25)
		}

	});
	let flag=true;
	window.addEventListener("scroll",function(){
		let st=document.documentElement.scrollTop;
		if(flag){
		for(let i=0;i<container.length;i++){
			if(st>container[i].offsetTop-150){
				for(let i=0;i<tips.length;i++){
					tips[i].classList.remove("active");
				}
				tips[i].classList.add("active");
			}

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

//图片重复轮播
{
	let content2_tu=document.querySelector(".content2_tu");
	let condent2_itemAll=document.querySelector(".condent2_itemAll");
	let condent2_item_all=document.querySelectorAll(".condent2_item_all");
	let condent2_prev=document.querySelector(".condent2_prev");
	let condent2_next=document.querySelector(".condent2_next");
	let flag=true;
	let n=1;
	content2_tu.onmouseenter=function(){
		condent2_prev.style.display="block";
		condent2_next.style.display="block";
	}
	content2_tu.onmouseleave=function(){
		condent2_prev.style.display="none";
		condent2_next.style.display="none";
	}
	condent2_next.onclick=function(){
		if(flag){
			flag=false;
			n++;
			condent2_itemAll.style.transition="all 1s";
			condent2_itemAll.style.marginLeft=n*(-1000)+"px";
		}
	}
	condent2_prev.onclick=function(){
		if(flag){
			flag=false;
			n--;
			condent2_itemAll.style.transition="all 1s";
			condent2_itemAll.style.marginLeft=n*(-1000)+"px";
		}
	}

	condent2_itemAll.addEventListener("transitionend",function(){
		flag=true;
		if(n===4){
			n=1;
			condent2_itemAll.style.transition="none";
			condent2_itemAll.style.marginLeft="-1000px";
		}
		if(n===0){
			n=3;
			condent2_itemAll.style.transition="none";
			condent2_itemAll.style.marginLeft="-3000px";
		}
	})
}

{
        var content3_btn1=document.querySelector(".content3_btn1");
        var content3_btn2=document.querySelector(".content3_btn2");
        var inner1=document.querySelector(".content3_mainAll");
        var items=document.querySelectorAll(".content3_main1");
        var pag1=document.querySelectorAll(".content3_a");
        let m=0;
    content3_btn2.onclick=function(){
            m++;
            if(m===items.length){
                m=items.length-1;
                return;
            }
            inner1.style.marginLeft=-390*m+"px";
            pag1[m].classList.add("yuan");
            pag1[m-1].classList.remove("yuan");
            obj1=pag1[m];
        };
    content3_btn1.onclick=function(){
            m--;
            if(m===-1){
                m=0;
                return;
            }
            inner1.style.marginLeft=-390*m+"px";
            pag1[m].classList.add("yuan");
            pag1[m+1].classList.remove("yuan");
            obj1=pag1[m];
        }
        let obj1=pag1[0];
    pag1.forEach(function(ele,index){
            ele.onclick=function(){
                obj1.classList.remove("yuan");
                ele.classList.add("yuan");
                obj1=this;
                inner1.style.marginLeft=index*-390+"px";
                m=index;
            }
        })



}

//head下拉
{
	let head_wenzi=document.querySelectorAll(".head_backgound");
    let head_wenzi1=document.querySelectorAll(".head_wenzi1");
    let head_wenzi2=document.querySelectorAll(".head_wenzi2");
    let head_wenzi_xiala=document.querySelectorAll(".head_wenzi_xiala");
    head_wenzi.forEach(function(ele,index){
    	ele.onmouseenter=function(){
            head_wenzi_xiala[index].style.display="block";
            z=head_wenzi_xiala[index];

		}
        ele.onmouseleave=function(){
            head_wenzi_xiala[index].style.display="none";
        }
	})
}