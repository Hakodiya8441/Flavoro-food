import React from "react";
import FoodCard from "./FoodCard";
import FoodData from "../FoodData/FoodData";
import toast, { Toaster } from 'react-hot-toast';
import { useSelector } from "react-redux";

const FoodItems = () => {

  const handleToast = (name)=>toast.success(`Added ${name}`);
  const category = useSelector((state)=>state.category.category);
  const search = useSelector((state)=> state.search.search);

  
  return (
    <>
    <Toaster/>
    <div className="flex flex-wrap gap-10 justify-center lg:justify-start mx-6 my-10">
      {
        FoodData.filter((food)=>{
          if(category === "All"){
            return food.name.toLowerCase().includes(search.toLowerCase());
          }else{
           return category === food.category && food.name.toLowerCase(search.toLowerCase());
          }
        }).map((food)=>(
          <FoodCard
          key={food.id}
          id={food.id}
          name={food.name}
          price={food.price}
          img={food.img}
          desc={food.desc}
          category={food.category}
          rating={food.rating}
          handleToast={handleToast}
        />
        ))
      }


      
      </div>
    </>
  );
};

export default FoodItems;
