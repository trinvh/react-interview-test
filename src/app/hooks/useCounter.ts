import React from 'react';

const useCounter = (initialValue: number) => {
  const [counter, setCounter] = React.useState(initialValue)

  const reset = () => {
    setCounter(initialValue)
  }

  const increase = () => {
    setCounter(counter + 1)
  }

  return { counter, reset, increase }
}

export default useCounter;