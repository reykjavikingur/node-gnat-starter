var gnat = require('gnat');

var name = 'gnat-starter';
var command = 'gnat-starter';
var url = 'https://github.com/reykjavikingur/node-gnat-starter.git';

var args = process.argv.slice(2);
var targetPath = args[0];
if (!targetPath) {
	console.log('Usage: ' + command + ' target-path');
	process.exit(1);
}

gnat.clone(url, targetPath)
	.then(function () {
		console.log(name, 'successfully cloned');
	}, function (err) {
		console.error(name, 'failed to clone:', err.message);
		process.exit(1);
	})
;