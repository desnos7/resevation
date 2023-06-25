import React, { useState, useEffect } from "react";
import axios from "axios";
import Loader from "../components/loader";

import{ Tabs} from "antd"
const {TabsPane}= Tabs

function ProfileUser(params) {
    
return(

    <Tabs  defaultActiveKey="1">
        <TabsPane tab="reservation" key="1">
<h1>talon</h1>
        </TabsPane>
        <TabsPane tab="vation" key="2">
            <h1>salon</h1>
         </TabsPane>
        

    </Tabs>
)



}



export default ProfileUser