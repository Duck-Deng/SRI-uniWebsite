function checkScore() {
  var x = Number(document.getElementById("score").textContent);
  if (x <= 20) {
    document.getElementById("demo").innerHTML = "【等级I】你们的水平也太差啦！";
  } else if (x <= 50) {
    document.getElementById("demo").innerHTML = "【等级II】半桶水荡的起些";
  } else if (x <= 70) {
    document.getElementById("demo").innerHTML = "【等级III】还行还可以";
  } else if (x <= 90) {
    document.getElementById("demo").innerHTML =
      "【等级IV】发挥出了你们的正常水平";
  } else if (x <= 120) {
    document.getElementById("demo").innerHTML =
      "【等级V】成功打造了一班的品牌！";
  } else {
    document.getElementById("demo").innerHTML =
      "【淑桦钦点】以为自己蛮狠到是吧？你有什么隐含意思？";
  }
}
