$(document).ready(function(){

        $("h1").on("click", function() {
            $("h1").css("background-color", "blue");        
        });

        $("h1").hover(
            function(){
            },
            function(){
            $("h1").css("background-color", "white");    
            }
        );
            
        $("h2").hover(
            function(){
                $("h2").text("hello im here!");
            }
        )
        
   
        let userInput= "";

        $("html").keypress(function(event) {
            console.log(String.fromCharCode(event.which));
            userInput += String.fromCharCode(event.which);            
            $("#new-text").text(userInput);
        });

        // <p id="Cognitive engineering career">Cognitive engineering career</p>
        // <p id="Awards"> Awards </p>

        $("#Early-academics").on("click", function(){
            $(".Early-academics1").toggleClass("big-bold");
        });

        $("#Cognitive-engineering-career").on("click", function(){
            $(".Cognitive-engineering-career1").toggleClass("big-bold");
        });

        $("#Awards").on("click", function(){
            $(".Awards1").toggleClass("big-bold");
        });

        //add paragraph to some conetent
        //change fonct size base don nav bar clicking

});