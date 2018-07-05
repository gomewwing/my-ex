const express = require('express');
const router = express.Router();

const request = require('request');
const cheerio = require('cheerio');


// function naver() {
//     num;
//     name;
//     link;
// }
let naver = {
    num: 0,
    name: 'h',
    link: 'a'
}

//GET POST
router.get('/posts', (req, res)=>{
    res.send('POST WORKS');
})

router.get('/test', (req, res)=>{
    
    let url = "https://naver.com";
    let d;
    let arr = [];
    let arr2 = [];
    
    let l;
    // let links = [];
    let i=0;
        request(url, function(err, res, body){
            if (!err) {
                let $ = cheerio.load(body);
                d = $(".ah_list>.ah_l>.ah_item>.ah_a>.ah_k")
                l = $(".ah_list>.ah_l>.ah_item>.ah_a")      
                
            }
            for(let i=0;i<d.length;i++){   

                naver = new Object();

                naver.num = i+1;
                naver.name = d[i].children[0].data;
                naver.link = l[i].attribs["href"];
                
                arr.push(naver);
                
                // arr.push((d[i].children[0].data));  
            }
            // for(let i=0;i<l.length;i++){
            //     links.push(l[i].attribs["href"]);
                
            // }
            // console.log(arr);
            
        })
        
    setTimeout(function(){
        res.json(arr);
        
    }, 2000);

})

module.exports = router;

