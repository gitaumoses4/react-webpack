import React, {Component} from 'react';
import {Pushable} from "../../../components/Pushable";
import {NavBar} from "../../../components/NavBar";
import {MenuItem} from "../../../components/MenuItem";

class Dashboard extends Component {
    render() {
        return (
            <Pushable>
                <NavBar header={"Maintenance Tracker - User"}
                        menuItems={
                            <MenuItem right>
                                <i className="fas fa-phone"/>
                                <span className="padded left">+254705045048</span>
                            </MenuItem>
                        }/>
            </Pushable>
        )
    }
}

export default Dashboard;
