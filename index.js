var textArea = document.getElementById("thoughts");
function countChars() {
    textArea = document.getElementById("thoughts");
    var charCount = textArea.value.length;
    document.getElementById("current").innerHTML = charCount;
  }
  textArea.addEventListener("onchange", countChars);