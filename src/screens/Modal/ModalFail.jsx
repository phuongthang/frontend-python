import React from "react";
import Lottie from 'react-lottie';
import fail from '../../assets/img/fail.json';

//Packet
import { Modal } from "reactstrap";

export default function ModalFail(props) {

    const { modal, toggle } = props;
    /**
     * get property
     */

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: fail,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    /**
     * render template
     */
    return (
        <Modal
            isOpen={modal}
            className="modal-dialog modal-dialog-centered modal-dialog-centered modal-dialog-scrollable">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">
                        THÔNG BÁO
                    </h5>
                </div>
                <div className="modal-body">
                    <div>
                        <Lottie
                            options={defaultOptions}
                            height={160}
                            width={160}
                        />
                    </div>
                    <p className="text-center pt-3">
                        <strong>Thông tin tài khoản hoặc mật khẩu không chính xác !</strong>
                    </p>
                </div>
                <div className="modal-footer">
                    <button onClick={toggle} type="button" className="btn btn-light-secondary btn-custom">
                        <span className="d-none d-sm-block">Đồng ý</span>
                    </button>
                </div>
            </div>
        </Modal>
    );
}