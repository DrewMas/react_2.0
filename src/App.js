import './App.css';
import UserSelectComponent from "./components/task_2/user_select_component/UserSelectComponent";
import Posts from "./components/task_2/posts/Posts";
import {getUsersPosts} from "./services/api.services.task2";
import {useState} from "react";
import Cars from "./components/task_1/cars/Cars";
import CarForm from "./components/task_1/car_form/CarForm";


function App() {

    let [posts, setPosts] = useState([]);

    const getChosenUserPosts = (id) => {
        getUsersPosts(id).then(value => setPosts([...value]));
    }


    return (
        <div className="App">
            <div className={'taskOne'}>
                <CarForm/>
                <Cars/>
            </div>
            <div className={'taskTwo'}>
                <UserSelectComponent getPosts={getChosenUserPosts}/>
                <Posts posts={posts}/>
            </div>
        </div>
    );
}

export default App;
