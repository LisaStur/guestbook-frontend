import React, { useState } from 'react'
import styled from 'styled-components'
import thumb from '../assets/thumb.png'

// eslint-disable-next-line react/prop-types
export const LikeButton = ({ id, likes }) => {
  const [like, setLike] = useState(likes)

  const handleClick = () => {
    fetch(`http://localhost:8080/messages/${id}/like`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: ''
      }).then(res => res.json())
      .then(setLike(like + 1))
  }

  return (
    <LikeSection>
      <Liked>{like}</Liked>
      <LikeThumb type='image' src={thumb} onClick={handleClick}/>
    </LikeSection>

  )
}

const LikeSection = styled.div`
  display: flex;
  flex-direction: row;  
  justify-content: flex-end;
`

const LikeThumb = styled.input`
  height: 50px;
  transition: 0.5s;
  :hover {
    height: 60px;
  }
  :active {
    height: 80px;
    transition: 0.1s;
  }
  :focus {
    outline: none;
  }
`
const Liked = styled.p`
  display: flex;
  font-size: 24px;
  color: darkgrey;
  padding-right: 5%;
  margin-block-start:12px;
`
