import styles from "./index.module.scss";
import Image from "next/image";
import Link from "next/link";
const Card = ({ data }) => {
  return (
    <div className={styles.Card}>
      <Link href={"/blog/" + data?.slug} className={styles.link}>
        {/* <Image
        src={data.image}
        width={400}
        height={300}
        className={styles.img}
        alt={data.title}
      /> */}
        <p>{data.body}</p>
      </Link>
    </div>
  );
};

export default Card;
