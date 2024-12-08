
import React, { useState } from 'react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is Movie Orchid?",
      answer: "Movie Orchid is your go-to platform for discovering movies, reviews, and showtimes tailored to your preferences.",
    },
    {
      question: "Is Movie Orchid free to use?",
      answer: "Yes, our platform is completely free for users to explore and enjoy.",
    },
    {
      question: "Can I create a watchlist?",
      answer: "Absolutely! You can create and manage a personalized watchlist to keep track of movies you want to watch.",
    },
    {
      question: "How often is the content updated?",
      answer: "Our content is updated daily to ensure you get the latest movie information and reviews.",
    },
  ];

  return (
    <section className="py-12 ">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-semibold text-center  mb-2">Frequently Asked Questions</h2>
        <p className=" font-semibold text-center  mb-8">Related by movie orchid side</p>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`border border-gray-200 rounded-lg overflow-hidden ${
                activeIndex === index ? "bg-gray-50 shadow-lg" : "bg-white"
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-4 text-left  font-medium focus:outline-none"
              >
                <span className='text-black'>{faq.question}</span>
                <span>{activeIndex === index ? "-" : "+"}</span>
              </button>
              {activeIndex === index && (
                <div className="px-4 pb-4 ">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
