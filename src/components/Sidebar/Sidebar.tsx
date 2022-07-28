import { FC } from "react";
import { CVProps } from "../../CV/models";
import Icon from "../Icon";
import style from "./Sidebar.module.css";

interface SidebarProps {
  data: CVProps["data"];
}

const Sidebar: FC<SidebarProps> = (props) => {
  const { data } = props;

  return (
    <div className={style.container}>
      <img className={style.photo} src={data.image} alt='no funciona' />
      <h2 className={style.subtitle}>
        {data.name} {data.lastName}
      </h2>
      <p className={style.developer}>{data.aboutMe[0]}</p>
      <ul className={style.list_container}>
        <li className={style.list_item}>
          <Icon name={["icon-house-user", style.iconItem]} />
          <a className={style.linkIcon_item} href='#home'>
            Inicio
          </a>
        </li>
        <li className={style.list_item}>
          <Icon name={["icon-user", style.iconItem]} />
          <a className={style.linkIcon_item} href='#about'>
            Sobre mi
          </a>
        </li>
        <li className={style.list_item}>
          <Icon name={["icon-graduation", style.iconItem]} />
          <a className={style.linkIcon_item} href='#resume'>
            Estudios
          </a>
        </li>
        <li className={style.list_item}>
          <Icon name={["icon-briefcase", style.iconItem]} />
          <a className={style.linkIcon_item} href='#works'>
            Experiencia
          </a>
        </li>
        <li className={style.list_item}>
          <Icon name={["icon-phone", style.iconItem]} />
          <a className={style.linkIcon_item} href='#contact'>
            Contacto
          </a>
        </li>
      </ul>
      <div>
        <ul className={style.linksIcon_container}>
          <li className={style.listItem_icon}>
            <a href={data.linkedin}>
              <Icon name={["icon-linkedin", style.linkIcon_item]} />
            </a>
          </li>
          <li className={style.listItem_icon}>
            <a href={data.gitHub}>
              <Icon name={["icon-github", style.linkIcon_item]} />
            </a>
          </li>
        </ul>
        <p>
          By {data.name} {data.lastName}
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
