document.addEventListener("DOMContentLoaded", function () {

    /*=========================================================================
            Populate Achivements
    =========================================================================*/
    const achievementList = document.querySelector(".achievements-list");

    const achievements = [
        {
            "img_name": "world_skills",
            "title": "First Runner-Up World Skills Malaysia Sarawak Web Technologies",
            "description": "Achieved First Runner-Up in the prestigious World Skills Malaysia Sarawak Web Technologies Category, demonstrating advanced proficiency in full-stack web development in a competitive environment.",
            "date": "11 December 2023",
            "link": "https://www.facebook.com/share/p/1AVg1sHASj/"
        },
        {
            "img_name": "hack_wknd",
            "title": "First Place HackWknd Samarahan Best AI Innovation Award",
            "description": "Secured First Place in the HackWknd Samarahan and awarded the Best AI Innovation Award for developing a cutting-edge AI-powered system aimed at enhancing automation in education & smart technologies. ",
            "date": "13 December 2024",
            "link": "https://sdec.com.my/web/2024/12/13/hackwknd-kota-samarahan-2024-pioneering-ai-innovations-in-education/"
        },
        {
            "img_name": "top_coder",
            "title": "First Place TopCoder Malaysia University Level",
            "description": "Crowned Champion in the TopCoder Malaysia University Level competition, excelling in algorithmic programming, data structures, and competitive problem-solving using Python",
            "date": "9 December 2024",
            "link": "https://gazette.unimas.my/2024/12/09/top-coder-challenge-2024-at-fcsit-unimas/"
        },
        {
            "img_name": "majlis_dekan",
            "title": "Listed in Dean’s List – Majlis Anugerah Dekan 2025",
            "description": "Achieved a CGPA above 3.5 and was honored on the Dean's List during the Majlis Anugerah Dekan 2025, recognizing academic excellence and dedication throughout the semester.",
            "date": "30 April 2025",
            "link": ""
        },
        {
            "img_name": "aws_innovation_challenge",
            "title": "Won Top 3 and Special Recognition from AWS",
            "description": "Secured a Top 3 position and received Special Recognition from Amazon Web Services (AWS) at the AWS Innovation Challenge organized by SDEC. A proud achievement in showcasing innovative digital solutions for Sarawak's future.",
            "date": "17 April 2025",
            "link": "https://www.linkedin.com/posts/talithabeth_awsinnovationchallenge-sdec-sarawakdigital-activity-7320718111752540161--74n/"
        },
        {
            "img_name": "ppkomp",
            "title": "Sanjungan Kehormat PPKomp",
            "description": "Received the Sanjungan Kehormat (Honorary Recognition) from PPKomp, acknowledging outstanding performance and coding efficiency after being placed in the top 50 placement out of 150++ participants.",
            "date": "15 March 2021",
            "link": "https://www.ppkomp.com.my/2021/2021%20Individu%20Tengah.htm"
        }
    ];

    achievements.forEach(achievement => {
        // Create Achievement Card
        const achievementCard = document.createElement("div");
        achievementCard.classList.add("achievement-card", "wow", "fadeInUp");

        // Create link wrapper (so the whole card is clickable)
        const linkWrapper = document.createElement("a");
        linkWrapper.href = achievement.link;
        linkWrapper.target = "_blank";
        linkWrapper.classList.add("achievement-link");

        // Image Section
        const imageContainer = document.createElement("div");
        imageContainer.classList.add("achievement-image");

        const image = document.createElement("img");
        image.src = `img/achivements/${achievement.img_name}.png`;
        image.alt = achievement.title;

        const dateOverlay = document.createElement("span");
        dateOverlay.classList.add("achievement-date");
        dateOverlay.textContent = achievement.date;

        imageContainer.appendChild(image);
        imageContainer.appendChild(dateOverlay);

        // Content Section
        const contentContainer = document.createElement("div");
        contentContainer.classList.add("achievement-content");

        const title = document.createElement("h3");
        title.classList.add("achievement-title");
        title.textContent = achievement.title;

        const description = document.createElement("p");
        description.classList.add("achievement-description");
        description.textContent = achievement.description;

        contentContainer.appendChild(title);
        contentContainer.appendChild(description);

        // Append everything inside the link wrapper
        linkWrapper.appendChild(imageContainer);
        linkWrapper.appendChild(contentContainer);
        achievementCard.appendChild(linkWrapper);

        // Append card to achievements list
        achievementList.appendChild(achievementCard);
    });

    const techProList = document.querySelector(".tech-pro");

    const techStack = [
        { "name": "Html", "img_name": "tech_html5" },
        { "name": "Css", "img_name": "tech_css3" },
        { "name": "Javascript", "img_name": "tech_javascript" },
        { "name": "Pyhton", "img_name": "tech_python" },
        { "name": "Tailwind", "img_name": "tech_tailwind" },
        { "name": "Laravel", "img_name": "tech_laravel" },
        { "name": "Node.js", "img_name": "tech_nodejs" },
        { "name": "React", "img_name": "tech_react" },
        { "name": "Bootstrap", "img_name": "tech_bootstrap" },
        { "name": "MySQL", "img_name": "tech_mysql" },
        { "name": "Git", "img_name": "tech_git" },
        { "name": "Postman", "img_name": "tech_postman" },
        { "name": "Composer", "img_name": "tech_composer" },
        { "name": "C++", "img_name": "tech_cplus" },
        { "name": "C", "img_name": "tech_c" },
        { "name": "Linux", "img_name": "tech_linux" },
        { "name": "Docker", "img_name": "tech_docker" },
        { "name": "AWS", "img_name": "tech_AWS" },
        { "name": "Codeigniter", "img_name": "tech_CodeIgniter" },
    ];

    techStack.forEach(tech => {
        // Create tech item
        const techItem = document.createElement("div");
        techItem.classList.add("tech-item");

        // Create image
        const img = document.createElement("img");
        img.src = `img/tech/${tech.img_name}.png`;
        img.alt = tech.name;

        // Create hover text
        const hoverText = document.createElement("span");
        hoverText.classList.add("tech-hover-text");
        hoverText.textContent = tech.name;

        // Append elements
        techItem.appendChild(img);
        techItem.appendChild(hoverText);
        techProList.appendChild(techItem);
    });


    const softwareList = document.getElementById("accordion");

    const softwareStack = [
        { "name": "After Effects", "id": "collapse1", "description": "I would actively explore and experiment with various video editing techniques as I love creating short but visually packed videos." },
        { "name": "Premier Pro", "id": "collapse2", "description": "I created videos and montages as a freelance gig during my leisure time. My current knowledge of this software is quite sufficient for achieving good to great results." },
        { "name": "Photoshop", "id": "collapse3", "description": "I would occasionally create and edit images for events or personal projects." },
        { "name": "Laragon", "id": "collapse4", "description": "Used as my local development server for projects. Very familiar with this software." },
        { "name": "GitHub", "id": "collapse5", "description": "The main version control software that I use for my projects. Quite familiar with the basics of GitHub." },
        { "name": "Visual Studio Code", "id": "collapse6", "description": "My main IDE that I am very familiar with in terms of ease of use and versatility." },
        { "name": "CPanel", "id": "collapse7", "description": "Actively experimenting and exploring various features and capabilities of CPanel. This website, for example, has been configured and deployed on a shared hosting server using CPanel." }
    ];

    softwareStack.forEach((software, index) => {
        // Create software card
        const card = document.createElement("div");
        card.classList.add("card");

        // Create software header with collapse functionality
        const cardHeader = document.createElement("a");
        cardHeader.classList.add("card-link", "card-header");
        cardHeader.setAttribute("data-toggle", "collapse");
        cardHeader.setAttribute("href", `#${software.id}`);

        // Create row for software title and icon
        const row = document.createElement("div");
        row.classList.add("row", "w-auto", "justify-content-between");

        // Title column
        const titleCol = document.createElement("div");
        titleCol.classList.add("col");
        titleCol.textContent = software.name;

        // Icon column
        const iconCol = document.createElement("div");
        iconCol.classList.add("col", "text-right");

        // Collapse icon
        const svgIcon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svgIcon.setAttribute("xmlns", "http://www.w3.org/2000/svg");
        svgIcon.setAttribute("width", "30");
        svgIcon.setAttribute("height", "30");
        svgIcon.setAttribute("viewBox", "0 0 24 24");
        svgIcon.setAttribute("fill", "none");
        svgIcon.setAttribute("stroke", "currentColor");
        svgIcon.setAttribute("stroke-width", "2");
        svgIcon.setAttribute("stroke-linecap", "round");
        svgIcon.setAttribute("stroke-linejoin", "round");
        svgIcon.classList.add("lucide", "lucide-chevron-down");

        const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
        path.setAttribute("d", "m6 9 6 6 6-6");
        svgIcon.appendChild(path);

        iconCol.appendChild(svgIcon);
        row.appendChild(titleCol);
        row.appendChild(iconCol);
        cardHeader.appendChild(row);

        // Create software description collapse content
        const collapseDiv = document.createElement("div");
        collapseDiv.id = software.id;
        collapseDiv.classList.add("collapse");
        collapseDiv.setAttribute("data-parent", "#accordion");

        const cardBody = document.createElement("div");
        cardBody.classList.add("card-body");
        cardBody.textContent = software.description;

        collapseDiv.appendChild(cardBody);
        card.appendChild(cardHeader);
        card.appendChild(collapseDiv);
        softwareList.appendChild(card);
    });

    // Add a mandatory 2-second delay before removing the loader
    setTimeout(() => {
        document.body.classList.add("loaded");
    }, 0);
});

