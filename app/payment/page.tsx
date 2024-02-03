import { BackButton } from "@/components/auth/back-button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import React from "react";

type PaymentProps = {};

const Payment = ({}: PaymentProps) => {
  return (
    <>
      <Card className="w-[400px] shadow-md">
        <CardHeader>
          <p className="text-center font-semibold text-lg text-red-500 ">
            Payment regulation
          </p>
        </CardHeader>
        <CardContent>
          <p className="text-center">
            {" "}
            According to Indian regulations, only registered Indian businesses
            are permitted to accept international payments. However, as this is
            a project for enjoyment and not a commercial venture, you may avail
            of the free tier without concern.
          </p>
        </CardContent>
        <CardFooter>
          <BackButton label={"Back to home"} href={"/"} />
        </CardFooter>
      </Card>
    </>
  );
};

export default Payment;
