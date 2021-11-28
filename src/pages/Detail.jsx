import { Link, useParams } from 'react-router-dom'

const Detail = () => {
  const { id } = useParams()
  return (
    <>
      <main>
        <h2>Detail</h2>
        <p>Book ID: {id}</p>
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </>
  )
}

export default Detail