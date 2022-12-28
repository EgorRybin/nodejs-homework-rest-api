// xyd3MM57f99AKkWn

// mongodb+srv://rybindev:xyd3MM57f99AKkWn@nodejs.ppdfxuj.mongodb.net/test

// mongodb+srv://rybindev:<password>@nodejs.ppdfxuj.mongodb.net/?retryWrites=true&w=majority

const mongoose = require('mongoose')
const DB_HOST = "mongodb+srv://rybindev:xyd3MM57f99AKkWn@nodejs.ppdfxuj.mongodb.net/contacts?retryWrites=true&w=majority";


mongoose.connect(DB_HOST)
    .then(() => console.log('Database connection successful'))
    .catch((error) => console.log(error.message));