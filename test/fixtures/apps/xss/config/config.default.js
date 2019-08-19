'use strict';

module.exports = appInfo => {
  const config = {};
  config.keys = appInfo.name + '_1559316688233_5201';
  config.security = {
    csrf: {
      enable: false,
    },
  };

  config.xss = {
    enable: true,
    match: [ '/test', '/login' ],
  };
  return config;
};
