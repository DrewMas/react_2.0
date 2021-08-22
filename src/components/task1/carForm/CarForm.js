import {editCar, getCars, saveCar} from "../../../services/api.car.services";
import {useEffect, useState} from "react";
import Cars from "../cars/Cars";
import './CarForm.css'

export default function CarForm() {

    let [formState, setFormState] = useState({model: '', price: '', year: ''});
    let [cars, setCars] = useState([]);

    useEffect(() => {
        getCars().then(value => setCars([...value]))
    }, [cars]);


    const save = (e) => {
        e.preventDefault();
        saveCar(formState);
        setFormState({model: '', price: '', year: ''});
    }


    const onInputChange = (e) => {
        setFormState({...formState, [e.target.name]: e.target.value});
    }

    const carEdit = (id, model, price, year) => {
        setFormState({model: model, price: price, year: year, id: id});
    }

    const update = () => {
        editCar(formState.id, formState)
        setFormState({model: '', price: '', year: ''})
    }


    return (
        <div>
            <div className={'carForm'}>
                <h2>Add a car</h2>
                <form onSubmit={save}>
                    <input type="text" name={'model'}
                           placeholder={'Enter a model'} value={formState.model}
                           onChange={onInputChange} maxLength={20}
                    />
                    <input type="number" name={'price'}
                           placeholder={'Price'} value={formState.price}
                           onChange={onInputChange} min={0}
                    />
                    <input type="number" name={'year'}
                           placeholder={'Year'} value={formState.year}
                           onChange={onInputChange} min={1990} max={2021}
                    />
                    <input type="submit" value={'Add'}/>
                    <input type="submit" value={'Update'} onClick={update}/>
                </form>
            </div>
            <div>
                <Cars cars={cars} edit={carEdit}/>
            </div>
        </div>
    );
}
