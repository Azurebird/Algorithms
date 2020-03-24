package TreesAndGraphs

import java.util.*
import kotlin.collections.HashSet


class Node(val value: Any) {
    val children: HashSet<Node> = HashSet();

    fun addChildren(vararg nodes: Node) {
        for(node in nodes) {
            children.add(node)
            node.children.add(this)
        }
    }

    override fun toString(): String {
        return this.value.toString()
    }
}

fun searchBreadthFirst(root: Node, value: Any): Node? {
    val queue = LinkedList<Node>()
    val visitedNodes = HashSet<Node>()
    queue.add(root)

    while(!queue.isEmpty()) {
        val nextNode = queue.poll()

        if (nextNode.value == value) {
            return nextNode
        } else {
            queueNeighbour(visitedNodes, nextNode, queue)
        }
        println(queue)
    }
    return null
}

fun bidirectionalSearch(s: Node, d: Node): Boolean {
    val visitedNodesS = HashSet<Node>()
    val visitedNodesD = HashSet<Node>()
    val queueS = LinkedList<Node>()
    val queueD = LinkedList<Node>()
    queueS.add(s)
    queueD.add(d)

    while(queueS.isNotEmpty() && queueD.isNotEmpty()) {
        val nodeS = queueS.poll()
        val nodeD = queueD.poll()

        if (visitedNodesD.contains(nodeS) || visitedNodesS.contains(nodeD)) {
            return true;
        }

        queueNeighbour(visitedNodesS, nodeS, queueS)
        queueNeighbour(visitedNodesD, nodeD, queueD)
    }

    return false
}

private fun queueNeighbour(
    visitedNodes: HashSet<Node>,
    node: Node,
    queue: LinkedList<Node>
) {
    visitedNodes.add(node)
    for (sNodeChild in node.children) {
        if (!visitedNodes.contains(sNodeChild)) {
            queue.add(sNodeChild)
            visitedNodes.add(sNodeChild)
        }
    }
}