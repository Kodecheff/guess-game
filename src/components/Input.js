import React from 'react'

const Input = (props) => {
 
  return (
    <div>
      <form onSubmit={props.check}>
        <input type="number" 
          placeholder="Guess the number..." 
          value={props.state} 
          onChange={props.onChange}
        />
        <input type="submit" value="Submit"/>
      </form>
    </div>
  )
}

export default Input
