import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { tagRemoved, tagSelected } from "../features/filter/filterSlice";

const Tag = ({ tag }) => {
  const { title } = tag;
  const dispatch = useDispatch();
  const { tags: selectTags } = useSelector((state) => state.filter);

  const isSelected = selectTags.includes(title) ? true : false;
  // console.log(isSelected);

  const style = isSelected
    ? "bg-blue-600 text-white px-4 py-1 rounded-full cursor-pointer"
    : "bg-blue-100 text-blue-600 px-4 py-1 rounded-full cursor-pointer";

  const handleSelect = (title) => {
    if (!isSelected) {
      dispatch(tagSelected(title));
    } else {
      dispatch(tagRemoved(title));
    }
  };
  // console.log(selectTags);

  return (
    <div onClick={() => handleSelect(title)} className={style}>
      {tag?.title}
    </div>

    /* <div className="bg-blue-600 text-white px-4 py-1 rounded-full cursor-pointer">
        redux
      </div> */
  );
};

export default Tag;
