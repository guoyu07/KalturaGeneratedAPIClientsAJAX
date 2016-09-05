
/**
 *Class definition for the Kaltura service: partner.
 **/
var KalturaPartnerService = {
	/**
	 * Create a new Partner object.
	 * @param	partner	KalturaPartner		 (optional)
	 * @param	cmsPassword	string		 (optional)
	 * @param	templatePartnerId	int		 (optional, default: null)
	 * @param	silent	bool		 (optional, default: false)
	 * @return	KalturaPartner.
	 **/
	register: function(partner, cmsPassword, templatePartnerId, silent){
		if(!cmsPassword)
			cmsPassword = "";
		if(!templatePartnerId)
			templatePartnerId = null;
		if(!silent)
			silent = false;
		var kparams = new Object();
		kparams.partner = partner;
		kparams.cmsPassword = cmsPassword;
		kparams.templatePartnerId = templatePartnerId;
		kparams.silent = silent;
		return new KalturaRequestBuilder("partner", "register", kparams);
	},
	
	/**
	 * Update details and settings of an existing partner.
	 * @param	partner	KalturaPartner		 (optional)
	 * @param	allowEmpty	bool		 (optional, default: false)
	 * @return	KalturaPartner.
	 **/
	update: function(partner, allowEmpty){
		if(!allowEmpty)
			allowEmpty = false;
		var kparams = new Object();
		kparams.partner = partner;
		kparams.allowEmpty = allowEmpty;
		return new KalturaRequestBuilder("partner", "update", kparams);
	},
	
	/**
	 * Retrieve partner object by Id.
	 * @param	id	int		 (optional, default: null)
	 * @return	KalturaPartner.
	 **/
	get: function(id){
		if(!id)
			id = null;
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("partner", "get", kparams);
	},
	
	/**
	 * Retrieve partner secret and admin secret.
	 * @param	partnerId	int		 (optional)
	 * @param	adminEmail	string		 (optional)
	 * @param	cmsPassword	string		 (optional)
	 * @return	KalturaPartner.
	 **/
	getSecrets: function(partnerId, adminEmail, cmsPassword){
		var kparams = new Object();
		kparams.partnerId = partnerId;
		kparams.adminEmail = adminEmail;
		kparams.cmsPassword = cmsPassword;
		return new KalturaRequestBuilder("partner", "getSecrets", kparams);
	},
	
	/**
	 * Retrieve all info attributed to the partner
 *		 This action expects no parameters. It returns information for the current KS partnerId..
	 * @return	KalturaPartner.
	 **/
	getInfo: function(){
		var kparams = new Object();
		return new KalturaRequestBuilder("partner", "getInfo", kparams);
	},
	
	/**
	 * Get usage statistics for a partner
 *		 Calculation is done according to partner's package
 *		 Additional data returned is a graph points of streaming usage in a timeframe
 *		 The resolution can be "days" or "months".
	 * @param	year	int		 (optional)
	 * @param	month	int		 (optional, default: 1)
	 * @param	resolution	string		 (optional, enum: KalturaReportInterval, default: null)
	 * @return	KalturaPartnerUsage.
	 **/
	getUsage: function(year, month, resolution){
		if(!year)
			year = "";
		if(!month)
			month = 1;
		if(!resolution)
			resolution = null;
		var kparams = new Object();
		kparams.year = year;
		kparams.month = month;
		kparams.resolution = resolution;
		return new KalturaRequestBuilder("partner", "getUsage", kparams);
	},
	
	/**
	 * Get usage statistics for a partner
 *		 Calculation is done according to partner's package.
	 * @return	KalturaPartnerStatistics.
	 **/
	getStatistics: function(){
		var kparams = new Object();
		return new KalturaRequestBuilder("partner", "getStatistics", kparams);
	},
	
	/**
	 * Retrieve a list of partner objects which the current user is allowed to access..
	 * @param	partnerFilter	KalturaPartnerFilter		 (optional, default: null)
	 * @param	pager	KalturaFilterPager		 (optional, default: null)
	 * @return	KalturaPartnerListResponse.
	 **/
	listPartnersForUser: function(partnerFilter, pager){
		if(!partnerFilter)
			partnerFilter = null;
		if(!pager)
			pager = null;
		var kparams = new Object();
		if (partnerFilter != null)
			kparams.partnerFilter = partnerFilter;
		if (pager != null)
			kparams.pager = pager;
		return new KalturaRequestBuilder("partner", "listPartnersForUser", kparams);
	},
	
	/**
	 * List partners by filter with paging support
 *		 Current implementation will only list the sub partners of the partner initiating the api call (using the current KS).
 *		 This action is only partially implemented to support listing sub partners of a VAR partner..
	 * @param	filter	KalturaPartnerFilter		 (optional, default: null)
	 * @param	pager	KalturaFilterPager		 (optional, default: null)
	 * @return	KalturaPartnerListResponse.
	 **/
	listAction: function(filter, pager){
		if(!filter)
			filter = null;
		if(!pager)
			pager = null;
		var kparams = new Object();
		if (filter != null)
			kparams.filter = filter;
		if (pager != null)
			kparams.pager = pager;
		return new KalturaRequestBuilder("partner", "list", kparams);
	},
	
	/**
	 * List partner's current processes' statuses.
	 * @return	KalturaFeatureStatusListResponse.
	 **/
	listFeatureStatus: function(){
		var kparams = new Object();
		return new KalturaRequestBuilder("partner", "listFeatureStatus", kparams);
	},
	
	/**
	 * Count partner's existing sub-publishers (count includes the partner itself)..
	 * @param	filter	KalturaPartnerFilter		 (optional, default: null)
	 * @return	int.
	 **/
	count: function(filter){
		if(!filter)
			filter = null;
		var kparams = new Object();
		if (filter != null)
			kparams.filter = filter;
		return new KalturaRequestBuilder("partner", "count", kparams);
	}
}
