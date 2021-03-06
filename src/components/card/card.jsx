import React from "react";
import styles from "./card.module.css";

const Card = ({ card }) => {
  const DEFAULT_IMAGE = "/images/default_logo.png";
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
  const url = fileURL || DEFAULT_IMAGE;
  return (
    <li className={`${styles.card} ${getStyles(theme)}`}>
      <img className={styles.avatar} src={url} alt="사진" />
      <div className={styles.info}>
        <h1 className={styles.name}>{name}</h1>
        <p className={styles.fightStyle}>{fightStyle}</p>
        <p className={styles.skill}>{skill}</p>
        <p className={styles.country}>{country}</p>
      </div>
    </li>
  );
};

function getStyles(theme) {
  switch (theme) {
    case "dark":
      return styles.dark;
    case "light":
      return styles.light;
    case "colorful":
      return styles.colorful;
    default:
      throw new Error(`unknown theme : ${theme}`);
  }
}

export default Card;
