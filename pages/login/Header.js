import React, { Component } from 'react';
import { connect } from 'react-redux';
import { GoogleLogin } from 'react-google-login';
import { changeLoginStatus, getUserInfo } from './actions';
import { Redirect,BrowserRouter as Router } from 'react-router-dom'

class Header extends Component {
    constructor(props) {
        super(props);
        this.responseGoogle = this.responseGoogle.bind(this);
    }

    responseGoogle(response) {
        // console.log(response.profileObj);

        this.props.dispatch(changeLoginStatus(true));
        this.props.dispatch(getUserInfo(response.profileObj));
    }

    render() {
        // console.log("props v2",this.props)
        if (!this.props.isLogin) {
            return (
                <header>
                    {this.props.isLogin === false &&
                        <GoogleLogin
                            clientId="853220208001-o12l4m1e5j61rq2k7pkfq8dqj1q5pq0o.apps.googleusercontent.com"
                            buttonText="Login with Google"
                            onSuccess={this.responseGoogle}
                            onFailure={this.responseGoogle}
                        />
                    }
                </header>
            )
        } else {
            return (
                <header>
                </header>
                // <h1>Sudah login</h1>
                
                // <Router>
                //     {/* <Redirect to='/admin' /> */}
                // </Router>
            )
        }
    }
}

function _mapStateToPropsTop(state) {
    // console.log("ini state",this.state)
    return {
        isLogin: state.isLogin
    };
}
export default connect(_mapStateToPropsTop)(Header);