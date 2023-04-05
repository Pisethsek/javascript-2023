// fectch category 
const url = "https://api.escuelajs.co/api/v1/";
let fetchData = () => {
    fetch(`${url}categories`) //making request
    .then(res => res.json()) //promise res and convert promise to json()
    .then(res => console.log(res))
}

fetchData();
