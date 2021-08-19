import './Car.css'

export default function Car({item: {id, model, price, year}}) {
    return (
        <div className={'singleCar'}>
            <h4>{id}. Model is {model}</h4>
            <p>
                Price - ${price} <br/>
                Production year - {year}
            </p>
        </div>
    );
}