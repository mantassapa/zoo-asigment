import React, { useState } from "react";

const Edit = (data, show, cardId, handlePage) => {
  //   console.log(data);
  const forma = data.data;
  const closing = () => {
    document.querySelector(".edit_card").style.display = "none";
  };

  const [formValue, setFormValue] = useState(data.data);

  if (data.show.show === true && data.show.cardId === data.cardId) {
    const handleChange = (ev) => {
      const { name, value } = ev.target;
      setFormValue((prev) => ({
        ...prev,
        [name]: value,
      }));

      data.handlePage(forma);
    };

    const handleSubmit = (ev) => {
      const isZoo = localStorage.getItem("Zoo");
      const zoo = isZoo === null ? [] : JSON.parse(isZoo);

      zoo[data.show.index] = formValue;
      localStorage.setItem("Zoo", JSON.stringify(zoo));
      document.querySelector(".addAnimal_form_back").style.display = "none";

      data.handlePage(zoo);
    };

    const handleCheck = (ev) => {
      const value = ev.target.checked;
      setFormValue((prev) => ({
        ...prev,
        lives: value,
      }));
    };

    return (
      <div className="edit_card">
        <form className="editAnimal_form" onSubmit={handleSubmit}>
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
          <button
            type="submit"
            id="add_from_zoo_submit"
            style={{ backgroundColor: "orange" }}
          >
            update
          </button>
          <button type="button" className="edit_close" onClick={closing}>
            X
          </button>
        </form>
      </div>
    );
  }
};

export default Edit;
