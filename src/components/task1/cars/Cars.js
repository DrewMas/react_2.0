import Car from "../car/Car";

export default function Cars({cars, edit}) {
    return (
        <div>
            {
                cars.map(value => <Car key={value.id} item={value} edit={edit}/>)
            }
        </div>
    );
}