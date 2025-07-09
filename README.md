How to run
1. Clone the Repository
   git clone https://github.com/Kash-ish15/-Lexisg-frontend-intern-test
   
2. npm install
   
3. npm run dev
   



Screenshot and screenrecording are in readme.md in -Lexisg-frontend-intern-test




🔗 Citation Linking – How It Works
This project simulates how legal AI tools (like Lexi) handle citations by linking AI-generated answers to relevant legal documents (PDFs). Each citation includes:

1.A quote or snippet from the document

2.The name of the source file (PDF)

3.A clickable link that opens the source (optionally using #page=... to simulate jumping to the correct section)

🧠Citation Flow
1.Simulated API Response

In App.jsx, a hardcoded API response is used to simulate a legal assistant’s output. The response is stored as a JavaScript object containing an answer and a citations array. Each citation includes text, source, and link fields

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

2.Citation Data Propagation

The response object is passed from App.jsx to Answer.jsx via props.
 * The answer is displayed at the top.
   
 * The citations array is iterated using .map() to render an unordered list.
 * 
Each citation includes:

✅ Quoted text

📄 Source file name

🔗 A clickable PDF link

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
 
 This structure mimics real-world legal tools by providing direct links to supporting documents based on AI-generated answers.
