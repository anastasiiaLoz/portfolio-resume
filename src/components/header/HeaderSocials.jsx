import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { GiAbstract047 } from "react-icons/gi";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://linledin.com" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com" target="_blank">
        <FaGithub />
      </a>
      <a href="https://dribble.com" target="_blank">
        <GiAbstract047 />
      </a>
    </div>
  );
};

export default HeaderSocials;
