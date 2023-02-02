// define variables
const jokeBtn = document.querySelector('.jokeBtn')
const answerBtn = document.querySelector('.answerBtn')
const joke = document.querySelector('.joke')
const answer = document.querySelector('.answer')

// fetch joke api
fetch('https://official-joke-api.appspot.com/random_joke')
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.log(`${error})`))