import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { Spinner } from '../components/Spinner'
import house from '../assets/house.png'

const START_URL = 'https://lisas-guestbook2020.herokuapp.com/'

export const Start = () => {
  const history = useHistory()
  const [res, setRes] = useState()

  useEffect(() => {
    fetch(START_URL, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    })
      .then(res => res.json())
      .then(json => {
        setRes(json)
      })
  }, [])

  useEffect(() => {
    if (res) {
      history.push('/login')
    }
  })

  return (
    <StartContainer>
      <HouseAndWait>
        <ImageSection>
          <Image src={house} alt='house'/>
        </ImageSection>
        <Wait>Please wait a mo, we will soon awake!</Wait>
      </HouseAndWait>
      <Spinner />
    </StartContainer>

  )
}
const StartContainer = styled.section`
  display: flex;
  flex-direction: column;
  @media (min-width: 668px) {
    flex-direction: row;
    justify-content: space-evenly;
  }
`
const HouseAndWait = styled.div`
  display: flex;
  flex-direction: column;
`
const ImageSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 5%;
`
const Image = styled.img`
  height: 280px;
  width: auto;
  padding: 2%;
`
const Wait = styled.h1`
  font-size: 22px;
  text-align: center;
  padding: 0 2%;
`
