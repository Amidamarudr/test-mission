import React from "react";
import { WhiteTriangle } from "../../components/whiteTriangle";
import "./footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="wrapper">
        <div className="left-bar">
          <div className="left-bar__logo">
            <img
              src="footer-logo.svg"
              alt="good surfing"
              title="good surfing"
            />
            <span className="left-bar__item">RU</span>
            <WhiteTriangle />
          </div>
          <div className="footer-social__icons">
            <a className="footer-ico insta" href="#">
              <img src="insta.svg" alt="instagram ico" />
            </a>
            <a className="footer-ico teleg" href="#">
              <img src="telegram.svg" alt="telegram ico" />
            </a>
            <a className="footer-ico vk" href="#">
              <img src="vk.svg" alt="vk ico" />
            </a>
            <a className="footer-ico face" href="#">
              <img src="fc.svg" alt="facebook ico" />
            </a>
          </div>
          <a className="footer-letter" href="#">
            Напишите нам
          </a>
        </div>
        <div className="left-main-bar">
          <h2 className="list-title community">Сообщество</h2>
          <ul type="none">
            <li>
              <a href="#">Блог</a>
            </li>
            <li>
              <a href="#">Видео</a>
            </li>
            <li>
              <a href="#">Эксперты</a>
            </li>
            <li>
              <a href="#">Амбассадоры</a>
            </li>
            <li>
              <a href="#">Курсы</a>
            </li>
            <li>
              <a href="#">Клубы</a>
            </li>
            <li>
              <a href="#">Журнал</a>
            </li>
          </ul>
        </div>
        <div className="right-main-bar">
          <h2 className="list-title about-us">О проекте</h2>
          <ul type="none">
            <li>
              <a href="#">Блог</a>
            </li>
            <li>
              <a href="#">О НКО</a>
            </li>
            <li>
              <a href="#">Наша команда</a>
            </li>
            <li>
              <a href="#">Как это работает</a>
            </li>
            <li>
              <a href="#">Правила</a>
            </li>
            <li>
              <a href="#">Политика конфиденциальности</a>
            </li>
            <li>
              <a href="#">Новости</a>
            </li>
          </ul>
        </div>
        <div className="right-bar">
          <h2 className="list-title for-organizer">Для организаторов</h2>
          <ul type="none">
            <li>
              <a href="#">Стать хостом</a>
            </li>
            <li>
              <a href="#">Как это работает</a>
            </li>
            <li>
              <a href="#">Правила</a>
            </li>
            <li>
              <a href="#">Курсы для организаторов</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="signature">
        &#169; GoodSurfing, 2017-2021
      </div>
    </footer>
  );
};
