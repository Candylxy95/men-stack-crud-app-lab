const Gyms = require("../models/Gyms");

const viewAllGyms = async (req, res) => {
  try {
    const gyms = await Gyms.find();
    if (gyms) {
      res.render("index.ejs", { climbgyms: gyms });
    } else {
      res
        .status(400)
        .send({ status: "Unsuccessful", msg: "Failed to retrieve gym list" });
    }
  } catch (error) {
    console.error("Fetch error: ", error.message);
    res.status(500).send({
      status: "Error",
      msg: "Server error: Unable to retrieve gym list",
    });
  }
};

const createGym = async (req, res) => {
  try {
    const gym = await Gyms.create({
      name: req.body.name,
      address: req.body.address,
      singleEntryPrice: req.body.singleEntryPrice,
      boulder: req.body.boulder,
      highWall: req.body.highWall,
    });
    if (gym) {
      res.redirect("/");
    } else {
      res
        .status(400)
        .send({ status: "Unsuccessful", msg: "Failed to create gym" });
    }
  } catch (error) {
    console.error("Gym creation error: ", error.message);
    res
      .status(500)
      .send({ status: "Error", msg: "Server error: Unable to create gym" });
  }
};

const viewOneGymById = async (req, res) => {
  try {
    const gym = await Gyms.findById(req.params.id);
    if (gym) {
      res.render("gyms/show.ejs", { climbgyms: gym });
    } else {
      console.log(
        res.status(400).send({ status: "Unsuccessful", msg: "Id do not exist" })
      );
    }
  } catch (error) {
    console.error("View gym by id error: ", error.message);
    res
      .status(500)
      .send({ status: "Error", msg: "Server error: Unable to retrieve gym" });
  }
};

const findGymById = async (req, res) => {
  try {
    const gym = await Gyms.findByIdAndUpdate(req.params.id);
    if (gym) {
      res.render("gyms/edit.ejs", { climbgyms: gym });
    }
  } catch (error) {
    console.error("Server error fetching gym for edit", error.message);
  }
};

const updateGymById = async (req, res) => {
  try {
    const gym = await Gyms.findByIdAndUpdate(
      req.params.id,
      {
        name: req.body.name,
        address: req.body.address,
        singleEntryPrice: req.body.singleEntryPrice,
        boulder: req.body.boulder,
        highWall: req.body.highWall,
      },
      { new: true }
    );
    if (gym) {
      res.render("gyms/show.ejs", { climbgyms: gym });
    } else {
      res
        .status(400)
        .send({ status: "Unsuccessful", msg: "Unable to update gym" });
    }
  } catch (error) {
    console.error("Update gym error: ", error.message);
    res
      .status(500)
      .send({ status: "Error", msg: "Server error: Unable to update gym" });
  }
};

const deleteGymById = async (req, res) => {
  try {
    const gym = await Gyms.findByIdAndDelete(req.params.id);
    if (gym) {
      res.redirect("/");
    } else
      res
        .status(400)
        .send({ status: "Unsuccessful", msg: "Unable to delete gym" });
  } catch (error) {
    console.error("Delete gym error: ", error.message);
    res
      .status(500)
      .send({ status: "Error", msg: "Server error: Unable to delete gym" });
  }
};

module.exports = {
  viewAllGyms,
  createGym,
  viewOneGymById,
  updateGymById,
  deleteGymById,
  findGymById,
};
