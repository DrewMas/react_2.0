import './App.css';
import CarForm from "./components/task1/carForm/CarForm";
import UserSelectComponent from "./components/task2/user_select_component/UserSelectComponent";
import {getUsersPosts} from "./services/api.user_post.services";
import {useState} from "react";
import Posts from "./components/task2/posts/Posts";

function App() {

    let [posts, setPosts] = useState([]);

    const getChosenUserPosts = (id) => {
        getUsersPosts(id).then(value => setPosts([...value]));
    }

    return (
        <div className="App">
            <div className={'taskOne'}><CarForm/></div>
            <div className={'taskTwo'}>
                <UserSelectComponent getPosts={getChosenUserPosts}/>
                <Posts posts={posts}/>
            </div>
        </div>
    );
}

export default App;
