
"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import CustomButton from "@/components/CustomButton";
import ImageBlock from "@/components/ImageBlock";

const Page = ({ params }) => {
  const slug = params.slug;
  const router = useRouter();
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`/api/pages/${slug}`);
      if (res.ok) {
        const result = await res.json();
        setData(result);
      } else {
        setData({ notFound: true });
      }
    };
    fetchData();
  }, [slug]);

  const handleCreateRedirect = () => {
    router.push("/");
  };

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <p className="text-lg text-gray-600 animate-pulse">Loading...</p>
      </div>
    );
  }

  if (data.notFound) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen px-6 py-10 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-xl w-full bg-white shadow-lg rounded-xl p-8 text-center border border-gray-200">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Page Not Found</h1>
          <p className="text-gray-600 text-lg mb-6">
            Sorry, we couldn't find the page you're looking for.
          </p>
          <CustomButton
            onClick={handleCreateRedirect}
            button="Return Home"
            className="mt-4 w-full px-6 py-3 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700 transition duration-200"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10">
      <div className="max-w-5xl mx-auto bg-white p-8 rounded-xl shadow-lg border border-gray-200">
        <h1 className="text-4xl font-bold text-gray-900 mb-10 border-b pb-4">
          Page: <span className="text-blue-600">{slug}</span>
        </h1>
        <div className="space-y-8">
          {data?.components?.map((component, index) => (
            <div
              key={index}
              className="rounded-lg bg-gray-100 p-6 shadow-sm hover:shadow-md transition"
            >
              <ImageBlock
                src={component.images}
                alt={component.alt}
                className="rounded-md w-full max-h-[400px] object-cover mb-4"
              />
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                {component.title}
              </h2>
              <p className="text-gray-700">{component.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
