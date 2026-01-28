

// import Swiper from 'swiper';
// import { Navigation, Pagination } from 'swiper/modules';

// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import "../Styles/Home.css";
// export default function Home() {
//   return (
// <>
// <div className="main1_Home">
//   <div className="container1_Home">
//     <div className="row1_Home">
//       <div className="col1_Home">

//       </div>
//       <div className="col2_Home">
// <form>
//   <label htmlFor="Name" >Name</label>
//   <input type="Name" placeholder="Name..." />
//   <label htmlFor="Email" >Email</label>
//   <input type="Email" placeholder="Email..." />
//   <label htmlFor="Password">Password</label>
//   <input type="Password" placeholder="Password" />
//   <label htmlFor="ConfirmPassword" >Confirm Password</label>
//   <input type="ConfirmPassword" placeholder="ConfirmPassword" />
//   <button type="Submit">Submit</button>
// </form>
//       </div>
//     </div>
//   </div>
// </div>
// </>
//   );
// }

"use client"

import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import "../Styles/Home.css"

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {

  const router = useRouter();

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    const res = await fetch("/api/Register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    if (!res.ok) {
      alert(data.message);
      return;
    }

    alert("Registration successful");
    router.push("/Login");
  };



  return (
    <>
      <div className="main1_Home">
        <div className="container1_Home">
          <div className="row1_Home">

            <div className="col1_Home">
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000 }}
                loop={true}
                className="homeSlider"
              >
                <SwiperSlide>
                  <img src="/Images/Ev.jpg" alt="Register" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/Images/Fire.jpg" alt="Login" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/Images/Solar.jpg" alt="slide3" />
                </SwiperSlide>
              </Swiper>
            </div>

            <div className="col2_Home">
              <form className="homeForm" onSubmit={handleSubmit}>
                <h2>Create Account</h2>

                <label>Name</label>
                <input type="text"   name="username" placeholder="Name..."   onChange={handleChange} required />

                <label>Email</label>
                <input type="email"   name="email" placeholder="Email..."   onChange={handleChange} required />

                <label>Password</label>
                <input type="password" name="password" placeholder="Password"   onChange={handleChange} required />

                <label>Confirm Password</label>
                <input type="password" name='confirmPassword' placeholder="Confirm Password"   onChange={handleChange} required />

                <button type="submit">Submit</button>
                <p className="loginText">
  If you already have an account?
  <Link href="/Login"> Login</Link>
</p>
              </form>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}