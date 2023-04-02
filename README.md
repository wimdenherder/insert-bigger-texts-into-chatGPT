# Trick to insert bigger texts into chatGPT

Max size is around 4000 characters (keep testing this to be sure!)
So this [script](queryBigTextsGPT.js) helps you insert bigger texts into chatGPT. It needed pauses and reassurance that chatGPT just answers "OK" every three messages. There is room for optimizing here! Pull requests are welcome. 

### YouTube
This [script](getSubs.js) helps you download YouTube transcripts
# How to Install a Chrome Extension from a Zip File Using Developer Mode

Follow these steps to install a Chrome extension from a zip file using developer mode:

1. **Download the zip file** containing the Chrome extension that you want to install.
2. **Extract the contents** of the zip file to a folder on your computer.
3. **Open Google Chrome** and type `[chrome://extensions](chrome://extensions)` into the address bar.
4. **Enable Developer mode** by switching on the toggle in the top right-hand corner of the page.
5. Click the **Load unpacked** button in the top left-hand corner of the page.
6. In the file browser window that appears, navigate to the folder where you extracted the zip file contents in step 2.
7. **Select the folder** and click the **Select folder** button.
8. The Chrome extension will now be installed and should appear in the list of installed extensions on the `chrome://extensions` page.

> :warning: **Note:** Installing extensions from sources other than the Chrome Web Store can be risky, as they may not be verified by Google and could potentially contain malicious code. Therefore, it is recommended to only install extensions from trusted sources.


### Direct execution of script
- Go to [https://chat.openai.com/chat](https://chat.openai.com/chat)
- Log in
- Open developer console
- Copy paste this script [queryBigTextsGPT.js](queryBigTextsGPT.js) into the developer console and run main()

## How the code works

- The code is a JavaScript program that sends a large text in multiple messages to an input field using the query() function.
- The insertBigText() function takes a large string, splits it into slices of maxSizePerMessage characters, and sends them one by one using the query() function with a delay of pauseBetweenMessages milliseconds between each message.
- The main() function prompts the user to enter a large text, calls insertBigText() to send it in multiple messages, and then sends a final message requesting a summary of the text with bullet points.