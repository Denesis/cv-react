import { FC } from "react";
import { CVProps } from "../../CV/models";
import style from "./Works.module.css";

interface WorksProps {
  experience: CVProps["experience"];
}

const Works: FC<WorksProps> = (props) => {
  const { experience } = props;
  return (
    <div className={style.containers}>
      <h1 className={style.title}>Experiencia</h1>
      <div className={style.experience_container}>
        {experience.map((work) => (
          <div key={JSON.stringify(work)}>
            <div className={style.subtitle_container}>
              <h3 className={style.title_exp}>{work.name}</h3>
              <p>{work.date}</p>
              <p>{work.where}</p>
            </div>
            <ul className={style.list_container}>
              {work.descripcion.map((job) => (
                <li key={job}>{job}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Works;
