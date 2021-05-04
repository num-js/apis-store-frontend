import React from 'react';

const PopupModals = (props) => {
    return (
        <>
            <div id={props.modalId} class="modal">
                <div class="modal-content">
                    {props.children}
                </div>
            </div>
        </>
    );
}

export default PopupModals;