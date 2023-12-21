const db = require("../config/db.config");
async function addProducs(nameTodo) {
    const [result] = await db.execute("insert into products (nameProducts) values (?)", [
        nameTodo,
    ]);
    return result;
}
async function renderProducs(nameTodo) {
    const [result] = await db.execute("select * from products");
    return result;
}
async function deleteProducs(id) {
    const [result] = await db.execute("delete from products where id = ?", [id]);
    return result;
}
async function updateProducs(nameTodo, id) {
    console.log("19",nameTodo);
    console.log("20",id);
    const [result] = await db.execute(
        "update products set nameProducts = ? where id = ?",
        [nameTodo, id]
    );
    return result;
}

module.exports = {
    addProducs,
    renderProducs,
    deleteProducs,
    updateProducs,
};
