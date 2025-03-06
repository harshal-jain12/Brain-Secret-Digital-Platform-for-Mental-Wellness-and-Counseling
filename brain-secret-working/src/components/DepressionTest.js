import React, { useState } from "react";
import jsPDF from "jspdf"; // Library for PDF generation
import "jspdf-autotable"; // For table formatting
import "../css/DepressionTest.css";

const DepressionTest = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const questions = [
    {
      id: 1,
      question: "How often do you feel down, depressed, or hopeless?",
      options: [
        { text: "Not at all", weight: 0 },
        { text: "Several days", weight: 1 },
        { text: "More than half the days", weight: 2 },
        { text: "Nearly every day", weight: 3 },
      ],
    },
    {
      id: 2,
      question: "How often do you have little interest or pleasure in doing things?",
      options: [
        { text: "Not at all", weight: 0 },
        { text: "Several days", weight: 1 },
        { text: "More than half the days", weight: 2 },
        { text: "Nearly every day", weight: 3 },
      ],
    },
    {
      id: 3,
      question: "How often do you feel tired or have little energy?",
      options: [
        { text: "Not at all", weight: 0 },
        { text: "Several days", weight: 1 },
        { text: "More than half the days", weight: 2 },
        { text: "Nearly every day", weight: 3 },
      ],
    },
    {
      id: 4,
      question: "How often do you feel bad about yourself or feel like a failure?",
      options: [
        { text: "Not at all", weight: 0 },
        { text: "Several days", weight: 1 },
        { text: "More than half the days", weight: 2 },
        { text: "Nearly every day", weight: 3 },
      ],
    },
    {
      id: 5,
      question: "How often do you have trouble concentrating on daily tasks?",
      options: [
        { text: "Not at all", weight: 0 },
        { text: "Several days", weight: 1 },
        { text: "More than half the days", weight: 2 },
        { text: "Nearly every day", weight: 3 },
      ],
    },
    {
      id: 6,
      question: "How often do you feel restless or unable to relax?",
      options: [
        { text: "Not at all", weight: 0 },
        { text: "Several days", weight: 1 },
        { text: "More than half the days", weight: 2 },
        { text: "Nearly every day", weight: 3 },
      ],
    },
    {
      id: 7,
      question: "Do you experience changes in appetite or weight?",
      options: [
        { text: "Not at all", weight: 0 },
        { text: "Several days", weight: 1 },
        { text: "More than half the days", weight: 2 },
        { text: "Nearly every day", weight: 3 },
      ],
    },
    {
      id: 8,
      question: "Do you have trouble sleeping or sleep too much?",
      options: [
        { text: "Not at all", weight: 0 },
        { text: "Several days", weight: 1 },
        { text: "More than half the days", weight: 2 },
        { text: "Nearly every day", weight: 3 },
      ],
    },
    {
      id: 9,
      question: "How often do you feel worthless or guilty?",
      options: [
        { text: "Not at all", weight: 0 },
        { text: "Several days", weight: 1 },
        { text: "More than half the days", weight: 2 },
        { text: "Nearly every day", weight: 3 },
      ],
    },
    {
      id: 10,
      question: "How often do you feel irritable or easily annoyed?",
      options: [
        { text: "Not at all", weight: 0 },
        { text: "Several days", weight: 1 },
        { text: "More than half the days", weight: 2 },
        { text: "Nearly every day", weight: 3 },
      ],
    },
  ];

  const handleAnswerChange = (answer, weight) => {
    setAnswers({
      ...answers,
      [currentQuestionIndex]: { answer, weight },
    });
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setIsSubmitted(true);
    }
  };

  const handleBack = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const progressPercentage = ((currentQuestionIndex + 1) / questions.length) * 100;

  const calculateResult = () => {
    const totalMarks = questions.length * 3; // Max weight is 3 per question
    const obtainedMarks = Object.values(answers).reduce((sum, answer) => sum + (answer?.weight || 0), 0);
    const suggestion = obtainedMarks >= totalMarks / 2 ? " Counseling may not be necessary at this time" : "It is recommended to seek counseling.";
    return { obtainedMarks, totalMarks, suggestion };
  };

  const handleDownloadReport = () => {
    const { obtainedMarks, totalMarks, suggestion } = calculateResult();

    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text("Depression Test Report", 14, 20);

    doc.setFontSize(12);
    doc.text(`Obtained Marks: ${obtainedMarks}`, 14, 30);
    doc.text(`Total Marks: ${totalMarks}`, 14, 40);
    doc.text(`Suggestion: ${suggestion}`, 14, 50);

    // Add answers table
    const tableData = questions.map((question, index) => [
      question.question,
      answers[index]?.answer || "Not Answered",
    ]);

    doc.autoTable({
      head: [["Question", "Your Answer"]],
      body: tableData,
      startY: 60,
    });

    doc.save("Depression_Test_Report.pdf");
  };

  return (
    <div className="test-container">
      {!isSubmitted ? (
        <div>
          <h1 className="Depression-h1"> Test</h1>
          <div className="progress-bar">
            <div className="progress" style={{ width: `${progressPercentage}%` }}></div>
          </div>
          <h2>Question {currentQuestionIndex + 1} of {questions.length}</h2>
          <p className="question">{questions[currentQuestionIndex].question}</p>
          <div className="options">
            {questions[currentQuestionIndex].options.map((option, index) => (
              <label key={index} className="option">
                <input
                  type="radio"
                  name={`question-${currentQuestionIndex}`}
                  value={option.text}
                  onChange={() => handleAnswerChange(option.text, option.weight)}
                  checked={answers[currentQuestionIndex]?.answer === option.text}
                />
                {option.text}
              </label>
            ))}
          </div>
          <div className="navigation-buttons">
            <button className="Depression-button" onClick={handleBack} disabled={currentQuestionIndex === 0}>
              Back
            </button>
            <button className="Depression-button" onClick={handleNext}>
              {currentQuestionIndex === questions.length - 1 ? "Submit" : "Next"}
            </button>
          </div>
        </div>
      ) : (
        <div className="results">
          <h2 className="Depression-h2">Your Test Results</h2>
          <ul>
            {questions.map((question, index) => (
              <li key={index}>
                <strong>{question.question}</strong> <br />
                Your Answer: {answers[index]?.answer || "Not Answered"}
              </li>
            ))}
          </ul>
          <button className="Depression-button" onClick={handleDownloadReport}>
            Download Report
          </button>
        </div>
      )}
    </div>
  );
};

