let url = 'http://195.72.146.25/api/v1/cars';


const getCars = () => {
    return fetch(url).then(value => value.json())
}

const saveCar = (car) => {
    return fetch(url, {
        method: 'POST',
        body: JSON.stringify(car),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    })
        .then(respone => respone.json())
        .then((json) => console.log(json));
}

const deleteCar = (id) => {
    return fetch(url + `/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    })
}

const editCar = (car, id) => {
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

export {getCars, saveCar, deleteCar, editCar}