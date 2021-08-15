let url = 'https://jsonplaceholder.typicode.com/';

const getPosts = () =>{
    return fetch(url + `posts`)
        .then(value => value.json())
}

const getPostDetails = (id) => {
    return fetch(`url + ${id} + /comments`)
}

export {getPosts,getPostDetails}