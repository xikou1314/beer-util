// 字典
function Dictionary () {
    this.add = add;
    this.datastore = new Array();
    this.find = find;
    this.remove = remove;
    this.showAll = showAll;
    this.count = count;
    this.clear = clear;

    function add(key, value) {
        this.datastore[key] = value;
    }

    function find(key) {
        return this.datastore[key];
    }

    function remove(key) {
        delete this.datastore[key];
    }

    function showAll() {
        var result = []
        for(var key of Object.keys(this.datastore).sort()) {
            result.push(this.datastore[key]);
        }
        return result;
    }

    function count() {
        var n = 0;
        for( var key in Object.keys(this.datastore) ) {
            ++n;
        }
        return n;
    }

    function clear() {
        for (var key of Object.keys(this.datastore)) {
            delete this.datastore[key];
        }
    }

}

module.exports = {
    Dictionary
};


