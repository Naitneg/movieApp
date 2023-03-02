import React from "react";
import "./tickets.css"

const TicketSelector = () => {
  const [numChildren, setNumChildren] = React.useState(0);
  const [numAdults, setNumAdults] = React.useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate form input
    if (numChildren < 0 || numAdults < 0) {
      alert("Number of tickets must be a positive integer");
      return;
    }

    // Calculate total cost of tickets
    const ticketCost = 10;
    const totalCost = numChildren * ticketCost + numAdults * ticketCost;

    // Send ticket information to server
    const ticketInfo = { numChildren, numAdults, totalCost };
    console.log(ticketInfo);
  };

  return (
    <form className="ticket-selector" onSubmit={handleSubmit}>
      <label>
        Number of Children's Tickets:
        <select
          value={numChildren}
          onChange={(event) => setNumChildren(event.target.value)}
        >
          {Array.from(Array(10).keys()).map((number) => (
            <option key={number} value={number}>
              {number}
            </option>
          ))}
        </select>
      </label>
      <br />
      <label>
        Number of Adult Tickets:
        <select
          value={numAdults}
          onChange={(event) => setNumAdults(event.target.value)}
        >
          {Array.from(Array(10).keys()).map((number) => (
            <option key={number} value={number}>
              {number}
            </option>
          ))}
        </select>
      </label>
      <br />
      <button type="submit">Purchase Tickets</button>
    </form>
  );
};

export default TicketSelector;
