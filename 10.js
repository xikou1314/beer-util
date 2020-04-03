
// 散列

function HashTable() {
    
    this.table = new Array(137);
    this.simpleHash = simpleHash;
    this.betterHash = betterHash;
    this.showDistro = showDistro;
    this.put = put;
    this.get = get;
    this.buildChains = buildChains;

    this.values = [];

	function simpleHash(data) {
		var total = 0;
		for(var i = 0; i < data.length; i++) {
			total += data.charCodeAt(i);
		}
		console.log("========");
		console.log("Hash Value: " +data+ " -> " +total);
		return total % this.table.length;
	}
	function put (key,data) {
		var pos = this.betterHash(key);
		if(this.table[pos] == undefined) {
            this.table[pos] = key;
            this.values[pos] = data;
		} else {
            while (this.table[pos]!=undefined) {
                pos++;
            }
            this.table[pos] = key;
            this.values[pos] = data;
        }

    }
    
	function get(key) {
        var hash = -1;
        hash = this.betterHash(key);
        if(hash > -1) {
            for(var i = hash; this.table[hash] != undefined; i++) {
                if(this.table[hash] == key) {
                    return this.values[hash];
                }
            }
        }
        return undefined;
	}
	function showDistro(){
		for(var i = 0; i < this.table.length; i++) {
			if(this.table[i][0] != undefined) {
				console.log("=======")
				console.log(i + ":" +this.table[i]);
			}
		}
    }
    function buildChains() {
		for(var i = 0; i < this.table.length; i++) {
			this.table[i] = new Array();
		}
	}
    function betterHash(string) {
        const H = 37;
        var total = 0;
        for (var i = 0; i < string.length; ++i) {
            total += H * total + string.charCodeAt(i);
        }
        total = total % this.table.length;
        if (total < 0) {
            total += this.table.length - 1;
        }
        return parseInt(total);
    }

}

var someNames = ["David","Jennifer","Donnie","Raymond","Cynthia","Mike","Clayton","Danny","Jonathan"];
var hTable = new HashTable();
hTable.buildChains();
for(var i = 0; i < someNames.length; ++i) {
hTable.put(someNames[i],someNames[i]);
}
hTable.showDistro();
console.log(hTable.get("Jennifer"));
