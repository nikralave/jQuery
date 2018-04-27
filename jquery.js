$(document).ready(function() {

    $("#myParagraph").click(function() {
        for (let i = 1; i <= 10; i++) {
            $("#myParagraph").append("<p>This is paragraph number " + i + "</p>");
        }
    });

    $(".highlight").click(function() {
        $("p.bla").removeClass("bla").addClass("bla2");

    });
    
    $(".lowlight").click(function() {
        $("p.bla2").removeClass("bla2").addClass("bla");

    });
    

});