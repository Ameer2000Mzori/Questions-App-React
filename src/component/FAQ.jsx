import React, { useState } from 'react'
import { questions } from './hooks/data.js'
import FAQs from './hooks/FAQs.jsx'

export const FAQ = () => {
  // Initialize state to null indicating no question is selected
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(null)

  return (
    <>
      <div>
        {questions.map((question, index) => {
          return <FAQs question={question} index={index} />
        })}
      </div>
    </>
  )
}
