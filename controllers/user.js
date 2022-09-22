const services = require("../services/index ");

async function getAllUsers(req, res, next) {
    try {
        await services.user.getAllUsers(req, res);
    } catch (error) {
        next(error);
    }
}

async function getUserByCityName(req, res, next) {
    try {
        await services.user.getUserByCityName(req, res);
    } catch (error) {
        next(error);
    }
}
async function createUser(req, res, next) {
    try {
        await services.user.createUser(req, res);
    } catch (error) {
        next(error);
    }
}
async function createFakeUser(req, res, next) {
    try {
        await services.user.createFakeUser(req, res);
    } catch (error) {
        next(error);
    }
}
async function updateUser(req, res, next) {
    try {
        await services.user.updateUser(req, res);
    } catch (error) {
        next(error);
    }
}
async function getUsersById(req, res, next) {
    try {
        await services.user.getUsersById(req, res);
    } catch (error) {
        next(error);
    }
}
async function userSearchByName(req, res, next) {
    try {
        await services.user.userSearchByName(req, res);
    } catch (error) {
        next(error);
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
