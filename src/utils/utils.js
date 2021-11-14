/*
https://react.geist-ui.dev/en-us/components/file-tree
*/
export const convertTreeFormat = (tree) => {
  const result = []
  for (const node of tree) {
    result.push(recConvertTreeFormat(node))
  }
  console.log(result)
  return result;
}

const recConvertTreeFormat = (node) => {
  if ((!("children" in node)) || node.children.length === 0) {
    node["type"] = "file"
    return node
  }
  node["type"] = "directory"
  node["extra"] = `${node.children.length} file(s)`
  node["files"] = node["children"].map((child, idx) => {
    return recConvertTreeFormat(child)
  })
  return node;
}