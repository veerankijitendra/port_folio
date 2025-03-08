import { useContext, useEffect } from "react";
import Header from "./components/Header";
import { url } from "./utils/constants";
import { MainContext } from "./contexts/Contexts";

function App() {
  const { updateHeadersData } = useContext(MainContext);
  const getRequest = (endPoint: string) => `${url}/${endPoint}`;

  const getUserData = async () => {
    try {
      const urls = [getRequest("navbar"), getRequest("home")];
      const [resNavbar, resHome]: Response[] = await Promise.all(
        urls.map((newUrl) =>
          fetch(newUrl, {
            method: "GET",
            headers: { Accept: "application/json" },
          })
        )
      );
      const navbarData = await resNavbar.json();
      const homeData = await resHome.json();
      console.log(navbarData);
      updateHeadersData(navbarData.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getUserData();
  }, []);
  return (
    <div className="text-xl  ">
      <Header />
    </div>
  );
}

export default App;
