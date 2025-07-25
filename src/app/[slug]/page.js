"use client";
import { getPage } from "@/lib/storage";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import ImageBlock from "@/components/ImageBlock";
import TextSection from "@/components/TextSection";
import CustomButton from "@/components/CustomButton";

export default function Page() {
  const { slug } = useParams();
  const [pageData, setPageData] = useState(null);

  useEffect(() => {
    const data = getPage(slug);
    setPageData(data);
  }, [slug]);

  const handleCreateRedirect = () => {
    router.push("/");
  };

  if (!pageData) {
    return (
      <div className="p-10 max-w-3xl mx-auto">
        <TextSection
          heading="Page Not Found"
          text="The page you're looking for does not exist."
        />
        <CustomButton onClick={handleCreateRedirect} button="Go Back home" />
      </div>
    );
  }

  return (
    <div className="p-10 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Page: {slug}</h1>
      {pageData.map((component, index) => (
        <div key={index} className="mb-4">
          <ImageBlock src={component.images} alt={component.alt} />
          <TextSection heading={component.heading} text={component.text} />
        </div>
      ))}
    </div>
  );
}
