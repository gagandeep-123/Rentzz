import React from 'react'
import { createBrowserRouter, Route, Router, RouterProvider, Routes } from 'react-router-dom'
import Homepage from './Pages/Homepage';
import Landingpage from './Pages/Landingpage';
import SignupPage from './Pages/SignupPage';
import Cartpage from './Pages/Cartpage'
import SearchPage from './Pages/SearchPage';
import Confirm from "./Components/Confirm/Index";


 const cards = [
   {
     id: 1,
     Propname: "Ahuja Suites",
     Location: "Delhi",
     Price: "48",
     Bedrooms: "3",
     type: "Farm House",
     ammenities: ["Pool", "Fitness Center", "Club"],
     img: "https://assets.gqindia.com/photos/5e43b4d83e85490008773570/16:9/w_1280,c_limit/These%204%20extremely%20lavish%20&%20expensive%20properties%20in%20Delhi%20will%20cost%20you%20up%20to%20Rs%207.5%20lakh%20rent%E2%80%94on%20a%20monthly%20basis.jpg",
   },
   {
     id: 2,
     Propname: "Golden Nest",
     Location: "Faridabad",
     Price: "58",
     Bedrooms: "5",
     type: "Farm House",
     ammenities: ["Pool", "Fitness Center", "Club"],
     img: "https://imagecdn.99acres.com/media1/25479/7/509587385O-1723205562099.jpg",
   },
   {
     id: 3,
     Propname: "Bhatia Suites",
     Location: "Faridabad",
     Price: "74",
     Bedrooms: "2",
     ammenities: ["North - East facing", "Fitness Center", "Club"],
     type: "Farm House",
     img: "https://img.squareyards.com/secondaryPortal/638595088055330691-1708240426452645.jpg?aio=w-745;h-419;crop",
   },
   {
     id: 4,
     Propname: "Singh's builder",
     Location: "lucknow",
     Price: "15",
     Bedrooms: "1",
     ammenities: ["Pool", "Gymnasium", "Club"],
     type: "Farm House",
     img: "https://a0.muscache.com/im/pictures/cba06c3e-f0e0-4ef0-b991-aa6fd2348c50.jpg?im_w=1200",
   },
   {
     id: 5,
     Propname: "Ahuja Builder",
     Location: "Noida",
     Price: "25",
     Bedrooms: "2",
     ammenities: ["Pool", "Fitness Center"],
     type: "Farm House",
     img: "https://a0.muscache.com/im/pictures/a0307076-8eb2-42c0-ba5e-f26219788eb7.jpg?im_w=720",
   },
   {
     id: 6,
     Propname: "Golden Plaza",
     Location: "Noida",
     Price: "65",
     type: "Farm House",
     Bedrooms: "2",
     ammenities: ["Fitness Center", "Club"],
     img: "https://a0.muscache.com/im/pictures/fb118905-b803-45b6-b6bb-38f4e3bce965.jpg?im_w=1200",
   },
   {
     id: 23,
     Propname: "Crown Memorial",
     Location: "Delhi",
     Price: "85",
     type: "Farm House",
     ammenities: ["Pool", "Community Center"],
     Bedrooms: "1",
     img: "https://a0.muscache.com/im/pictures/hosting/Hosting-850713285852104124/original/adb11184-dc0b-4091-9546-ba81eac2cfe3.jpeg?im_w=1200",
   },
   {
     id: 7,
     Propname: "Lavish Inn",
     Location: "Noida",
     Price: "65",
     type: "Farm House",
     ammenities: ["Close to School", "Pool", "Club"],
     Bedrooms: "3",
     img: "https://a0.muscache.com/im/pictures/miso/Hosting-52957679/original/1c66612e-1f1c-4c19-8593-f8ebc21ad898.jpeg?im_w=1200",
   },
   {
     id: 8,
     Propname: "SKON Villa",
     Location: "Bangalore",
     Price: "44",
     type: "Farm House",
     ammenities: ["Pool", "East facing", "Club"],
     Bedrooms: "1",
     img: "https://a0.muscache.com/im/pictures/0ee61e24-0959-4d66-b7ac-6fda179090c9.jpg?im_w=1200",
   },
   {
     id: 9,
     Propname: "Skyscapper",
     Location: "Delhi",
     Price: "65",
     type: "Farm House",
     ammenities: ["Private Garden", "Fitness Center", "Club"],
     Bedrooms: "1",
     img: "https://a0.muscache.com/im/pictures/84196b9f-bc0e-4387-a5bf-5bde75f286ff.jpg?im_w=1200",
   },
   {
     id: 10,
     Propname: "GetSet Rentals",
     Location: "Delhi",
     Price: "65",
     Bedrooms: "1",
     type: "Farm House",
     ammenities: ["Pool", "Fitness Center", "Parking"],
     img: "https://a0.muscache.com/im/pictures/e2314485-1f2b-4906-ae7d-f524b1b38f41.jpg?im_w=1200",
   },
   {
     id: 11,
     Propname: "CharmWood",
     Location: "Punjab",
     Price: "65",
     Bedrooms: "1",
     type: "Farm House",
     ammenities: ["Pool", "Fitness Center", "Club"],
     img: "https://a0.muscache.com/im/pictures/b1032bdd-b0e9-4ab8-be44-3d2c16567830.jpg?im_w=1200",
   },
   {
     id: 12,
     Propname: "Lakeside",
     Location: "Noida",
     Price: "65",
     type: "Farm House",
     Bedrooms: "1",
     ammenities: ["Pool", "Fitness Center", "Club"],
     img: "https://a0.muscache.com/im/pictures/hosting/Hosting-1196141205624875008/original/841a7fc0-bd9e-4b9b-869c-0c268efafcae.jpeg?im_w=1200",
   },
   {
     id: 13,
     Propname: "RoseWood",
     Location: "Punjab",
     Price: "5",
     type: "Farm House",
     ammenities: ["Pool", "Fitness Center", "Club"],
     Bedrooms: "1",
     img: "https://a0.muscache.com/im/pictures/9533b6e3-a37e-4346-98d8-baeb58fc7718.jpg?im_w=1200",
   },
   {
     id: 14,
     Propname: "Hubheavens",
     Location: "Delhi",
     Price: "65",
     type: "Farm House",
     Bedrooms: "1",
     ammenities: ["Pool", "Fitness Center", "Club"],
     img: "https://a0.muscache.com/im/pictures/647f2ceb-af8e-432b-b3c6-a4816a1e8ddb.jpg?im_w=1200",
   },
   {
     id: 15,
     Propname: "Grove Homes",
     Location: "Noida",
     Price: "65",
     type: "Farm House",
     ammenities: ["Power Backup", "Fitness Center", "Club"],
     Bedrooms: "1",
     img: "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6ODgzNjU0MDkxNTEwODYzNDU2/original/1bc81656-40c7-49ca-836c-b77683048d73.jpeg?im_w=1200",
   },
   {
     id: 16,
     Propname: "Sky Lux",
     Location: "Bangalore",
     Price: "65",
     type: "Farm House",
     ammenities: ["Pool", "Gymnasium", "Club"],
     Bedrooms: "4",
     img: "https://a0.muscache.com/im/pictures/miso/Hosting-1215876665168261199/original/aa824d7f-5d26-4e21-9a8c-8984efa226fe.jpeg?im_w=1200",
   },
   {
     id: 17,
     Propname: "Palm's",
     Location: "Delhi",
     Price: "65",
     ammenities: ["Pool", "Fitness Center", "Gymnasium"],
     type: "Farm House",
     Bedrooms: "2",
     img: "https://a0.muscache.com/im/pictures/2561046d-3137-4824-9dd7-56e27c7b62fb.jpg?im_w=720",
   },
   {
     id: 18,
     Propname: "Oasis Retreat",
     Location: "Lucknow",
     Price: "65",
     type: "Farm House",
     ammenities: ["Pool", "Fitness Center", "Club"],
     Bedrooms: "2",
     img: "https://a0.muscache.com/im/pictures/1832a6d5-79a7-451b-8fa1-4e0b1a99c845.jpg?im_w=1200",
   },
   {
     id: 19,
     Propname: "Alpha Homes",
     Location: "Bangalore",
     Price: "65",
     type: "Farm House",
     ammenities: ["Private Garden", "Fitness Center", "Club"],
     Bedrooms: "2",
     img: "https://a0.muscache.com/im/pictures/miso/Hosting-41378217/original/d1e2ff42-4fd6-4617-9da3-cf3d6dc771be.jpeg?im_w=1200",
   },
 ];
 
const Body = ({history}) => {
    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Landingpage />
        },
        {
            path: "/browse",
            element: <Homepage cards={cards} />
        },
        {
            path: "/joinUs",
            element : <SignupPage />
        },
        {
            path: "/cart",
            element : <Cartpage />
        },
        {
            path: "/search",
            element: <SearchPage cards={cards} />
      },
      {
        path: "/confirm",
        element : <Confirm />
        }
        
    ])
    return (
        <div>
            <RouterProvider router={appRouter} />
        </div>
     
   
  );
}

export default Body