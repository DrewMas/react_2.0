import './App.css';
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import Cars from "./components/cars/Cars";
import Home from "./components/home/Home";
import CreateCar from "./components/createCar/CreateCar";
import UpdateCar from "./components/updateCar/UpdateCar";
import {useEffect, useState} from "react";
import {getCars} from "./services/api.service";

function App() {

    let [cars, setCars] = useState([]);

    useEffect(()=>{
        getCars().then(value => setCars([...value]))
    }, [cars]);


    return (
        <Router>
            <div className="App">
                <div className={'linkBtn'}>
                    <Link to={'/'}>
                        <button>Home</button>
                    </Link>
                    <Link to={'/cars'}>
                        <button>Cars</button>
                    </Link>
                    <Link to={'/create-car'}>
                        <button>Create Car</button>
                    </Link>
                    <Link to={'/update-car'}>
                        <button>Update car</button>
                    </Link>
                </div>

                <Route exact path={'/'} render={() => <Home/>}/>
                <Route path={'/cars'} render={() => <Cars cars={cars}/>}/>
                <Route path={'/create-car'} render={() => <CreateCar/>}/>
                <Route path={'/update-car'} render={()=> <UpdateCar cars={cars}/>}/>
            </div>
        </Router>
    );
}

export default App;
