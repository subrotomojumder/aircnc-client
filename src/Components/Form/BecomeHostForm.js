import React from 'react';
import PrimaryButton from '../Button/PrimaryButton';

const BecomeHostForm = ({handleSubmit}) => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">

                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Location</span>
                            </label>
                            <input name='location' type="text" placeholder="location" className="input input-bordered" required/>
                        </div>
                        <div className="form-control h-20">
                            <h4 className='text-xl'>Upload Id Document</h4>
                            <input type="file" accept='image/*' className='border-2 w-10 h-10' required name="image" id="" />
                        </div>
                        <div className='flex'>
                        <input type="checkbox" name="" id="" className='text-2xl w-6 mr-2' />
                        <p>Agree to privacy policy</p>
                        </div>
                        <div type='submit' className="form-control mt-6">
                            <PrimaryButton classes={'text-2xl py-1 rounded'}>Submit request</PrimaryButton>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BecomeHostForm;