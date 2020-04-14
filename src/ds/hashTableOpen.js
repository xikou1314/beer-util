// 散列 开链法处理碰撞

function HashTableOpen() {

	this.table = new Array(137);
	this.simpleHash = simpleHash;
	this.betterHash = betterHash;
	this.showDistro = showDistro;
	this.put = put;
	this.get = get;
	this.buildChains = buildChains;

	function simpleHash(data) {
		var total = 0;
		for (var i = 0; i < data.length; i++) {
			total += data.charCodeAt(i);
		}
		return total % this.table.length;
	}

	function put(key, data) {
		var pos = this.simpleHash(key);
		var index = 0;
		if (this.table[pos][index] == undefined) {
			this.table[pos][index] = data;
		} else {
			while (this.table[pos][index] != undefined) {
				index++;
			}
			this.table[pos][index] = data;
		}

	}

	function get(key) {
		var index = 0;
		var pos = this.simpleHash(key);
		if (this.table[pos][index] == key) {
			return this.table[pos][index];
		} else {
			while (this.table[pos][index] != undefined && this.table[pos][index] != key) {
				index++;
			}
			if (this.table[pos][index] == undefined) {
				return undefined;
			} else {
				return this.table[pos][index];
			}

		}
	}

	function showDistro() {
		for (var i = 0; i < this.table.length; i++) {
			if (this.table[i][0] != undefined) {
				console.log("=======")
				console.log(i + ":" + this.table[i]);
			}
		}
	}

	function buildChains() {
		for (var i = 0; i < this.table.length; i++) {
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

module.exports = {
	HashTableOpen
};