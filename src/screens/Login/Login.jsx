import Lottie from 'react-lottie';
import login from '../../assets/img/login.json';

//packet
import { useForm } from 'react-hook-form';
import { FormFeedback } from "reactstrap";
import validation from '../../constants/validation';
import { useState } from 'react';
import ModalFail from './../Modal/ModalFail';

export default function Login(props) {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: login,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    const { register, handleSubmit, getValues, reset, setValue, formState: { errors } } = useForm({
        mode: 'all',
        reValidateMode: 'all',
    });

    /**
     * open/close modal
     * @param {*} name 
     * @param {*} value 
     */
    const [modalFail, setModalFail] = useState(false);
    const toggleModalFail = () => {
        setModalFail(!modalFail);
    }

    /**
     * strim text
     * @param {*} name 
     * @param {*} value 
     */
    const _onBlur = (name, value) => {
        setValue(name, value.trim(), { shouldValidate: true });
    }

    /**
     * render template
     */
    return (
        <div id="auth">
            <div className="row h-100">
                <div className="col-lg-5 col-12">
                    <div id="auth-left">
                        <div className="auth-logo">
                            <Lottie
                                options={defaultOptions}
                                height={200}
                                width={200}
                            />
                        </div>
                        <h1 className="auth-title">Log in.</h1>
                        <form>
                            <div className="form-group position-relative mb-4">
                                <input
                                    type="text"
                                    className="form-control form-control-xl"
                                    placeholder="Username"
                                    {...register(
                                        "username",
                                        {
                                            required: {
                                                value: true,
                                                message: "Vui lòng nhập đầy đủ thông tin !",
                                            },
                                            maxLength: {
                                                value: 255,
                                                message: "Không được vượt quá 255 kí tự",
                                            },
                                            pattern: {
                                                value: new RegExp(validation.EMAIL),
                                                message: "Vui lòng nhập đúng định dạng"
                                            }
                                        }
                                    )}
                                    onBlur={(e) => _onBlur(e.currentTarget.name, e.currentTarget.value)}
                                />
                                {errors.username && (
                                    <FormFeedback className="d-block">{errors.username.message}</FormFeedback>
                                )}
                            </div>
                            <div className="form-group position-relative mb-4">
                                <input
                                    type="password"
                                    className="form-control form-control-xl"
                                    placeholder="Password"
                                    {...register(
                                        "password",
                                        {
                                            required: {
                                                value: true,
                                                message: "Vui lòng nhập đầy đủ thông tin !",
                                            },
                                            maxLength: {
                                                value: 255,
                                                message: "Không được vượt quá 255 kí tự !",
                                            },
                                            pattern: {
                                                value: new RegExp(validation.PASSWORD),
                                                message: "Vui lòng nhập đúng định dạng !"
                                            }
                                        }
                                    )}
                                    onBlur={(e) => _onBlur(e.currentTarget.name, e.currentTarget.value)}
                                />
                                {errors.password && (
                                    <FormFeedback className="d-block">{errors.password.message}</FormFeedback>
                                )}
                            </div>
                            <div className="form-check form-check-lg d-flex align-items-end">
                                <input
                                    className="form-check-input me-2"
                                    type="checkbox"
                                    defaultValue
                                    id="flexCheckDefault"
                                />
                                <label
                                    className="form-check-label text-gray-600"
                                    htmlFor="flexCheckDefault"
                                >
                                    Keep me logged in
                                </label>
                            </div>
                            <button type='button' onClick={toggleModalFail} className="btn btn-primary btn-block btn-lg shadow-lg mt-5">
                                Log in
                            </button>
                        </form>
                        <div className="text-center mt-5 text-lg fs-4">
                            <p className="text-gray-600">
                                Don't have an account?{" "}
                                <span className="font-bold">
                                    Sign up
                                </span>
                                .
                            </p>
                            <p>
                                <span className="font-bold">
                                    Forgot password?
                                </span>
                                .
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-7 d-none d-lg-block">
                    <div id="auth-right"></div>
                </div>
            </div>
            {
                modalFail &&
                <ModalFail
                    modal = {modalFail}
                    toggle = {toggleModalFail}
                />
            }
        </div>
    )
}