function showPage(pageId) {
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
  document.getElementById(pageId).classList.add("active");
}

function toggleInfo(el) {
  const extra = el.querySelector(".extra-info");
  if (extra) extra.classList.toggle("hidden");
}

function addMeal() {
  const name = document.getElementById("mealName").value;
  const cal = document.getElementById("mealCalories").value;
  if (!name || !cal) return;
  const list = document.getElementById("mealList");
  const item = document.createElement("p");
  item.textContent = `${name} - ${cal} cal`;
  list.appendChild(item);
}

function addWorkout() {
  const ex = document.getElementById("exerciseName").value;
  const sets = document.getElementById("exerciseSets").value;
  const reps = document.getElementById("exerciseReps").value;
  if (!ex || !sets || !reps) return;
  const list = document.getElementById("workoutList");
  const item = document.createElement("p");
  item.textContent = `${ex}: ${sets}×${reps}`;
  list.appendChild(item);
}
// Community Post System
function addPost() {
  const postText = document.getElementById("postText").value.trim();
  const postImage = document.getElementById("postImage").files[0];
  const postsFeed = document.getElementById("postsFeed");

  if (!postText && !postImage) {
    alert("⚠️ Please write something or upload an image!");
    return;
  }

  const postCard = document.createElement("div");
  postCard.classList.add("post-card");

  let content = "";
  if (postText) {
    content += `<p>${postText}</p>`;
  }
  
  if (postImage) {
    const imgURL = URL.createObjectURL(postImage);
    content += `<img src="${imgURL}" alt="User Post">`;
  }

  postCard.innerHTML = content;
  postsFeed.prepend(postCard);

  // Reset form
  document.getElementById("postText").value = "";
  document.getElementById("postImage").value = "";
}
