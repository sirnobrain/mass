const authorize = (session, routes) => {

  const roles = {
    chef: ['menus'],
    manager: ['tables', 'report'],
    superadmin: ['users', 'menus', 'tables', 'report']
  };

  const loggedInRole = session.role;

  if (roles[loggedInRole].indexOf(routes) !== -1)
    return true;

  return false;

}

module.exports = authorize;
