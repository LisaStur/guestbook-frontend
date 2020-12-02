import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { user } from '../reducers/user'
import house from '../assets/house.png'

const SIGNUP_URL = 'https://lisas-guestbook2020.herokuapp.com/users'
const LOGIN_URL = 'https://lisas-guestbook2020.herokuapp.com/sessions'

export const Login = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const accessToken = useSelector((store) => store.user.login.accessToken)
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [anotherName, setAnotherName] = useState(false)
  const [wrongPassword, setWrongPassword] = useState(false)

  const handleSubmit = event => {
    event.preventDefault()
    setIsLoading(true)

    fetch(SIGNUP_URL, {
      method: 'POST',
      body: JSON.stringify({ name, password }),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(res => res.json())
      .then(json => {
        dispatch(user.actions.setAccessToken({ accessToken: json.accessToken }))
        dispatch(user.actions.setUserId({ userId: json.userId }))
        setIsLoading(false)
      })
      .catch(err => console.log('error:', err))
    setAnotherName(true)
    setIsLoading(false)
  }

  const handleLogin = event => {
    event.preventDefault()

    fetch(LOGIN_URL, {
      method: 'POST',
      body: JSON.stringify({ name, password }),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(res => res.json())
      .then(json => {
        dispatch(user.actions.setAccessToken({ accessToken: json.accessToken }))
        dispatch(user.actions.setUserId({ userId: json.userId }))
      })
      .catch(err => console.log('error:', err))
    setWrongPassword(true)
  }

  useEffect(() => {
    if (accessToken) {
      history.push('/guestbook')
    }
  })

  return (
    <LoginSection>
      <Image src={house} alt='house'/>
      <MidScreen>
        <BigScreen>
          <Welcome>Welcome! Please come in!</Welcome>
          <InputSection>
            <Input required minlength="3" type='text' placeholder='Name' value={name} onChange={event => setName(event.target.value)}/>
          </InputSection>
          <InputSection>
            <Input required minlength="3" type='password' placeholder='Password' value={password} onChange={event => setPassword(event.target.value)}/>
          </InputSection>
          {anotherName && <p>Please use another Name, this is areadly taken!</p>}
          {wrongPassword && <p>Misspelled the password? Please try again!</p>}
        </BigScreen>
        <ButtonSection>
          <Button type='submit' onClick={handleSubmit}>
            {isLoading ? <ButtonText>Loading...</ButtonText> : <ButtonText>Sign Up!</ButtonText>}
          </Button>
          <Button type='submit' onClick={handleLogin}>
          {isLoading ? <ButtonText>Loading...</ButtonText> : <ButtonText>Sign In!</ButtonText>}
          </Button>
        </ButtonSection>
      </MidScreen>
    </LoginSection>
  )
}

const LoginSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  border: 2px solid lightgrey;
  border-radius: 5px;
  margin: 5%;
  padding: 12px ;
  background-color: #f5f5e9;
  @media (min-width: 668px) {
    flex-direction: row;
    justify-content: space-evenly;
  }
`
const MidScreen = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5%;
  @media (min-width: 1024px) {
    flex-direction: row;
    padding: 0;
    justify-content: space-evenly;
  }
`
const BigScreen = styled.div`
  display: flex;
  flex-direction: column;
`
const Image = styled.img`
  height: 280px;
  width: auto;
  padding: 2%;
`
const Welcome = styled.h1`
  font-size: 28px;
  @media (min-width: 1024px) {
    width: 80%;
   }
`
const InputSection = styled.label`
  width: 100%;
  margin: 1%;
  @media (min-width: 1024px) {
    width: 80%;
  }
`
const Input = styled.input`
  width: 100%;
  font-size: 18px;
`
const ButtonSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding: 2%;
  @media (min-width: 1024px) {
    flex-direction: column;
    padding: 0;
    justify-content: space-evenly;
  }
`
const Button = styled.button`
  padding: 15px 10px;
  background-color: green;
  background-image: linear-gradient(lightgreen,#495139);
  color: white;
  font-size: 16px;
  border-radius: 50%;
  border: 0;
  :hover {
    background-image: linear-gradient(lightgreen,green);
    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
    transition: 0.3s;
  }
  :active {
    transition: 0.1s;
  }
  :focus {
    outline: none;
  }
  `
const ButtonText = styled.p`
  width: 70px;
  `
