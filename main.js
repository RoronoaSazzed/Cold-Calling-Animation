const users = document.querySelectorAll(".user");
const small_users = document.querySelectorAll(".small_user");
const lines = document.querySelectorAll(".line");
const line_tops = document.querySelectorAll(".line_top");

const dura = 1800;
const userAnimations = `user__animation ${dura * 3}ms ease-out forwards`;

const lineAnimations = [
  `c1 ${dura}ms linear forwards`,
  `c2 ${dura}ms linear forwards`,
  `c3 ${dura}ms linear forwards`,
  `c4 ${dura}ms linear forwards`,
  `c5 ${dura}ms linear forwards`,
  `c6 ${dura}ms linear forwards`,
  `c7 ${dura}ms linear forwards`,
  `c8 ${dura}ms linear forwards`,
];

const lineTopAnimations = [
  `c1__top ${dura}ms linear forwards`,
  `c2__top ${dura}ms linear forwards`,
  `c3__top ${dura}ms linear forwards`,
  `c4__top ${dura}ms linear forwards`,
  `c5__top ${dura}ms linear forwards`,
  `c6__top ${dura}ms linear forwards`,
  `c7__top ${dura}ms linear forwards`,
  `c8__top ${dura}ms linear forwards`,
];

const smallUserAnimations = `small__user__animation ${
  dura - 300
}ms linear forwards`;

users.forEach((user, i) => {
  const next = i === users.length - 1 ? 0 : i + 1;
  user.addEventListener("animationstart", function () {
    // Second animation with delay
    setTimeout(function () {
      lines[i].style.animation = lineAnimations[i];
    }, dura / 4);
    // Third animation with delay
    setTimeout(function () {
      line_tops[i].style.animation = lineTopAnimations[i];
    }, dura - dura / 4);
    // Fourth animation after delay
    setTimeout(function () {
      small_users[i].style.animation = smallUserAnimations;
    }, dura + dura / 2);

    // Setting up next animation
    setTimeout(function () {
      users[next].style.animation = userAnimations;
    }, dura * 3 - 500);
  });

  user.addEventListener("animationend", function () {
    user.style.animation = "none";
    lines[i].style.animation = "none";
    line_tops[i].style.animation = "none";
    small_users[i].style.animation = "none";
  });
});

const start = 0;
users[start].style.animation = userAnimations;
