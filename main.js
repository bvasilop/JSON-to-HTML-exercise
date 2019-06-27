
window.onload = function() {
const user_profile = {
    username: 'Sammy Jones',
    social_media: [
        {
            description: 'twitter',
            link: 'https://twitter.com/',
        },
        {
            description: 'facebook',
            link: 'https://www.facebook.com/',
        },
        {
            description: 'github',
            link: 'https://github.com/',
        },
        {
            description: 'instagram',
            link: 'https://instagram.com/',
        },
        {
            description: 'pinterest',
            link: 'https://pinterest.com/',
        },
    ],
};

document.querySelector('.username').innerHTML =
    // user name
    user_profile.username + '<br>';

user_profile.social_media.forEach(function(item) {
document.querySelector('.social-media').innerHTML +=
item.description + '<br>' +
item.link + '<br>' + '<hr>';
});

// Example using arrays

// user_profile.social_media.description +
// '<br>';

    // // twitter
    // user_profile.social_media[0].description +
    // '<br>' +
    // user_profile.social_media[0].link +
    // '<hr>' +
    // // facebook
    // user_profile.social_media[1].description +
    // '<br>' +
    // user_profile.social_media[1].link +
    // '<hr>' +
    // // github
    // user_profile.social_media[2].description +
    // '<br>' +
    // user_profile.social_media[2].link +
    // '<hr>' +
    // // instagram
    // user_profile.social_media[3].description +
    // '<br>' +
    // user_profile.social_media[3].link;
};
