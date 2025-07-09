import React from "react";
import "./books.css";
import styled, { keyframes } from "styled-components";
import { FaCrosshairs } from "react-icons/fa";

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

function Books() {
  return (
    <div className="main">
      <br />
      <h1 className="title">📚 Okunacak Kitaplar</h1>
      <br />
      <h4 className="article">
        Okumak İstediğiniz veya Okuğunuz Kitapları Burada Saklayın.
      </h4>
      <br />
      <div className="container">
        <div className="book-card">
          <img
            src="https://www.iskultur.com.tr/webp/2014/04/ivan-ilyicin-olumu-5.jpg"
            alt="Foto bulunamadı"
          />
          <h3>Kitap Adı:</h3>
          <h5>İvan ilyiçin ölümü</h5>
        </div>
        <div className="book-card">
          <img
            src="https://i.dr.com.tr/cache/600x600-0/originals/0000000222779-1.jpg"
            alt="Foto bulunamadı"
          />
          <h3>Kitap Adı:</h3>
          <h5>SUÇ ve CEZA</h5>
        </div>
        <div className="book-card">
          <img
            src="https://img.kitapyurdu.com/v1/getImage/fn:5723564/wh:true/wi:800"
            alt="Foto bulunamadı"
          />
          <h3>Kitap Adı:</h3>
          <h5>KENDİME DÜŞÜNCELER</h5>
        </div>
        <div className="book-card">
          <img
            src="https://img.kitapyurdu.com/v1/getImage/fn:53812/wh:true/miw:200/mih:200"
            alt="Foto bulunamadı"
          />
          <h3>Kitap Adı:</h3>
          <h5>MASUMİYET MÜZESİ</h5>
        </div>
        <div className="book-card">
          <img
            src="https://img.kitapyurdu.com/v1/getImage/fn:11364246/wh:true/wi:800"
            alt="Foto bulunamadı"
          />
          <h3>Kitap Adı:</h3>
          <h5>ETİK, TOPLUM, SİYASET</h5>
        </div>
        <div className="book-card">
          <img
            src="https://img.kitapyurdu.com/v1/getImage/fn:11462655/wh:true/wi:800"
            alt="Foto bulunamadı"
          />
          <h3>Kitap Adı:</h3>
          <h5>TUTUNAMAYANLAR</h5>
        </div>
        <div className="book-card">
          <img
            src="https://img.kitapyurdu.com/v1/getImage/fn:11262270/wh:true/wi:800"
            alt="Foto bulunamadı"
          />
          <h3>Kitap Adı:</h3>
          <h5>YABANCI</h5>
        </div>
        <div className="book-card">
          <img
            src="https://www.iskultur.com.tr/webp/2021/09/Babaya-Mektup-Sert-Kapak.png"
            alt="Foto bulunamadı"
          />
          <h3>Kitap Adı:</h3>
          <h5>BABAYA MEKTUP</h5>
        </div>
        <div className="book-card">
          <img
            src="https://img.kitapyurdu.com/v1/getImage/fn:147981/wh:true/wi:800"
            alt="Foto bulunamadı"
          />
          <h3>Kitap Adı:</h3>
          <h5>VADİDEKİ ZAMBAK</h5>
        </div>
        <div className="book-card">
          <img
            src="https://img.kitapyurdu.com/v1/getImage/fn:11590123/wh:true/wi:800"
            alt="Foto bulunamadı"
          />
          <h3>Kitap Adı:</h3>
          <h5>OKUMAK,YAZMAK ve YAŞAMAK ÜZERİNE</h5>
        </div>
        <div className="book-card">
          <img
            src="https://img.kitapyurdu.com/v1/getImage/fn:11409152/wh:true/wi:800"
            alt="Foto bulunamadı"
          />
          <h3>Kitap Adı:</h3>
          <h5>HATA NEREDEYDİ</h5>
        </div>
        <div className="book-card">
          <img
            src="https://www.iskultur.com.tr/webp/2023/06/satranc-1.jpg"
            alt="Foto bulunamadı"
          />
          <h3>Kitap Adı:</h3>
          <h5>SATRANÇ</h5>
        </div>
      </div>
      <h4
        style={{
          width: "105%",
          marginLeft: "-60px",
          height: "20px",
          fontFamily: "inherit",
          backgroundColor: "#e8e8e8",
          marginBottom: "-50px",
          textAlign: "center",
        }}
      >
        Created By : Samed Öz ` Telefon : 538 912 96 93 ` Gmail :
        sametoz706@gmail.com <Loader />
      </h4>
    </div>
  );
}

export default Books;
