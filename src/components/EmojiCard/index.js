// Write your code here.

import './index.css'

const EmojiCard = props => {
  const {emojiDetails, onSelectEmoji} = props
  const {emojiUrl, emojiName} = emojiDetails

  const onClickEmoji = () => {
    onSelectEmoji(emojiName)
  }

  return (
    <li className="emoji-card">
      <button className="button" type="button" onClick={onClickEmoji}>
        <img src={emojiUrl} alt={emojiName} className="emoji" />
      </button>
    </li>
  )
}

export default EmojiCard
