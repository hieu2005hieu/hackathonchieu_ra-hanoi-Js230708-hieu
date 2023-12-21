const {
    addProducs,
    renderProducs,
    deleteProducs,
    updateProducs,
} = require("../reponsitory/todo.reponsitory");

async function addProducs2(req, res) {
    
    const { nameProducts } = req.body;
    console.log(nameProducts);
    await addProducs(nameProducts);
  
    res.status(201).json({
        message: "Admin them thanh cong",
    });
}
async function render(req, res) {
    const result = await renderProducs();
    res.status(200).json(result);
}
async function deleteProducts(req, res) {
    const { id } = req.params;
    await deleteProducs(id);
    const result = await renderProducs();
    res.status(200).json({
        result,
        message:"xoa thanh cong"
    });
}
async function updateProducts(req, res) {
   
    const { id } = req.params;
    const { nameProducts } = req.body;
    const result = await updateProducs(nameProducts, id);
    console.log(result);
    res.status(200).json({
        message:" sua thanh cong"
    });
}

module.exports = {
    addProducs2,
    render,
    deleteProducts,
    updateProducts,
};
