// load big text in variable u

function query(text) {
  document.querySelector("textarea").value = text;
  const buttons = document.querySelectorAll("button");
  console.log({buttons})
  if(buttons?.length > 0) {
      const sendButton = document.querySelector("#__next > div.overflow-hidden.w-full.h-full.relative > div > main > div.absolute.bottom-0.left-0.w-full.border-t.md\\:border-t-0.dark\\:border-white\\/20.md\\:border-transparent.md\\:dark\\:border-transparent.md\\:bg-vert-light-gradient.bg-white.dark\\:bg-gray-800.md\\:\\!bg-transparent.dark\\:md\\:bg-vert-dark-gradient > form > div > div.flex.flex-col.w-full.py-2.flex-grow.md\\:py-3.md\\:pl-4.relative.border.border-black\\/10.bg-white.dark\\:border-gray-900\\/50.dark\\:text-white.dark\\:bg-gray-700.rounded-md.shadow-\\[0_0_10px_rgba\\(0\\,0\\,0\\,0\\.10\\)\\].dark\\:shadow-\\[0_0_15px_rgba\\(0\\,0\\,0\\,0\\.10\\)\\] > button") 
                          || buttons[buttons.length - 1];
      sendButton.disabled = false;
      sendButton.click();
  }
  document.querySelector("#__next > div.overflow-hidden.w-full.h-full.relative > div.flex.h-full.flex-1.flex-col.md\\:pl-\\[260px\\] > main > div.flex-1.overflow-hidden > div > div > button")?.click()
}

async function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// create slices of maxSizePerMessage characters of variable u

function changeBackgroundColor(color) {
  color = color || getRandomBrightColor();
  document.body.style.background = color;
  ["dark:bg-gray-800", "bg-gray-50"].forEach(className => {
    const elements = document.getElementsByClassName(className);
    for (var i = 0; i < elements.length; i++) {
      elements[i].style.backgroundColor = color;
    }
  })
}

function getRandomBrightColor() {
  while (true) {
    // Generate a random color using the RGB color model
    const color = [Math.floor(Math.random() * 256), Math.floor(Math.random() * 256), Math.floor(Math.random() * 256)];
    // Calculate the brightness of the color using the luminosity formula
    const brightness = 0.2126 * color[0] + 0.7152 * color[1] + 0.0722 * color[2];
    // Check if the brightness is greater than a minimum threshold (50 in this case)
    if (brightness > 50) {
      // Convert the color array to a CSS color string and return it
      return `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
    }
  }
}

async function insertBigText(superlongText) {
  const pauseBetweenMessages = 3000; // ms
  const maxSizePerMessage = 10 * 1000;
  if(superlongText.length < maxSizePerMessage)
    return query(superlongText);
  let loop = 0;
  for(let i = 0; i < superlongText.length; i += maxSizePerMessage) {
    if(loop % 3 === 0) {
      changeBackgroundColor();
      query(`I'm going to send you a big text in multiple messages. You should just say "OK". Do you understand this? Please say OK`);
      await wait(1000);
    }
    changeBackgroundColor();
    query('Only respond with the text "OK" after this message. \n\n' + superlongText.slice(i, i + maxSizePerMessage));
    if(i + 1 < superlongText.length) await wait(pauseBetweenMessages);
    loop++;
  }
}

async function main() {
  changeBackgroundColor();
  await new Promise(x => setTimeout(x, 200));
  let superlongText = window.prompt("Please enter your (large) text here. It will be inserted into GPT");
  if(superlongText.length === 0) {
    changeBackgroundColor("white");
    return alert('Please load big text in variable u');
  }
  await insertBigText(superlongText);
  changeBackgroundColor("white");
  // await wait(1000);
  // query(`Could you summarize all text above with bullet points?`);
}

main();