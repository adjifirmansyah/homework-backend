const { success, fail } = require("../../config/response");
const { User } = require("../../models");
//const { genSaltSync, hashSync } = require("bcrypt");

exports.getUser = async(req, res) => {
    try {
        const data = await User.findAll();
        res.json(success({ msg: "data user berhasil diterima", data }));
    } catch (error) {
        res.json(fail({ msg: error }));
    }
};

exports.createUser = async({ body }, res) => {
    const payload = {
        birth_date: body.birth_date,
        first_name: body.birth_date,
        last_name: body.birth_date,
        gender: body.gender,
        hire_date: body.hire_date,
    };
    try {
        //const salt = genSaltSync(100000);
        // body.password = hashSync(body.password, salt);
        const data = await User.create(payload);
        res.json(success({ msg: "data user berhasil ditambahkan", data }));
    } catch (error) {
        res.json(fail({ msg: error }));
    }
};
exports.updateUser = async({ body }, res) => {
    if (!body.id) res.json(fail({ msg: "data id tidak ditemukan" }));
    try {
        const payload = body;
        const data = await User.update(payload, {
            where: {
                id: body.id,
            },
        });
        if (data) res.json(success({ msg: "data user berhasil diubah", data }));
        else res.json(fail({ msg: "data user gagal diperbarui" }));
    } catch (error) {
        res.json(fail({ msg: error }));
    }
};

exports.deleteUser = async({ body }, res) => {
    if (!body.id) res.json(fail({ msg: "data id tidak ditemukan" }));
    try {
        const data = await User.destroy({
            where: {
                id: body.id,
            },
        });
        if (data) res.json(success({ msg: "data user berhasil dihapus", data }));
        else res.json(fail({ msg: "data user gagal dihapus" }));
    } catch (error) {
        res.json(fail({ msg: error }));
    }
};