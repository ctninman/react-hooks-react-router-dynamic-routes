import { useParams } from 'react-router-dom'

function MovieShow () {

  const params = useParams()
  console.log('params', params);

  return (
    <h1>MovieShow</h1>
  )
}

export default MovieShow