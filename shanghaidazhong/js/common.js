var current = 0,num
function autoPlay() {
    current++
	if(current>=num) current = 0
	$($(".header_top")[current]).fadeIn(500).siblings(".header_top").hide();
	$($(".nav_h li")[current]).addClass("cur").siblings("li").removeClass("cur");
}
$(document).ready(function (e) {
	num = $(".header_top").size();

	 $(".nav_h li").hover(function(){
	     window.clearInterval(wid)
		 var $this = $(this);
	     $this.addClass("cur").siblings("li").removeClass("cur");
	     $(".header_top[tabcon="+$this.attr("tabnav")+"]").fadeIn(500).siblings(".header_top").hide();
	 },
	 function(){
	   wid = window.setInterval("autoPlay()",4000)
	 });

	  $(".header_top").hover(function(){
	     window.clearInterval(wid)
	  },
	  function(){
		 wid = window.setInterval("autoPlay()",4000)
	  });

      wid = window.setInterval("autoPlay()",4000)
/*切换标签*/
$(".menu li").each(function(i){
	$(this).mouseover(function(){
		$(".menu li").removeClass("cur").eq(i).addClass("cur");
		$(".jx").hide().eq(i).show()
	})
})
/*opation*/
$('.card').hide();
$('.js_opation').click(function(){
  if($('.card').is(':hidden')){
        $('.card').show();
      }else {
            $('.card').hide();
            }
})
/*information json*/
var CarInfromation = [
    {
        name: "Polo GTI 经典款",
        price: "指导价：15.89万起",
        gift: "送2000元油卡或等值礼包",
        deposit: "订金<b>499</b>元",
        pay: "立即<br />支付"
    },
    {
        name: "全新途安L",
        price: "指导价：15.89万起",
        gift: "送1000元油卡或等值附件礼包",
        deposit: "订金<b>499</b>元",
        pay: "立即<br />支付"
    },
    {
        name: "Cross Polo 2016款",
        price: "指导价：8.49万起",
        gift: "送1000元油卡或等值礼包",
        deposit: "订金<b>499</b>元",
        pay: "立即<br />支付"
    },
    {
        name: "Polo GTI 2015款	",
        price: "指导价：14.69万起",
        gift: "送1000元油卡或等值礼包",
        deposit: "订金<b>499</b>元",
        pay: "立即<br />支付"
    },
    {
        name: "途安 2015款",
        price: "指导价：13.98万起",
        gift: "送1000元油卡或等值附件礼包",
        deposit: "订金<b>499</b>元",
        pay: "立即<br />支付"
    },
    {
        name: "全新帕萨特",
        price: "指导价：18.39万起",
        gift: "送500元油卡",
        deposit: "订金<b>499</b>元",
        pay: "立即<br />支付"
    },
    {
        name: "全新朗行 2015款",
        price: "指导价：11.29万起",
        gift: "送500元油卡",
        deposit: "订金<b>499</b>元",
        pay: "立即<br />支付"
    },
    {
        name: "朗行",
        price: "指导价：11.59万起",
        gift: "送500元油卡",
        deposit: "订金<b>499</b>元",
        pay: "立即<br />支付"
    },
    {
        name: "New Polo",
        price: "指导价：7.59万起",
        gift: "送500元油卡",
        deposit: "订金<b>499</b>元",
        pay: "立即<br />支付"
    },
    {
        name: "全新朗逸 2015款",
        price: "指导价：10.99万起",
        gift: "",
        deposit: "订金<b>499</b>元",
        pay: "立即<br />支付"
    },
    {
        name: "朗逸经典",
        price: "指导价：11.29万起",
        gift: "",
        deposit: "订金<b>499</b>元",
        pay: "立即<br />支付"
    },
    {
        name: "帕萨特",
        price: "指导价：18.38万起",
        gift: "",
        deposit: "订金<b>499</b>元",
        pay: "立即<br />支付"
    },
    {
        name: "桑塔纳浩纳",
        price: "指导价：9.69万起",
        gift: "",
        deposit: "订金<b>499</b>元",
        pay: "立即<br />支付"
    },
    {
        name: "新桑塔纳 2016款",
        price: "指导价：8.49万起",
        gift: "",
        deposit: "订金<b>499</b>元",
        pay: "立即<br />支付"
    },
     {
        name: "凌渡",
        price: "指导价：14.59万起",
        gift: "",
        deposit: "订金<b>499</b>元",
        pay: "立即<br />支付"
    },
    {
        name: "途观 2016款",
        price: "指导价：19.98万起",
        gift: "",
        deposit: "订金<b>499</b>元",
        pay: "立即<br />支付"
    },
];
var CarImgs=[ 'images/car_1.jpg','images/car_2.jpg','images/car_3.jpg','images/car_4.jpg','images/car_5.jpg'
			 ,'images/car_6.jpg','images/car_7.jpg','images/car_8.jpg','images/car_9.jpg','images/car_10.jpg'
			 ,'images/car_11.jpg','images/car_12.jpg','images/car_13.jpg','images/car_14.jpg','images/car_15.jpg'
			 ,'images/car_16.jpg']
for(var i=0; i<17; i++){
    $('.exhibition').eq(i).append(["<img src="+CarImgs[i]+">"])}
for (var j in CarInfromation) {
      $('.exhibition').eq(j).append(["<p>"+CarInfromation[j].name+"</p>"]
      							 ,["<p>"+CarInfromation[j].gift+"</p>"]
      							 ,["<p>"+CarInfromation[j].price+"</p>"]
      							 ,["<p>"+CarInfromation[j].deposit+"</p>"]
      							 ,["<p>"+CarInfromation[j].pay+"</p>"]).css({'position':'relative'});
  }
for(var j=0; j<16; j++){
		var exh=document.getElementsByClassName('exhibition')[j];
		var font=exh.getElementsByTagName('p');
		var Bold=exh.getElementsByTagName('b');
		font[0].style.cssText="top:15px; left:20px; font-size:22.7px; color:#000; font-family:宋体; color:#000;";
		font[1].style.cssText="top:37.7px; left:20px; font-size:18px; color:#de002b; font-family:Microsoft Yahei; ";
		font[2].style.cssText="top:277.7px; left:20px; font-size:25px; color:#000; font-family:Microsoft Yahei; ";
		font[3].style.cssText="top:313px; left:20px; font-size:26px; color:#000; font-family:Microsoft Yahei; color:#000; font-weight:bold;";
		font[4].style.cssText="top:285px; right:36px; font-size:20px; color:#de002b; font-family:宋体; color:#FFF; font-weight:bold;";
		Bold[0].style.cssText="font-size:40px; color:#de002b; font-family:Century Gothic;"
		}
/*隔行变色*/
$(".jxs tr:even").addClass("jxs_bg")
/*浮动*/
/*敬请期待*/
$(".results").each(function () {
	var s = $(this).html();
	$(this).hover(function () {
		$(this).html('敬请期待');
	}, function () {
		$(this).html(s);
	});
});


/*hover方式出现浮层*/
$("#txtShow li").hover(function(){
	$(this).find('.txtDiv').show();
},function(){
	$(this).find('.txtDiv').hide();
})

/*经销商列表*/
$(".dealer tr").each(function(){
    $(this).find("td").eq(0).addClass("t_l")
	$(this).find("td").eq(1).addClass("t_l")
	$(this).find("td").eq(2).addClass("t_r")
})

/*注册文本框样式控制*/
$("input[type=text]").addClass("reg_box");
$("select").addClass("reg_box");
var inputbox = $(".reg_box");
$(".register").mouseenter(function(){
	$(this).find(inputbox).eq(0).addClass("reg_onfocus").focus();
})
inputbox.each(function(){
	$(this).bind({
		hover:function(){
			$(this).toggleClass("reg_hover")
		},
		focus: function() {
			$(this).addClass("reg_onfocus")
		},
		blur: function() {
			$(this).removeClass("reg_onfocus")
		}
	})
});


/*弹窗*/
$('.pop_close').click(function () {
	$(this).parent().fadeOut(200)
	$('.mask').fadeOut(200);
})

$('.mask').click(function () {
	$('.pop').fadeOut(200)
	$('.mask').fadeOut(200);
})

$('.pop_login_btn').click(function () {
	$('.pop_login_box').fadeIn(200);
	$('.mask').fadeIn(200);
})

$('.pop_btn_2').click(function () {
	$('.pop_box_2').fadeIn(200);
	$('.mask').fadeIn(200);
})



/*浮动菜单*/
$(window).scroll(function(e){
	s = $(document).scrollTop();

	/*回到顶部*/
	if($(window).scrollTop() >= 300){
			$('.actGotop').fadeIn(300);
		}else{
			$('.actGotop').fadeOut(300);
	}
})


$('.actGotop').click(function(){$('html,body').animate({scrollTop: 0}, 500);});



})
