import React from "react";
import CardEditForm from "../card_edit_form/card_edit_form";
import CardAddForm from "../card_add_form/card_add_form";
import styles from "./editor.module.css";

const Editor = ({ cards, addCard }) => (
  <section className={styles.editor}>
    <h1 className={styles.title}>Card Maker</h1>
    <ul>
      {cards.map((card) => {
        return <CardEditForm key={card.id} card={card}></CardEditForm>;
      })}
      <CardAddForm onAdd={addCard} />
    </ul>
  </section>
);

export default Editor;
