const { body, validationResult } = require("express-validator");
const { fail } = require("../../config/response");
const { User } = require("../../models");

exports.runValidation = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.json(fail({ msg: errors.array() }));
    }
    next();
};

exports.postValidator = [
    body("name", "nama tidak boleh kosong").notEmpty(),
    body("email", "email salah")
    .isEmail()
    .withMessage("Email kamu harus benar ya")
    .custom((value) => {
        return User.findOne({ where: { email: value } }).then((user) => {
            if (user) {
                return Promise.reject("E-mail already in use");
            }
        });
    }),
    body("password").custom((value, { req }) => {
        if (value !== req.body.passwordConfirmation) {
            throw new Error("Password confirmation does not match password");
        }
        return true;
    }),
];