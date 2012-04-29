/**
 * Function that concantenates all the modules that are used by IndexedDB
 * @param {Object} callback
 */
function buildIndexedDB(callback){
	window.modules = {};
	var moduleList = ["util", "IDBRequest", "IDBObjectStore", "IDBTransaction", "IDBDatabase", "IndexedDB"];
	
	(function addScript(i){
		var x = document.createElement("script");
		x.src = "src/" + moduleList[i] + ".js";
		x.type = "text/javascript"
		x.onload = function(){
			if (i < moduleList.length - 1) addScript(i + 1);
			else callback();
		}
		document.head.appendChild(x);
	}(0));
}
