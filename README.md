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