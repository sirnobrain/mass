const Table = require('./../models/table');

class Index {
	static showAvailableTables() {
		const options = {where: {isEmpty: true}};
		Table.findAll(options)
		.then(emptyTables => {

		})
		.catch(err => {
			if (err) throw err;
		});
	}
}

module.exports = Index;