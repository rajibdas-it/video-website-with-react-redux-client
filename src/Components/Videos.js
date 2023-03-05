import React from "react";
import Video from "./Video";

const Videos = () => {
  return (
    <section class="pt-12">
      <section class="pt-12">
        <div class="grid grid-cols-12 gap-4 max-w-7xl mx-auto px-5 lg:px-0 min-h-[300px]">
          <Video />
          {/* <div class="col-span-12">some error happened</div> */}
        </div>
      </section>
    </section>
  );
};

export default Videos;