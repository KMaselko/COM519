const axios = require('axios');

exports.homeRoutes = (req, res) => {
    axios.get(`http://localhost:${process.env.PORT}/api/games`)
        .then(function(response){
            res.render('index', { games : response.data });
        })
        .catch(err =>{
            res.send(err);
        })
}

exports.add_game = (req, res) => {
    res.render("add-game");
}

exports.about = (req, res) => {
    res.render("about");
}

exports.update_game = (req, res) => {
    axios.get(`http://localhost:${process.env.PORT}/api/games`, { params : { id : req.query.id }})
        .then(function(gamedata){
            res.render("update-game", { game : gamedata.data})
        })
        .catch(err =>{
            res.send(err);
        })
}