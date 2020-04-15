// 拓扑排序
function Graph(v) {
    this.vertices = v;
    this.vertexList = [];
    this.edges = 0;
    this.adj = [];
    for (var i=0; i<this.vertices; ++i) {
        this.adj[i] = [];
    }
    this.marked = [];
    this.addEdge = addEdge;
    this.showGraph = showGraph;
    this.dfs = dfs;
    this.bfs = bfs;
    this.edgeTo = [];
    this.hasPathTo = hasPathTo;
    this.topSortHelper = topSortHelper;
    this.topSort = topSort;
    this.initMarked = initMarked;
    this.pathTo = pathTo;

    function addEdge(v,w) {
        this.adj[v].push(w);
        this.adj[w].push(v);
        this.edges++;
    }

    function showGraph() {
        var result = [];
        for (var i=0; i < this.vertices; ++i) {
            for (var j=0; j < this.adj[i].length; ++j) {
                if(result.indexOf(this.vertexList[this.adj[i][j]]) < 0) {
                    result.push(this.vertexList[this.adj[i][j]]);
                }               
            }
        }
        return result;
    }

    // 深度优先搜索
    function dfs(v) {
        this.initMarked();
        var result = [];
        dfsFn(v,this.adj,this.marked,result,this.vertexList);
        return result;
    }

    function dfsFn(v,data,marked,result,source) {
        marked[v] = true;
        result.push(source[v]);
        for(var w of data[v]) {
            if (!marked[w]) {
                dfsFn(w,data,marked,result,source);
            }
        }
    }

    function initMarked() {
        this.marked = [];
        for (var i=0; i<this.vertices;++i) {
            this.marked[i] = false;
        }
    }

    // 广度优先搜索
    function bfs(s) {
        var result = [];
        this.initMarked();
        var queue = []; // 队列
        this.marked[s] = true;
        queue.push(s);  // 添加到队尾
        while (queue.length > 0) {
            var v = queue.shift(); // 从队首移除;
            if (v != undefined) {
                result.push(this.vertexList[v]);
            }
            for (var w of this.adj[v]) {
                if (w && !this.marked[w]) {
                    // this.edgeTo[w] = v;
                    this.marked[w] = true;
                    queue.push(w);
                }
            }
        }
        return result;
    }

    function pathTo(v) {
        var source = 0;
        this.bfs(source);
        if (!this.hasPathTo(v)) {
            return undefined;
        }
        var path = [];
        for (var i=v; i != source; i = this.edgeTo[i]) {
            path.push(i);
        }
        path.push(source);
        return path;
    }

    function hasPathTo(v) {
        return this.marked[v];
    }

    function topSort() {
        var stack = [];
        var visited = [];
        for (var i = 0; i < this.vertices; i++) {
            visited[i] = false;
        }
        for (var i = 0; i < this.vertices; i++) {
            if (visited[i] == false) {
                this.topSortHelper(i, visited, stack);
            }
        }

        for (var i = 0; i < stack.length; i++) {
            if (stack[i] != undefined && visited[i] != false) {
                console.log(this.vertexList[stack[i]]);
            }
        }

    }

    function topSortHelper(v, visited, stack) {
        visited[v] = true;
        for (var w of this.adj[v]) {
            if (!visited[w]) {
                this.topSortHelper(visited[w], visited, stack);
            }
        }
        stack.push(v);
    }
}

var graph = new Graph(5);
graph.addEdge(0,1);
graph.addEdge(1,2);
graph.addEdge(2,0);
graph.vertexList = ["num1", "num2", "num3",
"num4", "num5"];

console.log(graph.dfs(0));
console.log(graph.bfs(0));

// module.exports = {
//     Graph
// };

