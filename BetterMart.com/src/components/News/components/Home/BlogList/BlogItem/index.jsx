import React from "react";
import { Link } from "react-router-dom";
import Chip from "../../../common/Chip";
import "./styles.css";

const BlogItem = ({
  blog: {
    description,
    title,
    createdAt,

    cover,
    category,
  },
}) => {
  return (
    <div className="News__blogItem-wrap">
      <img className="News__blogItem-cover" src={cover} alt="cover" />
      <Chip label={category} />
      <h3>{title}</h3>
      <p className="News__blogItem-desc">{description}</p>
      <footer>
        <div className="News__blogItem-author">
          <div>
            <p>{createdAt}</p>
          </div>
        </div>
        <a
          href="https://subscribenow.economist.com/?state=state-0ce8b4b2f85c7ed06433fb23fd5dbdc6&utm_campaign=a_io_cpc_Search-IN_EN-G-Generic-Exact&utm_medium=cpc&utm_source=bing&utm_content=Search-IN_EN-G-News-Business-Exact&utm_term=buissness+news&gclid=220c672f4f6d1eb7a82f069b2024ee08&gclsrc=3p.ds&msclkid=220c672f4f6d1eb7a82f069b2024ee08"
          class="btn btn-primary"
        >
          Read More
        </a>
      </footer>
    </div>
  );
};

export default BlogItem;
