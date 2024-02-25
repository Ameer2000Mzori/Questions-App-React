import React, { useState } from 'react'

const FAQs = ({ question, index }) => {
  const [showAnswer, setShowAnswer] = useState(false)

  return (
    <>
      <div
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        key={index}
      >
        <div
          className="mb-4"
          onClick={() => {
            setShowAnswer((prev) => !prev)
          }}
        >
          <h1 className="text-2xl font-semibold text-gray-700">
            {question.Question}
          </h1>
        </div>
        {showAnswer && (
          <div className="mb-4">
            <p className="text-gray-700">{question.answer}</p>
          </div>
        )}
      </div>
    </>
  )
}

export default FAQs
