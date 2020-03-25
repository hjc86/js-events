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
        
   
        // $("#space-for-text").keypress(function() {
        //     $("#space-for-text").text(i);
        // });
        
        //add paragraph to some conetent
        //change fonct size base don nav bar clicking

});