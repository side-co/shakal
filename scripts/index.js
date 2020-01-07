const path = require('path')

let workdirs

if(process.argv[2]){
	process.env.dirs = process.argv[2]
	try {
    	workdirs = JSON.parse(process.argv[2]);
	} catch (e) {
		workdirs = path.resolve(process.argv[2])
		process.env.dirs = JSON.stringify([process.argv[2]])
	}
}

if (!workdirs && process.env.dirs) {
	try {
	    workdirs = JSON.parse(process.env.dirs)
	} catch (e) {
	    workdirs = ['dist/']
	}
}

require('./gzip')
require('./brotli')
