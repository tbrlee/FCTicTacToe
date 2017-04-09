$(function() {
    var x = "x",
        o = "o",
        turns = 0; //Amount of turns taken

        //Shorten the ids into variables
    var r1c1 = $("#row1col1"),
        r1c2 = $("#row1col2"),
        r1c3 = $("#row1col3"),
        r2c1 = $("#row2col1"),
        r2c2 = $("#row2col2"),
        r2c3 = $("#row1col1"),
        r3c1 = $("#row3col1"),
        r3c2 = $("#row3col2"),
        r3c3 = $("#row3col3");

function PlayerOCondition() {
    r1c1.hasClass("o") && r1c2.hasClass("o") && r1c3.hasClass("o") ||
    r2c1.hasClass("o") && r2c2.hasClass("o") && r2c3.hasClass("o") ||
    r3c1.hasClass("o") && r3c2.hasClass("o") && r3c3.hasClass("o") ||
    r1c1.hasClass("o") && r2c1.hasClass("o") && r3c1.hasClass("o") ||
    r1c2.hasClass("o") && r2c2.hasClass("o") && r3c2.hasClass("o") ||
    r1c3.hasClass("o") && r2c3.hasClass("o") && r3c3.hasClass("o") ||
    r1c1.hasClass("o") && r2c2.hasClass("o") && r3c3.hasClass("o") ||
    r1c3.hasClass("o") && r2c2.hasClass("o") && r3c1.hasClass("o") 
}

function PlayerXCondition() { 
    r1c1.hasClass("x") && r1c2.hasClass("x") && r1c3.hasClass("x") ||
    r2c1.hasClass("x") && r2c2.hasClass("x") && r2c3.hasClass("x") ||
    r3c1.hasClass("x") && r3c2.hasClass("x") && r3c3.hasClass("x") ||
    r1c1.hasClass("x") && r2c1.hasClass("x") && r3c1.hasClass("x") ||
    r1c2.hasClass("x") && r2c2.hasClass("x") && r3c2.hasClass("x") ||
    r1c3.hasClass("x") && r2c3.hasClass("x") && r3c3.hasClass("x") ||
    r1c1.hasClass("x") && r2c2.hasClass("x") && r3c3.hasClass("x") ||
    r1c3.hasClass("x") && r2c2.hasClass("x") && r3c1.hasClass("x")
}

function resetClassboard(){
     $("#board li").removeClass("disable");
     $("#board li").removeClass("o");
     $("#board li").removeClass("x");
}

        $('#board li').on('click', function() {
            if(PlayerOCondition()) 
            {
                alert("Winner: o");
                $("#board li").text("+");
               resetClassboard();
            }

            else if(PlayerXCondition()) 
            {
                alert("Winner: x");
                $("#board li").text("$");
                resetClassboard();
            }

            else if(turns == 9) {
                alert("Game ends in a tie.");
                $("#board li").text("$");
                resetClassboard();
                turns = 0;
            }
            else if($(this).hasClass("disable")) {
                alert("This spot is already filled");
            }
            else if(turns%2 == 0) {
                turns++;
                $(this).text(o);
                $(this).addClass("disable o");
                if(PlayerOCondition()) {
                $("#message").text("O won the game");
                turns=0;
			  } 
			}
			else {
                 turns++;
                $(this).text(x);
                $(this).addClass("disable x");
                if(PlayerXCondition()) {
                $("#message").text("X won the game");
                turns=0;
                }
            }   
			});
                //Resetting Game
                    $("#reset").click(function() {
                    $("#message").text("");
                    $("#board li").text("$");
                    resetClassboard();
                    turns = 0;
                });
        

});



