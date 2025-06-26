import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement);

export default function MyProfile() {
  const data = {
    labels: ["Match 1", "Match 2", "Match 3", "Match 4", "Match 5"],
    datasets: [
      {
        label: "Progress",
        data: [100, 150, 130, 160, 190],
        fill: false,
        borderColor: "#00ff99",
        tension: 0.1,
      },
    ],
  };
  const options = {
    scales: {
      x: {
        title: {
          display: true,
          text: "Matches",
        },
      },
      y: {
        title: {
          display: true,
          text: "Points",
        },
      },
    },
  };
  return (
    <div style={styles.container}>
      <div style={styles.leftPanel}>
        <h2>Master</h2>
        <p>Rank: #1</p>
        <p>Tag: Pro Gamer</p>
        <p>Profession: Self Coder</p>
        <p>Score: 1900</p>
      </div>
      <div style={styles.centerPanel}>
        <h2>Progress Graph</h2>
        <div style={{ height: "300px", width: "600px" }}>
          <Line data={data} options={options} />
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#1f1f1f",
    color: "#ffffff",
  },
  leftPanel: {
    flex: "0 0 250px",
    padding: "20px",
    backgroundColor: "#111",
    borderRadius: "8px",
    textAlign: "center",
  },
  centerPanel: {
    flex: "1",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
};
