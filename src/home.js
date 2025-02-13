import React from "react";
import Header from './header'
import Content from './content'
import Footer from './footer'
import Footer from './counter'

export default class Home extends React.Component{
    render(){
        return(
        <>
            <Header/>
            <Content/>
            <Footer/>

        </>

        )
    }
}