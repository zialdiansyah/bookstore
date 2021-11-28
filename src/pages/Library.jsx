import { Link } from 'react-router-dom'

const Library = () => {
  return (
    <>
      <main>
        <h2>Library</h2>
        <p>You can do this, I believe in you.</p>
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </>
  )
}

export default Library