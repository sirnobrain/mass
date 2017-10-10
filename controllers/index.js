const Table = require('./../models/table');

class Index {
	// query available tables and send the result to view
	static showAvailableTables(req, res) {
		const options = {where: {isEmpty: true}};

		Table.findAll(options)
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