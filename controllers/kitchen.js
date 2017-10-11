const Model = require('./../models');

class Kitchen {
	// query active orders and display them on kitchen screen
	static showActiveOrders(req, res) {
		const options = {
			where: {isReady: false},
			include: ['Table', 'Menu']
		};

		Model.Order.findAll(options)
		.then(orders => {
			const groupByBatch = () => {
				let batch = [];

				for (let i = 0; i < orders.length; i++) {
					if (batch.indexOf(orders[i].batch) === -1) {
						batch.push(orders[i].batch);
					}
				}

				return batch.reduce((res, val) => {
					let orderByBatch = [];
					orders.forEach(order => {
						if (order.batch === val) {
							orderByBatch.push(order);
						}
					});
					res[val] = orderByBatch;
					return res;
				}, {});
			}

			const viewData = {
				data: {
					orders: groupByBatch()
				},
				err: null,
				session: null
			}

			res.render('kitchen', {viewData});
		});
	}

	static updateBatchStatus(req, res) {
		const values = {isReady: true};
		const options = {where: {batch: req.body.batch}};

		Model.Order.update(values, options)
		.then(() => {
			res.redirect('/kitchen');
		})
		.catch(err => {
			if (err) throw err;
		});
	}
}

module.exports = Kitchen;