/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from 'react';

const FAQ = () => {
    const [isOpen, setIsOpen] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setIsOpen(isOpen === index ? null : index);
    };

    const faqData = [
        { question: 'Lorem ipsum dolor sit amet consectetur adipisicing elit', answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique consectetur quasi dolor iure, dignissimos placeat laudantium amet sint error dolorum, facilis, ut quam nobis inventore recusandae quaerat velit est odit.' },
        { question: 'Lorem ipsum dolor sit amet consectetur adipisicing elit', answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique consectetur quasi dolor iure, dignissimos placeat laudantium amet sint error dolorum, facilis, ut quam nobis inventore recusandae quaerat velit est odit.' },
        { question: 'Lorem ipsum dolor sit amet consectetur adipisicing elit', answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique consectetur quasi dolor iure, dignissimos placeat laudantium amet sint error dolorum, facilis, ut quam nobis inventore recusandae quaerat velit est odit.' },
        { question: 'Lorem ipsum dolor sit amet consectetur adipisicing elit', answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique consectetur quasi dolor iure, dignissimos placeat laudantium amet sint error dolorum, facilis, ut quam nobis inventore recusandae quaerat velit est odit.' },
        { question: 'Lorem ipsum dolor sit amet consectetur adipisicing elit', answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique consectetur quasi dolor iure, dignissimos placeat laudantium amet sint error dolorum, facilis, ut quam nobis inventore recusandae quaerat velit est odit.' },
    ];
    return (
        <div className="container mx-auto mt-8">
            <h1 className="text-3xl font-bold mb-6 ml-4 font-sans">Frequently Asked Questions</h1>
            <div className="space-y-4">
                {faqData.map((faq, index) => (
                    <div key={index} className="bg-white p-4 rounded">
                        <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleFAQ(index)}>
                            <h2 className="text-lg font-bold font-sans">{faq.question}</h2>
                            <span>{isOpen === index ? '▲' : '▼'}</span>
                        </div>
                        {isOpen === index && <p className="mt-2 font-normal font-sans">{faq.answer}</p>}
                        {index !== faqData.length - 1 && <hr className="border-t my-2" />}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQ;