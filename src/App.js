import {v4 as uuidv4} from 'uuid'
import {BrowserRouter as Router, Route , Routes} from 'react-router-dom'
import { useState } from "react"
import Header from "./componentes/Header"
//import FeedbackItem from "./componentes/FeedbackItem"
import FeedbackData from "./data/FeedbackData"
import FeedbackList from "./componentes/FeedbackList"
import FeedbackStats from "./componentes/FeedbackStats"
import FeedbackForm from "./componentes/FeedbackForm"
import AboutPage from './pages/AboutPage'


function App(){

    const [feedback , setFeedback] = useState(FeedbackData)

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


    return (
        <Router>
            <Header  />
                <div className="container">
                    <Routes>
                        <Route exact path="/" element={
                            <>
                                <FeedbackForm handleAdd={addFeedback} />
                                <FeedbackStats feedback={feedback} />
                                <FeedbackList
                                    feedback={feedback}
                                    handleDelete={deleteFeedback}
                                />     
                            </>    
                        }>
                        </Route>
                        <Route path="/about" element={<AboutPage />} />  
                    </Routes>
                   
                        
                </div>  

        </Router>
     
    )

}

export default App