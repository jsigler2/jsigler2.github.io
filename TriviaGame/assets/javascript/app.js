
var questions = [
{
    q: "Who was the first president to appear on television?",
    a: ["Harry S. Truman", "Richard Nixon", "JFK", "Franklin D. Roosevelt"],
    name: "Q1",
    correct: "Franklin D. Roosevelt",
    divClass: ".Q1"
},
{
    q: "How many former U.S. presidents are currently still alive?",
    a: ["7", "4", "3", "5"],
    name: "Q2",
    correct: "4",
    divClass: ".Q2"
},
{
    q: "What was the name of Abraham Lincoln's beloved dog?",
    a: ["Fido", "Baxter", "Max", "Benji"],
    name: "Q3",
    correct: "Fido",
    divClass: ".Q3"
},
{
    q: "Which president accepted the Statue of Liberty on behalf of the American people?",
    a: ["James K. Polk", "Franklin Pierce", "James Buchanan", "Grover Cleveland"],
    name: "Q4",
    correct: "Grover Cleveland",
    divClass: ".Q4"
},
{
    q: "Who was the oldest man to sign the US Declaration of Independence?",
    a: ["Thomas Jefferson", "Benjamin Franklin", "John Hancock", "Joseph Hewes"],
    name: "Q5",
    correct: "Benjamin Franklin",
    divClass: ".Q5"
},
{
    q: "How many states are there in the U.S.?",
    a: ["50", "52", "49", "51"],
    name: "Q6",
    correct: "50",
    divClass: ".Q6"
},
{
    q: "What was the last state to join the U.S.?",
    a: ["Alaska", "Hawaii", "New Mexico", "Arizona"],
    name: "Q7",
    correct: "Hawaii",
    divClass: ".Q7"
},
{
    q: "Which U.S. city hosted the olympics more than once?",
    a: ["Salt Lake city", "Seattle", "Atlanta", "Los Angeles"],
    name: "Q8",
    correct: "Los Angeles",
    divClass: ".Q8"
}
] 

var labels = ["first", "second", "third", "forth"];

$( document ).ready(function() {
    console.log( "start" );
    $('.questionnaire').hide();
    $('#timer-page').hide();
    $('#results').hide();
});


var startGame = $("#start-button").on('click', function() {
    $(this).parent().hide();
    $('.questionnaire').show();
    countdown(60);
    questionDisplay();
});


var questionDisplay = function() {
    $(".questions :not('#submit')").empty(); 
    for (var j = 0; j < 8; j++) {
        $('.questions').prepend('<div class="' + questions[j].name + '"></div>');
        $(questions[j].divClass).append('<div class ="inquiries">' + questions[j].q + '</div>');

        for (var i = 0; i <= 3; i++) {
            $(questions[j].divClass).append('<input type="radio"  name="' + questions[j].name + '" value="' + questions[j].a[i] + '"/><label for="' + labels[i] + '">' + questions[j].a[i] + '</label>');
        }
        $('.questions').prepend('<br />');
    }
}


// timer function
var countdown = function(seconds) {

    var timer = setInterval(function() {
        seconds = seconds - 1;
        $("#time-remain").html(seconds);

        if (seconds <= 0) {
            $('.questionnaire').fadeOut(1000);
            var correctAnswers = 0;
            var wrongAnswers = 0;

            for (var i = 0; i < 8; i++) {

                if ($('input:radio[name="' + questions[i].name + '"]:checked').val() === questions[i].correct) {

                    correctAnswers++;
                    console.log("correct" + i)
                } else {
                    wrongAnswers++;
                    console.log("incorrect:" + i)
                };
            }
            $('#correct').append(correctAnswers);
            $('#incorrect').append(wrongAnswers);
            $('#timer-page').show();

            clearInterval(timer);
            return;
        }
    }, 1000); //1 second intervals
    
    $('#submit').on('click', function() {
        clearInterval(timer);
        $('.questionnaire').hide();
    })
}; // end countdown


var showResults = $('#submit').on('click', function() {

    var correctAnswers = 0;
    var wrongAnswers = 0;

    for (var i = 0; i < 8; i++) {

        if ($('input:radio[name="' + questions[i].name + '"]:checked').val() === questions[i].correct) {

            correctAnswers++;
        } else {
            wrongAnswers++;
        };
    };

   
    countdown();
    $('#results').show();
    $('#correctResult').append(correctAnswers);
    $('#incorrectResult').append(wrongAnswers);

}); 