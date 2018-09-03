import Hoek from 'hoek';

const shared = {};

const environments = {
  development: {
    mode: 'development'
  },
  qa: {
    mode: 'qa'
  },
  production: {
    mode: 'production'
  }
};

export default Hoek.applyToDefaults(shared, environments[process.env.REACT_APP_ENVIRONMENT || 'development']);
