$(function(){
  $("button".click(function(){
    const data = {

    }
    $.get('/answer', {data})
    .done(success)
    .fail(failure)
  }))
});

function success(){
  var ball = {};
  ball.listOfAnswers =[ "It is Certain", "It is decidedly so", "Without a doubt", "Yes definitely", "You may rely on it", "As I see it, yes",
  "Most likely", "Outlook good", "Yes", "Signs point to yes", "Reply hazy, try again", "Ask again later",
  "Better not tell you now", "Cannot predict now", "Concentrate and ask again", "Don't count on it",
  "My reply is no", "My sources say no", "Outlook not so good", "Very doubtful" ];
  ball.getAnswer = function(){
    let randomNumber = Math.random();
    let randomAnswer = Math.floor(randomNumber * this.listOfAnswers.length);
    let answer = this.listOfAnswers[randomAnswer];
    $("#answers").text(answer);
  }
}

function failure(){

}