// require(['jquery'], function ($) {
//     return {
//         ajaxPOST: function (url, data, csrf_token) {
//             return new Promise(function (resolve, reject) {
//                 $.ajax({
//                     headers: {
//                         "X-CSRFToken": csrf_token == undefined ? $("input[name*='csrfmiddlewaretoken']").val() : csrf_token
//                     },
//                     url: url,
//                     type: 'POST',
//                     contentType: 'application/json; charset=utf-8',
//                     dataType: 'json',
//                     data: JSON.stringify(data),
//                     success: function (response) {
//                         if(response['status'] == 'SUCCESS') {
//                             resolve(response);
//                         }
//                         reject(response);
//                     },
//                     error: function (e) {
//                         console.log(e)
//                         reject(e);
//                     }
//                 });
//             });
//         },
//         ajaxGET: function (url) {
//             return new Promise(function (resolve, reject) {
//                 $.ajax({
//                     headers: {
//                         "X-CSRFToken": csrf_token == undefined ? $("input[name*='csrfmiddlewaretoken']").val() : csrf_token
//                     },
//                     url: url,
//                     type: 'GET',
//                     contentType: 'application/json; charset=utf-8',
//                     dataType: 'json',
//                     data: JSON.stringify(data),
//                     success: function (response) {
//                         if(response['status'] == 'SUCCESS') {
//                             resolve(response);
//                         }
//                         reject(response);
//                     },
//                     error: function (e) {
//                         console.log(e)
//                         reject(e);
//                     }
//                 });
//             });
//         }
//     }
// });

define('core', ['jquery'], function ($) {
    return {
        ajaxPOST: function (url, data, csrf_token) {
            return new Promise(function (resolve, reject) {
                $.ajax({
                    headers: {
                        "X-CSRFToken": csrf_token == undefined ? $("input[name*='csrfmiddlewaretoken']").val() : csrf_token
                    },
                    url: url,
                    type: 'POST',
                    contentType: 'application/json; charset=utf-8',
                    dataType: 'json',
                    data: JSON.stringify(data),
                    success: function (response) {
                        if(response['status'] == 'SUCCESS') {
                            resolve(response);
                        }
                        reject(response);
                    },
                    error: function (e) {
                        console.log(e)
                        reject(e);
                    }
                });
            });
        },
        ajaxGET: function (url) {
            return new Promise(function (resolve, reject) {
                $.ajax({
                    url: url,
                    type: 'GET',
                    contentType: 'application/json; charset=utf-8',
                    dataType: 'json',
                    success: function (response) {
                        if(response['status'] == 'SUCCESS') {
                            resolve(response);
                        }
                        reject(response);
                    },
                    error: function (e) {
                        console.log(e)
                        reject(e);
                    }
                });
            });
        }
    };
});