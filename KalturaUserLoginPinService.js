
/**
 *Class definition for the Kaltura service: userLoginPin.
 **/
var KalturaUserLoginPinService = {
	/**
	 * Generate a time and usage expiry login-PIN that can allow a single login per PIN. If an active login-PIN already exists. Calling this API again for same user will add another login-PIN.
	 * @param	secret	string		Additional security parameter for optional enhanced security (optional, default: null)
	 **/
	add: function(secret){
		if(!secret)
			secret = null;
		var kparams = new Object();
		kparams.secret = secret;
		return new KalturaRequestBuilder("userloginpin", "add", kparams);
	},
	
	/**
	 * Immediately expire all active login-PINs for a user.
	 * @param	pinCode	string		Login pin code to expire (optional)
	 **/
	deleteAction: function(pinCode){
		var kparams = new Object();
		kparams.pinCode = pinCode;
		return new KalturaRequestBuilder("userloginpin", "delete", kparams);
	},
	
	/**
	 * Immediately expire all active login-PINs for a user.
	 **/
	deleteAll: function(){
		var kparams = new Object();
		return new KalturaRequestBuilder("userloginpin", "deleteAll", kparams);
	},
	
	/**
	 * Set a time and usage expiry login-PIN that can allow a single login per PIN. If an active login-PIN already exists. Calling this API again for same user will add another login-PIN.
	 * @param	pinCode	string		Device Identifier (optional)
	 * @param	secret	string		Additional security parameter to validate the login (optional, default: null)
	 **/
	update: function(pinCode, secret){
		if(!secret)
			secret = null;
		var kparams = new Object();
		kparams.pinCode = pinCode;
		kparams.secret = secret;
		return new KalturaRequestBuilder("userloginpin", "update", kparams);
	}
}
