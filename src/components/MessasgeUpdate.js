import React, { useState } from 'react'

// eslint-disable-next-line react/prop-types
export const MessageUpdate = ({ id, message }) => {
  const UPDATEMESSAGE_URL = `http://localhost:8080/messages/${id}/update`
  const [text, setText] = useState(message)

  const handleOnSubmit = event => {
    event.preventDefault()

    fetch(UPDATEMESSAGE_URL,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ text })
      }
    ).then(() => {
      window.location.reload()
    })
  }

  return (
    <form>
      <textarea rows= '5' type='text' onChange={event => setText(event.target.value)} />
      <input
        type='submit'
        onClick={handleOnSubmit}
        disabled={text.length < 5 || text.length > 140} />
    </form>
  )
}
