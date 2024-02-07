"use client";
import axios from "axios";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { MoonLoader } from "react-spinners";

type SubscribeButtonProps = {};

export const SubscribeButton = ({}: SubscribeButtonProps) => {
  const [loading, setLoading] = useState(false);

  const onSubscribe = async () => {
    try {
      setLoading(true);

      if (process.env.NEXT_PUBLIC_BUSINESS_TYPE === "Ind") {
        window.location.href = `${process.env.NEXT_PUBLIC_APP_URL}/payment`;
      } else {
        const response = await axios.get("/api/stripe");
        window.location.href = response.data.url;
      }
    } catch (error) {
      console.log("STRIPE_CLIENT_ERROR : ", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Button disabled={loading} variant={"default"} onClick={onSubscribe}>
        {loading ? <MoonLoader color="#000000" size={13} /> : "Subscribe"}
      </Button>
    </>
  );
};
