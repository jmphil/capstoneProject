import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Navigate } from 'react-router-dom';


//requireAuth(HOC)

export default (ChildComponent)=> {

    //component 
    class ComposedComponent extends Component {

        componentDidMount(){
            this.isAuthenticated();
        }

        componentDidUpdate(){
            this.isAuthenticated();
        }

        //is our user authenticated?
        isAuthenticated = ()=>{
            console.log(this.props)
            if(!this.props.auth){
                //redirect our user back to home page
                <Navigate to="/login" />; //redirecting via react-router
            }
            console.log('authenticated')
        }

        render(){

            return <ChildComponent {...this.props} />
            
        }
    }//class component

    const mapStateToProps = (state) => {
        
        return{
            auth: state.auth.authenticated
        }
    }

    return connect(mapStateToProps, null)(ComposedComponent)

}// inside HOC