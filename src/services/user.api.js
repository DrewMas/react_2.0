let url = 'https://jsonplaceholder.typicode.com/';

const fetchUsers = () =>{
    return fetch(url + `users`).then(value => value.json())
}

const addUser = (user)=>{
    return fetch(url + `users`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    }).then(value => value.json())
}

export {fetchUsers,addUser }
