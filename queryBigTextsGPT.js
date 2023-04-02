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

async function insertBigText(superlongText) {
  const pauseBetweenMessages = 3000; // ms
  const maxSizePerMessage = 10 * 1000;
  let loop = 0;
  for(let i = 0; i < superlongText.length; i += maxSizePerMessage) {
    if(loop % 3 === 0) {
      query(`I'm going to send you a big text in multiple messages. You should just say "OK"`);
      await wait(pauseBetweenMessages);
    }
    query('Just respond with "OK" after this message. \n\n' + superlongText.slice(i, i + maxSizePerMessage));
    await wait(pauseBetweenMessages);
    loop++;
  }
}

async function main() {
  let superlongText = window.prompt("Please enter your (large) text here. It will be inserted into GPT");
  if(superlongText.length === 0)
    return alert('Please load big text in variable u');
  await insertBigText(superlongText);
  await wait(1000);
  query(`Could you summarize all text above with bullet points?`);
}

main();