import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useState, useEffect } from "react";

const inter = Inter({ subsets: ['latin'] })

const newsormags =[]

const events = []

const faqs = [
  {
    question: "Can chatgpt come up with faqs?",
    answer: "Yes. Yes it can",
    changed: 0
  },
  {
    question: 'What is TypeScript?',
    answer: 'TypeScript is a superset of JavaScript that adds optional static typing and other features to the language. It is maintained by Microsoft and open-source contributors.',
    changed: 0
  },
  {
    question: 'What is CSS?',
    answer:
      'CSS (Cascading Style Sheets) is a language used for describing the presentation of web pages, including colors, layout, and fonts. It is used in conjunction with HTML and JavaScript to build web applications.',
    changed: 0
  },
  {
    question: 'What is HTML?',
    answer:
      'HTML (Hypertext Markup Language) is a markup language used for creating web pages and other documents that are viewed in a web browser. It defines the structure and content of a web page using a series of elements and attributes.',
    changed: 0
  },
  {
    question: 'What is JavaScript?',
    answer:
      'JavaScript is a programming language used for creating dynamic and interactive web pages. It is supported by all major web browsers and can also be used for server-sclassNamee programming.',
    changed: 0
  },
  {
    question: 'What is React?',
    answer:
      'React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of indivclassNameual developers and companies.',
    changed: 0
  },
  {
    question: "Is that all the faqs?",
    answer: "now its 7, so yeah.",
    changed:0
  }
]

export default function Home() {
  const [stuffhappened, setstuffhappened] = useState(0);
  const switchstack = (e, index) => {
    e.changed == 0 ? e.changed = 1 : e.changed = 0;
    stuffhappened == 0 ? setstuffhappened(1) : setstuffhappened(0);
  }

  return (
    <>
      <div className="hometitle">
        <div className="logo"></div>
        <h1 className="freshmancaucus">Freshman Causus</h1>
      </div>
      <div className="upcoming">
	{newsormags.map((nom, index)=> (
	    <div className={`nom nom${index}`}>
		<h3>{nom.title}</h3>
		<p>{nom.info}</p>
	    </div>
	    )
	)}
      </div>
      <div className="event">
        <h1 className="event-title">Events</h1>
        {events.map((event, index) => (
		<div className={`event event${index}`}>
		    <h4>{event.title}</h4>
		    <p>{event.info}</p>
		</div>
	    )
	)}	
      </div>
      <div className="FaQ">
        <div className="linebreak"></div>
        <h2 className="FaQtitle">F A Q</h2>
        <div className="faqholder">
        {faqs.map((faq, index) => ( 
          <div
            key={faq.question}
            className={`faq ${ index>3 && index%2==1 && faq.changed==1 ? 'stack1' : index>3 && index%2==0 && faq.changed==1 ? "stack2" : index>3 && faq.changed==0 ? "stack3" : `stack${index}`}  faq${index}`}
            onClick={() => switchstack(faq, index)}
          >
            <div className="faq-question">{faq.question} </div>
            <div className="faq-answer">{faq.answer}</div>
          </div>
        ))}
        </div>
      </div>
    </>
  );
}

