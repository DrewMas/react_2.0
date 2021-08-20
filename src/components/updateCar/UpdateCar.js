import './UpdateCar.css'
import {useState} from "react";
import {getCarById, updateCar} from "../../services/api.service";

export default function UpdateCar({cars}) {

    let [value, setValue] = useState({model: '', price: '', year: ''});

    const onInputChange = (e) => {
        setValue({...value, [e.target.name]: e.target.value});
    }

    const selectF = (e) => {
        // getCarById(e.target.value).then(value => setValue({...value}))
        let find = cars.find(value => value.id === +e.target.value);
        find? setValue(find): setValue({model: '', price: '', year: ''})
    }

    const carUpdate = (e) => {
        e.preventDefault();
        updateCar(value.id, value);
        setValue({model: '', price: '', year: ''});
    }

    return (
        <div className={'formsComponent'}>
            <h2>Update car</h2>
            <div className={'forms'}>
                <div>
                    <form onChange={selectF}>
                        <select className={'select'}>
                            <option>Choose a car</option>
                            {
                                cars.map(value => <option key={value.id}
                                                          value={value.id}>{value.id}.{value.model}</option>)
                            }
                        </select>
                    </form>
                </div>
                <div className={'formUpdate'}>
                    <form className={'formInput'} onSubmit={carUpdate}>
                        <input type="text" name={'model'} value={value.model}
                               placeholder={'Edit car model'} onChange={onInputChange}
                        />
                        <input type="number" name={'price'}
                               placeholder={'Price'} value={value.price} onChange={onInputChange}
                        />
                        <input type="number" name={'year'}
                               placeholder={'Year'} value={value.year} onChange={onInputChange}
                        />
                        <button className={'updateBtn'}>Update</button>
                    </form>
                </div>
            </div>

        </div>
    );
}