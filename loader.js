const loadSizes = (mainModule) => {
  return Promise.all(mainModule.toArray().map((module) => {
    return Eval.getFileSize(module.path).then((size) => module.setSize(size))
  })).then(() => mainModule)
}

const createModules = (mainModule) => {
  const {resourcesPath, appName} = mainModule
  const processModule = (node) => {
    const module = new Module(node.path, resourcesPath, appName)
    node.children.forEach((childNode) => {
      module.addChild(processModule(childNode))
    })
    return module
  }
  return processModule(mainModule)
}

const getRenderModules = () => {
  return Eval.getRenderRequireGraph().then(createModules).then(loadSizes)
}

const getMainModules = () => {
  return Eval.getMainRequireGraph().then(createModules).then(loadSizes)
}
