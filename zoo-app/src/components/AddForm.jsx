import React, { useState } from "react";
import Page from "./Page";
const formaEnd = () => {
  document.querySelector(".addAnimal_form_back").style.display = "none";
};

const AddForm = ({ handlePage }) => {
  const [formValue, setFormValue] = useState({
    id: "card-0",
    name: "",
    group: "žinduolis",
    weight: "",
    lives: false,
  });
  const handleChange = (ev) => {
    const { name, value } = ev.target;
    setFormValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = (ev) => {
    ev.preventDefault();
    const isZoo = localStorage.getItem("Zoo");
    const zoo = isZoo === null ? [] : JSON.parse(isZoo);
    let id = "card-0";
    zoo.map((el) => {
      if (el.id === id) {
        id = id.replace("card-", "");
        id = +id;
        id = "card-" + (id + 1);
      }
    });
    formValue.id = id;

    zoo.push(formValue);
    localStorage.setItem("Zoo", JSON.stringify(zoo));
    document.querySelector(".addAnimal_form_back").style.display = "none";

    handlePage(zoo);
  };
  const handleCheck = (ev) => {
    const value = ev.target.checked;
    setFormValue((prev) => ({
      ...prev,
      lives: value,
    }));
  };

  return (
    <div className="addAnimal_form_back" style={{ display: "none" }}>
      <button className="add_form_close" onClick={formaEnd}>
        close
      </button>
      <h2>Add</h2>
      <form className="addAnimal_form" onSubmit={handleSubmit}>
        <label htmlFor="add_form_name">Pavadinamas</label>
        <input
          id="add_from_anme"
          type="text"
          value={formValue.name}
          onChange={handleChange}
          name="name"
          required
        />
        <label htmlFor="add_form_group">Grupe</label>
        <select
          id="add_form_group"
          onChange={handleChange}
          value={formValue.group}
          name="group"
        >
          <option value="žinduolis">žinduolis</option>
          <option value="Vabzdys">Vabzdys</option>
          <option value="Varliagyvis">Varliagyvis</option>
          <option value="Žuvis">Žuvis</option>
          <option value="Roplys">Roplys</option>
          <option value="Paukštis">Paukštis</option>
        </select>

        <label htmlFor="add_form_weight">Svoris</label>
        <input
          id="add_from_weight"
          type="number"
          value={formValue.weight}
          onChange={handleChange}
          name="weight"
          required
        />
        <label htmlFor="add_form_zoo">Ar gyvena lietuvos Sode</label>
        <input
          id="add_from_zoo"
          type="checkbox"
          onChange={handleCheck}
          checked={formValue.lives}
        />
        <button type="submit" id="add_from_zoo_submit">
          submit
        </button>
      </form>
    </div>
  );
};

export default AddForm;
