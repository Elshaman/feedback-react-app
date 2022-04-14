import { createContext, useState } from "react";
import {v4 as uuidv4} from 'uuid'

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) =>{

    const [feedback , setFeedback] = useState([
        {
            id:1,
            text: 'Comentario de prueba 1 de contexto',
            rating: 10
        },
        {
            id:2,
            text: 'Comentario de prueba 2 de contexto',
            rating: 5
        },
        {
            id:3,
            text: 'Comentario de prueba 3 de contexto',
            rating: 8
        },
    ])    

    const [feedbackEdit , setFeedbackEdit ] = useState({
        item: {}, 
        edit: false
    })

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