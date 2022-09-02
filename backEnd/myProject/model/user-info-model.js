const Sequelize = require("sequelize");
const database = require("../database/db.js");

const userInfo = database.define(
  "user_info",
  {
    id: {
      type: Sequelize.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV4,
    },
    orgCode: { type: Sequelize.STRING },
    companyCode: { type: Sequelize.STRING },
    fullName: { type: Sequelize.STRING },
    phoneNumber: { type: Sequelize.STRING },
    email: { type: Sequelize.STRING }
  },
  { timestamps: false, freezeTableName: true }
);

module.exports = userInfo;
