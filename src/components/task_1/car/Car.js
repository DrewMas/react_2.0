import './Car.css'
import {deleteCar, editCar} from "../../../services/api.services.task1";

export default function Car({item: {id, model, price, year}}) {

    const carDelete = () => {
        deleteCar(id);
    }

    return (
        <div className={'singleCar'}>
            <div>
                <h4>{id}. {model}</h4>
                <p>Price is {price}, production year is {year}</p>
                <button>Edit</button>
                <button onClick={carDelete}>Delete</button>
            </div>

        </div>
    );
}