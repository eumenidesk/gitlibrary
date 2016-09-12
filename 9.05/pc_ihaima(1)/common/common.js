$(document).ready(function (e) {
	/*首屏动画*/
		$("#scrol_4 li").each(function () {
			var $this = $(this);
			if (!$this.find("a,ins").length > 0) {
				$this.remove();
			}
		});
		var serveTimer = setTimeout(function () {
			var nIn = $(".slider-menu-1 .current").index();
			var len = $(".slider_stage li").length;
			if (nIn < len - 1) {
				nIn++;
			} else {
				nIn = 0;
			}
			$(".slider-menu-1 li").removeClass("current").eq(nIn).addClass("current");
			$(".slider_stage li").eq(nIn).fadeIn().siblings().hide();
			serveTimer = setTimeout(arguments.callee, 5000);
		}, 5000);
		$(".prev1").click(function () {
			clearTimeout(serveTimer);
			var nIn = $(".slider-menu-1 .current").index();
			var len = $(".slider_stage li").length;
			if (nIn < len && nIn > 0) {
				nIn--;
			} else {
				nIn = len - 1;
			}
			$(".slider-menu-1 li").removeClass("current").eq(nIn).addClass("current");
			$(".slider_stage li").eq(nIn).fadeIn().siblings().hide();
		});

		$(".next1").click(function () {
			clearTimeout(serveTimer);
			var nIn = $(".slider-menu-1 .current").index();
			var len = $(".slider_stage li").length;
			if (nIn < len - 1) {
				nIn++;
			} else {
				nIn = 0;
			}
			$(".slider-menu-1 li").removeClass("current").eq(nIn).addClass("current");
			$(".slider_stage li").eq(nIn).fadeIn().siblings().hide();
		});
		$(".slider-menu-1 li").click(function () {
			clearTimeout(serveTimer);
			var nIn = $(this).index();
			$(this).addClass("current").siblings().removeClass("current");
			$(".slider_stage li").eq(nIn).fadeIn().siblings().hide();
		});
		/*//首屏动画*/

/*我要购车*/
$('.pop_close').click(function () {
	$(this).parent().fadeOut(200)
	$('.mask_layer').fadeOut(200);
})

$('.mask_layer').click(function () {
	$('.pop').fadeOut(200)
	$('.mask_layer').fadeOut(200);
})


$('.buy_btn').click(function () {
		$('.pop').fadeIn(200)
		$('.mask_layer').fadeIn(200);
})

$('.btn').hover(function () {
		$(this).children("span").animate({"top":0},150);;
	},function () {
		$(this).children("span").animate({"top":"60px"},150);;
})





$(".cont_dealer tr").each(function(){
    $(this).find("td").eq(0).addClass("tl")
	$(this).find("td").eq(1).addClass("tl")
	$(this).find("td").eq(4).addClass("tr")
})


$(window).scroll(function(e){

	/*回到顶部*/
	if($(window).scrollTop() >= 300){
			$('.actGotop').fadeIn(300);
		}else{
			$('.actGotop').fadeOut(300);
	}
})

$('.actGotop').click(function(){$('html,body').animate({scrollTop: 0}, 500);});














/*切换标签*/
$(".menu li").each(function(i){
	$(this).mouseover(function(){
		$(".menu li").removeClass("cur").eq(i).addClass("cur");
		$(".jx").hide().eq(i).show()
	})
})


/*隔行变色*/
$(".jxs tr:even").addClass("jxs_bg")


/*hover方式出现浮层*/
$("#txtShow li").hover(function(){
	$(this).find('.txtDiv').show();
},function(){
	$(this).find('.txtDiv').hide();
})



/*弹窗*/
$('.pop_close').click(function () {
	$(this).parent().fadeOut(200)
	$('.zbg').fadeOut(200);
})

$('.zbg').click(function () {
	$('.pop').fadeOut(200)
	$('.zbg').fadeOut(200);
})

$('.pop_login_btn').click(function () {
	$('.pop_login_box').fadeIn(200);
	$('.zbg').fadeIn(200);
})

$('.pop_btn_2').click(function () {
	$('.pop_box_2').fadeIn(200);
	$('.zbg').fadeIn(200);
})



/*浮动菜单*/
$(window).scroll(function(e){
	s = $(document).scrollTop();
	if(s > 550){
		$('.flo_nav').css('position','fixed');
		$('.flo_nav').css('top',10+'px');
		if(s < 550){
			$('.flo_nav').css('top',550+'px');
		}
	}else{
		$('.flo_nav').css('position','');
		$('.flo_nav').css('top',550+'px');
	}
})

$('.z1').click(function(){
	$("html,body").animate({scrollTop:500},500);
});
$('.z2').click(function(){
	$("html,body").animate({scrollTop:1000},500);
});
$('.z3').click(function(){
	$("html,body").animate({scrollTop:1500},500);
});
$('.z4').click(function(){
	$("html,body").animate({scrollTop:2000},500);
});
$('.z5').click(function(){
	$("html,body").animate({scrollTop:2500},500);
});
$('.z6').click(function(){
	$("html,body").animate({scrollTop:3000},500);
});


/*右侧悬浮登录*/
function ml_close_demo() {
	  $('.float-news').animate({
		  right: '-450px'
	  }, 312, function () {
		  $('.float-open').delay(50).animate({
			  right: '-2px'
		  }, 312);
	  });
  }
  function ml_open_demo() {
	  $('.float-open').animate({
		  right: '-70px'
	  }, 100, function () {
		  $('.float-news').delay(50).animate({
			  right: '0px'
		  }, 312);
	  });
  }

  $('.float-close').click(function () {
	  ml_close_demo();
	  return false;
  });
  $('.open-btn').click(function () {
	  ml_open_demo();
	  return false;
  });

})
