$(document).ready(function() {

  // スライドの読み込み
  $.ajax({
      url: 'topic.xml',
      dataType: 'xml'
    })
    .then(function(data) {
      var topicContents = '<ul id="topicUl">';
      $('topic topicItem', data).each(function() {
        var thisItem = $(this);
        var ref = thisItem.children('ref').text();
        var img = thisItem.children('img').text();
        var title = thisItem.children('title').text();
        var description = thisItem.children('description').text();

        topicContents += `
            <li>
              <a href="${ref}">
                <ul>
                  <li><img src="${img}" alt=""></li>
                  <li>
                    <h3>${title}</h3>
                    <p>${description}</p>
                  </li>
                </ul>
              </a>
            </li>`;
      });
      topicContents += "</ul>";
      console.log(topicContents);
      $("#topicItem").append(topicContents);

      _topicLiNum = Math.floor(($("#topicUl > li").length - 1) / 4); //非同期処理だからこれがうまく取得できない
      _topicCurNum = 0;
      // li 1個 + margin 1個分の高さ　* 個数　がアニメーションすべき高さ
      var topic_height_inner = $("#topicUl li").innerHeight();
      var topic_height_margin = ($("#topicUl li").outerHeight(true) - topic_height_inner) / 2;
      topic_wrap_height = (topic_height_inner + topic_height_margin) * 4;
      controlBtn();
    });
});

$(document).on('click', "#ue", function() {
  _topicCurNum -= 1;
  controlBtn();
  animateY(-_topicCurNum * topic_wrap_height);
});

$(document).on('click', "#shita", function() {
  _topicCurNum += 1;
  controlBtn();
  animateY(-_topicCurNum * topic_wrap_height);
});

$(window).on('resize', function() {
  window_height = $(window).height(); //global
});



function controlBtn() {
  $("#topicBtn").empty();

  if (_topicCurNum == 0) {
    $("#topicBtn").append('<div id="shita"><span class="icon-circle-down"></span></div><div id="dummy_ue"><span class="icon-circle-up"></span></div>');
  } else if (_topicCurNum < _topicLiNum) {
    $("#topicBtn").append('<div id="shita"><span class="icon-circle-down"></span></div><div id="ue"><span class="icon-circle-up"></span></div>');
  } else {
    $("#topicBtn").append('<div id="dummy_shita"><span class="icon-circle-down"></span></div><div id="ue"><span class="icon-circle-up"></span></div>');

  }
}

function animateY(posY) {
  $("#topicUl").stop().animate({
    marginTop: posY + 'px'
  }, '300', 'easeOutQuart');
}
