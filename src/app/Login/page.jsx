"use client";

import "../../Styles/Login.css";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Login() {

  const router = useRouter();
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/Login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    if (!res.ok) {
      alert(data.message);
      return;
    }

    localStorage.setItem("token", data.token);

    router.push("/Per");
  };


  return (
    <div className="main1_Login">
      <div className="container1_Login">
        <div className="row1_Login">

          <div className="col1_Login">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              loop={true}
              speed={800}
              className="homeSliderL"
            >

                            <SwiperSlide>
                <img src="/Images/sunrise.png" alt="Login" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/Images/road.png" alt="Login" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/Images/Login2.jpg" alt="Login 2" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/Images/Solar.jpg" alt="Solar" />
              </SwiperSlide>
                            <SwiperSlide>
                <img src="/Images/water.png" alt="Solar" />
              </SwiperSlide>
            </Swiper>
          </div>


          <div className="col2_Login">
            <form onSubmit={handleSubmit}>
              <h2>Login Here</h2>

              <label>Email</label>
              <input type="email" name="email" id="email" placeholder="Enter email"  onChange={handleChange} required />

              <label>Password</label>
              <input type="password" name="password" id="password" placeholder="Enter password" onChange={handleChange} required />

              <button type="submit">Login</button>

              <p className="loginText">
                Don’t have an account?
                <Link href="/"> Register</Link>
              </p>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}










// "use client";
// import { useState } from "react";
// import "../../../Styles/Login.css";

// export default function Login() {
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });

//     const handleChange = (e) =>
//     setFormData({ ...formData, [e.target.name]: e.target.value });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const res = await fetch("/api/login", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(formData),
//     });

//     const data = await res.json();
//     if (res.ok) {
//       localStorage.setItem("token", data.token);
//       alert("Login Successful!");
//       window.location.href = "/dashboard";
//     } else {
//       alert(data.error);
//     }
//   };


//   return (
//     <div className="main1_Login">
//       <div className="overlay_Login"></div>
//       <div className="container1_Login">
//         <div className="col1_Login">
//           <h2>Login Here</h2>
//           <form onSubmit={handleSubmit}>
//             <label htmlFor="email" style={{ fontFamily: 'Lato , sans-serif'}}>Email</label>
//             <input type="email" name="email" id="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} required />

//             <label htmlFor="password" style={{ fontFamily: 'Lato , sans-serif'}}>Password</label>
//             <input type="password" name="password" id="password" placeholder="Enter your password" value={formData.password} onChange={handleChange} required />

//             <button type="submit" >Log In</button>
//             <p className="forget_Link" style={{ fontFamily: 'Lato , sans-serif'}}>Forgot Password?</p>
//             <h4 style={{ fontFamily: 'Lato , sans-serif' , fontWeight:400}}> Don't have an account <a href="/Register" style={{textDecoration:"none" , color:"#ff6600"}}>Register</a></h4>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }
