import React from 'react'
import CardHeader from './CardHeader'
import CardBody from './CardBody'
import CardFooter from './CardFooter'

const Card = () => {
  return (
    <>
    <div>
        <CardHeader title="Belajar Prop 1"/>
        <CardBody content="Belajar composition dengan reusable UIs"/>
        <CardFooter author="Tono"/>
    </div>
    <div>
    <   CardHeader title="Belajar Prop 2"/>
        <CardBody content="Belajar State Management solution di React applications"/>
        <CardFooter author="Joni"/>
    </div>
    </>
  )
}

export default Card