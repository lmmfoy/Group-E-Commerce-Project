import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import img26 from "../media/img26.jpg";
import ItemCard from "./ItemCard";

const CategoryFeed = (props) =>{
    const{_category} = useParams();
    const [items, setItems] = useState(null);
     //loading state for fetch
    const [loading, setLoading] = useState(false);
    useEffect(()=>{
        fetch(`/products/categories/${_category}`)
        .then(res=>res.json())
        .then(data=>{
            setItems(data.data);
            props.setLoading(true)
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
            <h1>{_category}</h1>
            </div>
        <CategoryFeedBox>
        
        {
            items && 
            items.map((item)=>{
                return(
                    <>
                    <ItemProfile>
                    <ItemCard product={item} loading={props.loading}/> 
                    </ItemProfile>
                    </>
                )
            })
        }
        </CategoryFeedBox>
        </ImageStyle>
        </>      
    )
}

const ImageStyle = styled.div`
width: 100%;
height: 100vh;
img{
    width: 100%;
    height: 50%;
    object-fit:cover;
}


.ImageText{
    position: absolute;
    width: 100%;
    height: 50%;
    top: 64px;
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
const CategoryFeedBox = styled.div`
    display:flex;
    flex-wrap: wrap;
    position: absolute;
    margin: 0px 400px;
`;

const ItemProfile = styled.div`
    display: flex;
    background: white;
    box-shadow: 10px 10px 8px 0 rgba(128, 128, 128, 0.44);
    gap: 20px;
    border-radius:20px;
    margin: 30px;
    border: none;
    font-size: 20px;
    image-resolution: unset;

:hover {
    box-shadow: 0 0 15px 1px #5BB318;
    opacity: 70%;
}
`;


export default CategoryFeed;