import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useTitle from '../../hooks/useTitle';

const AddServices = () => {
    useTitle('Add Service')

    const handleAddService = e => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const details = form.details.value
        const price = form.price.value
        const img = form.photoURL.value
        const newService = { name, details, price, img }

        console.log(newService)

        fetch('http://localhost:5000/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newService)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    form.reset()
                    toast("Thanks For Your Review")
                }
            })
            .catch(err => console.log(err))
    }



    return (
        <div>
            <div className="hero h-96" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1432821596592-e2c18b78144f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80")` }}>
                <div className="hero-overlay bg-opacity-60 bg-teal-700"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-lg">
                        <h1 className="mb-5 text-7xl font-bold underline underline-offset-8 decoration-fuchsia-700">Add Services</h1>
                    </div>
                </div>
            </div>
            <div>
                <form onSubmit={handleAddService} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Service Name</span>
                        </label>
                        <input type="name" name='name' placeholder="Service Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Service Image</span>
                        </label>
                        <input type="text" name='photoURL' placeholder="Photo Url" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <textarea type="text" name='details' placeholder="Service Details" cols="20" rows="3" className="textarea textarea-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="number" name='price' placeholder="Price" className="input input-bordered" defaultValue={0} required />
                    </div>
                    <div className="form-control mt-6">
                        <input className="btn bg-teal-500 border-0 hover:bg-teal-400" type="submit" value="Add Service" />
                        <ToastContainer />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddServices;