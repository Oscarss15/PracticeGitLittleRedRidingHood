

let cont=0;

function continueStory() {
    cont++;

    if(cont===1){
        document.getElementById("textmain").style.display = "none";
        document.getElementById("textstory1").style.display = "block";
        document.getElementById("redhoodmain").style.display = "none";
        document.getElementById("redhood1").style.display = "block";
    }
    if(cont===2){
      document.getElementById("textstory1").style.display = "none";
      document.getElementById("textstory2").style.display = "block";
      document.getElementById("redhood1").style.display = "none";
      document.getElementById("redhood2").style.display = "block";
  }

  }

  function resetStory() {
    cont=0;
    document.getElementById("button").innerHTML="Continue story";
    document.getElementById("textmain").style.display = "block";
    document.getElementById("textstory1").style.display = "none";
    document.getElementById("textstory2").style.display = "none";
   
    document.getElementById("redhoodmain").style.display = "block";
    document.getElementById("redhood1").style.display = "none";
    document.getElementById("redhood2").style.display = "none";
    
  }

  