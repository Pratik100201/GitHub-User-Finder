

let submit = document.getElementById("Submit")
submit.addEventListener("click",()=>{
    let inp = document.getElementById("input").value 
    let riginal = inp.split(" ").join("")
    
    fetch(`https://api.github.com/users/${riginal}`)
    .then((result)=>result.json( ))
    .then((data)=>{
        console.log(data)  
        document.getElementById("result").innerHTML = `
        <img class= "img" src="${data.avatar_url}" />
        <div class = "Output">
        
        <div>
        <button>Name : ${data.name}</button>
        <button>Portfolio : <a href="${data.html_url}">Portfolio</a></button>
        </div>


        <div>
        <button>Location : ${data.location}</button>
        <button>Followers : ${data.followers}</button>
        </div>

        <div>
        <button>Public Repos : ${data.public_repos}</button>
        <button>Bio : ${data.bio}</button>
        </div>

        

        
        </div>
        `
    })

     
    
    
})