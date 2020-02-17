const Exercise = require('../models/ExerciseSchema');

module.exports = {
    async index(req, res) {
        const exercises = await Exercise.find();

        return res.json(exercises);
    },

    async indexById(req, res) {
        const exercises = await Exercise.findById(req.params.id);

        return res.json(exercises);
    },

    async store(req, res) {
        try {
            const { username, description, duration, date } = req.body;

            const exercise = await Exercise.create({
                username,
                description,
                duration,
                date,
            });

            return res.json(exercise);
            
        } catch (err) {
            return res.json(err);
        }
    },

    async update(req, res) {
        try {
            const exercise = await Exercise.findByIdAndUpdate(req.params.id, req.body, {new: true});

            return res.json(exercise);
        } catch (err) {
            return res.json(err);
        }
        
    },

    async destroy(req, res) {
        try {
            await Exercise.findByIdAndDelete(req.params.id);
            const exercises = await Exercise.find();

            return res.json(exercises);
            
        } catch (err) {
            return res.json(err);
        }
    }
}