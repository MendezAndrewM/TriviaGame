$("document").ready(function () {

    $("#mainContent").hide();

    const clock = $("#cD");
    const correctNum = $("#rightA");
    const incorrectNum = $("#wrongA");
    const question = $("#question");
    const choices = $("#answers");
    const mainW = $("#mainContent");
    const results = $("#results");
    const startWindow = $("#start");


    jsTrivia = {
        correct: 0,
        incorrect: 0,
        unanswered: 0,
        current: 0,
        timer: 20,
        timerActive: false,
        timerId: '',

        questions: {
            q1: "Inside which HTML element do we put the JavaScript? ",
            q2: "Where is the correct place to insert a JavaScript?",
            q3: "What is the correct syntax for referring to an external script called 'xxx.js'?",
            q4: "The external JavaScript file must contain the <script> tag.",
            q5: "How do you write 'Hello World' in an alert box?",
            q6: "How do you create a function in JavaScript?",
            q7: "How do you call a function named 'myFunction'?",
            q8: "How to write an IF statement in JavaScript?",
        },
        choices: {
            q1: ['<script>', '<javascript>', '<scripting>', '<js>'],
            q2: ['In the <head> tag', 'In the <body> tag', 'In the <footer> tag', 'Both A or B'],
            q3: ['<script src="xxx.js">', '<script name="xxx.js">', '<script href="">'],
            q4: ['true', 'false'],
            q5: [' msgBox("Hello World");', ' msg("Hello World");', ' alertBox("Hello World");', 'alert("Hello World");'],
            q6: [' function = myFunction()', ' function:myFunction()', 'function myFunction()'],
            q7: ['call(myFunction)', ' call function myFunction()', 'myFunction()'],
            q8: [' if (i == 5)', ' if i = 5', ' if i == 5 then', 'if i = 5 then'],
        },
        answers: {
            q1: '<script>',
            q2: 'Both A or B',
            q3: '<script src="xxx.js">',
            q4: 'false',
            q5: 'alert("Hello World");',
            q6: 'function myFunction()',
            q7: 'myFunction()',
            q8: 'if (i == 5)',
        },

        // Game function
        Game: function () {
            // reset varibles
            this.current = 0;
            this.correct = 0;
            this.incorrect = 0;
            this.unanswered = 0;
            // reset timer
            clearInterval(this.timerId);
            clock.text(this.timer);
            // change active <div>
            startWindow.hide()
            results.hide()
            mainW.show();
            this.next()
        },

        next: function () {
            // sets timer to 20
            this.timer = 10;
            clock.text(this.timer)
            // to prevent timer speed up
            if (!this.timerActive) {
                this.timerId = setInterval(this.clockTicking, 1000);
            }
            // gets all the questions then indexes the current questions
            let questionContent = Object.values(this.questions)[this.current]; //May Need Review
            question.text(questionContent);
            let questionChoices = Object.values(this.choices)[this.current];
            // creates all the trivia guess options in the html
            $.each(questionChoices, function (index, key) {
                choices.append($('<button>' + key + '</button>'));
            })
        },

        clockTicking: function () {
            // if timer still has time left and there are still questions left to ask
            if (this.timer > -1 && this.current < Object.keys(this.questions).length) {
                clock.text(this.timer);
                this.timer--;
                // if (this.timer === 4) {
                //     $('#timer').addClass('last-seconds');
                // }
            }
            // the time has run out and increment unanswered, run result
            else if (this.timer === -1) {
                this.unanswered++;
                this.result = false; //Undefined?
                clearInterval(this.timerId);
                resultId = setTimeout(this.guessResult, 1000);
                results.html('<h3>Out of time! The answer was ' + Object.values(trivia.answers)[trivia.currentSet] + '</h3>');
            }
            // if all the questions have been shown end the game, show results
            else if (this.current === Object.keys(this.questions).length) {

                // adds results of game (correct, incorrect, unanswered) to the page
                $('#results')
                    .html('<h3>Thank you for playing!</h3>' +
                        '<p>Correct: ' + trivia.correct + '</p>' +
                        '<p>Incorrect: ' + trivia.incorrect + '</p>' +
                        '<p>Unaswered: ' + trivia.unanswered + '</p>' +
                        '<p>Please play again!</p>');

                // hide game sction
                $('#game').hide();

                // show start button to begin a new game
                $('#start').show();
            }
        }

    }

    $("#startButton").click(function () {
        jsTrivia.Game()
    });

})
