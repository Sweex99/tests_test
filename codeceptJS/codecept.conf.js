const { setHeadlessWhen } = require('@codeceptjs/configure');

setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: './todomvc-tests/**/*_test.js',
  output: './output',
  helpers: {
    Puppeteer: {
      url: 'http://localhost',
      waitForTimeout: 5000,
      waitForNavigation: 'networkidle0',
      waitForAction: 0,
      show: true,
    },

    REST: {},

    CustomHelper: {
      require: './todomvc-tests/helpers/custom.helper.js'
    }
  },

  include: {
    TodosPage: './todomvc-tests/pages/todos.page.js'
  },
  plugins: {
    testomat: {
      enabled: true,
      require: '@testomatio/reporter/lib/adapter/codecept',
      apiKey: 'bu8e29984sqd',
    },
  },
  bootstrap: null,
  mocha: {},
  name: 'codecept demo tests'
}