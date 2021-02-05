import React, { useRef } from "react";
import Button from "../button/button";
import styles from "./card_edit_form.module.css";

const CardEditForm = ({ FileInput, card, updateCard, deleteCard }) => {
  const nameRef = useRef();
  const fightStyleRef = useRef();
  const themeRef = useRef();
  const countryRef = useRef();
  const skillRef = useRef();

  const {
    id,
    name,
    fightStyle,
    country,
    theme,
    skill,
    fileName,
    fileURL,
  } = card;

  const onSubmit = (event) => {
    if (event.currentTarget == null) {
      return;
    }
    event.preventDefault();

    deleteCard(card);
  };

  const onChange = (event) => {
    if (event.currentTarget == null) {
      return;
    }
    event.preventDefault();
    updateCard({
      ...card,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  const onFileChange = (file) => {
    updateCard({
      ...card,
      fileName: file.name,
      fileURL: file.url,
    });
  };

  return (
    <form className={styles.form}>
      <input
        className={styles.input}
        type="text"
        name="name"
        value={name}
        ref={nameRef}
        onChange={onChange}
      />
      <input
        className={styles.input}
        type="text"
        name="fightStyle"
        value={fightStyle}
        ref={fightStyleRef}
        onChange={onChange}
      />
      <select name="theme" value={theme} ref={themeRef} onChange={onChange}>
        <option value="light">light</option>
        <option value="dark">dark</option>
        <option value="colorful">colorful</option>
      </select>
      <input
        className={styles.input}
        type="text"
        name="country"
        value={country}
        ref={countryRef}
        onChange={onChange}
      />
      <textarea
        className={styles.textarea}
        name="skill"
        value={skill}
        ref={skillRef}
        onChange={onChange}
      ></textarea>
      <div className={styles.fileInput}>
        <FileInput name={fileName} onFileChange={onFileChange} />
      </div>
      <Button name="Delete" onClick={onSubmit}></Button>
    </form>
  );
};

export default CardEditForm;
