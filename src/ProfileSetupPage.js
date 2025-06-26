import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ProfileSetupPage() {
  const [gameId, setGameId] = useState("");
  const [age, setAge] = useState("");
  const [dp, setDp] = useState("");
  const [about, setAbout] = useState("");
  const [profession, setProfession] = useState("");
  const navigate = useNavigate();

  const saveProfile = (e) => {
    e.preventDefault();
    navigate("/final");
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>🎮 Set Up Your Profile</h2>
      <form onSubmit={saveProfile} style={styles.form}>
        <input placeholder="Game ID (e.g., GamerX99)" value={gameId} onChange={(e) => setGameId(e.target.value)} style={styles.input} />
        <input placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)} style={styles.input} />
        <input placeholder="Display Picture URL" value={dp} onChange={(e) => setDp(e.target.value)} style={styles.input} />
        <input placeholder="About You (e.g., Pro Gamer)" value={about} onChange={(e) => setAbout(e.target.value)} style={styles.input} />
        <input placeholder="Profession (e.g., C++ Developer)" value={profession} onChange={(e) => setProfession(e.target.value)} style={styles.input} />
        <button style={styles.button}>💾 Save Profile</button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: "'Courier New', Courier, monospace",
    background: "linear-gradient(135deg, #000000, #111111, #222222)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    color: "#00fffa",
  },
  heading: {
    fontSize: "2rem",
    marginBottom: "1rem",
    textShadow: "0px 0px 5px #00fffa",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    maxWidth: "300px",
    width: "100%",
  },
  input: {
    padding: "12px",
    fontSize: "1rem",
    borderRadius: "8px",
    border: "1px solid #00fffa",
    backgroundColor: "#111111",
    color: "#00fffa",
    outline: "none",
    textAlign: "center",
  },
  button: {
    padding: "12px",
    fontSize: "1.1rem",
    borderRadius: "8px",
    border: "none",
    backgroundColor: "#00fffa",
    color: "#111111",
    fontWeight: "bold",
    cursor: "pointer",
    textTransform: "uppercase",
  },
};
