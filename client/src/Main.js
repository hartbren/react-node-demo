import React from "react";
import {Route, NavLink, HashRouter} from "react-router-dom";
import Send from './Send';
import List from './List';

function Main(props) {
    return (
        <div className="msgapp stack-large">
            <h1>React Message Demo</h1>

            <HashRouter>
                <div className="navigation btn-group stack-exception">
                    <NavLink exact to="/">
                        <span>Send Message</span>
                    </NavLink>
                    <NavLink to="/list">
                        <span>List Messages</span>
                    </NavLink>
                </div>

                <div className="content">
                    <Route exact path="/" component={Send}/>
                    <Route path="/list" component={List}/>
                </div>

            </HashRouter>
        </div>
    );
}

export default Main;