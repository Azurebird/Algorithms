package TreesAndGraphs

import java.lang.StringBuilder

class TreeNode(var value: Any? = null) {
    var right: TreeNode? = null
    var left: TreeNode? = null

    fun fromArray(array: List<Any>) {
        fromArray(array, 0, array.size - 1)
    }

    private fun fromArray(array: List<Any>, bot: Int, top: Int) {

        if (top - bot == 0) {
            this.value = array[top]
        } else if (top - bot == 1) {
            this.value = array[top]
            this.left = TreeNode(array[bot])
        } else {
            val halfPosition = ((top + bot) / 2)
            this.value = array[halfPosition]

            this.left = TreeNode()
            this.left?.fromArray(array, 0, halfPosition - 1)

            this.right = TreeNode()
            this.right?.fromArray(array, halfPosition + 1, top)
        }
    }

    override fun toString(): String {
        return this.value.toString()
    }

    fun print(): String {
        print(this.left)
        print(this.value)
        print(this.right)

        return super.toString()
    }
}