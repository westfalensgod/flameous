import styled from "styled-components";
import { Typography, Alert } from "antd";
const { Title } = Typography;

const results = [
  {
    id: 1,
    title: "Вы абсолютно не фанзиль! 🍾",
    text:
      "Скорее всего, вы достаточно счастливый человек с высоким уровнем эмпатии. У вас есть друзья, которые всегда вас поддержат, а так же вещи, которые приносят вам удовольствие. Однако расслабляться не стоит, ведь «счастье — эфемерное понятие. Оно расхолаживает и заставляет вас терять осознанность. Потеря осознанности ведёт к стрессу, появлению баесов, неправильной интерпретации событий и, как итог, к депрессии.» (с) Фанзиль"
  },
  {
    id: 2,
    title: "Не фанзиль, но есть звоночки 🔔",
    text:
      "В целом вы счастливы, но без проблем не обошлось. Возможно, у вас не ладится с противоположным полом или же вы просто petrolhead, ищущий внимания. В любом случае, всё не так страшно и с возрастом это пройдёт. Рекомендуется пройти этот тест ещё раз через пару лет, чтобы посмотреть на динамику безумия."
  },
  {
    id: 3,
    title: "Опасное перепутье 🚸",
    text:
      "Вы не безумны, но и нормальным вас не назовёшь. Что-то не даёт вам покоя. Реальность вокруг начинает вращаться с опасной динамикой. Уровень окситоцина начинает падать и вам становится сложнее интерпретировать намерения людей. Ещё немного и вы начнёте есть чесночный хлеб и писать attention-seeking посты в свой канал в телеграме. Рекомендуется: НАЙТИ ДРУЗЕЙ"
  },
  {
    id: 4,
    title: "Фанзиль, это ты? 🤡",
    text:
      "Результаты очень тревожные и ваше положение в обществе крайне шаткое. Люди не понимают вас, ваши друзья не кажутся вам друзьями. Вы в любой момент можете упасть в пучину безумия и начать ходить под себя (если ещё не начали). Граница между реальностью и воображением почти стёрлась и реальность похожа на набор математических моделей, в которые люди не могут вписаться. Вам срочно нужны близкий друг, который вас выслушает и слоновья доза ингибиторов обратного захвата серотонина."
  },
  {
    id: 5,
    title: "Being fanzil is my normal, my nature 👺",
    text:
      "You've lost your mind. Безумие уже охватило вас. Очень небольшое количество людей способно вас понять, ещё меньше — согласиться с тем, о чём вы говорите. Death, anxiety, overthinking and toxicity — это ваш вижен четырёх всадников апокалипсиса, которые уже настигли ваше сознание. Возможно, вас стоит изолировать от общества. Пожалуйста, обратитесь за помощью к психотерапевту как можно скорее: \n\n https://docdoc.ru/doctor/psihoterapevt"
  }
];

function Card({ result }) {
  let testResult;
  let type;

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

  const item = results.filter(i => i.id === testResult)[0];

  return (
    <Wrapper>
      <Title level={2}>Результат: {item.title}</Title>
      <Alert
        type={type}
        message={`${result} / 10`}
        description={item.text}
        banner
      />
    </Wrapper>
  );
}

export default Card;

const Wrapper = styled.div`
  margin-top: 24px;
  padding-bottom: 96px;
`;
