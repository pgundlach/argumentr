#!/usr/bin/env node

var argumentr = require("./argumentr")

function showarg (arg) { console.log(arg) }
var options = {}

// try --help, -v, --version, --switch, --no-switch, -a, --optional, --optional somearg, --mandatory, --mandatory arg

// --help gives:
// Usage: sample.js [parameter] command 
// -h, --help                   Show this help
// -a                           short arg
//     --long-arg               sample for long argument
//     --optional [=optarg]     optional argument
//     --mandatory=arg          mandatory argument
//     --switch                 try --no-switch
// -v, --version                show version information


// argumentr.banner = "Usage: ..."
// for --help output
// argumentr.start = 30
// argumentr.stop  = 79
argumentr.on("-a","short arg",showarg) // function
argumentr.on("--long-arg","sample for long argument",options) // hash object
argumentr.on("--optional [optarg]","optional argument",options)
argumentr.on("--mandatory arg","mandatory argument",options)
argumentr.on("--switch","try --no-switch",options)
argumentr.on("-v","--version","show version information",function() {console.log("version 1.0"); process.exit(0)})

var ret = argumentr.parse()
if (! ret.ok) {
	console.log(ret.msg)
	process.exit(-1)
}

console.log("options hash:")
console.log(options)

for (var i = 0; i < argumentr.extra.length; i++) {
	console.log(argumentr.extra[i])
};


