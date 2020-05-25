const express = require('express');
const port = 8000;
const db = require('./config/mogoose');
const Todo = require('./models/todo');
const app = express();

// Setting the Value for the property "View Engine" as "Ejs" (Setting Up View engine)
app.set('view engine', 'ejs');
app.set('views', './views');

// Parser as middlware
app.use(express.urlencoded());
app.use(express.static('assets'))

var toDoList = [
    {
        todo: "Eat Breakfast"
    },
    {
        todo: "Watch Movie"
    },
    {
        todo: "Try Not to Study"
    }
]

app.get('/', function(req, res) {

    Todo.find({}, function(err, todos){
        if(err){
            console.log('Error in fetching contact from db');
            return;
        }
        
        return res.render('home', {
            title: "To Do List",
            todo_list: todos
        });
    });
});

app.post('/create-todo', function(req, res) {
    // toDoList.push(req.body);
    Todo.create({
        task: req.body.name
    }, function(err, newTodo){
        if(err){console.log('Error in creating a todo'); return;}
        console.log('*******', newTodo);
        return res.redirect('back');
    });
});

app.get('/delete-contact/', function(req, res){
    // Get the id from the query in the url
    let id = req.query.id;

    // Find the todo in the database using id and delete
    Todo.findByIdAndDelete(id, function(err){
        if(err) {
            console.log('Error in deleting an obj fron db');
            return;
        }

        return res.redirect('back');
    });
});

app.listen(port, function(err) {
    if(err) {
        console.log(`Error in running the server: ${err}`);
    }
    console.log(`Server is running on port: ${port}`);
});
