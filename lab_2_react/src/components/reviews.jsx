import { useState, useEffect } from 'react';

function Reviews() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/27/comments')
      .then(res => res.json())
      .then(data => setComments(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <section className="mt-16">
      <h2 className="text-sm font-bold text-indigo-500 uppercase tracking-widest mb-6">
        Відгуки (API)
      </h2>
      <div className="space-y-4">
        {comments.map(comment => (
          <div key={comment.id} className="p-5 bg-slate-50 rounded-xl border border-slate-100">
            <p className="font-bold text-sm text-slate-800">{comment.name}</p>
            <p className="text-xs text-slate-500 mb-3">{comment.email}</p>
            <p className="text-sm text-slate-600">{comment.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Reviews;