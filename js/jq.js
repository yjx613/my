$(".top_r_2").mouseenter(function(){
	$(this).children("a").css("color","red")
}),$(".top_r_2").mouseleave(function(){
	$(this).children("a").css("color","#999")
})

$(".top_c").hover(function(){
	$("#topxiazai").css("display","block")
},function(){
	$("#topxiazai").css("display","none")
})


$(".head_listred").hover(function(){
	$(this).find("a").css("border-bottom","1px solid red")
},function(){
	$(this).find("a").css("border-bottom","none")
})


//吸顶效果
$(window).scroll(function(){
	if($(window).scrollTop()>40){
		$(".dohead").addClass("head_fixed").removeClass("dohead");
		$(".head_fixed").css({"position":"fixed","top":0,"z-index":1000});
		$(".head_logo").children("img").css({"width":"100%","height":"100%"});
		$(".head_logo").children("img").attr('src', 'img/03.jpg');
	}else if($(window).scrollTop()<40){
		$(".head_fixed").addClass("dohead").removeClass("head_fixed");
		$(".dohead").css("position","")
		$(".head_logo").children("img").attr("src", "img/logo.gif" );
	}
})


//轮播图
$(function(){
	var timer=null;
	var	index=0;
	var	$ulist=$(".bannerulist li");
	var	$olist=$(".bannerbut li");
		
	timer = setInterval( function(){
		index++;
		autoplay();
	},3200);
		autoplay();

		
	function autoplay(){
		if(index==$ulist.length){
			index=0;
		}
		$olist.eq(index).css("background","red").siblings().css("background","#fff");
		$ulist.eq(index).css("z-index",10).prev().css("z-index",9);
		$ulist.eq(index).fadeIn(1000).siblings().fadeOut(1000);
	}
	
	$("#imgbox").hover(function(){
		$(".btnleft,.btnright").css("display","block");
		clearInterval( timer );
	},function(){
		$(".btnleft,.btnright").css("display","none");
			timer = setInterval( function(){
			index++;
			autoplay();
		},3200);
	})
	
	$olist.mouseenter(function(){
		var count = $(this).index()
		$(this).css("background","red").siblings().css("background","#fff");
		$ulist.eq(count).css("z-index",10).prev().css("z-index",9);
		$ulist.eq(count).fadeIn(1000).siblings().fadeOut(1000);
	})
	
	$(".btnleft,.btnright").mouseenter(function(){
		$(".btnleft,.btnright").css("display","block")
		clearInterval( timer );
		
	})
	//左右按钮
	$(".btnleft").click(function(){
		index--;
		if(index==-1){
			index = $ulist.length-1;
		}
		autoplay()
	})
	$(".btnright").click(function(){
		index++;
		if(index>$ulist.length){
			index=0
		}
		autoplay()
	})
})
	

//秒杀倒计时


$(function(){
	var starttime = new Date("2018/12/22 18:55:00");
	setInterval(function () {
	var nowtime = new Date();
	var time = starttime - nowtime;
	var day = parseInt(time / 1000 / 60 / 60 / 24);
	var hour = parseInt(time / 1000 / 60 / 60 % 24);
	var minute = parseInt(time / 1000 / 60 % 60);
	var seconds = parseInt(time / 1000 % 60);
	$(".timebox_over").html(hour + "小时" + minute + "分钟" + seconds + "秒");
	}, 1000);
})



//轮播图小

function smallbanner(){
	var timer=null,
		index=0,
		$ulist=$(".small_left li"),
		$btn=$(".small_banner_mid li");
		
		timer = setInterval( function(){
		index++;
		autoplay();
	},3000);
		
		function autoplay(){
			if(index==$ulist.size()){
				index=0
				$btn.css("background","#555")
			}
			$ulist.eq(index).stop().fadeIn(1500).siblings().stop().fadeOut(1500);
			$btn.eq(index).css("background","red");
			$ulist.eq(index).css("z-index",10).siblings("z-index",9)
		}
		$(".small_banner").hover(function(){
			clearInterval(timer);
		},function(){
			timer = setInterval( function(){
			index++;
			autoplay();
			},3000);
		})
		$(".small_banner_btnl").click(function(){
			index--
			if(index==-1){
				index=$ulist.size()-1;
			}
			autoplay()
		})
		$(".small_banner_btnr").click(function(){
			index++
			if(index>$ulist.size()){
				index=0
			}
			autoplay()
		})

}
smallbanner()

//图标缩放



function autoimg(){
	var $olist=$(".small_right li");
	$olist.mouseenter(function(){
		$(this).find("em").css("display","block")
		$(this).find("b").css("display","block")
		$(this).find("i").css("display","block")
		$(this).find("img").stop().animate({width:80,height:80},500).end().find("p").animate({opacity:0},0)
		$(this).find("em").stop().animate({opacity:1},800)
		$(this).find("b").stop().animate({opacity:1},800)
		$(this).find("i").stop().animate({opacity:1},800)	
	});
	$olist.mouseleave(function(){
		$(this).find("img").stop().animate({width:120,height:120},500).end().find("p").animate({opacity:1},0)
		$(this).find("em").stop().animate({opacity:0},0)
		$(this).find("b").stop().animate({opacity:0},0)
		$(this).find("i").stop().animate({opacity:0},0)	
	})
}
autoimg()



//专区轮播图


function allbanner(){
	var timer=null;
	var index=0;
	var $dlist=$(".girl_right>div");
	var $ob=$(".banop li")
	timer = setInterval( function(){
		index++;
		autoplay();
	},3000);	
	function autoplay(){
		if(index>$dlist.size()){
			index=0
		}
		$dlist.eq(index).fadeIn(1500).siblings("div").stop().fadeOut(1500);
		$ob.eq(index).css("background","#000").siblings().css("background","#e1e1e1")
	}
	
	$(".girl_ban").hover(function(){
		clearInterval(timer);
	},function(){
		timer = setInterval( function(){
		index++;
		autoplay();
	},3000);
	})
	$ob.hover(function(){
		clearInterval(timer);
		$ob.eq($(this).index()).css("background","#000").siblings().css("background","#e1e1e1")
		$dlist.eq($(this).index()).fadeIn(1500).siblings("div").fadeOut(1500);
	},function(){
		timer = setInterval( function(){
		index++;
		autoplay();
	},3000);
	})
}
allbanner();



function cont(){
	var $olist=$(".indexlefts li")
	console.log($olist)
	var index=$(this).index()
	$olist.click(function(){
		if(index==0){
			alert()
//			$("html,body").stop().animate( { "scrollTop" : "500" } , 1000 );
		}
	})
	
	
}
cont()
