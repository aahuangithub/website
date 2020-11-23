import React from "react";
import { FiLinkedin, FiGithub, FiMail, FiPhoneCall } from "react-icons/fi";
import { withThemeContext } from "../../state/ThemeContext";
import Toolbar from "../common/Toolbar";
import Link from "../common/Link";
import ScrollTop from "../common/ScrollTop";
import SetTitle from "../common/SetTitle";
import "./Resume.css";

const Resume = (props) => (
  <div
    className="resume"
    style={{
      width: "100%",
      background: props.themeContext.background,
    }}
  >
    <ScrollTop />
    <SetTitle title="Resume | Aaron Huang" />
    <div
      id="container"
      style={{
        background: props.themeContext.background,
        color: props.themeContext.text,
        fontFamily: "Helvetica",
        transition: '0.5s all'
      }}
    >
      <Toolbar desktopWidth={1024} />
      <div className="head">
        <div id="name">Aaron Huang </div>
        <div class="contact">
          <li id="phone">
            <FiPhoneCall/> (415) 812-6317
          </li>
          <div class="separator-inline"></div>
          <li id="email">
            <Link href="mailto:aahuang@berkeley.edu">
              <FiMail /> aahuang@berkeley.edu
            </Link>
          </li>
          <div class="separator-inline"></div>
          <li>
            <Link href="https://www.github.com/aaronkh">
              <FiGithub /> aaronkh
            </Link>
          </li>
          <div class="separator-inline"></div>
          <li>
            <Link href="https://www.linkedin.com/in/aaronkh">
              <FiLinkedin /> aaronkh
            </Link>
          </li>
        </div>
      </div>

      <div class="section">
        <div class="section-head">
          <div class="section-title">Education</div>
          <div class="section-separator"></div>
        </div>
        <div class="section-inner">
          <div class="item-head">
            <div class="right">
              <div class="title">AUG 2018 - MAY 2022</div>
            </div>
            <div class="left">
              <div class="title">University of California, Berkeley </div>
              <div class="subtitle">
                <b>Major: </b>
                <span>Computer Science (B.A.)</span>
              </div>
            </div>
            <div id="coursework">
              <b>Relevant Coursework:</b>
              <span>
                Algorithms, Data Structures, Computer Security, Machine
                Structures, Principles and Techniques of Data Science, Discrete
                Math and Probability Theory, Information Devices and Systems,
                Computer Programming for Music Applications
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="section">
        <div class="section-head">
          <div class="section-title">Technical Skills</div>
          <div class="section-separator"></div>
        </div>
        <div class="item-head">
          <div class="technologies">
            Pandas, NumPy/SciPy, TensorFlow + Keras, Flask, MongoDB, Node.js,
            React + React Native, Git, Android Studio
          </div>
          <div class="languages">
            Python, HTML5/CSS/JavaScript, Typescript, Java, SQL, Kotlin, Go, C
          </div>
        </div>
      </div>
      <div class="section">
        <div class="section-head">
          <div class="section-title">Experience</div>
          <div class="section-separator"></div>
        </div>
        <div class="section-inner">
          <div class="item">
            <div class="item-head">
              <div class="right">
                <div class="title">AUG 2020 - current</div>
              </div>
              <div class="left">
                <div class="title">
                  UC Berkeley (Department of Data Science)
                </div>
                <div class="subtitle">Tutor</div>
              </div>
            </div>
            <ul class="description">
              <li>
                Hosted virtual office hours to help teach data science concepts
                (NumPy/SciPy, EDA, visualization, regression, classification) to
                over 1200 students remotely
              </li>
              <li>
                Graded exams and developed course materials for weekly student
                homework assignments
              </li>
            </ul>
            <div class="item-head">
              <div class="right">
                <div class="title">JAN 2020 - JUN 2020</div>
              </div>
              <div class="left">
                <div class="subtitle">Academic Intern</div>
              </div>
            </div>
            <ul class="description">
              <li>
                Helped run weekly labs to teach hundreds of students data
                science fundamentals
              </li>
              <li>
                Helped debug student code written with various data science
                libraries (Pandas, NumPy, SciPy, PyTorch)
              </li>
            </ul>
          </div>
          <div class="item">
            <div class="item-head">
              <div class="right">
                <div class="title">JUL 2020 - SEP 2020</div>
              </div>
              <div class="left">
                <div class="title">Farm Generations</div>
                <div class="subtitle">Frontend Developer Intern</div>
              </div>
            </div>
            <ul class="description">
              <li>
                Worked on an Agile development team to build a consumer-facing
                farm discovery and shopping portal in React Native
              </li>
              <li>
                Added Stripe integration onto an existing farm management app to
                accept payments and manage user transactions
              </li>
              <li>
                Cleaned and managed data from thousands of farms for use in
                Google's Firebase platform
              </li>
            </ul>
          </div>
          <div class="item">
            <div class="item-head">
              <div class="right">
                <div class="title">JUN 2019 - JAN 2020</div>
              </div>
              <div class="left">
                <div class="title">Soracom Global Inc. </div>
                <div class="subtitle">Software Engineer Intern </div>
              </div>
            </div>
            <ul class="description">
              <li>
                Added an analytics and payment platform with the Stripe API onto
                an electric scooter to demonstrate Soracom's cellular services
              </li>
              <li>
                Created an Android app with React Native to remotely manage an
                electric scooter while reducing data costs by 66%
              </li>
              <li>
                Co-authored technical articles on Hacker Noon with hundreds of
                hours read and starred in demonstration videos on YouTube
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="section">
        <div class="section-head">
          <div class="section-title">Projects</div>
          <div class="section-separator"></div>
        </div>
        <div class="section-inner">
          <div class="item">
            <div class="item-head">
              <div class="right"> </div>
              <div class="left">
                <div class="title">nowo's ark </div>
                <div class="subtitle stack">
                  Node.js, Cloudflare Serverless Workers, OmniSci, Soracom Air,
                  Arduino
                </div>
              </div>
            </div>
            <ul class="description">
              <li>
                Recruited and guided a small team to be named a semi-finalist in
                the China-US Young Maker Competition and "Best use of
                Serverless" by Cloudflare at HackSC 2019
              </li>
              <li>
                Built a prototype flood detection and alert system with
                Cloudflare workers and an Arduino, costing 90% less than similar
                systems in current use
              </li>
            </ul>
          </div>
          <div class="item">
            <div class="item-head">
              <div class="right"> </div>
              <div class="left">
                <div class="title">Bobafetch </div>
                <div class="subtitle stack">
                  React Native, Stripe API, Python, Microsoft Azure, Arduino{" "}
                </div>
              </div>
            </div>
            <ul class="description">
              <li>
                Worked with an Agile development team to win "Best Use of
                Hardware" and "3rd Place Overall" at CalHacks 6.0 over thousands
                of other competitors
              </li>
              <li>
                Created an automated boba barista machine and delivery robot in
                a weekend to reduce bubble milk tea operating costs by 75%
              </li>
              <li>
                Built a customer-facing React Native tablet app for placing
                orders and buying bubble milk tea
              </li>
            </ul>
          </div>
        </div>
        <div class="item">
          <div class="item-head">
            <div class="right"> </div>
            <div class="left">
              <div class="title">Blindsight </div>
              <div class="subtitle stack">
                Android, Node.js, Python (OpenCV), Tensorflow, Raspberry Pi{" "}
              </div>
            </div>
          </div>
          <ul class="description">
            <li>
              Won semi-finalist award at TechCrunch Disrupt SF Hackathon and
              featured on CBS news amongst over a hundred other teams
            </li>
            <li>
              Used OpenCV in Python to create an assistive device with on-device
              object recognition, machine learning, and optical character
              recognition (OCR)
            </li>
            <li>
              Built a voice interface for Android with speech recognition and
              Tensorflow NLP models
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default withThemeContext(Resume);
