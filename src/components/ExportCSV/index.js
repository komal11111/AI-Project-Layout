import React from 'react';
import Button from '@material-ui/core/Button';
import { CSVLink } from "react-csv";

const headers = [
  { label: "Event Type", key: "Event_Type" },
  { label: "Date And Time", key: "event_timestamp" },
  { label: "URL Address", key: "image_url" },
  { label: "Camera Id", key: "camera" },
];

const ExportCSV = (props) => {
  const { data } = props;

  return (
    <div style={{marginTop:'2%',marginBottom:'-1%'}}>
      <Button variant="contained" >
        <CSVLink
          headers={headers}
          filename="Event_Voilation_Table.csv"
          data={data}
        >
          Export CSV
        </CSVLink>
      </Button>
    </div>
  );
}


export default ExportCSV;