const CommentContainer = () => {
  const commentsData = [
    {
      name: "Avi",
      text: "The video is very good",
      replies: [
        {
          name: "Avi",
          text: "The video is very good",
          replies: [
            {
              name: "Avi",
              text: "The video is very good",
              replies: [
                {
                  name: "Avi",
                  text: "The video is very good",
                  replies: [],
                },
              ],
            },
          ],
        },
        {
          name: "Avi",
          text: "The video is very good",
          replies: [
            {
              name: "Avi",
              text: "The video is very good",
              replies: [
                {
                  name: "Avi",
                  text: "The video is very good",
                  replies: [
                    {
                      name: "Avi",
                      text: "The video is very good",
                      replies: [],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "Avi",
      text: "The video is very good",
      replies: [{
        name: "Avi",
        text: "The video is very good",
        replies: [{
            name: "Avi",
            text: "The video is very good",
            replies: [],
          },],
      },],
    },
    {
      name: "Avi",
      text: "The video is very good",
      replies: [{
        name: "Avi",
        text: "The video is very good",
        replies: [],
      },],
    },
    {
      name: "Avi",
      text: "The video is very good",
      replies: [],
    },
    {
      name: "Avi",
      text: "The video is very good",
      replies: [],
    },
  ];

  const Comment = ({ data }) => {
    const { name, text, replies } = data;
    return (
      <div className="flex p-2 shadow-sm bg-gray-100 rounded-lg my-2">
        <img
          className="w-8 h-8"
          alt="user-logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmXysOIBN-iJZ71PxpFuKwOxvH9ZPietXw8pW5FpuCaQI4Y1OtXISofDfJbKmotwYueEA&usqp=CAU"
        />
        <div className="px-3">
          <p className="font-bold">{name}</p>
          <p className="">{text}</p>
        </div>
      </div>
    );
  };

  const CommentList = ({ comments }) => {
    return (
      <div>
        {comments.map((comment, index) => (
          <div key={index}>
            <Comment  data={comment} />
            <div className=" border border-l-black pl-5">
              <CommentList comments={comment.replies} />
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl fond-bold">Comments</h1>
      <CommentList comments={commentsData} />
    </div>
  );
};

export default CommentContainer;
