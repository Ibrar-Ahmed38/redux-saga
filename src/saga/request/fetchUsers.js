const url = "https://jsonplaceholder.typicode.com/users"


function getUsers(){
    return fetch(url, {
        method : "GET",

    })

    .then( (res)=> res.json())
    .catch( (err)=> console.log(err , "Request Error"))
}

export default getUsers
