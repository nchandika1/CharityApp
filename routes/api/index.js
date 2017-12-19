const router = require("express").Router();
const userRoutes = require("./users");
const searchRoutes = require("./search");
const donateRoutes = require("./donation");
const volunteerRoutes = require("./volunteer");

// All routes start here...
router.use("/users", userRoutes);
router.use("/search", searchRoutes);
router.use("/donation", donateRoutes);
router.use("/volunteer", volunteerRoutes);

module.exports = router;
