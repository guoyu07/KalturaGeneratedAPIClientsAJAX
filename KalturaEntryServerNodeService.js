
/**
 *Class definition for the Kaltura service: entryServerNode.
 **/
var KalturaEntryServerNodeService = {
	/**
	 * .
	 * @param	id	int		 (optional)
	 * @param	entryServerNode	KalturaEntryServerNode		 (optional)
	 * @return	KalturaEntryServerNode.
	 **/
	update: function(id, entryServerNode){
		var kparams = new Object();
		kparams.id = id;
		kparams.entryServerNode = entryServerNode;
		return new KalturaRequestBuilder("entryservernode", "update", kparams);
	},
	
	/**
	 * .
	 * @param	filter	KalturaEntryServerNodeFilter		 (optional, default: null)
	 * @param	pager	KalturaFilterPager		 (optional, default: null)
	 * @return	KalturaEntryServerNodeListResponse.
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
		return new KalturaRequestBuilder("entryservernode", "list", kparams);
	},
	
	/**
	 * .
	 * @param	id	string		 (optional)
	 * @return	KalturaEntryServerNode.
	 **/
	get: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("entryservernode", "get", kparams);
	},
	
	/**
	 * Validates server node still registered on entry.
	 * @param	id	int		entry server node id (optional)
	 * @return	.
	 **/
	validateRegisteredEntryServerNode: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("entryservernode", "validateRegisteredEntryServerNode", kparams);
	}
}
