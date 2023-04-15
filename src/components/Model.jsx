import React,{useState} from 'react'
import Spline from '@splinetool/react-spline';
import Spinner from './Spinner';
const Model = () => {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <>
    {!isLoading && <div className='absolute left-[7rem] md:left-[15rem] lg:left-[21rem]'><Spinner /></div>}
    <Spline className='' 
    onLoad={() => setIsLoading(true)}
    style={{height:"100vh"}} scene="https://prod.spline.design/bqe1dXAgwfUnEYIH/scene.splinecode" />
    </>
  )
}

export default Model;
