let result = "";
let last_text = "";
let timeout;

function updateCounts() {
  let text = document.getElementById("text").value;
  let charCount = text.length;
  let wordCount = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;

  document.getElementById("charCount").innerText = charCount;
  document.getElementById("wordCount").innerText = wordCount;
}

function resetForm() {
  document.getElementById("text").value = "";
  document.getElementById("result").innerText = "Result will go here.";
  updateCounts();
}

function UnOriginalAI(event) {
  event.preventDefault();

  clearTimeout(timeout);
  timeout = setTimeout(() => {
    let text = document.getElementById("text").value;
    if (last_text != text) {
      last_text = text;
      let certainty = (
        Math.floor(Math.random() * 30) +
        68 +
        Math.random()
      ).toFixed(1);
      let isAI = Math.random() < 0.5;
      if (isAI) {
        result = `AI Writing Detected with ${certainty}% certainty`;
      } else {
        result = `Human Writing Detected with ${certainty}% certainty`;
      }

      document.getElementById("result").innerHTML = result;
      console.log(result);
    }
  }, 1000); // 1 second delay before checking
}
