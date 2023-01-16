function confirm(){
    var test1 = document.getElementsByName("test1");
    var test2 = document.getElementsByName("test2");
    var test3 = document.getElementsByName("test3");
    var test4 = document.getElementsByName("test4");
    var test5 = document.getElementsByName("test5");
    var nbtest=0;
    //test1
    if (test1[0].checked==true){
        document.getElementById('lab1rep1').style.color ='#ff0000';
        document.getElementById('lab1rep2').style.color ='#15cd7a';
    }
    else if (test1[1].checked==true){
        document.getElementById('lab1rep2').style.color ='#15cd7a';
        nbtest+=1;
    }
    else if (test1[2].checked==true){
        document.getElementById('lab1rep3').style.color ='#ff0000';
        document.getElementById('lab1rep2').style.color ='#15cd7a';
    }
    else{
        document.getElementById('lab1rep1').style.color ='#ff0000';
        document.getElementById('lab1rep2').style.color ='#15cd7a';
        document.getElementById('lab1rep3').style.color ='#ff0000';
    }

    //test2
    if (test2[0].checked==true){
        document.getElementById('lab2rep1').style.color ='#15cd7a';
        nbtest+=1;
    }
    else{
        document.getElementById('lab2rep1').style.color ='#15cd7a';
        document.getElementById('lab2rep2').style.color ='#ff0000';
    }

    //test3
    if (test3[0].checked==true){
        document.getElementById('lab3rep1').style.color ='#ff0000';
        document.getElementById('lab3rep2').style.color ='#15cd7a';
    }
    else if (test3[1].checked==true){
        document.getElementById('lab3rep2').style.color ='#15cd7a';
        nbtest+=1;
    }
    else if (test3[2].checked==true){
        document.getElementById('lab3rep3').style.color ='#ff0000';
        document.getElementById('lab3rep2').style.color ='#15cd7a';
    }
    else{
        document.getElementById('lab3rep1').style.color ='#ff0000';
        document.getElementById('lab3rep2').style.color ='#15cd7a';
        document.getElementById('lab3rep3').style.color ='#ff0000';
    }

    //test4
    if (test4[0].checked==true){
        document.getElementById('lab4rep1').style.color ='#ff0000';
        document.getElementById('lab4rep3').style.color ='#15cd7a';
    }
    else if (test4[2].checked==true){
        document.getElementById('lab4rep3').style.color ='#15cd7a';
        nbtest+=1;
    }
    else if (test4[1].checked==true){
        document.getElementById('lab4rep2').style.color ='#ff0000';
        document.getElementById('lab4rep3').style.color ='#15cd7a';
    }
    else{
        document.getElementById('lab4rep1').style.color ='#ff0000';
        document.getElementById('lab4rep3').style.color ='#15cd7a';
        document.getElementById('lab4rep2').style.color ='#ff0000';
    }

    //test5
    if (test5[0].checked==true){
        document.getElementById('lab5rep1').style.color ='#ff0000';
        document.getElementById('lab5rep3').style.color ='#15cd7a';
    }
    else if (test5[2].checked==true){
        document.getElementById('lab5rep3').style.color ='#15cd7a';
        nbtest+=1;
    }
    else if (test5[1].checked==true){
        document.getElementById('lab5rep2').style.color ='#ff0000';
        document.getElementById('lab5rep3').style.color ='#15cd7a';
    }
    else{
        document.getElementById('lab5rep1').style.color ='#ff0000';
        document.getElementById('lab5rep3').style.color ='#15cd7a';
        document.getElementById('lab5rep2').style.color ='#ff0000';
    }
    document.getElementById("resulttest").innerHTML="votre réponse correcte est  :  "+nbtest+"  / 5";
    document.getElementById("btnquizconf").parentNode.removeChild(document.getElementById("btnquizconf"));
}