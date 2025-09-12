Interceptor.attach(ObjC.classes.NSTaggedPointerString['- isEqualToString:'].implementation, {
  onEnter: function (args) {
    var str = new ObjC.Object(ptr(args[2])).toString()
    console.log('[+] Hooked NSTaggedPointerString[- isEqualToString:] ->' , str);
  },
  onLeave: function (retval) {
    console.log('[+] Returned NSTaggedPointerString[- isEqualToString:] ->' , str);
  },
});


Interceptor.attach(ObjC.classes.NSDictionary['- objectForKey:'].implementation, {
  onEnter: function (args) {
    var str1 = new ObjC.Object(ptr(args[1])).toString();
    var str2 = new ObjC.Object(ptr(args[2])).toString();
    console.log('[+] Hooked -[NSDictionary objectForKey:] ->' , str1 + " " + str2);
  }
});
