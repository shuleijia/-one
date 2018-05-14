/**
 * Created by Administrator on 2018/5/8.
 */
window.onload = function () {
	 $(".main-page .nav div").mouseenter(function () {
    var $this = $(this);
    var index = $this.index();
  }).mouseleave(function () {
    var $this = $(this);
    var index = $this.index();
  }).click(function () {
    var $this = $(this);
    var index = $this.index();
    var l = -(index * 800);
    $(".main-page .nav div").removeClass("on");
    $(".main-page .nav div").eq(index).addClass("on");
    $(".main-page .content .con-ggh:eq(0)").stop().animate({"margin-top": l}, 500);
  });




  (function () {
    $('#wrap li').mouseover(function () {
      if (!$(this).hasClass('curr')) {
        $('#wrap li').removeClass('curr');
        $(this).addClass('curr');

        // 切换背景
        $('#wrap li').each(function (index) {
          if ($(this).hasClass('curr')) {
            $('.bg').fadeOut(300);
            $('.bg:eq(' + index + ')').fadeIn(500);
          }
        });

        $('.curr').stop().animate({
          width: 700
        }, 500, 'linear');
        $('#wrap li').not('.curr').stop().animate({
          width: 100
        }, 500, 'linear');
      }
    });
  })()
  

  //1. 获取元素 所有的a , 下面的img 和 p
  var arr = ['a','b','c','d'];
  var imagegallery = document.getElementById('imagegallery');
  var links = imagegallery.getElementsByTagName('a');
  var img = document.getElementById('image');
  var des = document.getElementById('des');
  //遍历links,给每一个注册点击事件
  for (var i = 0; i < links.length; i++) {
    links[i].onclick = getDianji;
    links[i].setAttribute('ide',i);
  }
  function getDianji() {
    //3. 在事件处理函数中,获取对应的href的值和title的值
    //4. 在事件处理函数中,将获取到的值,赋值给下面的img的src 和 p的innerText
    var index = this.getAttribute('ide');
    img.src = this.href;
    des.innerText = this.title + arr[index];
    return false;       //阻止a的默认行为
  }
}
