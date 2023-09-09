import ProductService from "../services/product.service.js";

const requiredFields = ["Code", "Description", "Price"];

async function createProduct(req, res, next) {
  try {
    let product = req.body;
    for (const field of requiredFields) {
      if (!product[field]) {
        res.status(400).send("Required field is missing: " + field);
      }
    }
    const createdProduct = await ProductService.createProduct(product);

    if (createdProduct) {
      res.status(201).send("Product created successful");
    } else {
      res.status(200).send("Existent product updated successful");
    }

    logger.info(`POST /product - ${JSON.stringify(product)}`);
  } catch (err) {
    next(err);
  }
}

async function getProducts(req, res, next) {
  try {
    const products = await ProductService.getProducts();
    res.send(products);
    logger.info(`GET /product - ${JSON.stringify(products)}`);
  } catch (err) {
    next(err);
  }
}

async function updateProduct(req, res, next) {
  try {
    let product = req.body;
    for (const field of requiredFields) {
      if (!product[field]) {
        throw new Error("Required field is missing: " + field);
      }
    }
    const updatedProduct = await ProductService.updateProduct(product);
    console.log(updatedProduct);
    if (updatedProduct) {
      res.status(200).send(updatedProduct);
    } else {
      res.status(405).send("Product with provided code not found");
    }
    logger.info(`POST /product - ${JSON.stringify(product)}`);
  } catch (err) {
    next(err);
  }
}

async function deleteProduct(req, res, next) {
  try {
    const id = req.params.id;
    const deletedProduct = await ProductService.deleteProduct(id);
    if (deletedProduct) {
      res.status(200).send("Product deleted successful");
    } else {
      res.status(405).send("Product with provided code not found");
    }
    logger.info(`DELETE /product/:id - ${JSON.stringify(id)}`);
  } catch (err) {
    next(err);
  }
}

export default {
  createProduct,
  getProducts,
  updateProduct,
  deleteProduct,
};
