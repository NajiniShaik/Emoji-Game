import './index.css'

const WinOrLoseCard = props => {
  const {score, topScore, resetGame} = props

  const result = score === 12

  const onClickBtn = () => {
    resetGame(topScore)
  }

  const getUrl = result
    ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

  return (
    <div className="game-result-container">
      <img src={getUrl} className="greeting-img" alt="win or lose" />
      <div className="detailed-card">
        <h1 className="msg">You {result ? 'Won' : 'Lose'}</h1>
        <p className="title">{result ? 'Best Score' : 'Score'}</p>
        <p className="final-score">{score}/12</p>
        <button className="play-btn" type="button" onClick={onClickBtn}>
          Play Again
        </button>
      </div>
    </div>
  )
}

export default WinOrLoseCard
