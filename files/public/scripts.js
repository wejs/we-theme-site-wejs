// Theme scripts
$(document).ready(function() {
    function filterPlugins(searchTerm) {
        return searchTerm.name.indexOf('plugin') >= 0; 
    }

    $.ajax({
        url: 'https://api.github.com/orgs/wejs/repos?type="public"',
        headers: {
            "Authorization": "token 9dfe4f9a7dddf513c4f546b0152a26a2738bcf85"
        }
    }).then(function(data) {
        var plugins = data.filter(filterPlugins);
        console.log(plugins);
    });
});