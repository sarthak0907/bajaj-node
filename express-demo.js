const express = require('express');
const app = express();

app.get('/', (request, response) => {
    var arr =request.query.data;
    var len = arr.length;
    var numbers = [];
    var alphabets = [];
    for(var i =0;i<len;i++)
    {
        if(isNaN(arr[i]))
        alphabets.push(arr[i]);
        else
        numbers.push(arr[i]);
    }

    response.write(JSON.stringify({"is_success": "True",
    "user_id": "Akshay_Pratap_Singh_27082001",
    "count": len,
    "email": "1905733@kiit.ac.in",
    "roll_number": "1905733",
    "numbers": numbers,
    "alphabets": alphabets}));
    response.end();
    response.send();
});

app.listen(3000, () => console.log('running on http://127.0.0.1:3000 ...'))