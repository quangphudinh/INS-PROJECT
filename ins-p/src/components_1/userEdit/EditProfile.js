
import Modal from 'react-modal';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

import { useState } from 'react';
import { updateUser } from "../services/UserService";


function EditProfile(props) {
    const { item } = props;
    const [showModal, setShowModal] = useState(false);
    const [data, setData] = useState(item);

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: '#f0f0f0', // Màu nền của modal
            color: 'red', // Màu văn bản
            border: '1px solid #ccc', // Màu viền
            borderRadius: '10px', // Bo tròn các góc
            padding: '20px', // Khoảng cách bên trong
        },
    };

    const handleOnChange = (event) => {
        // console.log(event.target.name);
        // console.log(event.target.value);
        const name = event.target.name;
        const value = event.target.value;
        setData({
            ...data,
            [name]: value
        })
    }

    // console.log(data);

    const closeModal = () => {
        setShowModal(false);
    }
    const openModal = () => {
        setShowModal(true);
        console.log("submit submit");
    }

    //NGANG DAY CHUA TOI UU XONG - 1H51

    const handleSubmit = async (event) => {
        event.preventDefault();
        const result = await updateUser(item.id, data);
        if (result) {
            closeModal();
            // onReload();
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Update product. Successful !",
                showConfirmButton: false,
                timer: 1500
            });
        }
    }

    return (
        <>
            <button onClick={openModal}>Edit</button>

            <Modal
                isOpen={showModal}
                // onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >

                <form onSubmit={handleSubmit}>
                    <table>
                        <tbody>
                            <tr>
                                <td>Product Name</td>
                                <td>
                                    <input 
                                                                                
                                        type="text"
                                        name="title"
                                        onChange={handleOnChange}
                                        // value={data.title}
                                        required />
                                </td>
                            </tr>

                            <tr>
                                <td>Price</td>
                                <td>
                                    <input
                                        type="text"
                                        name="price"
                                        onChange={handleOnChange}
                                        // value={data.price}
                                        required />
                                </td>
                            </tr>
                            <tr>
                                <td>Discount</td>
                                <td>
                                    <input
                                        type="text"
                                        name="discountPercentage"
                                        onChange={handleOnChange}
                                        // value={data.discountPercentage}
                                        required />
                                </td>
                            </tr>
                            <tr>
                                <td>Stock</td>
                                <td>
                                    <input
                                        type="text"
                                        name="stock"
                                        onChange={handleOnChange}
                                        // value={data.stock}
                                        required />
                                </td>
                            </tr>
                            <tr>
                                <td>Thumbnail</td>
                                <td>
                                    <input
                                        type="text"
                                        name="thumbnail"
                                        onChange={handleOnChange}
                                        // value={data.thumbnail}
                                        required />
                                </td>
                            </tr>
                            <tr>
                                <td>Description</td>
                                <td>
                                    <textarea rows={4}
                                        type="text"
                                        name="description"
                                        onChange={handleOnChange}
                                        // value={data.description} 
                                        />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <button onClick={closeModal}>Close</button>
                                </td>
                                <td>
                                    {/* <button type="submit">Submit</button> */}
                                    <input type="submit" value="Update" />
                                </td>
                            </tr>
                        </tbody>

                    </table>
                </form>
            </Modal>
        </>

    )
}

export default EditProfile;