let myform = document.getElementById("myform");
myform.addEventListener("submit", (e) => {
    e.preventDefault(); 
    let insertedname = document.getElementById("name");
    let participantname = insertedname.value;
    let participantnameLower= participantname.toLowerCase();

    if (participantname==="Berti" || participantname==="berti" || participantname==="BERTI" || participantname==="Berthold" || participantname==="berthold") 
    {
    document.getElementById("maintext").innerHTML="Hallo Herr Glaubach!";
    }
    else if (participantname==="Edna" || participantname==="edna") 
    {
    document.getElementById("maintext").innerHTML="Hallo Flecken!";
    }
    else if (participantname==="Ioana" || participantname==="ioana" || participantname==="IOANA") 
    {
    document.getElementById("maintext").innerHTML="Bună, dragă Ioana!";
    }
    else {
    document.getElementById("maintext").innerHTML="Hallo " +participantname+"!";
    }
    
    myform.remove();

    const startbutton = document.createElement('button'); 
    startbutton.classList.add('startbutton'); 
    const startcontainer = document.getElementById('startcontainer'); 
    const AppendedNewButton = startcontainer.appendChild(startbutton); 
    startbutton.textContent = 'Klicken Sie hier, um das Spiel zu starten!'; 
    startbutton.addEventListener("click", () =>
    {
        console.log("done")
        return document.location.href = "TheGameGerman\\myhtml.html";
    })
    addEventListener("keydown", (event)=>
    {   if (event.keyCode===13) {
        return document.location.href = "TheGameGerman\\myhtml.html";
    }
    })
 }
  ) 