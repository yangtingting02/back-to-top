//页面加载完毕后触发
window.onload = function () {
  var obtn = document.getElementById('btn');
  //获取页面可视区的高度
  var clientHeight = document.documentElement.clientHeight;
  var timer = null;
  var isTop = true;


  //滚动条滚动时触发
  window.onscroll = function () {
    var osTop = document.documentElement.scrollTop || document.body.scrollTop;
    if(osTop >= clientHeight){
      obtn.style.display = 'block';
    } else {
      obtn.style.display = 'none';
    }

    if(!isTop){
      clearInterval(timer);
    }

    isTop = false;
  };

  obtn.onclick = function () {
    //设置定时器
    timer = setInterval(function () {
      //获取滚动条距离顶部的高度
      var osTop = document.documentElement.scrollTop || document.body.scrollTop;        //后者是适配老版本的chrome浏览器的，新版本的支持documentElement.scrollTop
      var ispeed = Math.floor(-osTop / 6);
      document.documentElement.scrollTop = osTop + ispeed;            //速度由快至慢;
      isTop = true;
      if (osTop <=0) {
        clearInterval(timer);
      }
    }, 20)
  }
};
