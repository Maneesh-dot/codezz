// import React, { useState } from "react";

// export default function FinalPage() {
//   const [chat, setChat] = useState({ world: [], challenge: [] });
//   const [activeTab, setActiveTab] = useState("world");
//   const [input, setInput] = useState("");
//   const [players] = useState([
//     "Vikas_Vishwakarma",
//     "Aman_Singh",
//     "Abhishek_Sakhre",
//     "Tejas_Jha",
//   ]);

//   const handleSend = (e) => {
//     e.preventDefault();
//     if (!input.trim()) return;
//     setChat((prev) => {
//       const updated = { ...prev };
//       updated[activeTab].push({ user: "You", message: input.trim() });
//       return updated;
//     });
//     setInput("");
//   };

//   return (
//     <div style={styles.container}>
//       {/* Sidebar */}
//       <div style={styles.sidebar}>
//         <div style={styles.logo}>🎮 Game Lobby</div>
//         <div style={styles.sectionTitle}>👥 Players</div>
//         <div style={styles.playerList}>
//           {players.map((name) => (
//             <div key={name} style={styles.player}>
//               🕹️ {name}
//             </div>
//           ))}
//         </div>
//         <button style={styles.btn}>+ Add Friend</button>
//       </div>

//       {/* Main */}
//       <div style={styles.main}>
//         <div style={styles.topbar}>
//           <div
//             style={{
//               ...styles.tab,
//               borderBottom: activeTab === "world" ? "2px solid #00FFC6" : "none",
//             }}
//             onClick={() => setActiveTab("world")}
//           >
//             🌍 World Chat
//           </div>
//           <div
//             style={{
//               ...styles.tab,
//               borderBottom: activeTab === "challenge" ? "2px solid #00FFC6" : "none",
//             }}
//             onClick={() => setActiveTab("challenge")}
//           >
//             ⚔️ Challenges
//           </div>
//         </div>

//         <div style={styles.messages}>
//           {(chat[activeTab] || []).map((msg, idx) => (
//             <div key={idx} style={styles.message}>
//               <span style={styles.username}>{msg.user}:</span> {msg.message}
//             </div>
//           ))}
//         </div>

//         <form onSubmit={handleSend} style={styles.inputBar}>
//           <input
//             style={styles.input}
//             placeholder={`Type your ${activeTab} message...`}
//             value={input}
//             onChange={(e) => setInput(e.target.value)}
//           />
//         </form>
//       </div>
//     </div>
//   );
// }

// const styles = {
//   container: {
//     display: "flex",
//     height: "100vh",
//     background: "#0D1117",
//     color: "#C9D1D9",
//     fontFamily: "Arial, sans-serif",
//   },
//   sidebar: {
//     width: "250px",
//     background: "#161B22",
//     padding: "20px",
//     display: "flex",
//     flexDirection: "column",
//     borderRight: "1px solid #30363D",
//   },
//   logo: {
//     fontSize: "20px",
//     fontWeight: "bold",
//     marginBottom: "30px",
//     color: "#00FFC6",
//   },
//   sectionTitle: {
//     fontSize: "14px",
//     color: "#8B949E",
//     marginBottom: "10px",
//   },
//   playerList: {
//     flex: 1,
//     overflowY: "auto",
//   },
//   player: {
//     padding: "8px",
//     borderBottom: "1px solid #30363D",
//     fontSize: "14px",
//     cursor: "pointer",
//   },
//   btn: {
//     background: "#00FFC6",
//     border: "none",
//     padding: "10px",
//     borderRadius: "5px",
//     color: "#0D1117",
//     fontWeight: "bold",
//     cursor: "pointer",
//     marginTop: "10px",
//   },
//   main: {
//     flex: 1,
//     display: "flex",
//     flexDirection: "column",
//   },
//   topbar: {
//     display: "flex",
//     background: "#21262D",
//     padding: "10px",
//   },
//   tab: {
//     marginRight: "20px",
//     paddingBottom: "5px",
//     cursor: "pointer",
//   },
//   messages: {
//     flex: 1,
//     padding: "20px",
//     overflowY: "auto",
//   },
//   message: {
//     padding: "5px 0",
//   },
//   username: {
//     color: "#00FFC6",
//     fontWeight: "bold",
//   },
//   inputBar: {
//     padding: "10px",
//     background: "#161B22",
//   },
//   input: {
//     width: "100%",
//     padding: "10px",
//     borderRadius: "5px",
//     border: "1px solid #30363D",
//     background: "#0D1117",
//     color: "#C9D1D9",
//     outline: "none",
//   },
// };
import { Link } from "react-router-dom";

