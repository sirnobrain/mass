class AdminController {

  static index(req, res) {

    res.render('admin/dashboard/index', {
      pageTitle: 'Admin Dashboard',
      session: req.session
    });

  }

}

module.exports = AdminController;
