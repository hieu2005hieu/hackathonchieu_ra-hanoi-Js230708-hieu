const {
    addProducs2,
    render,
    deleteProducts,
    updateProducts,
} = require("../controller/todo.controller");
const { verifyToken } = require("../middleWare/middleWare");
const productRouter = (app) => {
    app.post("/todo", verifyToken, addProducs2);
    app.get("/todo", render);
    app.delete("/todo/:id", verifyToken, deleteProducts);
    app.put("/todo/:id", verifyToken, updateProducts);
};

module.exports = {
    productRouter,
};
