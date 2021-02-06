const pagination = function (perPage, currentPage) {
    let paginate = {
        perPage: null,
        currentPage: null,
        search: null,
        sort: null
    };
    paginate.currentPage = currentPage ? parseInt(currentPage) : 1;
    // paginate.search = req.query.search ? req.query.search : '';
    paginate.perPage = perPage ? parseInt(perPage, null) : 100;
  return paginate;
}
module.exports.pagination=pagination;
