const apiKey ="e9b9a75e66ca4c89a0b2730ccdccb768" ;
const apiUrl = "https://holidays.abstractapi.com/v1/?api_key=e9b9a75e66ca4c89a0b2730ccdccb768&country=KE&year=2023&month=10&day=10";

const searchButton = document.querySelector("#searchBtn")
const clearButton = document.querySelector("#clearBtn")

async function addevents (){

    const response = await fetch (apiUrl)
   const data = await response.json();
   
   console.log(data)
}
addevents()

searchButton.addEventListener("click", function() {
    
    
    
    
    // alert("i have been clicked")
})

clearButton.addEventListener("click", function () {

    alert ("destroyer")
})