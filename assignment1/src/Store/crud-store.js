import { createStore } from 'redux';

const initialState = {
    name:"",
    fileName: "",
    data: ""
    
}

const crudReducer = (state=initialState, action)=>{    
    return state;
}


const curdStore = createStore(crudReducer);

export default curdStore;