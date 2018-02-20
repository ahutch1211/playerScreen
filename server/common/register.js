var register = function(model, router, path) {
  model.methods(['get', 'put', 'post', 'delete']);
  model.register(router, `/${path}`);
};

module.exports = register;
