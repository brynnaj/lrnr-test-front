import React from 'react'
import { useState } from 'react'

export default function Quiz() {
    const [currentQuestion, setCurrentQuestion] = useState(0)

    

    // console.log(localStorage)
    const questions = JSON.parse(localStorage.getItem('content'))
    const filteredQuestions = questions.split('~~')

    const updateQuestion = (event) => {
        event.preventDefault()
        if (currentQuestion < filteredQuestions.length - 1) {
            setCurrentQuestion(currentQuestion + 1)
        } else if (currentQuestion === filteredQuestions.length - 1) {
            setCurrentQuestion(0)
            // window.location.href = '/result'
        }
    }

    // const checkAnswer = async (event) => {
    //     const respose = await fetch(`http://localhost:6747/grade?question={}&answer={}`, {
    //   method: 'POST'
    // })
    // .then(res => res.json())
    // .then(data => {
    //   const questions = JSON.stringify(data.content)
    //   console.log(questions)
    //   localStorage.setItem('content', JSON.stringify(data.content))
    //   window.location.href = '/quiz'


    // })
        
    // }
    

  return (
    <div>
      {filteredQuestions.map((question, index) => {
            if (index === currentQuestion) {
                return <div>
                    <p>{currentQuestion+1}/{filteredQuestions.length}</p>
                    <h1>{question}</h1>
                    </div>
            }
      })}

      <input type="text" placeholder='Answer'/>
      <button onClick={checkAnswer}>submit</button>

      <button onClick={updateQuestion}>Next</button>
    </div>
  )
}
