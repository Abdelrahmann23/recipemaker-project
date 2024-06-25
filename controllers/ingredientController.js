const Mydata = require('../models/schema');
const path = require('path');
const fs = require('fs');
const Mydata3 = require('../models/mydataSchema');
const bcrypt = require('bcrypt');
const Recipe = require('../models/shem');


//add ingrediant 

exports.addIngredient = async (req, res) => 
{
    if (!req.files || Object.keys(req.files).length === 0) {
        console.log('No files were uploaded.');
        return res.status(400).send('No files were uploaded.');
    }

    // Access the file
    let ingredientImage = req.files.ingredientImage;
    const uploadPath = path.join(__dirname, '../uploads', ingredientImage.name);

    // Check if the ingredient already exists
    try {
        const existingIngredient = await Mydata.findOne({
            ingredientName: req.body.ingredientName,
            dropdownnn: req.body.dropdownnn
        });

        if (existingIngredient) {
            console.log('Ingredient already exists.');
            return res.status(400).send('Ingredient already exists.');
        }

       
        ingredientImage.mv(uploadPath, function(err) {
            if (err) {
                console.log('Error moving file:', err);
                return res.status(500).send(err);
            }

            const mydata = new Mydata({
                ingredientName: req.body.ingredientName,
                dropdownnn: req.body.dropdownnn,
                ingredientImage: ingredientImage.name // Save the filename to the database
            });

            mydata.save()
                .then(() => {
                    console.log('Data saved successfully:', mydata);
                    let redirectUrl = '/';
                    switch (req.body.dropdownnn) {
                        case 'appetizer':
                            redirectUrl = '/appetizer1';
                            break;
                        case 'dessert':
                            redirectUrl = '/dessert';
                            break;
                        case 'main Dish':
                            redirectUrl = '/MainDishes';
                            break;
                    }
                    res.json({ success: true, redirectUrl });
                })
                .catch((err) => {
                    console.error('Error saving data:', err);
                    res.status(500).send('Error saving data: ' + err.message);
                });
        });
    } catch (err) {
        console.error('Error checking for existing ingredient:', err);
        res.status(500).send('Error checking for existing ingredient: ' + err.message);
    }
};

exports.getAppetizers = (req, res) => {
    Mydata.find({ dropdownnn: 'appetizer' })
        .then((ingredients) => {
            res.render('appetizer1', { arrayI: ingredients });
        })
        .catch((err) => {
            console.log(err);
            res.status(500).send('Error retrieving ingredients: ' + err.message);
        });
};

exports.getDesserts = (req, res) => {
    Mydata.find({ dropdownnn: 'dessert' })
        .then((ingredients) => {
            res.render('dessert', { arrayI: ingredients });
        })
        .catch((err) => {
            console.log(err);
            res.status(500).send('Error retrieving ingredients: ' + err.message);
        });
};

exports.getMainDishes = (req, res) => {
    Mydata.find({ dropdownnn: 'main Dish' })
        .then((ingredients) => {
            res.render('MainDishes', { arrayI: ingredients });
        })
        .catch((err) => {
            console.log(err);
            res.status(500).send('Error retrieving ingredients: ' + err.message);
        });
};


// // Get all ingredients
// exports.getAllIngredients = (req, res) => {
//     Mydata.find()
//         .then((ingredients) => {
//             res.render('viewdesserts', { arrayI: ingredients });
//         })
//         .catch((err) => {
//             console.log(err);
//             res.status(500).send('Error retrieving ingredients: ' + err.message);
//         });
// };

//view ingrediants

exports.viewingrediant = (req, res) => {
    res.render('viewIngrediants');
};

exports.viewMainDish = (req, res) => {
    Mydata.find({ dropdownnn: 'main Dish' })
        .then((ingredients) => {
            res.render('viewmaindishs', { arrayI: ingredients });
        })
        .catch((err) => {
            console.log(err);
            res.status(500).send('Error retrieving ingredients: ' + err.message);
        });
};

exports.viewDessert = (req, res) => {
    Mydata.find({ dropdownnn: 'dessert' })
    .then((ingredients) => {
        res.render('viewdesserts', { arrayI: ingredients });
    })
    .catch((err) => {
        console.log(err);
        res.status(500).send('Error retrieving ingredients: ' + err.message);
    });
};

exports.viewAppetizer = (req, res) => {
    Mydata.find({ dropdownnn: 'appetizer' })
    .then((ingredients) => {
        res.render('viewappetizers', { arrayI: ingredients });
    })
    .catch((err) => {
        console.log(err);
        res.status(500).send('Error retrieving ingredients: ' + err.message);
    });
};

exports.gethomeadmin = (req, res) => {
   res.render('admin');
};
exports.getaddingingrediant = (req, res) => {
    res.render('adding');
 };


 exports.getForm = (req, res) => {
    const error = req.query.error || null;
    res.render('form', { error });
};

