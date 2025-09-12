// Mach-o

const objC_fun = ObjC.classes.JailbreakDetection['+ isJailbroken'].implementation
console.log ("Address Objective-C Syntax: " + objC_fun)


const app_base = Module.findBaseAddress("DVIA-v2");
const add_addr_fun = app_base.add('0x12127c')
console.log ("Address by Adding to Base: " + add_addr_fun)


// .dylib

const app_base = Module.findBaseAddress(“target.dylib");

Interceptor.attach(app_base.add('0x12127c'), {
    onEnter: function (args) {
      /*** Do your stuff here ***/
    },
    onLeave: function (retval) {
      /*** Do your stuff here ***/
    },
});

// .so

const app_base = Module.findBaseAddress(“target.so");

Interceptor.attach(app_base.add('0x12127c'), {
    onEnter: function (args) {
      /*** Do your stuff here ***/
    },
    onLeave: function (retval) {
      /*** Do your stuff here ***/
    },
});


