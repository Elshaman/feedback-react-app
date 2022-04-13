
import {BrowserRouter as Router, Route , Routes} from 'react-router-dom'
import Header from "./componentes/Header"
//import FeedbackItem from "./componentes/FeedbackItem"
import FeedbackList from "./componentes/FeedbackList"
import FeedbackStats from "./componentes/FeedbackStats"
import FeedbackForm from "./componentes/FeedbackForm"
import AboutIconLink from './componentes/AboutIconLink'
import AboutPage from './pages/AboutPage'
import {FeedbackProvider} from './context/FeedbackContext'


function App(){



  
    return (
        <FeedbackProvider>
                <Router>
                    <Header  />
                    <div className="container">
                        <Routes>
                            <Route exact path="/" element={
                                <>
                                    <FeedbackForm />
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