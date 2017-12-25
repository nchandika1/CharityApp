const router = require("express").Router();
const userRoutes = require("./users");
const searchRoutes = require("./search");
const donateRoutes = require("./donation");
const volunteerRoutes = require("./volunteer");
const annualRoutes = require("./annual");

// All routes start here...
router.use("/users", userRoutes);
router.use("/search", searchRoutes);
router.use("/donation", donateRoutes);
router.use("/volunteer", volunteerRoutes);
router.use("/annual", annualRoutes);

module.exports = router;
