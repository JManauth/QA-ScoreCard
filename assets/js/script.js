//when I click convert
//then all sub principal choices and text areas get turned into one single paragraph 
//i am able to copy each principal individually onto clipboard

var makeMagic = document.querySelector("#magicButton")

function convert1(){
        //asigns all of the drop down choices and written paragraphs to variables
    var yesNo1 = document.getElementById("politeness").value;
    var yesNo2= document.getElementById("empathy").value;
    var yesNo3 = document.getElementById("toutingBenefits").value;
    var yesNo4 = document.getElementById("smallTalk").value;
    var Txt1 = document.getElementById("politeText").value;
    var Txt2 = document.getElementById("empathyText").value;
    var Txt3 = document.getElementById("toutingBenefitsText").value;
    var Txt4 = document.getElementById("smallTalkText").value;
    var score = document.getElementById("principalScore1").value;
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
   /*     
    var copy = document.createElement("button")
    document.getElementById("container1").appendChild(copy);
    copy.setAttribute("id", "copy");
    copy.innerHTML = "Copy To Clipboard";
    */
};

function convert2(){
    //asigns all of the drop down choices and written paragraphs to variables
    var yesNo12 = document.getElementById("ownership").value;
    var yesNo22= document.getElementById("assumptiveLanguage").value;
    var yesNo32 = document.getElementById("urgency").value;
    var yesNo42 = document.getElementById("referencingTheAccount").value;
    var Txt12 = document.getElementById("ownershipText").value;
    var Txt22 = document.getElementById("assumptiveLanguageText").value;
    var Txt32 = document.getElementById("urgencyText").value;
    var Txt42 = document.getElementById("referencingTheAccountText").value;
    var score2 = document.getElementById("principalScore2").value;
    //this loops through all of the children of the form and makes them dissapear
    var x2 = document.getElementById("container2").children;

    for (i=0; i < x2.length; i++){
     x2[i].style.display = "none";
    };

    var d2 = document.createElement("div");
    d2.setAttribute("id", "finalBlock2");

    var s2 = document.createElement("h4")

    document.getElementById("container2").appendChild(d2);
    document.getElementById("container2").appendChild(s2);


    var h12= document.createElement("h3");
    var h22= document.createElement("h3");
    var h32= document.createElement("h3");
    var h42= document.createElement("h3");

    var p12= document.createElement("p");
    var p22= document.createElement("p");
    var p32= document.createElement("p");
    var p42= document.createElement("p");

document.getElementById("finalBlock2").appendChild(h12);
document.getElementById("finalBlock2").appendChild(p12);

document.getElementById("finalBlock2").appendChild(h22);
document.getElementById("finalBlock2").appendChild(p22);

document.getElementById("finalBlock2").appendChild(h32);
document.getElementById("finalBlock2").appendChild(p32);

document.getElementById("finalBlock2").appendChild(h42);
document.getElementById("finalBlock2").appendChild(p42);

h12.textContent = "Ownership - " + yesNo12;
p12.textContent = Txt12;

h22.textContent = "Assumptive Language - " + yesNo22;
p22.textContent = Txt22;

h32.textContent = "Urgency - " + yesNo32;
p32.textContent = Txt32;

h42.textContent = "Referencing the Account - " + yesNo42;
p42.textContent = Txt42;

s2.textContent = "Score: " +score2;
/*
var copy2 = document.createElement("button")
    document.getElementById("container2").appendChild(copy2);
    copy2.setAttribute("id", "copy2");
    copy2.innerHTML = "Copy To Clipboard";
*/
};

function convert3(){
    //asigns all of the drop down choices and written paragraphs to variables
var yesNo13 = document.getElementById("nextSteps").value;
var yesNo23 = document.getElementById("overcomingObjections").value;
var Txt13 = document.getElementById("nextStepsText").value;
var Txt23 = document.getElementById("overcomingObjectionsText").value;
var score3 = document.getElementById("principalScore3").value;
    //this loops through all of the children of the form and makes them dissapear
var x3 = document.getElementById("container3").children;

    for (i=0; i < x3.length; i++){
     x3[i].style.display = "none";
    };

var d3 = document.createElement("div");
d3.setAttribute("id", "finalBlock3");

var s3 = document.createElement("h4")

document.getElementById("container3").appendChild(d3);
document.getElementById("container3").appendChild(s3);


var h13= document.createElement("h3");
var h23= document.createElement("h3");


var p13= document.createElement("p");
var p23= document.createElement("p");

document.getElementById("finalBlock3").appendChild(h13);
document.getElementById("finalBlock3").appendChild(p13);

document.getElementById("finalBlock3").appendChild(h23);
document.getElementById("finalBlock3").appendChild(p23);

h13.textContent = "Next Steps - " + yesNo13;
p13.textContent = Txt13;

h23.textContent = "Overcoming Objections - " + yesNo23;
p23.textContent = Txt23;

s3.textContent = "Score: " +score3;
/*
var copy3 = document.createElement("button")
    document.getElementById("container3").appendChild(copy3);
    copy3.setAttribute("id", "copy3");
    copy3.innerHTML = "Copy To Clipboard";
*/
};

