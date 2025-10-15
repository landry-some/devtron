# Features

  * **Require graph** to help you visualize your app's internal and external
    library dependencies in both the main and renderer processes.
  * **IPC monitor** to track and inspect the messages sent and received
    between the renderer and main processes in your app.
  * **Event inspector** that shows the events and listeners that are registered
    in your app on the core Electron APIs such as the window, the app, and the
    processes.
  * **App Linter** that checks your apps for possible issues and missing
    functionality.

# Installing

```sh
npm install --save-dev devtron
```

Then execute the following from the Console tab of your running Electron app's
developer tools:

```js
require('devtron').install()
```

You should then see a `Devtron` tab added.
