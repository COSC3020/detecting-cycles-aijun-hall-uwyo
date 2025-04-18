function hasCycle(graph) {
    // Keep track of visited nodes
    let visited_nodes = {};

    // Keep track of nodes in the current path
    let current_path_nodes = {};

    // Initialize values for all nodes
    for (let node in graph) {
        visited_nodes[node] = false;
        current_path_nodes[node] = false;
    }

    for (let node in graph) {
        if (visited_nodes[node] == false) {
            // Mark this node as visited
            let stack = [
                {
                    node: node,
                    index: 0
                }
            ];
            visited_nodes[node] = true;
            current_path_nodes[node] = true;

            while (stack.length > 0) {
                let top = stack[stack.length - 1];
                let current = top.node;
                let index = top.index;

                // If there are still neighbors to explore
                if (index < graph[current].length) {
                    // Move to the next neighbor for the next iteration
                    let neighbor = graph[current][index];
                    top.index += 1;

                    // If the neighbor has not been visited, set it to be checked
                    if (visited_nodes[neighbor] == false) {
                        visited_nodes[neighbor] = true;
                        current_path_nodes[neighbor] = true;

                        stack.push({ node: neighbor, index: 0 });
                    }
                    // If the neighbor is in the current stack, then cycle is found
                    else if (current_path_nodes[neighbor]) {
                        return true;
                    }
                } else {
                    // Done exploring all neighbors for the current node
                    // Remove from stack
                    current_path_nodes[current] = false;
                    stack.pop();
                }
            }
        }
    }

    // Didn't find a cycle
    return false;
}
