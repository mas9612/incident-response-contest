$(document).ready(function() {
  // スライドの読み込み
  $.ajax({
      url: 'indexSlide.xml',
      dataType: 'xml'
    })
    .then(function(data) {
      if ($("#indexSlide").length) {
        var slideContents = '<ul class="topslider">';
        var count = 0;
        $('indexSlide slideItem', data).each(function() {
          var thisItem = $(this);
          var ref = thisItem.children('ref').text();
          var img = thisItem.children('img').text();
          var title = thisItem.children('title').text();
          var description = thisItem.children('description').text();

          slideContents += `
      <li style="left:${count}vw"><a href="${ref}"><img src="${img}"></a>
        <div class="description">
          <h3>${title}</h3>
          <p>${description}</p>
        </div>
      </li>`;
          count += 100;
        });
        slideContents += "</ul>";
        console.log(slideContents);
        $(".topSlide").append(slideContents);
      }
      // ここからスライダー
      var _liNum = $(".topSlide ul li").length; //非同期処理だからこれが正しく取得できない
      _curNum = 0;
      var _slideTimerID;
      slide_width = $(window).width(); //global
      xStartTimer();


      function xStartTimer() {
        xStopTimer();
        console.log("xStart");
        _slideTimerID = setInterval(
          function() {
            _curNum++;
            console.log("_curNum" + _curNum);
            console.log("_liNum" + _liNum);
            if (_curNum > _liNum - 1) {
              _curNum = 0;
            }
            slide_anime();
          }, 4000);
      }

      function xStopTimer() {
        clearInterval(_slideTimerID);
      }

      function slide_anime() {
        var posX = -slide_width * _curNum;
        // console.log(posX);
        xStartTimer();
        $(".topslider").stop().animate({
          marginLeft: posX + 'px'
        }, '300', 'easeOutQuart');
        return false;
      }
    });
});

// リサイズ対応
$(window).on('resize', function() {
  slide_width = $(window).width(); //global
  console.log(slide_width);
  var posX = -slide_width * _curNum;
  $(".topslider").stop().animate({
    marginLeft: posX + 'px'
  }, '0', 'easeOutQuart');
    return false;

});
