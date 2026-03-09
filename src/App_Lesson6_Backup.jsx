import React, { useState } from "react";
// import "./App.css"; // This connects your CSS file to your React file!

function TaskCard({ title, isCompleted, onToggle }) {
  // We use standard JavaScript template literals (backticks) to switch
  // between the 'btn-finished' and 'btn-progress' CSS classes dynamically.
  const buttonClass = isCompleted ? "btn-finished" : "btn-progress";

  return (
    <div className="task-card">
      <h2 className="task-title">{title}</h2>

      <p className="task-status">
        Status: <strong>{isCompleted ? "Finished" : "In Progress"}</strong>
      </p>

      <button className={`task-button ${buttonClass}`} onClick={onToggle}>
        {isCompleted ? "Reset Task" : "Complete Task"}
      </button>
    </div>
  );
}

function App() {
  const [taskDone, setTaskDone] = useState(false);

  return (
    <div className="app-container">
      <TaskCard
        title="React Curriculum Lesson 1"
        isCompleted={taskDone}
        onToggle={() => setTaskDone(!taskDone)}
      />
    </div>
  );
}

export default App;
