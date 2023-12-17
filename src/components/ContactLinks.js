import React from "react";
import githubIcon from "../assets/github.svg";
import linkedinIcon from "../assets/linkedin.svg";
import facebookIcon from "../assets/facebook.svg";
import xIcon from "../assets/x.svg";
import emailIcon from "../assets/email.svg";
import "../styles/contact_links.css";

const ContactLinks = () => {
  const CONTACT_ITEMS = [
    { name: "GitHub",
      url: "https://github.com/zhuo-cheng/",
      icon: githubIcon },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/zhuo-cheng/",
      icon: linkedinIcon,
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/joel.zhuo.cheng/",
      icon: facebookIcon,
    },
    {
      name: "X",
      url: "https://twitter.com/zhuoch/",
      icon: xIcon },
    { 
      name: "Email",
      url: "mailto:joel.zhuo.cheng@gmail.com",
      icon: emailIcon },
  ];

  return (
    <ul className="links">
      {CONTACT_ITEMS.map((item) => (
        <li className="link" key={item.name}>
          <a href={item.url} target="_blank" rel="noreferrer noopener">
            <img src={item.icon} alt={`${item.name} icon`} />
            <span>{item.name}</span>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default ContactLinks;
