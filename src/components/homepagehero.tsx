import {
  BoltIcon,
  ChatBubbleBottomCenterTextIcon,
  GlobeAltIcon,
  ScaleIcon,
} from "@heroicons/react/24/outline";
import { FunctionComponent } from "react";

const features = [
  {
    name: "Easy Scheduling",
    description:
      "We’ll schedule your work to be done to match your own busy life. Our team of handymen is ready when you are. When you need our services, we’re here to help. We coordinate multiple contractors so you don’t have to. One Call Does It All!",
    icon: GlobeAltIcon,
  },
  {
    name: "Prompt Service",
    description:
      "Our electricians, plumbers, carpenters, painters and other trade specialists will arrive at your property on time, ready to get started. We know that you don’t have time for delays or disruptions that leave work undone.",
    icon: ScaleIcon,
  },
  {
    name: "Reasonable Prices",
    description:
      "Since we support many TOP property management companies already, you will benefit from VOLUME DISCOUNTS on ALL of your home maintenance and renovation needs! After assessing the work you need to have done, we’ll provide you with an accurate price estimate, with no hidden fees or extra costs. Our affordable rates let you pay for only the services you receive. Priced Right, Done Right!",
    icon: BoltIcon,
  },
  {
    name: "Expert Craftsmen",
    description:
      "Every HandyQuick handyman has long experience and knowledge of his trade, and will give you the top quality results you demand. Talented and creative, our team gives you results that enhance your home.",
    icon: ChatBubbleBottomCenterTextIcon,
  },
];

const HomePageHero: FunctionComponent = () => {
  return (
    <div className="bg-slate-100 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-lg font-semibold text-slate-600">
            Reliable, Affordable Services
          </h2>
          <p className="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900">
            Just a call away!
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto lg:text-left">
            Every homeowner, landlord and property manager faces chores that
            need to be done around residential properties.</p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 md:space-y-0">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-slate-500 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg font-medium leading-6 text-gray-900">
                    {feature.name}
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default HomePageHero;
