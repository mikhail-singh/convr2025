import styles from "./Button.module.css";

interface Props {
  text: string;
  href?: string;
  download?: string;
}

const Btn = ({ text, href, download }: Props) => {
  return (
    <a className={styles["btn"]} href={href} download={download}>
      {text}
    </a>
  );
};

export default Btn;
