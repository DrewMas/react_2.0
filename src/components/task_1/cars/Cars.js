import {useEffect, useState} from "react";
import {getCars} from "../../../services/api.services.task1";
import Car from "../car/Car";
import './Cars.css'

export default function Cars() {

    let [cars, setCars] = useState([]);

    useEffect(()=>{
        getCars().then(value => setCars([...value]))
    },[cars])

    return (
        <div className={'allCars'}>
            {
                cars.map(value => <Car key={value.id} item={value}/>)
            }

        </div>
    );
}