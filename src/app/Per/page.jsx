// 'use client'

// import "../../Styles/Per.css"
// import { useState } from "react"

// export default function Per(){
//     const [mobile, setMobile] = useState("")
//   const [mobileError, setMobileError] = useState("")

//     const validateMobile = (number) => {
//     const regex = /^[6-9]\d{9}$/
//     return regex.test(number)
//   }
//     return(


      
//         <>
//         <div className="main1_PermissionFormFill">
//             <div className="container1_PermissionFormFill">
// <div className="rgp-container">

//   <h1 className="rgp-title">RECEPTION PERMISSION</h1>

//   <section className="rgp-section">
//     <h2>Company Details</h2>

//     <div className="rgp-grid">
//       <div>
//         <label>Company Name</label>
//         <input type="text" />
//       </div>
//       <div>
//         <label>Unit / Plant Location</label>
//         <input type="text" />
//       </div>
//       <div>
//         <label>GSTIN</label>
//         <input type="text" />
//       </div>
//     </div>
//   </section>

//   <section className="rgp-section">
//     <h2>Gate Pass Details</h2>

//     <div className="rgp-grid">
//       <div>
//         <label>RGP No.</label>
//         <input type="text" />
//       </div>
//       <div>
//         <label>RGP Date</label>
//         <input type="date" />
//       </div>
//       <div>
//         <label>Type</label>
//         <input type="text" value="Returnable" readOnly />
//       </div>
//       <div>
//         <label>Expected Return Date</label>
//         <input type="date" />
//       </div>
//     </div>

//     <div className="rgp-checkbox">
//       <label>Purpose:</label>
//       <span><input type="checkbox" /> Testing</span>
//       <span><input type="checkbox" /> Repair</span>
//       <span><input type="checkbox" /> Calibration</span>
//       <span><input type="checkbox" /> Demo</span>
//       <span><input type="checkbox" /> Job Work</span>
//       <span>
//         <input type="checkbox" /> Other
//         <input type="text" className="inline-input" />
//       </span>
//     </div>
//   </section>

//   <section className="rgp-section">
//     <h2>Party / Location Details</h2>

//     <div className="rgp-grid">
//       <div>
//         <label>Issued To (Vendor / Customer / Site)</label>
//         <input type="text" />
//       </div>
//       <div>
//         <label>Address</label>
//         <input type="text" />
//       </div>
//       <div>
//         <label>GSTIN (if applicable)</label>
//         <input type="text" />
//       </div>

//               <div>
//                 <label>Contact Person & Mobile</label>
//                 <input
//                   type="text"
//                   value={mobile}
//                   placeholder="Mobile..."
//                   maxLength={10}
//                   onChange={(e) => {
//                     const onlyNumbers = e.target.value.replace(/[^0-9]/g, "")
//                     setMobile(onlyNumbers)
//                     setMobileError(
//                       validateMobile(onlyNumbers)
//                         ? ""
//                         : "Enter valid 10-digit Indian mobile number"
//                     )
//                   }}
//                 />
//                 {mobileError && <p style={{ color: "red"  , fontFamily:"Roboto-Regular" }}>{mobileError}</p>}
//               </div>



//     </div>
//   </section>
// <button type="submit">Submit</button>
// </div>
//             </div>
//         </div>
//         </>
//     )
// }



'use client'

import "../../Styles/Per.css"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function Per() {
  const router = useRouter()

  const [mobileError, setMobileError] = useState("")
  const [form, setForm] = useState({
    companyName: "",
    plantLocation: "",
    gstin: "",
    rgpNo: "",
    rgpDate: "",
    expectedReturnDate: "",
    issuedTo: "",
    address: "",
    partyGstin: "",
    mobile: ""
  })

  const validateMobile = (number) => /^[6-9]\d{9}$/.test(number)

  const handleChange = (e) => {
    const { name, value } = e.target

    if (name === "mobile") {
      const onlyNumbers = value.replace(/[^0-9]/g, "")
      setForm({ ...form, mobile: onlyNumbers })
      setMobileError(
        validateMobile(onlyNumbers)
          ? ""
          : "Enter valid 10-digit Indian mobile number"
      )
    } else {
      setForm({ ...form, [name]: value })
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validateMobile(form.mobile)) {
      setMobileError("Enter valid mobile number")
      return
    }

    const res = await fetch("/api/Register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    })

    const data = await res.json()

    if (!res.ok) {
      alert(data.message)
      return
    }

    router.push("/ThankYou")
  }

  return (
    <div className="main1_PermissionFormFill">
      <div className="container1_PermissionFormFill">
        <div className="rgp-container">

          <h1 className="rgp-title">RECEPTION PERMISSION</h1>

          <form onSubmit={handleSubmit}>

            <section className="rgp-section">
              <h2>Company Details</h2>

              <div className="rgp-grid">
                <div>
                  <label>Company Name</label>
                  <input name="companyName" value={form.companyName} onChange={handleChange} />
                </div>

                <div>
                  <label>Unit / Plant Location</label>
                  <input name="plantLocation" value={form.plantLocation} onChange={handleChange} />
                </div>

                <div>
                  <label>GSTIN</label>
                  <input name="gstin" value={form.gstin} onChange={handleChange} />
                </div>
              </div>
            </section>

            <section className="rgp-section">
              <h2>Gate Pass Details</h2>

              <div className="rgp-grid">
                <div>
                  <label>RGP No.</label>
                  <input name="rgpNo" value={form.rgpNo} onChange={handleChange} />
                </div>

                <div>
                  <label>RGP Date</label>
                  <input type="date" name="rgpDate" value={form.rgpDate} onChange={handleChange} />
                </div>

                <div>
                  <label>Type</label>
                  <input value="Returnable" readOnly />
                </div>

                <div>
                  <label>Expected Return Date</label>
                  <input
                    type="date"
                    name="expectedReturnDate"
                    value={form.expectedReturnDate}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </section>

            <section className="rgp-section">
              <h2>Party / Location Details</h2>

              <div className="rgp-grid">
                <div>
                  <label>Issued To</label>
                  <input name="issuedTo" value={form.issuedTo} onChange={handleChange} />
                </div>

                <div>
                  <label>Address</label>
                  <input name="address" value={form.address} onChange={handleChange} />
                </div>

                <div>
                  <label>GSTIN (if applicable)</label>
                  <input name="partyGstin" value={form.partyGstin} onChange={handleChange} />
                </div>

                <div>
                  <label>Contact Mobile</label>
                  <input
                    name="mobile"
                    maxLength={10}
                    value={form.mobile}
                    onChange={handleChange}
                  />
                  {mobileError && <p style={{ color: "red" }}>{mobileError}</p>}
                </div>
              </div>
            </section>

            <button type="submit">Submit</button>
          </form>

        </div>
      </div>
    </div>
  )
}