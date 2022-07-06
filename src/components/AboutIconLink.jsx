import { FaQuestion } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function AboutIconLink() {
  return (
    <div className='about-link'>
      <Link to='/about'>
        <FaQuestion size={30} />
      </Link>
      {/* <Link to='/post'>
        <FaQuestion size={60} />
      </Link> */}
    </div>
  )
}

export default AboutIconLink