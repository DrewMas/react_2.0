import './App.css';
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
    withRouter
} from "react-router-dom";
import Users from "./components/users/Users";
import Posts from "./components/posts/Posts";
import UserDetails from "./components/user_details/UserDetails";

function App() {


    return (
        <Router>
            <div className="App">
                <div className={'navigationButtons'}>
                    <Link to={'/'}>
                        <button className={'naviBtn'}>Home</button>
                    </Link>
                    <Link to={'/users'}>
                        <button className={'naviBtn'}>Users</button>
                    </Link>
                    <Link to={'/posts'}>
                        <button className={'naviBtn'}>Posts</button>
                    </Link>
                </div>

                <Switch>
                    <Route path={`/users/:id`}
                           render={(props) => <UserDetails {...props}/>}/>
                    <Route exact path={'/'}/>
                    <Route path={'/users'}
                           render={(props) => <Users props={props}/>}/>
                    <Route path={'/posts'} render={() => <Posts/>}/>
                </Switch>
            </div>
        </Router>
    );
}

export default App;