import React, { useState } from "react";


export default function FinalPage() {
  const [userList, setUserList] = useState([
    "Master_ji_420 (online 1 hr ago)",
    "Kachra_Seth_007 (online 3 hrs ago)",
    "Babu_Bhaiya (online 5 mins ago)",
    "Jetha_Lal (offline - 1 Day ago)",
  ]);

  const [newPlayer, setNewPlayer] = useState("");

  const handleAddPlayer = (e) => {
    if (e.key === "Enter" && newPlayer.trim() !== "") {
      setUserList((prev) => [...prev, `${newPlayer.trim()} (online)`]);
      setNewPlayer("");
    }
  };
  
  const friendsList = [
    "Vikas_Vishwakarma",
    "Aman_Singh",
    "Abhishek_Sakhre",
    "Tejas_Jha",
    "Sexyy_Coder",
    "Recursion_Guru",
    "chapriiiii_0101",
    "Cyber_Don",
    "Champak_Chaha_69",
    "Meetha_Launda_69",
    "Nita_guys_07",
  ];

  return (
    <div style={styles.app}>
      {/* Left Sidebar */}
      <div style={styles.leftSidebar}>
        <div style={styles.logo}>
          <h3>My Friends</h3>
        </div>
        <div style={styles.friendsList}>
          {friendsList.map((friend, idx) => (
            <div key={idx} style={styles.friend}>
              👤 {friend}
            </div>
          ))}
        </div>
      </div>

      {/* Main Section */}
      <div style={styles.mainSection}>
        <div style={styles.topNav}>
          <div style={styles.navItemActive}>Lobby</div>
          <div style={styles.navItem}>Discussion</div>
          <div style={styles.navItem}>Private Room</div>
         <Link to="/settings" style={styles.navItem}>
  Setting
</Link>

        </div>
        {/* Top Right My Profile Icon */}
<div style={styles.topRight}>
  <Link to="/myprofile" style={styles.myProfileLink}>
    <div style={styles.profileCircle}></div>
    <span style={styles.myProfileText}>My Profile</span>
  </Link>
</div>


        {/* Center Area - Code Arena */}
        <div style={styles.codeArena}>
          <h2 style={styles.codeArenaHeader}>⚔️ Code Arena ⚔️</h2>

          <div style={styles.section}>
            <h3>🎮 Live Matches</h3>
            <div style={styles.listItem}>Master_ji420 vs BinaryBeast (Live Now!)</div>
            <div style={styles.listItem}>CodeNinja vs LogicLord (Live Now!)</div>
            <div style={styles.listItem}>BugHunter vs SegFault (Starting in 5 mins)</div>
          </div>

          <div style={styles.section}>
            <h3>🏆 Today’s Top Coders</h3>
            <div style={styles.listItem}>Master_ji420 — 12 Wins</div>
            <div style={styles.listItem}>LogicLord — 9 Wins</div>
            <div style={styles.listItem}>BinaryBeast — 7 Wins</div>
            <div style={styles.listItem}>CodeNinja — 5 Wins</div>
          </div>

          <div style={styles.section}>
            <h3>🔥 Active Challenges</h3>
            <div style={styles.listItem}>Reverse a Linked List (Reward: 100 Points!)</div>
            <div style={styles.listItem}>Binary Search Speed Test (Reward: 150 Points!)</div>
            <div style={styles.listItem}>Code Optimization Task (Reward: 250 Points!)</div>
          </div>
        </div>
      </div>

      {/* Right Sidebar */}
      <div style={styles.rightSidebar}>
        <div style={styles.searchBar}>
          <input
            type="text"
            placeholder="Add Player"
            value={newPlayer}
            onChange={(e) => setNewPlayer(e.target.value)}
            onKeyDown={handleAddPlayer}
            style={styles.searchInput}
          />
          <span style={styles.searchIcon}>🔍</span>
        </div>
        {userList.map((user, idx) => (
          <div key={idx} style={styles.username}>
            {user}
          </div>
        ))}
      </div>
    </div>
  );
}

