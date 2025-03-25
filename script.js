const loadnew = async () => { 

    try {
        
        const newjoke = await fetch('https://api.chucknorris.io/jokes/random', {
            headers: {
                Accept: "application/json"
            }
        });
    const content = await newjoke.json(); 
    document.getElementById('jokes').innerHTML=content.value; 

} catch(error){
     alert("error 404... jokes are gone ")
}
}

document.getElementById("newloader").addEventListener("keydown",function (event){
    if (event.key === "Enter") {  
        alert("pressed?")
    }
});
document.getElementById('newloader').addEventListener("click", () => { 
    loadnew();
});

