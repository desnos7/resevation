import React, { useState, useEffect } from "react";
import axios from "axios";
import Loader from "../components/loader";
import Header from "../components/header.jsx";

import { Tabs } from "antd";
const { TabsPane } = Tabs;

function Admin(params) {
  return (
    <>
      <Header />

      <div className="m-5 bg-light shadow  p-5 mb-5 bg-white rounded">
        <div className="mt-5 p-5">
          <h1 className="text-center  ">ADMIN</h1>
          <div className="m-5 ">
            <Tabs
              defaultActiveKey="1"
              size="size"
              className="text-center text "
            >
              <TabsPane
                tab="Reservation"
                key="1"
                className="bg-danger text-success "
              >
                <table class="table table-striped table-dark">
                  <thead>
                    <tr>
                      <th scope="col">ReservationId</th>
                      <th scope="col">UserId</th>
                      <th scope="col">Date Debut</th>
                      <th scope="col">Date Fin</th>
                      <th scope="col">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                      <td>@mdo</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>@fat</td>
                      <td>@mdo</td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>Larry</td>
                      <td>the Bird</td>
                      <td>@twitter</td>
                      <td>@mdo</td>
                    </tr>
                  </tbody>
                </table>
              </TabsPane>
              <TabsPane tab="Vehicules" key="2">
                <table class="table table-striped table-dark">
                  <thead>
                    <tr>
                      <th scope="col">UserId</th>
                      <th scope="col">Nom</th>
                      <th scope="col">Email</th>
                      <th scope="col">Admin</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                    </tr>
                  </tbody>
                </table>
              </TabsPane>
              <TabsPane tab="Ajouter Vehicules" key="3">
                <h1>reservez</h1>
              </TabsPane>
              <TabsPane tab="Utilisateurs" key="4">
                <table class="table table-striped table-dark">
                  <thead>
                    <tr>
                      <th scope="col">UserId</th>
                      <th scope="col">Nom</th>
                      <th scope="col">Email</th>
                      <th scope="col">Admin</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                    </tr>
                  </tbody>
                </table>
              </TabsPane>
            </Tabs>
          </div>
        </div>
      </div>
    </>
  );
}

export default Admin;
