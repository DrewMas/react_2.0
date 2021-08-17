import {useEffect, useState} from "react";
import {getCars} from "../../services/api.service";
import Car from "../car/Car";
import './Cars.css'
import CarPostingForm from "../car posting form/CarPostingForm";

export default function Cars() {

    let [cars, setCars] = useState([]);
    useEffect(() => {
        getCars().then(value => setCars([...value]));
    }, []);

    return (
        <div className={'wrap'}>
            <div className={'form'}>
                <h1>Add car info</h1>
                <CarPostingForm/>
            </div>
            <div className={'cars'}>
                {
                    cars.map(value => <Car key={value.id} item={value}/>)
                }
            </div>
        </div>
    );
}