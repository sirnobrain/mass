const Model = require('./../models');

class Table {
	static setOccupied(req, res, next) {
		const record = {isEmpty: false};
		const options = {where: {id: req.params.id}};
		Model.Table.update(record, options)
		.then(() => {
			const redirectTo = `/table/${req.params.id}/menu`;
			res.redirect(redirectTo);
		})
		.catch(err => {
			if (err) throw err;
		});
	}
	// display all available menus
	static showMenu(req, res) {
		const options = {where: {isAvailable: true}};
		const tableId = req.params.id;

		Model.Menu.findAll(options)
		.then(availableMenus => {
			const viewData = {
				data: {
					availableMenus,
					tableId
				},
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
		console.log(req.body);
		for (let prop in reqBody) {
			if (reqBody[prop] > 0 && prop !== 'note') {
				let record = {
					TableId: tableId,
					MenuId: prop.split('-')[0],
					pricePaid: prop.split('-')[1],
					note: note,
					batch: batch,
					isReady: false,
					quantity: reqBody[prop],
					createdAt: new Date(),
					updatedAt: new Date()
				}
				records.push(record);
			}
		}

		Model.Order.bulkCreate(records)
		.then(() => {
			const redirectTo = `/table/${tableId}/wait`;

			res.redirect(redirectTo);
		})
		.catch(err => {
			if (err) throw err;
		});
	}

	static wait(req, res) {
		const viewData = {
			data: {
				tableId: req.params.id
			},
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