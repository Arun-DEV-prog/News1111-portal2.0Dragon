import { ca } from 'date-fns/locale';
import React, { useEffect, useState } from 'react'
import { useLoaderData, useParams } from 'react-router'
import Newscard from '../Components/Homelayout/Newscard';

const CatagoryNews = () => {
     const {id}=useParams();
     const newsData=useLoaderData();

     const [catagorynews,setCatgorynews]=useState([]);
    
     useEffect(()=>{
         if(id=='0'){
             setCatgorynews(newsData);
             return 
         }else if(id=='1'){
             const filterNews=newsData.filter(news=>news.others.is_today_pick==true);
             setCatgorynews(filterNews);
         }else{
              const filterNews=newsData.filter(news=>news.category_id==id);
               setCatgorynews(filterNews);
         }
       
        
     },[newsData,id])
  return (
    <div>
     
       <div className='grid grid-cols-1 gap-5 mt-5  p-6'>
              {
                catagorynews.map(news=><Newscard key={Math.random() } news={news}></Newscard>)
              }
       </div>
    </div>
  )
}

export default CatagoryNews
