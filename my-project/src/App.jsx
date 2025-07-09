import { useState } from "react";
import Input from "./Input.jsx";
import Answer from "./Answer.jsx";

export default function App() {
  const [question, setQuestion] = useState("");
  const [answerData, setAnswerData] = useState(null);
  const  [loading, setLoading] = useState(false);


  const handleQuestionSubmit = (userQuestion) => {
    setQuestion(userQuestion);
    setLoading(true);
    setAnswerData(null);
    // Simulate API response based on question
    setTimeout(()=> {
    const response = {
      answer: " Yes, under Section 166 of the Motor Vehicles Act, 1988, the claimants are entitled to an addition for future prospects even when the deceased was self-employed and aged 54–55 years at the time of the accident. In Dani Devi v. Pritam Singh, the Court held that 10% of the deceased’s annual income should be added as future prospects",
      citations: [
        {
          text: "as the age of the deceased at the time of accident was held to be about 54-55 years by the learned Tribunal, being self-employed, as such, 10% of annual income should have been awarded on account of future prospects",
          source: "Dani_Devi_v_Pritam_Singh.pdf",
          link: "https://lexisingapore-my.sharepoint.com/:b:/g/personal/harshit_lexi_sg/EdOegeiR_gdBvQxdyW4xE6oBCDgj5E4Bo5wjvhPHpqgIuQ?e=TEu4vz"
        }
      ]
    };

    setAnswerData(response);
    setLoading(false);
  }, 1500);
  };

  return (
    <div className="flex flex-col h-screen p-4 max-w-2xl mx-auto">
      <div className="flex-1 overflow-y-auto">
        {/* Question at top */}
        {question && (
          <div className="mb-4 p-4 bg-blue-100 text-blue-900 rounded-md shadow">
            <strong>You asked:</strong> {question}
          </div>
        )}

        {/* Answer below the question */}
        <Answer answerData={answerData} />
      </div>

      {/* Input stays at the bottom */}
      <Input onSubmit={handleQuestionSubmit} />
    </div>
  );
}

