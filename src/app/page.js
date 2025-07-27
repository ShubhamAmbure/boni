
"use client";
import { getAllPages, deletePage } from "@/lib/storage";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import CustomButton from "@/components/CustomButton";
import Card from "@/components/Card";

export default function Home() {
  const [pages, setPages] = useState({});
  const router = useRouter();

  useEffect(() => {
    setPages(getAllPages());
  }, []);

  const handleDelete = (slug) => {
    deletePage(slug);
    const updated = getAllPages();
    setPages(updated);
  };

  const handleCreateRedirect = () => {
    router.push("/create");
  };

  return (
    <div className="container py-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="h4 fw-bold">Welcome to Slug Page Creation</h1>
        <CustomButton button="+ Create Page" onClick={handleCreateRedirect} />
      </div>

      {Object.keys(pages).length === 0 ? (
        <div className="text-muted text-center mt-5">
          No slug pages found.
        </div>
      ) : (
        <div className="row g-4">
          {Object.keys(pages).map((slug) => {
            const page = pages[slug];
            let props = {};
            if (Array.isArray(page) && page[0] && page[0].props) {
              props = page[0].props;
            } else if (typeof page === 'object' && page !== null) {
              props = page;
            }
            return (
              <div className="col-12 col-sm-6 col-md-4" key={slug}>
                <Card
                  title={props.title || "No Title"}
                  alt={props.alt || "Image"}
                  description={props.description || "No description provided"}
                  deleteButton={() => handleDelete(slug)}
                  // onClick can be added if needed
                  src={props.src || "/default.jpg"}
                />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
