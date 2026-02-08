function showPage(id) {
    document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
    document.getElementById(id).classList.add("active");
}

const courseLessons = {
    "HTML & CSS": [
        { title: "HTML Basics", video: "https://www.youtube.com/embed/pQN-pnXPaVg" },
        { title: "CSS Basics", video: "https://www.youtube.com/embed/yfoY53QXEnI" }
    ],

    "JavaScript": [
        { title: "JavaScript Intro", video: "https://www.youtube.com/embed/hdI2bqOjy3c" }
    ],

    "Node.js": [
        { title: "Node Crash Course", video: "https://www.youtube.com/embed/TlB_eWDSMt4" }
    ],

    "React.js": [
        { title: "React Basics", video: "https://www.youtube.com/embed/w7ejDZ8SWv8" }
    ]
};

function openCourse(name) {
    showPage("player");

    document.getElementById("courseTitle").innerText = name;

    const list = document.getElementById("lessonList");
    list.innerHTML = "";

    courseLessons[name].forEach((lesson, i) => {
        const li = document.createElement("li");
        li.innerText = lesson.title;

        li.onclick = () => loadVideo(lesson.video);

        list.appendChild(li);

        if (i === 0) loadVideo(lesson.video);
    });
}

function loadVideo(url) {
    document.getElementById("videoPlayer").src = url;
}

function filterCourse(type) {
    document.querySelectorAll(".course-card").forEach(card => {
        card.style.display =
            type === "all" || card.classList.contains(type)
                ? "block"
                : "none";
    });
}

function searchCourse() {
    let text = document.getElementById("search").value.toLowerCase();

    document.querySelectorAll(".course-card").forEach(card => {
        let title = card.querySelector("h3").innerText.toLowerCase();

        card.style.display = title.includes(text) ? "block" : "none";
    });
}

showPage("home");
function toggleMenu() {
    document.getElementById("navMenu").classList.toggle("active");
}

