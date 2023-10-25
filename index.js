
//const apiUrl = "https://holidays.abstractapi.com/v1/?api_key=e9b9a75e66ca4c89a0b2730ccdccb768&country=KE&year=2023&month=10&day=10";

const searchButton = document.querySelector("#searchBtn")

const form = document.getElementById('holidayForm');

searchButton.addEventListener('click', 
        async function (event) {
        event.preventDefault();

        const date = new Date(document.getElementById('date').value.toString());

        const location = document.getElementById('location').value;
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();

        // console.log(date, document.getElementById('date').value)
        // console.log(year, month, day)
        


    const apiKey = 'e9b9a75e66ca4c89a0b2730ccdccb768'; 
    const apiUrl = `https://holidays.abstractapi.com/v1/?api_key=${apiKey}&country=${location}&year=${year}&month=${month}&day=${day}`;

    // const response = await fetch(apiUrl)
    // console.log(response)

            // to call the data from the api//
    fetch(apiUrl).then((response) => response.json()) 
    .then(data => {
        console.log(data)
        displayHolidays(data)
    })

  
    
   
});


function displayHolidays(data) {
    const resultsDiv = document.querySelector('.display-results');
    resultsDiv.innerHTML = ''; // Clear previous results

    if (data && data.length > 0) {
        data.forEach(holiday => {
            const holidayDiv = document.createElement('div');
            holidayDiv.classList.add('holiday');

            holidayDiv.innerHTML = `
                <h2>${holiday.name.toUpperCase()}</h2>
                <h3>COUNTRY:${holiday.location.toUpperCase()}</h3>
                <p><strong>DATE:</strong> ${holiday.date}</p>
                <p><strong>HOLIDAY-TYPE:</strong> ${holiday.type}</p>
                <p><strong>DAY:</strong> ${holiday.week_day}</p>
            `;

            resultsDiv.appendChild(holidayDiv);
        });
    } else {
        resultsDiv.innerHTML = '<p>No holidays found for the specified criteria.</p>';
    }
}

document.getElementById('clearBtn').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('location').value = '';
    document.getElementById("date").value  = "";
    // document.getElementById('year').value = '';
    // document.getElementById('month').value = '';
    // document.getElementById('day').value = '';
    const resultsDiv = document.querySelector('.display-results');
    resultsDiv.innerHTML = '';
});




// searchButton.addEventListener("click", function() {
    
//     // alert("i have been clicked")
// })

// clearButton.addEventListener("click", function () {

//     //alert ("destroyer")
// })