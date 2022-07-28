import { FC } from "react";
import { CVProps } from "../../CV/models";
import style from "./About.module.css";

interface AboutProsp {
  data: CVProps["data"];
}

const About: FC<AboutProsp> = (props) => {
  const { data } = props;
  return (
    <div id='about' className={style.container}>
      <h1 className={style.title}>Sobre Mi</h1>
      <div className={style.item_container}>
        <img className={style.photo} src={data.image} alt='no funciona' />
        <div className={style.text_container}>
          <h2 className={style.subtitle}>Hola,</h2>
          <p className={style.text_item}>{data.aboutMe[1]}</p>
          <p className={style.text_item}>{data.aboutMe[2]}</p>
          <div className={style.data_container}>
            <div className={style.text_container}>
              <div className={style.text_item}>
                <p className={style.key}>Nombre:</p>
                <span>
                  {data.name} {data.lastName}
                </span>
              </div>
              <div className={style.text_item}>
                <p className={style.key}>Edad:</p>
                <span>{data.age} años</span>
              </div>
            </div>
            <div className={style.text_container}>
              <div className={style.text_item}>
                <p className={style.key}>Email:</p>
                <span>{data.email}</span>
              </div>
              <div className={style.text_item}>
                <p className={style.key}>Localidad:</p>
                <span>{data.city}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
