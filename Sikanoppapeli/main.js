
    var face0=new Image()
    face0.src="images/d1.gif"
    var face1=new Image()
    face1.src="images/d2.gif"
    var face2=new Image()
    face2.src="images/d3.gif"
    var face3=new Image()
    face3.src="images/d4.gif"
    var face4=new Image()
    face4.src="images/d5.gif"
    var face5=new Image()
    face5.src="images/d6.gif"

    var pisteet=1;

    var randomdice = 0;

    function throwdice()    {
        var randomdice=Math.round(Math.random()*5)
        document.images["mydice"].src=eval("face"+randomdice+" .src")

    }
    
    




