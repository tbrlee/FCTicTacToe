$(function() {
    var x = "x",
        o = "o",
        turns = 0; //Amount of turns taken

        //Shorten the ids into variables
    var r1c1 = ("#row1col1"),
        r1c2 = ("#row1col2"),
        r1c3 = ("#row1col3"),
        r2c1 = ("#row2col1"),
        r2c2 = ("#row2col2"),
        r2c3 = ("#row1col1"),
        r3c1 = ("#row3col1"),
        r3c2 = ("#row3col2"),
        r3c3 = ("#row3col3");

        $('#board li').on('click', function() {
            if(rc1c1.hasClass("o") && r1c2.hasClass("o") && r1c3.hasClass("o") ||
               rc2c1.hasClass("o") && r2c2.hasClass("o") && r2c3.hasClass("o") ||
               rc3c1.hasClass("o") && r3c2.hasClass("o") && r3c3.hasClass("o") ||
               rc1c1.hasClass("o") && r2c1.hasClass("o") && r3c1.hasClass("o") ||
               rc1c2.hasClass("o") && r2c2.hasClass("o") && r3c2.hasClass("o") ||
               rc1c3.hasClass("o") && r2c3.hasClass("o") && r3c3.hasClass("o") ||
               rc1c1.hasClass("o") && r2c2.hasClass("o") && r3c3.hasClass("o") ||
               rc1c3.hasClass("o") && r2c2.hasClass("o") && r3c1.hasClass("o") 
            ) 
            {
                alert("Winner: o");
                $("board li").text("+");
                $("board li").removeClass("disable");
                $("board li").removeClass("o");
                $("board li").removeClass("x");
            }

            else if(rc1c1.hasClass("x") && r1c2.hasClass("x") && r1c3.hasClass("x") ||
               rc2c1.hasClass("x") && r2c2.hasClass("x") && r2c3.hasClass("x") ||
               rc3c1.hasClass("x") && r3c2.hasClass("x") && r3c3.hasClass("x") ||
               rc1c1.hasClass("x") && r2c1.hasClass("x") && r3c1.hasClass("x") ||
               rc1c2.hasClass("x") && r2c2.hasClass("x") && r3c2.hasClass("x") ||
               rc1c3.hasClass("x") && r2c3.hasClass("x") && r3c3.hasClass("x") ||
               rc1c1.hasClass("x") && r2c2.hasClass("x") && r3c3.hasClass("x") ||
               rc1c3.hasClass("x") && r2c2.hasClass("x") && r3c1.hasClass("x") 
            ) 
            {
                alert("Winner: o");
                $("board li").text("+");
                $("board li").removeClass("disable");
                $("board li").removeClass("o");
                $("board li").removeClass("x");
            }
           
        });

});

function OnePlayer() {

}

function TwoPlayers() {


}