function convert4(){
    //asigns all of the drop down choices and written paragraphs to variables
var yesNo14 = document.getElementById("clarification").value;
var yesNo24= document.getElementById("confidence").value;
var yesNo34 = document.getElementById("deEscalation").value;
var Txt14 = document.getElementById("clarificationText").value;
var Txt24 = document.getElementById("confidenceText").value;
var Txt34 = document.getElementById("deEscalationText").value;
var score4 = document.getElementById("principalScore4").value;
    //this loops through all of the children of the form and makes them dissapear
var x4 = document.getElementById("container4").children;

    for (i=0; i < x4.length; i++){
     x4[i].style.display = "none";
    };

var d4 = document.createElement("div");
d4.setAttribute("id", "finalBlock4");

var s4 = document.createElement("h4")

document.getElementById("container4").appendChild(d4);
document.getElementById("container4").appendChild(s4);


var h14= document.createElement("h3");
var h24= document.createElement("h3");
var h34= document.createElement("h3");

var p14= document.createElement("p");
var p24= document.createElement("p");
var p34= document.createElement("p");

document.getElementById("finalBlock4").appendChild(h14);
document.getElementById("finalBlock4").appendChild(p14);

document.getElementById("finalBlock4").appendChild(h24);
document.getElementById("finalBlock4").appendChild(p24);

document.getElementById("finalBlock4").appendChild(h34);
document.getElementById("finalBlock4").appendChild(p34);

h14.textContent = "Clarification - " + yesNo14;
p14.textContent = Txt14;

h24.textContent = "Confidence - " + yesNo24;
p24.textContent = Txt24;

h34.textContent = "De-Escalation - " + yesNo34;
p34.textContent = Txt34;

s4.textContent = "Score: " +score4;
/*
var copy4 = document.createElement("button")
    document.getElementById("container4").appendChild(copy4);
    copy4.setAttribute("id", "copy4");
    copy4.innerHTML = "Copy To Clipboard";
*/
};

function convert5(){
    //asigns all of the drop down choices and written paragraphs to variables
var yesNo15 = document.getElementById("security").value;
var yesNo25= document.getElementById("openingClosingTalkOffs").value;
var yesNo35 = document.getElementById("wmu").value;
var yesNo45 = document.getElementById("notes").value;
var Txt15 = document.getElementById("securityText").value;
var Txt25 = document.getElementById("openingClosingTalkOffsText").value;
var Txt35 = document.getElementById("wmuText").value;
var Txt45 = document.getElementById("notesText").value;
var score5 = document.getElementById("principalScore5").value;
    //this loops through all of the children of the form and makes them dissapear
var x5 = document.getElementById("container5").children;

    for (i=0; i < x5.length; i++){
     x5[i].style.display = "none";
    };

var d5 = document.createElement("div");
d5.setAttribute("id", "finalBlock5");

var s5 = document.createElement("h4")

document.getElementById("container5").appendChild(d5);
document.getElementById("container5").appendChild(s5);


var h15= document.createElement("h3");
var h25= document.createElement("h3");
var h35= document.createElement("h3");
var h45= document.createElement("h3");

var p15= document.createElement("p");
var p25= document.createElement("p");
var p35= document.createElement("p");
var p45= document.createElement("p");

document.getElementById("finalBlock5").appendChild(h15);
document.getElementById("finalBlock5").appendChild(p15);

document.getElementById("finalBlock5").appendChild(h25);
document.getElementById("finalBlock5").appendChild(p25);

document.getElementById("finalBlock5").appendChild(h35);
document.getElementById("finalBlock5").appendChild(p35);

document.getElementById("finalBlock5").appendChild(h45);
document.getElementById("finalBlock5").appendChild(p45);

h15.textContent = "Security - " + yesNo15;
p15.textContent = Txt15;

h25.textContent = "Opening & Closing Talk-Offs - " + yesNo25;
p25.textContent = Txt25;

h35.textContent = "WMU - " + yesNo35;
p35.textContent = Txt35;

h45.textContent = "Notes - " + yesNo45;
p45.textContent = Txt45;

s5.textContent = "Score: " +score5;
/*
var copy5 = document.createElement("button")
    document.getElementById("container5").appendChild(copy5);
    copy5.setAttribute("id", "copy5");
    copy5.innerHTML = "Copy To Clipboard";
*/
}; 

