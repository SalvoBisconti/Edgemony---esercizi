import styles from "./index.module.scss";
import MainLayout from "@/layouts/mainLayout";
import { getAllSlugs, getPostData } from "@/utils/post";

export default function Post({ postData }) {
  return (
    <MainLayout>
      <div className={styles.body}>
        <div className={styles.card}>
          <p>{postData.date}</p>
          <h1>{postData.title}</h1>
          <div>{postData.body}</div>
        </div>
      </div>
    </MainLayout>
  );
}

export const getStaticPaths = () => {
  const paths = getAllSlugs();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = ({ params }) => {
  const postData = getPostData(params.slug);
  return {
    props: {
      postData,
    },
  };
};
