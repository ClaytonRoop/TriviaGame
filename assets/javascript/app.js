
var number = 30;

var invervalId;

var clockRunning = false;

var answer1;
var answer2;
var answer3;
var answer4;
var answer5;

var correct = 0;
var incorrect = 0;
var unanswered = 0;

var answerArray = [];

// $(".startButton").on("click", start());

$(".startButton").on("click", function () {
    start();
});

$(".doneButton").on("click", function () {
    stop();
});


//this is grabbing the selected buttons value and giving it a vairable. 
//this can probably be done at the end when the time is over
//instead of using the change function everytime it's pressed.

// $('.form input').on('change', function () {
//     answer1 = $('input[name=q1]:checked', '.form').val();
//     answer2 = $('input[name=q2]:checked', '.form').val();
//     answer3 = $('input[name=q3]:checked', '.form').val();
//     answer4 = $('input[name=q4]:checked', '.form').val();
//     answer5 = $('input[name=q5]:checked', '.form').val();

//     console.log(answer1);
//     console.log(answer2);
//     console.log(answer3);
//     console.log(answer4);
//     console.log(answer5);
// });






function start() {
    intervalId = setInterval(decrement, 1000);
}


function decrement() {

    //  Decrease number by one.
    number--;

    //  Show the number in the #show-number tag.
    $(".startButton").html("<h2> Time Remaining: " + number + "</h2>");

    clockRunning = true;

    //  Once number hits zero...
    if (number === 0) {

        //  ...run the stop function.
        stop();

        //  Alert the user that time is up.

            // console.log(answer1);
            // console.log(answer2);
            // console.log(answer3);
            // console.log(answer4);
            // console.log(answer5);
    }
}

function stop () {
    clearInterval(intervalId);
    answer1 = $('input[name=q1]:checked', '.form').val();
    answer2 = $('input[name=q2]:checked', '.form').val();
    answer3 = $('input[name=q3]:checked', '.form').val();
    answer4 = $('input[name=q4]:checked', '.form').val();
    answer5 = $('input[name=q5]:checked', '.form').val();

    answerArray.push(answer1, answer2, answer3, answer4, answer5);

    for (var i = 0; i < answerArray.length; i++) {

        if (answerArray[i] === "correct") {
            console.log([i]);
            correct++;
            console.log(correct);
            $(".correct").text("Correct: " + correct);
        } else if (answerArray[i] === "wrong") {
            incorrect++
            console.log(incorrect);
            $(".incorrect").text("Incorrect: " + incorrect);
        } else {
            unanswered++
            console.log(unanswered);
            $(".unanswered").text("Unanswered: " + unanswered);
        }

    }

    // ifThen() 
}

// function ifThen () {

//     console.log(answerArray);
//     console.log("first: " + answerArray[0]);
//     console.log("second: " + answerArray[1]);


    
// }




// function grabAnswer() {
//     answer1 = $('input[name=q1]:checked', '.form').val();
//     answer2 = $('input[name=q2]:checked', '.form').val();
//     answer3 = $('input[name=q3]:checked', '.form').val();
//     answer4 = $('input[name=q4]:checked', '.form').val();
//     answer5 = $('input[name=q5]:checked', '.form').val();
// }




// function start() {
//     clearInterval(intervalId);
//     intervalId = setInterval(decrement, 1000);
// }
