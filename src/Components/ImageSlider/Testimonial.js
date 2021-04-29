import React, { useEffect, useState } from "react";
import axios from "axios";
import TestimonialCard from "./CardTestimonial/TestimonialCard";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

function Testimonial() {
  const TESTIMONIALS_API = `https://wknd-take-home-challenge-api.herokuapp.com/testimonial`;

  const [testimonials, setTestimonials] = useState([]);

  const getTestimonials = (API) => {
    const fetchData = async () => {
      const result = await axios(API);
      setTestimonials(result.data);
    };
    fetchData();
  };

  useEffect(() => {
    getTestimonials(TESTIMONIALS_API);
  }, [TESTIMONIALS_API]);

  return (
    <div>
      <Slide>
        {/* <div className="each-slide"> */}
        {testimonials.length > 0 &&
          testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} {...testimonial} />
          ))}
        {/* </div> */}
      </Slide>
    </div>
  );
}

export default Testimonial;
