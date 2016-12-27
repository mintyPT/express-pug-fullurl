// todo: make module
module.exports = (req, res, next) => {
    var fullurl = req.protocol + '://' + req.get('host') + req.originalUrl;
    req.fullurl = res.locals.fullurl = fullurl;
    next();
};