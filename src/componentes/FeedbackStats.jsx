import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackStats() {
  
    const {feedback} = useContext(FeedbackContext)

//reduce es un metodo de array
    let avg = feedback.reduce((acc , cur ) => {
        return acc + cur.rating    
    }, 0 ) / feedback.length

    avg = avg.toFixed(1).replace(/[.,]0$/, '' )
  
    return (
    <div className="feedback-stats">
        <h4>{ feedback.length } Comentarios </h4>
        <h4>Calificación Promedio: {isNaN(avg) ? 0 : avg}</h4>
    </div>
  )
}


export default FeedbackStats