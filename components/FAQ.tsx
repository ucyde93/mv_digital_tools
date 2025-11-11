import React, { useState } from 'react';

const faqData = [
  {
    question: 'How do I manage my subscriptions?',
    answer:
      'You can easily manage all your active subscriptions by clicking the "Manage Subscriptions" button in the header. This will take you to your customer portal where you can view and modify your plan details.',
  },
  {
    question: 'What is your refund and cancellation policy?',
    answer:
      'All sales are final. Refunds are only available if requested before your service is issued. Once a service is delivered, we cannot offer a refund or cancellation. However, we will provide a replacement or a full refund for any service issues caused by us or our providers. This does not cover issues resulting from a customer\'s violation of our Terms of Service (TOS).',
  },
  {
    question: 'What payment methods do you accept?',
    answer:
      'We accept all major credit and debit cards, including Visa, Mastercard, and American Express. All payments are processed securely through Stripe.',
  },
  {
    question: 'How are the discounts applied?',
    answer:
      'The discounts are applied directly to the subscription prices you see. We negotiate bulk rates with providers to pass the savings on to you, giving you access to premium tools at a fraction of the cost.',
  },
  {
    question: 'Are you a legitimate business?',
    answer:
      'Yes, MV Digital Tools is a fully registered and compliant business entity in both the United States and the Maldives. We operate globally to source and provide the best possible deals on digital subscriptions for our customers.',
  }
];

const FaqItem: React.FC<{
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}> = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-white/10">
      <dt>
        <button
          onClick={onClick}
          className="flex w-full items-start justify-between text-left text-slate-200 group p-6 hover:bg-white/[.03] focus:outline-none focus-visible:bg-white/5 rounded-lg transition-colors duration-300"
          aria-expanded={isOpen}
        >
          <span className="text-base font-semibold leading-7 group-hover:text-white transition-colors duration-300">{question}</span>
          <span className="ml-6 flex h-7 items-center flex-shrink-0">
            <svg
              className={`h-6 w-6 transform transition-transform duration-500 ease-in-out text-slate-400 group-hover:text-white ${isOpen ? 'rotate-180' : 'rotate-0'}`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          </span>
        </button>
      </dt>
      <dd className={`grid transition-all duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
        <div className="overflow-hidden">
            <p className="text-base leading-7 text-slate-400 pt-0 px-6 pb-6">{answer}</p>
        </div>
      </dd>
    </div>
  );
};

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mx-auto max-w-4xl">
      <h2 
        className="text-3xl md:text-4xl font-extrabold tracking-tighter text-white text-center"
        style={{ textShadow: '0 2px 20px rgba(192, 132, 252, 0.4)' }}
      >
        Frequently Asked Questions
      </h2>
      <div className="mt-10 bg-black/30 rounded-2xl shadow-2xl shadow-indigo-900/20 ring-1 ring-white/10 backdrop-blur-md">
        <dl>
            {faqData.map((faq, index) => (
            <FaqItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onClick={() => handleToggle(index)}
            />
            ))}
        </dl>
      </div>
    </div>
  );
};
