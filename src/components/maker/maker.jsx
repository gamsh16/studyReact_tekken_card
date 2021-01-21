import React, { useEffect } from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import styles from "./maker.module.css";
import { useHistory } from "react-router-dom";
import Preview from "../preview/preview";
import Editor from "../editor/editor";

const Maker = ({ authService }) => {
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

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor />
        <Preview />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
