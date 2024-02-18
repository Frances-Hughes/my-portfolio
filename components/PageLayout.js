import Nav from "./Nav";
import Header from "./Header";
import TopLeftImg from "./TopLeftImg";

const PageLayout = ({ children }) => {
  return (
    <div className={`page bg-site text-white bg-cover bg-no-repeat relative`}>
      <TopLeftImg />
      <Nav />
      <Header />
      {children}
    </div>
  );
};

export default PageLayout;
