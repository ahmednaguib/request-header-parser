'use strict';

var useragent = require('express-useragent');

exports.getRequestData = function(req, res) {
    // Create a new instance of the Beer model
    var ip = req.header('x-forwarded-for') || req.connection.remoteAddress;
    var lang = req.headers["accept-language"];
    var parts = lang.split(',');
    lang = parts[0];
    var source = req.headers['user-agent'],
    ua = useragent.parse(source);
    var software = ua.os;
		
	res.json({ 'ip': ip, 'language': lang, 'software':software });
};