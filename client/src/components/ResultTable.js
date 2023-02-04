import React from 'react';
export default function ResultTable(){
    return(
<div>
    <table >
        <thead className='table-header'>
            <tr className='table-row'>
              <td>Name</td> 
              <td>Attempted</td> 
              <td>Points Earned</td> 
              <td>FinalResult</td> 
              </tr>
        </thead>
        <tbody >
            <tr className='table-body'>
            <td>svn</td> 
              <td>03</td> 
              <td>5</td> 
              <td>Passed</td> 
            </tr>
           
            </tbody>
   </table>
</div>
    )
}
