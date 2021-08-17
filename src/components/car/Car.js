import './Car.css'

export default function Car({item: {id, model, price, year}}) {

    return (
        <div className={'car'}>
            <h3>{id}. {model}</h3>
            <p>
                Price is -{price} <br/>
                Year is {year}
            </p>
        </div>
    );
}