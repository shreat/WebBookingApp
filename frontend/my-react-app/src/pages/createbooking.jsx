import React from "react";

// Handle form submission
const handleSubmit = (e) => {
  e.preventDefault();
  console.log("Form Data Submitted:");
};

function CreateBooking() {
  return (
    <form onSubmit={handleSubmit} className="container mt-4">
      {/* Dropdown */}
      <div className="mb-3">
        <label className="form-label">Category:</label>
        <select className="form-select">
          <option value="">Select an option</option>
          <option value="Option 1">Option 1</option>
          <option value="Option 2">Option 2</option>
        </select>
      </div>

      {/* Date Picker */}
      <div className="mb-3">
        <label className="form-label">Date:</label>
        <input type="date" className="form-control" />
      </div>

      {/* Time Picker */}
      <div className="mb-3">
        <label className="form-label">Time:</label>
        <input type="time" className="form-control" />
      </div>

      {/* Text Input */}
      <div className="mb-3">
        <label className="form-label">Text:</label>
        <input type="text" className="form-control" />
      </div>

      {/* Number Input */}
      <div className="mb-3">
        <label className="form-label">Number:</label>
        <input type="number" className="form-control" />
      </div>

      {/* Large Textarea */}
      <div className="mb-3">
        <label className="form-label">Comments:</label>
        <textarea className="form-control"></textarea>
      </div>

      {/* Timestamp (Read-Only) */}
      <div className="mb-3">
        <label className="form-label">Timestamp:</label>
        <input
          type="text"
          className="form-control"
          value={new Date().toLocaleString()}
          readOnly
        />
      </div>

      {/* Submit Button */}
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

export default CreateBooking;
