import React from "react";
import { CardWrapper } from "./card-wrapper";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

type ErrorCardProps = {};

export const ErrorCard = ({}: ErrorCardProps) => {
  return (
    <>
      <CardWrapper
        headerLabel="Oops!! something went wrong"
        backButtonHref="/auth/login"
        backButtonLabel="Back to login"
      >
        <div className="w-full items-center flex justify-center">
          <ExclamationTriangleIcon className="h-8 w-8 text-destructive" />
        </div>
      </CardWrapper>
    </>
  );
};
