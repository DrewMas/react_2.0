import {deleteCar} from "../../../services/api.car.services";

export default function Car({item: {id, model, price, year}, edit}) {
    return (
        <div>
            <h3>{id}. Model is - {model}</h3>
            <p>The price is {price}; Production year is {year}</p>
            <button onClick={() => deleteCar(id)}>Delete</button>
            <button onClick={() => edit({id, model, price, year})}>Edit</button>
        </div>
    );
}