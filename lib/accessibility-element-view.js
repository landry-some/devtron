'use strict'

const SelectableView = require('./selectable-view')
const Eval = require('./eval')

class AccessibilityElementView extends SelectableView {
  constructor (element, parent) {
    super('element-row')

    this.path = element.selector
    this.pathId = element.id
    parent.appendChild(this.element)
    this.render()
    this.handleEvents(parent)
  }

  handleEvents (parent) {
    this.listenForSelection(parent)
    this.listenForSelectionKeys(parent.parentElement)
  }

  render () {
    this.selectorPath.textContent = this.path

    // Add a click-handler that will select the element.
    // Uses the `accessibilityAuditMap` defined in accessibility.js
    this.selectorPath.onclick = (evt) => {
      evt.stopPropagation()
      Eval.execute(`inspect(window.__devtron.accessibilityAuditMap.get(${this.pathId}))`)
    }
  }

  filter (searchText) {
    let matches = this.path.toLowerCase().includes(searchText)
    matches ? this.show() : this.hide()
    return matches
  }
}

module.exports = AccessibilityElementView
