import React, {Component} from 'react';
import {Pushable} from '../../components/Pushable';
import {NavBar} from '../../components/NavBar';
import {MenuItem} from '../../components/MenuItem';
import Form from '../../components/Form';
import {InputField} from '../../components/InputField';
import {SubmitButton} from '../../components/SubmitButton';
import {ROUTES} from "../../utilities/routes";
import {Link} from "react-router-dom";

class Login extends Component {
    renderInput = (name, placeHolder, label, classNames = '', type = 'text', required = true) => (
        <InputField
            name={name}
            label={label}
            required={required}
            placeHolder={placeHolder}
            classNames={classNames}
            type={type}
        />
    );

    render() {
        return (
            <Pushable>
                <NavBar
                    menuItems={(
                        <MenuItem right>
                            <i className="fas fa-phone"/>
                            <span className="padded left">+254705045048</span>
                        </MenuItem>
                    )}
                />
                <div className="mg content">
                    <div className="mg container">
                        <div className="center aligned">
                            <h2>Log in</h2>
                        </div>
                        <div className="mg row">
                            <div className="mg six-large eight-medium twelve-small column center">
                                <div className="mg segment">
                                    <div className="content">
                                        <Form
                                            fields={
                                                <>
                                                    {this.renderInput('username', 'Username', "Username")}
                                                    {this.renderInput('password', 'Password', 'Password', '', 'password')}
                                                    <SubmitButton label="Login"/>
                                                </>
                                            }
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="center aligned">
                            <p>Don't have an account yet?</p>
                            <Link to={ROUTES.register}>
                                Register
                            </Link>
                        </div>
                    </div>
                </div>
            </Pushable>
        );
    }
}

export default Login;

