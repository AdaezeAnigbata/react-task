import React, { useState } from "react";
import styled from "styled-components"; // 1. Importing the new tool

// --- STYLED COMPONENTS (CSS written inside JavaScript) ---

const AppContainer = styled.div`
  background-color: #121212;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: sans-serif;
`;

const Card = styled.div`
  background-color: #1e1e1e;
  color: #ffffff;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  width: 320px;
  margin: auto;
`;

const Title = styled.h2`
  font-size: 1.2rem;
  margin-bottom: 10px;
`;

const StatusText = styled.p`
  opacity: 0.8;
`;

// 2. The true power of Styled Components: Using Props in CSS!
const ActionButton = styled.button`
  /* If isCompleted is true, make it green. If false, make it blue. */
  background-color: ${(props) => (props.$isCompleted ? "#4CAF50" : "#007BFF")};
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 20px;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.8;
  }
`;

// --- MAIN REACT LOGIC ---

function TaskCard({ title, isCompleted, onToggle }) {
  return (
    // 3. Using our new custom tags instead of regular <div> or <p> tags
    <Card>
      <Title>{title}</Title>

      <StatusText>
        Status: <strong>{isCompleted ? "Finished" : "In Progress"}</strong>
      </StatusText>

      {/* We pass the status into the button so the CSS knows what color to be */}
      <ActionButton $isCompleted={isCompleted} onClick={onToggle}>
        {isCompleted ? "Reset Task" : "Complete Task"}
      </ActionButton>
    </Card>
  );
}

function App() {
  const [taskDone, setTaskDone] = useState(false);

  return (
    <AppContainer>
      <TaskCard
        title="Lesson 7: Styled Components"
        isCompleted={taskDone}
        onToggle={() => setTaskDone(!taskDone)}
      />
    </AppContainer>
  );
}

export default App;
