const useTraverseTree = () => {
  function insertNode(tree, folderId, currentValue, isFolder) {
    console.log(tree, folderId, currentValue, isFolder);
    if (tree.id === folderId && tree.isFolder) {
      tree.items.unshift({
        id: new Date().getTime(),
        name: currentValue,
        isFolder: isFolder,
        items: [],
      });
    }
    console.log(tree, 'tree...');
    return tree;
  }
  return { insertNode };
};

export default useTraverseTree;
