const fs = require('fs');
const jsc = require('jsverify');
eval(fs.readFileSync('code.js') + '');

// Test 1: Graph with no cycle
const testNoCycle =
    jsc.forall(jsc.constant(true), function () {
        const graph = {
            A: ['B'],
            B: ['C'],
            C: []
        };

        const expected = false;
        const result = hasCycle(graph);

        return result == expected;
    });

// Test 2: Graph with a cycle
const testHasCycle =
    jsc.forall(jsc.constant(true), function () {
        // A -> B -> C -> A
        const graph = {
            A: ['B'],
            B: ['C'],
            C: ['A']
        };

        const expected = true;
        const result = hasCycle(graph);

        return result == expected;
    });

// Test 3: Disconnected graph with a cycle in one part
const testCycleInComponent =
    jsc.forall(jsc.constant(true), function () {
        // Cycle: A -> B -> C -> A
        const graph = {
            A: ['B'],
            B: ['C'],
            C: ['A'],
            D: ['E'],
            E: []
        };

        const expected = true;
        const result = hasCycle(graph);

        return result == expected;
    });

// Test 4: Empty graph
const testEmptyGraph =
    jsc.forall(jsc.constant(true), function () {
        const graph = {};

        const expected = false;
        const result = hasCycle(graph);

        return result == expected;
    });

// Test 5: Single node pointing to itself
const testSelfLoop =
    jsc.forall(jsc.constant(true), function () {
        const graph = {
            A: ['A']
        };

        const expected = true;
        const result = hasCycle(graph);

        return result == expected;
    });

// Test 6: Multiple components, none with a cycle
const testNoCycleMultiComponent =
    jsc.forall(jsc.constant(true), function () {
        const graph = {
            A: ['B'],
            B: [],
            C: ['D'],
            D: []
        };

        const expected = false;
        const result = hasCycle(graph);

        return result == expected;
    });

jsc.assert(testNoCycle);
console.log("testNoCycle passed.");
jsc.assert(testHasCycle);
console.log("testHasCycle passed.");
jsc.assert(testCycleInComponent);
console.log("testCycleInComponent passed.");
jsc.assert(testEmptyGraph);
console.log("testEmptyGraph passed.");
jsc.assert(testSelfLoop);
console.log("testSelfLoop passed.");
jsc.assert(testNoCycleMultiComponent);
console.log("testNoCycleMultiComponent passed.");
