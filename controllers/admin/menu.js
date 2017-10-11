const Model = require('../../models');

class MenuController {

  static index(req, res) {

    Model.Menu.all({

      order: [ [ 'createdAt', 'DESC' ], [ 'updatedAt', 'DESC' ] ]

    }).then((menus) => {

      res.render('admin/menus/index', {
        pageTitle: 'Menu List',
        session: req.session,
        menus: menus
      });

    });

  }

  static add(req, res) {

    res.render('admin/menus/add', {
      pageTitle: 'Add a Menu',
      session: req.session
    });

  }

  static create(req, res) {

    Model.Menu.create({

      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      isAvailable: true

    }).then(() => {

      req.flash('success', 'Menu successfully created.');

      res.redirect('/admin/menus');

    }).catch((err) => {

      req.flash('errors', err.errors)

      res.redirect('/admin/menus/add');

    });

  }

  static edit(req, res) {

    Model.Menu.findById(req.params.id).then((menu) => {

      // If exist
      if (menu) {

        res.render('admin/menus/edit', {
          pageTitle: 'Edit a Menu',
          menu: menu,
          session: req.session
        });

      } else {

        res.redirect('/admin/menus');

      }

    });

  }

  static update(req, res) {

    Model.Menu.findById(req.params.id).then((menu) => {

      // If exist
      if (menu) {

        Model.Menu.update(

          {
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            isAvailable: req.body.isAvailable || false
          },
          {
            where: { id: req.params.id }
          }

        ).then(() => {

          req.flash('success', 'Menu successfully updated.');

          res.redirect('/admin/menus');

        }).catch((err) => {

          req.flash('errors', err.errors);

          res.redirect(`/admin/menus/${req.params.id}/edit`);

        });

      } else {

        res.redirect('/admin/menus');

      }

    });

  }

  static delete(req, res) {

    Model.Menu.findById(req.params.id).then((menu) => {

      // If exist
      if (menu) {

        res.render('admin/menus/delete', {
          pageTitle: 'Delete a Menu',
          menu: menu,
          session: req.session
        });

      } else {

        res.redirect('/admin/menus');

      }

    });

  }

  static destroy(req, res) {

    Model.Menu.findById(req.params.id).then((menu) => {

      // If exist
      if (menu) {

        Model.Menu.destroy({

          where: { id: req.params.id }

        }).then(() => {

          req.flash('success', 'Menu successfully deleted.');

          res.redirect('/admin/menus');

        }).catch((err) => {

          req.flash('errors', [{ message: `You can't delete a menu that already has a relation to orders` }]);

          res.redirect(`/admin/menus/${req.params.id}/delete`);

        });

      } else {

        res.redirect('/admin/menus');

      }

    });

  }

}

module.exports = MenuController;
