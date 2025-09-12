// Can be used for Obj-C and C Functions

var decryptData = eval('ObjC.classes.RSA["+ decryptData:publicKey:"]’);

Interceptor.replace(decryptData.implementation, new NativeCallback(function(self1,self2,id1,id2) {
    console.warn('[decryptData:publicKey]: Replaced! DecryptedLicense for Device [' + deviceSerial + ']');
    console.log(ObjC.Object(id2).toString());

    var strObj = nsstr(deviceSerial+ "1111111111111111" + "23000223000000");
    var nsDataObj = nsstr2nsdata(strObj);

    return ptr(nsDataObj);
}, 'pointer', ['pointer','pointer','pointer','pointer']));
