import {deleteCar} from "../../../services/api.car.services";
import './Car.css'

export default function Car({item: {id, model, price, year}, edit}) {
    return (
        <div className={'singleCar'}>
            <h4>{id}. Model is - {model}</h4>
            <p>The price is {price}; Production year is {year}</p>
            <button onClick={() => deleteCar(id)}>Delete</button>
            <button onClick={() => edit(id, model, price, year)}>Edit</button>
        </div>
    );
}