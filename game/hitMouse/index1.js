$('.mouse').on('click', function (e) {
  $(this).addClass('mouse-down');
  $('#hit')[0].play();
});

setInterval(function () {
  for (var i = 0; i < 3; i++) {
    makeMouse();
  }
}, 1000);

function makeMouse() {
  var index = Math.floor(Math.random() * 16);

  $('.mouse').eq(index).removeClass('mouse-down');

  setTimeout(function () {
    $('.mouse').eq(index).addClass('mouse-down');
  }, 2000);
}

// 阻止拖拽图片时在新页面中打开
document.body.ondrop = function (e) {
  e.stopPropagation();
  e.preventDefault();
};
$('body').on('mousedown', function () {
  $('body').addClass('hammer-down');
});
$('body').on('mouseup', function () {
  $('body').removeClass('hammer-up');
});

var mouseClickCount = 0; // 记录点击次数的变量

$('.mouse').on('click', function (e) {
  $(this).addClass('mouse-down');
  $('#hit')[0].play();

  mouseClickCount++; // 每次点击时增加点击次数
  updateScore(); // 更新分数显示
});

// 更新分数显示的函数
function updateScore() {
  $('#score-number').text(mouseClickCount);
}
