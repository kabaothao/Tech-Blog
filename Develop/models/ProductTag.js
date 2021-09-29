const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

class ProductTag extends Model {}

ProductTag.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    product_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "product",
        key: "id",
      },
    },
    tag_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "tag",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "product_tag",
  }
);

module.exports = ProductTag;

// CREATE TABLE productTag (
//   id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
//   product_id INT,
//   FOREIGN KEY (product_id) REFERENCES product(id),
//   tag_id INT,
//   FOREIGN KEY (tag_id) REFERENCES tag(id)
// );
