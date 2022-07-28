import { FC } from "react";
import { CVProps } from "../../CV/models";
import style from "./Contact.module.css";

interface ContactProps {
  data: CVProps["data"];
}

const Contact: FC<ContactProps> = (props) => {
  const { data } = props;
  return (
    <div className={style.container}>
      <div className={style.content_container}>
        <h1 className={style.title}>Contáctame</h1>
        <div className={style.content}>
          <div className={style.data_container}>
            <div>
              <i></i>
              <div>
                <h3 className={style.title}>Telefono</h3>
                <p>{data.phone}</p>
              </div>
            </div>
            <div>
              <i></i>
              <div>
                <h3 className={style.title}>Email</h3>
                <p>{data.email}</p>
              </div>
            </div>
          </div>
          <div>
            <form className={style.form} action=''>
              <input className={style.text} type='text' name='name' placeholder='Tu nombre' required />
              <input className={style.text} type='email' name='email' placeholder='Tu Email' required />
              <input className={style.text} type='text' name='subject' placeholder='Asunto' required />
              <input className={style.message} type='text' name='message' placeholder='Mensaje' required />
              <button type='submit'>Enviar</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
