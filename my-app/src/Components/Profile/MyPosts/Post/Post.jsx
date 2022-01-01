import React from "react";
import Po from "./Post.module.css"
function Post() {
    return (
        <div className={Po.main}>
            <img src="https://proprikol.ru/wp-content/uploads/2020/04/kartinki-dlya-vajbera-na-avu-44.jpg"></img>
            My post
        </div>
    )
};

export default Post;