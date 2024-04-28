const Expanse = require('../model/expanse');

exports.addExpanse = (req, res) => {
    const { expanseAmount, expanseDescription, expanseCategory } = req.body;
    Expanse.create({ expanseAmount, expanseDescription, expanseCategory })
        .then(newExpanse => res.status(201).json(newExpanse))
        .catch(error => {
            console.error(error);
            res.status(500).json({ message: 'Server Error' });
        });
};

exports.getExpanse = (req, res) => {
    Expanse.findAll()
        .then(expanses => res.json(expanses))
        .catch(error => {
            console.error(error);
            res.status(500).json({ message: 'Server Error' });
        });
};

exports.getExpanseById = (req, res) => {
    const { id } = req.params;
    Expanse.findByPk(id)
        .then(expanse => {
            if (!expanse) {
                return res.status(404).json({ message: 'Expanse not found' });
            }
            res.json(expanse);
        })
        .catch(error => {
            console.error(error);
            res.status(500).json({ message: 'Server Error' });
        });
};

exports.updateExpanse = (req, res) => {
    const { id } = req.params;
    const { expanseAmount, expanseDescription, expanseCategory } = req.body;
    Expanse.findByPk(id)
        .then(expanse => {
            if (!expanse) {
                return res.status(404).json({ message: 'Expanse not found' });
            }
            expanse.update({ expanseAmount, expanseDescription, expanseCategory })
                .then(updatedExpanse => res.json(updatedExpanse))
                .catch(error => {
                    console.error(error);
                    res.status(500).json({ message: 'Server Error' });
                });
        })
        .catch(error => {
            console.error(error);
            res.status(500).json({ message: 'Server Error' });
        });
};

exports.deleteExpanse = (req, res) => {
    const { id } = req.params;
    Expanse.findByPk(id)
        .then(expanse => {
            if (!expanse) {
                return res.status(404).json({ message: 'Expanse not found' });
            }
            expanse.destroy()
                .then(() => res.json({ message: 'Expanse deleted successfully' }))
                .catch(error => {
                    console.error(error);
                    res.status(500).json({ message: 'Server Error' });
                });
        })
        .catch(error => {
            console.error(error);
            res.status(500).json({ message: 'Server Error' });
        });
};
