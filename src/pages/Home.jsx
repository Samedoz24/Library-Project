import React from "react";
import { Link } from "react-router-dom";
import { FaCrosshairs } from "react-icons/fa";
import styled, { keyframes } from "styled-components";

const rotate = keyframes`
from{
  transform: rotate(0deg);
}to{
  transform: rotate(360deg);
}
`;

const Loader = styled(FaCrosshairs)`
  animation: ${rotate} 1.3s linear infinite;
`;

const HomePageContainer = {
  padding: "40px",
  textAlign: "center",
  backgroundColor: "#f8f9fa",
  minHeight: "calc(100vh - 60px)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "flex-start",
  marginLeft: "25s0px",
};

const WelcomeSection = {
  marginBottom: "50px",
  color: "#343a40",
};

const SectionTitle = {
  fontSize: "1.8em",
  marginBottom: "50px",
  marginLeft: "100px",
  color: "#495057",
};

const SummaryGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
  gap: "25px",
  width: "100%",
  maxWidth: "960px",
  marginBottom: "50px",
  marginLeft: "200px",
  marginTop: "30x",
};

const SummaryCard = {
  backgroundColor: "#ffffff",
  padding: "25px",
  borderRadius: "10px",
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
  textAlign: "left",
  transition: "transform 0.2s ease-in-out",
  cursor: "pointer",
  border: "1px solid #e9ecef",
};

const CardTitle = {
  fontSize: "1.4em",
  color: "#343a40",
  display: "flex",
  alignItems: "center",
};

const CardIcon = {
  marginRight: "10px",
  fontSize: "1.2em",
};

const CardListItem = {
  listStyleType: "none",
  padding: "5px 0",
  color: "#6c757d",
  fontSize: "0.95em",
  borderBottom: "1px dotted #e9ecef",
};

const CardList = {
  padding: "0",
  margin: "0",
};

const ViewAllButton = {
  display: "inline-block",
  marginTop: "20px",
  padding: "10px 18px",
  backgroundColor: "#007bff",
  color: "white",
  textDecoration: "none",
  borderRadius: "5px",
  fontSize: "0.9em",
  transition: "background-color 0.2s ease-in-out",
};

const QuickActionsSection = {
  marginBottom: "40px",
  marginLeft: "150px",
};

const QuickActionButton = {
  padding: "12px 25px",
  backgroundColor: "#28a745", // Yeşil tonu
  color: "white",
  border: "none",
  borderRadius: "5px",
  fontSize: "1.1em",
  cursor: "pointer",
  margin: "0 10px",
  transition: "background-color 0.2s ease-in-out",
  textDecoration: "none",
};

/*
.quick-action-button:hover {
  background-color: #218838;
}
*/

function Home() {
  // Örnek veriler (gerçek uygulamada bunları context/API'dan çekmelisin)
  const recentNotes = [
    { id: 1, text: "Study fo exam" },
    { id: 2, text: "Drink coffee" },
    { id: 3, text: "Simple Past Tense learn" },
  ];

  const currentReadingBooks = [
    { id: 1, title: "Suç ve Ceza - Dostoyevski" },
    { id: 2, title: "İvan İlyiç'in Ölümü - Tolstoy" },
    { id: 3, title: "Devlet - Platon" },
  ];

  const upcomingTodos = [
    { id: 1, text: "Ödevleri Bitir" },
    { id: 2, text: "Proje Tasarla" },
    { id: 3, text: "Spor Yap (akşam)" },
  ];

  return (
    <div style={HomePageContainer}>
      <div style={WelcomeSection}>
        <h1
          style={{ fontSize: "2.5em", marginBottom: "7px", color: "#2c3e50" }}
        >
          WELCOME ! 👋
        </h1>
        <h4
          style={{
            fontSize: "1.1em",
            color: "#555",
            marginLeft: "150px",
            marginTop: "30px",
          }}
        >
          Tüm notlarınızı, Zamanınızı, Kitaplarınızı ve Yapılacaklar Listenizi
          buradan yönetin.
        </h4>
      </div>
      <br />
      <h3 style={{ marginLeft: "160px", backgroundColor: "#e8e8e8" }}>
        Zafer, "Zafer benimdir" diyebilenindir. Başarı ise, "Başaracağım" diye
        başlayarak sonunda "Başardım" diyebilenindir.
      </h3>
      <h4 style={{ marginLeft: "100px" }}> -ATATÜRK</h4>
      <br />
      <br />

      <h2 style={SectionTitle}>📌 Özet Paneli</h2>
      <div style={SummaryGrid}>
        <div style={SummaryCard}>
          <h3 style={CardTitle}>
            <span style={CardIcon}>📝</span> Son Notlar
          </h3>
          <br />
          {recentNotes.length > 0 ? (
            <ul style={CardList}>
              {recentNotes.slice(0, 3).map((note) => (
                <li key={note.id} style={CardListItem}>
                  {note.text}
                </li>
              ))}
            </ul>
          ) : (
            <p style={{ color: "#6c757d" }}>Henüz not yok.</p>
          )}
          <Link to="/note" style={ViewAllButton}>
            Tüm Notları Gör
          </Link>
        </div>

        <div style={SummaryCard}>
          <h3 style={CardTitle}>
            <span style={CardIcon}>📚</span>Okunacak Kitaplar
          </h3>
          <br />
          {currentReadingBooks.length > 0 ? (
            <ul style={CardList}>
              {currentReadingBooks.slice(0, 3).map(
                (
                  book // Sadece ilk 3 kitabı göster
                ) => (
                  <li key={book.id} style={CardListItem}>
                    {book.title}
                  </li>
                )
              )}
            </ul>
          ) : (
            <p style={{ color: "#6c757d" }}>Henüz kitap yok.</p>
          )}
          <Link to="/books" style={ViewAllButton}>
            Tüm Kitapları Gör
          </Link>
        </div>

        {/* To-Do Listesi Kartı */}
        <div style={SummaryCard}>
          <h3 style={CardTitle}>
            <span style={CardIcon}>✅</span> Yapılacaklar
          </h3>
          <br />
          {upcomingTodos.length > 0 ? (
            <ul style={CardList}>
              {upcomingTodos.slice(0, 3).map(
                (
                  todo // Sadece ilk 3 görevi göster
                ) => (
                  <li key={todo.id} style={CardListItem}>
                    {todo.text}
                  </li>
                )
              )}
            </ul>
          ) : (
            <p style={{ color: "#6c757d" }}>Henüz görev yok.</p>
          )}
          <Link to="/ToDoList" style={ViewAllButton}>
            Tüm Görevleri Gör
          </Link>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />

      <h2 style={SectionTitle}>⚡ Hızlı İşlemler</h2>
      <div style={QuickActionsSection}>
        <Link to="/note" style={QuickActionButton}>
          Yeni Not Ekle
        </Link>
        <Link to="/books" style={QuickActionButton}>
          Yeni Kitap Ekle
        </Link>
        <Link to="/ToDoList" style={QuickActionButton}>
          Yeni Görev Ekle
        </Link>
        <Link to="/Pomodoro" style={QuickActionButton}>
          Yeni Pomodoro
        </Link>
      </div>
      <h4
        style={{
          width: "105%",
          height: "20px",
          backgroundColor: "#e8e8e8",
          marginBottom: "-50px",
          textAlign: "center",
          marginLeft: "150px",
          fontFamily: "inherit",
        }}
      >
        Created By : Samed Öz ` Telefon : 538 912 96 93 ` Gmail :
        sametoz706@gmail.com <Loader />
      </h4>
    </div>
  );
}

export default Home;
