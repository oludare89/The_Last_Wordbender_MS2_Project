// default setting of sound being off
sessionStorage.setItem("sound", "off")
sessionStorage.setItem("gamemode", "easy");
sessionStorage.setItem("gamePoints","50");

$(document).ready(function() {

    // this is to activate the how to play modal being shown
    $("#how-to-play").click(function() {
        $(".htp-modal").addClass("bg-active-modal");
    });

    // this is to activate the high scores modal being shown
    $("#high-scores").click(function() {
        $(".high-score-modal").addClass("bg-active-modal");
    });

    // this is to close any modals in the html file
    $(".close-btn").click(function() {
        $(".htp-modal").removeClass("bg-active-modal");
        $(".high-score-modal").removeClass("bg-active-modal");
    });

    //This is for setting the game difficulty
    $("#btn-easy").click(function() {
        sessionStorage.setItem("gamemode", "easy");
        sessionStorage.setItem("gamePoints","50");
    });

    $("#btn-medium").click(function() {
        sessionStorage.setItem("gamemode", "medium");
        sessionStorage.setItem("gamePoints","100");
    });

    $("#btn-easy").click(function() {
        sessionStorage.setItem("gamemode", "hard");
        sessionStorage.setItem("gamePoints","200");
    });

});