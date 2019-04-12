//三级菜单显示消失
$(".erji").find("li").mouseover(function(){
    $(this).addClass("active").siblings().removeClass()
    $(".sanji").removeClass("active").eq($(this).index()).addClass("active")
})
$(".erji").find(".sanji").mouseout(function(){
    $(".sanji").removeClass("active")
})
//banner导航
$(".banner2").banner({
    items:$(".banner2 .imgbox a"),		//必传项，表示要移动的图片
    left:$(".banner2 .btns #left"),		//可选，左按钮
    right:$(".banner2 .btns #right"),	//可选，右按钮
    isList:true,
    delayTime:3000,
    moveTime:2000
})
//全部品牌小导航
$(".di").banner({
    items:$(".di .imgbox1 a"),		//必传项，表示要移动的图片
    left:$(".di .btns #left"),		//可选，左按钮
    right:$(".di .btns #right"),	//可选，右按钮
    isList:true,
    delayTime:2000,
    moveTime:1000
})

//全部品牌右侧商品片品牌
$(".di-r").find("a").mouseover(function(){
    $(".wenzi").removeClass("active").eq($(this).index()).addClass("active")
})
$(".di-r").find(".wenzi").mouseout(function(){
    $(this).removeClass("active")
})
//楼层
$(".floor").find("li").click(function(){
      var t=$(".div"+($(this).index()+1)).offset().top;
      $("html").animate({
          scrollTop:t
      })
  })
