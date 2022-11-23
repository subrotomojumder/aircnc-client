import { format } from 'date-fns/esm';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { getImageUrl } from '../api/imageUpload';
import { addHome } from '../api/service';
import AddServiceForm from '../Components/Form/AddServiceForm';
import { AuthContext } from '../contexts/AuthProvider';

const AddHome = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [preview, setPreview] = useState('');
  const [uploadButtonText, setUploadButtonText] = useState('Upload Image');
  const [arrivalDate, setArrivalDate] = useState(new Date());
  const [departureDate, setDepartureDate] = useState(new Date(arrivalDate.getTime() + 24 * 60 * 60 * 1000));
  const handleSubmit = event => {
    event.preventDefault();
    const location = event.target.location.value;
    const title = event.target.title.value;
    const from = arrivalDate;
    const To = departureDate;
    const price = event.target.price.value;
    const total_guest = event.target.total_guest.value;
    const bedrooms = event.target.bedrooms.value;
    const bathrooms = event.target.bathrooms.value;
    const description = event.target.description.value;
    const image = event.target.image.files[0];
    setLoading(true);
    getImageUrl(image).then(data => {
      const homeData = {
        location,
        title,
        from,
        To,
        price,
        total_guest,
        bedrooms,
        bathrooms,
        description,
        image: data,
        host: {
          name: user?.displayName,
          image: user?.photoURL,
          email: user?.email
        }
      }
      addHome(homeData).then(data => {
        console.log(data);
        setLoading(false);
        toast.success('Home added')
        navigate('/dashboard/manage-home')
      }).catch(e => {
        console.log(e.message)
        setLoading(false);
      })
    }).catch(e => {
      setLoading(false);
      console.log(e.message)
    })
  }

  const handleImageChange = image =>{
    setPreview(window.URL.createObjectURL(image));
    setUploadButtonText(image.name)
  }
  return (
    <div>
      <AddServiceForm
        handleSubmit={handleSubmit}
        arrivalDate={arrivalDate}
        setArrivalDate={setArrivalDate}
        departureDate={departureDate}
        setDepartureDate={setDepartureDate}
        loading={loading}
        handleImageChange={handleImageChange}
        preview={preview}
        uploadButtonText={uploadButtonText}
      ></AddServiceForm>
    </div>
  );
};

export default AddHome;