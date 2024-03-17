let myform = document.getElementById("myform");
myform.addEventListener("submit", (e) => {
    e.preventDefault(); 
    let insertedname = document.getElementById("name");
    let participantname = insertedname.value;
    document.getElementById("maintext").innerHTML="Hello " +insertedname.value+"!";
    myform.remove();

    const startbutton = document.createElement('button'); 
    startbutton.classList.add('startbutton'); 
    const startcontainer = document.getElementById('startcontainer'); 
    const AppendedNewButton = startcontainer.appendChild(startbutton); 
    startbutton.textContent = 'Click here to start the game!'; 
    startbutton.addEventListener("click", () =>
    {
        console.log("done")
        window.location.href = "matan756.github.io/myhtml.html";
    })
 }
  ) 