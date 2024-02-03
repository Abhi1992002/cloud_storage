import { NextResponse } from "next/server";

import { db } from "@/lib/db";
import { stripe } from "@/lib/stripe";
import { absoluteUrl } from "@/lib/utils";
import { currentUser } from "@/lib/auth";

const settingsUrl = absoluteUrl("/");

export async function GET() {
  try {
    const user = await currentUser();
    const userId = user?.id;

    if (!userId || !user) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    // check if user have subscription
    const userSubscription = await db.userSubscription.findUnique({
      where: {
        userId,
      },
    });

    // if user already subscribed,then create billing session (for managing subscription)
    if (userSubscription && userSubscription.stripeCustomerId) {
      const stripeSession = await stripe.billingPortal.sessions.create({
        customer: userSubscription.stripeCustomerId,
        return_url: settingsUrl,
      });

      return new NextResponse(JSON.stringify({ url: stripeSession.url }));
    }

    // if not subscribed then create subscription
    const stripeSession = await stripe.checkout.sessions.create({
      success_url: settingsUrl,
      cancel_url: settingsUrl,
      payment_method_types: ["card"],
      mode: "subscription",
      billing_address_collection: "auto",
      customer_email: user.email!,
      line_items: [
        {
          price_data: {
            currency: "inr",
            product_data: {
              name: "Tutorial",
              description: "Turoial for Stripe",
            },
            unit_amount: 20 * 100,
            recurring: {
              interval: "month",
            },
          },
          quantity: 1,
        },
      ],
      metadata: {
        userId,
      },
    });

    return new NextResponse(JSON.stringify({ url: stripeSession.url }));
  } catch (error) {
    console.log("[STRIPE_ERROR]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
