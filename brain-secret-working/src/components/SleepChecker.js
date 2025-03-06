import React, { useState, useEffect } from "react";
import "../css/SleepChecker.css";

const SleepChecker = () => {
  const userId = 1; // Replace with actual user ID from login or session
  const [sleepTime, setSleepTime] = useState("");
  const [wakeTime, setWakeTime] = useState("");
  const [disturbances, setDisturbances] = useState(0);
  const [sleepQuality, setSleepQuality] = useState("normal");
  const [result, setResult] = useState(null);
  const [history, setHistory] = useState([]);

  // Fetch sleep history when the component loads
  useEffect(() => {
    fetch(`http://localhost:8080/api/sleep/history/${userId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok " + response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        setHistory(data);
      })
      .catch((error) => console.error("Fetch error:", error));
  }, []);

  // Calculate sleep duration in hours and minutes
  const calculateSleepDuration = (sleepTime, wakeTime) => {
    const sleepDate = new Date(`1970-01-01T${sleepTime}`);
    const wakeDate = new Date(`1970-01-01T${wakeTime}`);

    if (wakeDate < sleepDate) {
      // Handle case where sleep time is before midnight and wake time is after midnight
      wakeDate.setDate(wakeDate.getDate() + 1);
    }

    const durationMs = wakeDate - sleepDate;
    const durationHours = Math.floor(durationMs / (1000 * 60 * 60));
    const durationMinutes = Math.floor((durationMs % (1000 * 60 * 60)) / (1000 * 60));

    return `${durationHours} hrs ${durationMinutes} mins`;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const sleepData = { sleepTime, wakeTime, disturbances, sleepQuality, userId };

    try {
      const response = await fetch(`http://localhost:8080/api/sleep`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(sleepData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      data.sleepDuration = calculateSleepDuration(sleepTime, wakeTime); // Ensure sleep duration is calculated and displayed
      setResult(data);

      // Update sleep history after successful submission
      setHistory([...history, data]);
    } catch (error) {
      console.error("Error submitting sleep data:", error);
      alert("An error occurred while submitting sleep data.");
    }
  };

  return (
    <div className="SleepQuality">
      <h2>Sleep Quality Checker</h2>
      <form onSubmit={handleSubmit}>
        <label>Time of Sleep:</label>
        <input
          type="time"
          value={sleepTime}
          onChange={(e) => setSleepTime(e.target.value)}
          required
        />

        <label>Wake Up Time:</label>
        <input
          type="time"
          value={wakeTime}
          onChange={(e) => setWakeTime(e.target.value)}
          required
        />

        <label>Disturbances:</label>
        <input
          type="number"
          value={disturbances}
          onChange={(e) => setDisturbances(e.target.value)}
          min="0"
          required
        />

        <label>How do you feel after waking up?</label>
        <select value={sleepQuality} onChange={(e) => setSleepQuality(e.target.value)}>
          <option value="fresh">Fresh</option>
          <option value="normal">Normal</option>
          <option value="tired">Tired</option>
        </select>

        <button type="submit">Check Sleep Quality</button>
      </form>

      {result && (
        <div>
          <h3>Result:</h3>
          <p>Sleep Duration: {result.sleepDuration}</p>
          <p>Sleep Quality: {result.sleepQuality}</p>
        </div>
      )}

      <h3>Sleep History</h3>
      <ul>
        {history.map((entry, index) => (
          <li key={index}>
            {entry.sleepTime} - {entry.wakeTime} | {calculateSleepDuration(entry.sleepTime, entry.wakeTime)} |{" "}
            {entry.sleepQuality}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SleepChecker;
