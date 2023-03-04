class APIFeatures {
  constructor(query, queryStr) {
    this.query = query;
    this.queryStr = queryStr;
  }

  search() {
    const keyword = this.queryStr.keyword
      ? {
          //search it in the database
          name: {
            $regex: this.queryStr.keyword,
            //case insensitive
            $options: `i`,
          },
        }
      : {};

    // console.log(keyword);
    this.query = this.query.find({ ...keyword });
    // console.log(this);
    return this;
  }

  filter() {
    const queryCopy = { ...this.queryStr };

    // console.log(queryCopy);
    //removing fields from the query
    const removeFields = ["keyword", "limit", "page"];
    removeFields.forEach((element) => delete queryCopy[element]);

    //Advance filter for price & rating
    let queryStr = JSON.stringify(queryCopy);
    //if the query has gte or lte make it a mongo option by adding $ infront of it
    queryStr = queryStr.replace(/\b(gt|gte|lt|lte)\b/g, (match) => `$${match}`);
    // { price: { lte: '50', gte: '1' } }
    // {"price":{"$lte":"50","$gte":"1"}}
    //     console.log(queryCopy);
    //     console.log(queryStr);
    this.query = this.query.find(JSON.parse(queryStr));
    return this;
  }

  pagination(resPerPage) {
    const currentPage = Number(this.queryStr.page) || 1;
    const skip = resPerPage * (currentPage - 1);

    this.query = this.query.limit(resPerPage).skip(skip);
    return this;
  }
}

module.exports = APIFeatures;
