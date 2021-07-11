const sequelize = require("./utils/database")

const Customer = require("./models/customer")
const Order = require("./models/order")


//Defining One to Many relation between the tables
Customer.hasMany(Order)

// convert Sequelize Models to sql tables
sequelize
    .sync({ force: true })
    // .sync()
    .then((result) => {
        // Insertion using sequelize
        return Customer.create({ name: "Naruto Uzmaki", email: "naruto_uzmaki@gmail.com" })
        console.log("connection: " + result);
    }).then(customer => {
        console.log("first customer created:" + customer);
        return customer.createOrder({ total: 45 })
        // return Order.create({
        //     total: 54
        // })
    }).then(order => {
        console.log("order created: " + order);
    })
    .catch((err) => {
        console.log("ERROR: " + err);
    })