// Styles
const styles = {
  app: {
    display: "flex",
    fontFamily: "sans-serif",
    color: "#ffffff",
    backgroundColor: "#1f1f1f",
    height: "100vh",
  },
  leftSidebar: {
    flex: "0 0 250px",
    padding: "20px",
    backgroundColor: "#111",
    display: "flex",
    flexDirection: "column",
  },
  logo: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  friendsList: {
    flex: 1,
    overflowY: "auto",
  },
  friend: {
    padding: "8px",
    marginBottom: "5px",
    backgroundColor: "#222",
    borderRadius: "4px",
    cursor: "pointer",
  },
  mainSection: {
    flex: "1",
    display: "flex",
    flexDirection: "column",
    padding: "20px",
  },
  topNav: {
    display: "flex",
    justifyContent: "flex-start",
    paddingBottom: "10px",
    borderBottom: "1px solid #555",
    marginBottom: "20px",
  },
  navItemActive: {
    marginRight: "20px",
    fontWeight: "bold",
    color: "#00ff99",
    cursor: "pointer",
  },
  navItem: {
    marginRight: "20px",
    fontWeight: "normal",
    color: "#aaa",
    cursor: "pointer",
  },
  codeArena: {
    flex: 1,
    overflowY: "auto",
  },
  codeArenaHeader: {
    fontSize: "1.8rem",
    fontWeight: "bold",
    textAlign: "center",
    color: "#00ff99",
    marginBottom: "20px",
    textShadow: "0px 0px 8px #00ff99",
  },
  section: {
    backgroundColor: "#222",
    padding: "15px",
    borderRadius: "6px",
    marginBottom: "20px",
  },
  listItem: {
    padding: "8px",
    borderBottom: "1px dotted #555",
    fontSize: "14px",
  },
  rightSidebar: {
    flex: "0 0 250px",
    padding: "20px",
    backgroundColor: "#111",
    display: "flex",
    flexDirection: "column",
  },
  searchBar: {
    display: "flex",
    alignItems: "center",
    marginBottom: "15px",
    border: "1px solid #555",
    borderRadius: "4px",
    padding: "5px",
  },
  searchInput: {
    flex: 1,
    padding: "5px",
    fontSize: "14px",
    backgroundColor: "#222",
    border: "none",
    color: "#fff",
  },
  searchIcon: {
    fontSize: "18px",
    cursor: "pointer",
  },
  username: {
    padding: "8px",
    marginBottom: "5px",
    backgroundColor: "#333",
    borderRadius: "4px",
  },
  topRight: {
  position: "absolute",
  top: "20px",
  right: "20px",
  display: "flex",
  alignItems: "center",
},
profileCircle: {
  width: "40px",
  height: "40px",
  borderRadius: "50%",
  backgroundColor: "#555",
  marginRight: "10px",
},
myProfileLink: {
  display: "flex",
  alignItems: "center",
  textDecoration: "none",
  color: "#fff",
},
myProfileText: {
  fontSize: "1rem",
},

};
