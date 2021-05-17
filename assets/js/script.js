//when I click convert
//then all sub principal choices and text areas get turned into one single paragraph 
//i am able to copy each principal individually onto clipboard

var makeMagic = document.querySelector("#magicButton")

function convert(){
    var Txt1 = document.getElementById("politeText").value;
    var Txt2 = document.getElementById("empathyText").value;
    var Txt3 = document.getElementById("toutingBenefitsText").value;
    var Txt4 = document.getElementById("smallTalkText").value;
    var yesNo1 = document.getElementById("politeness").value;
    var yesNo2= document.getElementById("empathy").value;
    var yesNo3 = document.getElementById("toutingBenefits").value;
    var yesNo4 = document.getElementById("smallTalk").value;
    
}


makeMagic.addEventListener("click", convert)