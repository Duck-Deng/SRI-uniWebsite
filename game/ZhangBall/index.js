	var clientWidth = document.body.clientWidth;
	var cxk_body = 1;
	var move_way = 1;
	canvas.width = canvas.clientWidth;
	canvas.style.width = canvas.clientWidth + "px";
	cdiv.style.width = cdiv.clientWidth + "px";
	canvas.height = canvas.clientWidth / 1000 * 563;
	canvas.style.height = canvas.clientWidth / 1000 * 563 + "px";
	cdiv.style.height = cdiv.clientWidth / 1000 * 563 + "px";
	if (canvas.width < 936) {
		canvas.width = 936;
		canvas.height = 936 / 1000 * 563;
		canvas.setAttribute("style", "");
		canvas.style.zoom = (cdiv.clientWidth / 936);
	} else {

	}
	window.startGame = function () {
		// $("#audio").attr("src", "media/jntm.m4a");
		// audio.play();
		window.cacheBallSpeed = parseInt($("#ballspeedset").val());
		$("#ballspeedset").attr("disabled", "disabled");
		_main.start();
		setInterval(function () {
			if (cxk_body == 1) {
				_main.paddle.image.src = "images/paddle2_" + move_way + ".png";
				cxk_body = 2;
			} else if (cxk_body == 2) {
				_main.paddle.image.src = "images/paddle3_" + move_way + ".png";
				cxk_body = 3;
			} else if (cxk_body == 4) {
				_main.paddle.image.src = "images/paddle4_" + move_way + ".png";
				cxk_body = 3;
			} else {
				_main.paddle.image.src = "images/paddle_" + move_way + ".png";
				cxk_body = 1;
			}
		}, 150);

		setInterval(function () {
			_main.ballshadow.y = 545;
			_main.ballshadow.x = _main.ball.x;
		}, 10);
	}