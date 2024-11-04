/* eslint-disable react/prop-types */
 import { useState } from 'react';
import './TableLayout.css'
import MessageWindow from '../MessageWindow/MessageWindow';
import EmailSender from '../emailSender/EmailSender';

const TableLayout = ({ dataFromTable }) => {
  const[showMessageWindow,setShowMessageWindow]=useState(false)

  const handleButtonClick=()=>{
    setShowMessageWindow(true);
     
  }
  return (
    <div className="table-layout">
      <div><p>Below is the table layout</p></div>
      {dataFromTable.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Sr. No</th>
              <th>Constituency</th>
              <th>Name of Village</th>
              <th>Date of Allotment</th>
              <th>Date of Completion</th>
              <th>Letter No dated</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {dataFromTable.map((row, index) => (
              <tr key={index}>
                 <td>{row.SrNo}</td>
                <td>{row.Constituency}</td>
                <td>{row.NameofVillage}</td>
                <td>{row.Dateofallotment}</td>
                <td>{row.Dateofcompletion}</td>
                <td>{row.LetterNodated}</td>
                <td><button className='btn-status' onClick={()=>handleButtonClick()}>{row.Remarks}</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <h4>Fetching data.....</h4>
      )}
     {showMessageWindow&& <EmailSender/>}
    </div>
  );
};

export default TableLayout;
