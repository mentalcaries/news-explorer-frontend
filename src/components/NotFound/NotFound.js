import './NotFound.css';
import {Link} from 'react-router-dom';

function NotFound() {
  return (
    <div className="not-found">
      <h3 className="not-found__text">
        You might be lost. Let's go{' '}
        <Link className="not-found__link" to="/">
          Home
        </Link>{' '}
      </h3>
      {/* Photo by Aron Visuals https://unsplash.com/photos/3jBU9TbKW7o?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink
       */}
    </div>
  );
}

export default NotFound;
