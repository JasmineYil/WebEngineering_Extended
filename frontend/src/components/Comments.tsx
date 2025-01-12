import React, { useState } from 'react';

const Comments: React.FC = () => {
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState<{ name: string; comment: string }[]>(
    [
      {
        name: 'Bob Fossil',
        comment:
          'Oh I am so glad you taught me all about the big brown angry guys in the woods...',
      },
    ]
  );
  const [showComments, setShowComments] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const trimmedName = name.trim();
    const trimmedComment = comment.trim();

    if (trimmedName !== '' && trimmedComment !== '') {
      setComments([
        ...comments,
        { name: trimmedName, comment: trimmedComment },
      ]);
      setName('');
      setComment('');
    }
  };

  const toggleComments = () => {
    setShowComments((prev) => !prev);
  };

  return (
    <section className="comments">
      <button
        className="show-hide"
        aria-expanded={showComments}
        aria-controls="comment-wrapper"
        onClick={toggleComments}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            toggleComments();
            e.preventDefault();
          }
        }}
      >
        {showComments ? 'Hide comments' : 'Show comments'}
      </button>

      <div
        className="comment-wrapper"
        id="comment-wrapper"
        hidden={!showComments}
      >
        <h2>Add a Comment</h2>
        <form
          className="comment-form"
          onSubmit={handleSubmit}
          aria-labelledby="add-comment-title"
        >
          <fieldset>
            <legend style={{ display: 'none' }}>Add a Comment</legend>
            <div className="flex-pair">
              <label htmlFor="name" className="comment-text">
                Your name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="comment-input"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="flex-pair">
              <label htmlFor="comment" className="comment-text">
                Your comment:
              </label>
              <input
                type="text"
                id="comment"
                name="comment"
                className="comment-input"
                placeholder="Enter your comment"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                required
              />
            </div>
            <div>
              <input
                type="submit"
                value="Submit comment"
                className="comment-submit"
              />
            </div>
          </fieldset>
        </form>

        <h2>Comments</h2>
        <ul className="comment-container" aria-live="polite">
          {comments.map((c, index) => (
            <li key={index}>
              <p>{c.name}</p>
              <p>{c.comment}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Comments;
