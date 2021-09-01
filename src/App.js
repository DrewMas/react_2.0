import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {addUser, fetchUsers} from "./services/user.api";
import {getUsers, pushUser} from "./redux/actions";

function App() {

    let state = useSelector(state => state);
    let {users} = state;

    let dispatch = useDispatch();

    useEffect(() => {
        fetchUsers().then(value => dispatch(getUsers(value))
        )
    }, []);

    const onSubmit = (e) => {
        e.preventDefault();
        let name = e.target.name.value;
        let user = {name}
        console.log(name);
        console.log(e);
        addUser(user).then(value => {
            console.log(value);
            dispatch(pushUser(value))

        });


    }

    return (
        <div className="App">

            <form onSubmit={onSubmit}>
                <input type="text" name={'name'}/>
                <button>add user</button>
            </form>

            {
                users.map((value)=> <div key={value.id}>{value.id}.{value.name}</div>)
            }
        </div>
    );
}

export default App;
