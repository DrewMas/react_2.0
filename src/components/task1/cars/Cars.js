import Car from "../car/Car";
import './Cars.css'

export default function Cars({cars, edit}) {
    return (
        <div className={'allCars'}>
            {
                cars.map(value => <Car key={value.id} item={value} edit={edit}/>)
            }
        </div>
    );
}