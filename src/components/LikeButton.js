import React from 'react'
import styled from 'styled-components'

// eslint-disable-next-line react/prop-types
export const LikeButton = ({ id }) => {
  const handleClick = () => {
    fetch(`http://localhost:8080/messages/${id}/like`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: ''
      }
    )
  }

  return (
    <div>
      <Button onClick={handleClick}>
      Like!
      </Button>
    </div>

  )
}

const Button = styled.button`
  background-color: pink;
`
