const Model = require('../../models');

class TableController {

  static index(req, res) {

    Model.Table.all({

      order: [ [ 'createdAt', 'DESC' ] ]

    }).then((tables) => {

      res.render('admin/tables/index', {
        pageTitle: 'Table List',
        session: req.session,
        tables: tables
      });

    });

  }

  static add(req, res) {

    res.render('admin/tables/add', {
      pageTitle: 'Add a Table',
      session: req.session
    });

  }

  static create(req, res) {

    Model.Table.create({

      tableNumber: req.body.tableNumber

    }).then(() => {

      req.flash('success', 'Table successfully created.');

    }).catch((err) => {

      req.flash('errors', err.errors);

      res.redirect('/admin/tables/add');

    });

  }

  static edit(req, res) {

    Model.Table.findById(req.params.id).then((table) => {

      // If exist
      if (table) {

        res.render('admin/tables/edit', {
          pageTitle: 'Edit a Table',
          table: table,
          session: req.session
        });

      } else {

        res.redirect('/admin/tables');

      }

    });

  }

  static update(req, res) {

    Model.Table.findById(req.params.id).then((table) => {

      // If exist
      if (table) {

        Model.Table.update(
          {
            tableNumber: req.body.tableNumber
          },
          {
            where: { id: req.params.id }
          }
        ).then(() => {

          req.flash('success', 'Table successfully updated.');

          res.redirect('/admin/tables');

        }).catch((err) => {

          req.flash('errors', err.errors);

          res.redirect(`/admin/tables/${req.params.id}/edit`);

        });

      } else {

        res.redirect('/admin/tables');

      }

    });

  }

  static delete(req, res) {

    Model.Table.findById(req.params.id).then((table) => {

      // If exist
      if (table) {

        res.render('admin/tables/delete', {
          pageTitle: 'Delete a Table',
          table: table,
          session: req.session
        });

      } else {

        res.redirect('/admin/tables');

      }

    });

  }

  static destroy(req, res) {

    Model.Table.findById(req.params.id).then((table) => {

      // If exist
      if (table) {

        Model.Table.destroy({

          where: { id: req.params.id }

        }).then(() => {

          req.flash('success', 'Table successfully deleted.');

          res.redirect('/admin/tables');

        }).catch((err) => {

          req.flash('errors', [{ message: `You can't delete a table that already has a relation to orders` }]);

          res.redirect(`/admin/tables/${req.params.id}/delete`);

        });

      } else {

        res.redirect('/admin/tables');

      }

    });

  }

}

module.exports = TableController;
