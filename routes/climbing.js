var express = require('express')
var router = express.Router()
var climbing = require('../models').climbing

router.get('/', function(req, res){
  climbing.all({
    order: [
      ['createdAt', 'ASC']
    ]
  })
    .then(function(routes){
      return res.render('routes', {routes: routes})
    })
})

router.put('/:id', function(req, res){
  climbing.updated(
    {route: req.body.route},
    {where: {id: req.params.id}}
  )
  .then(function(){
    return res.redirect('/routes')
  })
})

router.get('/:id/edit', function(req, res){
  climbing.findbyId(req.params.id)
  .then(function(route){
    return res.render('edit', {route: route})
  })
})

router.delete('/:id', function(req, res) {
  climbing.findById(req.params.id)
    .then(function(route){
      route.destroy()
    })
    .then(function(){
      return res.redirect('/routes')
    })
})

router.post('/', function(req, res) {
  var route = req.body.route;
  var grade = req.body.grade;
  var rating = req.body.rating;
  var description = req.body.description;
  climbing.create(
    {
      route: route,
      grade: grade,
      rating: rating,
      description: description
    }
  )
    .then( function() {
      res.redirect('/routes');
  });
});

module.exports = router