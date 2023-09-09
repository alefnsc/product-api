import supertest from "supertest";
import app from "../src/index.js";
import db from "../repositories/db.js";

const request = supertest(app);

describe("Product Integration Test", () => {
  beforeEach(async () => {
    await db.product.destroy({ where: {} });
  });

  afterAll(async () => await db.sequelize.close());

  const product1 = {
    Code: "new",
    Description: "Car",
    Price: 5000,
  };

  const updatedProduct1 = {
    Code: "new",
    Description: "Car",
    Price: 7000,
  };

  const unmatchedProduct1 = {
    Code: "inexistent",
    Description: "Car",
    Price: 7000,
  };

  const invalidProduct1 = {
    Code: "new",
    Description: "Car",
  };

  const invalidResponse = "Required field is missing: Price";
  const expectedResponse = "Product created successful";
  const existentProductResponse = "Existent product updated successful";
  const notFoundResponse = "Product with provided code not found";
  const deletedResponse = "Product deleted successful";

  test("Get on /product return 200", async () => {
    const response = await request.get("/product");
    expect(response.status).toBe(200);
  });

  test("Post new product on /product return 201", async () => {
    const response = await request.post("/product").send(product1);
    expect(response.body).toMatchSnapshot(expectedResponse);
    expect(response.status).toBe(201);
  });

  test("Post existing product on /product return 200", async () => {
    db.product.create(product1);
    const response = await request.post("/product").send(updatedProduct1);
    expect(response.body).toMatchSnapshot(existentProductResponse);
    expect(response.status).toBe(200);
  });

  test("Post invalid object on /product return 400", async () => {
    const response = await request.post("/product").send(invalidProduct1);
    expect(response.body).toMatchSnapshot(invalidResponse);
    expect(response.status).toBe(400);
  });

  test("Put product on /product return 200", async () => {
    db.product.create(product1);
    const response = await request.put("/product").send(updatedProduct1);
    expect(response.status).toBe(200);
  });

  test("Put invalid object on /product return 400", async () => {
    const response = await request.put("/product").send(invalidProduct1);
    expect(response.body).toMatchSnapshot(invalidResponse);
    expect(response.status).toBe(400);
  });

  test("Put inexistent object on /product return 405", async () => {
    const response = await request.put("/product").send(unmatchedProduct1);
    expect(response.body).toMatchSnapshot(notFoundResponse);
    expect(response.status).toBe(405);
  });

  test("Delete existent product on /product/:id return 200", async () => {
    db.product.create(product1);
    const response = await request.delete("/product/new");
    expect(response.body).toMatchSnapshot(deletedResponse);
    expect(response.status).toBe(200);
  });

  test("Delete inexistent object on /product/:id return 405", async () => {
    const response = await request.delete("/product/inexistent");
    expect(response.body).toMatchSnapshot(notFoundResponse);
    expect(response.status).toBe(405);
  });
});
