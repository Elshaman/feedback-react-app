import {v4 as uuidv4} from 'uuid'
import {BrowserRouter as Router, Route , Routes} from 'react-router-dom'
import { useState } from "react"
import Header from "./componentes/Header"
//import FeedbackItem from "./componentes/FeedbackItem"
import FeedbackData from "./data/FeedbackData"
import FeedbackList from "./componentes/FeedbackList"
import FeedbackStats from "./componentes/FeedbackStats"
import FeedbackForm from "./componentes/FeedbackForm"
import AboutIconLink from './componentes/AboutIconLink'
import AboutPage from './pages/AboutPage'
import {FeedbackProvider} from './context/FeedbackContext'


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

   


    return (
        <FeedbackProvider>
                <Router>
                    <Header  />
                    <div className="container">
                        <Routes>
                            <Route exact path="/" element={
                                <>
                                    <FeedbackForm handleAdd={addFeedback} />
                                    <FeedbackStats  />
                                    <FeedbackList /> 
                                    <AboutIconLink />    
                                </>    
                            }>
                            </Route>
                            <Route path="/about" element={<AboutPage />} />
                        </Routes>          
                    </div>  
                </Router>
        </FeedbackProvider>
        
     
    )

}

export default App