import db from "./db.js";

async function createProduct(product) {
  try {
    return db.product.create(product);
  } catch (err) {
    throw err;
  }
}

async function getProduct(code) {
  try {
    console.log(code);
    return db.product.findOne({ where: { Code: code } });
  } catch (err) {
    throw err;
  }
}

async function getProducts() {
  try {
    return db.product.findAll();
  } catch (err) {
    throw err;
  }
}

async function updateProduct(product) {
  try {
    const updatedProduct = await db.product.update(
      { Description: product.Description, Price: product.Price },
      {
        where: { Code: product.Code },
        returning: true,
      }
    );

    return updatedProduct[1];
  } catch (err) {
    throw err;
  }
}

async function deleteProduct(code) {
  try {
    return db.product.destroy({ where: { Code: code }, returning: true });
  } catch (err) {
    throw err;
  }
}
export default {
  createProduct,
  getProduct,
  getProducts,
  updateProduct,
  deleteProduct,
};
