import { useState } from "react"
import Header from "./componentes/Header"
//import FeedbackItem from "./componentes/FeedbackItem"
import FeedbackData from "./data/FeedbackData"
import FeedbackList from "./componentes/FeedbackList"

function App(){

    const [feedback , setFeedback] = useState(FeedbackData)

    return (
        <>
            <Header  />
                <div className="container">
                    <FeedbackList feedback={feedback} />   
                </div>       
        </>
     
    )

}

export default App