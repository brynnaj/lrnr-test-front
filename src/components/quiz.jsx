// import React from 'react'
import { useState, useEffect } from 'react'
import '../quiz.css'

export default function Quiz() {
    const [currentQuestion, setCurrentQuestion] = useState(0)

    const [grade, setGrade] = useState('')

   

    // console.log(localStorage)
    const questions = JSON.parse(localStorage.getItem('content'))
    const filteredQuestions = questions.split('~~')

    const updateQuestion = (event) => {
        event.preventDefault()
        setGrade('')
        if (currentQuestion < filteredQuestions.length - 1) {
            setCurrentQuestion(currentQuestion + 1)
        } else if (currentQuestion === filteredQuestions.length - 1) {
            setCurrentQuestion(0)
            // window.location.href = '/result'
        }
        document.querySelector('input').value = ''
    }

    const checkAnswer = (event) => {
        event.preventDefault()
        const question = filteredQuestions[currentQuestion]
        const answer = document.querySelector('input').value
        fetch(`http://localhost:6747/grade?question=${question}&answer=${answer}`, {
	        method: 'POST',
            }).then(res => res.json())
            .then(data => {
                console.log(data.content)
                setGrade(data.content)
                
            })
        
    }



  return (
    <div className='quiz-box'>
      {filteredQuestions.map((question, index) => {
            if (index === currentQuestion) {
                return <div key={`question-${index}`}>
                    <p>{currentQuestion+1}/{filteredQuestions.length}</p>
                    <h1>{question}</h1>
                    </div>
            }
      })}

      <input type="text" placeholder='Answer'/>
      <button class="text-light bg-primary" onClick={checkAnswer}>Submit</button>

     

      {grade} 
      {grade &&  <button class="text-light bg-primary" onClick={updateQuestion}>Next</button>}

    </div>
  )
}
