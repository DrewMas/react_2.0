import Geo from "../Geo/Geo";

export default function UserAddress({street, suite, city, zipcode, geo: {lat, lng}}) {


    return (
        <div>
            <div><h3>Users address:</h3>
                <div>Street - {street} <br/>
                    Suite - {suite} <br/>
                    City - {city} <br/>
                    Zipcode - {zipcode} <br/>
                    Geo: <Geo lat={lat} lng={lng}/>
                </div>
            </div>

        </div>
    );
}