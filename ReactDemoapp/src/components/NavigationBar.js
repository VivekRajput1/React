import React from 'react'
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import './layout.css'
import Person,{Persons} from '../App';
import PersonsWithClass from './classComponent/PersonsWithClass'
import Welcome from './Welcome'
import Error from './Error'
import UseContext from './UseContext'
import UseApi,{EmployeeCreate} from './UseApi'


export function NavigationBar(){
    
    return(
        <div>
        <Router>
        
            <div className="topnav">
                <Link to="/Function/">Function Component</Link>
                <Link to="/Class/">Class Component</Link>
                <Link to="/UseContext/">Use Context</Link>
                <Link to="/UseApi/">Use Api</Link>
            </div>
            <Switch>

                <Route path="/Function/" exact component={Persons}></Route>
                <Route path="/" exact component={Welcome}></Route>
                <Route path="/Class/" exact component={PersonsWithClass}></Route>
                <Route path="/UseContext/" exact component={UseContext}></Route>
                <Route path="/UseApi/" exact component={UseApi}>
                </Route>
                <Route path="/UseApi/Create/" component={EmployeeCreate}></Route>
                <Route component={Error}></Route>
            </Switch>
        </Router>
        </div>
    );
}