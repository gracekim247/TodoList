import { useState } from "react";
import "./app.css";
import {
  useGetFlashCardsQuery,
} from "./features/api/apiSlice";
import Todo from "./Todo";

const FlashCards = () => {
  const {
    data: posts,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetFlashCardsQuery();

  function FlashCardsContent() {
    if (isLoading) return <p>Loading...</p>;
    else if (isError) return <p>{error}</p>;
    else if (isSuccess)
      return (
        <div className="container">
          {posts.map((flashcard) => (
            <div className="card" key={flashcard.id}>
              <h1 className="title">{flashcard.title}</h1>
              <hr></hr>
              <p className="body">{flashcard.body}</p>
            </div>
          ))}
        </div>
      );
  }

  return (
    <div>
      <Todo />
      <hr></hr>
      <div>
        <h1 className="header2">Flashcards from api</h1>
        <FlashCardsContent />
      </div>
    </div>
  );
};

export default FlashCards;