exports.getform=(req,res)=>{
    res.render('form');
    }
   exports.getdeleteusers=(req, res) => {
        res.render('deleteUsers');
      };

    exports.getaddrecipe=(req,res)=>{
        res.render('addrecipe');
        }
        exports.getaddingrediants=(req,res)=>{
            res.render('adding');
            }

    exports.gethome=(req,res)=>{
        res.render('index');
        }

        exports.getuserhome=(req,res)=>{
            res.render('viewUserProfile');
            }

exports.getadmin=(req,res)=>{
res.render('admin');
}
exports.getindex=(req,res)=>{
res.render('index');
}
exports.getForgetPass = (req, res) => {
    res.render('forgetpass', { error: null });
    console.log("Forget password page rendered");
};

exports.getSignup = (req, res) => {
    res.render('signup', { error: null });
};

exports.postSignupp = async (req, res) => {
    const { names, usernames, emails, passwords, security, drop } = req.body;
    try {
        const existingEmailUser = await Mydata3.findOne({ emails });
        const existingUsernameUser = await Mydata3.findOne({ usernames });

        if (existingEmailUser || existingUsernameUser) {
            let errorMessage = "User already exists with ";
            if (existingEmailUser) errorMessage += "this email ";
            if (existingEmailUser && existingUsernameUser) errorMessage += "and ";
            if (existingUsernameUser) errorMessage += "this username.";

            return res.render('form', { error: errorMessage });
        }

        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(passwords, saltRounds);
        const newUser = new Mydata3({
            names,
            usernames,
            emails,
            passwords: hashedPassword,
            security,
            drop
        });
        await newUser.save();
        console.log("User created successfully");
        let errormsg = "user created successfully , please login with your informations.";

        res.render('form', { error: errormsg });
    } catch (err) {
        console.error("Error signing up:", err);
        res.render('form', { error: "Internal Server Error" });
    }
};

