









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
    department: "",
    rgpNo: "",
    rgpDate: "",
    expectedReturnDate: "",
    issuedTo: "",
    address: "",
    partyGstin: "",
    mobile: ""
  })


const validateMobile = (number) => /^[6-9]\d{9}$/.test(number)


const handleSubmit = async (e) => {
  e.preventDefault()

  if (!validateMobile(form.mobile)) {
    setMobileError("Enter valid mobile number")
    return
  }


  const oldData =
    JSON.parse(localStorage.getItem("permissionData")) || []

  const updatedData = [...oldData, form]

  localStorage.setItem(
    "permissionData",
    JSON.stringify(updatedData)
  )


  try {
    const res = await fetch("/api/Register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    })

    const data = await res.json()

    if (!res.ok) {
      alert(data.message || "API save failed")
      return
    }

    alert("Data saved in Table + Server")

  } catch (error) {
    alert("Server not reachable, saved locally only ")
  }


  setForm({
    companyName: "",
    plantLocation: "",
    gstin: "",
    department: "",
    rgpNo: "",
    rgpDate: "",
    expectedReturnDate: "",
    issuedTo: "",
    address: "",
    partyGstin: "",
    mobile: ""
  })


  router.push("/ThankYou")
}
  

  const handleChange = (e) => {
    const { name, value } = e.target

    if (name === "mobile") {
      const onlyNumbers = value.replace(/\D/g, "")
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
                  <input
                    name="companyName"
                    value={form.companyName}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <label>Unit / Plant Location</label>
                  <input
                    name="plantLocation"
                    value={form.plantLocation}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <label>GSTIN</label>
                  <input
                    name="gstin"
                    value={form.gstin}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label>Which Department are you meeting?</label>
                  <select
                    name="department"
                    value={form.department}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select</option>
                    <option value="EV">EV</option>
                    <option value="Sales">Sales</option>
                    <option value="Quality">Quality</option>
                    <option value="R&D">R&D</option>
                  </select>
                </div>
              </div>
            </section>

            <section className="rgp-section">
              <h2>Gate Pass Details</h2>

              <div className="rgp-grid">
                <div>
                  <label>RGP No.</label>
                  <input
                    name="rgpNo"
                    value={form.rgpNo}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <label>RGP Date</label>
                  <input
                    type="date"
                    name="rgpDate"
                    value={form.rgpDate}
                    onChange={handleChange}
                    required
                  />
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
                  <input
                    name="issuedTo"
                    value={form.issuedTo}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label>Address</label>
                  <input
                    name="address"
                    value={form.address}
                    onChange={handleChange}
                  />
                </div>


                <div>
                  <label>GSTIN (if applicable)</label>
                  <input
                    name="partyGstin"
                    value={form.partyGstin}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label>Contact Mobile</label>
                  <input
                    type="tel"
                    name="mobile"
                    maxLength={10}
                    value={form.mobile}
                    onChange={handleChange}
                    required
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