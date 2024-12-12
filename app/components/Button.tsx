import styles from "./Button.module.css";

interface Props {
  text: string;
  href?: string;
  download?: string;
  width?: number;
}

const Btn = ({ text, href, download, width }: Props) => {
  return (
    <a
      className={styles["btn"]}
      href={href}
      download={download}
      style={{ width: width }}
    >
      {text}
    </a>
  );
};

export default Btn;
