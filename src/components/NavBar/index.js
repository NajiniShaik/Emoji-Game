import './index.css'

const Navbar = props => {
  const {isMatched, score, topScore} = props

  const GetScoreBoard = () => (
    <div className="score-board">
      <p className="score">Score: {score}</p>
      <p className="score">Top Score: {topScore}</p>
    </div>
  )

  return (
    <nav className="nav-bar">
      <div className="navbar-card">
        <a href="#Home" className="logo-card">
          <img
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            className="logo"
            alt="emoji logo"
          />
          <h1 className="logo-title">Emoji Games</h1>
        </a>

        {!isMatched && <GetScoreBoard />}
      </div>
    </nav>
  )
}

export default Navbar
