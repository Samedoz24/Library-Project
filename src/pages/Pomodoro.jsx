import React, { useState, useEffect, useRef } from "react";
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

const PomodoroContainer = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "40px",
  backgroundColor: "#f8f9fa",
  minHeight: "calc(100vh - 60px)",
  color: "#343a40",
  fontFamily: "Arial, sans-serif",
};

const TimerWrapper = {
  position: "relative",
  width: "350px", // Dairenin genişliği
  height: "350px", // Dairenin yüksekliği
  marginBottom: "30px",
};

const SvgContainer = {
  width: "100%",
  height: "100%",
  transform: "rotate(-90deg)", // Çemberin başlangıç noktasını yukarı almak için
};

const CircleBackground = {
  fill: "none",
  stroke: "#e0e0e0", // Arka plan çember rengi (hafif gri)
  strokeWidth: "17", // Çember kalınlığı
};

// 👇 BURADA DEĞİŞİKLİK YAPILDI: isBreak durumuna göre renk belirlenecek
const getCircleProgressStyle = (dashoffset, isBreakMode) => ({
  fill: "none",
  stroke: isBreakMode ? "#17a2b8" : "#dc3545", // Mola ise mavi (#17a2b8), değilse kırmızı (#dc3545)
  strokeWidth: "15",
  strokeLinecap: "round",
  transition: "stroke-dashoffset 0.9s linear, stroke 0.5s ease-in-out", // Rengin de yumuşak geçişi olsun
  strokeDasharray: "calc(2 * 3.14159 * 100)",
  strokeDashoffset: dashoffset,
});

const TimerDisplay = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  fontSize: "4em",
  fontWeight: "bold",
  color: "#343a40",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  lineHeight: "1.2",
};

const ModeText = {
  fontSize: "0.4em",
  fontWeight: "normal",
  marginTop: "-3px",
  color: "#6c757d",
};

const ControlsContainer = {
  display: "flex",
  gap: "15px",
  marginBottom: "20px",
};

const Button = {
  padding: "12px 25px",
  fontSize: "1.1em",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
  transition: "background-color 0.3s ease",
  color: "white",
  fontWeight: "bold",
  boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
};

const StartButton = {
  ...Button,
  backgroundColor: "#28a745", // Yeşil
};

const PauseButton = {
  ...Button,
  backgroundColor: "#ffc107", // Sarı
};

const ResumeButton = {
  ...Button,
  backgroundColor: "#17a2b8", // Mavi-yeşil
};

const ResetButton = {
  ...Button,
  backgroundColor: "#6c757d", // Gri
};

const ModeToggleButton = {
  ...Button,
  backgroundColor: "#007bff", // Mavi
  marginTop: "20px",
};

