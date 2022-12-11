import { Button } from "./components/Button"
import { Input } from "./components/Input"

import { useState } from "react"

import { Container, Content, Row } from "./styles"

function App() {
  const [currentNumber, setCurrentNumber] = useState('0')
  const [firstNumber, setFirstNumber] = useState('0')
  const [operation, setOperation] = useState('')

  const handleOnClear = () => {
    setCurrentNumber("0")
    setFirstNumber('0')
    setOperation('')
  }
  const handleOnClearTotal = () => {
    setCurrentNumber("0")
    setFirstNumber('0')
    setOperation('')
  }


  const handleAddNumber = (num) => {
     setCurrentNumber(prev => `${prev === "0" ? '' : prev}${num}`)
  }
  
  const handleSumNumbers = () => {
    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber))
      setCurrentNumber('0')
      setOperation('+')
    }else{
      const sum = Number(firstNumber) + Number(currentNumber)
      setCurrentNumber(String(sum))
      setFirstNumber('0')
      setOperation('')
    }
  }

  const handleMinusNumbers = () => {
    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber))
      setCurrentNumber('0')
      setOperation('-')
    }else{
      const minus = Number(firstNumber) - Number(currentNumber)
      setCurrentNumber(String(minus))
      setFirstNumber('0')
      setOperation('')
    }
  }

  const handleMultiplyNumbers = () => {
    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber))
      setCurrentNumber('0')
      setOperation('*')
    }else{
      const multiply = Number(firstNumber) * Number(currentNumber)
      setCurrentNumber(String(multiply))
      setFirstNumber('0')
      setOperation('')
    }
  }

  const handleDivideNumbers = () => {
    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber))
      setCurrentNumber('0')
      setOperation('/')
    }else{
      const divider = Number(firstNumber) / Number(currentNumber)
      setCurrentNumber(String(divider))
      setFirstNumber('0')
      setOperation('')
    }
  }

  const handlePercentualNumbers = () => {
    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber))
      setCurrentNumber('0')
      setOperation('%')
    }else{
      const divider = Number(firstNumber) * (Number(currentNumber)/100)
      setCurrentNumber(String(divider))
      setFirstNumber('0')
      setOperation('')
    }
  }

  const handleEquals = () => {
    if(firstNumber !== '0' && operation !== '' && currentNumber !== '0'){
      switch (operation) {
        case '+':
          handleSumNumbers()
          break;
        case '-':
          handleMinusNumbers()
          break;
        case '*':
          handleMultiplyNumbers()
          break;
        case '/':
          handleDivideNumbers()
          break;
        case '%':
          handlePercentualNumbers()
          default:
          break;
      } 
    }
  }
  return (
    <div className="App">
      <Container>
        <Content>
          <Input value={currentNumber}/>
          <Row>
            <Button label="%" onClick={handlePercentualNumbers}/>
            <Button label="ce" onClick={handleOnClearTotal}/>
            <Button label="c" onClick={handleOnClear}/>
            <Button label="/" onClick={handleDivideNumbers}/>
          </Row>
          <Row>
            <Button label="7" onClick={() => handleAddNumber('7')}/>
            <Button label="8" onClick={() => handleAddNumber('8')}/>
            <Button label="9" onClick={() => handleAddNumber('9')}/>
            <Button label="*" onClick={handleMultiplyNumbers}/>
          </Row>
          <Row>
            <Button label="4" onClick={() => handleAddNumber('4')}/>
            <Button label="5" onClick={() => handleAddNumber('5')}/>
            <Button label="6" onClick={() => handleAddNumber('6')} />
            <Button label="-" onClick={handleMinusNumbers}/>
          </Row>
          <Row>
            <Button label="1" onClick={() => handleAddNumber('1')}/>
            <Button label="2" onClick={() => handleAddNumber('2')}/>
            <Button label="3" onClick={() => handleAddNumber('3')}/>
            <Button label="+" onClick={handleSumNumbers}/>
          </Row>
          <Row>
            <Button label="+/-" onClick={() => handleAddNumber('-')}/>
            <Button label="0" onClick={() => handleAddNumber('0')}/>
            <Button label="." onClick={() => handleAddNumber('.')}/>
            <Button label="=" onClick={handleEquals}/>
          </Row>
        </Content>
      </Container>
    </div>
  )
}

export default App
