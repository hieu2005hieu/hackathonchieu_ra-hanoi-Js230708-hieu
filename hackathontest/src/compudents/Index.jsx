import { TiDelete } from "react-icons/ti";
import { CgPlayListAdd } from "react-icons/cg";
import { AiFillEdit } from "react-icons/ai";
import { AiOutlineEdit } from "react-icons/ai";
import React, { useEffect, useState } from "react";
import "../compudents/index.scss";
import privateAxios from "../config/privateAxios";
import publicAxios from "../config/publicAxios";

export default function Index() {
  const [todo, setTodo] = useState({
    nameProducts: "",
  });
  const [allproducts, setAllproducts] = useState([]);
  const listproducts = async () => {
    try {
      const res = await publicAxios.get("/todo");
      setAllproducts(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    listproducts();
  }, []);
  const handleAddproducts = async () => {
    if (!todo.id) {
      try {
        const response = await privateAxios.post("/todo", todo);
        alert(response.data.message);
        listproducts();
        setTodo({
          nameProducts: "",
        });
      } catch (error) {
        alert(error.response.data.message);
      }
    } else {
      try {
        const response = await privateAxios.put(`/todo/${todo.id}`, todo);
        alert(response.data.message);
        listproducts();
        setTodo({
          nameProducts: "",
        });
      } catch (error) {
        alert(error.response.data.message);
      }
    }
  };
 
  const handleEdit = async (item) => {
    setTodo(item);
  };
 
  const handleDelete = async (id) => {
    const confirms = confirm("bạn có muốn xóa không");
    if (confirms) {
      try {
        const respones = await privateAxios.delete(`/todo/${id}`);
        alert(respones.data.message);

        setAllproducts(respones.data.result);
      } catch (error) {
        alert(error.response.data.message);
      }
    }
  };

  return (
    <>
      <div className="container">
        <h2>TODOS</h2>
        <input
          type="text"
          name="name"
          onChange={(e) => setTodo({ ...todo, nameProducts: e.target.value })}
          value={todo.nameProducts}
          placeholder="usernameProducts"
        />

        {todo.id ? (
          <button onClick={handleAddproducts} style={{backgroundColor:"red"}}>
            <AiFillEdit />
            Edit
          </button>
        ) : (
          <button onClick={handleAddproducts}>
            <CgPlayListAdd />
            Add
          </button>
        )}
        <table border={1} cellPadding={5} cellSpacing={5}>
          <thead>
            <tr>
              <th>id</th>
              <th>Tên</th>
              <th>Chức Năng</th>
            </tr>
          </thead>
          <tbody>
            {allproducts.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.id}</td>
                  <td>{item.nameProducts}</td>
                  <td>
                    <button onClick={() => handleEdit(item)}>
                      <AiOutlineEdit />
                      SỬA
                    </button>
                    <button onClick={() => handleDelete(item.id)}>
                      <TiDelete />
                      XÓA
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <h3> Số sản phẩm là: {allproducts.length} sản phẩm</h3>
      </div>
    </>
  );
}
