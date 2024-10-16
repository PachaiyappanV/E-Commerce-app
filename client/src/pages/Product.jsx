import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { assets } from "../assets/assets";
import RelatedProducts from "../components/RelatedProducts.jsx";
import { ShopContext } from "../context/ShopContext";

const Product = () => {
  const { products, currency, addToCart } = useContext(ShopContext);
  const { productId } = useParams();
  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState(null);
  const [size, setSize] = useState(null);

  const fetchProductsData = () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0]);
        return null;
      }
    });
  };

  useEffect(() => {
    fetchProductsData();
  }, [productId, products]);

  return productData ? (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100 ">
      {/* product data */}
      <div className="flex gap-10 flex-col sm:flex-row">
        {/*product images */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div
            className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between 
          sm:justify-normal sm:w-[18.7%] w-full"
          >
            {productData.image.map((item, index) => (
              <img
                onClick={() => setImage(item)}
                src={item}
                key={index}
                className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
              />
            ))}
          </div>
          <div className="w-full sm:w-[80%]">
            <img className="w-full h-auto" src={image} alt="" />
          </div>
        </div>

        {/*product info */}
        <div className="flex-1">
          <h1 className=" font-medium text-xl sm:text-2xl mt-2">
            {productData.name}
          </h1>
          <div className="flex items-center gap-1 mt-2">
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <p className="pl-2">(122)</p>
          </div>
          <p className="mt-5 text-2xl sm:text-3xl font-medium">
            {currency}
            {productData.price}
          </p>
          <p className="mt-5 text-gray-500 md:w-4/5">
            {productData.description}
          </p>
          <div className="flex flex-col gap-4 my-8">
            <p>Select Size</p>
            <div className="flex gap-2">
              {productData.sizes.map((item, index) => (
                <button
                  onClick={() => setSize(item)}
                  key={index}
                  className={`border py-2 px-4 bg-gray-100 ${
                    item === size ? " border-orange-500" : ""
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <button
            onClick={() => addToCart(productData._id, size)}
            className="  text-black px-8 py-3 text-sm active:bg-gray-700 
            border border-black hover:bg-black hover:text-white transition-all duration-500"
          >
            ADD TO CART
          </button>
          <hr className="mt-8 sm:w-4/5" />
          <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
            <p>100% Original product.</p>
            <p>Cash on delivery is available on this product.</p>
            <p>Easy return and exchange policy within 7 days.</p>
          </div>
        </div>
      </div>
      {/* Description and review */}
      <div className="mt-20">
        <div className="flex">
          <b className="border px-5 py-3 text-sm">Description</b>
          <p className="border px-5 py-3 text-sm">Reviews(122)</p>
        </div>
        <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero
            commodi, laborum, unde fugit libero corporis, harum magnam eius ipsa
            ratione voluptates! Quod dicta dolorum, accusantium cupiditate
            itaque repudiandae iste veniam enim vero iure eveniet omnis
            repellendus numquam beatae aperiam minus ipsum error sint, molestias
            autem illum neque, provident unde? Laborum assumenda cupiditate
            officiis doloremque ratione nisi totam placeat amet suscipit, nam
            deleniti dolores, nobis laudantium aspernatur rerum delectus beatae
            quia.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis,
            at blanditiis? Laudantium aliquam suscipit assumenda repellat
            deserunt vel animi commodi, modi dolor dolores voluptates
            consequatur officiis facilis odio minus, expedita incidunt ut
            corrupti adipisci deleniti, tempore repudiandae velit. Alias, ab?
          </p>
        </div>
      </div>
      {/* display related products */}
      <RelatedProducts
        category={productData.category}
        subCategory={productData.subCategory}
      />
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Product;
