// export default function Table(){
//     return(
//         <>
//         <div className="main1_Table">
//             <div className="container1_Table">
//                 <div className="col1_Table">
// <table>
//     <thead>
//         <tr>
//             <th>Company Name</th>
//             <th>Unit</th>
//             <th>GSTIN</th>
//             <th>Which meet</th>
//             <th>RGP No.</th>
//             <th>RGP Date</th>
//             <th>Expected Return Date</th>
//             <th>Contact Mobile</th>
//         </tr>
//     </thead>
//     <tbody>
//         <tr>
//             <td></td>
//             <td></td>
//             <td></td>
//             <td></td>
//             <td></td>
//             <td></td>
//         </tr>
//     </tbody>
// </table>
//                 </div>
//             </div>
//         </div>
//         </>
//     )
// }







// 'use client'
// import { useEffect, useState } from "react"
// import "../../Styles/Table.css"

// export default function Table() {
//   const [rows, setRows] = useState([])

//   useEffect(() => {
//     const data = JSON.parse(localStorage.getItem("permissionData")) || []
//     setRows(data)
//   }, [])

//   return (
//     <table border="1" cellPadding="8">
//       <thead>
//         <tr>
//           <th>Company Name</th>
//           <th>Unit</th>
//           <th>GSTIN</th>
//           <th>Department</th>
//           <th>RGP No</th>
//           <th>RGP Date</th>
//           <th>Expected Return</th>
//           <th>Mobile</th>
//         </tr>
//       </thead>

//       <tbody>
//         {rows.length === 0 ? (
//           <tr>
//             <td colSpan="8" align="center">No Data</td>
//           </tr>
//         ) : (
//           rows.map((r, i) => (
//             <tr key={i}>
//               <td>{r.companyName}</td>
//               <td>{r.plantLocation}</td>
//               <td>{r.gstin}</td>
//               <td>{r.department}</td>
//               <td>{r.rgpNo}</td>
//               <td>{r.rgpDate}</td>
//               <td>{r.expectedReturnDate}</td>
//               <td>{r.mobile}</td>
//             </tr>
//           ))
//         )}
//       </tbody>
//     </table>
//   )
// }






'use client'

import { useEffect, useState } from "react"
import "../../Styles/Table.css"

export default function Table() {
  const [rows, setRows] = useState([])

  useEffect(() => {
    const data =
      JSON.parse(localStorage.getItem("permissionData")) || []
    setRows(data)
  }, [])

  return (
    <div className="main1_Table">
      <div className="container1_Table">
        <div className="col1_Table">

          <table>
            <thead>
              <tr>
                <th>Company</th>
                <th>Unit</th>
                <th>GSTIN</th>
                <th>Department</th>
                <th>RGP No</th>
                <th>RGP Date</th>
                <th>Expected Return</th>
                <th>Mobile</th>
              </tr>
            </thead>

            <tbody>
              {rows.length === 0 ? (
                <tr>
                  <td colSpan="8">No Data Available</td>
                </tr>
              ) : (
                rows.map((r, i) => (
                  <tr key={i}>
                    <td>{r.companyName}</td>
                    <td>{r.plantLocation}</td>
                    <td>{r.gstin}</td>
                    <td>{r.department}</td>
                    <td>{r.rgpNo}</td>
                    <td>{r.rgpDate}</td>
                    <td>{r.expectedReturnDate}</td>
                    <td>{r.mobile}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>

        </div>
      </div>
    </div>
  )
}
