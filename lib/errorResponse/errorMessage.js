module.exports = Object.freeze({
    BAD_REQUEST: error("E400", "Invalid Request"),
    INVALID_JSON: error("E400", "Invalid JSON Object"),
    FORBIDDEN: error("E403", 'Request is forbidden'),
    UNAUTHORIZED: error("E401", "Request is unauthorized"),
    INTERNAL_SERVER_ERROR: error("E500", "Unexpected error occurred"),

    /** Any additional custom client error code required can be defined here...*/
    JSON_PARSE_ERROR: error("E400", "Invalid JSON Object"),
    USER_NOT_FOUND: error("E461", "User not found"),
    CUSTOMER_NOT_FOUND: error("E400", "Customer not found"),
    /*
        Usage....

        const errorMessage = require("../utils/errorResponse/errorMessage");
        const statusCode = require("../utils/errorResponse/errorStatusCode");
        errorHandling.errorHandler(
            statusCode.CUSTOM_CLIENT_ERROR,
            errorMessage.USER_NOT_FOUND.MESSAGE,
            res,
            logger,
            errorMessage.USER_NOT_FOUND.CODE
        );
    */

    EXAMPLE: error("E499", "This is a custom error example"),

    /* Advisory Service */
    MISSING_SERVICE_NAME : error("E400", "Invalid request, missing query parameter serviceName"),
    MISSING_SCHEDULE : error("E400", "Invalid request, missing query parameter schedule"),
    AEM_RESPONSE_ERROR : error("E500", "Error response from AEM"),
    PAST_DATE_ERROR : error("E400", "Cannot schedule request for past date"),
    SCHEDULE_EXIST : error("E460", "Schedule already present at the given date and time"),
    MISSING_PACKAGE_ID : error("E400", "Invalid request, missing query parameter packageId"),
    // MISSING_RESOURCE_PATH : error("E400", "Invalid request, missing query parameter resourcePath"),
    // MISSING_SERVICE_ID : error("E400", "Invalid request, missing query parameter serviceId"),
    // MISSING_ISSUE_ID : error("E400", "Invalid request, missing query parameter issueId"),
    MISSING_REQUEST_TYPE : error("E400", "Invalid request, missing query parameter requestType"),
    MISSING_JSON_QUERY : error("E400", "Invalid request, missing query parameter jsonQuery"),
    MISSING_CATEGORY : error("E400", "Invalid request, missing query parameter category"),
    // MISSING_COOKIE : error("E400", "missing Cookie"),
    SERVICE_DETAILS_NOT_FOUND : error("E460", "Service details not found for requested package Id"),
    USER_EMAIL_EXISTS : error("E409", "User Email Already exists"),
    CODE_DELIVERY_FAILURE : error("E409","User successfully reset but Email address is not verified"),
    UNSUPPORTED_USER_STATE: error("E409","User already created permanent password. Try using forgot password"),
    USER_NOT_FOUND : error("E409","User does not exist"),
    INTERNAL_ERROR : error("E500","Internal error"),
    INVALID_PARAMETER: error("E400","Invalid Parameters"),
    INVALID_PASSWORD : error("E400","Invalid password format"),
    NOT_AUTHORIZED : error("E400","Not authorized"),
    RESOURCE_NOT_FOUND : error("E400","Can't find the requested resource"),
    TOO_MANY_REQUESTS: error("E400","Too many requests"),
    /* Partner Dashboard */
    MISSING_START_DATE : error("E400", "Invalid request, missing start date"),
    MISSING_END_DATE : error("E400", "Invalid request, missing end date"),
    REDIS_ERROR : error("E500", "Error while accessing redis"),
    PARTNER_NOT_FOUND : error("E404", "Partner doesn't exist"),
    MISSING_USER_ID : error("Err400", "Invalid request, user id is missing"),
    MISSING_COOKIE : error("Err400", "Invalid request, cookie is missing"),
    NUMBER_EMPTY : error("Err400", "Invalid request, numbers array cannot be empty"),
    MISSING_TYPE : error("Err400", "Invalid request, missing type"),
    USER_NOT_ADMIN : error("E403", "Request is forbidden, user is not an admin"),
    MISSING_PARAMETERS : error("E400", "Invalid request, missing either pincode, serviceName or persona"),
    QUERY_PARAMETERS_EMPTY : error("E400", "Invalid request, query parameters are missing"),
    MISSING_SERVICE_ID : error("Err400", "Invalid request, service id is missing"),
    QUERY_PARAMETERS_INVALID : error("E400", "Invalid query parameter."),

    AEM_REQUEST_ERROR : error("E500", "Error in getting format from AEM"),
    AEM_INSERT_ERROR : error("E500", "Error while inserting data into AEM"),
    IMAGE_UPLOAD_ERROR : error("E500", "Error while uploading feedback image to solr"),
    AEM_IMAGE_UPLOAD_ERROR : error("E500", "Error while uploading feedback image in AEM"),
    BAD_REQUEST_ARRAY : error("E400", "Bad Request at Array Position: "),
    DUPLICATE_INSERT_ERROR : error("E400", "Bad Request, duplicate insert object at Array Position: "),
    EMPTY_OBJECT : error("E400", "Bad Request, empty update object at Array Position: "),
    MISSING_BASE_PRICE : error("E400", "Bad Request, base price or isBlocked is missing at Array Position:"),
    MISSING_REQUEST_ID : error("E400", "Invalid Request, request id is missing"),

    /* User Onboarding Service */
    USER_BLOCKED : error('ER456', 'Your account has been blocked for 15 mins due to multiple invalid entries.'),
    USER_BLOCKED_VERIFY_OTP : error('ER456', 'Your account has been blocked for 15 mins due to multiple invalid entries.'),
    USER_NOT_WHITELISTED: error('ER456', 'User is not whitelisted'),
    INVALID_OTP: error("ER890", "Invalid OTP. Please try again."),
    EXPIRED_OTP: error("ER893", "Otp has expired"),
    INVALID_USER: error("ER400", "No User Found"),
    USER_HAS_SIGNED_UP: error("ER675","User has already signed Up"),
    INVALID_REQUEST_TYPE: error("ER400","Invalid requestType"),
    EMAIL_SENT_FAILED: error("E020","failed to send the email"),
    EMAIL_INVALID_TOKEN: error("E021","invalid token"),
    EMAIL_CONFIRM_FAILED: error("E022","failed to confirm the email"),
    EMAIL_TOKEN_GENERATE_FAILED: error("E023","generate the token again"),
    INVALID_JSON_QUERY: error("E400", "Missing query parameter in jsonQuery"),
    INVALID_SUGGEST_REQUEST: error("E400", "Invalid Request, missing suggest or query parameter"),

    /* Partner Profile Service */
    APPROVAL_REQUEST_EXIST: error("ER696","User already requested for approval"),
    INVALID_ADMIN_TOKEN: error("ER403", "Admin token is not valid"),
    PARTNER_PROF_NOT_UPDATED: error("ER400", "Partner Profession is not Updated"),

    /* design Library detailEstimation, financialService*/
    FETCHING_HOME_DESIGN_ERROR : error("E500", 'Error occurred while fetching home designs'),
    HOME_DESIGN_SOLR_NOT_FOUND : error("E400", 'Solr Request failed with status code 400 for home designs'),
    ERROR_OCCUE_WHILE_CREATATING_SR : error("E500", 'Error occured while creating SR'),
    MISSING_HOUSE_DETAIL : error("E400", "Invalid request,  missing houseDetails in request body"),
    MISSING_PLOT_DETAIL : error("E400", 'Invalid request,  missing plotDetails in request body'),
    MISSING_FAMILY_DETAIL : error("E400", 'Invalid request,  missing familyDetails in request body'),
    SERVICE_REQUEST_TYPE_NOT_FOUND : error("E400", "Service Request Type not present"),
    ERROR_GETTING_SR_TYPE : error("E500", "Error while getting service request type"),
    SR_STATUS_NOT_FOUND: error("E400", "Service Request Status not present"),
    DRAFT_STATUS_NOT_FOUND: error("E400", "Draft Request Status not present"),
    ERROR_GETTING_SR_STATUS : error("E500", "Error while getting service request status"),
    SR_ID_AND_IMAGES_PRESENT : error("E400", "Both designImages and serviceRequestId can't be provided"),
    DR_ALREADY_PRESENT : error("E400", "Design Request exists for the given service request id"),
    ERROR_FETCHING_2D_DESIGN_RESOURCE : error("E500", "Error fetching 2D Design Resource"),
    DR_NOT_FOUND_2D_COMPLETE : error("E500", "Design request not found at 2D-completed for serviceRequestId: "),
    ERROR_FETCHING_2D_DR_DETAIL : error("E500", "Error fetching 2D-completed Design Request details"),
    ERROR_FETCHING_SR : error("E500", "Error fetching Service request"),
    ERROR_SAVING_DESIGN_IMAGES : error("E500", "Error Saving Design Images"),
    ERROR_WHILE_SAVING_DR : error("E500", "Error occurred while saving design request"),
    ERROR_FETCHING_DR : error("E500", "Error occurred while fetching design request"),
    DESIGN_RESOURCEPATH_REQUIRED : error("E400", "designResourcePath is required for a new Request"),
    ERROR_FETCHING_SCHEDULE_DETAIL : error("E500", "Error fetching schedules details"),
    ERROR_SCHEDULE_ALREADY_PRESENT : error("E400", "Schedule already present at the given date and time."),
    ERROR_DR_ALREADY_EXISTS : error("E400", "Design Request exists for the given service request id"),
    ERROR_FETCHING_3D_DESIGN_RESOURCE : error("E500", "Error fetching 3D Design Resource"),
    DR_NOT_FOUND_3D_COMPLETE : error("E500", "Design request not found at 3D-completed for serviceRequestId: "),
    ERROR_OCCUE_WHILE_UPDATE_DATE_TIME : error("E500", "Error while updating vr date and time"),
    MISSING_SR_ID : error("E400", "Invalid request, missing query parameter serviceRequestId"),
    ERROR_OCCUE_WHILE_FETCHING_SR_DETAIL : error("E500", "Error while fetching Service request detail"),
    ERROR_OCCUE_WHILE_FETCHING_HOME_DESIGN : error("E500", "Error occured while fetching home designs"),
    MISSING_ISSUE_ID : error("E400", "Invalid request, missing query parameter issueId"),
    ERROR_WHILE_FETCHING_HOME_ISSUE_DETAIL : error("E500", "Error while fetching home issue detail"),
    QUERY_PARAMS_NOT_JSON : error("E400", "Invalid Query: Query params is not a JSON object"),
    QUERY_PARAMS_MISSING : error("E400", "Invalid request, missing query parameter "),
    FORBIDDEN_RESOURCEPATH : error("E400", "resourcePath Forbidden"),
    ERROR_FETCHING_DETAILS : error("E500", "Error Fetching Details"),
    ERROR_POSTING_REACTION : error("E500", "Error Posting Reaction"),
    ERROR_OCCUE_WHILE_UPDATING_DR : error("E500", "Error occured while updating design request"),
    RESOURCE_PATH_REQUIRED_IF_STATUS_SUCCESS : error("E500", "DesignResourcePaths are required if status is successful"),
    DR_NOT_FOUND : error("E404", "DesignRequest not found"),
    SR_NOT_FOUND : error("E404", "ServiceRequest not found"),
    ERROR_WHILE_FETCHING_DESIGN_RESOURCE_PATH : error("E500", "Error while fetching design resource path"),
    ERROR_OCCURED_WHILE_FETCHING_LAST_UPDATE_DATE : error("E500", "Error while fetching last update date"),
    FAILED_TO_FETCH_FINALIZED_DESIGN : error("E500", "Failed to Fetch Finalized design"),
    FAILED_TO_FINALIZED_DESIGN : error("E500", "Failed to finalized design"),
    DR_PATH_NOT_FOUND : error("E404", "Design resource path not found at 2D stage for serviceRequestId: "),
    ADD_HOUSE_DETAIL_FIRST : error("E400", "Please add the House details first"),
    ERROR_FETCHING_PROJECT_HOUSE_DETAIL : error("E500", "Error fetching ProjectHouse details"),
    ERROR_FETCHING_PLOT_DETAIL : error("E500", "Error fetching plot details"),
    PLOT_DETAIL_NOT_FOUND : error("E400", "plotDetails not added"),
    ERROR_FETCHING_FAMILY_DETAIL : error("E500", "Error fetching family details"),
    FAMILY_DETAIL_NOT_FOUND : error("E400", "familyDetails not added"),
    INVALID_REQUEST : error("E400", "Invalid Request: Request Body is not a JSON object"),
    ERROR_OCCURED_WHILE_RAISING_CHANGE_REQUEST : error("E500", "Error raising change Request"),
    ERROR_OCCURED_WHILE_FETCHING_CHANGE_REQUEST : error("E500", "Error fetching change Request"),
    ERROR_OCCURED_UPDATING_DESIGN_LAYOUT_PLAN : error("E500", "Error occured while updating design layout plan"),
    ERROR_WHILE_APPROVING_PLAN : error("E500", "Error occured while approving plan"),
    ERROR_WHILE_FETCHING_APPROVED_PLAN : error("E500", "Error occured fetching approved plan"),
    EXPECTED_DATE_IS_IN_PAST : error("E400", "Expected provision date Cannot be in the past date"),
    ERROR_FETCHING_USER_PROFILE : error("E400", "Error while fetching user profile"),
    ERROR_WHILE_CREATING_LOAN_SR : error("E500", "Error occured while creating loan request"),
    ERROR_WHILE_CREATING_IHBPLUS_LOAN_CALL_SUPPORT : error("E500", "Error occured while creating loan request"),
    ERROR_FETCHING_LANGUAGE : error("E500", "Error occured while fetching user language"),
    ERROR_FETCHING_LOAN_DOCUMENTS : error("E500", "Error occured while fetching loan documents"),
    ERROR_FETCHING_LOAN_REQUEST : error("E500", "Error occured while fetching loan request detail"),
    ERROR_OCCURED_WHILE_CREATING_DETAIL_ESTIMATION : error("E500", "Error occured while creating detail estimatation"),
    ERROR_WHILE_UPLOADING_DATA_TO_CRM : error("E500", "Error uploading data to CRM"),
    ERROR_FETCHING_DETAIL_ESTIMATION : error("E500", "Error occured while fetching detail estimatation"),
    ERROR_MISSING_FIELD : error("E400", "Invalid request, missing field: "),
    ERROR_WHILE_ADDING_IMAGES : error("E500", "Error occured while adding more images to detail estimatation"),
    ERROR_WHILE_FETCHING_COMMENTS : error("E500", "Error while getting comments from userDetailEstimates"),
    ERROR_WHILE_ADDING_COMMENTS : error("E500", "Error while adding comments"),
    ERROR_FETCHING_USER_DESIGN : error("E500", "Error while fetching user design"),
    ERROR_REMOVING_ESTIMATION : error("E500", "Error while removing estimate"),
    ERROR_FINALIZING_ESTIMATION : error("E500", "Error while finalizing estimate"),
    ERROR_POST_ESTIMATION_DETAIL : error("E500", "Error in postEstimationDetail"),
    REQUEST_NOT_IN_CORRECT_FORMAT : error("E400", "Input request is not in correct format"),
    ERROR_FETCHING_ORDER_DETAIL : error("E500", "Error fetching orderDetail"),
    ERROR_FETCHING_PROMO_CODES : error("E500", "Error occurred while fetching promocodes"),
    ERORR_WHILE_SAVING_ORDER_DETAIL : error("E500", "Error occurred while saving order detail"),
    ERROR_NO_SERVICE_RATES: error("E404", "No service rates found"),
    ERROR_FETCHING_EXISTING_PAID_SERVICE : error("E500", "Error occurred while fetching existing paid service"),
    ERROR_FORMATING_RESPONSE : error("E500", "Error Formatting Response"),
    ERROR_FETCHING_SR_COUNT : error("E500", "Error fetching service request count"),
    ERROR_FETCHING_CUSTOMER_SERVICES : error("E500", "Error fetching customers services"),
    ERROR_FETCHING_CUSTOMER_BY_STATUS : error("E500", "Error fetching customers by status"),
    ERROR_FETCHING_CUSTOMER_SERVICES_FOR_TEAM : error("E500", "Error fetching customers services by team"),
    ERROR_WHILE_SAVING_POST_CUSTOMER_SERVICE_TEAMS : error("E500", "Error saving post customer service teams"),
    ERROR_FETCHING_CUSTOMER_WITH_SR_DETAIL : error("E500", "Error fetching customer with service request detail"),
    ERROR_FETCHING_ROLE_FROM_MOBILE : error("E500", "Error fetching roles associated with mobile"),
    ERROR_UPDATING_CUSTOMER : error("E500", "Error updating customer"),
    ERROR_ADDING_FAVOURITE : error("E400", "Favourite already exists"),
    SRT_NOT_FOUND : error("E404", "ServiceRequestType not found"),
    SERVICE_REQUEST_DESCRIPTION_NOT_FOUND : error("E404", "Service Request Type or Language Code Does Not Exist "),
    STG_NOT_FOUND : error("E404", "Stage not found"),
    PAYMENT_NOT_PRESENT_FOR_SERVIVE : error("E404", "Payment flow not present for this service"),
    
    /*Get Invoice Details Erros*/
    ERROR_CYGENT_CREDENTIALS : error("E400", "Wrong Credentials Provided"),
    ERROR_TXN_DETAIL_FOR_INVOICE : error("E400", "No transaction Id found"),
    ERROR_USR_DETAIL_FOR_INVOICE : error("E400", "No user Id found"),
    ERROR_USER_STATE_DETAIL_FOR_INVOICE : error("E400", "No pincode found"),
    ERROR_USER_STATE_ID_FOR_INVOICE : error("E400", "No state Id found"),
    ERROR_PINCODE_NOT_FOUND_FOR_INVOICE : error("E500", "No pincode found, for the requested id"),
    ERROR_TAX_NOT_MATCHED_FOR_INVOICE : error("E500", "Tax not matched"),
    ERROR_GRAND_TOTAL_NOT_MATCHED_FOR_INVOICE : error("E500", "Grand total not matched"),        
    /* Review Service custom errors */
    INCORRECT_REVIEW_ID : error("E400", "Couldn't find saved review Id"),
    RATING_MISSING : error("E400", "Rating  is missing"),
    
    /* Pemission custom errors */
    NO_PERMISSION_INFO : error("E404", "No information found for given Pincode"),
    MISSING_PINCODE :  error("E400", "No Pincode found"),
    MISSING_PLOT_INFO : error("E400", "No Pincode found Or Plot Address"),

    /* Progress Tracker Custom codes */
    INVALID_QUERY : error("E400", "Invalid Query: Query params is not a JSON object"),
    INVALID_OBJECT: error("E400", "Incorrect JSON object"),
    INVALID_SERVICE_ID: error("E422", "My Service Request Id not found"),
    NO_DETAILED_ESTIMATE_FOUND: error("E422", "No Details found"),

    /* userEventService */
    MISSING_EVENT : error("E404", "Invalid request, event details not found."),
    ERROR_PARSING_REQUEST: error("E400", "Error parsing json request."),
    ERROR_ADDING_EVENT: error("E500", "Error occured while adding event."),
    ERROR_UPDATING_EVENT: error("E500", "Error occured while updating event."),

    /* fileService */
    ERROR_UPLOADING_FILE : error("E500", "Error uploading file."),
    MAX_FILE_CAPACITY: error("E400", "Max 50 files can be uploaded."),
    MISSING_FILES: error("E400", "No files to upload."),

    /* aemResponseProxy */
    MISSING_RESOURCE_PATH : error("E400", "Invalid request, missing query parameter resourcePath."),
    FORBIDDEN_RESOURCE_PATH : error("E403", "Forbidden resourcePath."),
    INCORRECT_RESOURCE_PATH : error("E460", "Incorrect resourcePath format."),

    /* teamsService */
    DUPLICATE_TEAM_ENTRY : error("E041", "Already requested to join)"),
    NO_TEAM_ADMIN : error("E040", "No admin for the team"),
    ERROR_NOT_A_UTEC_MEMBER : error("E043", "User not an utec member"),
    FORBIDDEN_DELETE_TEAM_MEMBER : error("E044", "Permission denied to delete the team member"),
    FORBIDDEN_DELETE_TEAM_OWNER : error("E046", "Permission denied to delete an owner of a team"),
    FORBIDDEN_DELETE_TEAM : error("E042", "Permission denied to delete the team"),
    FORBIDDEN_TEAM_NAME : error("E045", "Permission denied to edit team name"),
    CONFLICT_ALREADY_IN_TEAM : error("ET001", "User is already part of a team."),
    MISSING_TEAM : error("ET002", "No team found."),
    FORBIDDEN_API : error("E001", "Partner cannot access this api."),
    BAD_REQUEST_TEAMS : error("E002", "Bad Request."),
    MISSING_USER_TEAMS : error("E003", "No user found."), 

    /*userProfile*/ 
    BAD_REQUEST_MISSING_USER_ID : error("E400", "Invalid request, missing parameter userId."),
    BAD_REQUEST_MISSING_PARAM : error("E400", "Invalid request, missing parameter "),
    FORBIDDEN_ROLE : error("E403", "Role is not supported by the api."),

    /*userModules*/
    DEACTIVATED_USER : error("E403", "User is not active."),
    INVALID_ROLE : error("E400", "Role is not valid."),

    /*adminUserModules*/
    ADMIN_NOT_FOUND : error("E403", "Admin not found."),
    UNAUTHORIZED_ACCESS : error("E403", "Unauthorised access to api."),

    ERROR_OCCUE_WHILE_CHECKING_IS_TEST_USER : error("E500", 'Error occured while checking user is test or not'),
    CAN_NOT_CREATE_SR_FOR_TEST_USER : error("E400", "You can't create SR for test user"),
    INVALID_TXN_ID : error("E400", "Invalid Request: transactionId should be a number"),
    TXN_DATA_ERROR: error("E500", "Data not found for requested transaction"),
    USER_IS_PRESENT_WITH_GIVEN_NUMBER : error("E400","User is already present with this number"),
    SOME_MANDATORY_FIELDS_ARE_MISSING : error("E400","Mandatory fields are missing for creation of value added service"),
    PARTNER_NAME_NUMBER_REQUIRED : error("E400","partner name and number reqired"),
    ROOF_AREA_DIMENSTION_REQUIRED : error("E400","roofArea and roofAreaDimension required"),
    PLOT_DIRECTION_LANGAUGE_VASTU_DOC_REQUIRED : error("E400","plotDirection, preferredLanguage and vaastuDoc required"),
    VALUE_ADDED_NOT_PRESENT_WITH_SR_ID : error("E404","value added service not found with given  SRId"),
    ADDRESS_DETAILS_NOT_FOUND : error("E404", "Address Details Not Found"),

    /*userOnBoarding*/
    DIFFERENT_APP_USER : error("E410", "User is existing on different app"),
    STYLE_NOT_FOUND : error("E404","Style not found."),

    SERVICE_NOT_FOUND : error("E404","Service not found with given id: "),
    MOBILE_NUMBER_MISSING : error("E400","Required 10 digit valid mobileNumber"),

    BAD_REQUEST_NO_DATA : error("E400","No data found for a SR Request"),
    TYPE_MISSING : error("E400","Required feedback type to get feedback values"),
    TYPE_INCORRECT : error("E400","Invalid feedback type to get feedback values"),
    REACTIONID_MISSING : error("E400","Require designRequestReactionId in params."),
    REACTIONID_INCORRECT : error("E400","designRequestReactionId should be a number."),

    /*support service*/
    VIDEO_PLAYLIST_NOT_FOUND : error("E404", "Video playlist not found"),

    /*  */
    INVALID_STATUS : error("E400", "Invalid status"),
    TYPE_AND_CATEGORY_REQUIRED : error("E400", "Invalid Request, type and category is required for sorting"),
    INCORRECT_SORT_TYPE : error("E400", "Invalid Request, sort type is incorrect"),
    INCORRECT_SORT_CATEGORY : error("E400", "sort category is incorrect, it must be asc or desc"),
    ERROR_WHILE_FETCHING_ADDITIONAL_PAYMENT_DETAIL : error("E500", "Error while fetching additional payment detail"),
    INITIATE_CHANGE_REQUEST_LIMIT: error("E400", "initiate change request limit is exceed. Max limit is 3"),
    VIDEO_DETAILS_NOT_FOUND : error("E404", "Video details not found") , 
    FLOOR_COUNT_MISSIING : error("E400", "Floor Count is missing"),
    CHILD_REQUEST_ID_REQUIRED : error("E400", "childRequestId is required"),
    SOLR_NOT_FOUND_RESONSE : error("E400", "Solr Request failed with status code 400"),
    USER_DETAILS_NOT_FOUND: error("E404", "No User Found"),
    DEALER_NOT_FOUND: error("E461", "Dealer Not Found"),

    SERVICE_TYPE_NOT_FOUND: error("E400", "serviceType key is required"),
    SERVICE_TYPE_INVALID : error("E400", "Invalid Request, serviceType is invalid"),
    VEHICLE_NOT_FOUND: error("E400", "vehicle not found"),

    /*Home Building Stage Messages*/
    ERROR_FETCHING_EPIC_ID: error("E500", "Error occured while fetching epic/stage id"),
    ERROR_UPDATING_EPIC_ID: error("E500", "Error occured while updating homebuilding epic/stage"),
    ERROR_SAVING_EPIC_ID: error("E500", "Error occured while saving homebuilding epic/stage"),
    ERROR_REGIONAL_REPORT: error("E400", "Invalid Request typeOfReport Require"),
    PINCODES_NOT_FOUND: error("E404", "pincodes not found"),

    ERROR_SAC_OR_SO_CODE_MISSING: error("E400", "SAC Code OR SO Code is not present for this service type"),
    ERROR_WHILE_FETCHING_STAGE_ID: error("E500", "Could not fetch id from Stage Epic Details."),
    ERROR_WHILE_GENERATING_SITE_DETAILS_ID: error("E500", "Could not generate Site Id"),
    ERROR_WHILE_SAVING_STAGE_IN_SITE_DETAILS: error("E500", "Could not save stage in site details."),
    ERROR_ROLE_NAME_ALREADY_EXIST: error("E400", "Role name is already present."),
    ERROR_ROLE_PERMISSION_IS_NOT_PRESENT: error("E400", "Roles permission is not present."),
    ERROR_WORKGROUPID_IS_INCORRECT: error("E400", "WorkgroupId is incorrect."),
    ERROR_WORKGROUP_NAME_ALREADY_EXIST: error("E400", "Workgroup name already exist!!"),
    ERROR_PINCODE_NOT_FOUND:error("E400", " Pincode not found."),
    ERROR_PINCODE_INVALID:error("E400", " Pincode is not valid.")
})

function error(code, message){
    return {
        CODE : code,
        MESSAGE : message
    }
}