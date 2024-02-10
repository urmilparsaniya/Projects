const { STATUS_CODES } = require("../Configs/constants");
const emailRegex =
  /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;
const bcrypt = require("bcrypt");
const saltRounds = 10;

exports.cleanObject = async (Object) => {
  return new Promise(async (resolve, reject) => {
    for (let index in Object) {
      if (
        // !Object[index] ||
        // Object[index] === '' ||
        // Object[index] === 0 ||
        Object[index] === null ||
        Object[index] === undefined ||
        Object[index] === "null" ||
        Object[index] === "undefined"
      ) {
        Object[index] = "";
      }
    }
    resolve(Object);
  });
};
// Clearn Response
exports.cleanResponse = async (Object) => {
  return new Promise(async (resolve, reject) => {
    if (Object) {
      let newObject = JSON.parse(
        JSON.stringify(Object).replace(/\:null/gi, ':""')
      );
      newObject = JSON.parse(
        JSON.stringify(newObject).replace(/\:"null"/gi, ':""')
      );
      newObject = JSON.parse(
        JSON.stringify(newObject).replace(/\:undefined/gi, ':""')
      );
      newObject = JSON.parse(
        JSON.stringify(newObject).replace(/\:"undefined"/gi, ':""')
      );
      newObject = JSON.parse(
        JSON.stringify(newObject).replace(/\:"invalid date"/gi, ':""')
      );
      newObject = JSON.parse(
        JSON.stringify(newObject).replace(/\:invalid date/gi, ':""')
      );
      newObject = JSON.parse(
        JSON.stringify(newObject).replace(/\:0000-00-00/gi, ':""')
      );
      newObject = JSON.parse(
        JSON.stringify(newObject).replace(/\:"0000-00-00"/gi, ':""')
      );
      newObject = JSON.parse(
        JSON.stringify(newObject).replace(/\:"image"/gi, ':""')
      );
      newObject = JSON.parse(
        JSON.stringify(newObject).replace(/\:"profile_image"/gi, ':""')
      );
      resolve(newObject);
    } else {
      resolve(Object);
    }
  });
};

// Validate Fields
exports.validateFields = async (fieldsData, requiredFields) => {
  const isMissingField = requiredFields.some(
    (value) =>
      !fieldsData.hasOwnProperty(value) ||
      fieldsData[value] === null ||
      fieldsData[value] === undefined
  );

  if (isMissingField) {
    return {
      status: 2,
      message: `${requiredFields.find(
        (value) =>
          !fieldsData.hasOwnProperty(value) ||
          fieldsData[value] === null ||
          fieldsData[value] === undefined
      )} is required`,
    };
  }

  return {
    status: 1,
    message: `All fields are valid`,
  };
};

// Email Validation
exports.validateEmail = async (email) => {
  return emailRegex.test(email);
};

// Password
exports.bcryptPassword = async (password) => {
  let hashedPassword = new Promise((resolve, reject) => {
    bcrypt.hash(password, saltRounds, async function (err, hash) {
      if (err) {
        resolve(null);
      } else {
        resolve(hash);
      }
    });
  });
  return hashedPassword;
};

// Random string Order Number
exports.orderNumber = async () => {
  const charset =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";

  for (let i = 0; i < 10; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    result += charset.charAt(randomIndex);
  }

  return result;
};
