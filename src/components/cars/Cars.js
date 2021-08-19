import Car from "../car/Car";
import './Cars.css'

export default function Cars({cars}) {

    return (
        <div className={'carsComponent'}>
            {
                cars.map(value => <Car key={value.id} item={value}/>)
            }
        </div>
    );
}