import React, { useRef } from 'react'
import { questions } from './hooks/data.js'
export const FAQ = () => {
  const hiddenAnswer = useRef(null)

  const showAnswer = () => {
    hiddenAnswer.current.classList.remove('hidden')
  }

  return (
    <>
      <div>
        {questions.map((qustion, index) => {
          return (
            <div
              className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
              key={index}
            >
              <div className="mb-4" onClick={showAnswer}>
                <h1 className="text-2xl font-semibold text-gray-700">
                  {qustion.Question}
                </h1>
              </div>
              <div ref={hiddenAnswer} className="mb-4 hidden">
                <p className="text-gray-700">{qustion.answer}</p>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}
