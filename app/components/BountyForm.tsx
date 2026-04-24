"use client";
import { ChangeEvent, SubmitEvent, useState } from "react";

export const BountyForm = () => {
  return (
    <form>
      <label htmlFor="hunterName">Name of bounty hunter:</label>
      <input type="text" id="hunterName" />

      <label htmlFor="targetName">Target:</label>
      <input type="text" id="targetName" />

      <label htmlFor="email">Email:</label>
      <input type="text" id="email" />

      <select name="targetPlanet" id="targetPlanet">
        <option value="">Choose a planet</option>
        <option value="Tatooine">Tatooine</option>
        <option value="Naboo">Naboo</option>
        <option value="Coruscant">Coruscant</option>
        <option value="Toshara">Toshara</option>
        <option value="Csnto Bight">Canto Bight</option>
      </select>

      <label htmlFor="rewardCredits">Reward:</label>
      <input type="number" id="rewardCredits" />

      <label htmlFor="dangerLevel" id="dangerLevel">
        Danger level:
        <label htmlFor="dangerLever">
          <input type="radio" />
          Low risk
        </label>
        <label htmlFor="dangerLever">
          <input type="radio" />
          Medium risk
        </label>
        <label htmlFor="dangerLever">
          <input type="radio" />
          High risk
        </label>
        <label htmlFor="dangerLever">
          <input type="radio" />
          Vader level problem
        </label>
      </label>

      <label htmlFor="deadLine">Deadline:</label>
      <input type="date" id="deadLine" />

      <label htmlFor="aliveRequired">Target alive required:</label>
      <input type="checkbox" id="aliveRequired" />

      <label htmlFor="notes">Notes:</label>
      <textarea id="notes">...</textarea>
    </form>
  );
};
