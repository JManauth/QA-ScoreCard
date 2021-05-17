//when I click convert
//then all sub principal choices and text areas get turned into one single paragraph 
//i am able to copy each principal individually onto clipboard

var makeMagic = document.querySelector("#magicButton")

function convert(){
        //asigns all of the drop down choices and written paragraphs to variables
    var yesNo1 = document.getElementById("politeness").value;
    var yesNo2= document.getElementById("empathy").value;
    var yesNo3 = document.getElementById("toutingBenefits").value;
    var yesNo4 = document.getElementById("smallTalk").value;
    var Txt1 = document.getElementById("politeText").value;
    var Txt2 = document.getElementById("empathyText").value;
    var Txt3 = document.getElementById("toutingBenefitsText").value;
    var Txt4 = document.getElementById("smallTalkText").value;
    var score = document.getElementById("principalScore").value;
        //this loops through all of the children of the form and makes them dissapear
    var x = document.getElementById("container1").children;
    
        for (i=0; i < x.length; i++){
         x[i].style.display = "none";
        };
    
    var d = document.createElement("div");
    d.setAttribute("id", "finalBlock");

    var s = document.createElement("h4")
    
    document.getElementById("container1").appendChild(d);
    document.getElementById("container1").appendChild(s);


    var h1= document.createElement("h3");
    var h2= document.createElement("h3");
    var h3= document.createElement("h3");
    var h4= document.createElement("h3");

    var p1= document.createElement("p");
    var p2= document.createElement("p");
    var p3= document.createElement("p");
    var p4= document.createElement("p");

    document.getElementById("finalBlock").appendChild(h1);
    document.getElementById("finalBlock").appendChild(p1);

    document.getElementById("finalBlock").appendChild(h2);
    document.getElementById("finalBlock").appendChild(p2);

    document.getElementById("finalBlock").appendChild(h3);
    document.getElementById("finalBlock").appendChild(p3);

    document.getElementById("finalBlock").appendChild(h4);
    document.getElementById("finalBlock").appendChild(p4);

    h1.textContent = "Politeness - " + yesNo1;
    p1.textContent = Txt1;

    h2.textContent = "Empathy - " + yesNo2;
    p2.textContent = Txt2;

    h3.textContent = "Touting Benefits - " + yesNo3;
    p3.textContent = Txt3;

    h4.textContent = "Small Talk - " + yesNo4;
    p4.textContent = Txt4;

    s.textContent = "Score: " +score;
}


makeMagic.addEventListener("click", convert)