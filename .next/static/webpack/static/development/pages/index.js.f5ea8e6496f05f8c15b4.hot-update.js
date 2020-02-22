webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Card.js":
/*!****************************!*\
  !*** ./components/Card.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
var _jsxFileName = "/Users/westfalsky/Projects/frontend/flameous/components/Card.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var Title = antd__WEBPACK_IMPORTED_MODULE_2__["Typography"].Title,
    Paragraph = antd__WEBPACK_IMPORTED_MODULE_2__["Typography"].Paragraph,
    Text = antd__WEBPACK_IMPORTED_MODULE_2__["Typography"].Text;
var results = [{
  id: 1,
  title: "Вы абсолютно не фанзиль! 🍾",
  text: "Скорее всего, вы достаточно счастливый человек с высоким уровнем эмпатии. У вас есть друзья, которые всегда вас поддержат, а так же вещи, которые приносят вам удовольствие. Однако расслабляться не стоит, ведь «счастье — эфемерное понятие. Оно расхолаживает и заставляет вас терять осознанность. Потеря осознанности ведёт к стрессу, появлению баесов, неправильной интерпретации событий и, как итог, к депрессии.» (с) Фанзиль"
}, {
  id: 2,
  title: "Не фанзиль, но есть звоночки 🔔",
  text: "В целом вы счастливы, но без проблем не обошлось. Возможно, у вас на ладится с противоположным полом или же вы просто petrolhead, ищущий внимания. В любом случае, всё не так страшно и с возрастом это пройдёт. Рекомендуется пройти этот тест ещё раз через пару лет, чтобы посмотреть на динамику безумия."
}, {
  id: 3,
  title: "Опасное перепутье 🚸",
  text: "Вы не безумны, но и нормальным вас не назовёшь. Что-то не даёт вам покоя. Реальность вокруг начинает вращаться с опасной динамикой. Уровень окситоцина начинает падать и вам становится сложнее интерпретировать намерения людей. Ещё немного и вы начнёте есть чесночный хлеб и писать attention-seeking посты в свой канал в телеграме. Рекомендуется: НАЙТИ ДРУЗЕЙ"
}, {
  id: 4,
  title: "Фанзиль, это ты? 🤡",
  text: "Результаты очень тревожные и ваше положение в обществе крайне шаткое. Люди не понимают вас, ваши друзья не кажутся вам друзьями. Вы в любой момент можете упасть в пучину безумия и начать ходить под себя (если ещё не начали). Граница между реальностью и воображением почти стёрлась и реальность похожа на набор математических моделей, в которые люди не могут вписаться. Вам срочно нужны близкий друг, который вас выслушает и слоновья доза ингибиторов обратного захвата серотонина."
}, {
  id: 5,
  title: "Being fanzil is my normal, my nature 👺",
  text: "You've lost your mind. Безумие уже охватило вас. Очень небольшое количество людей способно вас понять, ещё меньше — согласиться с тем, о чём вы говорите. Death, anxiety, overthinking and toxicity — это ваш вижен четырёх всадников апокалипсиса, которые уже настигли ваше сознание. Возможно, вас стоит изолировать от общества. Пожалуйста, обратитесь за помощью к психотерапевту как можно скорее: \n\n https://docdoc.ru/doctor/psihoterapevt"
}];

function Card(_ref) {
  var result = _ref.result;
  var testResult;
  var type;

  if (result <= 2) {
    testResult = 1;
    type = "success";
  }

  if (result > 2 && result <= 4) {
    testResult = 2;
    type = "success";
  }

  if (result > 4 && result <= 6) {
    testResult = 3;
    type = "warning";
  }

  if (result > 6 && result <= 8) {
    testResult = 4;
    type = "warning";
  }

  if (result > 8 && result <= 10) {
    testResult = 5;
    type = "error";
  }

  var item = results.filter(function (i) {
    return i.id === testResult;
  })[0];
  return __jsx(Wrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, __jsx(Title, {
    level: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, "\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442: ", item.title), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Alert"], {
    type: type,
    message: "".concat(result, " / 10"),
    description: item.text,
    banner: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (Card);
var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Card__Wrapper",
  componentId: "xtwp70-0"
})(["margin:24px 0 96px;"]);

/***/ })

})
//# sourceMappingURL=index.js.f5ea8e6496f05f8c15b4.hot-update.js.map