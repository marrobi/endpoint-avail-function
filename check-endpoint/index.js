var request = require('request');

module.exports = function (context, req) {

    if (req.query.url) {

        json_payload = {something: 'some_value'};

        var url = req.query.url;
        var data = { body: json_payload, json: true };

        request.post(url, data)
            .on("response", function(response){
                msg = `Test complete. Status code: ${response.statusCode}`;
                console.log(msg);
                context.res = { status: response.statusCode, body: `Test complete. Status code: ${response.statusCode}`};
                context.done();
            })
            .on("error", function(error){
                msg = `Error performing test. Status code: ${response.statusCode}`;
                context.log(response);
                context.res  = { status: 500, body: msg };
                context.done();
            })
    } else {
        context.res  = { status: 400, body: "no url param supplied" }; 
        context.done();
    }
    
};