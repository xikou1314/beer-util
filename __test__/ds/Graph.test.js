const { Graph } = require('../../src/ds/Graph.js');

describe('Graph', () => {

    test('addEdge', () => {
        var graph = new Graph(5);
        graph.addEdge(0,1);
        expect(graph.edges).toEqual(1);
    });

    test('showGraph', () => {
        var graph = new Graph(5);
        graph.addEdge(0,1);
        graph.vertexList = ["num1", "num2", "num3",
"num4", "num5"];
        expect(graph.showGraph()).toEqual(["num2","num1"]);
    });

});