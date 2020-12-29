const Post = require('../models/post.model');

exports.create = function (req, res) {
  const post = new Post({
    name: req.body.data.name,
    description: req.body.data.description,
    imagen: req.body.data.imagen,
    isAvailable: req.body.data.isAvailable
  });
  post.save()
    .then(function (createdPost) {
      return res.status(200).json({
        status: 200,
        data: createdPost,
        message: 'Success'
      });
    })
    .catch(function (err) {
      return res.status(400).json({
        status: 400,
        message: err.message
      });
    });
}


exports.get = function (req, res) {
  Post.findById(req.params.id)
    .then(function (post) {
      return res.status(200).json({
        status: 200,
        data: post,
        message: "Success"
      });
    })
    .catch(function (err) {
      return res.status(400).json({
        status: 400,
        message: err.message
      });
    });
}

exports.list = function (req, res) {
  Post.find()
    .then(function (posts) {
      return res.status(200).json({
        status: 200,
        data: posts,
        message: 'Success'
      })
    })
    .catch(function (err) {
      return res.status(400).json({
        status: 400,
        message: err.message
      });
    });
}

exports.update = function (req, res) {
  Post.findById(req.params.id)
    .then(function (post) {
      post.name = req.body.data.name || post.name;
      post.description = req.body.data.description || post.description;
      post.imagen = req.body.data.imagen || post.imagen;
      post.date = req.body.data.date || post.date;
      post.isAvailable = req.body.data.isAvailable || post.isAvailable;
      post.save()
        .then(function (updatedPost) {
          return res.status(200).json({
            status: 200,
            data: updatedPost,
            message: 'Success'
          });
        })
        .catch(function (err) {
          return res.status(400).json({
            status: 400,
            message: err.message
          });
        });
    })
    .catch(function (err) {
      return res.status(400).json({
        status: 400,
        message: err.message
      });
    });
}

exports.delete = function (req, res) {
  Post.findById(req.params.id)
    .then(function (post) {
      post.remove()
        .then(function (deletedPost) {
          return res.status(200).json({
            status: 200,
            data: deletedPost,
            message: 'Success'
          });
        })
        .catch(function (err) {
          return res.status(400).json({
            status: 400,
            message: err.message
          });
        });
    })
    .catch(function (err) {
      return res.status(400).json({
        status: 400,
        message: err.message
      });
    });
}