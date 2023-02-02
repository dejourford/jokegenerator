// define variables
const jokeBtn = document.querySelector('.jokeBtn')
const answerBtn = document.querySelector('.answerBtn')
const joke = document.querySelector('.joke')
const answer = document.querySelector('.answer')


// event listener for joke button for new joke
jokeBtn.addEventListener('click', function(){
    // fetch joke api
    fetch('https://official-joke-api.appspot.com/random_joke')
    .then(response => response.json())
    .then(data => {
        console.log(data)
        // event listener for joke button press
        joke.textContent = data.setup

        // event listener for answer button press 
        answer.textContent = data.punchline
        answer.style.visibility = 'hidden'
        answerBtn.addEventListener('click', function(){
            answer.style.visibility = 'visible'
        })   
    })
    .catch(error => {
        console.log(`${error})`)
    })
})
