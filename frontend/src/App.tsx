import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import { endpoints } from "./utils/constants";
import {
  TAboutResponse,
  TEducationResponse,
  TFooterResponse,
  THomePageResponse,
  TNavBarRespone,
  TSkillsResponse,
  TSocialResponse,
} from "./utils/types";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Footer from "./components/Footer";
import { useMainContext } from "./hooks/useMainContext";

function App() {
  const {
    updateHeadersData,
    updateHomeData,
    updateAboutData,
    updateSkillsData,
    updateEducationData,
    updateSocialData,
    updateFooterData,
  } = useMainContext();
  const getRequest = (endPoint: string) => `${endPoint}`;

  const getUserData = async () => {
    try {
      const urls = [
        getRequest(endpoints.navbar),
        getRequest(endpoints.home),
        getRequest(endpoints.about),
        getRequest(endpoints.skills),
        getRequest(endpoints.education),
        getRequest(endpoints.social),
        getRequest(endpoints.fotter),
      ];
      const [
        resNavbar,
        resHome,
        resAbout,
        resSkills,
        resEducation,
        resSocial,
        resFooter,
      ]: Response[] = await Promise.all(
        urls.map((newUrl) =>
          fetch(newUrl, {
            method: "GET",
            headers: { Accept: "application/json" },
          })
        )
      );
      const navbarData: TNavBarRespone = await resNavbar.json();
      const homeData: THomePageResponse = await resHome.json();
      const aboutData: TAboutResponse = await resAbout.json();
      const skillsData: TSkillsResponse = await resSkills.json();

      const educationData: TEducationResponse = await resEducation.json();
      const socialData: TSocialResponse = await resSocial.json();
      const footerData: TFooterResponse = await resFooter.json();

      updateHeadersData(navbarData);
      updateHomeData(homeData);
      updateAboutData(aboutData);
      updateSkillsData(skillsData);
      updateEducationData(educationData);
      updateSocialData(socialData);
      updateFooterData(footerData);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getUserData();
  }, []);
  return (
    <BrowserRouter>
      <Header />
      <div className="bg-theme px-4">
        <div className="responsive-container">
          <Home />
          <About />
          <Skills />
          <Education />
        </div>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
