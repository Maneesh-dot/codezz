// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// export default function RegistrationPage() {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const register = (e) => {
//     e.preventDefault();
//     // Registration Logic (LocalStorage ya Backend se save kar)
//     navigate("/login");
//   };
  
//   return (
//     <div style={styles.container}>
//       <h2>Register</h2>
//       <form onSubmit={register}>
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
//         <button>Register</button>
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

// import React, { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";

// export default function RegistrationPage() {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const register = (e) => {
//     e.preventDefault();
//     // Registration Logic
//     navigate("/login");
//   };
  
//   return (
//     <div style={styles.container}>
//       <h2>Register</h2>
//       <form onSubmit={register}>
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
//         <button>Register</button>
//       </form>
//       <p style={{ marginTop: "20px" }}>
//         Already have an account?{" "}
//         <Link to="/login" style={{ color: "#2196F3" }}>
//           Login here
//         </Link>
//       </p>
//     </div>
//   );
// }

// const styles = {
//   container: {
//     textAlign: "center",
//     padding: "40px",
//   },
// };


// import React, { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";

// export default function RegistrationPage() {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const register = (e) => {
//     e.preventDefault();
//     navigate("/profile-setup"); 
//     // navigate("/login");
    
//   };

//   return (
//     <div style={styles.container}>
//       <h2 style={styles.header}>// Gamer Registration</h2>
//       <p style={styles.codeSnippet}>#include &lt;iostream&gt;</p>
//       <form onSubmit={register} style={styles.form}>
//         <input style={styles.input} placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
//         <input style={styles.input} placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} type="password" />
//         <button style={styles.button}>Register</button>
//       </form>
//       <p style={styles.footer}>Already have an account? <Link to="/login" style={styles.link}>Login here</Link></p>
//     </div>
//   );
// }

// const styles = {
//   container: {
//     fontFamily: "Consolas, monospace",
//     textAlign: "center",
//     padding: "40px",
//     backgroundColor: "#0c0f1c",
//     color: "#f1f1f1",
//     minHeight: "100vh",
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   header: {
//     fontSize: "2rem",
//     marginBottom: "20px",
//     color: "#ff6ec7",
//   },
//   codeSnippet: {
//     fontSize: "1rem",
//     color: "#66ff66",
//     marginBottom: "20px",
//   },
//   form: {
//     display: "flex",
//     flexDirection: "column",
//     gap: "15px",
//     alignItems: "center",
//   },
//   input: {
//     padding: "12px",
//     borderRadius: "8px",
//     border: "2px solid #2196F3",
//     backgroundColor: "#1a1d2e",
//     color: "#f1f1f1",
//     fontSize: "1rem",
//     width: "250px",
//   },
//   button: {
//     padding: "12px 25px",
//     fontSize: "1rem",
//     fontWeight: "bold",
//     color: "#f1f1f1",
//     backgroundColor: "#ff0066",
//     border: "none",
//     borderRadius: "12px",
//     cursor: "pointer",
//   },
//   link: {
//     color: "#2196F3",
//     textDecoration: "none",
//   },
//   footer: {
//     marginTop: "20px",
//     fontSize: "1rem",
//   },
// };

import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function RegistrationPage() {
  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);
  const navigate = useNavigate();

  const sendOTP = async (e) => {
    e.preventDefault();
    // ✅ API call: /send-otp (Backend me implement karna hai!)
    // e.g., await fetch("/api/auth/send-otp", { method: "POST", body: JSON.stringify({ mobile }) });
    alert(`OTP sent to ${mobile}! (Yehh backened walon ka kaam hai...calling Aman and abhishek)`);
    setIsOtpSent(true);
  };
  
  const verifyOTP = async (e) => {
    e.preventDefault();
    // ✅ API call: /verify-otp
    // e.g., const resp = await fetch("/api/auth/verify-otp", ...)
    // if (resp.ok) {
    navigate("/profile-setup"); 
    // }
  };
  
  return (
    <div style={styles.container}>
      <h2 style={styles.header}>// Gamer Registration</h2>
      <p style={styles.codeSnippet}>#include &lt;iostream&gt;</p>
      <form onSubmit={isOtpSent ? verifyOTP : sendOTP} style={styles.form}>
        <input
          style={styles.input}
          placeholder="Enter Mobile Number"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          disabled={isOtpSent}
        />
        {isOtpSent && (
          <input
            style={styles.input}
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
        )}
        <button style={styles.button}>
          {isOtpSent ? "Verify OTP" : "Send OTP"}
        </button>
      </form>
      <p style={styles.footer}>
        Already have an account?{" "}
        <Link to="/login" style={styles.link}>
          Login here
        </Link>
      </p>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: "Consolas, monospace",
    textAlign: "center",
    padding: "40px",
    backgroundColor: "#0c0f1c",
    color: "#f1f1f1",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    fontSize: "2rem",
    marginBottom: "20px",
    color: "#ff6ec7",
  },
  codeSnippet: {
    fontSize: "1rem",
    color: "#66ff66",
    marginBottom: "20px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    alignItems: "center",
  },
  input: {
    padding: "12px",
    borderRadius: "8px",
    border: "2px solid #2196F3",
    backgroundColor: "#1a1d2e",
    color: "#f1f1f1",
    fontSize: "1rem",
    width: "250px",
  },
  button: {
    padding: "12px 25px",
    fontSize: "1rem",
    fontWeight: "bold",
    color: "#f1f1f1",
    backgroundColor: "#ff0066",
    border: "none",
    borderRadius: "12px",
    cursor: "pointer",
  },
  link: {
    color: "#2196F3",
    textDecoration: "none",
  },
  footer: {
    marginTop: "20px",
    fontSize: "1rem",
  },
};



