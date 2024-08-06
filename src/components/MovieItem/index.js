import {Link} from 'react-router-dom'
import './index.css'

const MovieItem = ({movieData}) => {
  const {id, title, backdropPath} = movieData

  return (
    <li className="movie-item">
      <Link to={`/movies/${id}`} className="movie-item-link">
        <img src={backdropPath} alt={title} className="movie-item-image" />
      </Link>
    </li>
  )
}

export default MovieItem
