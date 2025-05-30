# Detecting Cycles in Graphs

Kruskal's Algorithm adds edges to the minimum spanning tree, unless they would
add a cycle. In the lectures, we did not talk about how to do this -- you're
going to implement a function to detect cycles in a graph. Start with the
template I provided in `code.js`. You can use any data structures (i.e. any
graph representation) you like. The function should return `true` or `false`,
depending on whether the given graph contains a cycle or not.

I have not provided any test code, but you can base yours on test code from
other exercises. Your tests must check the correctness of the result of running
the function and run automatically when you commit through a GitHub action.

## Runtime Analysis

What is the worst-case big $\Theta$ complexity of your implementation? Add your
answer, including your reasoning, to this markdown file.

<hr>

First for loop: `for (let node in graph)`

This loop iterates over all nodes in the graph to initialize visited nodes and the current path nodes dicts.

$O(V)$

Second for loop: `for (let node in graph)`

This loop iterates over all nodes in the graph to start a depth first search using a stack.

$O(V)$

Inner While Loop: `while stac.length > 0`

This while loop contains the current path's history of nodes to be looked through. In the worst case each node may be pushed and popped from the stack once

$O(V)$

Inner If Condition: `if (index < graph[current].length)`

For each node, we exlore all of its neighbors. Each edge in the graph is followed exactly once during the traversal

$O(E)$

General:

Each node is visited once, and each edge is followed once. This results in a linear traversal over both verticies AND edges, which gives a worst case complexity of:

$\Theta(V + E)$

- Used https://www.geeksforgeeks.org/detect-cycle-in-a-graph/ to reference how to solve finding cycle problem. All code written is mine, just used as reference.

- Used my previous dijkstra's algorithm code for graph logic reference and how to write tests.

"I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice."
