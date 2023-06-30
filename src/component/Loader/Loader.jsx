import { useDataContext } from "../../context/data/DataContext";
import Spinner_Light from "../../assets/spinner_light.gif";
import Spinner_Dark from "../../assets/spinner-dark.gif";

export const Loader = () => {
  const { theme } = useDataContext();
  return (
    <div>
      {theme === "dark" ? (
        <img src={Spinner_Dark} alt="loader" />
      ) : (
        <img src={Spinner_Light} alt="loader" />
      )}
    </div>
  );
};