function starScore(){
    var starScore1 = parseInt(document.getElementById("principalScore1").value);
    var starScore2 = parseInt(document.getElementById("principalScore2").value);
    var starScore3 = parseInt(document.getElementById("principalScore3").value);
    var starScore4 = parseInt(document.getElementById("principalScore4").value);
    var starScore5 = parseInt(document.getElementById("principalScore5").value);
    var finalStarScore = (starScore1 + starScore2 + starScore3 + starScore4 + starScore5) / 2 ;
    
    var div = document.createElement("div");
    var origin = document.getElementById("flex");
    var children = document.getElementById("flex").childElementCount;

    div.setAttribute("id", "finalStarScore");
    //document.getElementById("flex").insertBefore("div", "button");
    origin.insertBefore(div, origin.children[10]);
    div.textContent = "Final Star Score: " + finalStarScore;
    

};


function convertAll(){
    convert1();
    convert2();
    convert3();
    convert4();
    convert5();
    starScore();
    
    /*var copy = document.querySelector("#copy");
    var copy2 = document.querySelector("#copy2");
    var copy3 = document.querySelector("#copy3");
    var copy4 = document.querySelector("#copy4");
    var copy5 = document.querySelector("#copy5");
    copy.addEventListener("click", copy2ClipBoard);
    copy2.addEventListener("click", copy2ClipBoard2);
    copy3.addEventListener("click", copy2ClipBoard3);
    copy4.addEventListener("click", copy2ClipBoard4);
    copy5.addEventListener("click", copy2ClipBoard5(event)); */
};
/*

function copy2ClipBoard(){
   const textarea = document.createElement('textarea');
   const text2Copy = document.getElementById('finalBlock')
   textarea.setAttribute("id", "textarea")
   document.getElementById("finalBlock").appendChild(textarea);
   textarea.setAttribute("readonly", "");
   textarea.value = text2Copy.innerText;
   textarea.select();
   document.execCommand('copy');
   document.getElementById("finalBlock").removeChild(textarea);
};

function copy2ClipBoard2(){
    const textarea = document.createElement('textarea');
    const text2Copy = document.getElementById('finalBlock2')
    textarea.setAttribute("id", "textarea")
    document.getElementById("finalBlock2").appendChild(textarea);
    textarea.setAttribute("readonly", "");
    textarea.value = text2Copy.innerText;
    textarea.select();
    document.execCommand('copy');
    document.getElementById("finalBlock2").removeChild(textarea);
 };

 function copy2ClipBoard3(){
    const textarea = document.createElement('textarea');
    const text2Copy = document.getElementById('finalBlock3')
    textarea.setAttribute("id", "textarea")
    document.getElementById("finalBlock3").appendChild(textarea);
    textarea.setAttribute("readonly", "");
    textarea.value = text2Copy.innerText;
    textarea.select();
    document.execCommand('copy');
    document.getElementById("finalBlock3").removeChild(textarea);
 };

 function copy2ClipBoard4(){
    const textarea = document.createElement('textarea');
    const text2Copy = document.getElementById('finalBlock4')
    textarea.setAttribute("id", "textarea")
    document.getElementById("finalBlock4").appendChild(textarea);
    textarea.setAttribute("readonly", "");
    textarea.value = text2Copy.innerText;
    textarea.select();
    document.execCommand('copy');
    document.getElementById("finalBlock4").removeChild(textarea);
 };

 function copy2ClipBoard5(){
     event.preventDefault();
    const textarea = document.createElement('textarea');
    const text2Copy = document.getElementById('finalBlock5')
    textarea.setAttribute("id", "textarea")
    document.getElementById("finalBlock5").appendChild(textarea);
    textarea.setAttribute("readonly", "");
    textarea.value = text2Copy.innerText;
    textarea.select();
    document.execCommand('copy');
    document.getElementById("finalBlock5").removeChild(textarea);
 };
 */
makeMagic.addEventListener("click", convertAll)

