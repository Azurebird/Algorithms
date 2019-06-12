package TreesAndGraphs

fun main() {
    val nodeA = Node(0)
    val nodeB = Node(1)
    val nodeC = Node(2)
    val nodeD = Node(3)
    val nodeE = Node(4)
    val nodeF = Node(5)
    val nodeG = Node(6)
    val nodeH = Node(7)
    val nodeI = Node(8)
    val nodeJ = Node(9)
    val nodeK = Node(10)
    val nodeL = Node(11)
    val nodeM = Node(12)
    val nodeN = Node(13)
    val nodeO = Node(14)
    val nodeP = Node(15)
    val nodeQ = Node(16)
    val nodeR = Node(17)
    val nodeS = Node(18)

    nodeA.addChildren(nodeB, nodeC, nodeD, nodeE)
    nodeB.addChildren(nodeI, nodeJ, nodeG)
    nodeG.addChildren(nodeH)
    nodeK.addChildren(nodeD)
    nodeF.addChildren(nodeC, nodeL, nodeE, nodeM)
    nodeN.addChildren(nodeM, nodeO, nodeS)
    nodeS.addChildren(nodeQ, nodeR)
    nodeO.addChildren(nodeN, nodeP)

    print(bidirectionalSearch(nodeA, nodeS))
}