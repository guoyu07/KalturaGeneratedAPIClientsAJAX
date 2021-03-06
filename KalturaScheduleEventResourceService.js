
/**
 *Class definition for the Kaltura service: scheduleEventResource.
 **/
var KalturaScheduleEventResourceService = {
	/**
	 * Allows you to add a new KalturaScheduleEventResource object.
	 * @param	scheduleEventResource	KalturaScheduleEventResource		 (optional)
	 **/
	add: function(scheduleEventResource){
		var kparams = new Object();
		kparams.scheduleEventResource = scheduleEventResource;
		return new KalturaRequestBuilder("schedule_scheduleeventresource", "add", kparams);
	},
	
	/**
	 * Mark the KalturaScheduleEventResource object as deleted.
	 * @param	scheduleEventId	int		 (optional)
	 * @param	scheduleResourceId	int		 (optional)
	 **/
	deleteAction: function(scheduleEventId, scheduleResourceId){
		var kparams = new Object();
		kparams.scheduleEventId = scheduleEventId;
		kparams.scheduleResourceId = scheduleResourceId;
		return new KalturaRequestBuilder("schedule_scheduleeventresource", "delete", kparams);
	},
	
	/**
	 * Retrieve a KalturaScheduleEventResource object by ID.
	 * @param	scheduleEventId	int		 (optional)
	 * @param	scheduleResourceId	int		 (optional)
	 **/
	get: function(scheduleEventId, scheduleResourceId){
		var kparams = new Object();
		kparams.scheduleEventId = scheduleEventId;
		kparams.scheduleResourceId = scheduleResourceId;
		return new KalturaRequestBuilder("schedule_scheduleeventresource", "get", kparams);
	},
	
	/**
	 * List KalturaScheduleEventResource objects.
	 * @param	filter	KalturaScheduleEventResourceFilter		 (optional, default: null)
	 * @param	pager	KalturaFilterPager		 (optional, default: null)
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
		return new KalturaRequestBuilder("schedule_scheduleeventresource", "list", kparams);
	},
	
	/**
	 * Update an existing KalturaScheduleEventResource object.
	 * @param	scheduleEventId	int		 (optional)
	 * @param	scheduleResourceId	int		 (optional)
	 * @param	scheduleEventResource	KalturaScheduleEventResource		 (optional)
	 **/
	update: function(scheduleEventId, scheduleResourceId, scheduleEventResource){
		var kparams = new Object();
		kparams.scheduleEventId = scheduleEventId;
		kparams.scheduleResourceId = scheduleResourceId;
		kparams.scheduleEventResource = scheduleEventResource;
		return new KalturaRequestBuilder("schedule_scheduleeventresource", "update", kparams);
	}
}
