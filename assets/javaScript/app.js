$("#mainContent").hide();
$("document").ready(function() {

    // start button
    $("button").click( function() {
        $("#button").hide()
        Game()
    });

    // Global variables
        // counters
    let correct = 0;
    let wrong = 0;
    

    jsTrivia = {
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
            q5: [' msgBox("Hello World");', ' msg("Hello World");', ' alertBox("Hello World");',  'alert("Hello World");'],
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


    }


    // HTML Elements
    const timer = $("#cD");
    const correctNum = $("#rightA")
    const incorrectNum = $("#wrongA")
    const question = $("#question")
    const choices = $("#answers");

    // Game function
    function Game() {
        $("#mainContent").show();
        
    }



})
