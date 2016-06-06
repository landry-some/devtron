'use strict'

const Eval = require('./eval')

exports.getEvents = () => {
  return Eval.execute(() => {
    const formatCode = (listener) => {
      let lines = listener.split(/\r?\n/)
      if (lines.length === 1) return listener

      let lastLine = lines[lines.length - 1]
      let lastLineMatch = /^(\s+)}/.exec(lastLine)
      if (!lastLineMatch) return listener

      let whitespaceRegex = new RegExp('^' + lastLineMatch[1])
      return lines.map((line) => {
        return line.replace(whitespaceRegex, '')
      }).join('\n')
    }

    const getEvents = (emitter) => {
      const events = {}
      Object.keys(emitter._events).sort().forEach((name) => {
        let listeners = emitter.listeners(name)
        if (listeners.length > 0) {
          events[name] = listeners.map((listener) => {
            return formatCode(listener.toString())
          })
        }
      })
      return events
    }

    const electron = require('electron')
    const remote = electron.remote
    return {
      'electron.remote.getCurrentWindow()': getEvents(remote.getCurrentWindow()),
      'electron.remote.getCurrentWebContents()': getEvents(remote.getCurrentWebContents()),
      'electron.remote.app': getEvents(remote.app),
      'electron.remote.ipcMain': getEvents(remote.ipcMain),
      'electron.ipcRenderer': getEvents(electron.ipcRenderer),
      'electron.remote.process': getEvents(remote.process),
      'global.process': getEvents(process)
    }
  })
}
