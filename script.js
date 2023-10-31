const originalText = document.getElementById("original");
const wordsToRedact = document.getElementById("words");

document.getElementById("redactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  redactFunction();
});

const redactFunction = () => {
  let redactText = document.getElementById("redatedText")
  let redactOptionValue = document.getElementById("choice").value;
  let originalTextValue = originalText.value;
  const wordsToRedactValue = wordsToRedact.value
    .split(/[;,|]/)
    .map((e) => e.trim());
  let redact = originalTextValue;
  let redactWords = redact.split(/[" ";,|]/);

  if (!redact || redactWords.length <= 10) {
    alert("Text should be more than 10.");
  } else {
    if (wordsToRedactValue) {
      wordsToRedactValue.forEach((word) => {
        if (redact.includes(word)) {
          let regexText = new RegExp(word, "gi");
          redact = redact.replace(regexText, redactOptionValue);
        } else {
          alert("Not found");
        }
      });

      redactText.innerText = redact
      if(redact){
        document.getElementById("redatedTextContainer").addEventListener("dblclick", () => {
          navigator.clipboard.writeText(redact)
        });
      }
     
    } else {
      alert("Words to be blurred out is empty");
    }
  }
};
