import React from "react";
import CardEditForm from "../card_edit_form/card_edit_form";
import styles from "./editor.module.css";

const Editor = ({ cards }) => (
  <section className={styles.editor}>
    <h1 className={styles.title}>Card Maker</h1>
    <ul>
      {cards.map((card) => {
        return <CardEditForm card={card}></CardEditForm>;
      })}
    </ul>
  </section>
);

export default Editor;
