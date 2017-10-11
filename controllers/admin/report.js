const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const Model = require('../../models');

class ReportController {

  static index(req, res) {

    res.render('admin/report/index', {
      pageTitle: 'Generate Report',
      session: req.session
    });

  }

  static generate(req, res) {

    let from = new Date(req.body.from + 'GMT');
    let fromPlusOne = new Date(req.body.from + 'GMT');
        fromPlusOne.setDate(fromPlusOne.getDate() + 1);
    let to = new Date(req.body.to + 'GMT');
        to.setDate(to.getDate() + 1);
    let whereOptions = {};

    if (from.toISOString() === to.toISOString()) {
      whereOptions.createdAt = { $gte: from, $lt: fromPlusOne }
    } else {
      whereOptions.createdAt = { $gte: from, $lte: to }
    }

    Model.Order.findAll({
      include: [ Model.Menu ],
      where: whereOptions
    }).then((orders) => {

      let total = 0;

      orders.forEach((order, index) => {
        total += (order.pricePaid * order.quantity);
      });

      res.render('admin/report/generated-report', {
        pageTitle: 'Generated Report',
        orders: orders,
        session: req.session,
        from: req.body.from,
        to: req.body.to,
        total: total
      });

    });

  }

}

module.exports = ReportController;
