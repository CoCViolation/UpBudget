import express from "express";
import passport from "passport";
const router = express.Router();

//this will be run before any of the others
router.use("/", (req, res, next) => {
  console.log(`  using passportRouter`);
  next();
});

// //authenticate login
// router.get("/login", (req, res) => {
//   console.log("/login");
//   res.status(200).send("/login");
//   // res.status(200).render('login');
// });

//authenticate logout
router.get("/logout", (req, res) => {
  req.logout();
  req.session.destroy();
  res.redirect("http://localhost:8080");
});

router.get("login/failed", (req, res) => {
  res.status(401).json({ message: "FAILURE LOGIN" });
});

router.get("login/success", (req, res) => {
  res.send("HEY IAM HERE");
  if (req.user) {
    res.status(200).json({ message: "SUCCESSFULL LOGIN", user: req.user });
  }
  res.send("HEYYYY IAM ERROR");
});

//authenticate with google

router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile"] }),
  (req, res) => {
    res.send("logging in with google");
  }
);

// router.get('/google', passportController.auth, (req, res)=> {
//     res.status(200).send('logging in with google');
// })

router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: "http://localhost:8080/budgetmain",
    failureRedirect: "/login/failed",
  })
);

export default router;
