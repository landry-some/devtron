# devtron

An [Electron](http://electron.atom.io) [DevTools](https://developer.chrome.com/devtools) extension.

![screenshot](https://cloud.githubusercontent.com/assets/671378/14900253/8f794de8-0d44-11e6-8972-37886b716e60.png)

## Features

  * **Require graph** to help you visualize your app's internal and external
    library dependencies in both the main and renderer processes.
  * **IPC monitor** to track and inspect the messages sent and received
    between the renderer and main processes in your app.
  * **Event inspector** that shows the events and listeners that are registered
    in your app on the core Electron APIs such as the window, the app, and the
    processes.
  * **App Linter** that checks your apps for possible issues and missing
    functionality.

## Installing

```sh
npm install --save-dev devtron
```

Then execute the following from the Console tab of your running Electron app's
developer tools:

```js
require('devtron').install()
```

You should then see a `Devtron` tab added.

## Developing locally

```
git clone https://github.com/electron/devtron
cd devtron
npm install
npm start
```

This will start a process that watches and compiles the extension as files
are modified.

Then open the Console tab of your Electron app and run the following with the
path updated for the location that you've cloned devtron to:

```js
require('/Users/me/code/devtron').install()
```

Then a Devtron tab should appear and it will now be enabled for that
application.

You can reload the extension by closing and reopening the dev tools.

### Running in a browser

To make developing and debugging the extension easier, you can run it in a
Chrome tab that will talk remotely to a running Electron app over HTTP.

- Set the `DEVTRON_DEBUG_PATH` environment variable to the path of the cloned
  devtron repository.
- Start your Electron application.
- Click the **Devtron** tab.
- You should then see the following messages logged to the **Console** tab:

  > Devtron server listening on http://localhost:3948
  >
  > Open file:///Users/me/devtron/static/index.html to view

- Then open `/Users/me/devtron/static/index.html` in Chrome
- The page there will talk remotely to the running Electron app so you'll
  be able to fully interact with each pane with real data.

## Contributing

Have an idea for something this extension could do to make debugging Electron
apps easier? Please [open an issue](https://github.com/electron/devtron/issues/new).

Pull requests are also welcome and appreciated. Run `npm test` to run the
existing tests. This project uses the [standard JavaScript style](http://standardjs.com).
