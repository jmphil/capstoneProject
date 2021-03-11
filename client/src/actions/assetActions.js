import axios from 'axios';

export const setAssets = (formdata, cb) => {

    console.log(formdata)
    //logic
    return async dispatch=>{
        
        try{
            let response = await axios.post('http://localhost:3001/assets', formdata) //formdata will put on header

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