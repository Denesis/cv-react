import { FC } from "react";
import { CVProps } from "../../CV/models";
import style from "./Skills.module.css";

interface SkillsProsp {
  abilities: CVProps["abilities"];
}
const Skills: FC<SkillsProsp> = (props) => {
  const { abilities } = props;
  return (
    <div className={style.containers}>
      <h1 className={style.title}>Hablidades</h1>
      <div className={style.abilities_container}>
        {abilities.map((ability) => (
          <h4 className={style.ability_item}>{ability}</h4>
        ))}
      </div>
      <p className={style.text}>
        "La habilidad es lo que eres capaz de hacer. La motivación determina que lo harás. La actitud lo bien que lo harás"
        <p className={style.text_author}>Lou Holtz</p>
      </p>
    </div>
  );
};
export default Skills;
