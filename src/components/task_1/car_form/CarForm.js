import {useState} from "react";
import {saveCar} from "../../../services/api.services.task1";
import './CarForm.css'

export default function CarForm() {

    let [formState, setFormState] = useState({model: '', price: '', year: ''});

    const save = (e) => {
        e.preventDefault();
        saveCar(formState);
        setFormState({model: '', price: '', year: ''});
    }

    const onInputChange = (e) =>{
        setFormState({...formState, [e.target.name]: e.target.value});
    }

    return (
        <div className={'carForm'}>
            <h2>Add a car</h2>
            <div>
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
                </form>
            </div>

        </div>
    );
}