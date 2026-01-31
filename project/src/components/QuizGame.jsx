import { useState } from 'react';
import './QuizGame.css';

function QuizGame() {
  const questions = [
    {
      question: "Ai là người sáng lập chủ nghĩa Mác?",
      options: ["Lenin", "Karl Marx", "Engels", "Hồ Chí Minh"],
      correct: 1
    },
    {
      question: "Quy luật nào KHÔNG thuộc ba quy luật cơ bản của biện chứng?",
      options: [
        "Quy luật chuyển hóa từ lượng sang chất",
        "Quy luật thống nhất và đấu tranh của các mặt đối lập",
        "Quy luật phủ định của phủ định",
        "Quy luật bảo toàn năng lượng"
      ],
      correct: 3
    },
    {
      question: "Theo triết học Mác-Lênin, cái gì là có trước?",
      options: ["Ý thức", "Vật chất", "Tư tưởng", "Tinh thần"],
      correct: 1
    },
    {
      question: "Thực tiễn đóng vai trò gì trong nhận thức?",
      options: [
        "Chỉ là kết quả của nhận thức",
        "Là cơ sở, động lực và mục đích của nhận thức",
        "Không liên quan đến nhận thức",
        "Chỉ là phương tiện của nhận thức"
      ],
      correct: 1
    },
    {
      question: "Duy vật lịch sử nghiên cứu về:",
      options: [
        "Lịch sử các vị vua chúa",
        "Lịch sử phát triển của tự nhiên",
        "Quy luật vận động và phát triển của xã hội loài người",
        "Lịch sử nghệ thuật"
      ],
      correct: 2
    },
    {
      question: "Tác phẩm 'Tư Bản' được viết bởi:",
      options: ["Friedrich Engels", "V.I. Lenin", "Karl Marx", "Joseph Stalin"],
      correct: 2
    },
    {
      question: "Cách mạng Tháng Mười Nga thành công vào năm nào?",
      options: ["1905", "1917", "1920", "1924"],
      correct: 1
    },
    {
      question: "Theo biện chứng, mâu thuẫn là:",
      options: [
        "Cần tránh và loại bỏ",
        "Động lực phát triển",
        "Điều xấu của xã hội",
        "Không có ý nghĩa"
      ],
      correct: 1
    },
    {
      question: "Phương thức sản xuất bao gồm:",
      options: [
        "Lực lượng sản xuất và quan hệ sản xuất",
        "Chỉ có công nghệ",
        "Chỉ có con người",
        "Chỉ có tư liệu sản xuất"
      ],
      correct: 0
    },
    {
      question: "Tiêu chuẩn của chân lý theo triết học Mác-Lênin là:",
      options: ["Lý luận", "Thực tiễn", "Kinh nghiệm", "Trực giác"],
      correct: 1
    }
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);

  const handleAnswerClick = (selectedIndex) => {
    if (isAnswered) return;

    setSelectedAnswer(selectedIndex);
    setIsAnswered(true);

    if (selectedIndex === questions[currentQuestion].correct) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
      setSelectedAnswer(null);
      setIsAnswered(false);
    } else {
      setShowScore(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setSelectedAnswer(null);
    setIsAnswered(false);
  };

  const getScoreMessage = () => {
    const percentage = (score / questions.length) * 100;
    if (percentage >= 90) return "Xuất sắc! Bạn là chuyên gia về triết học Mác-Lênin! 🌟";
    if (percentage >= 70) return "Rất tốt! Bạn có kiến thức vững về triết học Mác-Lênin! 👏";
    if (percentage >= 50) return "Khá tốt! Hãy tiếp tục học hỏi thêm! 📚";
    return "Hãy cố gắng học thêm về triết học Mác-Lênin nhé! 💪";
  };

  if (showScore) {
    return (
      <div className="quiz-game">
        <div className="score-section">
          <h2>Kết Quả Quiz</h2>
          <div className="score-display">
            <div className="score-circle">
              <span className="score-number">{score}</span>
              <span className="score-total">/ {questions.length}</span>
            </div>
            <p className="score-percentage">
              {Math.round((score / questions.length) * 100)}%
            </p>
          </div>
          <p className="score-message">{getScoreMessage()}</p>
          <button className="reset-button" onClick={resetQuiz}>
            🔄 Chơi Lại
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="quiz-game">
      <div className="quiz-container">
        <div className="quiz-header">
          <div className="question-count">
            Câu hỏi {currentQuestion + 1}/{questions.length}
          </div>
          <div className="score-tracker">
            Điểm: {score}
          </div>
        </div>

        <div className="question-section">
          <h3>{questions[currentQuestion].question}</h3>
        </div>

        <div className="answer-section">
          {questions[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswerClick(index)}
              className={`answer-button ${
                isAnswered
                  ? index === questions[currentQuestion].correct
                    ? 'correct'
                    : index === selectedAnswer
                    ? 'incorrect'
                    : ''
                  : ''
              }`}
              disabled={isAnswered}
            >
              {option}
            </button>
          ))}
        </div>

        {isAnswered && (
          <div className="next-section">
            <button className="next-button" onClick={handleNextQuestion}>
              {currentQuestion + 1 < questions.length ? 'Câu Tiếp Theo →' : 'Xem Kết Quả'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default QuizGame;
