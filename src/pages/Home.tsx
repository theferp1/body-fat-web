import Main from "../layouts/Main";
import Documentation from "../layouts/Documentation";
import { useMainContext } from "../contexts/MainContext";

const Home = () => {
  const { mainRef, documentationRef } = useMainContext();

  return (
    <div className="">
      <div ref={mainRef}>
        <Main />
      </div>
      <div ref={documentationRef}>
        <Documentation />
      </div>
    </div>
  );
};

export default Home;
