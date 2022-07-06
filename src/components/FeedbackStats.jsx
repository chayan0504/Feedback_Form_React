import React,{useContext} from 'react'
import feedbackcontext from '../context/FeedbackContext'
function FeedbackStats() {
  const {feedback} = useContext(feedbackcontext)
  let sum=0
  let avg=null
  for(let i=0;i<feedback.length;i++)
  {
    sum+=feedback[i].rating
  }
  
  avg=(sum/feedback.length).toFixed(1)
  if(feedback.length===0)
  {
    avg=0
  }
 


  return (
    <div className="feedback-stats">
      <h4>{feedback.length} Reviews</h4>
      <h4>Averge Rating:{avg}</h4>
    </div>
  )
}

export default FeedbackStats













