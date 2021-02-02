import React, { useEffect, useState } from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import styles from "./maker.module.css";
import { useHistory } from "react-router-dom";
import Preview from "../preview/preview";
import Editor from "../editor/editor";

const Maker = ({ authService }) => {
  const [cards, setCards] = useState([
    {
      id: "1",
      name: "카즈야 미시마",
      fightStyle: "미시마류 가라데",
      country: "일본",
      theme: "colorful",
      skill: "초풍신, 나락",
      fileName: "kazuya",
      fileURL: null,
    },
    {
      id: "2",
      name: "화랑",
      fightStyle: "태권도",
      country: "한국",
      theme: "light",
      skill: "초스카이, 로하이",
      fileName: "hwarang",
      fileURL: "hwarang.png",
    },
    {
      id: "3",
      name: "킹",
      fightStyle: "레슬링",
      country: "멕시코",
      theme: "dark",
      skill: "연속잡기, 샤이닝",
      fileName: "king",
      fileURL: "king.png",
    },
  ]);
  const history = useHistory();
  const onLogout = () => {
    authService.logout();
  };

  useEffect((user) => {
    authService.onAuthChange((user) => {
      if (!user) {
        console.log("not user");
        history.push("/");
      }
    });
  });

  const addCard = (card) => {
    const cardList = [...cards, card];
    setCards(cardList);
  };

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor cards={cards} addCard={addCard} />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
