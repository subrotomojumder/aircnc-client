import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import ExpCard from '../Components/Card/ExpCard';
import SearchForm from '../Components/Form/SearchForm';
import HomeCard from '../Components/Card/HomeCard';
import Spinner from '../Components/Spinner/Spinner'
import { getAllHome } from '../api/useHome';
const Home = () => {
  const [loading, setLoading] = useState(false);
  const [homes, setHomes] = useState([]);
  const [allExp, setAllExp] = useState([]);

  useEffect(() => {
    setLoading(true);
    getAllHome().then(data => {
      setHomes(data)
    }).catch(e => console.log(e.message))

    fetch('expdata.json')
      .then(res => res.json())
      .then(data => {
        setAllExp(data)
        setLoading(false)
      })
  }, [])
  return (
    <div className='md:flex justify-center gap-10 px-6 md:px-10 lg:px-20'>
      <div>
        <SearchForm></SearchForm>
      </div>
      <div className='flex-1'>
        <div>
          <div className='flex justify-between px-4 mt-8'>
            <p className='text-xl font-bold'>Homes</p>
            <Link to='/coming-soon'>
              <p>See All</p>
            </Link>
          </div>
          <div className='container pb-8 pt-2 mx-auto'>
            <div className='flex flex-wrap'>
              {
                homes.map(home => <HomeCard home={home} key={home._id} />)
              }
            </div>
          </div>
          <div className='flex justify-between px-4'>
            <p className='text-xl font-bold'>Experiences</p>
            <Link to='/coming-soon'>
              <p>See All</p>
            </Link>
          </div>
          <div className='container pb-8 pt-2 mx-auto'>
            <div className='flex flex-wrap'>
              {
                allExp.slice(0, 4).map((exp, _id) => <ExpCard exp={exp} key={_id}></ExpCard>)
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
