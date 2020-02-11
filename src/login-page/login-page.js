import React, {Component} from 'react';
import SwapiService from "../services/swapi-service";
import Cookies from 'universal-cookie'; //npm install universal-cookie
import "./login-page.css";

class LoginPage extends Component {

    swapiService = new SwapiService();

    constructor(props) {
        super(props);
        this.state = {
            login: '',
            password: '',
            error: '',
            formControls: {
                login: {
                    errorMessage: '',
                    valid: 0,
                    validation: {
                        required: 1,
                        login: 1,
                        minlength: 2
                    }
                },
                password: {
                    errorMessage: '',
                    valid: 0,
                    validation: {
                        required: 1,
                        minlength: 6
                    }
                },

            }
        };

        this.handleChangeLogin = this.handleChangeLogin.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    /*
     *  Проверка Login
     */
    validateLogin(value, validation) {
        let isValid = 0;
        const {formControls} = this.state;

        if (value.length > 0 && value.length <  this.state.formControls.login.validation.minlength) {
            isValid = 1;
            formControls.login.errorMessage = 'Необходимо ввести минимум '+this.state.formControls.login.validation.minlength+' символа';
            formControls.login.valid = 1;
        } else if (value.length > 0) {
            isValid = 0;
            formControls.login.errorMessage = '';
            formControls.login.valid = 0;
        } else {
            isValid = 1;
            formControls.login.errorMessage = 'Необходимо ввести логин';
            formControls.login.valid = 1;
        }
        this.setState({
            formControls
        });

        return isValid
    }


    /*
    *  Проверка Password
    */
    validatePassword(value, validation) {
        let isValid = 0;
        const {formControls} = this.state;

        if (value.length > 0 && value.length < this.state.formControls.password.validation.minlength) {
            isValid = 1;
            formControls.password.errorMessage = 'Необходимо ввести минимум '+this.state.formControls.password.validation.minlength+' символа';
            formControls.password.valid = 1;
        } else if (value.length > 0) {
            isValid = 0;
            formControls.password.errorMessage = '';
            formControls.password.valid = 0;
        } else {
            isValid = 1;
            formControls.password.errorMessage = 'Необходимо ввести пароль';
            formControls.password.valid = 1;
        }

        this.setState({
            formControls : formControls
        });

        return isValid
    }

    handleChangeLogin(event) {

        const formControls = {...this.state.formControls};
        const control = {...formControls.login};
        control.value = event.target.value;
        control.valid = this.validateLogin(control.value, control.validation);
        formControls['login'] = control;

        this.setState({
            login: event.target.value,
        });
    }

    handleChangePassword(event) {

        const formControls = {...this.state.formControls};
        const control = {...formControls.login};
        control.value = event.target.value;
        control.valid = this.validatePassword(control.value, control.validation);
        formControls['password'] = control;


        this.setState({
            password: event.target.value
        });
    }

    handleSubmit(event) {
        const result = this.swapiService.login('/check-login-report/index?login=' + this.state.login + '&password=' + this.state.password + '&auth-key=355091663b69f4d49559c5ede9935de7');
        result.then(data => {
            const cookies = new Cookies();
            cookies.remove('login');

            if (data.login === true) {
                const cookies = new Cookies();
                cookies.set('login', data.username, {path: '/', 'maxAge': 600}); // 60*60*8
                window.location.replace("/");

            } else {
                console.log(cookies.get('login')); // admin
                console.log('не правильный логин или пароль');
                console.log(data.message);

                this.setState({
                    error: data.message,
                });
            }
        });

        event.preventDefault();
    }


    render() {
        return (
            <div>
                <div className="container-fluid">
                    <div className="mt30"></div>
                    <div className="row justify-content-center d-flex">
                        <div className="col-md-4">
                            <form className="card" onSubmit={this.handleSubmit}>
                                <div className="form-group">
                                    <label>Логин: </label>
                                    <input
                                        type="text"
                                        value={this.state.login}
                                        onChange={this.handleChangeLogin}
                                        className={this.state.formControls.login.valid === 1 ? 'form-control error-input' : 'form-control'}
                                        placeholder="Введите логин"
                                        valid={this.state.formControls.login.valid}
                                        touched={this.state.formControls.login.touched}

                                    />
                                    <p className="form-error">{this.state.formControls.login.errorMessage}</p>
                                    <small id="emailHelp" className="form-text text-muted">Ваш логин TMS</small>
                                </div>

                                <div className="form-group">
                                    <label>Пароль: </label>
                                    <input
                                        type="password"
                                        name="password"
                                        value={this.state.password}
                                        onChange={this.handleChangePassword} className="form-control"
                                        valid={this.state.formControls.password.valid}
                                        placeholder="Введите пароль"
                                    />
                                    <p className="form-error">{this.state.formControls.password.errorMessage}</p>
                                    <small id="emailHelp" className="form-text text-muted">Ваш пароль TMS</small>
                                </div>

                                <div className="">
                                    <p className={this.state.error !== '' ? 'alert alert-danger' : ''}
                                       align="center"> {this.state.error}</p>
                                </div>

                                <div className="form-group text-center">
                                    <input type="submit" value="Отправить" className="btn btn-primary" disabled={ this.state.formControls.login.valid == 0 && this.state.formControls.password.valid == 0 ? '' : 'disabled' }/>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default LoginPage;