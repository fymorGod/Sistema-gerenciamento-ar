//import { Link } from 'react-router-dom';
//import { useState } from "react";
import { motion } from 'framer-motion'
import Card from '../components/Card/Card';
//import Modal from '../components/Modal';
import "../styles/equipamentos.css";

const Equipamentos = () => {
  // const [modalOpen, setModalOpen] = useState(false);

  // const close = () => setModalOpen(false);
  // const open = () => setModalOpen(true);

  return (
    <div className="title">
    <div className="container">

      <main className="main">
      <h1 className='titlePage'>Equipamentos</h1>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {
              scale: .8,
              opacity: 0
            },
            visible: {
              scale: 1,
              opacity: 1,
              transition: {
                delay: .4
              }
            },
          }}
        >
          
        </motion.div>
        <div className='product-container'>
          <Card />
        </div>

        {/* <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className='save-button'
          onClick={() => (modalOpen ? close() : open())}
        >
          Modal
        </motion.button>
        {modalOpen && <Modal modalOpen={modalOpen} handleClose={close} />} */}
      </main>

    </div>
  </div>
  )
}

export default Equipamentos;
