import "./post.css"
import React from "react"
export default function Post() {
  return (
    <div className="post">
      <img className="postImg" src="https://spaceplace.nasa.gov/gallery-space/en/NGC2336-galaxy.en.jpg" alt="" />
      <div className="postInfo">
        <div className="postCats">
            <span className="postcat">Space</span>
            <span className="postcat">Physics</span>
        </div>
        <span className="postTitle">Aurora</span>
        <hr/>
        <span className="postdate">1 hour ago </span>
      </div>
      <p className="postDesc">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia distinctio, recusandae aut deleniti aperiam non perspiciatis dignissimos perferendis aliquam dolores. Esse beatae amet fugit consequuntur delectus repellendus natus sapiente illum.
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia distinctio, recusandae aut deleniti aperiam non perspiciatis dignissimos perferendis aliquam dolores. Esse beatae amet fugit consequuntur delectus repellendus natus sapiente illum.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia distinctio, recusandae aut deleniti aperiam non perspiciatis dignissimos perferendis aliquam dolores. Esse beatae amet fugit consequuntur delectus repellendus natus sapiente illum.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia distinctio, recusandae aut deleniti aperiam non perspiciatis dignissimos perferendis aliquam dolores. Esse beatae amet fugit consequuntur delectus repellendus natus sapiente illum.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia distinctio, recusandae aut deleniti aperiam non perspiciatis dignissimos perferendis aliquam dolores. Esse beatae amet fugit consequuntur delectus repellendus natus sapiente illum.</p>
    </div>
  )
}
