import React, { useState } from "react";
import Edit from "./Edit";

const Page = (data) => {
  const [showing, setShowing] = useState({
    cardId: null,
    show: false,
    index: 0,
  });

  const zoo = data.data;
  const [pageShow, setPageShow] = useState({
    id: "card-0",
    name: "",
    group: "žinduolis",
    weight: "",
    lives: false,
  });
  const handlePage = (data) => {
    setPageShow(data);
  };
  console.log(zoo);
  if (zoo != null) {
    return zoo.map((key, value) => {
      const del = () => {
        const cardIndex = zoo
          .map((el) => {
            return el.id;
          })
          .indexOf(key.id);
        zoo.splice(cardIndex, 1);
        localStorage.setItem("Zoo", JSON.stringify(zoo));
        if(document.getElementById(key.id)!=null){
            document.getElementById(key.id).remove();
        }
        if(localStorage.getItem("Zoo")!=null){
            if(localStorage.getItem("Zoo").length<=2){
                localStorage.removeItem("Zoo")
            }
        }
      };
      const edit = () => {
        const cardIndex = zoo
          .map((el) => {
            return el.id;
          })
          .indexOf(key.id);
      };
      const showEd = () => {
        const cardIndex = zoo
          .map((el) => {
            return el.id;
          })
          .indexOf(key.id);
        setShowing({
          cardId: key.id,
          show: true,
          index: cardIndex,
        });
        setPageShow(zoo[cardIndex]);
        if (document.querySelector(".edit_card") != null) {
          document.querySelector(".edit_card").style.display = "flex";
        }
      };

      let lives = "nepazimeta";
      if (key.lives === true) {
        lives = "Gyventa lietuvos Zoo sode";
      } else if (key.lives === false) {
        lives = "Negyventa lietuvos Zoo sode";
      }

      return (
        <div className="card" id={key.id}>
          <p>{key.name}</p>
          <p>{key.group}</p>
          <p>{key.weight}kg</p>
          <p>{lives}</p>
          <button type="button" className="update_button" onClick={showEd}>
            Edit
          </button>
          <button type="button" className="delete_button" onClick={del}>
            X
          </button>
          <Edit
            data={pageShow}
            show={showing}
            cardId={key.id}
            handlePage={handlePage}
          />
        </div>
      );
    });
  }
};
export default Page;
