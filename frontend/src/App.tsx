import { useContext, useEffect } from "react";
import Header from "./components/Header";
import { url } from "./utils/constants";
import { MainContext } from "./contexts/Contexts";

function App() {
  const { updateHeadersData } = useContext(MainContext);
  const getRequest = (endPoint: string) => `${url}/${endPoint}`;
  const getUserData = async () => {
    try {
      // const urls = [getRequest("navbar"), getRequest("home")];
      // const responses = (await Promise.allSettled(urls)).map(async(each) => await each.json() );
      // const fetchPromises = urls.map(url => fetch(url,{
      //   method: "GET",
      //   headers: { Accept: "application/json" },
      // }).then)
      // console.log(responses);
      // const response = await fetch(`${url}/navbar`, {
      //   method: "GET",
      //   headers: { Accept: "application/json" },
      // });
      // const data = await response.json();
      // if (data.status === "success" && Array.isArray(data.data.sections)) {
      //   updateHeadersData(data.data.sections);
      // }
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
