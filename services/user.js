const Model = require("../models/index");
const { faker } = require("@faker-js/faker");

// get users
async function getAllUsers(req, res) {
    try {
        let users = await Model.user.find().limit(10);
        return res.status(200).send({
            success: true,
            data: users,
        });
    } catch (error) {
        throw error;
    }
}
// get users by city name
async function getUserByCityName(req, res) {
    try {
        const { keyword, skip, limit, sort } = req.body;
        const search = keyword
            ? {
                address: {
                    $regex: new RegExp(keyword, 'i')
                }
            }
            : {};

        let finalData = await Model.user.find(search)
            .sort(sort)
            .skip(skip)
            .limit(limit);

        return res.status(200).send({
            success: true, data: finalData,
        });
    } catch (error) {
        throw error;
    }
}
// create user
async function createFakeUser(req, res) {
    try {
        for (let fake = 0; fake < 5000; fake++) {
            let user = {
                fName: faker.name.firstName(),
                lName: faker.name.lastName(),
                password: faker.internet.password(),
                email: faker.internet.email(),
                address: faker.address.city(),
            };
            await Model.user.create(user);

        }

    } catch (error) {
        throw error;
    }
}

// create user
async function createUser(req, res) {
    try {

        let user = {
            fName: req.body.fName,
            lName: req.body.lName,
            password: req.body.password,
            email: req.body.email,
            address: req.body.address,
        };
        let createUser = await Model.user.create(user);
        return res.status(200).send({
            msg: "user created successfully",
            data: createUser,
            success: true,
        });


    } catch (error) {
        throw error;
    }
}

// update user
async function updateUser(req, res) {
    try {
        let checkUser = await Model.user.findById({ _id: req.body._id })
        if (checkUser) {
            let changeUser = await Model.user.findByIdAndUpdate({ _id: req.body._id }, {

                fName: req.body.fName,
                lName: req.body.lName,

                address: req.body.address,

            }, { upsert: true, new: true })
            return res.status(200).send({
                msg: " user updated successfully",
                data: changeUser,
                success: true,
            })
        } else {
            return res.status(400).send({
                msg: "user not found",
                success: false,
            });
        }
    } catch (error) {
        throw error;
    }
}
// get user by id
async function getUsersById(req, res) {
    try {
        let user = await Model.user.findById({ _id: req.body._id })
        return res.status(200).send({
            success: true, data: user,
        });
    } catch (error) {
        throw error;
    }
}

// search user by fName, lName, address
async function userSearchByName(req, res) {
    try {
        var result = Model.user.find({
            $or: [{ fName: { $regex: search.keyWord, $options: 'i' } }, { lName: { $regex: search.keyWord, $options: 'i' } }, { address: { $regex: search.keyWord, $options: 'i' } }]
        });
        return res.status(200).send({
            success: true, data: result,
        });
    } catch (error) {
        throw error;
    }
}
module.exports = {
    getAllUsers,
    getUserByCityName,
    userSearchByName,
    createUser,
    createFakeUser,
    updateUser,
    getUsersById
};
