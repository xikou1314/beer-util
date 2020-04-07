// 图
function Vertex(label) {
    this.label = label;
}

function Graph(v) {
    this.vertices = v;
    this.edges = 0;
    this.adj = [];
    this.edgeTo = [];
    for (var i=0; i<this.vertices; ++i) {
        this.adj[i] = [];
    }
    this.marked = [];
    for (var i=0; i<this.vertices;++i) {
        this.marked[i] = false;
    }
    
    this.addEdge = addEdge;
    this.showGraph = showGraph;

    this.dfs = dfs;
    this.bfs = bfs;
    this.initMarked = initMarked;
    this.pathTo = pathTo;
    this.hasPathTo = hasPathTo;

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

    function addEdge(v,w) {
        this.adj[v].push(w);
        this.adj[w].push(v);
        this.edges ++;
    }

    function showGraph() {
        for (var i=0; i < this.vertices; ++i) {
            console.log(i + "->");
            for (var j=0; j < this.vertices; ++j) {
                if (this.adj[i][j] != undefined) {
                    console.log(this.adj[i][j] + '');
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

}
