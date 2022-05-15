async function deleteFormHandler(event) {
  event.preventDefault();
  const id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];

  const deletePost = await fetch(`/api/posts/${id}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  });

  if (deletePost.ok) {
    console.log("Post deleted!");
    document.location.replace("/dashboard/");
  } else {
    console.log(deletePost.statusText);
  }
}

document
  .querySelector(".delete-post-btn")
  .addEventListener("click", deleteFormHandler);
