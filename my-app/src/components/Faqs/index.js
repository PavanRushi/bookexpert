import React, { useState } from 'react';
import './index.css';

const questions = [
  {
    question: 'What is GST?',
    answer: 'The goods and services tax (GST) is a value-added tax (VAT) levied on most goods and services sold for domestic consumption. The GST is paid by consumers, but it is remitted to the government by the businesses selling the goods and services.',
  },
  {
    question: 'How do I register for GST?',
    answer: 'You can register for GST through the GST portal maintained by the government. You will need to provide some basic information about your business and submit relevant documents.',
  },
  {
    question: 'When do I need to file my GST returns?',
    answer: 'GST returns must be filed on a monthly basis by most businesses. However, some small businesses may be eligible to file quarterly returns. The due date for filing returns is the 20th of the following month for monthly returns and the last day of the month following the end of the quarter for quarterly returns.',
  },
];

const Faqs = () => {
  const [isOpen, setIsOpen] = useState({});
  
  const toggleFAQ = index => {
    setIsOpen(prevState => ({
      ...prevState,
      [index]: !prevState[index]
    }));
  };

  return (
    <div className="faqs-container">
      <h1 className="faqs-heading">Frequently Asked Questions</h1>
      {questions.map((faq, index) => (
        <div className="faq" key={index}>
          <div className="question" onClick={() => toggleFAQ(index)}>
            <h3>{faq.question}</h3>
            <svg width="15" height="12" viewBox="0 0 42 25" >
              <path d="m3 3L21 21L39 3" stroke="white" stroke-width="7" stroke-linecap="round" />
            </svg>
          </div>
          {isOpen[index] && (
            <div className="answer" >
              <p>{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Faqs;
