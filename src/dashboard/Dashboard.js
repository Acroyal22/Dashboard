import React from "react";
import { Bar } from "react-chartjs-2";

const Dashboard = () => {
  const state = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "July",
      "Aug",
      "Nov",
      "Dec",
    ],

    datasets: [
      {
        label: "Income Expenses",
        hoverBorderColor: "rgba(255,99,132,1)",
        backgroundColor: "rgb(28, 52, 121)",
        borderColor: "rgba(0,0,0,1,8,9,5)",
        borderWidth: 2,
        data: [65, 59, 60, 81, 56, 40, 30, 20, 59, 34, 67, 43],
      },
    ],
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="">
            <nav className="sidebar" style={{width:"13rem"}}>
              <div className="logo d-flex justify-content-between">
                <a>
                  <img src="../img/icon/shopware_32px.png" style={{width:"50px"}} />
                </a>
                <strong className="side_menu_title">ShopWare</strong>
              </div>
              <ul id="sidebar_menu">
                <li className="side_menu_title">
                  <span>Menu</span>
                </li>
                <li className="mm-active">
                  <a className="has-arrow" href="#" aria-expanded="false">
                  
                    <img
                      src="img/icon/overview_32px.png"
                      alt=""
                      className="mm-active"
                    />
                    <span>Overview</span>
                  </a>
                </li>

                <li className="">
                  <a className="has-arrow" href="#" aria-expanded="false">
                    <img src="img/icon/purchase_order_32px.png" alt="" />
                    <span>Orders</span>
                  </a>
                </li>

                <li className="">
                  <a className="has-arrow" href="#" aria-expanded="false">
                    <img src="img/icon/business_32px.png" alt="" />
                    <span>Products</span>
                  </a>
                </li>

                <li className="">
                  <a className="has-arrow" href="#" aria-expanded="false">
                    <img src="img/icon/settings_32px.png" alt="" />
                    <span>Settings</span>
                  </a>
                </li>

                <li className="">
                  <a className="has-arrow" href="#" aria-expanded="false">
                    <strong>Business</strong>
                  </a>
                </li>

                <li className="">
                  <a className="has-arrow" href="#" aria-expanded="false">
                    <img src="img/icon/around_the_globe_32px.png" alt="" />
                    <span>Shipment</span>
                  </a>
                </li>
                <li className="">
                  <a className="has-arrow" href="#" aria-expanded="false">
                    <img src="img/icon/user_groups_32px.png" alt="" />
                    <span>Employee</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      {/* <div className="p-2 flex-fill"> */}
      <section className="main_content dashboard_part">
        {/* <div className="container-fluid no-gutters"> */}
        <div className="row">
          <div className="col-md-9 p-0" style={{ marginLeft: "-90px" }}>
            <div className="header_iner d-flex justify-content-between align-items-center">
              {/* <div className="sidebar_icon d-lg-none">
                      <i className="ti-menu"></i>
                    </div> */}
              <div className="serach_field-area">
                <div className="search_inner">
                  <form action="#">
                    <div className="search_field">
                      <input type="text" placeholder="Search for products" />
                    </div>
                  </form>

                  <div className="header">
                    <h2>Overview</h2>
                  </div>

                  <div className="row">
                    <div className="column" style={{ background: "#F5F7FD" }}>
                      <img src="/img/icon/market_square_32px.png" />
                      <span style={{ color: "green" }}> +24%</span>
                      <br />
                      <strong>$27,340.00</strong>
                      <p style={{ color: "black" }}>Total sales</p>
                    </div>
                    <div className="column" style={{ background: "#F5F7FD" }}>
                      <img src="/img/icon/slice_32px.png" />
                      <span style={{ color: "red" }}> -32%</span>
                      <br />
                      <strong>$27,340.00</strong>
                      <p style={{ color: "black" }}>Total expenses</p>
                    </div>
                    <div className="column" style={{ background: "#F5F7FD" }}>
                      <img src="/img/icon/user_group_2_32px.png" />
                      <span style={{ color: "green" }}> +48%</span>
                      <br />
                      <strong>$18,260.00</strong>
                      <p style={{ color: "black" }}>Total Visitors</p>
                    </div>
                    <div className="column" style={{ background: "#F5F7FD" }}>
                      <img src="/img/icon/shopping_cart_32px.png" />
                      <span style={{ color: "red" }}> -12%</span>
                      <br />
                      <strong>$11,340.00</strong>
                      <p style={{ color: "black" }}>Total sales</p>
                    </div>
                  </div>

                  <div className="card" style={{ width: "42rem" }}>
                    <div className="card-body">
                      <Bar
                        data={state}
                        options={{
                          title: {
                            display: true,
                            text: "Average sales per month",
                            fontSize: 20,
                          },
                          legend: {
                            display: true,
                            position: "right",
                          },
                        }}
                      />
                    </div>
                  </div>

                  <div className="card" style={{ width: "42rem" }}>
                    Popular Products
                    <div className="card-body">
                      <table className="table table-borderless ">
                        <thead>
                          <tr style={{ background: "#F5F7FD" }}>
                            <th scope="col">Photos</th>
                            <th scope="col">Name</th>
                            <th scope="col">Date</th>
                            <th scope="col">Category</th>
                            <th scope="col">Brand</th>
                            <th scope="col">Price</th>
                            <th scope="col">Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">
                              <img
                                src="/img/icon/headset.png"
                                style={{ height: "2rem", width: "40px" }}
                              />
                            </th>
                            <td>
                              Cowboy Hat <br />
                              <small>#222456789</small>
                            </td>{" "}
                            <td>Aug,12,2020</td>
                            <td>Fashion</td>
                            <td>Swallow</td>
                            <td style={{ color: "green" }}>$99.89</td>
                            <td>
                              Availaible
                              <small>
                                <br />
                                18k viewers
                              </small>
                            </td>
                          </tr>

                          <tr>
                            <img
                              src="/img/icon/samsung.png"
                              style={{ height: "3rem", width: "50px" }}
                            />
                            <td>
                              Smartphone
                              <br />
                              <small>#56765548726</small>
                            </td>
                            <td>Aug,12,2020</td>
                            <td>Gadget</td>
                            <td>Mito</td>
                            <td style={{ color: "green" }}>$99.89</td>
                            <td>
                              Availaible
                              <small>
                                <br />
                                18k viewers
                              </small>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* rigth bar section */}
          <div className="col-md-3">
            {/* <div className="card">
              <div className="circle">
                <img
                  src="/img/icon/bell_24px.png"
                  className="card-img-top w3-circle"
                  alt="..."
                  style={{ width: "20px"  }}
                />
              </div>

              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">An item</li>
                <li className="list-group-item">A second item</li>
                <li className="list-group-item">A third item</li>
              </ul>
              <div className="card-body">
                <a href="#" className="card-link">
                  Card link
                </a>
                <a href="#" className="card-link">
                  Another link
                </a>
              </div>
            </div>
          </div> */}
            <div className="container-fluid" >
              <div
                className="card text-primary "
                style={{
                  width: "19rem",
                  height: "62rem",
                  marginTop: "0px",
                  marginLeft: "-7px",
                }}
              >
                <div>
                  <div className="circle" style={{ marginLeft: "-5px" }}>
                    <div>
                      <img
                        src="/img/icon/bell_24px.png"
                        className="card-img-top w3-circle"
                        alt="..."
                        style={{ width: "20px" }}
                      />
                    </div>
                    <div
                      className="circle"
                      style={{ marginLeft: "235px", marginTop: "-18px" }}
                    >
                      <img
                        src="/img/icon/crayon_24px.png"
                        className="card-img-top w3-circle"
                        alt="..."
                        style={{ width: "20px" }}
                      />
                    </div>
                  </div>
                  <div
                    className=""
                    style={{
                      width: "100px",
                      height: "100px",
                      marginTop: "25px",
                      marginLeft: "80px",
                    }}
                  >
                    <img
                      src="/img/icon/download.png"
                      className="card-img-top w3-circle"
                      alt="..."
                    />
                    <strong style={{ color: "black" }}>Black Castrol</strong>
                  </div>

                  <div className="card-body"></div>
                  <div className="card-body"></div>
                  <div className="card" style={{ width: "260px", height: "20px" }}>
                    <img
                      src="/img/icon/bag_30px.png"
                      style={{
                        width: "18px",
                        marginTop: "-7px",
                        marginLeft: "-13px",
                      }}
                    />
                    <strong
                      style={{
                        color: "black",
                        marginLeft: "15px",
                        marginTop: "-30px",
                      }}
                    >
                      218
                    </strong>
                    <p
                      style={{
                        color: "black",
                        marginLeft: "15px",
                        marginTop: "-5px",
                      }}
                    >
                      products
                      <img
                        src="/img/icon/vertical_line_16px.png"
                        style={{
                          color: "black",
                          marginLeft: "13px",
                          marginTop: "-11px",
                          height: "25px",
                        }}
                      />
                    </p>

                    <img
                      src="/img/icon/user_groups_50px.png"
                      style={{
                        width: "16px",
                        marginTop: "-29px",
                        marginLeft: "126px",
                      }}
                    />
                    <strong
                      style={{
                        color: "black",
                        marginLeft: "155px",
                        marginTop: "-25px",
                      }}
                    >
                      2,580
                    </strong>
                    <p
                      style={{
                        color: "black",
                        marginLeft: "153px",
                        marginTop: "-5px",
                      }}
                    >
                      followers
                    </p>
                  </div>
                </div>

                <strong
                  style={{
                    color: "black",
                    paddingTop: "80px",
                    marginTop: "-25px",
                  }}
                >
                  Reputation
                </strong>
                <div
                  className="card"
                  style={{ width: "250px", height: "30px" }}
                >
                  <strong
                    style={{
                      color: "black",
                      marginTop: "-20px",
                      marginLeft: "35px",
                    }}
                  >
                    Star seller
                  </strong>
                  <img
                    style={{
                      width: "30px",
                      height: "20px",
                      marginTop: "-9px",
                      marginLeft: "-21px",
                    }}
                    src="/img/icon/box_96px.png"
                  />

                  <div className="container">
                    {/* <small style={{color:"black",marginTop:"-25px"}}>Star seller</small> */}

                    <div
                      className="progress"
                      style={{
                        marginRight:"-50px",
                        width: "190px",
                        height: "10px",
                        marginTop: "-8px",
                        color: "orange",
                      }}
                    >
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow="200"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: "85%" }}
                      >
                        85%
                      </div>
                    </div>
                  </div>
                </div>

                <strong style={{ color: "black", marginTop: "35px" }}>
                  Recent Orders
                </strong>
                <strong style={{ marginTop: "-20px",marginLeft:"200px" }}>See All</strong>
                
  
                <div className="card" style={{ width: "16rem" }}>
                    
                    <div className="card-body" style={{marginLeft:"-48px"}}>
                      <table className="table table-borderless ">

                        <tbody>
                          <tr >
                            <th scope="row">
                              <img
                                src="/img/icon/headset.png"
                                style={{ height: "2rem", width: "40px" }}
                              />
                            </th>
                            <td style={{marginRight:"25px"}}>
                              Cowboy Hat <br />
                              <small>2 minutes ago</small>
                            </td>{" "}
                            
                            <td style={{ color: "green" }}>+$80.00</td>
                            
                          </tr>

                          <tr>
                            <img
                              src="/img/icon/samsung.png"
                              style={{ height: "3rem", width: "50px" }}
                            />
                            <td>
                              Smartphone
                              <br />
                              <small>2 minutes ago</small>
                            </td>
                           
                            <td style={{ color: "green" }}>+$80.00</td>
                           
                          </tr>
                          <tr>
                            <img
                              src="/img/icon/71GT+6XuISL._AC_UL1300_.jpg"
                              style={{ height: "40px", width: "30px",marginLeft:"15px" }}
                            />
                            <td>
                              Wristwatch
                              <br />
                              <small>2 minutes ago</small>
                            </td>
                           
                            <td style={{ color: "green" }}>+$80.00</td>
                           
                          </tr>
                        
                        </tbody>
                      </table>
                    </div>
                  </div>

              </div>
             
            </div>
          </div>
          {/* </div> */}
        </div>
      </section>
      {/* </div> */}
      {/* <div className="row">
      <div className="col-xs">
       */}
    </div>
    //</div>
  );
};

export default Dashboard;
