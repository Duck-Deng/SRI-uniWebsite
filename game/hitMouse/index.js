$('#start').on('click', function () {
  startGame();
});

document.addEventListener('DOMContentLoaded', function () {
  var timedownElement = document.getElementById('timedown');
  timedownElement.style.display = 'none';
});

var intervalId; // 保存 setInterval 的 ID
var countdownId; // 保存倒计时的 ID

function startGame() {
  $('#start').hide(); // 隐藏 "start" 按钮
  $('#stop').removeClass('hide'); //显示停止按钮
  $('#time').show(); //显示分数
  $('#timedown').show(); //显示倒计时

  mouseClickCount = 0; // 重置点击次数
  updateScore(); // 更新分数显示

  // 启动定时器，每秒调用一次 makeMouse()
  intervalId = setInterval(makeMouse, 1000);

  // 启动倒计时，设置为 10 秒
  var remainingSeconds = 20;
  $('#time').text(remainingSeconds); // 显示倒计时初始值

  countdownId = setInterval(function () {
    remainingSeconds--;
    if (remainingSeconds >= 0) {
      $('#time').text(remainingSeconds); // 更新倒计时显示
    } else {
      stopGame(); // 倒计时结束，停止游戏
    }
  }, 1000);
}

// 生成老鼠
function makeMouse() {
  var index = Math.floor(Math.random() * 16);

  $('.mouse').eq(index).removeClass('mouse-down');

  setTimeout(function () {
    $('.mouse').eq(index).addClass('mouse-down');
  }, 500);
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

// 停止游戏
function stopGame() {
  clearInterval(intervalId); // 停止生成老鼠的定时器
  clearInterval(countdownId); // 停止倒计时的定时器
  $('.mouse').addClass('mouse-down'); // 移除老鼠样式
  $('#start').show(); // 显示 "start" 按钮
  $('#stop').addClass('hide'); //显示停止按钮
}

$('#stop').on('click', function () {
  stopGame(); //停止游戏
  $('#timedown').hide(); //隐藏倒计时
});
