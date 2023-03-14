import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div>
        <span>With ❤️ by </span>
        <a
          href="https://github.com/blackipie"
          target="_blank"
          rel="noopener noreferrer"
        >
          Shafin
        </a>
      </div>
    </div>
  );
};

export default Footer;
