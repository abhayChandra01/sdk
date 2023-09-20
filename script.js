// window.fbAsyncInit = function () {
//     FB.init({
//         appId: 'YOUR_APP_ID',
//         autoLogAppEvents: true,
//         xfbml: true,
//         version: 'v13.0'
//     });
// };

// (function (d, s, id) {
//     var js, fjs = d.getElementsByTagName(s)[0];
//     if (d.getElementById(id)) return;
//     js = d.createElement(s); js.id = id;
//     js.src = "https://connect.facebook.net/en_US/sdk.js";
//     fjs.parentNode.insertBefore(js, fjs);
// }(document, 'script', 'facebook-jssdk'));

// document.getElementById('loginButton').addEventListener('click', function () {

//     console.log('HELLo');

//     FB.login(function (response) {
//         if (response.authResponse) {
//             // User is logged in
//             FB.api('/me', function (userInfo) {
//                 console.log('Welcome, ' + userInfo.name + '!');
//             });
//         } else {
//             console.log('Login failed or the user canceled.');
//         }
//     }, { scope: 'public_profile,email' });
// });

document.addEventListener('DOMContentLoaded', function () {
    window.fbAsyncInit = function () {
        FB.init({
            appId: '175488245581734',
            autoLogAppEvents: true,
            xfbml: true,
            version: 'v18.0'
        });
    };

    (function (d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = "https://connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

    document.getElementById('loginButton').addEventListener('click', function () {
        console.log('HELLO');
        FB.login(function (response) {
            if (response.authResponse) {
                // User is logged in
                FB.api('/me', function (userInfo) {
                    console.log('Welcome, ' + userInfo.name + '!');
                });
            } else {
                console.log('Login failed or the user canceled.');
            }
        }, {
            config_id: "269138165960680",
            response_type: 'code',
            override_default_response_type: true,
        });
    });
});
