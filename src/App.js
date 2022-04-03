import { useState } from "react"
import Header from "./componentes/Header"
//import FeedbackItem from "./componentes/FeedbackItem"
import FeedbackData from "./data/FeedbackData"
import FeedbackList from "./componentes/FeedbackList"


function App(){

    const [feedback , setFeedback] = useState(FeedbackData)

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
                    <FeedbackList
                         feedback={feedback}
                         handleDelete={deleteFeedback} />   
                </div>       
        </>
     
    )

}

export default App