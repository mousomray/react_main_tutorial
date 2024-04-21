import React from 'react'
import Stringchild from './Stringchild'

const Stringparent = () => {
  return (
    <>
    <h1>I am string Parent</h1>
    <Stringchild name="Mousom" age={22} city="Uttarpara"/>
    </>
  )
}

export default Stringparent
