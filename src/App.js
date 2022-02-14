import "./App.css";
import Header from "./components/Header";
import { useState } from "react";
import FeedbackData from "./data/FeedbackData";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import { v4 as uuidv4 } from "uuid";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import AboutIconLink from "./components/AboutIconLink";
import { FeedbackProvider } from "./context/FeedbackContext";
function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };
  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };
  return (
    <div className="App">
      <FeedbackProvider>
        <Router>
          <Header />

          <div className="container">
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <FeedbackForm handleAdd={addFeedback} />
                    <FeedbackStats feedback={feedback} />
                    <FeedbackList
                      feedback={feedback}
                      handleDelete={deleteFeedback}
                    />
                  </>
                }
              />
              <Route path="about" element={<AboutPage />} />
            </Routes>
          </div>
          <AboutIconLink />
        </Router>
      </FeedbackProvider>
    </div>
  );
}

export default App;
