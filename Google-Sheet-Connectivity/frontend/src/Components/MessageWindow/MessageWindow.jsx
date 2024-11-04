 

const MessageWindow = () => {
  return (
    <div className="message-window">
 <textarea
                value={textAreaValue}
                onChange={handleChange}
                rows="10" // Number of visible rows
                cols="50" // Number of visible columns
                placeholder="Type your text here..."
            />
    <div className="given-message">
    <textarea
                value={textAreaValue}
                onChange={handleChange}
                rows="10" // Number of visible rows
                cols="50" // Number of visible columns
                placeholder="Type your text here..."
            />
    </div>
    <div className="write-message">

    </div>

    <p>Send to...</p>
    <div className="send-to">
        <button className="btn-send-to">contractor</button>
        <button className="btn-send-to">J.E.</button>
        <button className="btn-send-to">S.D.O</button>
        <button className="btn-send-to">Ex.En</button>
    </div>
      
    </div>
  )
}

export default MessageWindow
