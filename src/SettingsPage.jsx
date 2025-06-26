import React, { useState } from "react";

export default function SettingsPage() {
  const [activeSection, setActiveSection] = useState("profile");

  return (
    <div style={styles.container}>
      <div style={styles.sidebar}>
        <h3 style={styles.sidebarHeader}>⚙️ Settings</h3>
        {["profile", "general", "account", "game", "language", "appearance", "support"].map((section) => (
          <div
            key={section}
            style={{
              ...styles.sidebarItem,
              fontWeight: activeSection === section ? "bold" : "normal",
              backgroundColor: activeSection === section ? "#333" : "transparent",
            }}
            onClick={() => setActiveSection(section)}
          >
            {section === "profile" && "👤 Profile"}
            {section === "general" && "⚡ General Settings"}
            {section === "account" && "🔐 Account Management"}
            {section === "game" && "🕹️ Game Settings"}
            {section === "language" && "🌍 Language & Region"}
            {section === "appearance" && "🎨 Appearance"}
            {section === "support" && "🙌 Support & Legal"}
          </div>
        ))}
      </div>

      <div style={styles.content}>
        {activeSection === "profile" && (
          <div>
            <h2>👤 Profile</h2>
            <p>– Edit Name & Avatar</p>
            <p>– Edit Bio / Tagline</p>
            <p>– Theme Preference (Light/Dark/Hacker Mode)</p>
          </div>
        )}
        {activeSection === "general" && (
          <div>
            <h2>⚡ General Settings</h2>
            <p>– Notifications ON/OFF</p>
            <p>– Online Status (Visible / Hidden)</p>
            <p>– Profile Visibility (Public / Friends Only)</p>
            <p>– Sound ON/OFF</p>
          </div>
        )}
        {activeSection === "account" && (
          <div>
            <h2>🔐 Account Management</h2>
            <p>– Change Password</p>
            <p>– Link Social Media</p>
            <p>– Delete Account</p>
          </div>
        )}
        {activeSection === "game" && (
          <div>
            <h2>🕹️ Game Settings</h2>
            <p>– Default Difficulty Level</p>
            <p>– Default Game Mode</p>
            <p>– Keyboard Shortcuts</p>
            <p>– Mouse Sensitivity</p>
          </div>
        )}
        {activeSection === "language" && (
          <div>
            <h2>🌍 Language & Region</h2>
            <p>– Language Selector</p>
            <p>– Time Zone Selector</p>
          </div>
        )}
        {activeSection === "appearance" && (
          <div>
            <h2>🎨 Appearance</h2>
            <p>– Game Dashboard Layout (Compact / Classic)</p>
            <p>– Custom Background Image</p>
            <p>– Color Theme Selector</p>
          </div>
        )}
        {activeSection === "support" && (
          <div>
            <h2>🙌 Support & Legal</h2>
            <p>– Frequently Asked Questions (FAQ)</p>
            <p>– Contact Support</p>
            <p>– Terms & Conditions</p>
            <p>– Privacy Policy</p>
          </div>
        )}
      </div>
    </div>
  );
}

// Styles
const styles = {
  container: {
    display: "flex",
    fontFamily: "sans-serif",
    color: "#fff",
    height: "100vh",
    backgroundColor: "#1f1f1f",
  },
  sidebar: {
    flex: "0 0 250px",
    backgroundColor: "#111",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
  },
  sidebarHeader: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  sidebarItem: {
    padding: "12px",
    marginBottom: "5px",
    cursor: "pointer",
    borderRadius: "4px",
    fontSize: "14px",
  },
  content: {
    flex: "1",
    padding: "30px",
    backgroundColor: "#222",
    overflowY: "auto",
  },
};
