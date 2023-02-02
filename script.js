// define variables
const jokeBtn = document.querySelector('.jokeBtn')
const answerBtn = document.querySelector('.answerBtn')
const joke = document.querySelector('.joke')
const answer = document.querySelector('.answer')

// fetch joke api
fetch('https://official-joke-api.appspot.com/random_joke')
.then(response => response.json())
.then(data => {
    console.log(data)
    // event listener for joke button press
    jokeBtn.addEventListener('click', function(){
    joke.textContent = data.setup

    // event listener for answer button press
    answerBtn.addEventListener('click', function(){
        answer.textContent = data.punchline
    })
})    
})
.catch(error => {
    console.log(`${error})`)
})

