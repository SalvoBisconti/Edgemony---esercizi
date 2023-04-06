import styles from "./index.module.scss";

import Header from "@/components/header";
import Footer from "@/components/footer";
const MainLayout = ({ children }) => {
  return (
    <div className={styles.MainLayout}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};
export default MainLayout;
