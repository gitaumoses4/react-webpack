import React, {Component} from 'react';
import {Pushable} from "../Pushable";
import {NavBar} from "../NavBar";
import {MenuItem} from "../MenuItem";
import {ROUTES} from "../../utilities/routes";
import {Link} from "react-router-dom";

class Landing extends Component {

    componentWillMount() {
        const body = document.body;
        body.classList.add("landing");
        body.classList.add("body");
    }

    componentWillUnmount() {
        const body = document.body;
        body.classList.remove("landing");
        body.classList.remove("body");
    }

    render() {
        return (<Pushable>
                <NavBar
                    menuItems={
                        <MenuItem right={true}>
                            <Link to={ROUTES.login}>
                                Login
                            </Link>
                        </MenuItem>
                    }
                />
                <div className="mg landing content">
                    <h1 className="landing header">The best way to reach out to our operations and repairs
                        department.</h1>
                    <h2 className="landing sub header">Easily manage your repairs and maintenance</h2>

                    <div className="mg row">
                        <Link to={ROUTES.register} className="mg center landing button">GET STARTED</Link>
                    </div>
                </div>
            </Pushable>
        );
    }
}

export default Landing;
