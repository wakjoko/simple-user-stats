<a name="readme-top"></a>

<!-- PROJECT SHIELDS -->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <h3 align="center">Simple User Stats</h3>

  <p align="center">
    Check out the demo app guys!
    <br />
    <a href="https://spotless-top-hat-moth.cyclic.app"><strong>Absolutely! Let's explore it now »</strong></a>
    <br />
    <br />
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Dev Guide</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[Explore the App](https://spotless-top-hat-moth.cyclic.app)

An app where anyone can sign up or sign in via Google or Facebook then gets a simple user stats dashboard.

Api docs is available [here](https://spotless-top-hat-moth.cyclic.app/docs).

It's protected with simple auth to prevent unwanted access.

Username: user
\
Password: pass

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

Coming from Laravel background, I'm choosing AdonisJS for the similarities it brings.

* [![AdonisJS][AdonisJS.com]][AdonisJS-url]
* [![Bootstrap][Bootstrap.com]][Bootstrap-url]
* [![JQuery][JQuery.com]][JQuery-url]
* [![MySQL][MySQL.com]][MySQL-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Dev Guide

Basically you'll need NodeJs and MySQL installed first then you're good to follow below steps.

### Prerequisites

Please check the official AdonisJS installation guide for server requirements before you start. [Official Documentation](https://docs.adonisjs.com/guides/installation)

### Installation

Installation is possible without local dependencies relying on [Docker](https://www.docker.com).

1. Clone the repo
   ```sh
   git clone git@github.com:wakjoko/simple-user-stats.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Copy the example env file and make the required configuration changes in the .env file
   ```sh
   cp .env.example .env
   ```
4. Generate a new application key
   ```sh
   node ace generate:key
   ```
5. Run the database migrations (**Set the database connection in .env before migrating**)
   ```sh
   node ace migration:run
   ```
6. Start the local development server
   ```sh
   node ace serve --watch
   ```

   You can now access the server at http://localhost:3333

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap

- [x] Hosting
- [x] Sign Up
- [x] User Defined Password
- [x] Email Verification - via [Sendinblue](https://www.sendinblue.com)
- [x] Login
    - [x] Traditional
    - [x] Google OAuth
    - [x] Facebook OAuth
- [x] User Profile
- [x] Reset Password
- [x] Cookies (Remember Me) and Logout
- [x] User Database Dashboard
- [x] User Statistics
- [x] API Endpoints
- [ ] Bug Finding
- [ ] Upgrade to AdonisJs V6

See the [open issues](https://github.com/wakjoko/simple-user-stats/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- LICENSE -->
## License

Are you kidding me? Don't ask about it, just take it all and do anything you want.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Sahir Taib - [LinkedIn](https://linkedin.com/in/wakjoko) - wakjoko@gmail.com

Codebase: [https://github.com/wakjoko/simple-user-stats](https://github.com/wakjoko/simple-user-stats)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

Thanks to everyone for your amazing tools and services!

* [AdonisJS](AdonisJS-url)
* [Bootstrap 5 Admin Template](https://themes.3rdwavemedia.com)
* [GitHub](https://github.com)
* [Cyclic](https://www.cyclic.sh)
* [FreeMySQLHosting](https://www.freemysqlhosting.net)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/wakjoko/simple-user-stats.svg?style=for-the-badge
[contributors-url]: https://github.com/wakjoko/simple-user-stats/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/wakjoko/simple-user-stats.svg?style=for-the-badge
[forks-url]: https://github.com/wakjoko/simple-user-stats/network/members
[stars-shield]: https://img.shields.io/github/stars/wakjoko/simple-user-stats.svg?style=for-the-badge
[stars-url]: https://github.com/wakjoko/simple-user-stats/stargazers
[issues-shield]: https://img.shields.io/github/issues/wakjoko/simple-user-stats.svg?style=for-the-badge
[issues-url]: https://github.com/wakjoko/simple-user-stats/issues
[license-shield]: https://img.shields.io/github/license/wakjoko/simple-user-stats.svg?style=for-the-badge
[license-url]: https://github.com/wakjoko/simple-user-stats/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/wakjoko
[AdonisJS.com]: https://img.shields.io/badge/adonisjs-%23220052.svg?style=for-the-badge&logo=adonisjs&logoColor=white
[AdonisJS-url]: https://adonisjs.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com
[MySQL.com]: https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white
[MySQL-url]: https://www.mysql.com
