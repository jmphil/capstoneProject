import axios from 'axios';

export const setAssets = (formdata, cb) => {

    console.log(formdata)
    //logic
    return async dispatch=>{
        
        try{
            let response = await axios.post(`${process.env.REACT_APP_SERVER}/assets`, formdata) //formdata will put on header

            console.log(response) //data from assets
            // console.log(response.data.token);//token

            //dispatch action to reducer 

            dispatch({type: "SET_ASSETS", data: response.data});

            // localStorage.setItem('token', response.data.token);

            // cb();

        }
        catch(e){
            console.log('error');
            console.log(e);
        }
    }
}

export const getAssets = (id) => {

    console.log()
    //logic
    return async dispatch=>{
        
        try{
            let response = await axios.get(`${process.env.REACT_APP_SERVER}/assets/${id}`) //formdata will put on header

            console.log(response) //data from assets
            // console.log(response.data.token);//token

            //dispatch action to reducer 

            dispatch({type: "SET_ASSETS", data: response.data});

            // localStorage.setItem('token', response.data.token);

            

        }
        catch(e){
            console.log('error');
            console.log(e);
        }
    }
}