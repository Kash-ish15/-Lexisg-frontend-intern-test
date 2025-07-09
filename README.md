How to run
1. Clone the Repository
   git clone https://github.com/Kash-ish15/-Lexisg-frontend-intern-test
2. npm install
3. npm run dev

Screenshot and screenrecording are in readme.md in -Lexisg-frontend-intern-test


🔗 Citation Linking – How It Works
This project simulates how legal AI tools (like Lexi) handle citations by linking AI-generated answers to real legal documents (PDFs).
Each citation contains:

Citation Flow
Simulated API Response
In App.jsx, a hardcoded response is used to simulate an API that returns an answer with citations:
The content of response it stored in array form with object like  key value pair for text, source and link.

Copy code
const response = {
  answer: "Yes, under Section 166 of the Motor Vehicles Act, 1988...",
  citations: [
    {
      text: "As the age of the deceased at the time of accident was held to be about 54–55 years...",
      source: "Dani_Devi_v_Pritam_Singh.pdf",
      link: "https://example.com/Dani_Devi.pdf#page=4"
    }
  ]
};
Citation Data Propagation
The response object is passed down from App.jsx to Answer.jsx via props. Citations are displayed below the answer.

In Answer.jsx, each citation is rendered with: using map method that stores in an unordered list
Quoted text
Source file name
A link (usually with #page=...) that opens the PDF to the relevant section

Example rendering:
 <ul className="list-disc pl-5 space-y-2">
        {answerData.citations.map((citation, index) => (
          <li key={index}>
            <p className="text-gray-700">{citation.text}</p>
            <a
              href={citation.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline text-sm"
            >
              Source: {citation.source}
            </a>
          </li>
 </ul>
