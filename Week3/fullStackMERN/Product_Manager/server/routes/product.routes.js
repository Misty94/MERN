const ProductController = require("../controllers/product.controller");

module.exports = (app) => {
    app.post("/api/product/new", ProductController.createProduct);
    app.get("/api/products/all", ProductController.findAllProducts);
    app.put("/api/product/update/:id", ProductController.updateProduct);
    app.get("/api/product/:id", ProductController.displayOne);
    app.delete("/api/product/delete/:id", ProductController.deleteProduct);
}