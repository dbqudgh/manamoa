const request = require('request')

//Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.122 Safari/537.36

let options = { // user-Agent 우회하기
    uri: 'https://www.coupang.com/',
    headers: {
        'User-Agent': '',
        'Content-Type': 'application/x-www-form-urlencoded',
    },
    json:true 
};

function init(){

    request(options,(err,response,body)=>{
        
        if(body === undefined || err){
            console.log('에러났음')
        }
        
    })

}
init()