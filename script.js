/*
  Magic 8 Ball
  Name:
  Period:
*/

function askEightBall() {

  //get input values
  let userName = document.getElementById('nameInput').value
  let userQuestion = document.getElementById('questionInput').value

  console.log(userName, userQuestion)

  //show question on site

    document.getElementById('questionOut').textContent = "you  asked " + userQuestion


  //greet user
  let greeting
  
  if (userName) {
    greeting = `Hello ${userName}`
  }  else {
    greeting = "Hello mystery person"
  }

  console.log(greeting)

  document.getElementById('greeting').textContent = greeting

  //check question
  if (userQuestion === "") {
    document.getElementById('questionOut').textContent = ""
    document.getElementById('answer').textContent = "The Eightball frowns at you."
    document.getElementById('answerType').innerHTML = ""
    return
  } else {
    EightVal = Math.floor(Math.random() * 8)
    switch (EightVal) {
      case 0: eightAns = 'It is certain'; break;
      case 1: eightAns = 'It is decidedly so'; break;
      case 2: eightAns = 'Reply hazy try again'; break;
      case 3: eightAns = 'Cannot predict now'; break;
      case 4: eightAns = 'Do not count on it'; break;
      case 5: eightAns = 'My sources say no'; break;
      case 6: eightAns = 'Outlook not so good'; break;
      case 7: eightAns = 'Signs point to yes'; break; 
    }
  }


}