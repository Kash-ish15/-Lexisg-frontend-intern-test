export default function Answer({ answerData }) {
  if (!answerData) return null;

  return (
    <div className="p-4 bg-white shadow-md rounded-md border border-gray-300">
      <h2 className="text-lg font-semibold mb-2">Answer:</h2>
      <p className="text-gray-800 mb-4">{answerData.answer}</p>

      <h3 className="text-md font-semibold mb-2">Citations:</h3>
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
        ))}
      </ul>
    </div>
  );
}
