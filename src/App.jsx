import { useState } from 'react'
import './App.css'
import Title from './components/Title'
import Question from './components/Question'

const steps = [
  "Hola tris :)",
  "Como estas?",
  "Que haces?",
  "Te tengo una pregunta",
  "Es algo importante",
  "Pon atencion",
  "Estas lista?",
  "Ok, aqui va",
  "Quieres ser mi valentine?",
]

function App() {
  
  const [step, setStep] = useState(0)
  const [ answers, setAnswers ] = useState("")

  const handleSteps = () => {
    if (step < steps.length - 1) {
      setStep(step + 1)
    } 
  }
  const handleAnswers = (e) => {
    setAnswers(e.target.value)
    if(e.target.value === "yes"){
      //alert("Te amo")
      window.location.href = "https://daveoval.github.io/dawd/";
    }
  }

  return (
    <main className='contenedor-main'>
      <video autoPlay loop muted className='video'>
        <source src="/video/tiburon.mp4" />
      </video>

      {
        step < steps.length - 1 ? (
          <Title title={steps[step]} handleSteps={handleSteps} />
        ) : (
          <Question handleAnswers={handleAnswers}/>
        )
      }


       
    </main>
  );
}

export default App
