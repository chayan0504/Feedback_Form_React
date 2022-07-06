import { createContext, useState } from "react";
import {v4 as uuidv4} from 'uuid'

const feedbackcontext = createContext()

export const FeedbackProvider = ({children}) => {
  const [feedback,setfeedback] = useState([
      {
        id:1,
        text: 'this is from context 1',
        rating: 4
      },
      {
        id:2,
        text: 'this is from context 2',
        rating: 2
      },
      {
        id:3,
        text: 'this is from context 3',
        rating: 5
      }
    ])

    const [feedbackedit,setfeedbackedit] = useState({
     item: {},
     edit: false
  })

    const editfeedback = (item) =>{
        setfeedbackedit({
          item,
          edit: true
        })
    }

    const updatefeedback = (id,upditem) => {
      setfeedback(
        feedback.map((item) => (item.id === id ? {...item, ...upditem} : item))
      );
    }

    const deletefeedback = (id) => {
    if(window.confirm('Sure to delete'))
    {
    setfeedback(feedback.filter((item) =>item.id !== id))
    }
  }

  const addfeedback = (newfeedback) =>{
    newfeedback.id= uuidv4()
    setfeedback([newfeedback,...feedback])
  }

  


  return <feedbackcontext.Provider
  value={{
    feedback,
    deletefeedback,
    addfeedback,
    editfeedback,
    updatefeedback,
    feedbackedit
  }}>
    {children}
  </feedbackcontext.Provider>
}


export default feedbackcontext