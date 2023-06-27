var mouseClickCount = 0; // 记录点击次数的变量
var gameStarted = false; // 记录游戏是否已开始的变量
var countdownTimer; // 倒计时计时器变量

$('#start').on('click', function () {
  startGame();
  $(this).hide(); // 隐藏 "start" 按钮
});

function startGame() {
  gameStarted = true; // 设置游戏已开始标志为 true
  mouseClickCount = 0; // 重置点击次数
  updateScore(); // 更新分数显示
  countdown(20); // 启动倒计时，设置为 20 秒

  $('.mouse').removeClass('mouse-down'); // 移除老鼠样式

  // 每秒生成老鼠
  setInterval(function () {
    if (gameStarted) {
      makeMouse();
    }
  }, 1000);
}

// 生成老鼠
function makeMouse() {
  var index = Math.floor(Math.random() * 16);
  $('.mouse').eq(index).addClass('mouse-down'); // 添加老鼠样式
  $('.mouse').eq(index).show(); // 显示老鼠
  setTimeout(function () {
    if (gameStarted) {
      $('.mouse').eq(index).removeClass('mouse-down'); // 移除老鼠样式
      $('.mouse').eq(index).hide(); // 隐藏老鼠
    }
  }, 2000);
}

// 点击老鼠
$('.mouse').on('click', function (e) {
  if (gameStarted) {
    $(this).addClass('mouse-down');
    $('#hit')[0].play();

    mouseClickCount++; // 每次点击时增加点击次数
    updateScore(); // 更新分数显示
  }
});

// 更新分数显示的函数
function updateScore() {
  $('#score-number').text(mouseClickCount);
}

// 倒计时函数
function countdown(seconds) {
  var remainingSeconds = seconds;
  $('#time').text(remainingSeconds); // 显示倒计时初始值

  countdownTimer = setInterval(function () {
    remainingSeconds--;
    if (remainingSeconds >= 0) {
      $('#time').text(remainingSeconds); // 更新倒计时显示
    } else {
      stopGame(); // 倒计时结束，停止游戏
    }
  }, 1000);
}

// 停止游戏
function stopGame() {
  gameStarted = false; // 设置游戏已结束标志为 false
  clearInterval(countdownTimer); // 停止倒计时计时器
  $('.mouse').removeClass('mouse-down'); // 移除老鼠样式
  $('.mouse').hide(); // 隐藏所有老鼠
  $('#start').show(); // 显示 "start" 按钮
  mouseClickCount = 0; // 重置点击次数
  updateScore(); // 更新分数显示
}
