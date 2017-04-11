// Use this file to write the logic of your game, the needed attrs and functions
var TenSecondsMathGame = function(options) {
    this.operator = options[0] ;
    this.limit = options[1];

};

// Returns a random integer between [1..numberLimit]
TenSecondsMathGame.prototype.randomNumber = function(limit){
  return Math.floor(Math.random()* limit+1);
};

TenSecondsMathGame.prototype.giveLimit = function(){
  return this.limit;
};

// Returns an object with {question, answer}
TenSecondsMathGame.prototype.questionGenerator = function(){
    var number1 = randomNumber(giveLimit());
    var number2 = randomNumber(giveLimit());
    var indexOperator = Math.floor(Math.random()* operator.length);
    var operator = operator[indexOperator];// check if this can be access
    var answer;

    if(operator== "/"){
      answer= number1 / number2;
    }
    else{
      do{
        if(number1==number2){
          number2 =randomNumber(giveLimit());
        }
      }while(number1==number2);
      if(operator== "-"){
        if(number1<number2){
          var temp = number1;
          number1 = number2;
          number2 = temp;
        }
        answer = number1 - number2;
      }
      else if(operator=="*"){
        answer = number1 * number2;
      }
      else{
        answer = number1 + number2;
      }
    }

    var question = number1 + " "+ operator + " " + number2+ " = ?";
    var obj = {
      question:  question,
      answer: answer
    };
    console.log(question);
    return obj;
};

function initializeGame(){

  var limit = document.getElementById ( "labelLimit" ).innerText;
  var arrayOperators = [];
  var checkBox1 = document.getElementById('cbox1');
  var checkBox2 = document.getElementById('cbox2');
  var checkBox3 = document.getElementById('cbox3');
  var checkBox4 = document.getElementById('cbox4');

  if (checkBox1.checked){
        arrayOperators.push("+");
    }
  if(checkBox2.checked){
    arrayOperators.push("-");
  }
  if(checkBox3.checked){
    arrayOperators.push("*");
  }
  if(checkBox4.checked){
    arrayOperators.push("/");
  }

  var arrayGame = [arrayOperators, limit];

  var a = new TenSecondsMathGame(arrayGame);

}

function startTimer() {
  // Counting down
  var i = 10;
  var intervalId = setInterval(function() {
    if (i > 0) {
      console.log(i);
    } else {
      console.log("Pop!");
      clearInterval(intervalId);
    }
    i--;
  }, 1000);
}

startTimer();


// Checks a user answer
