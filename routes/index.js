var json_processor = require("../services/json_processor");
var parameter_processor = require("../services/parameter_processor");
var query_processor = require("../services/query_processor")
var logger = require("../services/logger").getLogger;
/**
 * route to query service.
 * @param req
 * @param res
 */
exports.query = function (req, res) {

    var postData = '';
    req.setEncoding = 'utf8';
    req.addListener('data', function (dataPiece) {
        postData += dataPiece;
    });

    function process_request() {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        try {
            var jsonObj = JSON.parse(postData);
        } catch (er) {
            logger.error("Parsing Json error:" + er);
            logger.error(postData);
            res.end(json_processor.error("parsing json error "));
            return;
        }

        var adp_array = jsonObj.adpId;
//        解析postData
        var adp_type = parameter_processor.validate_parameter(adp_array);
        if (adp_type === "err") {
            logger.error("Validate parameter error: adp ids aren't all same type.");
            logger.error("Error adps:" + adp_array);
            res.end(json_processor.error("adp type error:" + adp_array.join(",")));
            return;
        }

//      请求数据库查询
        var area_array = jsonObj.city;
        var ret_json = {};
        query_processor.query_proportion(adp_type, adp_array, area_array, function (err, result) {
            ret_json = result;
            res.end(json_processor.success(ret_json));     //.stringify(ret_json, null, 4)
        });
    };

    req.addListener('end', process_request);
};