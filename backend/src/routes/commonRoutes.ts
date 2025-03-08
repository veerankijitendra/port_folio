import { Router } from "express";
import {
  getNavBarData,
  getAboutPageData,
  getEducationPageData,
  getFooterPageData,
  getHomePageData,
  getSkillsPageData,
  getSocialPageData,
} from "../controllers/controller";

const router: Router = Router();

router.route("/navbar").get(getNavBarData);
router.route("/home").get(getHomePageData);
router.route("/about").get(getAboutPageData);
router.route("/skills").get(getSkillsPageData);
router.route("/education").get(getEducationPageData);
router.route("/social").get(getSocialPageData);
router.route("/footer").get(getFooterPageData);

export default router;
