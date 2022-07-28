import { FC } from "react";
import { CVProps } from "../../CV/models";
import style from "./Resume.module.css";

interface ResumeProps {
  education: CVProps["education"];
}

const Resume: FC<ResumeProps> = (props) => {
  const { education } = props;

  return (
    <div className={style.container}>
      <div className={style.text_container}>
        <h1 className={style.title}>Mis Estudios</h1>
        <div className={style.text_item}>
          {education.map((education) => {
            return (
              <div className={style.text}>
                <h3>{education.name}</h3>
                <p>{education.date}</p>
                <p>{education.where}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Resume;
