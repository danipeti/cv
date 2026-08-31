import type { FC } from "react";
import clsx from "clsx";
import styles from "./Header.module.css";
import locationIcon from "../../assets/icons/location.svg";
import mailIcon from "../../assets/icons/mail.svg";
import phoneIcon from "../../assets/icons/phone.svg";
import linkedinIcon from "../../assets/icons/linkedin.svg";
import githubIcon from "../../assets/icons/github.svg";
import relocationIcon from "../../assets/icons/relocation.svg";
import { personal } from "../../data/personal.ts";

const Header: FC = () => {
  const {
    name,
    role,
    relocation,
    photo,
    location,
    email,
    phone,
    linkedin,
    github,
  } = personal;

  return (
    <header className={styles.container}>
      <img src={photo} alt={name} className={styles.photo} />
      <div className={styles.info}>
        <h1 className={styles.name}>{name}</h1>
        <div className={styles.role}>{role}</div>
        <div className={styles.contacts}>
          <span className={clsx(styles.contact, styles.location)}>
            <img src={locationIcon} alt="" aria-hidden="true" />
            <span>{location}</span>
          </span>
          <span className={clsx(styles.contact, styles.relocation)}>
            <img src={relocationIcon} alt="" aria-hidden="true" />
            <span>{relocation}</span>
          </span>
          <a href={`mailto:${email}`} className={styles.contact}>
            <img src={mailIcon} alt="" aria-hidden="true" />
            <span>{email}</span>
          </a>
          <a
            href={`tel:${phone.replace(/\s+/g, "")}`}
            className={clsx(styles.contact, styles.phone)}
          >
            <img src={phoneIcon} alt="" aria-hidden="true" />
            <span>{phone}</span>
          </a>
          <a
            href={linkedin.url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.contact}
          >
            <img src={linkedinIcon} alt="" aria-hidden="true" />
            <span>{linkedin.label}</span>
          </a>
          <a
            href={github.url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.contact}
          >
            <img src={githubIcon} alt="" aria-hidden="true" />
            <span>{github.label}</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
