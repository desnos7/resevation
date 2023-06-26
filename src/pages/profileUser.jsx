import React, { useState, useEffect } from "react";

import Card from "react-bootstrap/Card";
import {Form} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import axios from "axios";
import Loader from "../components/loader";
import Header from "../components/header.jsx";

import { Tabs } from "antd";
const { TabsPane } = Tabs;

function ProfileUser(params) {
  return (
    <>
      <Header />
      <div className="m-5 bg-light shadow  p-5 mb-5 bg-white rounded">
        <div className="mt-5 p-5">
          <h1 className="text-center  ">PROFILE UTILISATEUR</h1>
          <div className="m-5 ">
            <Tabs defaultActiveKey="1" className="mt-5 p-5">
              <TabsPane tab="PROFILE" key="1">
                <Card
                  style={{ width: "38rem", height: "20rem" }}
                  className="mt-5 p-5"
                >
                  <Card.Body>
                    <Card.Title>Nom utilisateur:</Card.Title>
                    <Card.Title>Emai utilisateur:</Card.Title>
                    <Card.Title>ADMIN UTILISATEUR:</Card.Title>
                  </Card.Body>
                </Card>
              </TabsPane>
              <TabsPane tab="RESERVATION" key="2">
                <Card
                  style={{ width: "38rem", height: "23rem" }}
                  className="mt-5 p-5"
                >
                  <Card.Body>
                  <Form>
                    <Card.Title>Nom produit:</Card.Title>
                    <Card.Title>Reservation ID:</Card.Title>
                    <Card.Title>Date Debut:</Card.Title>
                    <Card.Title>Date Fin:</Card.Title>
                    <Card.Title>MONTANT:</Card.Title>
                    <Card.Title>STATUS:Confirme // annuler</Card.Title>
                   
                     <Button>ANNULER RESERVATION</Button>
                        
                    </Form>
                  </Card.Body>
                </Card>
              </TabsPane>
            </Tabs>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfileUser;
