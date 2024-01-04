'use client'
import React, { useEffect, useState } from "react";
import NavBar from "./navbar";
import Card from "./Card";
import axios from "axios";
import { categoryBlog } from "@/apiUrl/apiUrl";
import Skeleton from "./Skeleton";

const Index = () => {
    const [category, setCategory] = useState('science')
    const [loader, setLoader] = useState(true);
    const [data, setData] = useState(null)
    useEffect(() => {
        const fetchData = async () => {
          try {
            const res = await axios.get(`${categoryBlog}/${category}`, {category});
            setData(res.data[0].result);
          } catch (error) {
            console.error(error.message);
          }
        };
    
        fetchData();
      }, [category]);
  return (
    <>
      <NavBar category={category} setCategory={setCategory} />
      <main className="flex min-h-screen bg-white flex-col items-center justify-between p-24">
        <div className="cardContainer grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {data ? data?.map((item, index) => (
            <Card data={item} key={index} />
          )) : [...Array(10)].map((item, index) => (
            <Skeleton key={index} />
          )) }
        </div>
      </main>
    </>
  );
};

export default Index;
