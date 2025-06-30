import { useParams } from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "../axios";

const Product = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/api/product/${id}`);
                setProduct(response.data);
                console.log(response.data);
            } catch (error) {
                console.error("Error fetching prduct: ", error);
            }
        };

        fetchProduct();
    }, [id]);

    if (!product) {
        return (
            <h2 className="text-center" style={{ padding: "10rem" }}>
            Loading...
            </h2>
        );
    }
}