
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import { deleteProduct } from '../../services/productsService';

function DeleteProduct(props) {
    const { item, onReload } = props;


    const deleteItem = async () => {
        // const respone = await fetch('http://localhost:3000/products/' + item.id, {
        //     method: 'DELETE'
        // })
        // const result = await respone.json();
        const result =  await deleteProduct(item.id);
        if (result) {
            onReload();
            Swal.fire({
                title: "Deleted!",
                text: "Your product has been deleted.",
                icon: "success"
            });
        }
    }

    const handleDelete = () => {
        console.log(item.id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                deleteItem();

                // fetch('http://localhost:3000/products/' + item.id, {
                //     method: 'DELETE'
                // })
                //     .then(res => res.json())
                //     .then(() => {
                //         onReload();
                //         Swal.fire({
                //             title: "Deleted!",
                //             text: "Your product has been deleted.",
                //             icon: "success"
                //         });
                //     });
            }
        });
    }

    return (
        <>
            <button onClick={handleDelete}>Delete</button>
        </>
    )
}

export default DeleteProduct;