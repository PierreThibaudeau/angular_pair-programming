var _ = require('underscore');
var express = require('express');
var http = require('http');
var uuid = require('node-uuid');
var lodash = require('lodash')
var cors = require('./cors');
var auth = require ('./auth')
var middleware = require ('./middleware')
var app = express();
var server = http.createServer(app);

var conf = require('./server.json');

var articles = loadDatas('articles');
var categories = loadDatas('categories');
var user = loadDatas('user');

var sessions = {};

var context = '/rest';
var authHeader = 'Auth-Token';

process.env.JWT_SECRET = conf.JWT_SECRET

function loadDatas(type) {
  return require(conf[type]).map(data => ({...data}));
}

app.use(express.bodyParser());
app.use(cors);

app.post(context+'/login', (req, res) => {
  let { username, password } = req.body

  if(username === user[0].username && password === user[0].password) {
    res.status(200)
    .json({
      success: true,
      token: auth.createJWToken({
          sessionData: user,
          maxAge: 3600
        })
    })
  } else {
    res.status(401)
      .json({
        message: 'Aucun utilisateur avec ce username et ce mot de passe'
      })
  }

})

// ARTICLES

app.get(context + '/articles', function (req, res) {
  res.send(articles);
});

app.get(context + '/articles/:id', function (req, res) {
  const id = Number(req.params.id)
  res.send(lodash.find(articles, { id }));
});

app.post(context + '/articles', (req, res) => {
  if(lodash.difference(req.body.categories, categories.map(c => c.id)).length) {
    throw `Article avec une categorie inconnu`
  }
  const newArticle = { ...req.body, id: lodash.findLast(articles).id + 1, comments: [] }
  articles.push(newArticle)
  res.send(newArticle)
});

app.put(context + '/articles/:id', (req, res) => {
  const id = Number(req.params.id)
  const index = lodash.findIndex(articles, { id })

  if(index === -1) {
    throw `Article avec l'id ${id} inconnu`
  }
  if(lodash.difference(req.body.categories, categories.map(c => c.id)).length) {
    throw `Article avec une categorie inconnu`
  }

  const articleUpdated = { ...articles[index], ...req.body, id }
  articles.splice(index, 1, articleUpdated)
  res.send(articleUpdated)
});

app.delete(context + '/articles/:id', (req, res) => {
  const id = Number(req.params.id)
  const index = lodash.findIndex(articles, { id })

  if(index === -1) {
    throw `Article avec l'id ${id} inconnu`
  }

  lodash.remove(articles, a => a.id === id)
  res.send({ id })
});

// COMMENTAIRE
app.post(context + '/articles/:id/comments', (req, res) => {
  const id = Number(req.params.id)
  const index = lodash.findIndex(articles, { id })

  articles[index].comments.push(req.body)
  articles.splice(index, 1, articles[index])
  res.send(articles[index])
});

// CATEGORIES

app.get(context + '/categories', function (req, res) {
  res.send(categories);
});

app.get(context + '/categories/:id', function (req, res) {
  const id = Number(req.params.id)
  res.send(lodash.find(categories, { id }));
});

app.post(context + '/categories', (req, res) => {
  const newCategory = { id: lodash.findLast(categories).id + 1, label: req.body.label }
  categories.push(newCategory)
  res.send(newCategory)
});

app.put(context + '/categories/:id', (req, res) => {
  const id = Number(req.params.id)
  const index = lodash.findIndex(categories, { id })

  if(index === -1) {
    throw `Catégorie avec l'id ${id} inconnu`
  }

  const CategoryUpdated = { ...categories[index], ...req.body, id }
  categories.splice(index, 1, CategoryUpdated)
  res.send(CategoryUpdated)
});

app.delete(context + '/categories/:id', (req, res) => {
  const id = Number(req.params.id)
  const index = lodash.findIndex(categories, { id })
  if(index === -1) {
    throw `Catégorie avec l'id ${id} inconnu`
  }

  lodash.remove(categories, c => c.id === id)
  res.send({ id })
});

server.listen(conf.port);
console.log('Express server listening on port', server.address().port);
