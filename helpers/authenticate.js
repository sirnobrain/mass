const authenticate = (session) => {

  if (session && session.hasOwnProperty('username'))
    return true;

  return false;

}

module.exports = authenticate;
