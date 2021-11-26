const express = require("express");
const router = express.Router();// Initialize express router

// Set default API response
router.get('/', function (req, res) {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to RESTHub crafted with love!'
    });
});
// Export API routes
module.exports = router;
//import controller

const controller=require('../controller/postControlles');
// // GET request
// router.get("/", (req, res) => {
//   res.status(200).send("Server is up and running.");
// });

// router.get("/specific", (req, res) => {
//   res.status(200).send("Specific Post");
// });

router.post("/api/posts",controller.create);  
router.get("/api/posts", controller.find);  
router.put("/api/posts/:id", controller.update);  
router.delete("/api/posts/:id", controller.delete);  
 
module.exports = router;
