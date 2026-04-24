"use client";
import { ChangeEvent, SubmitEvent, useState } from "react";
import { Contract } from "../models/Contract";

export const BountyForm = () => {
  const [contract, setContract] = useState<Contract>(
    new Contract("", "", "", "", 0, "", new Date(), false),
  );

  const [contracts, setContracts] = useState<Contract[]>([]);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    if (
      e.target.type === "text" ||
      e.target.type === "email" ||
      e.target.type === "select-one"
    ) {
      setContract({ ...contract, [e.target.id]: e.target.value });
    }
    if (e.target.type === "radio") {
      setContract({ ...contract, [e.target.name]: e.target.value });
    }
    if (e.target.type === "checkbox") {
      setContract({ ...contract, [e.target.id]: e.target.checked });
    }
    if (e.target.type === "number") {
      setContract({ ...contract, [e.target.id]: e.target.valueAsNumber });
    }
    if (e.target.type === "date") {
      setContract({ ...contract, [e.target.id]: e.target.valueAsDate });
    }
  };

  return (
    <div className="flex flex-col gap-5">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log("Submit: ", contract);
          setContracts([...contracts, contract]);
          setContract(new Contract("", "", "", "", 0, "", new Date(), false));
        }}
        className="flex flex-col gap-5 border-2 border-yellow-400 rounded-md p-5"
      >
        <label className="flex flex-col" htmlFor="hunterName">
          Name of bounty hunter:
          <input
            value={contract.hunterName}
            className="border border-yellow-300 rounded-sm"
            type="text"
            id="hunterName"
            onChange={handleChange}
          />
        </label>

        <label className="flex flex-col" htmlFor="targetName">
          Target:
          <input
            value={contract.targetName}
            className="border border-yellow-300 rounded-sm"
            type="text"
            id="targetName"
            onChange={handleChange}
          />
        </label>

        <label className="flex flex-col" htmlFor="email">
          Email:
          <input
            value={contract.email}
            className="border border-yellow-300 rounded-sm"
            type="email"
            id="email"
            onChange={handleChange}
          />
        </label>

        <select
          className="border border-yellow-300 rounded-sm"
          name="targetPlanet"
          id="targetPlanet"
          onChange={handleChange}
        >
          <option value="">Choose a planet</option>
          <option value="Tatooine">Tatooine</option>
          <option value="Naboo">Naboo</option>
          <option value="Coruscant">Coruscant</option>
          <option value="Toshara">Toshara</option>
          <option value="Canto Bight">Canto Bight</option>
        </select>

        <label className="flex flex-col" htmlFor="rewardCredits">
          Reward:
          <input
            value={contract.rewardCredits}
            className="border border-yellow-300 rounded-sm"
            type="number"
            id="rewardCredits"
            onChange={handleChange}
          />
        </label>

        <fieldset className="border border-yellow-300 rounded-sm p-2">
          <legend>Danger level:</legend>

          <label className="mr-3" htmlFor="danger-low">
            <input
              value={"low"}
              id="danger-low"
              name="dangerLevel"
              type="radio"
              onChange={handleChange}
            />
            Low risk
          </label>

          <label className="mr-3" htmlFor="danger-md">
            <input
              value={"medium"}
              id="danger-md"
              name="dangerLevel"
              type="radio"
              onChange={handleChange}
            />
            Medium risk
          </label>

          <label className="mr-3" htmlFor="danger-high">
            <input
              value={"high"}
              id="danger-high"
              name="dangerLevel"
              type="radio"
              onChange={handleChange}
            />
            High risk
          </label>

          <label className="mr-3" htmlFor="danger-vader">
            <input
              value={"vader-level"}
              id="danger-vader"
              name="dangerLevel"
              type="radio"
              onChange={handleChange}
            />
            Vader level problem
          </label>
        </fieldset>

        <label className="flex flex-col" htmlFor="deadLine">
          Deadline:
          <input
            value={contract.deadLine.toLocaleDateString()}
            className="border border-yellow-300 rounded-sm"
            type="date"
            id="deadLine"
            onChange={handleChange}
          />
        </label>

        <label htmlFor="aliveRequired">
          Target alive required:
          <input
            className="ml-3"
            type="checkbox"
            id="aliveRequired"
            checked={contract.aliveRequired}
            onChange={handleChange}
          />
        </label>
        <button className="border border-yellow-300 rounded-sm">Save</button>
      </form>
      <section className="grid grid-cols-2 gap-5">
        {contracts.map((c) => (
          <div
            className="border-2 border-yellow-400 rounded-md p-5 w-full"
            key={c.email}
          >
            <h2>Bounty hunter: {c.hunterName}</h2>
            <h3>Target: {c.targetName}</h3>
            <p>Email: {c.email}</p>
            <p>Planet: {c.targetPlanet}</p>
            <p>Reward: {c.rewardCredits} credits.</p>
            <div>
              Danger level: <span>{c.dangerLevel}</span>
            </div>
            <p>Deadline: {c.deadLine.toLocaleDateString()}</p>
            <p>Target alive: {c.aliveRequired ? "Yes" : "No"}</p>
          </div>
        ))}
      </section>
    </div>
  );
};
