  function checkScore() {
  var x = Number(document.getElementById("score").textContent);
  var comments = {
    1: ["【等级I】你们的水平也太差啦！", "【等级I】没有找到差异性！", "【等级I】你这是搞不好滴！", "你是这样搞ha克，就帮我滚回kei"],
    2: ["【等级II】你好狠啊，不见dei", "【等级II】半桶水荡的起些", "【等级III】以为自己蛮狠到！"],
    3: ["【等级III】练字可以让心静下来", "【等级III】帮我沉淀哈来", "【等级III】什么时候，做什么事情"],
    4: ["【等级IV】应该要相当熟练到", "【等级IV】帮我务实一点", "【等级IV】行为上的惰性化，______"],
    5: ["【等级V】可能要动用丛林法则？", "【等级V】翔棱一中不缺xio生！", "【等级V】必然tao致思维上的惰性化"],
    6: ["【非人类】zu一题，得一法，废一类", "【非人类】飘飘然飘飘然", "【非人类】21天就要养成习惯到!"]
  };
// Copyright © 2023 Changning NO.1 High School, Class.2309, Mr.Jin. All Rights Reserved.
  var randomIndex;
  var selectedComment;

  if (x <= 20) {
    randomIndex = Math.floor(Math.random() * comments[1].length);
    selectedComment = comments[1][randomIndex];
  } else if (x <= 50) {
    randomIndex = Math.floor(Math.random() * comments[2].length);
    selectedComment = comments[2][randomIndex];
  } else if (x <= 70) {
    randomIndex = Math.floor(Math.random() * comments[3].length);
    selectedComment = comments[3][randomIndex];
  } else if (x <= 120) {
    randomIndex = Math.floor(Math.random() * comments[4].length);
    selectedComment = comments[4][randomIndex];
  } else if (x <= 150) {
    randomIndex = Math.floor(Math.random() * comments[5].length);
    selectedComment = comments[5][randomIndex];
  } else if (x <= 170) {
    randomIndex = Math.floor(Math.random() * comments[6].length);
    selectedComment = comments[6][randomIndex];
  } else {
    selectedComment = "果甲xiu机，你自己ban瓜，还是我帮你ban瓜？";
  }

  document.getElementById("demo").innerHTML = selectedComment;
}
