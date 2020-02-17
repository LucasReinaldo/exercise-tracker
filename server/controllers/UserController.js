const User = require('../models/UserSchema');

module.exports = {
    async index(req, res) {
        const users = await User.find();

        return res.json(users);
    },

    async store(req, res) {
        const { username } = req.body;

        let user = await User.findOne({ username });

        user = await User.create({
            username,
        });

        return res.json(user);
    },

    async update(req, res) {
        try {
            const user = await User.findByIdAndUpdate(req.params.id, req.body, {new: true});

            return res.json(user);
        } catch (err) {
            return res.json(err);
        }
    },

    async destroy(req, res) {
        await User.findByIdAndDelete(req.params.id);
        const users = await User.find();

        return res.json(users);
    }
}