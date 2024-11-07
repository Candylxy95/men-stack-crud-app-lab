const express = require("express");
const router = express.Router();
const {
  viewAllGyms,
  createGym,
  viewOneGymById,
  updateGymById,
  deleteGymById,
  findGymById,
} = require("../controllers/gyms");

router.get("/", viewAllGyms); //display a list of gyms
router.post("/gyms", createGym); //create more gyms
router.get("/gyms/:id", viewOneGymById); //view one gym
router.put("/gyms/:id", updateGymById); //update gym
router.delete("/gyms/:id", deleteGymById); //delete gym
// router.get("/gyms/:id/edit", findGymById);

module.exports = router;
