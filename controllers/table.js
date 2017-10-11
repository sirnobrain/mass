const Model = require('./../models');

class Table {
	// display all available menus
	static showMenu(req, res) {
		const options = {where: {isAvailable: true}};

		Model.Menu.findAll(options)
		.then(availableMenus => {
			const viewData = {
				data: availableMenus,
				err: null,
				session: null /* selama belum ada session set to null, kalo udah req.sessionRole*/
			};

			res.render('table', {viewData});
		})
		.catch(err => {
			if (err) throw err;
		});
	}

	static createOrder(req, res) {
		const reqBody = req.body;
		const tableId = req.params.id;
		const batch = Date.now();
		const note = req.body.note;
		const records = [];

		for (let MenuId in reqBody) {
			if (reqBody[MenuId] > 0 && reqBody !== 'note') {
				let record = {
					Tableid: tableId,
					MenuId: reqBody[MenuId],
					note: note,
					batch: batch,
					isReady: false,
					createdAt: new Date(),
					updatedAt: new Date()
				}
				records.push(record);
			}
		}

		Model.Menu.bulkCreate(records)
		.then(() => {
			const redirectTo = `/${tableId}/table-wait`;

			res.redirect(redirectTo);
		})
		.catch(err => {
			if (err) throw err;
		});
	}

	static wait(req, res) {
		const viewData = {
			data: null,
			err: null,
			session: null /* selama belum ada session set to null, kalo udah req.sessionRole*/
		}
		res.render('table-wait', {viewData});
	}

	static setEmpty(req, res) {
		const options = {where: {id: req.params.id}};
		const record = {isEmpty: true};

		Model.Table.update(record, options)
		.then(() => {
			res.redirect('/');
		})
		.catch(err => {
			if (err) throw err;
		})
	}
}

module.exports = Table;