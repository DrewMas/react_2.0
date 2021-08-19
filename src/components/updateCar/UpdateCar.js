import './UpdateCar.css'
import {useState} from "react";

export default function UpdateCar({cars}) {

    let [value, setValue] = useState({model: '', price: '', year: ''});

    const onInputChange = (e) => {
        setValue({...value, [e.target.name]: e.target.value});
    }

    const selectF = (e) => {
        console.log(e.target.value);
        // let find = cars.find(value=> e.target.value === cars.id);
        // setValue(find)
    }

    return (
        <div className={'formsComponent'}>
            <h2>Update car</h2>
            <div className={'forms'}>
                <div>
                    <select className={'select'} onChange={selectF}>
                        {
                            cars.map(value => <option key={value.id} value={value.id}>{value.id}.{value.model}</option>)
                        }
                    </select>
                </div>
                <div className={'formUpdate'}>
                    <form className={'formInput'}>
                        <input type="text" name={'model'} value={value.model}
                               placeholder={'Edit car model'} onChange={onInputChange}
                        />
                        <input type="number" name={'price'}
                               placeholder={'Price'} value={value.price} onChange={onInputChange}
                        />
                        <input type="number" name={'year'}
                               placeholder={'Year'} value={value.year} onChange={onInputChange}
                        />
                    </form>
                    <button className={'updateBtn'}>Update</button>
                </div>
            </div>

        </div>
    );
}