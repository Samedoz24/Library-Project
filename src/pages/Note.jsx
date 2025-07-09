import React, { useState, useEffect } from "react";
import styled from "styled-components";

const MyButton = styled.button`
  background-color: #1c4cc6;
  color: white;
  width: 90px;
  height: 30px;
  border-radius: 6px;
  font-size: large;
  font-family: sans-serif;
`;

const MyInput = styled.input`
  width: 250px;
  height: 25px;
  border-radius: 7px;
  margin-left: 90px;
  margin-right: 20px;
`;

const PageWrapper = styled.div``;

function Note() {
  const [note, setNote] = useState("");
  const [noteList, setNoteList] = useState([]);

  // Sayfa açıldığında localStorage'dan notları al
  useEffect(() => {
    const savedNotes = localStorage.getItem("my-notes");
    if (savedNotes) {
      setNoteList(JSON.parse(savedNotes));
    }
  }, []);

  // Not listesi her değiştiğinde localStorage'a kaydet
  useEffect(() => {
    localStorage.setItem("my-notes", JSON.stringify(noteList));
  }, [noteList]);

  function handleClick() {
    if (note.trim() !== "") {
      const newNote = {
        id: Date.now(), // her zaman benzersiz id
        text: note,
      };

      setNoteList([...noteList, newNote]);
      setNote("");
    }
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      handleClick();
    }
  }

  function deleteNote(id) {
    const updatedList = noteList.filter((item) => item.id !== id);
    setNoteList(updatedList);
  }

  return (
    <PageWrapper>
      <br />
      <br />
      <br />
      <h2
        style={{
          display: "flex",
          justifyContent: "center",
          fontSize: "30px",
          color: "#2c3e50",
          marginLeft: "150px",
          marginBottom: "50px",
        }}
      >
        📝 NOT DEFTERİ
      </h2>
      <h3 style={{ color: "black", textAlign: "center", marginLeft: "170px" }}>
        Notlarınızı Burada Saklayın.
      </h3>
      <br />
      <br />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginLeft: "100px",
          marginBottom: "100px",
        }}
      >
        <MyInput
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="Not Ekle..."
          onKeyDown={handleKeyDown}
        />
        <MyButton onClick={handleClick}>Ekle</MyButton>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h1
          style={{
            fontFamily: "sans-serif",
            fontSize: "32px",
            fontWeight: "normal",
            color: "#2c3e50",
          }}
        >
          NOTLARIM
        </h1>
      </div>
      <hr style={{ height: "3px", backgroundColor: "#2c3e50" }} />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <br />
        {noteList.map((item) => (
          <div
            key={item.id}
            style={{
              display: "flex",
              alignItems: "center",
              fontSize: "28px",
              color: "black",
              gap: "20px",
              padding: "10px 20px",
              borderRadius: "10px",
              backgroundColor: "#f2f2f2", // Açık gri arka plan
              width: "500px",
              marginLeft: "200px",
            }}
          >
            - {item.text}
            <button
              style={{
                backgroundColor: "#e74c3c",
                color: "white",
                border: "none",
                borderRadius: "4px",
                padding: "6px 10px",
                fontSize: "14px",
                cursor: "pointer",
                marginLeft: "auto", // butonu sağa yaslar
              }}
              onClick={() => deleteNote(item.id)}
            >
              DELETE 🗑️
            </button>
          </div>
        ))}
      </div>
    </PageWrapper>
  );
}

export default Note;
