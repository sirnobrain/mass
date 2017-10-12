const Model = require('../../models');
const bcrypt = require('bcrypt');

const authenticate = require('../../helpers/authenticate');

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
      // Minus one = Minus yourself!
      counter.users = values[2] - 1;

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

  static loginIndex(req, res) {

    res.render('admin/login', {
      pageTitle: 'Login',
      session: req.session
    });

  }

  static loginPost(req, res) {

    Model.User.findOne({
      where: {
        username: req.body.username
      }
    }).then((user) => {

      if (!user) {

        res.render('admin/login', {
          pageTitle: 'Login',
          error: 'Username/Password Invalid!',
          session: req.session
        });

      } else {

        if (bcrypt.compareSync(req.body.password, user.password)) {

          req.session.userId = user.id;
          req.session.username = user.username;
          req.session.role = user.role;

          res.redirect('/admin');

        } else {

          res.render('admin/login', {
            pageTitle: 'Login',
            error: 'Username/Password Invalid!',
            session: req.session
          });

        }

      }

    });

  }

  static logout(req, res) {
    req.session.destroy();
    res.redirect('/admin');
  }

  static changePasswordIndex(req, res) {
    if (authenticate(req.session)) {
      res.render('admin/change-password', {
        session: req.session
      });
    } else {
      res.redirect('/admin');
    }
  }

  static changePasswordPost(req, res) {
    if (authenticate(req.session)) {

      Model.User.findOne({
        where: { username: req.session.username }
      }).then((user) => {

        // Check old password
        if (bcrypt.compareSync(req.body.old_password, user.password)) {

          if (req.body.confirm_new_password === req.body.new_password) {

            Model.User.update(
              {
                password: req.body.new_password
              },
              {
                where: { username: req.session.username },
                individualHooks: true
              }
            ).then(() => {

              res.redirect('/admin');

            }).catch((err) => {

              res.render('admin/change-password', {
                errors: err.errors,
                session: req.session
              });

            });

          } else {

            req.flash('errors', [{ message: 'Confirmation failed, please try again' }])

            res.render('admin/change-password', {
              session: req.session
            });

          }

        } else {

          req.flash('errors', [{ message: 'Old password is wrong, please try again' }])

          res.render('admin/change-password', {
            session: req.session
          });

        }

      });

    } else {
      res.redirect('/admin');
    }
  }

}

module.exports = AdminController;
