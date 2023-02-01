const {DataTypes} = require('sequelize');
const sequelize = require('../db');

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    username: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING} 
});

const Auto = sequelize.define('auto', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    year: {type: DataTypes.INTEGER, allowNull: true},
    vin: {type: DataTypes.STRING, allowNull: true},
    stateNumber: {type: DataTypes.STRING},
    owner: {type: DataTypes.STRING},
    phone: {type: DataTypes.STRING},
});

const Model = sequelize.define('model', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    model: {type: DataTypes.STRING},
});

const Stamp = sequelize.define('stamp', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    stamp: {type: DataTypes.STRING},
});

const Test = sequelize.define('test', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING},
    phone: {type: DataTypes.STRING},
    country: {type: DataTypes.STRING}
});

const Order = sequelize.define('order', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    opened: {type: DataTypes.STRING},
    closed: {type: DataTypes.STRING, allowNull: true},
    cost: {type: DataTypes.INTEGER, allowNull: true},
    income: {type: DataTypes.INTEGER, allowNull: true},
    profit: {type: DataTypes.INTEGER, allowNull: true},
    comment: {type: DataTypes.STRING, allowNull: true},
});

const OrderActivity = sequelize.define('order_activity', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING},
    price: {type: DataTypes.INTEGER},
});

const OrderAutopart = sequelize.define('order_autopart', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING},
    price: {type: DataTypes.INTEGER},
});


User.hasMany(Auto);
Auto.belongsTo(User);

User.hasMany(Model);
Model.belongsTo(User);

User.hasMany(Stamp);
Stamp.belongsTo(User);

User.hasMany(Test);
Test.belongsTo(User);

User.hasMany(Order);
Order.belongsTo(User);

User.hasMany(OrderActivity);
OrderActivity.belongsTo(User);

User.hasMany(OrderAutopart);
OrderAutopart.belongsTo(User);

Model.hasMany(Auto);
Auto.belongsTo(Model);

Stamp.hasMany(Auto);
Auto.belongsTo(Stamp);

Auto.hasMany(Order);
Order.belongsTo(Auto);

Order.hasMany(OrderActivity, {as: 'activity'});
OrderActivity.belongsTo(Order);

Order.hasMany(OrderAutopart, {as: 'autopart'});
OrderAutopart.belongsTo(Order);


module.exports = {
    User,
    Auto,
    Model,
    Stamp,
    Test,
    Order,
    OrderActivity,
    OrderAutopart
};