import './NotFound.css'
import { Link } from 'react-router-dom'

function NotFound(){
  return(
    <h3 className='not-found'>Sorry partner. That page doesn't exist. Go <Link to="/">Home</Link> </h3>
  )
}

export default NotFound