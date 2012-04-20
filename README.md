# Argumentr

command line argument parser for node.js with bells and whistles

### Usage sample


    var argumentr = require("./argumentr")
    function showarg (arg) { console.log(arg) }
    var options = {}
    
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
    // extra commands are now in argumentr.extra
    // set options are now in the options hash

Now you can run your sample with:

    ./sample -a --long-arg --optional this_is_optional foo bar baz

 
For free:

    ./sample --help:
    Usage: sample [parameter] command 
    -h, --help                   Show this help
    -a                           short arg
        --long-arg               sample for long argument
        --optional [=optarg]     optional argument
        --mandatory=arg          mandatory argument
        --switch                 try --no-switch
    -v, --version                show version information
