const url = 'http://195.72.146.25/api/v1/cars';

const getCars = () => {
    return fetch(url).then(value => value.json())
}

const createCar = (car) => {
    return fetch(url, {
        method: "POST",
        body: JSON.stringify(car),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    })
        .then(response => response.json())
        .then((json) => console.log(json));
}

const updateCar = (id, car) => {
    return fetch(url + `/${id}`, {
        method: 'PUT',
        body: JSON.stringify(car),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    })
        .then(respone => respone.json())
        .then((json) => console.log(json));

}

const getCarById = (id) => {
    return fetch(url + `/${id}`).then(value => value.json())
}

export {getCars, createCar, updateCar, getCarById}