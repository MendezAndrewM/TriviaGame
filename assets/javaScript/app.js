$(document).ready(function () {
    // Assign html elements to variables
    const mainW = $("#mainContent");
    const results = $("#results");
    const startWindow = $("#start");
    const info = $("#info")
    // only show the start page
    results.hide()
    mainW.hide()
    
    $("#startButton").click(function () {
        Game.startTimer()
    });
    // Questions and answers
    const quiz = [
        {
            question: "What is the Jquery equivalent of: 'document.getElementById('llama')' ?",
            answers: ["$('.llama')", "$('#llama')", "document.querySelector('#llama')"],
            correct: "$('#llama')"
        },
        {
            question: "Which of the following will replace the contents of am element with an Id of 'hungry'?",
            answers: ["$('#hungry').append('content')", "document.querySelector('#hungry').prepend('content')", "$('#hungry').text('content')"],
            correct: "$('#hungry').text('content')"
        },
        {
            question: "Which is the propper way to declare a variable with a value that should never change?",
            answers: ["const", "var", "let"],
            correct: "const"
        },
        {
            question: "Which of the following is NOT a JavaScript data type?",
            answers: ["string", "undefined", "box"],
            correct: "box"
        },
        {
            question: "What does it mean to be 'Asynchronous'?",
            answers: ["To be synced up with a database", "to run in an event loop", "to reproduce without a mating pair"],
            correct: "to run in an event loop"
        },
        {
            question: "What is an 'IIFE'?",
            answers: ["Immediately Invoked Function Expression", "Inherited Idle Flash Encryption", "A badger with Parkinson's disease "],
            correct: "Immediately Invoked Function Expression"
        },
        {
            question: "What does an ajax call return",
            answers: ["a suggestion", "a promise", "a demand"],
            correct: "a promise"
        },
        {
            question: "Which of the following methods will remove the last element of an array?",
            answers: ["array.push()", "array.pop()", "array.shift()"],
            correct: "array.pop()"
        },
        {
            question: "Which of the following will return a boolean value of 'false'",
            answers: ["1 == '1'", "1 ==='1'", "1 !== '1'"],
            correct: "1 ==='1'"
        },
        {
            question: "How would you console log the value of the 'name' key in the object: 'nestedObj', which happends to be nested in the object named: 'firstObj'?",
            answers: ["console.log(firstObj.nestedObj.name);", "console.log(this.nestedObj.name)", "console.log(name);"],
            correct: "console.log(firstObj.nestedObj.name);"
        }];
    // Functions to control the flow of the game
    Game = {
        // set timer starting value
        timeRemaining: 60,
        // when Start button is clicked, start timer and initiate game
        startTimer: function () {
            mainW.show()
            $("#timer").text("Time remaining: " + Game.timeRemaining);
            setInterval(Game.countdown, 1000);
            startWindow.hide();
            jsTrivia.displayQuiz();
        },
        // if statements for countdown
        countdown: function () {
            Game.timeRemaining--;
            $("#timer").text("Time remaining: " + Game.timeRemaining);
            if (Game.timeRemaining < 15) {
                $("#timer").addClass('lowTime')
            }
            if (Game.timeRemaining < 10) {
                $("#timer").addClass('lowerTime')
            }
            if (Game.timeRemaining < 5) {
                $("#timer").addClass('veryLowTime')
            }
            if (Game.timeRemaining === 0) {
                Game.stopTimer();
                $("#timer").empty();
            }
        },
        // function to stop the timer
        stopTimer: function () {
            clearInterval();
            jsTrivia.checkAnswers();
        },
        // At the end of the game, show results page
        end: function (numCorrect, numIncorrect, numUnanswered) {
            info.hide()
            results.show()
            $("#rightA").text(numCorrect);
            $("#wrongA").text(numIncorrect);
            $("#unanswered").text(numUnanswered);
            $("#timeLeft").text(this.timeRemaining);
            // Try Again button not working
            // also, for some reason, after a few seconds, another button appears
            results.append('<button id="tryAgain">Try Again</button>')
            $("#tryAgain").on('click', this.startTimer());

        }
    };
    //object to display questions and calculate user responses
    const jsTrivia = {
        //Display questions and answers to the page
        displayQuiz: function () {
            const divContainer = $("#questionBox");
            for (let i = 0; i < quiz.length; i++) {
                divContainer.append('<div id="question">' + quiz[i].question + '</div>');
                const answer1 = quiz[i].answers[0];
                const answer2 = quiz[i].answers[1];
                const answer3 = quiz[i].answers[2];
                divContainer.append('<div class="form-check"><input type="radio" name="radio-group' + i + '" id="radio' + i + '"><label id="radio' + i + 'label" for="radio' + i + '">' + answer1 + '</label></div>');
                divContainer.append('<div class="form-check"><input type="radio" name="radio-group' + i + '" id="radio' + i + '"><label id="radio' + i + 'label" for="radio' + i + '">' + answer2 + '</label></div>');
                divContainer.append('<div class="form-check"><input type="radio" name="radio-group' + i + '" id="radio' + i + '"><label id="radio' + i + 'label" for="radio' + i + '">' + answer3 + '</label></div>');
            };
            // creates a submit button to end the game
            const doneButton = '<button id="done-button" type="submit">Submit</button>';
            divContainer.append(doneButton);
            $("#done-button").on("click", Game.stopTimer);
        },
        // when submit button is clicked, determine score
        checkAnswers: function () {
            let correctAnswer;
            let userAnswer;
            let numCorrect = 0;
            let numIncorrect = 0;
            let numUnanswered = 0;

            for (let i = 0; i < quiz.length; i++) {
                correctAnswer = quiz[i].correct;
                userAnswer = $('input[id=radio' + i + ']:checked + label').text();
                if (userAnswer === correctAnswer) {
                    numCorrect++;
                } else if (userAnswer === "") {
                    numUnanswered++;
                } else if (userAnswer !== correctAnswer) {
                    {
                        numIncorrect++;
                    }
                }
            }
            Game.end(numCorrect, numIncorrect, numUnanswered);
        }
    }
});