import React from "react";
import Data from "./Data";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { gridAnimation, cardAnimation, h3Animation } from "./Animations";

const Cars = () => {
  return (
    <div className="carsContainer">
      <motion.h3 variants={h3Animation} animate="show" exit="hide">
        choose your car
      </motion.h3>
      <motion.div
        className="cars"
        variants={gridAnimation}
        animate="show"
        exit="hide"
      >
        {Data.map((item) => {
          return (
            <Link to={`/car/${item.id}`} key={item.id}>
              <motion.div className="card" variants={cardAnimation}>
                <img src={`../images/products/${item.image}`} alt="image" />
              </motion.div>
            </Link>
          );
        })}
      </motion.div>
    </div>
  );
};

export default Cars;
