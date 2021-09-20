<!DOCTYPE html>

    <html lang="es">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>

        <link href='https://unpkg.com/boxicons@2.0.9/css/boxicons.min.css' rel='stylesheet'>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/>
        <link rel="stylesheet" href="css/swiper-bundle.min.css">

        <link rel="stylesheet" href="css/style.css">

        <title>Joaquin Javier Pastore Barrios - Web & App Developer</title>

    </head>
    <body>

        <header class="header" id="header">
            <nav class="nav container">
                <a href="#" class="nav_logo">Joaquin</a>
                <div class="nav_menu" id="nav-menu">
                    <ul class="nav_list grid">
                        <li class="nav_item">
                            <a href="#home" class="nav_link active-link">
                                <i class='bx bx-home-alt nav_icon'></i> Inicio
                            </a>
                        </li>
                        <li class="nav_item">
                            <a href="#about" class="nav_link">
                                <i class='bx bx-user nav_icon'></i> Perfil
                            </a>
                        </li>
                        <li class="nav_item">
                            <a href="#skills" class="nav_link">
                                <i class='bx bx-file nav_icon'></i> Habilidades
                            </a>
                        </li>
                        <li class="nav_item">
                            <a href="#studies" class="nav_link">
                                <i class='bx bx-book-bookmark nav_icon'></i> Estudios
                            </a>
                        </li>
                        <li class="nav_item">
                            <a href="#portfolio" class="nav_link">
                                <i class='bx bxs-image nav_icon'></i> Portfolio
                            </a>
                        </li>
                        <li class="nav_item">
                            <a href="#contact" class="nav_link">
                                <i class='bx bx-message-alt-detail nav_icon'></i> Contacto
                            </a>
                        </li>
                    </ul>
                    <i class='bx bx-x nav_close' id="nav-close"></i>
                </div>
                <div class="nav_btns">
                    <i class='bx bx-moon change_theme' id="theme-button"></i>
                    <div class="nav_toggle" id="nav-toggle">
                        <i class='bx bx-grid-alt'></i>
                    </div>
                </div>
            </nav>
        </header>

        <main class="main">

            <section class="home section" id="home">
                <div class="home_container container grid">
                    <div class="home_content grid">
                        <div class="home_social">
                            <a href="https://www.linkedin.com" target="_blank" class="home_social-icon">
                                <i class='bx bxl-linkedin-square'></i>
                            </a>
                            <a href="https://www.github.com/JoaquinJPB" target="_blank" class="home_social-icon">
                                <i class='bx bxl-github'></i>
                            </a>
                        </div>
                        <div class="home_img">
                            <svg class="home_blob" viewBox="0 0 200 187" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                <mask id="mask0" mask-type="alpha">
                                    <path d="M58.5,-17.3C67.6,8.8,60.9,41.7,38.9,58.9C16.9,76.1,-20.3,77.7,
                                    -38.6,62.2C-56.9,46.8,-56.3,14.3,-46.7,-12.5C-37.1,-39.4,-18.6,-60.7,3.1,
                                    -61.8C24.8,-62.8,49.5,-43.4,58.5,-17.3Z" transform="translate(100 100)"/>
                                </mask>
                                <g mask="url(#mask0)">
                                    <path d="M58.5,-17.3C67.6,8.8,60.9,41.7,38.9,58.9C16.9,76.1,-20.3,77.7,
                                    -38.6,62.2C-56.9,46.8,-56.3,14.3,-46.7,-12.5C-37.1,-39.4,-18.6,-60.7,3.1,
                                    -61.8C24.8,-62.8,49.5,-43.4,58.5,-17.3Z" transform="translate(100 100)"/>
                                    <image class="home_blob-img" x="60" y="60" xlink:href="images/perfil_2.png"/>
                                </g>
                            </svg>
                        </div>
                        <div class="home_data">
                            <h1 class="home_title wow animate__animated animate__slideInLeft">!Hey, soy Joaquin!</h1>
                            <h3 class="home_subtitle">Web & App Developer</h3>
                            <p class="home_description">Actualmente soy estudiante de la Universidad, y mientras estudio, me intereso por los temas más actuales del mundo de la tecnología.</p>
                            <a href="#contact" class="button button--flex">
                                Contacto <i class='bx bxs-user-circle button_icon'></i>
                            </a>
                        </div>
                    </div>
                    <div class="home_scroll">
                        <a href="#about" class="home_scroll-button button--flex">
                            <i class='bx bx-mouse home_scroll-mouse'></i>
                            <span class="home_scroll-name">Mas info</span>
                            <i class='bx bx-down-arrow-alt home_scroll-arrow'></i>
                        </a>
                    </div>
                </div>
            </section>

            <section class="about section" id="about">
                <h2 class="section_title">Mi Perfil</h2>
                <span class="section_subtitle">Introducción</span>

                <div class="about_container container grid">
                    <img src="images/perfil.jpeg" alt="perfil" class="about_img">
                    <div class="about_data">
                        <p class="about_description">Suelo desarrollar mis propios proyectos para aprender más y adquirir muchos más conocimientos.
                            Ahora mismo estoy muy interesado en el desarrollo web. Pero, siempre estoy dispuesto a trabajar y aprender en cualquier proyecto.</p>
                        <div class="about_info">
                            <div>
                                <span class="about_info-title">+3</span>
                                <span class="about_info-name">Proyectos <br> completados</span>
                            </div>
                            <div>
                                <span class="about_info-title" id="age"></span>
                                <span class="about_info-name">Edad</span>
                            </div>
                        </div>
                        <div class="about_buttons">
                            <a href="CV.pdf" class="button button--flex" download="CV_Joaquin">
                                Descargar CV <i class='bx bx-download button_icon'></i>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <section class="skills section" id="skills">
                <h2 class="section_title">Habilidades</h2>
                <span class="section_subtitle">Mi desarrollo personal</span>

                <div class="skills_container container grid">
                    <div>
                        <div class="skills_content skills_open">
                            <div class="skills_header">
                                <i class='bx bx-code-block skills_icon'></i>
                                <div>
                                    <h1 class="skills_title">Frontend Developer</h1>
                                    <span class="skills_subtitle">Más de 3 años</span>
                                </div>
                                <i class='bx bx-chevron-down bx-flip-horizontal skills_arrow' ></i>
                            </div>
                            <div class="skills_list grid">
                                <div class="skills_data">
                                    <div class="skills_titles">
                                        <div class="skills_row">
                                            <h3 class="skills_name">HTML</h3>
                                            <i class='bx bxl-html5 skills_icon_row'></i>
                                        </div>
                                        <span class="skills_number">90%</span>
                                    </div>
                                    <div class="skills_bar">
                                        <span class="skills_percentage skills_html"></span>
                                    </div>
                                </div>
                                <div class="skills_data">
                                    <div class="skills_titles">
                                        <div class="skills_row">
                                            <h3 class="skills_name">CSS</h3>
                                            <i class='bx bxl-css3 skills_icon_row'></i>
                                        </div>
                                        <span class="skills_number">70%</span>
                                    </div>
                                    <div class="skills_bar">
                                        <span class="skills_percentage skills_css"></span>
                                    </div>
                                </div>
                                <div class="skills_data">
                                    <div class="skills_titles">
                                        <div class="skills_row">
                                            <h3 class="skills_name">JavaScript</h3>
                                            <i class='bx bxl-javascript skills_icon_row'></i>
                                        </div>
                                        <span class="skills_number">60%</span>
                                    </div>
                                    <div class="skills_bar">
                                        <span class="skills_percentage skills_js"></span>
                                    </div>
                                </div>
                                <div class="skills_data">
                                    <div class="skills_titles">
                                        <div class="skills_row">
                                            <h3 class="skills_name">React</h3>
                                            <i class='bx bxl-react skills_icon_row'></i>
                                        </div>
                                        <span class="skills_number">20%</span>
                                    </div>
                                    <div class="skills_bar">
                                        <span class="skills_percentage skills_react"></span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="skills_content skills_close">
                            <div class="skills_header">
                                <i class='bx bxs-server skills_icon'></i>
                                <div>
                                    <h1 class="skills_title">Backend Developer</h1>
                                    <span class="skills_subtitle">Más de 2 años</span>
                                </div>
                                <i class='bx bx-chevron-down bx-flip-horizontal skills_arrow'></i>
                            </div>
                            <div class="skills_list grid">
                                <div class="skills_data">
                                    <div class="skills_titles">
                                        <div class="skills_row">
                                            <h3 class="skills_name">PHP</h3>
                                            <i class='bx bxl-php skills_icon_row'></i>
                                        </div>
                                        <span class="skills_number">60%</span>
                                    </div>
                                    <div class="skills_bar">
                                        <span class="skills_percentage skills_php"></span>
                                    </div>
                                </div>
                                <div class="skills_data">
                                    <div class="skills_titles">
                                        <div class="skills_row">
                                            <h3 class="skills_name">Node Js</h3>
                                            <i class='bx bxl-nodejs skills_icon_row'></i>
                                        </div>
                                        <span class="skills_number">20%</span>
                                    </div>
                                    <div class="skills_bar">
                                        <span class="skills_percentage skills_node"></span>
                                    </div>
                                </div>
                                <div class="skills_data">
                                    <div class="skills_titles">
                                        <div class="skills_row">
                                            <h3 class="skills_name">Firebase</h3>
                                            <i class='bx bxl-firebase skills_icon_row' ></i>
                                        </div>
                                        <span class="skills_number">30%</span>
                                    </div>
                                    <div class="skills_bar">
                                        <span class="skills_percentage skills_firebase"></span>
                                    </div>
                                </div>
                                <div class="skills_data">
                                    <div class="skills_titles">
                                        <div class="skills_row">
                                            <h3 class="skills_name">Python</h3>
                                            <i class='bx bxl-python skills_icon_row'></i>
                                        </div>
                                        <span class="skills_number">35%</span>
                                    </div>
                                    <div class="skills_bar">
                                        <span class="skills_percentage skills_python"></span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section class="qualification section" id="studies">
                <h2 class="section_title">Estudios</h2>
                <span class="section_subtitle">Mi viaje personal</span>

                <div class="qualification_container container">
                    <div class="qualification_tabs">
                        <div class="qualification_button button--flex qualification_active" data-target='#education'>
                            <i class='bx bxs-graduation qualification_icon'></i>
                            Educación
                        </div>
                        <div class="qualification_button button--flex" data-target='#work'>
                            <i class='bx bxs-briefcase qualification_icon'></i>
                            Trabajo
                        </div>
                    </div>

                    <div class="qualification_sections">
                        <div class="qualification_content qualification_active" data-content id="education">
                            <div class="qualification_data">
                                <div>
                                    <h3 class="qualification_title">Bachillerato Tecnológico</h3>
                                    <span class="qualification_subtitle">España - IES Alonso Quesada</span>
                                    <div class="qualification_calendar">
                                        <i class='bx bxs-calendar'></i>
                                        2016-2018
                                    </div>
                                </div>

                                <div>
                                    <span class="qualification_rounder"></span>
                                    <span class="qualification_line"></span>
                                </div>
                            </div>

                            <div class="qualification_data">
                                <div></div>

                                <div>
                                    <span class="qualification_rounder"></span>
                                    <span class="qualifications_line"></span>
                                </div>

                                <div>
                                    <h3 class="qualification_title">Grado en Ingeniería Informática</h3>
                                    <span class="qualification_subtitle">España - Universidad de las Palmas de G.C</span>
                                    <div class="qualification_calendar">
                                        <i class='bx bxs-calendar'></i>
                                        2018-2022
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="qualification_content" data-content id="work">
                            <div class="qualification_data">
                                <div>
                                    <h3 class="qualification_title">Prácticas Externas</h3>
                                    <span class="qualification_subtitle">Sic4Change</span>
                                    <div class="qualification_calendar">
                                        <i class='bx bxs-calendar'></i>
                                        2021-2022
                                    </div>
                                </div>
                                <div>
                                    <span class="qualification_rounder"></span>
                                    <span class="qualification_line"></span>
                                </div>
                        </div>
                    </div>

                </div>
            </section>

            <section class="portfolio section" id="portfolio">
                <h2 class="section_title">Portfolio</h2>
                <span class="section_subtitle">Mis proyectos más recientes</span>

                <div class="portfolio_container container swiper mySwiper">
                    <div class="swiper-wrapper">
                        <div class="portfolio_content grid swiper-slide">
                            <img src="images/todo-list-js.png" alt="todo-list-js" class="portfolio_img">

                            <div class="portfolio_data">
                                <h3 class="portfolio_title">To-Do List</h3>
                                <p class="portfolio_description">Proyecto desarrollado mediante JavaScript & NodeJS para crear un listado de tareas pendientes que puede ayudarte a gestionar el día a día.</p>
                                <a href="https://github.com/JoaquinJPB/JSTodoList" class="button button--flex button--small portfolio_button" target="_blank">
                                    Github
                                    <i class='bx bxl-github'></i>
                                    <i class='bx bx-right-arrow-alt button_icon'></i>
                                </a>
                            </div>
                        </div>

                        <div class="portfolio_content grid swiper-slide">
                            <img src="images/artificial-neural-network.jpg" alt="Red neuronal" class="portfolio_img">

                            <div class="portfolio_data">
                                <h3 class="portfolio_title">Reconocimiento de imagenes mediante inteligencia artificial</h3>
                                <p class="portfolio_description">Proyecto desarrollado con Python, para permitir clasificar imagenes mediante inteligencia artificial.</p>
                                <a href="https://github.com/JoaquinJPB/AI-ImageRecognition" class="button button--flex button--small portfolio_button" target="_blank">
                                    Github
                                    <i class='bx bxl-github'></i>
                                    <i class='bx bx-right-arrow-alt button_icon'></i>
                                </a>
                            </div>
                        </div>

                        <div class="portfolio_content grid swiper-slide">
                            <img src="images/stardew-valley.PNG" alt="Stardew-Valley-memory-game" class="portfolio_img">

                            <div class="portfolio_data">
                                <h3 class="portfolio_title">Stardew Valley: Juego de Memoria</h3>
                                <p class="portfolio_description">Proyecto desarrollado en JavaScript Vanilla, para crear un juego de memoria inspirado en el famoso juego Stardew Valley.</p>
                                <a href="https://joaquinjpb.github.io/Stardew-Valley-memory-game/" class="button button--flex button--small portfolio_button" target="_blank">
                                    Sitio Web
                                    <i class='bx bx-right-arrow-alt button_icon'></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div class="swiper-button-next">
                        <i class='bx bx-chevron-right swiper-portfolio-icon'></i>
                    </div>
                    <div class="swiper-button-prev">
                        <i class='bx bx-chevron-left swiper-portfolio-icon'></i>
                    </div>
                    <div class="swiper-pagination sw"></div>

                </div>

            </section>

            <section class="contact section" id="contact">
                <h2 class="section_title">Contacto</h2>
                <span class="section_subtitle">!Caminemos al exito!</span>

                <div class="contact_container container grid">
                    <div>
                        <div class="contact_info">
                            <i class='bx bxs-envelope contact_icon'></i>
                            <div>
                                <h3 class="contact_title">Email</h3>
                                <span class="contact_subtitle">pastorebarriosjoaquin@gmail.com</span>
                            </div>
                        </div>

                        <div class="contact_info">
                            <i class='bx bxs-map contact_icon'></i>
                            <div>
                                <h3 class="contact_title">Localización</h3>
                                <span class="contact_subtitle">España - Gran Canaria, Las Palmas de G.C</span>
                            </div>
                        </div>
                    </div>
                    <form action="" class="contact_form grid">
                        <div class="contact_inputs grid">
                            <div class="contact_content">
                                <label for="" class="contact_label">Nombre</label>
                                <input type="text" class="contact_input">
                            </div>
                            <div class="contact_content">
                                <label for="" class="contact_label">Email</label>
                                <input type="email" class="contact_input">
                            </div>
                        </div>
                        <div class="contact_content">
                            <label for="" class="contact_label">Proyecto</label>
                            <input type="text" class="contact_input">
                        </div>
                        <div class="contact_content">
                            <label for="" class="contact_label">Mensaje</label>
                            <textarea name="" id="" cols="0" rows="7" class="contact_input"></textarea>
                        </div>

                        <div>
                            <a href="#" class="button button--flex">
                                Enviar Mensaje
                                <i class='bx bxs-send button_icon'></i>
                            </a>
                        </div>

                    </form>
                </div>
            </section>

        </main>

        <footer class="footer">
            <div class="footer_bg">
                <div class="footer_container container grid">
                    <div>
                        <h1 class="footer_title">Joaquin</h1>
                        <span class="footer_subtitle">Frontend Developer</span>
                    </div>

                    <ul class="footer_links">
                        <li>
                            <a href="#skills" class="footer_link">Habilidades</a>
                        </li>
                        <li>
                            <a href="#portfolio" class="footer_link">Portfolio</a>
                        </li>
                        <li>
                            <a href="#contact" class="footer_link">Contacto</a>
                        </li>
                    </ul>

                    <div class="footer_socials">
                        <a href="https://twitter.com/JoaquiinPB" target="_blank" class="footer_social">
                            <i class='bx bxl-twitter'></i>
                        </a>
                        <a href="https://www.instagram.com/joaquiinpastore/" target="_blank" class="footer_social">
                            <i class='bx bxl-instagram-alt'></i>
                        </a>
                    </div>
                </div>

                <p class="footer_copy">&#169; Joaquin Javier Pastore Barrios</p>
            </div>
        </footer>

        <a href="#" class="scrollup" id="scroll-up">
            <i class='bx bx-up-arrow-alt scrollup_icon'></i>
        </a>

        <script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.12"></script>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="js/swiper-bundle.min.js"></script>
        <script src="js/wow.min.js"></script>
        <script src="js/main.js"></script>

    </body>
    </html>
