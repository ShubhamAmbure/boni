
"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { savePage } from "@/lib/storage";
import CustomInputField from "@/components/CustomInputField";
import CustomButton from "@/components/CustomButton";

export default function CreatePage() {
  const router = useRouter();
  const [slugPages, setSlugPages] = useState([
    { slug: "", bloc: { src: "", alt: "", title: "", description: "" } },
  ]);
  const [message, setMessage] = useState("");
  const [slugErrors, setSlugErrors] = useState([]);

  const validateSlug = (slug) => /^[a-z0-9]+(-[a-z0-9]+)*$/.test(slug);

  const handleSlugChange = (index, value) => {
    const updated = [...slugPages];
    updated[index].slug = value;
    setSlugPages(updated);

    const errors = [...slugErrors];
    errors[index] = !validateSlug(value);
    setSlugErrors(errors);
  };

  const handleBlocChange = (index, field, value) => {
    const updated = [...slugPages];
    updated[index].bloc[field] = value;
    setSlugPages(updated);
  };

  const handleAddSlugPage = () => {
    setSlugPages([
      ...slugPages,
      { slug: "", bloc: { src: "", alt: "", title: "", description: "" } },
    ]);
    setSlugErrors([...slugErrors, false]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    const errors = slugPages.map((page) => !validateSlug(page.slug));
    setSlugErrors(errors);

    if (errors.includes(true)) {
      setMessage("Invalid slug format in one or more entries.");
      return;
    }

    try {
      for (const { slug, bloc } of slugPages) {
        savePage(slug, [{ type: "Bloc", props: bloc }]);
      }

      setMessage("Pages created successfully! Redirecting...");
      setTimeout(() => {
        router.push("/");
      }, 1500);
    } catch (error) {
      console.error(error);
      setMessage("Error saving pages.");
    }
  };

  return (
    <div className="container py-5">
      <h1 className="h3 fw-bold mb-4">Create Slug Pages with Bloc</h1>

      <form onSubmit={handleSubmit}>
        {slugPages.map((entry, index) => (
          <div
            key={index}
            className="border rounded p-4 bg-light mb-4"
          >
            <div className="mb-3">
              <label htmlFor={`slug-${index}`} className="form-label fw-bold">
                Slug {index + 1}:
              </label>
              <CustomInputField
                id={`slug-${index}`}
                value={entry.slug}
                onChange={(e) => handleSlugChange(index, e.target.value)}
                placeholder="e.g., gallery-page"
                error={slugErrors[index]}
              />
              {slugErrors[index] && (
                <small className="text-danger">
                  Invalid slug. Use lowercase letters, numbers, and hyphens only.
                </small>
              )}
            </div>

            {["src", "alt", "title", "description"].map((field) => (
              <div className="mb-3" key={field}>
                <label htmlFor={`${field}-${index}`} className="form-label">
                  {field}:
                </label>
                <CustomInputField
                  id={`${field}-${index}`}
                  value={entry.bloc[field]}
                  onChange={(e) =>
                    handleBlocChange(index, field, e.target.value)
                  }
                  placeholder={`Enter ${field}`}
                />
              </div>
            ))}
          </div>
        ))}

        <div className="d-flex gap-2">
          <CustomButton
            button="+ Add More Slug Page"
            onClick={handleAddSlugPage}
          />
          <CustomButton button="Create All Pages" onClick={handleSubmit} />
        </div>
      </form>

      {message && (
        <p
          className={`mt-4 small fw-medium ${
            message.startsWith("Pages") ? "text-success" : "text-danger"
          }`}
        >
          {message}
        </p>
      )}
    </div>
  );
}
