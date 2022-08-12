import { useState } from 'react'

const Display = (props) => <div>{props.value}</div>

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const App = () => {
    const [ value, setValue ] = useState(0)

    const setToValue = ( newValue ) => () => {
      console.log( 'value now is', newValue )
      setValue( newValue )
    }

    return (
      <div>
        <Display value={value} />
        <Button handleClick={setToValue(value + 10)} text="+10" />
        <Button handleClick={setToValue(value - 10)} text="-10" />
        <Button handleClick={setToValue(0)} text="0" />
      </div>
    )
}

export default App;
