import { FC } from "react";
import { LooseAutocomplete } from "../../models";
type IconTypes =
  | "icon-education_graduation"
  | "icon-certificate"
  | "icon-briefcase"
  | "icon-graduation"
  | "icon-house-user"
  | "icon-github"
  | "icon-linkedin"
  | "icon-phone"
  | "icon-user";

interface IconProps {
  name: LooseAutocomplete<IconTypes>[];
}

const Icon: FC<IconProps> = ({ name }) => <i className={name.join(" ")} />;

Icon.defaultProps = {
  name: [],
};
export default Icon;
