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

    test('dfs', () => {
        var graph = new Graph(5);
        graph.addEdge(0,1);
        graph.addEdge(1,2);
        graph.addEdge(2,0);
        graph.vertexList = ["num1", "num2", "num3","num4", "num5"];
        expect(graph.dfs(0)).toEqual(["num1","num2","num3"]);
    });

    test('bfs', () => {
        var graph = new Graph(5);
        graph.addEdge(0,1);
        graph.addEdge(1,2);
        graph.addEdge(2,0);
        graph.vertexList = ["num1", "num2", "num3","num4", "num5"];
        expect(graph.bfs(0)).toEqual(["num1","num2","num3"]);
    });

    test('pathTo', () => {
        var graph = new Graph(5);
        graph.addEdge(0,1);
        graph.addEdge(1,2);
        graph.addEdge(2,0);
        graph.vertexList = ["num1", "num2", "num3","num4", "num5"];
        expect(graph.pathTo(0,2)).toEqual(["num3","num1"]);
    });

    test('topSort', () => {
        var graph = new Graph(5);
        graph.addEdge(0,1);
        graph.addEdge(1,2);
        graph.addEdge(2,0);
        graph.vertexList = ["num1", "num2", "num3","num4", "num5"];
        expect(graph.topSort()).toEqual(["num3","num2","num1"]);
    });
});