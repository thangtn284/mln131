import React, { useEffect } from 'react';
import './InfoPage.css';

function InfoPage() {
  
  // Hiệu ứng Fade-in khi cuộn
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = 1;
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, { threshold: 0.1 });

    const cards = document.querySelectorAll('.bento-card, .hero-title, .feature-list, .summary-box');
    cards.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="info-page-container">
      
      {/* --- 1. HERO SECTION --- */}
      <section className="hero-section">
        <span className="hero-tagline">Triết học Mác-Lênin</span>
        <h1 className="hero-title">Dân Chủ &<br/>Nhà Nước XHCN</h1>
        <p className="hero-desc">
          Nghiên cứu về quyền lực nhân dân, bản chất chế độ và con đường xây dựng xã hội công bằng, văn minh.
        </p>
      </section>

      {/* --- 2. QUAN NIỆM VỀ DÂN CHỦ (CHI TIẾT) --- */}
      <section className="content-section">
        <div className="section-header">
          <h2>1. Quan Niệm Về Dân Chủ</h2>
          <p>Nguồn gốc và ba phương diện cơ bản của phạm trù dân chủ.</p>
        </div>
        
        <div className="bento-grid">
          {/* Nguồn gốc */}
          <div className="bento-card span-12" style={{background: 'linear-gradient(135deg, #f9f9f9 0%, #f0f2f5 100%)'}}>
            <div className="card-icon">📜</div>
            <h3>Nguồn Gốc Thuật Ngữ</h3>
            <p>
              Ra đời khoảng thế kỷ VII – VI TCN tại Hy Lạp cổ đại. 
              <br/><strong>"Demokratos"</strong> = <strong>Demos</strong> (Nhân dân) + <strong>Kratos</strong> (Quyền lực).
              <br/>👉 Nghĩa là: <em>Quyền lực thuộc về nhân dân.</em>
            </p>
          </div>

          {/* 3 Phương diện - Chia 3 cột đều nhau */}
          <div className="bento-card span-4">
            <div className="card-icon">🌟</div>
            <h3>Giá Trị Xã Hội</h3>
            <p>Là quyền cơ bản của con người. Là kết quả cuộc đấu tranh lâu dài của nhân dân lao động chống áp bức, bóc lột.</p>
          </div>

          <div className="bento-card span-4">
            <div className="card-icon">🏛️</div>
            <h3>Phạm Trù Chính Trị</h3>
            <p>Là một hình thức nhà nước, một thiết chế chính trị thừa nhận quyền tự do, bình đẳng của công dân trước pháp luật.</p>
          </div>

          <div className="bento-card span-4">
            <div className="card-icon">⏳</div>
            <h3>Phạm Trù Lịch Sử</h3>
            <p>Dân chủ gắn với sự ra đời của nhà nước. Nó sẽ mất đi (tiêu vong) khi xã hội không còn giai cấp và nhà nước.</p>
          </div>
        </div>
      </section>

      {/* --- 3. BẢN CHẤT DÂN CHỦ XHCN --- */}
      <section className="content-section">
        <div className="section-header">
          <h2>2. Bản Chất Dân Chủ XHCN</h2>
          <p>Nền dân chủ cao hơn về chất so với dân chủ tư sản.</p>
        </div>
        
        <div className="bento-grid">
          {/* Chính trị - Quan trọng nhất (8 cột) */}
          <div className="bento-card span-8">
            <div className="card-icon">🚩</div>
            <h3>Bản Chất Chính Trị</h3>
            <p>
              • Dưới sự lãnh đạo của <strong>Giai cấp công nhân</strong> (thông qua Đảng Cộng sản).<br/>
              • Thực hiện quyền lực của toàn thể nhân dân lao động.<br/>
              • Nhân dân có quyền giới thiệu đại biểu, tham gia quản lý và đóng góp ý kiến vào công việc Nhà nước.
            </p>
          </div>

          {/* Kinh tế (4 cột) */}
          <div className="bento-card span-4">
            <div className="card-icon">🏭</div>
            <h3>Bản Chất Kinh Tế</h3>
            <p>Dựa trên chế độ <strong>công hữu</strong> về tư liệu sản xuất. Thực hiện phân phối theo kết quả lao động là chủ yếu.</p>
          </div>

          {/* Tư tưởng văn hóa (Full 12 cột để nhấn mạnh nền tảng) */}
          <div className="bento-card span-12">
            <div className="card-icon">🧠</div>
            <h3>Tư Tưởng - Văn Hóa - Xã Hội</h3>
            <p>
              • Lấy hệ tư tưởng <strong>Mác - Lênin</strong> làm chủ đạo.<br/>
              • Kế thừa tinh hoa văn hóa nhân loại và truyền thống dân tộc.<br/>
              • Mục tiêu: Giải phóng con người khỏi áp bức, bóc lột và bất công.
            </p>
          </div>
        </div>
      </section>

      {/* --- 4. NHÀ NƯỚC XHCN (CHI TIẾT CHỨC NĂNG) --- */}
      <section className="content-section">
        <div className="section-header">
          <h2>3. Nhà Nước Xã Hội Chủ Nghĩa</h2>
          <p>Tổ chức quyền lực mới của nhân dân.</p>
        </div>

        <div className="bento-grid">
           {/* Sự ra đời */}
           <div className="bento-card span-12">
             <h3>🌱 Sự Ra Đời</h3>
             <p>Là kết quả của cuộc cách mạng XHCN. Là kiểu nhà nước mới, nơi quyền lực thuộc về nhân dân, là công cụ để xây dựng xã hội mới.</p>
           </div>

           {/* Chức năng Trấn áp (4 cột) */}
           <div className="bento-card span-4" style={{backgroundColor: '#fff5f5'}}>
            <div className="card-icon">🛡️</div>
            <h3>Chức Năng Giai Cấp (Trấn Áp)</h3>
            <p>Sử dụng sức mạnh cưỡng chế để bảo vệ thành quả cách mạng, giữ gìn trật tự an ninh, chống lại sự phản kháng của các thế lực thù địch.</p>
          </div>

          {/* Chức năng Xây dựng (8 cột) - Quan trọng */}
          <div className="bento-card span-8" style={{backgroundColor: '#f0fff4'}}>
            <div className="card-icon">🏗️</div>
            <h3>Chức Năng Xã Hội (Tổ Chức & Xây Dựng)</h3>
            <p>
              <strong>Đây là chức năng căn bản nhất.</strong><br/>
              Cải tạo xã hội cũ, xây dựng xã hội mới trên mọi lĩnh vực: Kinh tế, Văn hóa, Giáo dục, Y tế... nhằm thỏa mãn nhu cầu của nhân dân.
            </p>
          </div>
        </div>
      </section>

      {/* --- 5. THỰC TIỄN VIỆT NAM (SÁNG TẠO) --- */}
      <section className="content-section">
        <div className="section-header">
          <h2>4. Thực Tiễn Tại Việt Nam</h2>
          <p>Vận dụng sáng tạo vào điều kiện cụ thể của đất nước.</p>
        </div>

        {/* Motto Banner */}
        <div className="bento-card span-12" style={{textAlign: 'center', background: '#240b36', color: 'white', marginBottom: '24px'}}>
          <h3 style={{color: '#f1c40f', fontSize: '1.8rem'}}>
            "Dân biết, dân bàn, dân làm, dân kiểm tra, dân giám sát, dân thụ hưởng"
          </h3>
          <p style={{color: 'rgba(255,255,255,0.8)'}}>Phương châm thực hiện dân chủ ở cơ sở</p>
        </div>

        <div className="bento-grid" style={{marginBottom: '24px'}}>
           {/* Hình thức thực hiện */}
           <div className="bento-card span-6">
             <div className="card-icon">🗣️</div>
             <h3>Dân Chủ Trực Tiếp</h3>
             <p>Nhân dân trực tiếp thảo luận, góp ý, biểu quyết các vấn đề quan trọng của Nhà nước và địa phương (Trưng cầu dân ý, họp tổ dân phố...).</p>
           </div>
           <div className="bento-card span-6">
             <div className="card-icon">🗳️</div>
             <h3>Dân Chủ Gián Tiếp (Đại Diện)</h3>
             <p>Nhân dân bầu ra người đại diện thay mặt mình thực hiện quyền lực (Đại biểu Quốc hội, Hội đồng nhân dân các cấp).</p>
           </div>
        </div>

        {/* 6 Đặc điểm - Feature List */}
        <div className="feature-list">
          <h3>6 Đặc Điểm Nhà Nước Pháp Quyền XHCN Việt Nam</h3>
          <div className="feature-grid-row">
            {[
              "Nhà nước của dân, do dân, vì dân.",
              "Quyền lực thống nhất, có sự phân công, phối hợp và kiểm soát.",
              "Thượng tôn Hiến pháp & Pháp luật.",
              "Do Đảng Cộng sản Việt Nam lãnh đạo.",
              "Tôn trọng và bảo đảm quyền con người.",
              "Nguyên tắc tập trung dân chủ."
            ].map((item, index) => (
              <div key={index} className="feature-item">
                <div className="check-circle">{index + 1}</div>
                <span className="feature-text">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 6. TỔNG KẾT --- */}
      <section className="summary-box">
        <div className="summary-content">
          <h2>Mối Quan Hệ Biện Chứng</h2>
          <div style={{margin: '2rem 0', fontStyle: 'italic', color: '#555'}}>
            <p>🔄 <strong>Dân chủ XHCN</strong> là cơ sở, nền tảng để xây dựng Nhà nước.</p>
            <p>🏛️ <strong>Nhà nước XHCN</strong> là công cụ, phương thức để thực thi quyền làm chủ của dân.</p>
          </div>
          <button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            Quay Lại Đầu Trang ⬆
          </button>
        </div>
      </section>

    </div>
  );
}

export default InfoPage;