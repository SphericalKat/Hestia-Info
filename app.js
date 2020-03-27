const apiCallFromNode = require('./nodejscall')
// const redis = require("redis://h:p0251a35af0bf4e3e133ee844da1ab4df203632acde8b0a7e0363c946a7d90002@ec2-52-200-69-76.compute-1.amazonaws.com:10019");

// const client = redis.createClient(process.env.REDIS_URL);

const http = require('http')

http.createServer(async(req, res) => {
        if(req.url === "/node"){
            var data = await apiCallFromNode.callApi();
            res.write(JSON.stringify(data));
            res.end();
            let dataTitle = [];
            dataTitle = data.find("title");
            console.log(dataTitle);
        }
}).listen(3000);

