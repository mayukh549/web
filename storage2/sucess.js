

document.querySelector('#on').addEventListener('click', function(){ 
    
    var documentID = document.getElementById("collapse");
    documentID.classList.remove("hide");


 });
 document.querySelector('#hhide').addEventListener('click', function(){ 
    
   var documentID1 = document.getElementById("collapse");
   documentID1.classList.add("hide");

});

 document.querySelector('#off').addEventListener('click', function(){ 
    
    var documentID1 = document.getElementById("collapse");
    documentID1.classList.add("hide");

 });


