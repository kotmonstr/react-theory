import React, {Component} from 'react';
import SwapiService from "../services/swapi-service";
import Cookies from 'universal-cookie'; //npm install universal-cookie

class LoginPage extends Component {

    swapiService = new SwapiService();

    constructor(props) {
        super(props);
        this.state = {
            login: '',
            password: '',
            error:''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            login: event.target.value,
        });
    }

    handleChange2(event) {
        this.setState({
            password: event.target.value
        });
    }

    handleSubmit(event) {
        const result = this.swapiService.login('/check-login-report/index?login=' + this.state.login + '&password=' + this.state.password + '&auth-key=355091663b69f4d49559c5ede9935de7');
        result.then( data => {
            const cookies = new Cookies();
            cookies.remove('login');

            if(data.login === true){
                const cookies = new Cookies();
                cookies.set('login', data.username, { path: '/','maxAge': 600 }); // 60*60*8
                window.location.replace("/");

            }else{
                console.log(cookies.get('login')); // admin
                console.log('не правильный логин или пароль');
                console.log(data.message);

                this.setState({
                    error:  data.message,
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
                            <form className="well" onSubmit={this.handleSubmit}>
                                <div className="form-group">
                                    <label>Логин: </label>
                                    <input type="text" value={this.state.login} onChange={this.handleChange} className="form-control" placeholder="Введите логин"/>
                                    <small id="emailHelp" className="form-text text-muted">Ваш логин TMS</small>
                                </div>

                                <div className="form-group">
                                    <label>Пароль: </label>
                                        <input type="password" name="password" value={this.state.password} onChange={this.handleChange2} className="form-control" placeholder="Введите пароль"/>
                                        <small id="emailHelp" className="form-text text-muted">Ваш пароль TMS</small>
                                </div>

                                <div className="">
                                    <p className={ this.state.error !== '' ? 'alert alert-danger' : ''} align="center"> { this.state.error }</p>
                                </div>

                                <div className="form-group text-center">
                                    <input type="submit" value="Отправить" className="btn btn-primary"/>
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