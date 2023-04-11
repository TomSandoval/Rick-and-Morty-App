const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
   sequelize.define('Favorite', {
      id:{
         type: DataTypes.STRING,
         primaryKey: true,
         autoIncrement: true,
      },
      name:{
         type: DataTypes.STRING,
         allowNull: false
      },
      status:{
         type: DataTypes.ENUM("Alive", "Dead","Unknow"),
         allowNull: false
      },
      species:{
         type: DataTypes.STRING,
         allowNull: false
      },
      gender:{
         type: DataTypes.STRING,
         allowNull: false
      },
      origin:{
         type: DataTypes.STRING,
         allowNull: false
      },
      image:{
         type: DataTypes.BLOB,
         allowNull: false
      }
   }, { timestamps: false });
};
