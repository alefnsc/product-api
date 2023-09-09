import Sequelize from "sequelize";

const sequelize = new Sequelize({
  dialect: "postgres",
  host: "172.17.0.2",
  port: 5432,
  database: "product",
  username: "postgres",
  password: "mysecretpassword",
  logging: false,
});

const productModel = (sequelize, DataTypes) => {
  const Product = sequelize.define("product", {
    Code: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      unique: true,
    },
    Description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Price: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
  });
  return Product;
};

const product = productModel(sequelize, Sequelize.DataTypes);

export default { product, sequelize };
