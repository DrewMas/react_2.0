import {useState} from "react";
import {createCar} from "../../services/api.service";
import './CreateCar.css'

export default function CreateCar() {

    let [formState, setFormState] = useState({model: '', price: '', year: ''});

    const onInputChange = (e) => {
        setFormState({...formState, [e.target.name]: e.target.value});
    }

    const create = (e) =>{
        e.preventDefault();
        createCar(formState);
        setFormState({model: '', price: '', year: ''});
    }

    return (
        <div>
            <div className={'carForm'}>
                <h2>Add a car</h2>
                <form onSubmit={create}>
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
                    <input type="submit" value={'Add'} className={'submitBtn'}/>
                </form>
            </div>

        </div>
    );
}