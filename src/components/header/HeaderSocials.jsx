import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/anastasiia-lozovych-full-stack-developer/" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com/anastasiiaLoz" target="_blank">
        <FaGithub />
      </a>
      <a href="https://www.facebook.com/anastasiia.lozovych" target="_blank">
        <BsFacebook />
      </a>
    </div>
  );
};

export default HeaderSocials;