export default DepressionTest;








// import React, { useState } from "react";
// import "../css/DepressionTest.css";

// const DepressionTest = () => {
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [answers, setAnswers] = useState({});
//   const [isSubmitted, setIsSubmitted] = useState(false);

//   const questions = [
//     {
//       id: 1,
//       question: "How often do you feel down, depressed, or hopeless?",
//       options: ["Not at all", "Several days", "More than half the days", "Nearly every day"],
//     },
//     {
//       id: 2,
//       question: "How often do you have little interest or pleasure in doing things?",
//       options: ["Not at all", "Several days", "More than half the days", "Nearly every day"],
//     },
//     {
//       id: 3,
//       question: "How often do you feel tired or have little energy?",
//       options: ["Not at all", "Several days", "More than half the days", "Nearly every day"],
//     },
//     {
//       id: 4,
//       question: "How often do you feel bad about yourself or feel like a failure?",
//       options: ["Not at all", "Several days", "More than half the days", "Nearly every day"],
//     },
//     {
//       id: 5,
//       question: "How often do you have trouble concentrating on daily tasks?",
//       options: ["Not at all", "Several days", "More than half the days", "Nearly every day"],
//     },
//     {
//       id: 6,
//       question: "How often do you feel restless or unable to relax?",
//       options: ["Not at all", "Several days", "More than half the days", "Nearly every day"],
//     },
//     {
//       id: 7,
//       question: "Do you experience changes in appetite or weight?",
//       options: ["Not at all", "Several days", "More than half the days", "Nearly every day"],
//     },
//     {
//       id: 8,
//       question: "Do you have trouble sleeping or sleep too much?",
//       options: ["Not at all", "Several days", "More than half the days", "Nearly every day"],
//     },
//     {
//       id: 9,
//       question: "Do you feel tired or have little energy?",
//       options: ["Not at all", "Several days", "More than half the days", "Nearly every day"],
//     },
//     {
//       id: 10,
//       question: "Do you have difficulty concentrating on things, such as reading or watching TV?",
//       options: ["Not at all", "Several days", "More than half the days", "Nearly every day"],
//     },
//   ];

//   const handleAnswerChange = (answer) => {
//     setAnswers({
//       ...answers,
//       [currentQuestionIndex]: answer,
//     });
//   };

//   const handleNext = () => {
//     if (currentQuestionIndex < questions.length - 1) {
//       setCurrentQuestionIndex(currentQuestionIndex + 1);
//     } else {
//       setIsSubmitted(true);
//     }
//   };

//   const handleBack = () => {
//     if (currentQuestionIndex > 0) {
//       setCurrentQuestionIndex(currentQuestionIndex - 1);
//     }
//   };

//   const progressPercentage = ((currentQuestionIndex + 1) / questions.length) * 100;

//   const handleSaveResults = () => {
//     // Mock saving to the database
//     console.log("Saving results to database:", answers);
//     alert("Your results have been saved successfully!");
//   };

//   return (
//     <div className="test-container">
//       {!isSubmitted ? (
//         <div>
//           <h1 className="Depression-h1"> Test</h1>
//           <div className="progress-bar">
//             <div
//               className="progress"
//               style={{ width: `${progressPercentage}%` }}
//             ></div>
//           </div>
//           <h2>
//             Question {currentQuestionIndex + 1} of {questions.length}
//           </h2>
//           <p className="question">
//             {questions[currentQuestionIndex].question}
//           </p>
//           <div className="options">
//             {questions[currentQuestionIndex].options.map((option, index) => (
//               <label key={index} className="option">
//                 <input
//                   type="radio"
//                   name={`question-${currentQuestionIndex}`}
//                   value={option}
//                   onChange={() => handleAnswerChange(option)}
//                   checked={answers[currentQuestionIndex] === option}
//                 />
//                 {option}
//               </label>
//             ))}
//           </div>
//           <div className="navigation-buttons">
//             <button className="Depression-button" onClick={handleBack} disabled={currentQuestionIndex === 0}>
//               Back
//             </button>
//             <button className="Depression-button" onClick={handleNext}>
//               {currentQuestionIndex === questions.length - 1
//                 ? "Submit"
//                 : "Next"}
//             </button>
//           </div>
//         </div>
//       ) : (
//         <div className="results">
//           <h2 className="Depression-h2">Your Test Results</h2>
//           <ul>
//             {questions.map((question, index) => (
//               <li key={index}>
//                 <strong>{question.question}</strong> <br />
//                 Your Answer: {answers[index] || "Not Answered"}
//               </li>
//             ))}
//           </ul>
//           <button className="Depression-button" onClick={handleSaveResults}>Save Results</button>
          
//           <a href="/DepressionResult" className="Depression-button">
//           View Results
//           </a>
//         </div>
//       )}
//     </div>
//   );
// };

// export default DepressionTest;

