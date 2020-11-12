  $(function(){
		$('#slick-test').slick({
		    autoplay:true,
		    autoplaySpeed:4000,
				arrows:false,
		    dots:true,
		    slidesToShow:4,
		    responsive:[
		        {
		            breakpoint: 1024,
		            settings:{
		                slidesToShow:3,
		            }
		        },
		        {
		            breakpoint: 768,
		            settings:{
		                slidesToShow:2,
		            }
		        },
		        {
		            breakpoint: 480,
		            settings:{
		                slidesToShow:1,
		            }
		        },
		    ]	
		});
  });

$(function () {

  //iOS対策
  //iOSでは疑似要素を含むaタグのリンクは２回タップしないと遷移とページ内スクロールをしないため、
  //ユーザーエージェント判定でiOSの場合はbodyタグにiosを付与し、対象の疑似要素をdisplay: noneする
  var ua = navigator.userAgent;
  if (/iPhone|iPad|iPod/.test(ua)) {
    $("body").addClass("ios");
  }


  //ページ内スクロール
  var $nav = $(".gnav");
  var navHeight = $nav.outerHeight();

  $('a[href^="#"]').on("click", function () {
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? "html" : href);
    var position = target.offset().top - navHeight;
    $("html, body").animate(
      {
        scrollTop: position,
      },
      300,
      "swing"
    );
    return false;
  });  
});

$(function(){
	$(window).scroll(function (){
		$('.wrapper').each(function(){
			var elemPos = $(this).offset().top;
			var scroll = $(window).scrollTop();
			var windowHeight = $(window).height();
			if (scroll > elemPos - windowHeight + 200){
				$(this).addClass('scrollin');
			}
		});
	});
});
