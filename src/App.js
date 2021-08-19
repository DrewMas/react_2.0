import './App.css';
import Home from "./components/home/Home";
import {BrowserRouter as Router, Switch, Route, Link, withRouter} from "react-router-dom";
import Users from "./components/users/Users";
import Posts from "./components/posts/Posts";
import Comments from "./components/comments/Comments";

function App() {
    return (
        <Router>
            <div className="App">
                <div className={'links'}>
                    <Link to={'/'}><button className={'linkBtn'}>To Home page</button></Link>
                    <Link to={'/users'}><button className={'linkBtn'}>To Users page</button></Link>
                    <Link to={'/posts'}><button className={'linkBtn'}>To Posts page</button></Link>
                    <Link to={'/comments'}><button className={'linkBtn'}>To Comments page</button></Link>
                </div>

                <Route exact path={'/'} render={() => <Home/>}/>
                <Route exact path={'/users'} render={() => <Users/>}/>
                <Route exact path={'/posts'} render={() => <Posts/>}/>
                <Route exact path={'/comments'} render={() => <Comments/>}/>
            </div>
        </Router>
    );
}

export default App;
