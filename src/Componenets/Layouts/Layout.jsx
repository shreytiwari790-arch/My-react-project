import Header from './Header';
import "./Layoutt.css"
const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default Layout;
