import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import img26 from "../media/img26.jpg";

const CategoryFeed = () =>{
    const{category} = useParams();
    const [items, setItems] = useState(null);
    useEffect(()=>{
        fetch(`/products/categories/${category}`)
        .then(res=>res.json())
        .then(data=>{
            // console.log(data)
            // setItems(data.data)
        })
        .catch((err)=>{
            console.log("error")
        })
    },[])
    return(
        <>
        <ImageStyle>
        <img src={img26}width = "1000px"/>
        <div className="ImageText">
            <h1>{category}</h1>
            </div>
        </ImageStyle>
        
        {
            items &&
            items.map((item)=>{
                return(
                    <>
                    {/* <ItemCard props = item/> */}

                    </>
                )
            })
        }
        </>      
    )
}

const ImageStyle = styled.div`
width: 100%;
height: 100vh;
img{
    width: 100%;
    height: 60%;
    object-fit:cover;
}


.ImageText{
    position: absolute;
    width: 100%;
    height: 50%;
    top: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    color: white;
    h1{
        font-size: 80px;
    }
}
`



export default CategoryFeed;