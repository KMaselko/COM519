var games = require("../model/model");

//create and save new game
exports.create=(req,res)=>{
    // validate request
    if(!req.body){
        res.status(400).send({ message : "Content cannot be emtpy"});
        return;
    }

    // new game
    const game = new games({
        name : req.body.name,
        genre : req.body.genre,
        price: req.body.price,
        publisher : req.body.publisher,
        time : req.body.time
    })

    //save game in DB
    game
        .save(game)
        .then(data => {
            res.redirect('/add-game');
        })
        .catch(err =>{
            res.status(500).send({
                message : err.message || "Some error has occurred during the operation"
            });
        });
}

//retrieve games
exports.find=(req,res)=>{
    if(req.query.id){
        const id = req.query.id;

        games.findById(id)
            .then(data =>{
                if(!data){
                    res.status(404).send({ message : "Game with ID "+ id + " has not been found"})
                }else{
                    res.send(data)
                }
            })
            .catch(err =>{
                res.status(500).send({ message: "Erro retrieving game with ID " + id})
            })

    }else{
        games.find()
            .then(game => {
                res.send(game)
            })
            .catch(err => {
                res.status(500).send({ message : err.message || "Error has occured while retreiving game information" })
            })
    }
}

//update games
exports.update=(req,res)=>{
    if(!req.body){
        return res
            .status(400)
            .send({ message : "Updated data cannot be empty"})
    }

    const id = req.params.id;
    games.findByIdAndUpdate(id, req.body, { useFindAndModify: false})
        .then(data => {
            if(!data){
                res.status(404).send({ message : `Cannot update game with ID ${id}. Check if this ID exists`})
            }else{
                res.send(data)
            }
        })
        .catch(err =>{
            res.status(500).send({ message : "Error has occured while updating game information"})
        })
}

//delete games
exports.delete=(req,res)=>{
    const id = req.params.id;

    games.findByIdAndDelete(id)
        .then(data => {
            if(!data){
                res.status(404).send({ message : `Cannot delete a game with ID ${id}. Check if this ID exists`})
            }else{
                res.send({
                    message : "Game was deleted successfully!"
                })
            }
        })
        .catch(err =>{
            res.status(500).send({
                message: "Could not delete game with ID " + id
            });
        });
}