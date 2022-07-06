import React,{useState,useContext, useEffect} from 'react'
import Card from './shared/Card'
import Button from './shared/Button'
import RatingSelect from './RatingSelect'
import feedbackcontext from '../context/FeedbackContext'


function FeedbackForm() {

  const {addfeedback,feedbackedit,updatefeedback} =  useContext(feedbackcontext)

  useEffect(() => {
    if(feedbackedit.edit === true){
      setbtndisabled(false)
      settext(feedbackedit.item.text)
      setrating(feedbackedit.item.rating)
    }
  },[feedbackedit])
  const [text,settext] = useState('')
  const [rating,setrating] = useState(5)
  const [btndisabled,setbtndisabled] = useState(true)
  const [message,setmessage] = useState('')

  const handletextchange = (e) => {
    if(text===""){
      setbtndisabled(true)
      setmessage(null)
    }
    else if (text!== null && text.trim().length<10){
      setbtndisabled(true)
      setmessage('Enter at least 10 characters')
    }
    else{
      setbtndisabled(false)
      setmessage(null)
    }

    settext(e.target.value)
  }

  const handlesubmit = (e) => {
    e.preventDefault()

    const newFeedback = {
      text,
      rating
    }

    if(feedbackedit.edit === true)
    {
      updatefeedback(feedbackedit.item.id, newFeedback)
    }
    else{
      addfeedback(newFeedback);
    }

    
    settext('')
    setbtndisabled(true)
  }

  return (
    

    <Card>
      <form onSubmit={handlesubmit}>
        <h2>How would you rate your service eith us?</h2>
        <RatingSelect select={(rating) => setrating(rating)}/>
        <div className="input-group">
          <input  
          onChange={handletextchange}
          type="text" 
          placeholder='write a review'
          value={text}
          />
          <Button type="submit" isdisabled={btndisabled} >Send</Button>
        </div>
        {message && <div className='message'>
          {message}</div>}
      </form>
    </Card>

  )
}

export default FeedbackForm
