import React, { useState } from "react";
import './AgentVoting.css'; // Import the CSS file here

interface Submission {
  id: number;
  username: string;
  item: string;
  upVotes: number;
  downVotes: number;
}

const AgentVoting: React.FC = () => {
  const [submissions, setSubmissions] = useState<Submission[]>([
    { id: 1, username: "User1", item: "Add FlashLoan Reciever Module", upVotes: 3, downVotes: 1 },
    { id: 2, username: "User2", item: "Remove Tiktok Plugin", upVotes: 5, downVotes: 0 },
    { id: 3, username: "User3", item: "Upgrade Discord Plugin", upVotes: 2, downVotes: 2 },
  ]);

  const handleVote = (id: number, type: "up" | "down") => {
    setSubmissions((prevSubmissions) =>
      prevSubmissions.map((submission) =>
        submission.id === id
          ? {
              ...submission,
              upVotes: type === "up" ? submission.upVotes + 1 : submission.upVotes,
              downVotes: type === "down" ? submission.downVotes + 1 : submission.downVotes,
            }
          : submission
      )
    );
  };

  return (
    <div className="container">  {/* Center the content */}
      <div className="content-wrapper">  {/* Wrapper for content */}
        <h2 className="text-2xl font-bold text-[#fd01f5]">Next Epoch Settings</h2>
        <div className="mt-4 table-container">
          <table className="min-w-full table-auto">
            <thead>
              <tr>
                <th className="text-left text-accent1 py-2 px-4 sm:block hidden">User</th> {/* Show on desktop, hide on mobile */}
                <th className="text-left text-accent1 py-2 px-4">Item</th>
                <th className="text-left text-accent1 py-2 px-4">Yes</th>
                <th className="text-left text-accent1 py-2 px-4">No</th>
                <th className="text-left text-accent1 py-2 px-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {submissions.map((submission) => (
                <tr key={submission.id} className="border-t border-gray-700">
                  <td className="py-2 px-4 text-white sm:block hidden">{submission.username}</td> {/* Show on desktop, hide on mobile */}
                  <td className="py-2 px-4 text-white">{submission.item}</td>
                  <td className="py-2 px-4 text-white">{submission.upVotes}</td>
                  <td className="py-2 px-4 text-white">{submission.downVotes}</td>
                  <td className="py-2 px-4">
                    <div className="widget-vertical center-left">
                      <div className="thumbs">
                        {/* Upvote Button */}
                        <div
                          className="thumb-button upvote-button"
                          onClick={() => handleVote(submission.id, "up")}
                        >
                          <i className="thumbs-icon thumbs-icon-up">👍</i>
                          <p className="hidden sm:block">YES</p> {/* Hide on mobile, show on desktop */}
                        </div>

                        {/* Downvote Button */}
                        <div
                          className="thumb-button downvote-button"
                          onClick={() => handleVote(submission.id, "down")}
                        >
                          <i className="thumbs-icon thumbs-icon-down">👎</i>
                          <p className="hidden sm:block">NO</p> {/* Hide on mobile, show on desktop */}
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AgentVoting;
