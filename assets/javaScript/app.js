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
        // questions
    const question1 = "";
    const question2 = "";
    const question3 = "";
    const question4 = "";
    const question5 = "";
    const question6 = "";
    const question7 = "";
    const question8 = "";
    const question9 = "";
    const question10 = "";

    // Game function
    function Game() {
        $("#mainContent").show();
        
    }
})