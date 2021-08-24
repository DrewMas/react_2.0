import './UserDetails.css'
import {useHistory} from "react-router-dom";

export default function UserDetails({location: {state}}) {

    let {
        id, name, username, email, phone, website,
        address: {city, street, suite, zipcode, geo: {lat, lng}},
        company: {name: companyName, catchPhrase, bs}
    } = state;

    let history = useHistory();

    const back = ()=>{
        history.goBack();
    }

    return (
        <div className={'wrapper'}>
            <div className={'backBtnBox'}>
                <button onClick={back} className={'backBtn'}>Go Back</button>
            </div>
            <div className={'userDetails'}>
                <h3>{id}. {name}</h3>
                <p>Username - {username} <br/> Email: {email} <br/> Phone: {phone} <br/> Website: {website}</p>
                <h4>Address:</h4>
                <p>
                    City: {city} <br/>
                    Street: {street} <br/>
                    Suite: {suite} <br/>
                    Zipcode: {zipcode}
                </p>
                <h5>Geo</h5>
                <p>
                    Lat: {lat} <br/>
                    Lng: {lng}
                </p>
                <h5>Company:</h5>
                <p>
                    Name: {companyName} <br/>
                    Catch Phrase: {catchPhrase} <br/>
                    Bs: {bs}
                </p>
            </div>
        </div>
    );
}
