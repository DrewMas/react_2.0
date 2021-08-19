import {editCar, getCars, saveCar} from "../../../services/api.car.services";
import {useEffect, useState} from "react";
import Cars from "../cars/Cars";

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

    // const carEdit = ({id, model, price, year})=>{
    //     // setFormState({model: model, price: price, year: year});
    //     // console.log(model);
    //     // console.log(price);
    //     // editCar(id, formState)
    // }

    return (
        <div>
            <h2>Add a car</h2>
            <div>
                <form onSubmit={save}>
                    <input
                        type="text" value={formState.value} name={'model'}
                        onChange={onInputChange} placeholder={'Enter a model'} maxLength={20}
                    />
                    <input
                        type="number" value={formState.value} name={'price'}
                        onChange={onInputChange} placeholder={'Price'} min={0}
                    />
                    <input
                        type="number" value={formState.value} name={'year'}
                        onChange={onInputChange} placeholder={'Year'} min={1990} max={2021}
                    />
                    <input type="submit" value={'Add'}
                    />
                </form>
            </div>
            <Cars cars={cars}/>
            <div>

            </div>
        </div>
    );
}