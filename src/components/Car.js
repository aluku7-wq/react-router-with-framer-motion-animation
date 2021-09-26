import React from "react";
import { useParams, useHistory } from "react-router-dom";
import Data from "./Data";
import { MdKeyboardBackspace } from "react-icons/md";
import { motion } from "framer-motion";
import { carAnimation } from "./Animations";

const Car = () => {
  const { id } = useParams();
  const history = useHistory();
  const singlecar = Data.find((item) => item.id === parseInt(id));

  return (
    <div className="carcontainer">
      <motion.div
        className="car"
        variants={carAnimation}
        animate="show"
        exit="hide"
      >
        <div className="navigateBack" onClick={() => history.goBack()}>
          <MdKeyboardBackspace />
        </div>
        <div className="imageAndText">
          <img src={`../images/products/${singlecar.image}`} alt="image" />
          <div className="carText">
            <h3>{singlecar.car}</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
              delectus ea dolore suscipit. Facilis harum dolorem, pariatur ipsa
              in adipisci!
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Car;
