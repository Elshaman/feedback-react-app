import { createContext, useState, useEffect } from "react";
import {v4 as uuidv4} from 'uuid'

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) =>{

    const [feedback , setFeedback] = useState([])    

    const [feedbackEdit , setFeedbackEdit ] = useState({
        item: {}, 
        edit: false
    })

     useEffect(() => {
         //console.log("789")
         fetchFeedback()
     }, []);

       //function for fetch data fro mmock server
    const fetchFeedback = async () =>{
        const response = await fetch(`http://localhost:5000/feedback?_sort=id&_order=desc`)
        const data = await response.json()
       // console.log(data)
        setFeedback(data)
    }



    const addFeedback = ( newFeedback) =>{
        newFeedback.id = uuidv4()
        console.log(newFeedback.id)
        //utilizamos syntaxis expandida para :
        //1. dividir el arreglo feedback en elementos
        //2. Crear un nuevo arreglo con el primer elemento el feedback del form 
        //   y a continuacion lo que habia en el arreglo anterior
        setFeedback([newFeedback /*2 */ , /* 1 */ ...feedback])
    }

    const deleteFeedback = (id) => {
        //console.log('App' ,id)
        if(window.confirm('are you sure?')){
             setFeedback( feedback.filter((item) => item.id !== id) )
        }
       
    } 

    const updateFeedback = (id , updItem) => {
        //console.log(id, updItem )
        setFeedback(feedback.map((item)=> item.id === id ? {...item, ...updItem} : item))
     }

    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit:true
        })
    }


    return <FeedbackContext.Provider 
                value={{ 
                            feedback,
                            feedbackEdit,
                            deleteFeedback,
                            addFeedback,
                            editFeedback,
                            updateFeedback
                       }}>
                        {children}
            </FeedbackContext.Provider>
}

export default FeedbackContext