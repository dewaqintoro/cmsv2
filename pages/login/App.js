import React from 'react'
import { connect } from 'react-redux';
import Header from './Header.js';
import Main from './Main.js';
import { Redirect,BrowserRouter as Router } from 'react-router-dom'
import { useRouter } from 'next/router'

const Appku = (props) => {
    const router = useRouter()
    return (
        <>
            {props.isLogin ? router.push('/admin') : <Header />}
        </>
    )
}


function _mapStateToPropsTop(state) {
    return {
        isLogin: state.isLogin
    };
}

export default connect(_mapStateToPropsTop)(Appku);