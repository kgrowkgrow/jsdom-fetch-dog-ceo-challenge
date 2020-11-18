console.log('%c HI', 'color: firebrick')



document.addEventListener("DOMContentLoaded", event => {



const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

    fetch(imgUrl)
    .then( resp => resp.json())
    .then( json => { 
        
        const picArray = json.message
        const dogPic = document.getElementById("dog-image-container")
        for(let i = 0; i < picArray.length; i++) { 
            const img = document.createElement("img")
            img.src = picArray[i]
            dogPic.appendChild(img)
        }
    }) 

    const breedUrl = 'https://dog.ceo/api/breeds/list/all'

    populateBreeds()
    // const liArray = document.querySelectorAll("li")

    function populateBreeds() {
        fetch(breedUrl)
        .then (resp => resp.json())
        .then (json => {
            
            // console.log(json.message)
    
            const breedList = json.message
    
            const ul = document.getElementById("dog-breeds")
    
            for ( let breed in breedList ) {
            
                const li = document.createElement("li")
                const text = document.createElement("text")
    
                text.textContent = breed
                li.appendChild(text)
                ul.appendChild(li)
                
                li.addEventListener("click", event => {
                    event.target.style="color: aquamarine" 
                })
            }
        })
        
    }
    
    function destroyBreeds() {
        
    }
    
    const dropdown = document.getElementById("breed-dropdown")
    
    dropdown.addEventListener("change", event => {
        const liArray = document.querySelectorAll("li")
        // debugger
        switch (dropdown.value) {
            case "a": 
                breedRemover("a");
                break;
            case "b":
                breedRemover("b");
                break;
            case "c":
                breedRemover("c");
                break;
            case "d":
                breedRemover("d");
                break;
        }
        
        function breedRemover(letter) {
                for (let i = 0; i < liArray.length; i++) {
                    // debugger
                    if (!liArray[i].innerText.startsWith(letter)) {
                        liArray[i].style.display = "none";
                    } else {
                        liArray[i].style.display = "list-item";
                    }                
                }
        }

        
    })





} )