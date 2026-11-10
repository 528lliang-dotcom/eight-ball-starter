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

  let answerType

  //check question
  if (userQuestion === "") {
    document.getElementById('questionOut').textContent = ""
    document.getElementById('answer').textContent = "The Eightball frowns at you."
    document.getElementById('answerType').innerHTML = ""
    return
  } else {
    EightVal = Math.floor(Math.random() * 10)
    switch (EightVal) {
      case 0: eightAns = 'It is certain'; 
        answerType = 1;
        break;
      case 1: eightAns = 'It is decidedly so'; 
        answerType = 1;
        break;
      case 2: eightAns = 'Reply hazy try again'; 
        answerType = 2;
        break;
      case 3: eightAns = 'Cannot predict now'; 
        answerType = 2;
        break;
      case 4: eightAns = 'Do not count on it'; 
        answerType = 0;
        break;
      case 5: eightAns = 'My sources say no'; 
        answerType = 0;
        break;
      case 6: eightAns = 'Outlook not so good'; 
        answerType = 0;
        break;
      case 7: eightAns = 'Signs point to yes'; 
        answerType = 1;
        break; 
      case 8: eightAns = 'Your answer lies somewhere else';
        answerType = 2;
        break;
      case 9: eightAns = `It doesn't matter in the end`;
        answerType = 2;
        break;
    }

    document.getElementById('answer').textContent = eightAns

    switch (answerType) {
      case 0:
        document.getElementById('answerType').innerHTML = '<span class="no">NO</span>'
        break;
      case 1:
        document.getElementById('answerType').innerHTML = '<span class="yes">YES</span>'
        break;
      case 2:
        document.getElementById('answerType').innerHTML = '<span class="maybe">MAYBE</span>'
        break;
    }
  }


}