const Model = require('../../models');

class AdminController {

  static index(req, res) {

    Promise.all([
      Model.Menu.count(),
      Model.Table.count(),
      Model.User.count(),
    ]).then((values) => {

      let counter = {};

      counter.menus = values[0];
      counter.tables = values[1];
      counter.users = values[2];

      let whereOptions = {};
      let from = new Date();
          from.setDate(from.getDate() - 1);
      let fromPlusOne = new Date();

      whereOptions.createdAt = { $gte: from, $lt: fromPlusOne };

      // TODO: BEST SELLER
      // Model.Order.findAll({
      //   include: [ Model.Menu ],
      //   where: whereOptions
      // }).then((orders) => {
      //
      // });

      res.render('admin/dashboard/index', {
        pageTitle: 'Admin Dashboard',
        session: req.session,
        counter: counter
      });

    });

  }

}

module.exports = AdminController;
