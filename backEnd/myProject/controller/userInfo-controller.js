const userInfo = require("../model/user-info-model");

exports.createUser = async (req, res) => {
  let userData = req.body;
  try {
    await userInfo
      .create(userData)
      .then(() => {
        res.json({ message: "Successfully inserted." });
        res.end();
      })
      .catch((err) => {
        console.log("Promise Error");
      });
  } catch (err) {
    console.log("Try Catch Error");
  }
};


exports.readUser = async (req, res) => {
  try {
    await userInfo.findAll({
      where: { orgCode: '100' }
    }).then((data) => {
      return data;
    }).then((data) => {
      res.json(data);
      res.end();
    }).catch((err) => {
      console.log("Promise Error");
    })
  } catch (err) {
    console.log("Try Catch Error");
  }
};

exports.readByUserId = async (req, res) => {
  let idByRead = req.params.id;
  try {
    await userInfo.findAll({
      where: { id: idByRead }
    }).then((data) => {
      return data;
    }).then((data) => {
      res.json(data);
      res.end();
    }).catch((err) => {
      console.log("Promise Error");
    })
  } catch (err) {
    console.log("Try Catch Error");
  }
};


exports.updateByUserId = async (req, res) => {
  let idByUpdated = req.params.id;
  let dataByUpdated = {
    id         : req.body.id,
    orgCode    : req.body.orgCode,
    companyCode: req.body.companyCode,
    fullName   : req.body.fullName,
    phoneNumber: req.body.phoneNumber,
    email      : req.body.email
 };
  try {
    await userInfo
      .update(
        dataByUpdated,
        {
          where: {
          id: idByUpdated
        }
      })
      .then(() => {
        res.json({ message: "Successfully updated." });
        res.end();
      })
      .catch((err) => {
        console.log("Promise Error");
      });
  } catch (err) {
    console.log("Try Catch Error");
  }
};



exports.deleteByUserId = async (req, res) => {
  let idByDeleted = req.params.id;
  try {
    await userInfo
      .destroy(
        {
          where: {
          id: idByDeleted
        }
      })
      .then(() => {
        res.json({ message: "Successfully deleted." });
        res.end();
      })
      .catch((err) => {
        console.log("Promise Error");
      });
  } catch (err) {
    console.log("Try Catch Error");
  }
};