import React, { useState } from 'react';

const faqs = [
  { question: "What is your return policy?", answer: "We offer a 30-day return policy. Items must be in original condition with proof of purchase." },
  { question: "How long does shipping take?", answer: "Shipping times vary by location but typically take 3-5 business days for domestic orders." },
  { question: "Do you ship internationally?", answer: "Yes, we offer international shipping to most countries. Shipping fees and times vary by destination." },
  { question: "What payment methods do you accept?", answer: "We accept Visa, MasterCard, American Express, PayPal, and Apple Pay." },
  { question: "Can I change or cancel my order?", answer: "You can cancel or modify your order within 24 hours of placing it by contacting our support team." },
  { question: "Do you offer gift wrapping?", answer: "Yes, we offer gift wrapping at checkout for an additional fee." },
  { question: "How can I track my order?", answer: "Once your order is shipped, we’ll send you a tracking link via email." },
  { question: "What do I do if I receive a damaged item?", answer: "If you receive a damaged item, please contact our support team within 48 hours to arrange a replacement or refund." },
  { question: "Do you have a loyalty program?", answer: "Yes, our loyalty program rewards you with points for each purchase, which you can redeem for discounts." },
  { question: "How can I contact customer service?", answer: "You can contact us via email at support@ourcompany.com or by phone at (123) 456-7890." }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq">
      <h1>Frequently Asked Questions</h1>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              <h4>{faq.question}</h4>
              <span>{openIndex === index ? '-' : '+'}</span>
            </div>
            {openIndex === index && <div className="faq-answer"><p>{faq.answer}</p></div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
