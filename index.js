import React from 'react'
import { render } from 'react-dom'
import App from './components/app'

var compliments = ["You're Awesome", " Amazing listening skills", "Way to go", "That is so cool", "Your smile is contagious", "You look great today", "You should be proud of yourself", "Your hair looks stunning", "You always know just what to say", "You're so thoughtful"]

render(<App compliment={compliments} />, document.querySelector('main'))
console.log('welcome to compliment-generator')
