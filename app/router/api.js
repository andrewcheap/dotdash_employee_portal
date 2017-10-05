const express 	= require('express');
const router 	= express.Router();

// Modules
const userModule = require("./routes/userRoutes");
const projectModule = require("./routes/projectRoutes");
const fileModule 	= require("./routes/fileUploadRoute");

// User methods
const userRegister		= userModule.registerRoute;
const userLogin			= userModule.loginRoute;
const getUser			= userModule.getUser;
const getToken			= userModule.getToken;

// Project methods
const addProject 	= projectModule.addProject;
const getProjects 	= projectModule.getAllProjects;
const getProject 	= projectModule.getProject;
const updateProject = projectModule.updateProject;
const deleteProject = projectModule.deleteProject;

// Upload method
const uploadFile	= fileModule.uploadFile;


// Add headers
router.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});


// router specs
router.get('/', (req, res, next) => {
  res.redirect('/projects');
});

// User routes
router.post('/register', userRegister);
router.post('/authenticate', userLogin);

// Get the user token
// router.use(getToken);
router.post('/user', getToken, getUser);

// PUBLIC Project routes
router.get('/projects', getProjects);
router.get('/project/:id', getProject);

// AUTH Project routes
router.post('/project/add', getToken, addProject);
router.put('/project/:id', getToken, updateProject);
router.delete('/project/:id', getToken, deleteProject);

// File upload
router.post('/upload', getToken, uploadFile);

module.exports = router;