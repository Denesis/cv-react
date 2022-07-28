import { FC } from "react";
import { CVProps } from "../../CV/models";
import style from "./Home.module.css";

interface HomeProps {
  data: CVProps["data"];
}
const Home: FC<HomeProps> = (props) => {
  const { data } = props;

  return (
    <div className={style.containers}>
      <div className={style.item_container}>
        <div className={style.item_text}>
          <h1 className={style.title}>
            Yo soy {data.name} {data.lastName}
          </h1>
          <p className={style.description}>{data.aboutMe[3]}</p>
        </div>
        <img className={style.icon_programmer} src='https://i.imgur.com/r0AmT2g.png' alt='' />
      </div>
      <div>
        <button>Ver mi Portafolio</button>
        <button>Contáctame</button>
      </div>
    </div>
  );
};
export default Home;