/*=========================================================================
TEST AJAX
=========================================================================*/

document.getElementById('submit-contact').addEventListener('click', function (e) {
    e.preventDefault();
    // var data = $('#form-data').serialize();
    $.ajax({
        type: 'post',
        url: '/store',
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        },
        data: {
            name: $('#name').val(),
            email: $('#email').val(),
            message: $('#message').val()
        },
        success: function (response) {
            if (response.status === true) {
                Swal.fire({
                    color: '#999',
                    title: 'Sucessfully Submitted',
                    background: '#292929',
                })
            } else if (response.status === false) {
                Swal.fire({
                    color: '#999',
                    title: 'Failed To Be Submitted',
                    background: '#292929',
                })
            }
            console.log(response)
        },
        error: function (response) {
            Swal.fire({
                color: '#999',
                title: 'Unknown Error',
                background: '#292929',
            })
        },
    });
});

/*=========================================================================
Event Listeners
=========================================================================*/

//EMAIL
document.getElementById("copy-email").addEventListener("click", CopyEmail);

/*=========================================================================
Social Links New Tab
=========================================================================*/

const toGithub = document.getElementsByClassName("to-github");
const toLinkedIn = document.getElementsByClassName("to-linkedin");
const toStack = document.getElementsByClassName("to-stack");

