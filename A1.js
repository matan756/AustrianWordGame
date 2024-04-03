let myform = document.getElementById("myform");
myform.addEventListener("submit", (e) => {
    e.preventDefault(); 
    let insertedname = document.getElementById("name");
    let participantname = insertedname.value;

    if (participantname==="Berti" || participantname==="berti" || participantname==="BERTI" || participantname==="Berthold" || participantname==="berthold") 
    {
    document.getElementById("maintext").innerHTML="Hello Mr. Glaubach!";
    }
    else if (participantname==="Edna" || participantname==="edna") 
    {
    document.getElementById("maintext").innerHTML="Hello Flecken!";
    }
    else if (participantname==="Ioana" || participantname==="ioana" || participantname==="IOANA") 
    {
    document.getElementById("maintext").innerHTML="Bună, dragă Ioana!";
    }
    else {
    document.getElementById("maintext").innerHTML="Hello " +participantname+"!";
    }
    
    myform.remove();

    const startbutton = document.createElement('button'); 
    startbutton.classList.add('startbutton'); 
    const startcontainer = document.getElementById('startcontainer'); 
    const AppendedNewButton = startcontainer.appendChild(startbutton); 
    startbutton.textContent = 'Click here to start the game!'; 
    startbutton.addEventListener("click", () =>
    {
        console.log("done")
        return document.location.href = "TheGame\\myhtml.html";
    })
    addEventListener("keydown", (event)=>
    {   if (event.keyCode===13) {
        return document.location.href = "TheGame\\myhtml.html";
    }
    })
 }
  ) 
  const SendOut = participantname; 