var handlers = require('./handlers.js')

function router(req, res) {
    var url = req.url

    if (url === '/') {

        handlers.handleHomeRoute(req, res)

    } else if (url.startsWith('/public')) {

        handlers.handlePublic(req, res)

    } else if (url.startsWith('/search')) {
        handlers.handleSearch(req, res)
    } else {

        handlers.handleNotFound(req, res)

    }

}

module.exports = router