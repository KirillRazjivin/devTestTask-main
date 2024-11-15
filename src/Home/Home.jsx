import React from "react";
import styles from "../Home/Home.module.css"
import RenderInput from "../CreateForm/inputForm";


const App = () => {


  return (
    <div className={styles.main}>
      <h1>THIS IS NOT A TEST TASK</h1>
       <RenderInput />
    </div>
  );
};

export default App;
