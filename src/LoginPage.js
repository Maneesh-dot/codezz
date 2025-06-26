// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// export default function LoginPage() {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const login = (e) => {
//     e.preventDefault();
//     // Login Logic
//     navigate("/profile-setup");
//   };
  
//   return (
//     <div style={styles.container}>
//       <h2>Login</h2>
//       <form onSubmit={login}>
//         <input
//           placeholder="Username"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//         /><br/>
//         <input
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           type="password"
//         /><br/>
//         <button>Login</button>
//       </form>
//     </div>
//   );
// }

// const styles = {
//   container: {
//     textAlign: "center",
//     padding: "40px",
//   },
// };


import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function LoginPage() {
  const [username, setUsername] = useState("// Enter username");
  const [password, setPassword] = useState("// Enter password");
  const navigate = useNavigate();

  const login = (e) => {
    e.preventDefault();
    // Login Logic
    navigate("/profile-setup");
  };
  
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.header}>Login to Your Game</h2>
        <pre style={styles.codeSnippet}>
{`// C++ Auth Logic
if (user.username == database.username && user.password == database.password) {
    access_granted();
}`} 
        </pre>
        <form onSubmit={login}>
          <input
            style={styles.input}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="// Enter username"
          /><br/>
          
          <input
            style={styles.input}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="// Enter password"
            type="password"
          /><br/>
          
          <button style={styles.button}>Login</button>
        </form>
        <p style={styles.footer}>
          New gamer?{" "}
          <Link to="/register" style={styles.link}>
            Register Here
          </Link>
        </p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: "'Courier New', Courier, monospace",
    background: "linear-gradient(135deg, #000000, #0a0a0a, #1c1c1c)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    color: "#00fffa",
  },
  // ...other styles
};


