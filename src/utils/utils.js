/*
https://react.geist-ui.dev/en-us/components/file-tree
*/
export const convertTreeFormat = (tree) => {
  // convert first layer into list of objects
  const rootKeysList = Object.keys(tree);
  const result = []
  for (const rootKey of rootKeysList) {
    result.push(recConvertTreeFormat(rootKey, tree[rootKey]))
  }
  console.log(`${JSON.stringify(result)}`)
  return result;
}

const recConvertTreeFormat = (name, node) => {
  const keys = Object.keys(node)
  const n = keys.length
  node["name"] = name
  if (n === 0) {
    node["type"] = "file"
    return node
  }
  node["type"] = "directory"
  node["extra"] = n === 1 ? `1 file` : `${n} files`
  node["files"] = keys.map((childKey, idx) => {
    return recConvertTreeFormat(childKey, node[childKey])
  });
  return node
}
/*
  if (keys.includes("desc")) {
    // Remove special keyword desc if exists
    keys.splice(keys.indexOf("desc"), 1)
  }
*/