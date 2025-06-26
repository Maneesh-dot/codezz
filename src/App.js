import React from "react";
import { Routes, Route } from "react-router-dom";
import MyProfile from './MyProfile';

{/* <Route path="/myprofile" element={<MyProfile />} /> */}


import RegistrationPage from "./RegistrationPage"; // Registration
import LoginPage from "./LoginPage";               // Login
import ProfileSetupPage from "./ProfileSetupPage"; // <-- Import
import FinalPage from "./FinalPage";               // Final
import SettingsPage from "./SettingsPage";         // Settings

function App() {
  return (
    <Routes>
      <Route path="/" element={<RegistrationPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/profile-setup" element={<ProfileSetupPage />} /> 
      <Route path="/final" element={<FinalPage />} />
      <Route path="/myprofile" element={<MyProfile />} />
      <Route path="/settings" element={<SettingsPage />} />
      <Route path="/register" element={<RegistrationPage />} />
    </Routes>
  );
}  


export default App;



// import React from "react";
// import { Routes, Route } from "react-router-dom";
// import FinalPage from "./FinalPage";    // tera final page
// import SettingsPage from "./SettingsPage"; // ab ye import karenge
// import LoginPage from "./LoginPage";    // aur jo bhi tera login page ho

// function App() {
//   return (
//     <Routes>
//       <Route path="/" element={<LoginPage />} />
//       <Route path="/final" element={<FinalPage />} />
//       <Route path="/settings" element={<SettingsPage />} />  {/* NEW!! */}
//     </Routes>
//   );
// }

// export default App;

