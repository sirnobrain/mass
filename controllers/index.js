const Model = require('./../models');

class Index {
	// query available tables and send the result to view
	static showAvailableTables(req, res) {
		const options = {where: {isEmpty: true}};

		Model.Table.findAll(options)
		.then(emptyTables => {
			const viewData = {
				data: emptyTables,
				err: null,
				session: req.sessionRole
			};

			res.render('index', viewData);
		})
		.catch(err => {
			if (err) throw err;
		});
	}
}

module.exports = Index;