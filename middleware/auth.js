const auth = (req, res, next) => {
  if (req.query.security === "valid") {
    next();
  } else {
    res.status(403).json({ message: "Unauthorized" });
  }
};

module.exports = auth;
