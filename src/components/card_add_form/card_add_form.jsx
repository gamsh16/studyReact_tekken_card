import React, { useRef } from "react";
import Button from "../button/button";
import ImageFileInput from "../image_file_input/image_file_input";
import styles from "./card_add_form.module.css";

const CardAddForm = ({ onAdd }) => {
  const formRef = useRef();
  const nameRef = useRef();
  const fightStyleRef = useRef();
  const themeRef = useRef();
  const countryRef = useRef();
  const skillRef = useRef();

  const onSubmit = (event) => {
    event.preventDefault();
    const card = {
      id: Date.now(), //uuid
      name: nameRef.current.value || "",
      fightStyle: fightStyleRef.current.value || "",
      theme: themeRef.current.value,
      country: countryRef.current.value || "",
      skill: skillRef.current.value || "",
    };
    formRef.current.reset();
    onAdd(card);
  };

  return (
    <form ref={formRef} className={styles.form}>
      <input
        ref={nameRef}
        className={styles.input}
        type="text"
        name="name"
        placeholder="Name"
      />
      <input
        ref={fightStyleRef}
        className={styles.input}
        type="text"
        name="fightStyle"
        placeholder="FightStyle"
      />
      <select ref={themeRef} name="theme" placeholder="theme">
        <option placeholder="light">light</option>
        <option placeholder="dark">dark</option>
        <option placeholder="colorful">colorful</option>
      </select>
      <input
        ref={countryRef}
        className={styles.input}
        type="text"
        name="country"
        placeholder="country"
      />
      <textarea
        ref={skillRef}
        className={styles.textarea}
        name="skill"
        placeholder="Skills"
      ></textarea>
      <div className={styles.fileInput}>
        <ImageFileInput />
      </div>
      <Button name="Add" onClick={onSubmit} />
    </form>
  );
};

export default CardAddForm;
