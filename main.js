AOS.init({
    duration: 2000,
    once: true
});

  const words = ["Creative Developer", "Frontend Developer", "UI/UX Designer", "Software Engineering Student"];
  let i = 0;
  let timer;

  function typingEffect() {
    let word = words[i].split("");
    var loopTyping = function() {
      if (word.length > 0) {
        document.getElementById('typed-text').innerHTML += word.shift();
      } else {
        setTimeout(deletingEffect, 2000); // 2 sec rukne ke baad delete hoga
        return;
      }
      timer = setTimeout(loopTyping, 100);
    };
    loopTyping();
  }

  function deletingEffect() {
    let word = words[i].split("");
    var loopDeleting = function() {
      if (word.length > 0) {
        word.pop();
        document.getElementById('typed-text').innerHTML = word.join("");
      } else {
        i = (i + 1) % words.length;
        setTimeout(typingEffect, 500); // agla lafz shuru hone se pehle gap
        return;
      }
      timer = setTimeout(loopDeleting, 50);
    };
    loopDeleting();
  }

  typingEffect();
