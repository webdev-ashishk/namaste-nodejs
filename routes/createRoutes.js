const express = require("express");
const router = express.Router();
const {
  handleSum,
  handleSumQueryParams,
  handleSumHeaderCounter,
  handleSumBodyCounter,
  handleAddition,
  handleMultiplication,
  handleFrontEndData,
  handleSkills,
  handleUsers,
  handleUsersDynamicID,
} = require("../controllers/routeFunctions");

router.get("/", handleSum);
router.get("/handlesumqueryparams", handleSumQueryParams);
router.post("/handlesumHeadercounter", handleSumHeaderCounter);
router.post("/handlesumbodycounter", handleSumBodyCounter);
router.get("/handleaddition", handleAddition);
router.get("/handlemultiplication", handleMultiplication);
router.post("/handlefrontenddata", handleFrontEndData);
router.get("/handleskills", handleSkills);
router.get("/users", handleUsers);
router.get("/users/:userid", handleUsersDynamicID);

module.exports = router;
