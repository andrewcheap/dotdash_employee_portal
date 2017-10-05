var Project 	= require('../../models/projects');

// GET Project
module.exports.getAllProjects = 
	(req , res , next) => {
	    Project.find({}, (err , projects) => {
	      if(err) {
	      	res.json({success: false, message: "Error: Can't get projects"});
	      }
	      else {
		   let results = projects.map( (project) => {
			     return {
			      	id: 		project._id,
				    name: 		project.name,
				    color:    	project.color,
				    position: 	project.position,
			     }
		    });
	      	res.json({success: true, message: "Retrieved projects", data: results});
	      }
	    });
	};

// UPDATE Project
module.exports.getProject = 
	(req , res , next) => {

	    let id = req.params.id;

	    Project.findById(id, (err, project) => {
	    	if(err) {
	        	res.json({success: false, message: "Error selecting project"}); 
	      	}
	      	else if (!project) {
	      		res.json({success: false, message: "Project does not exist"}); 
	      	}
	      	else {
		    	let result = {
		    		id: 		project._id,
		    		name: 		project.name,
		    		comingSoon: project.comingSoon,
					color: 		project.color,
				    position: 	project.position,
				    city:      	project.city,
					details:    project.details,
				    images:    	project.images,
		    	}
	      		res.json({success: true, message: "Retrieved project", data: result});
	      	}

	    });
	};

// POST New Project
module.exports.addProject = 
	(req, res, next) => {
		let project = new Project({
				name: 		req.body.name,
				color:    	req.body.color,
				comingSoon: req.body.comingSoon,
				position: 	req.body.position,
				city: 		req.body.city,
				details:    req.body.details,
				images:     req.body.images,
		}); 

	    if(project.name && project.color && project.position) {
		    project.save((err) => {
		      if(err) {
		      	res.json({success: false, message: "Error: " + err});
		      }
		      else {
				res.json({success: true, message: "Project created"});
		      }  
		    });
	    }
	    else {
	    	res.json({success: false, message: "Required field missing"});
	    }

	  };

// UPDATE Project
module.exports.updateProject = 
	(req, res, next) => {
		let id = req.params.id;

		Project.findById(id, (err, project) => {
			if(err) {
				res.json({success: false, message: "Error: " + err});
			}
	      	if (!project) {
	      		res.json({success: false, message: "Could not find project."});
	      	}

		    project.name 		=	req.body.name;
		    project.comingSoon	=	req.body.comingSoon,
		    project.color 		= 	req.body.color;
		    project.position 	= 	req.body.position;
		    project.city		=   req.body.city;
			project.details 	=   req.body.details,
		    project.images		=   req.body.images;
		    
		 	project.save((err) => {
		      if(err) {
		      	res.json({success: false, message: "Error: " + err});
		      }
		      else {
				res.json({success: true, message: "Project saved"});
		      }  
		    });
		});

	  };

// DELETE Project
module.exports.deleteProject = 
	(req , res , next) => {
	    
	    let id = req.params.id;
	    
	    Project.findById(id,  (err, project) => {
			if(err) {
				res.json({success: false, message: "Error: " + err});
			}
	      	if (!project) {
	      		res.json({success: false, message: "Could not find project."});
	      	}
	      
	      project.remove( (err) => {
		      if(err) {
		      	res.json({success: false, message: "Error: " + err});
		      }
		      else {
				res.json({success: true, message: "Project deleted"});
		      }  
	      });        
	    });
  	};

