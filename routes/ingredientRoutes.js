const express = require('express');
const router = express.Router();
const ingredientController = require('../controllers/ingredientController');

router.get('/', (req, res) => {
    const error = req.query.error || null;
    res.render('form', { error });
});
router.delete('/delete-account', ingredientController.deleteAccount);
router.get('/profile', ingredientController.getUserProfile);
router.post('/', ingredientController.addIngredient);

router.get('/appetizer1', ingredientController.getAppetizers);
router.get('/dessert', ingredientController.getDesserts);
router.get('/MainDishes', ingredientController.getMainDishes);


router.get('/Home', ingredientController.gethome);
router.get('/categories', ingredientController.gethome);
router.get('/About', ingredientController.gethome);
router.get('/Footer', ingredientController.gethome);


router.get('/admin', ingredientController.gethomeadmin);
router.get('/addingrediant', ingredientController.getaddingingrediant);


router.get('/viewmaindish', ingredientController.viewMainDish);
router.get('/viewdessert', ingredientController.viewDessert);
router.get('/viewappetizer', ingredientController.viewAppetizer);
router.get('/viewingrediant', ingredientController.viewingrediant);
router.get('/addingrediant', ingredientController.getaddingrediants);


//------------------------------
router.get('/form', ingredientController.getForm);
router.get('/forgetpass', ingredientController.getForgetPass);
router.get('/signup', ingredientController.getSignup);
router.post('/Signupp', ingredientController.postSignupp);
router.post('/Login', ingredientController.postLogin);
router.post('/forgetpassword', ingredientController.postForgetPassword);
router.post('/Signup', ingredientController.postSignup);
router.get('/admin',ingredientController.getadmin);
router.get('/index',ingredientController.getindex);
router.get('/form',ingredientController.getform);
router.get('/viewuserprofile',ingredientController.getuserhome);
router.post('/logout', ingredientController.logout);
router.get('/deleteUsers', ingredientController.getdeleteusers);
router.get('/viewUsers', ingredientController.getviewUsers);
router.get('/editUsers',ingredientController.geteditUsers);
//--------------------------------------------------------
// Static file routes

router.get('/dessertsresults', (req, res) => {
  res.render('dessertsresults');
});
router.get('/deleteingrediants', ingredientController.getAllIngredients);

// Delete an ingredient
router.delete('/ingrediants/:id', ingredientController.deleteIngredient);

  

router.get('/dessertresults', ingredientController.getAllRecipes); // Assuming getAllRecipes renders recipes.ejs
router.post('/dessertresults', ingredientController.addRecipe);
 
  // Assuming you have defined your routes and controllers
  
  // Example route to render the user profile page
  router.get('/viewuserprofile', ingredientController.getUserProfile);
  
  // API routes
  router.get('/api/users', ingredientController.getUsers);
  router.get('/api/check-username', ingredientController.checkUsername);
  router.get('/api/check-email', ingredientController.checkEmail);
  router.get('/api/users/:username', ingredientController.getUserByUsername);
  router.post('/', ingredientController.createUser);
  router.put('/api/users/:username', ingredientController.updateUser);
  router.delete('/api/users/:username', ingredientController.deleteUser);
  router.get('/api/profile', ingredientController.getProfile);
  router.get('/addrecipe',ingredientController.getaddrecipe);

module.exports = router;
