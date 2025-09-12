// Objective-C

var WebServerManager =  ObjC.chooseSync(ObjC.classes.WebServerManager)[0];

function startWeb(){
    WebServerManager['- startWebServer']();
}

function stopWeb(){
    WebServerManager['- stopWebServer']();
}

startWeb();
stopWeb();


// Author: https://awakened1712.github.io/hacking/hacking-frida/
// C: Invoke a libc function

var openPtr = Module.findExportByName("libc.so", "open"); 
var open = new NativeFunction(openPtr, 'int', ['pointer', 'int']); 
var fd = open(Memory.allocUtf8String('/tmp/test.txt'), 0); 


