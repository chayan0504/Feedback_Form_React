import React,{useState,useContext,useEffect} from 'react'
import feedbackcontext from '../context/FeedbackContext';
function RatingSelect({select}) {

  const [selected,setselected] = useState(5)

  const {feedbackedit} = useContext(feedbackcontext)

  useEffect(() =>{
    setselected(feedbackedit.item.rating)
  },[feedbackedit])

  const handelchange = (e) => {
    setselected(+e.target.value);
    select(+e.target.value)
  }

  return (
    <div>
      <ul className="rating">
        <li>
          <input 
          type="radio" name="rating" 
          id="num1" 
          value='1'
          onChange={handelchange}
          checked={selected===1}
          />
          <label htmlFor="num1">1</label>
        </li>

        <li>
          <input 
          type="radio" name="rating" 
          id="num2" 
          value='2'
          onChange={handelchange}
          checked={selected===2}
          />
          <label htmlFor="num2">2</label>
        </li>
        <li>
          <input 
          type="radio" name="rating" 
          id="num3" 
          value='3'
          onChange={handelchange}
          checked={selected===3}
          />
          <label htmlFor="num3">3</label>
        </li>
        <li>
          <input 
          type="radio" name="rating" 
          id="num4" 
          value='4'
          onChange={handelchange}
          checked={selected===4}
          />
          <label htmlFor="num4">4</label>
        </li>
        <li>
          <input 
          type="radio" name="rating" 
          id="num5" 
          value='5'
          onChange={handelchange}
          checked={selected===5}
          />
          <label htmlFor="num5">5</label>
        </li>
      </ul>
    </div>
  )
}

export default RatingSelect