function Pomodoro() {
  // --- Sabitler ---
  const WORK_TIME_MIN = 25;
  const SHORT_BREAK_MIN = 5;
  const CIRCLE_RADIUS = 100;
  const CIRCLE_CIRCUMFERENCE = 2 * Math.PI * CIRCLE_RADIUS;

  // --- State Yönetimi ---
  const [minutes, setMinutes] = useState(WORK_TIME_MIN);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isBreak, setIsBreak] = useState(false);
  const [totalSeconds, setTotalSeconds] = useState(WORK_TIME_MIN * 60);

  const timerRef = useRef(null);

  // --- Fonksiyonlar ---

  const calculateDashoffset = () => {
    const elapsedSeconds = totalSeconds - (minutes * 60 + seconds);
    const percentage = (elapsedSeconds / totalSeconds) * 100;
    return CIRCLE_CIRCUMFERENCE - (CIRCLE_CIRCUMFERENCE * percentage) / 100;
  };

  const startTimer = () => {
    setIsActive(true);
    if (minutes === 0 && seconds === 0) {
      if (!isBreak) {
        setMinutes(WORK_TIME_MIN);
        setSeconds(0);
        setTotalSeconds(WORK_TIME_MIN * 60);
      } else {
        setMinutes(SHORT_BREAK_MIN);
        setSeconds(0);
        setTotalSeconds(SHORT_BREAK_MIN * 60);
      }
    }
  };

  const pauseTimer = () => {
    setIsActive(false);
  };

  const resumeTimer = () => {
    setIsActive(true);
  };

  const resetTimer = () => {
    clearInterval(timerRef.current);
    setIsActive(false);
    setIsBreak(false); // Çalışma moduna dön
    setMinutes(WORK_TIME_MIN);
    setSeconds(0);
    setTotalSeconds(WORK_TIME_MIN * 60);
  };

  const toggleMode = () => {
    clearInterval(timerRef.current);
    setIsActive(false);
    if (isBreak) {
      // Moladan çalışma moduna
      setMinutes(WORK_TIME_MIN);
      setSeconds(0);
      setTotalSeconds(WORK_TIME_MIN * 60);
    } else {
      // Çalışmadan mola moduna
      setMinutes(SHORT_BREAK_MIN);
      setSeconds(0);
      setTotalSeconds(SHORT_BREAK_MIN * 60);
    }
    setIsBreak(!isBreak);
  };

  // --- useEffect Hook'u: Zamanlayıcı Mantığı ---
  useEffect(() => {
    if (isActive) {
      timerRef.current = setInterval(() => {
        if (seconds === 0) {
          if (minutes === 0) {
            // Süre bitti!
            clearInterval(timerRef.current);
            setIsActive(false);
            // Modu değiştir ve yeni süreyi ayarla
            setIsBreak((prevIsBreak) => {
              const nextIsBreak = !prevIsBreak;
              if (nextIsBreak) {
                // Çalışma bitti, molaya geç
                setMinutes(SHORT_BREAK_MIN);
                setTotalSeconds(SHORT_BREAK_MIN * 60);
                alert("Mola zamanı!");
              } else {
                // Mola bitti, çalışmaya geç
                setMinutes(WORK_TIME_MIN);
                setTotalSeconds(WORK_TIME_MIN * 60);
                alert("Çalışma zamanı!");
              }
              setSeconds(0);
              setIsActive(true); // Yeni modu otomatik başlat
              return nextIsBreak;
            });
          } else {
            setMinutes((prevMinutes) => prevMinutes - 1);
            setSeconds(59);
          }
        } else {
          setSeconds((prevSeconds) => prevSeconds - 1);
        }
      }, 1000);
    } else {
      clearInterval(timerRef.current);
    }

    return () => clearInterval(timerRef.current);
  }, [isActive, minutes, seconds, isBreak, totalSeconds]);

  // Zamanı 00:00 formatında göster
  const formatTime = (min, sec) => {
    const formattedMinutes = String(min).padStart(2, "0");
    const formattedSeconds = String(sec).padStart(2, "0");
    return `${formattedMinutes}:${formattedSeconds}`;
  };

  return (
    <div style={PomodoroContainer}>
      <h1
        style={{
          fontSize: "2.5em",
          color: "#2c3e50",
          marginBottom: "100px",
          marginLeft: "50px",
          marginTop: "-100px",
        }}
      >
        ⏱️ Pomodoro Zamanlayıcısı
      </h1>

      <div style={TimerWrapper}>
        <svg style={SvgContainer} viewBox="0 0 220 220">
          <circle
            cx="110"
            cy="110"
            r={CIRCLE_RADIUS}
            style={CircleBackground}
          />
          {/* 👇 BURADA DEĞİŞİKLİK YAPILDI: isBreak durumunu getCircleProgressStyle fonksiyonuna gönder */}
          <circle
            cx="110"
            cy="110"
            r={CIRCLE_RADIUS}
            style={getCircleProgressStyle(calculateDashoffset(), isBreak)}
          />
        </svg>
        <div style={TimerDisplay}>
          {formatTime(minutes, seconds)}
          <span style={ModeText}>{isBreak ? "Mola" : "Odaklan"}</span>
        </div>
      </div>

      <div style={ControlsContainer}>
        {!isActive && (minutes !== 0 || seconds !== 0) ? (
          <button style={ResumeButton} onClick={resumeTimer}>
            Başlat
          </button>
        ) : isActive ? (
          <button style={PauseButton} onClick={pauseTimer}>
            Durdur
          </button>
        ) : (
          <button style={StartButton} onClick={startTimer}>
            Başlat
          </button>
        )}

        <button style={ResetButton} onClick={resetTimer}>
          Sıfırla
        </button>
      </div>

      <button style={ModeToggleButton} onClick={toggleMode}>
        {isBreak ? "Çalışma Moduna Geç" : "Mola Moduna Geç"}
      </button>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <h4
        style={{
          width: "105%",
          fontFamily: "inherit",
          marginLeft: "190px",
          height: "20px",
          backgroundColor: "#e8e8e8",
          marginBottom: "-225px",
          textAlign: "center",
        }}
      >
        Created By : Samed Öz ` Telefon : 538 912 96 93 ` Gmail :
        sametoz706@gmail.com <Loader />
      </h4>
    </div>
  );
}

export default Pomodoro;
