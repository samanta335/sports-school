import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import UseAxios from "../../../../Hook/UseAxios";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";

const img_hosting_token = import.meta.env.VITE_IMAGE;

const AddItems = () => {
  const { user } = useContext(AuthContext);
  const [axiosSecure] = UseAxios();
  const { register, handleSubmit, reset } = useForm();
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("image", data.image[0]);

    fetch(img_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((img) => {
        if (img) {
          const imgUrl = img.data.display_url;
          const { name, email, className, price, seat } = data;
          const classInfo = {
            name,
            price: parseFloat(price),
            email,
            className,
            seat: parseFloat(seat),
            image: imgUrl,
          };
          console.log(classInfo);
          axiosSecure.post("/myClass", classInfo).then((data) => {
            if (data.data.insertedId) {
              reset();
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Class added Successfully",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
        }
      });

    // console.log(data);
  };

  return (
    <div className="w-full px-32">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex my-4">
          <div className="form-control mr-4 w-full max-w-xs">
            <label className="label">
              <span className="label-text font-semibold">Instructor Name</span>
            </label>
            <input
              {...register("name", { required: true })}
              type="text"
              value={user?.displayName}
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text font-semibold">Instructor Email</span>
            </label>
            <input
              {...register("email", { required: true })}
              type="email"
              value={user?.email}
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
        </div>
        <div className="flex my-4">
          <div className="form-control mr-4 w-full max-w-xs">
            <label className="label">
              <span className="label-text font-semibold">Class Name</span>
            </label>
            <input
              {...register("className", { required: true })}
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Class Image</span>
            </label>
            <input
              {...register("image", { required: true })}
              type="file"
              className="file-input file-input-bordered w-full max-w-xs"
            />
          </div>
        </div>
        <div className="flex my-4">
          <div className="form-control w-full  max-w-xs">
            <label className="label">
              <span className="label-text font-semibold">Available Seats</span>
            </label>
            <input
              {...register("seat", { required: true })}
              type="number"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="form-control w-full ml-4 max-w-xs">
            <label className="label">
              <span className="label-text font-semibold">Price</span>
            </label>
            <input
              {...register("price", { required: true })}
              type="number"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
        </div>
        <div className="text-center ">
          <input
            className="btn btn-primary mt-4"
            type="submit"
            value="Add Class"
          />
        </div>
      </form>
    </div>
  );
};

export default AddItems;
