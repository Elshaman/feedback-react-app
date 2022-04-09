import {v4 as uuidv4} from 'uuid'
import { useState } from "react"
import Header from "./componentes/Header"
//import FeedbackItem from "./componentes/FeedbackItem"
import FeedbackData from "./data/FeedbackData"
import FeedbackList from "./componentes/FeedbackList"
import FeedbackStats from "./componentes/FeedbackStats"
import FeedbackForm from "./componentes/FeedbackForm"


function App(){

    const [feedback , setFeedback] = useState(FeedbackData)

    const addFeedback = ( newFeedback) =>{
        newFeedback.id = uuidv4()
        console.log(newFeedback)
    }

    const deleteFeedback = (id) => {
        //console.log('App' ,id)
        if(window.confirm('are you sure?')){
             setFeedback( feedback.filter((item) => item.id !== id) )
        }
       
    } 


    return (
        <>
            <Header  />
                <div className="container">
                    <FeedbackForm handleAdd={addFeedback} />
                    <FeedbackStats feedback={feedback} />
                    <FeedbackList
                         feedback={feedback}
                         handleDelete={deleteFeedback} />   
                </div>       
        </>
     
    )

}

export default App