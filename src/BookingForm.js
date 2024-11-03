import React, { useState } from "react";
import "./App.css";

const BookingForm = () => {
  const [location, setLocation] = useState(null);
  const [personType, setPersonType] = useState(null);
  const [seats, setSeats] = useState(null);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate input fields
    if (!location) {
      setError("Please select a location.");
      return;
    }
    if (!personType) {
      setError("Please select a person type.");
      return;
    }
    if (!seats || (typeof seats === 'number' && (seats < 1 || seats > 10))) {
      setError("Please select a valid number of seats (1-10).");
      return;
    }

    // Clear error message
    setError("");

    // Send data to the server
    try {
      const response = await fetch("http://localhost:3000/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ location, personType, seats }),
      });

      if (response.ok) {
        alert("Table booked successfully!");
      } else {
        throw new Error("Failed to send email.");
      }
    } catch (error) {
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <div className="booking-form">
      <h2>Book Your Table</h2>
      <form onSubmit={handleSubmit}>
        {/* Location Selection */}
        <div className="section">
          <h5>Where do you want to eat?</h5>
          <div className="options">
            <label className={location === "Indoor" ? "active" : ""}>
            <i class="fa fa-cutlery" aria-hidden="true"></i>
            <input
                type="radio"
                name="location"
                value="Indoor"
                onChange={() => setLocation("Indoor")}
              />
              Indoor
            </label>
            <label className={location === "Outdoor" ? "active" : ""}>
            <i class="fa fa-umbrella" aria-hidden="true"></i>
            <input
                type="radio"
                name="location"
                value="Outdoor"
                onChange={() => setLocation("Outdoor")}
              />
              Outdoor
            </label>
          </div>
        </div>

        {/* Person Type Selection */}
        <div className="section">
          <h5>Select Your Person</h5>
          <div className="options">
            <label className={personType === "Single" ? "active" : ""}>
            <i class="fa fa-user" aria-hidden="true"></i>
            <input
                type="radio"
                name="personType"
                value="Single"
                onChange={() => setPersonType("Single")}
              />
              Single
            </label>
            <label className={personType === "Couple" ? "active" : ""}>
            <i class="fa fa-users" aria-hidden="true"></i>
            <input
                type="radio"
                name="personType"
                value="Couple"
                onChange={() => setPersonType("Couple")}
              />
              Couple
            </label>
            <label className={personType === "Family" ? "active" : ""}>
            <i class="fa fa-users" aria-hidden="true"></i>
              <input
                type="radio"
                name="personType"
                value="Family"
                onChange={() => setPersonType("Family")}
              />
              Family
            </label>
          </div>
        </div>

        {/* Seat Selection */}
        <div className="section">
          <h5>How many Seats?</h5>
          <div className="options">
            {[1, 2, 4, 5].map((seat) => (
              <label key={seat} className={seats === seat ? "active" : ""}>
                <input
                  type="radio"
                  name="seats"
                  value={seat}
                  onChange={() => setSeats(seat)}
                />
                {seat}
              </label>
            ))}
            <label className={seats === "More" ? "active" : ""}>
              <input
                type="radio"
                name="seats"
                value="More"
                onChange={() => setSeats("More")}
              />
              More
            </label>
          </div>
        </div>

        {/* Error Message */}
        {error && <p className="error">{error}</p>}

        {/* Submit Button */}
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
