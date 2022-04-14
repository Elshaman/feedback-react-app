import { useState, useContext, useEffect } from "react"
import Card from "./shared/Card"
import Button from "./shared/Button"
import RatingSelect from "./RatingSelect"
import FeedbackContext from "../context/FeedbackContext"

function FeedbackForm() {

   const [text, setText] = useState('')
   const [rating, setRating] = useState(10)
   const [btnDisabled, setBtnDisabled] = useState(true)
   const [message, setMessage] = useState('') 
   const {addFeedback, feedbackEdit, updateFeedback  } = useContext(FeedbackContext)

   useEffect(() => {
       if(feedbackEdit.edit === true){
           setBtnDisabled(false)
           setText(feedbackEdit.item.text)
           setRating(feedbackEdit.item.rating)
       }
   }, [feedbackEdit]) 


    const handleTextChange =(e)=>{
        if( text === '' ){
            setBtnDisabled(true)
            setMessage(null)
        }else if(text!== '' && text.trim().length <= 10 ){
            setMessage('tu comentario debe tener al menos 10 caractéres')
            setBtnDisabled(true)
        }else{
            setMessage(null)
            setBtnDisabled(false)
        }

        setText(e.target.value)
    }

    const handleSubmit =(e) =>{
        e.preventDefault()
        let newFeedback = {}
        if(text.trim().length >10){
             const newFeedback ={
                text, 
                rating
            }
        
            if(feedbackEdit.edit ===true){
                updateFeedback(feedbackEdit.item.id , newFeedback)
            }else{
                //console.log(newFeedback)
                addFeedback(newFeedback)
            }
            
            setText('')
        }
       
    }

  return (
    <Card>
        <form onSubmit={handleSubmit}>
            <h2>Como calificarías nuestro servicio?</h2>
            <RatingSelect select={(rating) => setRating(rating)}/>
            <div className="input-group">
                <input onChange={handleTextChange}
                       type="text"
                       placeholder="escribe tu comentario"
                       value={text}
                       id="" />
                <Button type="submit" isDisabled={btnDisabled} version="secondary">
                    Enviar
                </Button>
            </div>
            {message && <div className="message">{message}</div>}
        </form>
    </Card>
  )
}

export default FeedbackForm