import React from 'react'
import {BrowserRouter as Router , Route ,Switch ,Link} from 'react-router-dom';
import Login from '../RoutingPages/Login'
import Register from '../RoutingPages/Register'
import UserInfo from '../RoutingPages/UserInfo'
function Routing(){
    return(
        <Router>
            <div>
                <h1>Welcome</h1>
                <ul>
                     <li>
                        <Link to = "/">Login</Link>
                    </li>
                    <li>
                        <Link to = "/Register">Register</Link>
                    </li>
                    <li>
                        <Link to = "/UserInfo">UserInfo</Link>
                    </li>

                </ul>
                <div>
                    <Switch>
                        <Route exact path="/" component ={Login}/>
                        <Route exact path="/Register" component ={Register} />
                        <Route exact path="/UserInfo" component ={UserInfo}/>
                    </Switch>
                </div>
            </div>
        </Router>
    )
}

export default Routing
