import Node from "./Node.js"

class BST {
    #root

    constructor() {
        this.#root = null
    }

    add(value) {
        if (this.#root == null) {
            this.#root = new Node(value)
            return this.#root != null
        } else {
            return this.insertNode(this.#root, value)
        }
    }

    insertNode(node, value) {
        if (value.equipo < node.value.equipo) {
            if (node.left == null) {
                node.left = new Node(value)
                return node.left != null
            } else {
                return this.insertNode(node.left, value)
            }
        } else {
            if (node.right == null) {
                node.right = new Node(value)
                return node.right != null
            } else {
                return this.insertNode(node.right, value)
            }
        }
    }

    search(dorsal) {
        return this.searchNode(this.#root, equipo);
    }

    searchNode(node, dorsal) {
        if (node === null || node.value.equipo === equipo) {
            return node
        } else if (dorsal < node.value.equipo) {
            return this.searchNode(node.left, equipo)
        } else {
            return this.searchNode(node.right, equipo)
        }
    }


    min() {
        
        return this.minNode(this.#root);
    }
    minNode(node) {
        if (node != null && node.left != null) { 
            return this.minNode(node.left);
        }
        else{
            return node;
        }
    }

    max() {
        return this.maxNode(this.#root);
    }
    maxNode(node) {
        if (node != null && node.right != null) { 
            return this.maxNode(node.right);
        }
        else{
            return node;
        }
    } 
    
    inOrder(callback) {
        this.inOrderNode(this.#root, callback);
    }

    inOrderNode(node, callback) {
        if (node === null) { 
           return 
        } else {
            this.inOrderNode(node.left, callback)
            callback(node.value)
            this.inOrderNode(node.right, callback)
        }
    }

}



export default BST
