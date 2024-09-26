/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.

import {Component} from 'react'

import Navbar from '../NavBar'

import EmojiCard from '../EmojiCard'

import WinOrLoseCard from '../WinOrLoseCard'

import './index.css'

class EmojiGame extends Component {
  state = {
    selectedEmojisList: [],
    isMatched: false,
    score: 0,
    topScore: 0,
  }

  resetGame = topScore => {
    const topValue = topScore

    this.setState({
      selectedEmojisList: [],
      isMatched: false,
      score: 0,
      topScore: topValue,
    })
  }

  onSelectEmoji = emojiName => {
    const {selectedEmojisList, score, topScore} = this.state

    const result = selectedEmojisList.find(eachName => {
      if (eachName === emojiName) {
        return true
      }
      return false
    })

    const getValue = score === 11 ? 12 : score

    const getTopScore = topScore <= getValue ? getValue : topScore

    if (result !== undefined || getValue === 12) {
      this.setState(prevState => ({
        isMatched: !prevState.isMatched,
        score: getValue,
        topScore: getTopScore,
      }))
    } else {
      this.setState(prevState => ({
        selectedEmojisList: [...prevState.selectedEmojisList, emojiName],
        score: score + 1,
      }))
    }
  }

  getEmojis = shuffledEmjList => (
    <ul className="emojis-list">
      {shuffledEmjList.map(eachEmoji => (
        <EmojiCard
          emojiDetails={eachEmoji}
          key={eachEmoji.id}
          onSelectEmoji={this.onSelectEmoji}
        />
      ))}
    </ul>
  )

  render() {
    const {selectedEmojisList, isMatched, score, topScore} = this.state

    const shuffledEmojisList = () => {
      const {emojisList} = this.props
      return emojisList.sort(() => Math.random() - 0.5)
    }

    const shuffledEmjList = shuffledEmojisList()

    console.log(selectedEmojisList)

    return (
      <div className="emoji-game-app">
        <Navbar isMatched={isMatched} score={score} topScore={topScore} />

        <div className="emojis-container">
          {!isMatched && this.getEmojis(shuffledEmjList)}
          {isMatched && (
            <WinOrLoseCard
              score={score}
              topScore={topScore}
              resetGame={this.resetGame}
            />
          )}
        </div>
      </div>
    )
  }
}

export default EmojiGame
