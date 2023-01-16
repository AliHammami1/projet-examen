function send(){
    var nom=document.getElementById("nom").value;
    var email=document.getElementById("email").value;
    var sujet=document.getElementById("sujet").value;
    var msj=document.getElementById("message").value;
    var nb=0;
    if (nom !=""){
        nb+=1;
    }
    if (email !=""){
        nb+=1;
    }
    if (sujet !=""){
        nb+=1;
    }
    if (msj !=""){
        nb+=1;
    }
    if (nb==4){
        alert(nom+" votre message est bien reçu.");
        document.location.reload();
    }
    else{
        alert("il ya des champs vide, svp completer !");
    }
}