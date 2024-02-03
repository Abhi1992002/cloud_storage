"use client";

import React, { useCallback, useEffect, useState } from "react";
import { CardWrapper } from "./card-wrapper";
import { RingLoader } from "react-spinners";
import { useSearchParams } from "next/navigation";
import { newVerification } from "@/actions/auth/new-verification";
import { FormSuccess } from "../form-success";
import { FormError } from "../form-error";
type NewVerificationFormProps = {};

export const NewVerificationForm = ({}: NewVerificationFormProps) => {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const [error, setError] = useState<string | undefined>();
  const [success, setSuccess] = useState<string | undefined>();

  const onSubmit = useCallback(() => {
    if (success || error) return;
    if (!token) {
      setError("Missing Token");
      return;
    }
    newVerification(token)
      .then((data) => {
        setSuccess(data.success);
        setError(data.error);
      })
      .catch(() => {
        setError("Something went wrong");
      });
  }, [token]);

  useEffect(() => {
    onSubmit();
  }, []);

  return (
    <>
      <CardWrapper
        backButtonHref="/auth/login"
        backButtonLabel="Back to login"
        headerLabel="Confirm Your Verification"
      >
        <div className="flex items-center w-full justify-center">
          {!success && !error && <RingLoader />}
          <FormSuccess message={success} />
          {!success && <FormError message={error} />}
        </div>
      </CardWrapper>
    </>
  );
};
