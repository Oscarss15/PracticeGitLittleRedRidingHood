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
    if(cont===3){
        document.getElementById("textstory2").style.display = "none";
        document.getElementById("textstory3").style.display = "block";
        document.getElementById("redhood2").style.display = "none";
        document.getElementById("redhood3").style.display = "block";
    }
    if(cont===4){
        document.getElementById("textstory3").style.display = "none";
        document.getElementById("textstory4").style.display = "block";
        document.getElementById("redhood3").style.display = "none";
        document.getElementById("redhood4").style.display = "block";
    }
    if(cont===5){
        document.getElementById("textstory4").style.display = "none";
        document.getElementById("textstory5").style.display = "block";
        document.getElementById("redhood4").style.display = "none";
        document.getElementById("redhood5").style.display = "block";
    }
    if(cont===6){
      document.getElementById("textstory5").style.display = "none";
      document.getElementById("textstory6").style.display = "block";
      document.getElementById("redhood5").style.display = "none";
      document.getElementById("redhood6").style.display = "block";
      document.getElementById("button").innerHTML="End";
             
  }  
  }

  function resetStory() {
    cont=0;
    document.getElementById("button").innerHTML="Continue story";
    document.getElementById("textmain").style.display = "block";
    document.getElementById("textstory1").style.display = "none";
    document.getElementById("textstory2").style.display = "none";
    document.getElementById("textstory3").style.display = "none";
    document.getElementById("textstory4").style.display = "none";
    document.getElementById("textstory5").style.display = "none";
    document.getElementById("textstory6").style.display = "none";
    document.getElementById("redhoodmain").style.display = "block";
    document.getElementById("redhood1").style.display = "none";
    document.getElementById("redhood2").style.display = "none";
    document.getElementById("redhood3").style.display = "none";
    document.getElementById("redhood4").style.display = "none";
    document.getElementById("redhood5").style.display = "none";
    document.getElementById("redhood6").style.display = "none";
  }

  
  