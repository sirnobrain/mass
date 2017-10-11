const Model = require('../../models');

class UserController {

  static index(req, res) {

    Model.User.all({

      order: [ [ 'username', 'ASC' ] ],
      where: { id: { $ne: req.session.userId } }

    }).then((users) => {

      res.render('admin/users/index', {
        pageTitle: 'User List',
        session: req.session,
        users: users
      });

    });

  }

  static add(req, res) {

    res.render('admin/users/add', {
      pageTitle: 'Add a User',
      session: req.session
    });

  }

  static create(req, res) {

    Model.User.create({

      username: req.body.username,
      password: req.body.password, // Hashed on hook, see: /models/user.js
      role: req.body.role

    }).then(() => {

      req.flash('success', 'User successfully created.');

      res.redirect('/admin/users');

    }).catch((err) => {

      req.flash('errors', err.errors)

      res.redirect('/admin/users/add');

    });

  }

  static edit(req, res) {

    Model.User.findById(req.params.id).then((user) => {

      // If exist
      if (user) {

        res.render('admin/users/edit', {
          pageTitle: 'Edit a User',
          user: user,
          session: req.session
        });

      } else {

        res.redirect('/admin/users');

      }

    });

  }

  static update(req, res) {

    Model.User.findById(req.params.id).then((user) => {

      // If exist
      if (user) {

        Model.User.update(

          {
            username: req.body.username,
            role: req.body.role
          },
          {
            where: { id: req.params.id }
          }

        ).then(() => {

          req.flash('success', 'User successfully updated.');

          res.redirect('/admin/users');

        }).catch((err) => {

          req.flash('errors', err.errors);

          res.redirect(`/admin/users/${req.params.id}/edit`);

        });

      } else {

        res.redirect('/admin/users');

      }

    });

  }

  static delete(req, res) {

    Model.User.findById(req.params.id).then((user) => {

      // If exist
      if (user) {

        res.render('admin/users/delete', {
          pageTitle: 'Delete a User',
          user: user,
          session: req.session
        });

      } else {

        res.redirect('/admin/users');

      }

    });

  }

  static destroy(req, res) {

    Model.User.findById(req.params.id).then((user) => {

      // If exist
      if (user) {

        Model.User.destroy({

          where: { id: req.params.id }

        }).then(() => {

          req.flash('success', 'User successfully deleted.');

          res.redirect('/admin/users');

        }).catch((err) => {

          req.flash('errors', [{ message: `You can't delete a user that already has a relation to orders` }]);

          res.redirect(`/admin/users/${req.params.id}/delete`);

        });

      } else {

        res.redirect('/admin/users');

      }

    });

  }

}

module.exports = UserController;
