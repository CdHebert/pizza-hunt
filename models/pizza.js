const { schema, model } = require('mongoose');

const PizzaSchema = new Schema({
    pizzaName: {
        type: String
    },
    createdBy: {
        type: String
    },
    CreatedAt: {
        type: String,
        default: Date.now
    },
    size: {
        type: String,
        default: 'Large'
    },
    Toppings:[]
});

// create the pizza model using the pizzaschema
const Pizza = model('Pizza', pizzaSchema);

// export the pizza model
module.exports = Pizza;