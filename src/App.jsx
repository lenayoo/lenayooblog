import './App.css'

function App() {
  return (
    <>
      <div className="header">
        <div className="header-logo"><h1>L.BLOG.</h1></div>
        <ul className="header-nav">
          <li>Home</li>
          <li>Programming blog</li>
          <li>Today I learnt</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="main-img">
        <img src="/public/2.jpeg" alt='mountain and moon' />
      </div>
      <div className='bottom-text'><h2>Fully and wildly, You have arrived!</h2></div>
    </>
  )
}

export default App
