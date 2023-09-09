import ProductRepository from "../repositories/product.repository.js";

async function createProduct(product) {
  const existentProduct = await ProductRepository.getProduct(product.Code);
  if (existentProduct) {
    await ProductRepository.updateProduct(product);
    return false;
  } else {
    await ProductRepository.createProduct(product);
    return true;
  }
}

async function getProducts() {
  return await ProductRepository.getProducts();
}

async function updateProduct(product) {
  const existentProduct = await ProductRepository.getProduct(product.Code);
  console.log(existentProduct);
  if (existentProduct) {
    return await ProductRepository.updateProduct(product);
  } else {
    return false;
  }
}

async function deleteProduct(id) {
  return await ProductRepository.deleteProduct(id);
}

export default {
  createProduct,
  getProducts,
  updateProduct,
  deleteProduct,
};
