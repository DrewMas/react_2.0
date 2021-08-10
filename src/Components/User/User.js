import UserAddress from "../UserAddress/UserAddress";
import Company from "../Company/Company";
import "./User.css"

export default function User({singleUser}) {

    let {
        id, name, username, email, phone, website,
        address: {street, suite, city, zipcode, geo},
        company: {name: companyName, catchPhrase, bs}
    } = singleUser;

    return (
        <div className={'userBox'}>
            <h2>{id}. {name} - {username}</h2>
            <div>Email: {email}</div>
            <div>Phone - {phone}</div>
            <div>Website - {website}</div>

            <UserAddress street={street}
                         suite={suite}
                         city={city}
                         zipcode={zipcode}
                         geo={geo}
            />
            <Company companyName={companyName}
                     catchPhrase={catchPhrase}
                     bs={bs}
            />
        </div>
    );
}