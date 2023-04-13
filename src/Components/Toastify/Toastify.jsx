import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Toastify = () => {

    const toastAlert = () => {
        toast.success('Gracias por tu compra!', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
    };


  return (
    <>
    <div>
    <button onClick={toastAlert}>Ver orden de compra</button>
    <ToastContainer/>
    </div>
    </>
  )
}

export default Toastify