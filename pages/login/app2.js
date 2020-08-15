import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './Header.js';
import Main from './Main.js';
import { Redirect,BrowserRouter as Router } from 'react-router-dom'


class Appku extends Component {
    constructor(props) {
        super(props)
    }

    render(props) {
        console.log("proppppp login",this.props.isLogin)
        return (
            // <div className="App">
            //     <Header />
            //     <Main />
            //         {this.props.isLogin ? <Main />: <Header />}
            // </div>

            <Router>
                {this.props.isLogin ? <Redirect to="/admin" /> : <Header />}
            </Router>
        )
    }
}

// function _mapStateToPropsTop(state) {
//     return {

//     };
// }

function _mapStateToPropsTop(state) {
    // console.log("ini state",this.state)
    return {
        isLogin: state.isLogin
    };
}

export default connect(_mapStateToPropsTop)(Appku);
