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

    const from = new Date(req.body.from + 'GMT');
    const to = new Date(req.body.to + 'GMT');

    Model.Order.findAll({
      where: {
        createdAt: {
          $gte: from,
          $lte: to,
        }
      }
    }).then((orders) => {
      res.send(orders);
    });

  }

}

module.exports = ReportController;
