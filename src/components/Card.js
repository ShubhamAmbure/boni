import CustomButton from "./CustomButton";
import ImageBlock from "./ImageBlock";
import TextSection from "./TextSection";
import { FaTrash } from "react-icons/fa";

export default function Card({
  title = "Default Title",
  description = "No description provided",
  src = "images",
  alt = "...",
  button = "Button",
  onClick = () => {},
  deleteButton = () => {},
}) {
  return (
    <div className="card w-72 shadow border rounded-lg overflow-hidden bg-white">
      <div className="relative">
        <ImageBlock src={src} alt={alt} />
        <button
          onClick={deleteButton}
          className="absolute top-2 right-2 p-2 bg-white rounded-full shadow hover:bg-red-100 text-red-600"
          title="Delete"
        >
          <FaTrash />
        </button>
      </div>
      <div className="card-body p-4 space-y-2">
        <TextSection heading={title} text={description} />
        <CustomButton button={button} onClick={onClick} />
      </div>
    </div>
  );
}
