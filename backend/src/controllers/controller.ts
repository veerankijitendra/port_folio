import { Request, Response } from "express";
import data from "../../public/navbar.json";
import home from "../../public/home.json";
import about from "../../public/about.json";
import education from "../../public/education.json";
import footer from "../../public/footer.json";
import skills from "../../public/skills.json";
import social from "../../public/social.json";

export const getNavBarData = (req: Request, res: Response) => {
  res.status(200).json({
    status: "success",
    data,
  });
};

export const getHomePageData = (req: Request, res: Response) => {
  res.status(200).json({
    status: "success",
    data: home,
  });
};

export const getAboutPageData = (req: Request, res: Response) => {
  res.status(200).json({
    status: "success",
    data: about,
  });
};

export const getEducationPageData = (req: Request, res: Response) => {
  res.status(200).json({
    status: "success",
    data: education,
  });
};

export const getFooterPageData = (req: Request, res: Response) => {
  res.status(200).json({
    status: "success",
    data: footer,
  });
};

export const getSkillsPageData = (req: Request, res: Response) => {
  res.status(200).json({
    status: "success",
    data: skills,
  });
};

export const getSocialPageData = (req: Request, res: Response) => {
  res.status(200).json({
    status: "success",
    data: social,
  });
};
