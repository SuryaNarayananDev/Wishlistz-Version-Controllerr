import * as React from 'react';
import { useState } from "react";
import "./styleProductDetails.css"
import { useNavigate, useParams } from "react-router-dom";
import ProductReviewCard from "./ProductReviewCard";
import { Box, Button, Grid, LinearProgress, Rating } from "@mui/material";
import HomeProductCard from "../../Home/HomeProductCard";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { findProductById } from "../../../../Redux/Customers/Product/Action";
import { addItemToCart } from "../../../../Redux/Customers/Cart/Action";
import { addItemToWish } from "../../../../Redux/Customers/Wish/Action"
import { getAllReviews } from "../../../../Redux/Customers/Review/Action";
import Wishheart from "../ProductCard/wishheart";
import AddcartIcon from "../ProductCard/carticon";
import menShirt from "../../../../Data/Men/men_shirt.json"
import AddWhatsappIcon from "./whatsappIcon";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import { Popper } from '@mui/base';
import { styled, css } from '@mui/system';

const product = {
  name: "Basic Tee 6-Pack",
  price: "₹996",
  href: "#",
  breadcrumbs: [
    { id: 1, name: "Men", href: "#" },
    { id: 2, name: "Clothing", href: "#" },
  ],
  images: [
    {
      src: "https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg",
      alt: "Two each of gray, white, and black shirts laying flat.",
    },
    {
      src: "https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg",
      alt: "Model wearing plain black basic tee.",
    },
    {
      src: "https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg",
      alt: "Model wearing plain gray basic tee.",
    },
    {
      src: "https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg",
      alt: "Model wearing plain white basic tee.",
    },
  ],
  colors: [
    { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
    { name: "Gray", class: "bg-gray-200", selectedClass: "ring-gray-400" },
    { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
  ],
  sizes: [
    { name: "S", inStock: true },
    { name: "M", inStock: true },
    { name: "L", inStock: true },
  ],
  description:
    'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
  highlights: [
    "Hand cut and sewn locally",
    "Dyed with our proprietary colors",
    "Pre-washed & pre-shrunk",
    "Ultra-soft 100% cotton",
  ],
  details:
    '.',
};



const reviews = { href: "#", average: 4, totalCount: 117 };

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ProductDetails() {
  const [selectedSize, setSelectedSize] = useState("");
  const [activeImage, setActiveImage] = useState(null);
  const [sizeClick, setsizeClick] = useState(false)
  const [indicate, setindicate] = useState(false)
  const [WhatsappBtn, setWhatsappbtn] = useState(false)
  const [createWhatsappLink, setWhatsappLink] = useState("")

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;


  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { customersProduct, review, auth } = useSelector((store) => store);
  const { productId } = useParams();
  const jwt = localStorage.getItem("jwt");

  if (auth.user?.role === "CUSTOMER") {
    console.log("user exits")
  } else if (auth.user === null) {
    console.log("user are noy fount");
  } else {
    console.log("somethig is missing");
  }
  const notify = (situation,mess) => {
    if (situation===0) {
      toast.error(mess.toUpperCase());
    }
    else if (situation===1) {
      toast.success(mess.toUpperCase());  
    }else{
      toast(mess.toUpperCase())
    }
    
  }


  const handleSetActiveImage = (image) => {
    setActiveImage(image);
    console.log(image + "image in row==");
  };

  const handleWhatsapp = () => {
    setWhatsappbtn(!WhatsappBtn)
  };

  const handleAddSize = (event) => {
    setSelectedSize(event.target.value)
    setsizeClick(true)
  }

  const handleAddtoCart = () => {
    if (auth.user === null) {
      alert("Please Login to CheckOut")
      notify(0,"please verify your email")
    } else if (auth.user?.role === "CUSTOMER") {
      if (sizeClick === true) {
        const data = { productId, size: selectedSize };
        dispatch(addItemToCart({ data, jwt }));
        if (auth.user?.Verifyemail === true) {
          notify(1,"added to cart")
        }
        else {
          navigate("/verify-email")
          notify(0,"verify email")
        }
      } else {
        setindicate(true)
        notify(0,"please select size")
      }
    }


  };

  // Rating and REview
  const _ = require('lodash');
  const [maxcolorset, setmaxcolorset] = useState(false)
  console.log("color", maxcolorset);
  
  const majorityRating = review.reviews.reduce((acc, current) => {
    if (acc.count[current.rating] === undefined) {
      acc.count[current.rating] = 1;
    } else {
      acc.count[current.rating]++;
    }
    if (acc.max < acc.count[current.rating]) {
      acc.max = acc.count[current.rating];
      acc.majority = current.rating;
    }
    return acc;
  }, { count: {}, max: 0, majority: null });


  const ratingCounts = review.reviews.reduce((acc, current) => {
    if (acc[current.rating]) {
      acc[current.rating]++;
    } else {
      acc[current.rating] = 1;
    }
    return acc;
  }, {});
  const count5 = ratingCounts[5];
  const count4 = ratingCounts[4];
  const count3 = ratingCounts[3];
  const count2 = ratingCounts[2];
  const count1 = ratingCounts[1];

  // Rating and REview end

  const handleAddtoWish = () => {
    if (auth.user === null) {
      alert("Please Login to CheckOut")
      notify(0,"verify your email")
    } else if (auth.user?.role === "CUSTOMER") {
      if (sizeClick === true) {
        const data = { productId, size: selectedSize.name };
        dispatch(addItemToWish({ data, jwt }));
        notify(1,"added to wishlist")
      } else {
        setindicate(true)
        notify(0,"please select size")
      }
    }
  };

  useEffect(() => {
    const data = { productId: productId, jwt };
    dispatch(findProductById(data));
    dispatch(getAllReviews(productId));
    setWhatsappLink(`http://localhost:3000/product/${productId}`)
    console.log("@ cart weight", product.weight);

  }, [productId]);

  console.log(customersProduct?.category, "tag");
  const isStock = customersProduct.product?.quantity;

  return (
    <div className="bg-white lg:px-20">
      <ToastContainer />
      {/* color board popup window */}
      {maxcolorset === true ?
        <div className='ml-8 lg:px-0 colortag-page-outline' style={{ backgroundColor: customersProduct?.product?.colortag }}>
          <div className='close-btn-center'>
            <Button onClick={() => setmaxcolorset(false)}
              id="hoverYellowbtn"
              variant="contained"
              type="button"
              sx={{ padding: ".8rem 2rem" }}>
              X
            </Button>
            <p className='algin-text-center'>Match With Perfect Colour</p>
          </div>
        </div> : ""}


      <div className="pt-6">
        <nav aria-label="Breadcrumb">
          <ol
            role="list"
            className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
          >
            <li>
                <div className="flex items-center">
                  <a
                    href={"/"}
                    className="mr-2 text-sm font-medium text-gray-900"
                  >
                    {customersProduct?.product?.gender.toUpperCase()}
                  </a>
                  <svg
                    width={16}
                    height={20}
                    viewBox="0 0 16 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="h-5 w-4 text-gray-300"
                  >
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <a
                    href={"/"}
                    className="mr-2 text-sm font-medium text-gray-900"
                  >
                    {customersProduct?.product?.category?.name.toUpperCase()}
                  </a>
                  <svg
                    width={16}
                    height={20}
                    viewBox="0 0 16 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="h-5 w-4 text-gray-300"
                  >
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                </div>
              </li>
             
            <li className="text-sm">
              <a
                // href={""}
                aria-current="page"
                className="font-medium text-gray-500 hover:text-gray-600"
              >
                {customersProduct?.product?.color.toUpperCase()}
              </a>
            </li>
          </ol>
        </nav>

        {/* product details */}
        <section className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-2 px-4 pt-10">
          {/* Image gallery */}
          <div className="flex flex-col items-center ">
            <div id="img-popuptoc" className=" overflow-hidden rounded-lg max-w-[30rem] max-h-[35rem]">
              <img
                src={activeImage?.src || customersProduct.product?.imageUrl}
                alt={customersProduct.title}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="flex flex-wrap space-x-5 justify-center">
              {customersProduct.product?.subImageUrl.map((image, index) => (
                <div
                  onClick={() => handleSetActiveImage(image)}
                  className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg max-w-[5rem] max-h-[5rem] mt-4">
                  <img
                    src={image.src}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              ))}
            </div>
            <div className='flex'>
              {WhatsappBtn === false ?
                <div className='flex'>
                  <Button
                    id="hoverYellowbtn"
                    variant="contained"
                    type="button"
                    onClick={handleWhatsapp}

                    sx={{ padding: ".8rem 2rem", marginTop: "2rem" }}
                  >
                    Show live
                  </Button>

                  <Button
                    id="hoverYellowbtn"
                    variant="contained"
                    type="button"
                    onClick={handleWhatsapp}

                    sx={{ padding: ".8rem 2rem", marginTop: "2rem", marginLeft: 10 }}
                  >
                    Customize
                  </Button>
                </div>
                : ""}
              {/* Create Whatsapp HyperLinks */}
              {WhatsappBtn === true ?
                <div>
                  <div className="whatsapp-container">
                    <p onClick={() => setWhatsappbtn(false)}>Close</p>
                    <p className="algin-text-center">For More Details</p>
                    <div className='space-y-3'>
                      <p className='wa-font-15px'>Product: {productId}</p>
                      <CopyToClipboard text={createWhatsappLink}>
                        <button className='wa-btn'>Copy</button>
                      </CopyToClipboard>
                      <p>Click Copy button and click below </p>
                      <hr />
                    </div>
                    <div className='algin-center-btn'>
                      <Button id="hoverGreenbtn" href="https://wa.me/9446976017">Whatsapp<AddWhatsappIcon /></Button>
                    </div>
                  </div>
                </div> : ""}

            </div>
          </div>
          {/* Product info */}
          <div className="lg:col-span-1 mx-auto max-w-2xl px-4 pb-16 sm:px-6  lg:max-w-7xl  lg:px-8 lg:pb-24">
            <div className="lg:col-span-2">
              <h1 className="text-lg lg:text-xl font-semibold tracking-tight text-gray-900  ">
                {customersProduct.product?.brand}
              </h1>
              <h1 className="text-lg lg:text-xl tracking-tight text-gray-900 opacity-60 pt-1">
                {customersProduct.product?.title}
              </h1>
            </div>

            {/* Options */}
            <div className="mt-4 lg:row-span-3 lg:mt-0">
              <h2 className="sr-only">Product information</h2>
              <div className="flex space-x-5 items-center text-lg lg:text-xl tracking-tight text-gray-900 mt-6">
                <p className="opacity-70 line-through " id="DisProductPriceingFont">
                  ₹{customersProduct.product?.price}
                </p>
                <p className="font-semibold" id="ProductPriceingFont">
                  ₹{customersProduct.product?.discountedPrice}
                </p>
                <p className="text-green-600 font-semibold">
                  {customersProduct.product?.discountPersent}% Off
                </p>
              </div>

              {/* Reviews */}
              <div className="mt-6">
                <h3 className="sr-only">Reviews</h3>

                <div className="flex items-center space-x-3">
                  <Rating
                    name="read-only"
                    value={majorityRating.majority}
                    precision={0.5}
                    readOnly
                  />

                  {/* <p className="opacity-60 text-sm"> Ratings</p> */}
                  <p className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                  {review.reviews.length} reviews
                  </p>
                </div>
              </div>
              {/* Color verify container */}
              <div className="mt-10">
                <h3 className="text-sm font-medium text-gray-900">Color Guide</h3>
                <div className="flex items-center">
                  <Button onClick={() => setmaxcolorset(true)}>
                    <div className='color-tag-container' style={{ background: customersProduct?.product?.colortag }} ></div>
                  </Button>
                  <div>
                    <Button aria-describedby={id} type="button" onClick={handleClick}>
                  <HelpOutlineOutlinedIcon/>
                  </Button>
                    
                    <Popper id={id} open={open} anchorEl={anchorEl}>
                      <StyledPopperDiv>Colour Guide is New feature to Identify Perfect colour of Product *(LED Display Perfer)  .</StyledPopperDiv>
                    </Popper>
                  </div>
                </div>
              </div>

              <form className="mt-10" onSubmit={handleAddtoCart}>
                <div className="mt-10">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium text-gray-900">Size</h3>
                  </div>
                  {/* Select size Function */}
                  {customersProduct.product?.sizes[3].quantity > 9 ?
                    <FormControl>
                      <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                        value={selectedSize}
                        onChange={handleAddSize}
                        is
                      >
                        <FormControlLabel value="S" control={<Radio />} label="S" />
                        <FormControlLabel value="M" control={<Radio />} label="M" />
                        <FormControlLabel value="L" control={<Radio />} label="L" />
                        <FormControlLabel value="XL" control={<Radio />} label="XL" />
                        <FormControlLabel
                          value="Free Size"
                          disabled
                          control={<Radio />}
                          label="Free Size"
                        />
                      </RadioGroup>
                    </FormControl>
                    :
                    <FormControl>
                      <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                        value={selectedSize}
                        onChange={handleAddSize}
                        is
                      >
                        <FormControlLabel
                          value="Free Size"
                          control={<Radio />}
                          label="Free Size"
                        />
                      </RadioGroup>
                    </FormControl>
                  }
                  {indicate === true ? <p className='indicateDanger'>Please Select Size *</p> : ""}
                </div>



                {/* Main Function button AddToCart And Wish */}

                <div className="flex space-x-3 ">
                  {isStock > 0 ?
                    <Button
                      id="hoverOrangebtn"
                      variant="contained"
                      type="button"
                      onClick={handleAddtoCart}

                      sx={{ padding: ".8rem 2rem", marginTop: "2rem" }}
                    >
                      ADD to Cart
                      <AddcartIcon />
                    </Button>
                    :
                    <Button disabled
                      variant="contained"
                      sx={{ padding: ".8rem 2rem", marginTop: "2rem" }}
                    >
                      Out Of Stock
                    </Button>}
                  <Button
                    id="hoverDpinkbtn"
                    variant="contained"
                    sx={{ padding: ".8rem 2rem", marginTop: "2rem", bgcolor: "#e81e61" }}
                    onClick={handleAddtoWish}
                  >
                    Wish
                    <Wishheart />
                  </Button>



                </div>
              </form>
            </div>

            <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
              {/* Description and details */}
              <div>
                <h3 className="sr-only">Description</h3>

                <div className="space-y-6 mt-3">
                  <h2 className="text-sm font-medium text-gray-900">Details</h2>

                  <p className="text-base text-gray-900">
                    {customersProduct.product?.description}
                  </p>
                </div>
              </div>

              <div className="mt-10">
                <h3 className="text-sm font-medium text-gray-900">
                  Highlights
                </h3>

                <div className="mt-4">
                  <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                    {customersProduct.product?.highlight?.map((highlight) => (
                      <li key={highlight} className="text-gray-400">
                        <span className="text-gray-600">{highlight.hlp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-10">

                <div className="mt-4 space-y-6">
                  <p className="text-sm text-gray-600">{product.details}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* rating and review section */}
        <section className="">
          <h1 className="font-semibold text-lg pb-4" id="getSpaceFromLeft">
            Recent Review & Ratings
          </h1>

          <div className="border p-5">
            <Grid container spacing={7}>
              <Grid item xs={12} lg={6}>
                {review.reviews.length>0?
                <div className="space-y-5">
                {review.reviews?.slice(-6).map((item) => (
                    <ProductReviewCard item={item} />
                  ))}
                </div>
                :
                <p className="opacity-60">No Review Yet! But {auth.user?.firstName} You Can Become Firest Reviewer</p>}
              </Grid>

              <Grid item lg={5} xs={12}>
                <h1 className="text-xl font-semibold pb-1">Product Ratings</h1>
                <div className="flex items-center space-x-3 pb-10">
                  <Rating
                    name="read-only"
                    value={majorityRating.majority}
                    precision={0.5}
                    readOnly
                  />

                  <p className="opacity-60">{review.reviews.length} Ratings</p>
                </div>
                <Box>
                  <Grid
                    container
                    justifyContent="center"
                    alignItems="center"
                    gap={2}
                  >
                    <Grid xs={2}>
                      <p className="p-0">Excellent</p>
                    </Grid>
                    <Grid xs={7}>
                      <LinearProgress
                        className=""
                        sx={{ bgcolor: "#d0d0d0", borderRadius: 4, height: 7 }}
                        variant="determinate"
                        value={count5&&count5!=null?count5:"0"}
                        color="success"
                      />
                    </Grid>
                    <Grid xs={2}>
                      <p className="opacity-50 p-2">{count5&&count5!=null?count5:"0"}</p>
                    </Grid>
                  </Grid>
                </Box>
                <Box>
                  <Grid
                    container
                    justifyContent="center"
                    alignItems="center"
                    gap={2}
                  >
                    <Grid xs={2}>
                      <p className="p-0">Very Good</p>
                    </Grid>
                    <Grid xs={7}>
                      <LinearProgress
                        className=""
                        sx={{ bgcolor: "#d0d0d0", borderRadius: 4, height: 7 }}
                        variant="determinate"
                        value={count4&&count4!=null?count4:"0"}
                        color="success"
                      />
                    </Grid>
                    <Grid xs={2}>
                      <p className="opacity-50 p-2">{count4&&count4!=null?count4:"0"}</p>
                    </Grid>
                  </Grid>
                </Box>
                <Box>
                  <Grid
                    container
                    justifyContent="center"
                    alignItems="center"
                    gap={2}
                  >
                    <Grid xs={2}>
                      <p className="p-0">Good</p>
                    </Grid>
                    <Grid xs={7}>
                      <LinearProgress
                        className="bg-[#885c0a]"
                        sx={{ bgcolor: "#d0d0d0", borderRadius: 4, height: 7 }}
                        variant="determinate"
                        value={count3&&count3!=null?count3:"0"}
                        color="orange"
                      />
                    </Grid>
                    <Grid xs={2}>
                      <p className="opacity-50 p-2">{count3&&count3!=null?count3:"0"}</p>
                    </Grid>
                  </Grid>
                </Box>
                <Box>
                  <Grid
                    container
                    justifyContent="center"
                    alignItems="center"
                    gap={2}
                  >
                    <Grid xs={2}>
                      <p className="p-0">Avarage</p>
                    </Grid>
                    <Grid xs={7}>
                      <LinearProgress
                        className=""
                        sx={{
                          bgcolor: "#d0d0d0",
                          borderRadius: 4,
                          height: 7,
                          "& .MuiLinearProgress-bar": {
                            bgcolor: "#885c0a", // stroke color
                          },
                        }}
                        variant="determinate"
                        value={count2&&count2!=null?count2:"0"}
                        color="success"
                      />
                    </Grid>
                    <Grid xs={2}>
                      <p className="opacity-50 p-2">{count2&&count2!=null?count2:"0"}</p>
                    </Grid>
                  </Grid>
                </Box>
                <Box>
                  <Grid
                    container
                    justifyContent="center"
                    alignItems="center"
                    gap={2}
                  >
                    <Grid xs={2}>
                      <p className="p-0">Poor</p>
                    </Grid>
                    <Grid xs={7}>
                      <LinearProgress
                        className=""
                        sx={{ bgcolor: "#d0d0d0", borderRadius: 4, height: 7 }}
                        variant="determinate"
                        value={count1&&count1!=null?count1:"0"}
                        color="error"
                      />
                    </Grid>
                    <Grid xs={2}>
                      <p className="opacity-50 p-2">{count1&&count1!=null?count1:"0"}</p>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </div>
        </section>


        {/* similer product */}
        <section className=" pt-10">
          <h1 className="py-5 text-xl font-bold">Similer Products</h1>
          <Grid id="card"  >
            <div xs={12} className="flex flex-wrap space-y-5 " style={{ display: "flex", justifyContent: "center" }}>
              {menShirt.map((item) => (
                <HomeProductCard product={item} />
              ))}
            </div>
          </Grid>
        </section>
      </div>
    </div>
  );

}const blue = {
  50: '#F0F7FF',
  100: '#C2E0FF',
  200: '#99CCF3',
  300: '#66B2FF',
  400: '#3399FF',
  500: '#007FFF',
  600: '#0072E5',
  700: '#0059B2',
  800: '#004C99',
  900: '#003A75',
};

const grey = {
  50: '#F3F6F9',
  100: '#E5EAF2',
  200: '#DAE2ED',
  300: '#C7D0DD',
  400: '#B0B8C4',
  500: '#9DA8B7',
  600: '#6B7A90',
  700: '#434D5B',
  800: '#303740',
  900: '#1C2025',
};

const TriggerButton = styled('button')(
  ({ theme }) => `
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 600;
  font-size: 0.875rem;
  line-height: 1.5;
  background-color: ${blue[500]};
  padding: 8px 16px;
  border-radius: 8px;
  color: white;
  transition: all 150ms ease;
  cursor: pointer;
  border: 1px solid ${blue[500]};
  box-shadow: 0 2px 1px ${
    theme.palette.mode === 'dark' ? 'rgba(0, 0, 0, 0.5)' : 'rgba(45, 45, 60, 0.2)'
  }, inset 0 1.5px 1px ${blue[400]}, inset 0 -2px 1px ${blue[600]};

  &:hover {
    background-color: ${blue[600]};
  }

  &:active {
    background-color: ${blue[700]};
    box-shadow: none;
  }

  &:focus-visible {
    box-shadow: 0 0 0 4px ${theme.palette.mode === 'dark' ? blue[300] : blue[200]};
    outline: none;
  }

  &.disabled {
    opacity: 0.4;
    cursor: not-allowed;
    box-shadow: none;
    &:hover {
      background-color: ${blue[500]};
    }
  }
`,
);

const StyledPopperDiv = styled('div')(
  ({ theme }) => css`
    background-color: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
    border-radius: 8px;
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
    box-shadow: ${theme.palette.mode === 'dark'
      ? `0px 4px 8px rgb(0 0 0 / 0.7)`
      : `0px 4px 8px rgb(0 0 0 / 0.1)`};
    padding: 0.75rem;
    color: ${theme.palette.mode === 'dark' ? '#222222' : '#222222'};
    font-size: 0.875rem;
    font-family: 'IBM Plex Sans', sans-serif;
    font-weight: 500;
    opacity: 1;
    margin: 0.25rem 0;
  `,
);
