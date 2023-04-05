//async and await
const url = "https://api.escuelajs.co/api/v1/";

export async function welcomeUsers (){
    let res = await fetch(`${url}users`);
    return res.json();
}
// welcomeUsers().then(res => console.log(res));
