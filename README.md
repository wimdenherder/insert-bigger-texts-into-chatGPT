# Trick to insert bigger texts into chatGPT

Max size is around 4000 characters (keep testing this to be sure!)
So this [script](queryBigTextsGPT.js) helps you insert bigger texts into chatGPT. It needed pauses and reassurance that chatGPT just answers "OK" every three messages. There is room for optimizing here! Pull requests are welcome. 

### YouTube
This [script](getSubs.js) helps you download YouTube transcripts

### Installation
- Go to [https://chat.openai.com/chat](https://chat.openai.com/chat)
- Log in
- Open developer console
- Paste big text into variable u, like this
```
let u = `BIG TEXT HERE`
```
- Copy paste this script [queryBigTextsGPT.js](queryBigTextsGPT.js) into the developer console and run main()

## How the code works

- The code is a JavaScript program that sends a large text in multiple messages to an input field using the query() function.
- The insertBigText() function takes a large string, splits it into slices of maxSizePerMessage characters, and sends them one by one using the query() function with a delay of pauseBetweenMessages milliseconds between each message.
- The main() function prompts the user to enter a large text, calls insertBigText() to send it in multiple messages, and then sends a final message requesting a summary of the text with bullet points.