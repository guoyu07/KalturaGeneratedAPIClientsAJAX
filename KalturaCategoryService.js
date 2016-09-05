
/**
 *Class definition for the Kaltura service: category.
 **/
var KalturaCategoryService = {
	/**
	 * Add new Category.
	 * @param	category	KalturaCategory		 (optional)
	 * @return	KalturaCategory.
	 **/
	add: function(category){
		var kparams = new Object();
		kparams.category = category;
		return new KalturaRequestBuilder("category", "add", kparams);
	},
	
	/**
	 * Get Category by id.
	 * @param	id	int		 (optional)
	 * @return	KalturaCategory.
	 **/
	get: function(id){
		var kparams = new Object();
		kparams.id = id;
		return new KalturaRequestBuilder("category", "get", kparams);
	},
	
	/**
	 * Update Category.
	 * @param	id	int		 (optional)
	 * @param	category	KalturaCategory		 (optional)
	 * @return	KalturaCategory.
	 **/
	update: function(id, category){
		var kparams = new Object();
		kparams.id = id;
		kparams.category = category;
		return new KalturaRequestBuilder("category", "update", kparams);
	},
	
	/**
	 * Delete a Category.
	 * @param	id	int		 (optional)
	 * @param	moveEntriesToParentCategory	int		 (optional, enum: KalturaNullableBoolean, default: 1)
	 * @return	.
	 **/
	deleteAction: function(id, moveEntriesToParentCategory){
		if(!moveEntriesToParentCategory)
			moveEntriesToParentCategory = 1;
		var kparams = new Object();
		kparams.id = id;
		kparams.moveEntriesToParentCategory = moveEntriesToParentCategory;
		return new KalturaRequestBuilder("category", "delete", kparams);
	},
	
	/**
	 * List all categories.
	 * @param	filter	KalturaCategoryFilter		 (optional, default: null)
	 * @param	pager	KalturaFilterPager		 (optional, default: null)
	 * @return	KalturaCategoryListResponse.
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
		return new KalturaRequestBuilder("category", "list", kparams);
	},
	
	/**
	 * Index Category by id.
	 * @param	id	int		 (optional)
	 * @param	shouldUpdate	bool		 (optional, default: true)
	 * @return	int.
	 **/
	index: function(id, shouldUpdate){
		if(!shouldUpdate)
			shouldUpdate = true;
		var kparams = new Object();
		kparams.id = id;
		kparams.shouldUpdate = shouldUpdate;
		return new KalturaRequestBuilder("category", "index", kparams);
	},
	
	/**
	 * Move categories that belong to the same parent category to a target categroy - enabled only for ks with disable entitlement.
	 * @param	categoryIds	string		 (optional)
	 * @param	targetCategoryParentId	int		 (optional)
	 * @return	KalturaCategoryListResponse.
	 **/
	move: function(categoryIds, targetCategoryParentId){
		var kparams = new Object();
		kparams.categoryIds = categoryIds;
		kparams.targetCategoryParentId = targetCategoryParentId;
		return new KalturaRequestBuilder("category", "move", kparams);
	},
	
	/**
	 * Unlock categories.
	 * @return	.
	 **/
	unlockCategories: function(){
		var kparams = new Object();
		return new KalturaRequestBuilder("category", "unlockCategories", kparams);
	},
	
	/**
	 * .
	 * @param	fileData	file		 (optional)
	 * @param	bulkUploadData	KalturaBulkUploadJobData		 (optional, default: null)
	 * @param	bulkUploadCategoryData	KalturaBulkUploadCategoryData		 (optional, default: null)
	 * @return	KalturaBulkUpload.
	 **/
	addFromBulkUpload: function(fileData, bulkUploadData, bulkUploadCategoryData){
		if(!bulkUploadData)
			bulkUploadData = null;
		if(!bulkUploadCategoryData)
			bulkUploadCategoryData = null;
		var kparams = new Object();
		kfiles = new Object();
		kfiles.fileData = fileData;
		if (bulkUploadData != null)
			kparams.bulkUploadData = bulkUploadData;
		if (bulkUploadCategoryData != null)
			kparams.bulkUploadCategoryData = bulkUploadCategoryData;
		return new KalturaRequestBuilder("category", "addFromBulkUpload", kparams, kfiles);
	}
}
