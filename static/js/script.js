console.log("working")
const text = "Revolutionizing the classroom with next-gen computer vision and voice biometrics. Trusted by educators for speed, accuracy, and security.";
const target = document.getElementById("hero-text");
let i = 0;

function typeWriter() {
  if (i < text.length) {
    target.textContent += text[i];
    i++;
    setTimeout(typeWriter, 60);
  }
}

typeWriter();