function changeBackgroundColor(e) {
  // ここに背景色を変える処理を書く。
  const myp = document.getElementById("text");
  if (check.checked) {
    myp.style = "background-color:red;";
  } else {
    myp.style = "backgroundcolor:transparent;";
  }
}
