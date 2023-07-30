import {Navigate , useParams, useNavigate}from 'react-router-dom';
import {useState , useEffect } from 'react';
import { apiurluser } from '../apiurls';
import axios from 'axios';


function Varifyuser(){
    const params = useParams(); // hook function 
    const navigate = useNavigate();

    useEffect(()=>{
        axios.get(apiurluser+"fetch?email="+params.email).then((response)=>{
            if(response.data[0].__v==0){
                var updateDetails = {"condition_obj":{"email":params.email},"content_obj":{"status":1,"__v":1}};
                axios.patch(apiurluser+"update",updateDetails).then((response)=>{
                    console.log("User varified....")
                });
            }
        });
    })
}

export default Varifyuser