import express from "express";
import ProductController from "../controllers/product.controller.js";

const router = express.Router();

router.post("/", ProductController.createProduct);
router.get("/", ProductController.getProducts);
router.put("/", ProductController.updateProduct);
router.delete("/:id", ProductController.deleteProduct);

export default router;
