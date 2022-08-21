import { useContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import img1 from "../media/img1.jpg";
import img2 from "../media/img2.jpg";
import img3 from "../media/img3.jpg";
import img4 from "../media/img4.jpg";
import img5 from "../media/img5.jpg";
import img6 from "../media/img6.jpg";
import img7 from "../media/img7.jpg";
 
import { ItemsContext } from "./ItemsContext";


const Category = () => {
    const navigate = useNavigate();
    const [category, setCategory] = useState(["Fitness", "Medical", "Lifestyle", "Entertainment", "Industrial", "Pets"]);
    const { setSelectedCategory} = useContext(ItemsContext);
    const handleSelectedCategory = (category) => {
        setSelectedCategory(category);
        navigate(`/products/categories/${category}`)
        
    }
    return(
        <TopCategory >
                    <Box>
                        <TopCategoryInner >
                            <Visual>
                            <img className="Img" src={img7}width = "1000px"/>
                            </Visual>
                            <Content>
                                <h2>Category</h2>
                                <ItemsCategory>
                                    {
                                        category.map((item)=>{
                                            return(
                                                <ItemCategoryBtn onClick={()=>{handleSelectedCategory(item)}}>
                                                    <Visual>
                                                        {
                                                            item==="Fitness" && (
                                                                <img src={img1}width = "300px"/>
                                                            )
                                                        }
                                                        {
                                                            item==="Medical" && (
                                                                <img src={img2}width = "300px"/>
                                                            )
                                                        }
                                                        {
                                                            item==="Lifestyle" && (
                                                                <img src={img3}width = "300px"/>
                                                            )
                                                        }
                                                        {
                                                            item==="Entertainment" && (
                                                                <img src={img4}width = "300px"/>
                                                            )
                                                        }
                                                        {
                                                            item==="Industrial" && (
                                                                <img src={img5}width = "300px"/>
                                                            )
                                                        }
                                                        {
                                                            item==="Pets" && (
                                                                <img src={img6}width = "300px"/>
                                                            )
                                                        }
                                                        <div className="text">
                                                            <div className="nameItems"><p>{item}</p></div>
                                                        </div>
                                                    </Visual>
                                                </ItemCategoryBtn>
                                            )
                                        })
                                    }
                                </ItemsCategory>
                            </Content>
                        </TopCategoryInner>
                    </Box>
                </TopCategory>
    )
};

const TopCategory= styled.div`
display: flex;
.Img{
    position: absolute;
    display: flex;
    align-items: flex-end;
}

h2{
    font-size: 40px;
    color: white;
}
`
const Box = styled.div`
display: flex;
max-width: max-content;


`

const TopCategoryInner = styled.div`
/* position: absolute;
    width: 60%;
    height: 100%; */
`

const Visual = styled.div`

.text{
    color: #fff;
    transition: .2s ease;
    position: absolute;
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
}
.nameItems{
    font-weight: 500;
    letter-spacing: .1em;
    line-height: 1.5;
    p{
        font-size:30px;
    }
    }
`

const Content = styled.div`

`

const ItemsCategory = styled.div`
display: flex;
justify-content: end;
flex-wrap:wrap;



/* opacity: 1; */

`
const ItemCategoryBtn = styled.button`
    width: 25%;
    padding-right: 2px;
    margin-bottom: 24px;
    transform: translate(200px, 30px);
    margin: 10px -20px;
    border: none;
    background:transparent;
img{
    background: #fafafa;
border-radius: 4px;
box-shadow: 10px 10px 8px 0 rgba(128, 128, 128, 0.44);
}
img:hover {
    box-shadow: 0 0 45px 2px #1CD6CE;
    opacity: 70%;
}

`
export default Category;


