import React,{  useEffect, useState } from 'react'
import { Button, Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow,Modal, ModalBody, ModalFooter, ModalHeader } from "flowbite-react";
const CustomConfirmModal = (
    {
        isOpen,
        children,
        heading,
        confirmButtonText = " Yes, I'm sure",
        declineButtonText = "No, cancel",
        confirmButtonClicked,
        closeModal,
        showConfirmButton =false,
        showDeclineButton = true
    }
) => {
  const [openModal,setOpenModal] = useState(false);
  useEffect(()=>{
    setOpenModal(isOpen);

  },[isOpen])
        
  return (
   <>
       
         <Modal className='max-h-screen' show={openModal} onClose={() => closeModal(false)}>
           <ModalHeader>{heading}</ModalHeader>
           <ModalBody>
             {children}
           </ModalBody>
           <ModalFooter>
             {/* <Button onClick={() => {
             confirmButtonClicked()
              setOpenModal(false)}
             }
              >{confirmButtonText}</Button>
             <Button color="alternative" onClick={() => closeModal(false)}>
              {declineButtonText}
             </Button> */}
              <div className="flex w-full justify-center gap-4">
                          {
                            showConfirmButton && ( <Button color="red" onClick={() =>{ 
                            confirmButtonClicked()
                            setOpenModal(false)
                           }}>
                             {confirmButtonText}
                           </Button>)
                          }
                        {
                          showDeclineButton && (   <Button color="alternative" onClick={() => closeModal(false)}>
                             {declineButtonText}
                           </Button>)
                        }
                         </div>
           </ModalFooter>
         </Modal>
       </>
  )
}

export default CustomConfirmModal