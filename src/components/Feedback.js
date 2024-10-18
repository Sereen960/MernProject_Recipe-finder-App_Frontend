// Feedback.js
import React, { useState } from 'react';
import '../styles/feedback.css'; // Create a CSS file for styling

const Feedback = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [feedback, setFeedback] = useState('');

  const handleFeedbackChange = (e) => {
    setFeedback(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle feedback submission (e.g., send to an API or log it)
    console.log('Feedback submitted:', feedback);
    setFeedback('');
    setModalOpen(false); // Close the modal after submission
  };

  return (
    <div className="feedback-container">
      <button className="feedback-button" onClick={() => setModalOpen(true)}>
        Give Feedback
      </button>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setModalOpen(false)}>&times;</span>
            <h2>Your Feedback</h2>
            <form onSubmit={handleSubmit}>
              <textarea
                value={feedback}
                onChange={handleFeedbackChange}
                placeholder="Enter your feedback here..."
                required
              />
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Feedback;
