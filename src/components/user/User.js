import {
    useHistory,
} from "react-router-dom";
import './User.css'

export default function User({item}) {

    let history = useHistory();

    const details = () =>{
        history.push(`/users/` + item.id, item)
    }

    return (
        <div className={'singleUser'}>
            {item.id}. {item.name} <button onClick={details} className={'singleUserBtn'}>User Details</button>
        </div>
    );
}
