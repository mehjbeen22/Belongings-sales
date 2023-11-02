// for useContext we will need three terms "Create , Provider , useContext"

import React , {createContext , useContext, useReducer} from "react";


const formDataContext = createContext();

const initialState = {
    address: "",
        geolocation: "",
        configuration: "",
        amenities: "",
        availability: "",
        photos: "",
        rent: "",
        maintenance: "",
        deposit: "",
}




const formDataReducer = (state , action ) =>{
    switch (action.type){
        case "UPDATE FIELD":
            return {...state , [action.field] : action.value}
        default:
            return state;
    }
}



const FormDataProvider = ( {children} ) =>{
    const [formData , dispatch] = useReducer(formDataReducer , initialState);

    return(
        <formDataContext.Provider value={{formData , dispatch}}>
            {children}
        </formDataContext.Provider>
    )
}



const useFormData = () =>{
    return useContext(formDataContext);
}

export {FormDataProvider , useFormData};
