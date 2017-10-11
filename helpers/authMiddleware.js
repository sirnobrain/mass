const authenticate = require('./authenticate');
const authorize = require('./authorize');

const authMiddleware = (route, req, res, next) => {

  if (authenticate(req.session)) {

    if (authorize(req.session, route)) {

      next();

    } else {

      res.render('admin/auth-problem', {
        pageTitle: 'Oops!',
        message: `Authorization failed, you don't have access to this route`,
        session: req.session
      });

    }

  } else {

    res.redirect('/admin/login');

  }

}

module.exports = authMiddleware;
