import React from "react";
import { BlueTriangle } from "../../components/blueTriangle";
import { Triangle } from "../../components/triangle";
import "./header.css";

export const Header = () => {
  return (
    <header className="header">
      <div className="header-logo">
        <img className="header-item" src="logo.svg" alt="Logo" title="Good Surfing" />
        <img className="header-item" src="goodsurfing.svg" alt="Logo" title="Good Surfing" />
        <span className="header-item">RU</span>
        <Triangle />
      </div>
      <div className="header-list">
        <button className="header-list__all header-item">
          Все предложения <img src="lupa.svg" alt="glass" title="glass" />
        </button>
        <div className="header-list__community header-item">
          Сообщество
        </div>
        <BlueTriangle />
        <div className="header-list__about header-item">
          О проекте
        </div>
        <BlueTriangle />
      </div>
      <div className="header-enter">
        <button className="header-enter__sign-in header-item">Вход</button>
        <button className="header-enter__sign-up header-item">Регистрация</button>
      </div>
    </header>
  );
};
