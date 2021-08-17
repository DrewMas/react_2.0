import {useState} from "react";
import {saveCar} from "../../services/api.service";

export default function CarPostingForm() {

    let [formState, setFormState] = useState({model: '', price: '', year: ''});

    let onInputChange = (e) => {
        setFormState({...formState, [e.target.name]: e.target.value});
    }

    let save = (e) => {
        e.preventDefault();
        console.log(formState);
        saveCar(formState);
    }

    return (
        <div>
            <form onSubmit={save}>
                <input
                    type="text" name={'model'} placeholder={'Enter a car model'} value={formState.model}
                    onChange={onInputChange} maxLength={20}
                />
                <input
                    type="number" name={'price'} placeholder={'Car price'} value={formState.price}
                    onChange={onInputChange} min={0}
                />
                <input
                    type="number" name={'year'} placeholder={'Year'} value={formState.year}
                    onChange={onInputChange} min={1990} max={2021}
                />
                <input type="submit" value={'Save'}/>
            </form>

        </div>
    );
}