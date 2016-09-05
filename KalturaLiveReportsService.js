
/**
 *Class definition for the Kaltura service: liveReports.
 **/
var KalturaLiveReportsService = {
	/**
	 * .
	 * @param	reportType	string		 (optional, enum: KalturaLiveReportType)
	 * @param	filter	KalturaLiveReportInputFilter		 (optional, default: null)
	 * @param	pager	KalturaFilterPager		 (optional, default: null)
	 * @return	array.
	 **/
	getEvents: function(reportType, filter, pager){
		if(!filter)
			filter = null;
		if(!pager)
			pager = null;
		var kparams = new Object();
		kparams.reportType = reportType;
		if (filter != null)
			kparams.filter = filter;
		if (pager != null)
			kparams.pager = pager;
		return new KalturaRequestBuilder("livereports", "getEvents", kparams);
	},
	
	/**
	 * .
	 * @param	reportType	string		 (optional, enum: KalturaLiveReportType)
	 * @param	filter	KalturaLiveReportInputFilter		 (optional, default: null)
	 * @param	pager	KalturaFilterPager		 (optional, default: null)
	 * @return	KalturaLiveStatsListResponse.
	 **/
	getReport: function(reportType, filter, pager){
		if(!filter)
			filter = null;
		if(!pager)
			pager = null;
		var kparams = new Object();
		kparams.reportType = reportType;
		if (filter != null)
			kparams.filter = filter;
		if (pager != null)
			kparams.pager = pager;
		return new KalturaRequestBuilder("livereports", "getReport", kparams);
	},
	
	/**
	 * .
	 * @param	reportType	int		 (optional, enum: KalturaLiveReportExportType)
	 * @param	params	KalturaLiveReportExportParams		 (optional)
	 * @return	KalturaLiveReportExportResponse.
	 **/
	exportToCsv: function(reportType, params){
		var kparams = new Object();
		kparams.reportType = reportType;
		kparams.params = params;
		return new KalturaRequestBuilder("livereports", "exportToCsv", kparams);
	},
	
	/**
	 * Will serve a requested report.
	 * @param	id	string		- the requested id (optional)
	 * @return	string.
	 **/
	serveReport: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("livereports", "serveReport", kparams);
	}
}
