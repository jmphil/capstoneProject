// import actionTypes from './actionTypes';
import axios from 'axios';

export const signUp = (formData, cb) => {
    
    console.log(formData);
    //take username and passpword
    //call our server api 
    //wait for an authenticated token 
    //call reducer to store token

    //formData => {email, password}
    
    return async dispatch=>{
        
        try{
            let response = await axios.post(`${process.env.REACT_APP_SERVER}/signup`, formData) //formdata will put on header

            console.log(response.data.token);//token

            //dispatch action to reducer 

            dispatch({type: "AUTH_USER", data: response.data.token});

            localStorage.setItem('token', response.data.token);

            cb();

        }
        catch(e){
            console.log('error');
            console.log(e);
        }
    }
}

//logging into application

export const signin = (formData, cb) => {
    
    return async dispatch =>{

        try{
            let response = await axios.post(`${process.env.REACT_APP_SERVER}/signin`, formData);

            dispatch({type: "AUTH_USER", data: response.data});

            console.log('signin', response.data);
            localStorage.setItem('token', response.data.token);

            // cb();
        }
        catch(e){

        }
    }
}

//logout

export const signout = (cb) => {

    return dispatch=> {
        localStorage.removeItem('token');
        dispatch({
            type: "AUTH_USER",
            data: ''
        })

        console.log('signing out');

        cb();
    }
}