const db = require("../db");

const getAllProducts = `SELECT
p.id,
p.name,
p.description,
p.price,
pc.name AS "categoryName",
pi.name AS "imageName",
pi.description AS "imageDescription",
pd.value AS "discountValue",
dt.type AS "discountType"
FROM product p
LEFT JOIN product_category pc ON p.product_category_id = pc.id
LEFT JOIN product_image pi ON p.product_image_id = pi.id
LEFT JOIN product_discount pd ON p.id = pd.product_id 
LEFT JOIN discount_type dt ON dt.id = pd.discount_type_id
ORDER BY
p.id
`;
const getAllPagedProducts = `SELECT
p.id,
p.name,
p.description,
p.price,
pc.name AS "categoryName",
pi.name AS "imageName",
pi.description AS "imageDescription",
pd.value AS "discountValue",
dt.type AS "discountType"
FROM product p
LEFT JOIN product_category pc ON p.product_category_id = pc.id
LEFT JOIN product_image pi ON p.product_image_id = pi.id
LEFT JOIN product_discount pd ON p.id = pd.product_id 
LEFT JOIN discount_type dt ON dt.id = pd.discount_type_id
ORDER BY
p.id
LIMIT $1 OFFSET $2
`;
module.exports = {
  getProducts: async () => {
    try {
      const result = await db.query(getAllProducts);
      return result.rows;
    } catch (error) {
      throw Error(error);
    }
  },
  // Some of the code below was outsourced. Please see citation 1. in  citations.txt
  getPagedProducts: async (limit, page) => {
    try {
      const offset = limit * (page - 1);
      const result = await db.query(getAllPagedProducts, [limit, offset]);
      return result.rows;
    } catch (error) {
      throw Error(error);
    }
  },
};