// Function to attach event listeners correctly
function addSocialEventListeners(elements, link) {
    for (const element of elements) {
        element.addEventListener('click', function () {
            ToSocial(link);
        });
    }
}

// Attach event listeners
addSocialEventListeners(toGithub, "https://github.com/YesImDexter");
addSocialEventListeners(toLinkedIn, "https://www.linkedin.com/in/dexter-skudd-607b58253/");
addSocialEventListeners(toStack, "https://stackoverflow.com/users/20278424/dexter-skudd");

function ToSocial(link) {
    // console.log("Sent");
    window.open(link, "_blank");
}

/*=========================================================================
Copy Email
=========================================================================*/

function CopyEmail() {

    // Copy the text inside the text field
    let email = "DexterS0202@gmail.com";
    const clipBoard = navigator.clipboard;
    if (clipBoard.writeText(email)) {
        Swal.fire({
            color: '#999',
            title: 'Copied to Clipboard',
            background: '#292929',
        })
    } else {
        Swal.fire('Failed to Copy');
    }
}

$(function () {
    "use strict";

    // Remove the previous window load event for the loader
    // $(window).on("load", function () {
    //     $("body").addClass("loaded");
    // });

    /*=========================================================================
        Burger Menu
    =========================================================================*/
    var burgerMenu = function () {
        $(".js-addo-nav-toggle").on("click", function (event) {
            event.preventDefault();
            var $this = $(this);
            if ($("body").hasClass("offcanvas")) {
                $this.removeClass("active");
                $("body").removeClass("offcanvas");
            } else {
                $this.addClass("active");
                $("body").addClass("offcanvas");
            }
        });
    };

    // Click outside of offcanvass
    var mobileMenuOutsideClick = function () {
        $(document).click(function (e) {
            var container = $("#addo-aside, .js-addo-nav-toggle");
            if (
                !container.is(e.target) &&
                container.has(e.target).length === 0
            ) {
                if ($("body").hasClass("offcanvas")) {
                    $("body").removeClass("offcanvas");
                    $(".js-addo-nav-toggle").removeClass("active");
                }
            }
        });
        $(window).scroll(function () {
            if ($("body").hasClass("offcanvas")) {
                $("body").removeClass("offcanvas");
                $(".js-addo-nav-toggle").removeClass("active");
            }
        });
    };
    var wind = $(window);

    /*=========================================================================
        Typed js Active
    =========================================================================*/
    $(".typed").typed({
        strings: ["Programmer.", "Designer.", "Developer.", "Technician", "Videographer"],
        loop: true,
        typeSpeed: 200,
    });

    /*=========================================================================
        Portfolios
    =========================================================================*/
    $(".portfolio-items").imagesLoaded(function () {
        // Add isotope click function
        $(".portfolio-filter li").on("click", function () {
            $(".portfolio-filter li").removeClass("active");
            $(this).addClass("active");

            var selector = $(this).attr("data-filter");
            $(".portfolio-items").isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: "linear",
                    queue: false,
                },
            });
            return false;
        });

        $(".portfolio-items").isotope({
            itemSelector: ".single-item",
            layoutMode: "masonry",
        });
    });

    /*=========================================================================
            Active venobox ( Porjects List )
    =========================================================================*/

    $(".pop-up").venobox({
        numeration: true,
        infinigall: true,
        spinner: "wave",
        shareStyle: "pill",
    });

    /*=========================================================================
        Testimonial Carousel
    =========================================================================*/
    $("#testimonial-carousel").owlCarousel({
        loop: true,
        margin: 10,
        center: false,
        autoplay: true,
        smartSpeed: 500,
        nav: false,
        navText: [
            '<i class="fa fa-caret-left"></i>',
            '<i class="fa fa-caret-right"></i>',
        ],
        dots: true,
        responsive: {
            0: {
                items: 1,
            },
            480: {
                items: 1,
            },
            768: {
                items: 2,
            },
            992: {
                items: 2,
            },
        },
    });

    /*=========================================================================
        wow Settings
    =========================================================================*/
    var wow = new WOW({
        mobile: false,
        offset: 0,
    });
    wow.init();
    // scroll
    $.scrollIt({
        upKey: 38, // key code to navigate to the next section
        downKey: 40, // key code to navigate to the previous section
        easing: "swing", // the easing function for animation
        scrollTime: 600, // how long (in ms) the animation takes
        activeClass: "active", // class given to the active nav element
        onPageChange: null, // function(pageIndex) that is called when page is changed
        topOffset: 0, // offste (in px) for fixed top navigation
    });

    /*=========================================================================
    Hover Effect On Mobile
    =========================================================================*/

    $(".gridItem").bind("touchstart touchend", function (e) {
        e.preventDefault();
        $(this).toggleClass("hover_effect");
    });
});