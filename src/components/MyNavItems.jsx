/* eslint-disable no-undef */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo/logo.png";
import productData from "../products.json";

const MyNavItems = () => {
  const handldeSearch = (e) => {
    const searchTerm = e.target.value;
    console.log(searchTerm);
    // Filter the Products based on the search term
    const filtered = productData.filter((product) => {
      return product.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
    console.log("filtered:", filtered);
    setFilteredProducts(filtered);
  };
  return (
    <header>
      <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
        <div className="container">
          {/* logo */}
          <Link to={"/"} className="navbar-brand">
            <img src={logo} alt="" width="90" />
          </Link>

          {/* nút toggle */}
          <button
            className="navbar-toggler bg-dark"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* menu */}
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav mx-auto">
              {/* Thanh tìm kiếm */}
              <li className="nav-item">
                <form>
                  <div className="input-group my-2">
                    <span className="input-group-text border-0  rounded-start-5">
                      <i className="icofont-search"></i>
                    </span>
                    <input
                      type="text"
                      className="form-control form-control-lg rounded-end-5 shadow"
                      name="search"
                      id="search"
                      placeholder="Tìm kiếm phim bạn muốn tìm"
                      value={null}
                      onChange={handldeSearch}
                    />
                  </div>
                </form>
              </li>
            </ul>
            {/* Menu các mục */}
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link to={"/"} className="nav-link fw-semibold">
                <i className ="icofont-home"></i>{""}
                  Trang chủ
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/theloai"} className="nav-link fw-semibold">
                  {/* Thêm icon */}
                  <i className="icofont-list"></i>{" "}
                  {/* Hoặc dùng Font Awesome: <i className="fas fa-th-list"></i> */}
                  Thể loại
                </Link>
              </li>

              <li className="nav-item">
                <Link to={"/topphim"} className="nav-link fw-semibold">
                  {/* Thêm icon */}
                  <i className="icofont-film"></i>{" "}
                  {/* Hoặc font awesome: <i className="fas fa-film"></i> */}
                  Top phim
                </Link>
              </li>

              <li className="nav-item">
                <Link to={"/lichsu"} className="nav-link fw-semibold">
                <i className="icofont-history"></i>{" "}
                  Lịch sử
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to={"/account"}
                  className="nav-link btn btn-outline-light fw-semibold px-1 mb-1 mx-1"
                >
                  <div className="account-icon">
                    <i className="icofont-user"></i>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default MyNavItems;
