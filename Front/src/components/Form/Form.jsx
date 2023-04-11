import { useState } from "react";
import style from "./Form.module.css";
import { validate } from "./validation";

function Form(props) {
  const [userData, setUserData] = useState({ username: "", password: "" });
  const [errors, setErrors] = useState({ username: "", password: "" });

  const handleInputChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    setUserData({ ...userData, [property]: value });
    setErrors(validate({ ...userData, [property]: value }));
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.login(userData)
  };

  return (
    <div className={style.allContainer}>
      <div style={{ display: "flex", justifyContent: "center", }}>
        <form className={style.form} onSubmit={submitHandler}>
          <div className={style.userDiv}>
            <label htmlFor="username" className={style.title}>Username: </label>
            <input
              type="text"
              name="username"
              value={userData.username}
              onChange={handleInputChange}
              className={errors.username ? style.failed : style.success}
              autoComplete="off"
            ></input>
            <span className={style.errors}>{errors.username}</span>
          </div>
          <div className={style.passDiv}>
            <label htmlFor="password" className={style.title}>Password: </label>
            <input
              type="password"
              name="password"
              value={userData.password}
              onChange={handleInputChange}
              className={errors.password ? style.failed : style.success}
            ></input>
            <span className={style.errors}>{errors.password}</span>
          </div>
          <button className={style.button}>Login</button>
        </form>
      </div>
    </div>
  );
}

export default Form;
