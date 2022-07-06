import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
function AboutPage() {
  const navigate = useNavigate()
  const onclick = () => {
    navigate('/')
  }
  return (
    <>
    <div>AboutPage</div>  
    <p><Link to="/">home</Link></p>
    {/* <button onClick={onclick}>Click</button> */}
    
    </>
  
  )
}

export default AboutPage
















// import { Link } from 'react-router-dom'
// import Card from '../components/shared/Card'

// function AboutPage(props) {
//   return (
//     <Card>
//       <div className='about'>
//         <h1>About This Project</h1>
//         <p>This is a React app to leave feedback for a product or service</p>
//         <p>Version: 1.0.0</p>

//         <p>
//           <Link to='/'>Back To Home</Link>
//         </p>
//       </div>
//     </Card>
//   )
// }

// export default AboutPage