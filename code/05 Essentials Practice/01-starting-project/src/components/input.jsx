import React from 'react';
import { calculateInvestmentResults, formatter } from '../util/investment.js';
import { useState, useEffect } from 'react';

export default function Input() {
  const [initialInvestment, setInitialInvestment] = useState(10000);
  const [annualInvestment, setAnnualInvestment] = useState(1200);
  const [expectedReturn, setExpectedReturn] = useState(6);
  const [duration, setDuration] = useState(10);
  const [investmentResults, setInvestmentResults] = useState([]);

  useEffect(() => {
    const results = calculateInvestmentResults({
      initialInvestment: Number(initialInvestment),
      annualInvestment: Number(annualInvestment),
      expectedReturn: Number(expectedReturn),
      duration: Number(duration),
    });
    setInvestmentResults(results);
  }, [initialInvestment, annualInvestment, expectedReturn, duration]); // Dependency array

  const handleInitialInvestmentChange = (e) => {
    setInitialInvestment(e.target.value);
    calculateResults();
  };

  const handleAnnualInvestmentChange = (e) => {
    setAnnualInvestment(e.target.value);
    calculateResults();
  };

  const handleExpectedChange = (e) => {
    setExpectedReturn(e.target.value);
    calculateResults();
  };

  const handleDurationChange = (e) => {
    setDuration(e.target.value);
    calculateResults();
  };

  return (
    <>
      <div className="mainContainer">
        <div id="user-input">
          <div className="input-group">
            <p>
              <label>Initial Investment</label>
              <input
                type="number"
                required
                value={initialInvestment}
                onChange={handleInitialInvestmentChange}
              />
            </p>
            <p>
              <label>Annual Investment</label>
              <input
                type="number"
                required
                value={annualInvestment}
                onChange={handleAnnualInvestmentChange}
              />
            </p>
            <p>
              <label>Expected</label>
              <input
                type="number"
                required
                value={expectedReturn}
                onChange={handleExpectedChange}
              />
            </p>
            <p>
              <label>Duration</label>
              <input
                type="number"
                required
                value={duration}
                onChange={handleDurationChange}
              />
            </p>
          </div>
        </div>
        <div id="result">
          <table>
            <thead>
              <tr>
                <th>Year</th>
                <th>Investment Value</th>
                <th>Interest(Year) </th>
                <th>Total Interest</th>
                <th>Invested Capital</th>
              </tr>
            </thead>
            <tbody>
              {investmentResults.map((result) => (
                <tr key={result.year}>
                  <td>{result.year}</td>
                  <td>{formatter.format(result.valueEndOfYear)}</td>
                  <td>{formatter.format(result.interest)}</td>
                  <td>{formatter.format(result.totalInterestEarned)}</td>
                  <td>{formatter.format(result.totalInvestedCapital)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
