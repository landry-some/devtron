const vm = require('vm')

window.chrome = {
  devtools: {
    inspectedWindow: {
      eval: (expression, callback) => {
        expression = `'use strict';\n${expression}`
        try {
          const sandbox = {
            require: require,
            console: console,
            process: process,
            global: {
              process: process
            },
            window: {
              require: require,
              process: process
            }
          }
          callback(vm.runInNewContext(expression, sandbox))
        } catch (error) {
          callback(null, error)
        }
      }
    }
  }
}
