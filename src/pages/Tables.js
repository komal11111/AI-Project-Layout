import React from "react";
import { Helmet } from 'react-helmet';

import Layout from "../components/Layout";
import Tables from "../containers/Table"

const Table = () => {
  return (
    <Layout title="Event Voilation Table">
      <div style={{backgroundColor:'lightblue',height:'90px',marginTop:'-41px',borderRadius:'10px',marginBottom:'6px' }}>
        <h3 style={{color:'blue',marginLeft:'20px'}}>
         Event Voilation Table
        </h3>
        <p style={{marginLeft:'24px'}}>
        It contains all the detailed information of the respective Events.
        </p>
      </div>
      <Tables/>
    </Layout>
  );
};
export default Table;