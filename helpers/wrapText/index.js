// check the width of the text to ellipser the text
const wrapText = (context, text, x, y, maxWidth, lineHeight) => {
  let words = text.split(" ");
  let line = "";

  for (let n = 0; n < words.length; n++) {
    let testLine = line + words[n] + " ";
    let metrics = context.measureText(testLine);
    let testWidth = metrics.width;
    if (testWidth > maxWidth && n > 0) {
      context.textAlign = "center";
      context.fillText(line, x, y);
      line = words[n] + " ";
      y += lineHeight;
    } else {
      line = testLine;
    }
  }
  context.textAlign = "center";
  context.fillText(line, x, y);
};

export default wrapText;
