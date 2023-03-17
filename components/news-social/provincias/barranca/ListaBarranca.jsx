import React from "react";

const ListaBarranca = ({ id, name }) => {
  return (
    <div className="mb-4">
      <iframe
        src={`https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2F${id}&tabs=timeline%2C%20events%20&width=340&height=500&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=true&appId=2545489669062239`}
        width="340"
        height="500"
        allowFullScreen={true}
        /* style="border:none;overflow:hidden"
        scrolling="no"
        frameBorder="0"
        allowFullScreen={true}
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" */
      ></iframe>
    </div>
  );
};

export default ListaBarranca;
