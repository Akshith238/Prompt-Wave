"use client"
import { useState,useEffect } from "react";
import PromptCard  from "./PromptCard";

const Feed = () => {
  const [searchText, setSearchText] = useState('');
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    const response = await fetch("/api/prompt");
    const data = await response.json();
    setPosts(data);
  };
  
  useEffect(() => {
     fetchPosts();
  },[])

  const PromptCardList = ({ data, handleTagClick }) => {
    return (
      <div className='mt-16 prompt_layout'>
        {data.map((prompt) => (
          <PromptCard
            key={prompt._id}
            post={prompt}
            handleTagClick={handleTagClick}
          />
        ))}
      </div>
    )
  };
  const handleSearchChange=async(e)=>{
    e.preventDefault();
    setSearchText(e.target.value);
  }
  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input 
          type="text"
          className="search_input peer"
          value={searchText}
          placeholder="Enter tag or username to search"
          onChange={handleSearchChange}
          />
      </form>
      <PromptCardList
         data={posts}
         handleTagClick={()=>{}}
      />
        
    </section>
  )
}

export default Feed