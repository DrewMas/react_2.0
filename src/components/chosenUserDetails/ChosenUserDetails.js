import './ChosenUserDetails.css'

export default function ChosenUserDetails({user:{id, name, username, email, phone, website}}) {

    return (
        <div className={'chosenUserDetails'}>
            <h3>{id}. {name} - {username}</h3>
            <div>Email: {email}</div>
            <div>Phone - {phone}</div>
            <div>Website - {website}</div>
        </div>
    );
}