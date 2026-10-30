"use client";

import { useState } from "react";

export default function Home() {
  const [exam, setExam] = useState("SSC");
  const [year, setYear] = useState("2026");
  const [board, setBoard] = useState("Dhaka");
  const [roll, setRoll] = useState("");
  const [registration, setRegistration] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!roll.trim() || !registration.trim()) {
      setMessage("অনুগ্রহ করে রোল ও রেজিস্ট্রেশন নম্বর পূরণ করুন।");
      return;
    }

    setMessage(
      "ফর্মটি ঠিকভাবে পূরণ হয়েছে। প্রকৃত ফলাফল দেখাতে অনুমোদিত ফলাফল ডেটা সংযোগ করতে হবে।"
    );
  }

  const exams = [
    { name: "SSC", title: "মাধ্যমিক", icon: "📘" },
    { name: "HSC", title: "উচ্চমাধ্যমিক", icon: "🎓" },
    { name: "Dakhil", title: "দাখিল", icon: "📗" },
    { name: "Alim", title: "আলিম", icon: "📚" },
  ];

  return (
    <main className="premium-page">
      <header className="site-header">
        <div className="header-inner">
          <a href="#home" className="brand">
            <span className="brand-icon">RB</span>
            <span className="brand-text">
              <strong>RESULT BD</strong>
              <small>শিক্ষার তথ্য, সবার জন্য</small>
            </span>
          </a>

          <nav className="navigation">
            <a href="#home">হোম</a>
            <a href="#exams">পরীক্ষাসমূহ</a>
            <a href="#result">ফলাফল</a>
            <a href="#about">আমাদের সম্পর্কে</a>
          </nav>

          <a className="header-button" href="#result">
            ফলাফল খুঁজুন ↗
          </a>
        </div>
      </header>

      <section className="hero-section" id="home">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="status-dot" />
            শিক্ষার্থীদের জন্য ডিজিটাল প্ল্যাটফর্ম
          </div>

          <h1>
            তোমার সাফল্যের
            <br />
            <span>পরবর্তী ধাপ</span>
            <br />
            শুরু হোক এখানে।
          </h1>

          <p className="hero-description">
            SSC, HSC ও অন্যান্য পরীক্ষার ফলাফল অনুসন্ধানের জন্য
            একটি সহজ, আধুনিক ও ব্যবহারবান্ধব প্ল্যাটফর্ম।
          </p>

          <div className="hero-actions">
            <a href="#result" className="primary-button">
              ফলাফল অনুসন্ধান করুন <span>→</span>
            </a>
            <a href="#exams" className="secondary-button">
              পরীক্ষাসমূহ দেখুন
            </a>
          </div>

          <div className="hero-note">
            <span>✓</span> সহজ ব্যবহার
            <span>✓</span> মোবাইল-ফ্রেন্ডলি ডিজাইন
          </div>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="decor-circle circle-one" />
          <div className="decor-circle circle-two" />

          <div className="report-card">
            <div className="report-top">
              <div className="report-symbol">RB</div>
              <div>
                <strong>RESULT BD</strong>
                <small>ACADEMIC RESULT PORTAL</small>
              </div>
              <span className="report-check">✓</span>
            </div>

            <div className="report-divider" />

            <div className="report-heading">
              <span>🎓</span>
              <div>
                <strong>পরীক্ষার ফলাফল</strong>
                <small>তোমার শিক্ষাজীবনের নতুন ধাপ</small>
              </div>
            </div>

            <div className="report-stat">
              <div>
                <small>পরীক্ষা</small>
                <strong>SSC / HSC</strong>
              </div>
              <div>
                <small>সেশন</small>
                <strong>২০২৬</strong>
              </div>
            </div>

            <div className="report-bottom">
              <span>শিক্ষাই শক্তি</span>
              <span className="report-stars">✦ ✦ ✦</span>
            </div>
          </div>

          <div className="floating-chip chip-top">
            <span>✓</span> সহজ অনুসন্ধান
          </div>

          <div className="floating-chip chip-bottom">
            <span>📚</span> শিক্ষার্থীবান্ধব
          </div>
        </div>
      </section>

      <section className="exam-section" id="exams">
        <div className="section-heading">
          <span className="section-kicker">EXAM CATEGORIES</span>
          <h2>তোমার পরীক্ষাটি বেছে নাও</h2>
          <p>নিচের ক্যাটাগরিতে ক্লিক করলে ফর্মে পরীক্ষার নাম নির্বাচিত হবে।</p>
        </div>

        <div className="exam-grid">
          {exams.map((item) => (
            <button
              type="button"
              key={item.name}
              className={`exam-card ${exam === item.name ? "exam-card-active" : ""}`}
              onClick={() => {
                setExam(item.name);
                document
                  .getElementById("result")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <span className="exam-icon">{item.icon}</span>
              <strong>{item.name}</strong>
              <small>{item.title}</small>
              <span className="exam-arrow">↗</span>
            </button>
          ))}
        </div>
      </section>

      <section className="result-section" id="result">
        <div className="section-heading">
          <span className="section-kicker">RESULT SEARCH</span>
          <h2>পরীক্ষার ফলাফল দেখো</h2>
          <p>ফর্মে পরীক্ষার প্রয়োজনীয় তথ্য পূরণ করো।</p>
        </div>

        <div className="form-card">
          <div className="form-card-header">
            <div className="form-icon">⌕</div>
            <div>
              <h3>ফলাফল অনুসন্ধান</h3>
              <p>সবগুলো প্রয়োজনীয় তথ্য পূরণ করো</p>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="form-grid">
              <div className="field">
                <label htmlFor="exam">পরীক্ষার নাম</label>
                <select
                  id="exam"
                  value={exam}
                  onChange={(e) => setExam(e.target.value)}
                >
                  {exams.map((item) => (
                    <option key={item.name} value={item.name}>
                      {item.name}
                    </option>
                  ))}
                  <option value="JSC">JSC</option>
                  <option value="Vocational">ভোকেশনাল</option>
                </select>
              </div>

              <div className="field">
                <label htmlFor="year">পরীক্ষার বছর</label>
                <select
                  id="year"
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                >
                  {Array.from({ length: 15 }, (_, i) => 2026 - i).map(
                    (item) => (
                      <option key={item} value={String(item)}>
                        {item}
                      </option>
                    )
                  )}
                </select>
              </div>

              <div className="field">
                <label htmlFor="board">শিক্ষা বোর্ড</label>
                <select
                  id="board"
                  value={board}
                  onChange={(e) => setBoard(e.target.value)}
                >
                  <option value="Dhaka">ঢাকা</option>
                  <option value="Chattogram">চট্টগ্রাম</option>
                  <option value="Rajshahi">রাজশাহী</option>
                  <option value="Cumilla">কুমিল্লা</option>
                  <option value="Jashore">যশোর</option>
                  <option value="Barishal">বরিশাল</option>
                  <option value="Sylhet">সিলেট</option>
                  <option value="Dinajpur">দিনাজপুর</option>
                  <option value="Mymensingh">ময়মনসিংহ</option>
                  <option value="Madrasah">মাদ্রাসা</option>
                  <option value="Technical">কারিগরি</option>
                </select>
              </div>

              <div className="field">
                <label htmlFor="roll">রোল নম্বর</label>
                <input
                  id="roll"
                  type="text"
                  inputMode="numeric"
                  value={roll}
                  onChange={(e) => setRoll(e.target.value)}
                  placeholder="রোল নম্বর লিখো"
                />
              </div>

              <div className="field field-full">
                <label htmlFor="registration">রেজিস্ট্রেশন নম্বর</label>
                <input
                  id="registration"
                  type="text"
                  inputMode="numeric"
                  value={registration}
                  onChange={(e) => setRegistration(e.target.value)}
                  placeholder="রেজিস্ট্রেশন নম্বর লিখো"
                />
              </div>
            </div>

            <button type="submit" className="search-button">
              ফলাফল অনুসন্ধান করো <span>→</span>
            </button>

            {message && (
              <div className="form-message" role="status">
                {message}
              </div>
            )}

            <p className="privacy-note">
              🔒 এটি একটি ডেমো ফর্ম। প্রকৃত ফলাফলের জন্য অনুমোদিত ডেটা সংযোগ
              প্রয়োজন।
            </p>
          </form>
        </div>
      </section>

      <section className="about-section" id="about">
        <div className="about-icon">✦</div>
        <h2>সহজ হোক ফলাফল খোঁজা</h2>
        <p>
          RESULT BD একটি স্বাধীন ডেমো প্রকল্প। এটি সরকারি শিক্ষা বোর্ডের
          ওয়েবসাইট নয়। প্রকৃত ফলাফল দেখাতে নির্ভরযোগ্য ও অনুমোদিত ডেটা
          সংযুক্ত করতে হবে।
        </p>
      </section>

      <footer className="site-footer">
        <a href="#home" className="footer-brand">
          <span className="brand-icon">RB</span>
          <strong>RESULT BD</strong>
        </a>
        <p>© {new Date().getFullYear()} RESULT BD. স্বাধীন ডেমো প্রকল্প।</p>
      </footer>
    </main>
  );
}