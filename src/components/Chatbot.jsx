import { useState, useRef, useEffect } from 'react';
import './Chatbot.css';

function Chatbot() {
  const [messages, setMessages] = useState([
    {
      text: "Xin chào! Tôi là chatbot chuyên về triết học Mác-Lênin. Tôi có thể giúp bạn hiểu về các khái niệm cơ bản, nguyên lý và ứng dụng của triết học Mác-Lênin. Hãy đặt câu hỏi cho tôi!",
      isBot: true
    }
  ]);
  const [inputText, setInputText] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const knowledgeBase = {
    "xin chào|chào|hello|hi": "Xin chào! Tôi rất vui được trò chuyện với bạn về triết học Mác-Lênin. Bạn muốn tìm hiểu về điều gì?",
    
    "duy vật biện chứng|biện chứng|dialectic": "Duy vật biện chứng là học thuyết về những quy luật vận động và phát triển phổ biến nhất của tự nhiên, xã hội và tư duy. Nó bao gồm ba quy luật cơ bản:\n\n1️⃣ Quy luật chuyển hóa từ lượng sang chất và ngược lại\n2️⃣ Quy luật thống nhất và đấu tranh của các mặt đối lập\n3️⃣ Quy luật phủ định của phủ định\n\nBạn muốn tìm hiểu sâu về quy luật nào?",
    
    "duy vật lịch sử|lịch sử|historical materialism": "Duy vật lịch sử là sự vận dụng nguyên lý duy vật biện chứng vào nghiên cứu xã hội và lịch sử loài người. Nó khẳng định:\n\n🔹 Phương thức sản xuất vật chất quyết định bản chất của đời sống xã hội\n🔹 Tồn tại xã hội quyết định ý thức xã hội\n🔹 Lực lượng sản xuất quyết định quan hệ sản xuất\n🔹 Cơ sở hạ tầng (kinh tế) quyết định kiến trúc thượng tầng (chính trị, pháp luật, tư tưởng)",
    
    "thực tiễn|practice|lý luận và thực tiễn": "Thực tiễn là hoạt động vật chất, có mục đích, mang tính lịch sử - xã hội của con người nhằm cải biến tự nhiên và xã hội.\n\n⚡ Vai trò của thực tiễn:\n• Cơ sở của nhận thức\n• Động lực của nhận thức\n• Mục đích của nhận thức\n• Tiêu chuẩn của chân lý\n\nThực tiễn và lý luận có quan hệ biện chứng với nhau.",
    
    "karl marx|marx|mác": "Karl Marx (1818-1883) là nhà triết học, kinh tế học và nhà tư tưởng cách mạng người Đức, người sáng lập chủ nghĩa Mác.\n\n📚 Tác phẩm quan trọng:\n• Tuyên ngôn của Đảng Cộng sản (1848)\n• Tư bản (Das Kapital) - 3 tập\n• Luận cương về Feuerbach\n• Hình thái ý thức\n\nMarx đã phát triển học thuyết về giá trị thизлишная, đấu tranh giai cấp và cách mạng xã hội chủ nghĩa.",
    
    "lenin|lênin": "Vladimir Ilyich Lenin (1870-1924) là nhà lãnh đạo cách mạng người Nga, người đã phát triển chủ nghĩa Mác trong điều kiện lịch sử mới.\n\n🌟 Đóng góp chính:\n• Học thuyết về đế quốc chủ nghĩa\n• Lý luận về cách mạng vô sản\n• Học thuyết về Đảng của giai cấp công nhân\n• Lãnh đạo Cách mạng Tháng Mười Nga thành công (1917)",
    
    "mâu thuẫn|đối lập|contradiction": "Mâu thuẫn là sự thống nhất và đấu tranh của các mặt đối lập trong mọi sự vật, hiện tượng.\n\n✨ Đặc điểm:\n• Mâu thuẫn là phổ biến, có mặt ở khắp nơi\n• Mâu thuẫn là nguồn gốc và động lực phát triển\n• Có mâu thuẫn chủ yếu và mâu thuẫn thứ yếu\n• Có mâu thuẫn đối kháng và không đối kháng\n\nGiải quyết đúng mâu thuẫn sẽ thúc đẩy sự phát triển.",
    
    "giai cấp|đấu tranh giai cấp|class struggle": "Đấu tranh giai cấp là động lực trực tiếp thúc đẩy sự phát triển của xã hội có giai cấp.\n\n⚔️ Các hình thức đấu tranh:\n• Đấu tranh kinh tế\n• Đấu tranh chính trị\n• Đấu tranh tư tưởng\n\nTrong xã hội tư bản chủ nghĩa, đấu tranh giai cấp diễn ra chủ yếu giữa giai cấp tư sản và giai cấp vô sản.",
    
    "chân lý|truth|sự thật": "Chân lý là sự phản ánh đúng đắn, khách quan hiện thực vào trong tư duy con người.\n\n🎯 Đặc điểm của chân lý:\n• Chân lý có tính khách quan\n• Chân lý có tính tuyệt đối và tương đối\n• Chân lý có tính cụ thể\n• Tiêu chuẩn của chân lý là thực tiễn",
    
    "phương thức sản xuất|mode of production": "Phương thức sản xuất là sự thống nhất giữa lực lượng sản xuất và quan hệ sản xuất.\n\n🏭 Lực lượng sản xuất bao gồm:\n• Con người lao động\n• Tư liệu lao động\n• Đối tượng lao động\n\n🤝 Quan hệ sản xuất là:\n• Quan hệ giữa người với người trong quá trình sản xuất\n• Được xác định bởi quan hệ sở hữu về tư liệu sản xuất",
    
    "cảm ơn|thank|thanks": "Rất vui được giúp bạn! Nếu bạn còn câu hỏi gì về triết học Mác-Lênin, đừng ngần ngại hỏi tôi nhé! 😊",
    
    "default": "Câu hỏi của bạn rất thú vị! Dựa vào những gì tôi biết về triết học Mác-Lênin, tôi khuyên bạn nên tìm hiểu thêm về:\n\n• Duy vật biện chứng\n• Duy vật lịch sử\n• Vai trò của thực tiễn\n• Các quy luật biện chứng\n• Đấu tranh giai cấp\n\nBạn có thể hỏi tôi về bất kỳ chủ đề nào trong số này!"
  };

  const getBotResponse = (userInput) => {
    const input = userInput.toLowerCase().trim();
    
    for (const [keywords, response] of Object.entries(knowledgeBase)) {
      if (keywords === 'default') continue;
      const keywordList = keywords.split('|');
      if (keywordList.some(keyword => input.includes(keyword))) {
        return response;
      }
    }
    
    return knowledgeBase.default;
  };

  const handleSend = () => {
    if (inputText.trim() === '') return;

    // Add user message
    const userMessage = { text: inputText, isBot: false };
    setMessages(prev => [...prev, userMessage]);

    // Get bot response
    setTimeout(() => {
      const botResponse = getBotResponse(inputText);
      const botMessage = { text: botResponse, isBot: true };
      setMessages(prev => [...prev, botMessage]);
    }, 500);

    setInputText('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const quickQuestions = [
    "Duy vật biện chứng là gì?",
    "Ai là Karl Marx?",
    "Thực tiễn là gì?",
    "Giải thích về mâu thuẫn"
  ];

  const handleQuickQuestion = (question) => {
    setInputText(question);
  };

  return (
    <div className="chatbot">
      <div className="chatbot-container">
        <div className="chatbot-header">
          <div className="bot-avatar">🤖</div>
          <div>
            <h3>Chatbot Triết Học Mác-Lênin</h3>
            <span className="bot-status">🟢 Đang hoạt động</span>
          </div>
        </div>

        <div className="quick-questions">
          <p>Câu hỏi gợi ý:</p>
          <div className="quick-buttons">
            {quickQuestions.map((question, index) => (
              <button
                key={index}
                onClick={() => handleQuickQuestion(question)}
                className="quick-button"
              >
                {question}
              </button>
            ))}
          </div>
        </div>

        <div className="messages-container">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`message ${message.isBot ? 'bot-message' : 'user-message'}`}
            >
              {message.isBot && <div className="message-avatar">🤖</div>}
              <div className="message-content">
                {message.text.split('\n').map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>
              {!message.isBot && <div className="message-avatar">👤</div>}
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        <div className="input-container">
          <textarea
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Nhập câu hỏi của bạn..."
            rows="2"
          />
          <button onClick={handleSend} className="send-button">
            ✈️ Gửi
          </button>
        </div>
      </div>
    </div>
  );
}

export default Chatbot;
