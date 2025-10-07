import './App.css'
import Nav from './components/Nav'
import { APP_CONTENT } from './constants'

function App() {
  return (
    <>
      <Nav />
      <main>
        <section id={APP_CONTENT.SECTION_ID}>
          <h1>{APP_CONTENT.TITLE}</h1>
          <p>{APP_CONTENT.DESCRIPTION}</p>
        </section>
      </main>
    </>
  )
}

export default App