exports.postLogin = async (req, res) => {
    const { emails, passwords } = req.body;
    try {
        if (!emails || !passwords) {
            return res.status(400).json({ error: 'Email or password missing' });
        }

        const trimmedEmail = emails.trim();
        const trimmedPassword = passwords.trim();

        console.log('Attempting login for email:', trimmedEmail);

        const user = await Mydata3.findOne({ emails: trimmedEmail });
        if (!user) {
            console.log(`User with email ${trimmedEmail} not found`);
            return res.status(404).json({ error: "User doesn't exist, please sign up!" });
        }

        console.log('User found:', user);

        const isMatched = await bcrypt.compare(trimmedPassword, user.passwords);
        console.log('Password comparison result:', isMatched);

        if (isMatched) {
            console.log('Login successful');

            req.session.regenerate((err) => {
                if (err) {
                    console.error("Error regenerating session:", err);
                    return res.status(500).json({ error: "Internal Server Error" });
                }

                req.session.user = {
                    username: user.usernames,
                    email: user.emails
                    
                };

                if (trimmedEmail === 'admin@gmail.com') {
                    return res.json({ redirectUrl: 'admin' });
                } else {
                    return res.json({ redirectUrl: 'index' });          
                }
            });
        } else {
            console.log('Password is incorrect');
            res.render('form', { error: "invalid password" });
        }
    } catch (error) {
        console.error("Error logging in:", error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
};

exports.postForgetPassword = async (req, res) => {
    const { security, emails } = req.body;
    try {
        console.log("Security Answer:", security);
        console.log("Email:", emails);

       

        const trimmedEmail = emails.trim();
        const trimmedSecurity = security.trim();

        const user = await Mydata3.findOne({ emails: trimmedEmail });
        if (!user) {
            let eerrmsg = 'User not found';
            return res.status(404).render('forgetpass', { error: eerrmsg });
        }

        console.log('User found:', user);

        if (trimmedSecurity !== user.security) {
            let errormsg = "Security answer is incorrect.";
            return res.status(401).render('forgetpass', { error: errormsg });
        }

        console.log('Security answer checked and correct:', security);
        req.session.user = user;

        if (trimmedEmail === 'admin@gmail.com') {
            console.log('Redirecting to form page for special email:', trimmedEmail);
            return res.json({ redirectUrl: 'admin' });
        } else {
            console.log('Redirecting to home page for regular user:', trimmedEmail);
            return res.json({ redirectUrl: 'index' });
        }
    } catch (error) {
        console.error('Error processing forget password request:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};


exports.postSignup = async (req, res) => {
    const { fullname, username, email, password, confirm_password, drop } = req.body;
    try {
        // Check if user with same email or username already exists
        const existingEmailUser = await Mydata3.findOne({ email });
        const existingUsernameUser = await Mydata3.findOne({ username });

        if (existingEmailUser || existingUsernameUser) {
            let errorMessage = "User already exists with ";
            if (existingEmailUser) errorMessage += "this email ";
            if (existingEmailUser && existingUsernameUser) errorMessage += "and ";
            if (existingUsernameUser) errorMessage += "this username.";

            return res.status(401).json({ error: errorMessage });
        }

        // If no existing user, proceed to create new user
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        const newUser = new Mydata3({
            fullname,
            username,
            email,
            password: hashedPassword,
            drop
        });
        await newUser.save();

        // Send success response
        return res.status(200).json({ successMessage: "User created successfully" });

    } catch (err) {
        console.error("Error signing up:", err);
        // Send error response
        return res.status(500).json({ error: "Internal Server Error" });
    }
};


exports.logout = (req, res) => {
    console.log('Logout route hit'); // Add a console log to verify the request
    req.session.destroy(err => {
        if (err) {
            console.error('Failed to destroy session:', err);
            return res.status(500).json({ error: 'Failed to logout' });
        }
        res.clearCookie('connect.sid'); // Clear the session cookie
        console.log('Logout successful');
        res.status(200).json({ message: 'Logout successful' });
    });
};

//-------------------------------------
exports.getUsers = async (req, res) => {
    try {
      const users = await Mydata3.find();
      res.json(users);
    } catch (err) {
      console.error(err);
      res.status(500).send('Error retrieving data');
    }
  };
  
  exports.checkUsername = async (req, res) => {
    const username = req.query.username;
    try {
      const user = await Mydata3.findOne({ usernames: username });
      res.json({ exists: !!user });
    } catch (err) {
      console.error(err);
      res.status(500).send('Error checking username');
    }
  };
  
  exports.checkEmail = async (req, res) => {
    const email = req.query.email;
    try {
      const user = await Mydata3.findOne({ emails: email });
      res.json({ exists: !!user, originalEmail: user ? user.emails : null });
    } catch (err) {
      console.error(err);
      res.status(500).send('Error checking email');
    }
  };
  
  exports.getUserByUsername = async (req, res) => {
    const username = req.params.username;
    try {
      const user = await Mydata3.findOne({ usernames: username });
      if (!user) {
        return res.status(404).send('User not found');
      }
      res.json(user);
    } catch (err) {
      console.error(err);
      res.status(500).send('Error retrieving user details');
    }
  };
  
  exports.createUser = async (req, res) => {
    const { names, usernames, emails, passwords, security, drop } = req.body;
    try {
      const usernameExists = await Mydata3.findOne({ usernames });
      const emailExists = await Mydata3.findOne({ emails });
  
      if (usernameExists) {
        return res.status(400).send('Username is already taken');
      }
      if (emailExists) {
        return res.status(400).send('Email is already taken');
      }
  
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(passwords, salt);
  
      const newUser = new Mydata3({
        names,
        usernames,
        emails,
        passwords: hashedPassword,
        security,
        drop
      });
  
      await newUser.save();
      res.status(201).send('User created successfully');
    } catch (error) {
      res.status(500).send('Server error');
    }
  };
  
  exports.updateUser = async (req, res) => {
    const username = req.params.username;
    const { emails, oldpass, newpass } = req.body;
  
    try {
      const user = await Mydata3.findOne({ usernames: username });
      if (!user) {
        return res.status(404).json({ success: false, message: 'User not found' });
      }
      if (emails && emails !== user.emails) {
        const emailExists = await Mydata3.findOne({ emails });
        if (emailExists) {
          return res.status(400).json({ success: false, message: 'Email is already in use' });
        }
        user.emails = emails;
      }
      if (newpass) {
        const isMatch = await bcrypt.compare(oldpass, user.passwords);
        if (!isMatch) {
          return res.status(400).json({ success: false, message: 'Old password is incorrect' });
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(newpass, salt);
        user.passwords = hashedPassword;
      }
      await user.save();
      res.json({ success: true, message: 'User details updated successfully' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ success: false, message: 'Error updating user details' });
    }
  };
  exports.getviewUsers= (req, res) => {
    res.render("viewUsers");
  };

  exports.geteditUsers=(req, res) => {
    res.render("editUsers");
  };
  
  exports.deleteUser = async (req, res) => {
    try {
      const username = req.params.username;
      const result = await Mydata3.findOneAndDelete({ usernames: username });
      if (result) {
        res.json({ success: true });
      } else {
        res.json({ success: false });
      }
    } catch (err) {
      res.status(500).send('Server error');
    }
  };
  
  exports.getProfile = async (req, res) => {
    try {
      const user = await Mydata3.findById(req.session.userId);
      if (!user) {
        return res.status(404).json({ success: false, message: 'User not found' });
      }
      res.json({ success: true, user });
    } catch (err) {
      console.error('Error fetching user profile:', err);
      res.status(500).json({ success: false, message: 'Server error' });
    }
  };
  // exports.getUserProfile = async (req, res) => async (req, res) => {
  //     try {
  //         // Fetch user data based on session or user ID
  //         const userId = req.session.userId; // Adjust according to your authentication logic
  //         const user = await Mydata3.findById(userId); // Replace with your Mongoose model and query
  
  //         if (!user) {
  //             return res.status(404).send('User not found');
  //         }
  
  //         // Render viewuserprofile.ejs and pass user data
  //         res.render('viewuserprofile', { user });
  //     } catch (err) {
  //         console.error('Error fetching user profile:', err);
  //         res.status(500).send('Server error');
  //     }
  // }
  
  exports.getUserProfile = async (req, res) => {
      if (!req.session.user) {
          return res.redirect('/auth/login'); // Redirect to login if not authenticated
      }
  
      try {
          const user = await Mydata3.findById(req.session.user._id);
          if (!user) {
              return res.status(404).send('User not found');
          }
          res.render('viewuserprofile', { user });
      } catch (err) {
          console.error('Error fetching user profile:', err);
          res.status(500).send('Server error');
      }
  };








  exports.getAllIngredients = async (req, res) => {
    try {
        const ingredients = await Mydata.find();
        res.render('deleteingrediants', { arrayI: ingredients });
    } catch (err) {
        console.error('Error retrieving ingredients:', err);
        res.status(500).send('Error retrieving ingredients: ' + err.message);
    }
};

exports.deleteIngredient = async (req, res) => {
    try {
        const ingredientId = req.params.id;
        const deletedIngredient = await Mydata.findByIdAndDelete(ingredientId);

        if (!deletedIngredient) {
            return res.status(404).send('Ingredient not found');
        }

        res.status(200).send('Ingredient deleted successfully');
    } catch (err) {
        console.error('Error deleting ingredient:', err);
        res.status(500).send('Error deleting ingredient: ' + err.message);
    }
};
exports.getUserProfile = (req, res) => {
    if (!req.session.user) {
        return res.status(401).json({ error: 'User not logged in' });
    }
    // Send user details from the session
    res.status(200).json({
        username: req.session.user.username,
        email: req.session.user.email
    });
};

exports.deleteAccount = async (req, res) => {
    if (!req.session.user) {
        return res.status(401).json({ success: false, message: 'User not logged in' });
    }

    try {
        const userId = req.session.user.usernames;
        await Mydata3.findByIdAndDelete(userId);

        // Destroy the session
        req.session.destroy(err => {
            if (err) {
                return res.status(500).json({ success: false, message: 'Failed to delete account' });
            }

            res.clearCookie('connect.sid'); // Clear the session cookie
            return res.status(200).json({ success: true, message: 'Account deleted successfully' });
        });
    } catch (err) {
        console.error('Error deleting account:', err);
        return res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
};













exports.getAllRecipes = (req, res) => {
    Recipe.find()
        .then((resultsrecipes) => {
            res.render('addrecipe', { Array: resultsrecipes });
        })
        .catch((err) => {
            console.log(err);
            res.status(500).send('Error retrieving recipes: ' + err.message);
        });
};

exports.addRecipe = async (req, res) => {
    if (!req.files || Object.keys(req.files).length === 0) {
        console.log('No files were uploaded.');
        return res.status(400).send('No files were uploaded.');
    }

    let recipeImage = req.files.recipeImage;
    const uploadDir = path.join(__dirname, '../uploads');
    const uploadPath = path.join(uploadDir, recipeImage.name);

    try {
        const existingRecipe = await Recipe.findOne({
            recipeName: req.body.recipeName,
            dropdownnnr: req.body.dropdownnnr,
            newIngredient: req.body.newIngredient,
            recipe: req.body.recipe
        });

        if (existingRecipe) {
            console.log('Recipe already exists.');
            return res.status(400).send('Recipe already exists.');
        }

        recipeImage.mv(uploadPath, async function (err) {
            if (err) {
                console.log('Error moving file:', err);
                return res.status(500).send(err);
            }

            const newRecipe = new Recipe({
                recipeName: req.body.recipeName,
                dropdownnnr: req.body.dropdownnnr,
                newIngredient: req.body.newIngredient,
                recipe: req.body.recipe,
                recipeImage: recipeImage.name
            });

            await newRecipe.save();

            console.log('Data saved successfully:', newRecipe);
            // Redirect to recipes.ejs after successful save
            res.redirect('/recipes'); // Adjust the route based on your setup
        });
    } catch (err) {
        console.error('Error checking for existing recipe or saving data:', err);
        res.status(500).send('Error checking for existing recipe or saving data: ' + err.message);
    }
};