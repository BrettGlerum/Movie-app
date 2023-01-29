const reviewaddHandler = async (event) => {
  event.preventDefault();

  // Collect values from the review form
  const review = document.querySelector("#review-signup").value.trim();
  const id = document.querySelector(".movie").dataset.movie_id;
  console.log(id);
  if (review) {
    // Send a POST request to the API endpoint

    const response = await fetch("/api/reviews", {
      method: "POST",
      body: JSON.stringify({ review, id }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      // If successful, redirect the browser to the profile page
      document.location.reload();
    } else {
      alert(response.statusText);
    }
  }
};
document
  .querySelector(".review-form")
  .addEventListener("submit", reviewaddHandler);