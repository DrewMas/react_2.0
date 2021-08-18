import './App.css';
import UserSelectComponent from "./components/user_select_component/UserSelectComponent";
import Posts from "./components/posts/Posts";
import {getUsersPosts} from "./services/api.services";
import {useState} from "react";


function App() {

    let [posts, setPosts] = useState([]);

    const getChosenUserPosts = (id) => {
        getUsersPosts(id).then(value => setPosts([...value]));
    }


    return (
        <div className="App">
            <div>
                <UserSelectComponent getPosts={getChosenUserPosts}/>
                <Posts posts={posts}/>
            </div>
        </div>
    );
}

export default App;
