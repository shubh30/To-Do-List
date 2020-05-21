const express = require('express');
const port = 8000;

const app = express();

// Setting the Value for the property "View Engine" as "Ejs" (Setting Up View engine)
app.set('view engine', 'ejs');
app.set('views', './views');

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
    return res.render('home', {
        title: "To Do List",
        todo_list: toDoList
    });
});

app.post('/create-todo', function(req, res) {
    return res.redirect('back');
});

app.listen(port, function(err) {
    if(err) {
        console.log(`Error in running the server: ${err}`);
    }
    console.log(`Server is running on port: ${port}`);
});
