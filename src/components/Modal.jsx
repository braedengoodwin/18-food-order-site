import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import React from "react";


function Modal({ open, children, onClose}){
    const dialog = useRef()

    useEffect(() => {
        if(open) {
            dialog.current.showModal()
        } else {
            dialog.current.close()
        }
    }, [open])

    return createPortal(
        <dialog className="modal" ref={dialog} onClose={onClose}>
            {open ? children : null}
            <div className="modal-actions">
                <button className="text-button" onClick={()=> onClose(true)}>test</button>
            </div>
        </dialog>,
        document.getElementById('modal')
    )
}

export default Modal;