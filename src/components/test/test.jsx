import React from 'react'
import './test.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Test() {
  return (
    <div className='projectV3Div'>
      <Card style={{ width: '20rem',position:'relative',backgroundColor:'black' }} className="projectV3Card">
      <Card.Img variant="top" src="https://images.unsplash.com/photo-1541411438265-4cb4687110f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aGQlMjBwaG90b3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" className='projectV3Img'/>
      
    </Card>
    </div>
  )
}
