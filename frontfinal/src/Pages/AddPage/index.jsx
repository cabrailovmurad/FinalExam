import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./style.scss";
import { watchDelete, watchPost } from "../../Service/watchsCrud";
const AddPage = () => {
  const [search, setSearch] = useState("");
  const [property, setProperty] = useState(null);
  const [api, setApi] = useState([]);
  async function getApi() {
    await fetch("http://localhost:3000")
      .then((res) => res.json())
      .then((data) => setApi(data));
  }
  async function handleDelete(id) {
    await watchDelete(id);
    await getApi();
  }
  useEffect(() => {
    getApi();
  }, []);

  return (
    <>
      <Helmet>
        <title>Add Page</title>
      </Helmet>
      <section className="addPage">
        <div className="addPage_container">
          <div className="addPage_container_formik">
            <Formik
              initialValues={{ img: "", title: "", price: "" , description: "", rating: ""}}
              validationSchema={Yup.object({
                image: Yup.string().min(2, "too short!").required("Required"),
                title: Yup.string().min(2, "too short!").required("Required"),
                price: Yup.string().min(1, "too short!").required("Required"),
                description: Yup.string().min(2, "too short!").required("Required"),
                rating: Yup.string().min(1, "too short!").required("Required"),
              })}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  watchPost(values);
                  getApi();
                  setSubmitting(false);
                }, 400);
              }}
            >
              <Form>
                <div>
                  <label htmlFor="image">Image</label>
                  <Field name="image" type="text" />
                  <ErrorMessage name="image" />
                </div>
                <div>
                  <label htmlFor="title">Title</label>
                  <Field name="title" type="text" />
                  <ErrorMessage name="title" />
                </div>
                <div>
                  <label htmlFor="price">price</label>
                  <Field name="price" type="number" />
                  <ErrorMessage name="price" />
                </div>
                <div>
                  <label htmlFor="description">description</label>
                  <Field name="description" type="text" />
                  <ErrorMessage name="description" />
                </div>
                <div>
                  <label htmlFor="rating">rating</label>
                  <Field name="rating" type="text" />
                  <ErrorMessage name="rating" />
                </div>
                <button type="submit">Submit</button>
              </Form>
            </Formik>
          </div>
          <div className="addPage_container_table">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button
              onClick={() =>
                setProperty({ choosenProperty: "title", asc: true })
              }
            >
              a-Z
            </button>
            <button
              onClick={() =>
                setProperty({ choosenProperty: "title", asc: false })
              }
            >
              Z-a
            </button>
            <button
              onClick={() =>
                setProperty({ choosenProperty: "price", asc: true })
              }
            >
              increase
            </button>
            <button
              onClick={() =>
                setProperty({ choosenProperty: "price", asc: false })
              }
            >
              decrease
            </button>
            <button onClick={() => setProperty(null)}>Default</button>
            <table>
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>description</th>
                  <th>rating</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {api
                  .filter((x) =>
                    x.title.toLowerCase().includes(search.toLowerCase())
                  )
                  .sort((a, b) => {
                    if (property && property.asc === true) {
                      return a[property.choosenProperty]
                        .toString()
                        .toLowerCase() >
                        b[property.choosenProperty].toString().toLowerCase()
                        ? 1
                        : b[property.choosenProperty].toString().toLowerCase() >
                          a[property.choosenProperty].toString().toLowerCase()
                        ? -1
                        : 0;
                    } else if (property && property.asc === false) {
                      return a[property.choosenProperty]
                        .toString()
                        .toLowerCase() <
                        b[property.choosenProperty].toString().toLowerCase()
                        ? 1
                        : b[property.choosenProperty].toString().toLowerCase() <
                          a[property.choosenProperty].toString().toLowerCase()
                        ? -1
                        : 0;
                    } else {
                      return 0;
                    }
                  })
                  .map((x) => {
                    return (
                      <tr key={x._id}>
                        <td>
                          <img src={x.image} alt="" />
                        </td>
                        <td>{x.title}</td>
                        <td>{x.price}$</td>
                        <td>{x.description}</td>
                        <td>{x.rating}</td>
                        <td>
                          <button onClick={() => handleDelete(x._id)}>
                            Delete
                          </button>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
};

export default AddPage;
