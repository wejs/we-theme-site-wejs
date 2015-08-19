// Theme scripts
$(document).ready(function() {
    function filterPlugins(searchTerm) {
        return searchTerm.name.indexOf('plugin') >= 0; 
    }

    $.ajax({
        url: 'https://api.github.com/orgs/wejs/repos?type="public"',
        headers: {
            "Authorization": "token 0d6a63d6acbf17a15f2bd3b603407932b7c8425e"
        }
    }).then(function(data) {
        var plugins = data.filter(filterPlugins);
        console.log(plugins);
    });
});