// src/components/QuizGeneration.js
import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../qg.css'

const QuizGeneration = () => {
  const [formData, setFormData] = useState({
    topic: 'golang',
    expertise: 'novice',
    numQuestions: 5,
    style: 'normal',
  });

  const [quiz, setQuiz] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState(Array(formData.numQuestions).fill(''));
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const handleChange = (e) => {
    const { value } = e.target;
    const updatedAnswers = [...userAnswers];
    updatedAnswers[currentQuestionIndex] = value;
    setUserAnswers(updatedAnswers);
  };

  const generateQuiz = async (event) => {
    event.preventDefault();
    // window.location.href = '/quiz'
    console.log('formData', formData);

    const respose = await fetch(`http://localhost:6747/ask?length=${formData.numQuestions}&topic=${formData.topic}&expertise=${formData.expertise}&style=${formData.style}`, {
      method: 'POST'
    })
    .then(res => res.json())
    .then(data => {
      console.log('Creating Quiz...')
      localStorage.clear()
      const questions = JSON.stringify(data.content)
      console.log(questions)
      localStorage.setItem('content', JSON.stringify(data.content))
      window.location.href = '/quiz'

    })

    // const questions = Array.from({ length: formData.numQuestions }, (_, index) => `Question ${index + 1}`);
    
    // const generatedQuiz = {
    //   title: `${formData.topic} Quiz`,
    //   description: `Test your knowledge on ${formData.topic} with ${formData.numQuestions} questions.`,
    //   answers: Array.from({ length: formData.numQuestions }, (_, index) => `Answer ${index + 1}`),
    //   questions,
    // };
    
    // setQuiz(generatedQuiz);
    // setShowResult(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const currentAnswer = userAnswers[currentQuestionIndex];
    const correctAnswer = quiz.answers[currentQuestionIndex];
    const correct = currentAnswer === correctAnswer;
    setIsCorrect(correct);
    setShowResult(true);
  };

  const handleNext = () => {
    if (currentQuestionIndex < formData.numQuestions - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setShowResult(false);
    }
  };

  return (
    <div>
      <h2 className='Qgpage'>{quiz ? quiz.title : 'Quiz Generation'}</h2>
      {quiz && currentQuestionIndex < formData.numQuestions ? (
        <div>
          <p>{quiz.questions[currentQuestionIndex]}</p>
          <form onSubmit={handleSubmit}>
            <label>Your Answer:
              <input
                type="text"
                value={userAnswers[currentQuestionIndex]}
                onChange={handleChange}
              />
            </label>
            <button type="submit">Submit Answer</button>
          </form>

          {showResult && (
            <div>
              <p>{isCorrect ? 'Correct!' : 'Incorrect!'}</p>
              <p>{isCorrect ? `Well done! The correct answer is ${quiz.answers[currentQuestionIndex]}.` : `Try again! The correct answer is ${quiz.answers[currentQuestionIndex]}.`}</p>
              <button type="button" onClick={handleNext}>Next</button>
            </div>
          )}
        </div>
      ) : (
        // <form class ='bg-primary' onSubmit={generateQuiz}>
        //   <label>Topic:
        //     <select name="topic" onChange={(e) => setFormData({ ...formData, topic: e.target.value })} value={formData.topic}>
        //       {['golang', 'aws', 'javascript', 'CI/CD', 'home gardens', 'coffee', 'finger foods', 'animals'].map((topic) => (
        //         <option key={topic} value={topic}>{topic}</option>
        //       ))}
        //     </select>
        //   </label><br />
        //   <label>Expertise:
        //     <select name="expertise" onChange={(e) => setFormData({ ...formData, expertise: e.target.value })} value={formData.expertise}>
        //       {['novice', 'intermediate', 'expert'].map((exp) => (
        //         <option key={exp} value={exp}>{exp}</option>
        //       ))}
        //     </select>
        //   </label><br />
        //   <label>Number of Questions:
        //     <select name="numQuestions" onChange={(e) => setFormData({ ...formData, numQuestions: parseInt(e.target.value) })} value={formData.numQuestions}>
        //       {[5, 10, 15].map((num) => (
        //         <option key={num} value={num}>{num}</option>
        //       ))}
        //     </select>
        //   </label><br />
        //   <label>Style of Questions:
        //     <select name="style" onChange={(e) => setFormData({ ...formData, style: e.target.value })} value={formData.style}>
        //       {['normal', "1940's gangster", 'like im an 8 year old', 'master oogway', 'jedi', 'captain jack sparrow', 'matthew mcconaughey'].map((style) => (
        //         <option key={style} value={style}>{style}</option>
        //       ))}
        //     </select>
        //   </label><br />
        //   <button class= 'bg-dark' type="submit">Generate Quiz</button>
        // </form>
        <form className="bg-primary" onSubmit={generateQuiz}>
        <label>Topic:
          <Form.Select name="topic" onChange={(e) => setFormData({ ...formData, topic: e.target.value })} value={formData.topic}>
            
            {['golang', 'aws', 'javascript', 'CI/CD', 'home gardens', 'coffee', 'finger foods', 'animals'].map((topic) => (
              <option key={topic} value={topic}>{topic}</option>
            ))}
          </Form.Select>
        </label><br />
        <label>Expertise:
          <Form.Select name="expertise" onChange={(e) => setFormData({ ...formData, expertise: e.target.value })} value={formData.expertise}>
            
            {['novice', 'intermediate', 'expert'].map((exp) => (
              <option key={exp} value={exp}>{exp}</option>
            ))}
          </Form.Select>
        </label><br />
        <label>Number of Questions:
          <Form.Select name="numQuestions" onChange={(e) => setFormData({ ...formData, numQuestions: parseInt(e.target.value) })} value={formData.numQuestions}>
            
            {[5, 10, 15].map((num) => (
              <option key={num} value={num}>{num}</option>
            ))}
          </Form.Select>
        </label><br />
        <label>Style of Questions:
          <Form.Select  name="style" onChange={(e) => setFormData({ ...formData, style: e.target.value })} value={formData.style}>
            
            {['normal', "1940's gangster", 'like im an 8 year old', 'master oogway', 'jedi', 'captain jack sparrow', 'matthew mcconaughey'].map((style) => (
              <option key={style} value={style}>{style}</option>
            ))}
          </Form.Select>
        </label><br />
        <button className="bg-dark" type="submit">Generate Quiz</button>
      </form>
      )}
    </div>
  );
};

export default QuizGeneration;

