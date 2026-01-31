import './InfoPage.css';

function InfoPage() {
  const sections = [
    {
      title: "Giới Thiệu Chung",
      content: "Triết học Mác-Lênin là hệ thống quan điểm triết học duy vật biện chứng và duy vật lịch sử do Karl Marx và Friedrich Engels sáng lập, sau đó được V.I. Lenin phát triển. Đây là nền tảng lý luận của chủ nghĩa Mác-Lênin và chủ nghĩa xã hội khoa học.",
      icon: "📖"
    },
    {
      title: "Chủ Nghĩa Duy Vật Biện Chứng",
      content: "Duy vật biện chứng là học thuyết về những quy luật vận động và phát triển phổ biến nhất của tự nhiên, xã hội và tư duy. Nó khẳng định rằng vật chất là có trước, ý thức là có sau và xuất phát từ vật chất.",
      icon: "⚛️"
    },
    {
      title: "Chủ Nghĩa Duy Vật Lịch Sử",
      content: "Duy vật lịch sử áp dụng nguyên lý duy vật biện chứng vào việc nghiên cứu xã hội và lịch sử loài người. Nó cho rằng phương thức sản xuất vật chất của đời sống xã hội quyết định quá trình sống xã hội, chính trị và tinh thần nói chung.",
      icon: "🏛️"
    },
    {
      title: "Vai Trò Thực Tiễn",
      content: "Thực tiễn là cơ sở, động lực và mục đích của nhận thức. Thực tiễn cũng là tiêu chuẩn của chân lý. Triết học Mác-Lênin nhấn mạnh vai trò của thực tiễn trong việc kiểm nghiệm và phát triển lý luận.",
      icon: "🔨"
    },
    {
      title: "Các Quy Luật Biện Chứng",
      content: "Ba quy luật cơ bản: 1) Quy luật chuyển hóa từ những thay đổi về lượng thành những thay đổi về chất và ngược lại. 2) Quy luật thống nhất và đấu tranh của các mặt đối lập. 3) Quy luật phủ định của phủ định.",
      icon: "⚖️"
    },
    {
      title: "Ý Nghĩa Hiện Đại",
      content: "Triết học Mác-Lênin vẫn giữ vai trò quan trọng trong việc phân tích và giải quyết các vấn đề của xã hội đương đại. Nó cung cấp phương pháp luận khoa học để nhận thức và cải tạo thế giới.",
      icon: "🌍"
    }
  ];

  return (
    <div className="info-page">
      <div className="info-header">
        <h2>Thông Tin Về Triết Học Mác-Lênin</h2>
        <p className="subtitle">Hệ thống lý luận cách mạng và khoa học</p>
      </div>
      
      <div className="info-grid">
        {sections.map((section, index) => (
          <div key={index} className="info-card">
            <div className="info-icon">{section.icon}</div>
            <h3>{section.title}</h3>
            <p>{section.content}</p>
          </div>
        ))}
      </div>

      <div className="key-figures">
        <h3>Các Nhà Tư Tưởng Chính</h3>
        <div className="figures-grid">
          <div className="figure-card">
            <h4>Karl Marx (1818-1883)</h4>
            <p>Người sáng lập chủ nghĩa Mác, tác giả của "Tư bản" và "Tuyên ngôn của Đảng Cộng sản".</p>
          </div>
          <div className="figure-card">
            <h4>Friedrich Engels (1820-1895)</h4>
            <p>Người bạn thân và cộng sự của Marx, đóng góp quan trọng vào việc hệ thống hóa học thuyết Mác.</p>
          </div>
          <div className="figure-card">
            <h4>V.I. Lenin (1870-1924)</h4>
            <p>Phát triển chủ nghĩa Mác trong điều kiện mới, lãnh đạo Cách mạng Tháng Mười Nga thành công.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoPage;
