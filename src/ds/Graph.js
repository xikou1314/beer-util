// 拓扑排序
function Graph(v) {
    this.vertices = v;
    this.vertexList = [];
    this.edges = 0;
    this.adj = [];
    for (var i=0; i<this.vertices; ++i) {
        this.adj[i] = [];
    }
    this.addEdge = addEdge;
    this.showGraph = showGraph;
    this.dfs = dfs;
    this.marked = [];
    for (var i=0; i<this.vertices; ++i) {
        this.marked[i] = false;
    }
    this.bfs = bfs;
    this.edgeTo = [];
    this.hasPathTo = hasPathTo;
    this.topSortHelper = topSortHelper;
    this.topSort = topSort;
    this.initMarked = initMarked;
    this.pathTo = pathTo;

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

    function addEdge(v,w) {
        this.adj[v].push[w];
        this.adj[w].push[v];
        this.edges++;
    }
    // 用于显示符合名字而非数字的新函数
    function showGraph() {
        var visited = [];
        for (var i=0; i < this.vertices; ++i) {
            console.log(this.vertexList[i] + "->");
            visited.push(this.vertexList[i]);
            for (var j=0; j < this.vertices; ++j) {
                if (this.adj[i][j] != undefined) {
                    if (visited.indexOf(this.vertices[j]) < 0) {
                        console.log(this.vertices[j] + ' ');
                    }
                }
            }
            visited.pop();
        }
    }

    // 深度优先搜索
    function dfs(v) {
        this.marked[v] = true;
        // 用于输出的if语句在这里不是必须的
        if(this.adj[v] != undefined) {
            console.log("Visited vertex:" + v);
            for(var w of this.adj[v]) {
                if (!this.marked[w]) {
                    this.dfs(w);
                }
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
        this.initMarked();
        var queue = []; // 队列
        this.marked[s] = true;
        queue.push(s);  // 添加到队尾
        while (queue.length > 0) {
            var v = queue.shift(); // 从队首移除;
            if (v != undefined) {
                console.log("Visited vertex:" + v);
            }
            for (var w of this.adj[v]) {
                if (!this.marked[w]) {
                    this.edgeTo[w] = v;
                    this.marked[w] = true;
                    queue.push(w);
                }
            }
        }
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
}

module.exports = {
    Graph
};

