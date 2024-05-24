export const watchPost = async (data) => {
  await fetch("http://localhost:3100", {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(data),
  });
};

export const watchDelete = async (id) => {
  await fetch(`http://localhost:3100/${id}`, {
    method: "DELETE",
  });
};
