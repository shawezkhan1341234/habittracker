const Habit = require('../models/habit');

// Controller to Redner Habits on the Home Page
module.exports.home = function(req,res){
    Habit.find({}).then(function(habits){
        res.render('home',{habits});
    }).catch(function(err){
        console.log(err);
    })
}

// Controller to add a New Habit in the Database
module.exports.add = function(req,res){
    Habit.create({
        habit : req.body.habit,
        performance : [null,null,null,null,null,null,null]
    }).then(function(habit){
        console.log(habit);
        res.redirect('back');
    }).catch(function(err){
        console.log(err);
    })

}

// Controller to Delete a Habit from Databse 
module.exports.delete = function(req,res){
    let id = req.params.id;
    Habit.findByIdAndDelete(id).then(function(){
        res.redirect('back');
    }).catch(function(err){
        console.log(err);
    })
}

// Controller to change the tracker statues to Done
module.exports.done = function(req,res){
    let id = req.params.id ;
    let index = req.params.i;
    let arr = [];
    
    Habit.findById(id).then(function(h){
        
        arr = h.performance;
        arr[index] = 1;
        console.log(arr);
        Habit.updateOne(
            {_id : id},
            {$set : {performance : arr}}
        ).then(function(){
            res.redirect('back');
        }).catch(function(err){
            console.log(err);
        })
        
    }).catch(function(err){
        console.log(err);
    })
   
}


// Controller to change the tracker statues to Not Done
module.exports.notDone = function(req,res){
    let id = req.params.id ;
    let index = req.params.i;
    let arr = [];
    
    
    Habit.findById(id).then(function(h){
        
        arr = h.performance;
        arr[index] = 0;
        console.log(arr);
        Habit.updateOne(
            {_id : id},
            {$set : {performance : arr}}
        ).then(function(){
            res.redirect('back');
        }).catch(function(err){
            console.log(err);
        })
        
    }).catch(function(err){
        console.log(err);
    })
}


// Controller to change the tracker statues to None

module.exports.none = function(req,res){
    let id = req.params.id ;
    let index = req.params.i;
    let arr = [];
    
    Habit.findById(id).then(function(h){
        
        arr = h.performance;
        arr[index] = null;
        console.log(arr);
        Habit.updateOne(
            {_id : id},
            {$set : {performance : arr}}
        ).then(function(){
            res.redirect('back');
        }).catch(function(err){
            console.log(err);
        })
        
    }).catch(function(err){
        console.log(err);
    })
}

