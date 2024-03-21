import styled from 'styled-components';

const ContainerElemento = styled.div`
  z-index: 98;
  background: transparent;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .dsc-loading {
    width: 88px;
    height: 88px;
    background: #f9fbfb;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: middle;
    text-align: center;

    -webkit-animation: mymove-standard 1.2s ease-in infinite;
    animation: mymove-standard 1.2s ease-in infinite;

    .grafite {
      background: #262f3a;
    }

    svg {
      margin: 0 auto;
    }
  }

  .container-box-loading {
    width: auto;
    height: auto;
    background: #fff;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @-webkit-keyframes mymove-standard {
    0% {
      box-shadow: 0 0 0 0 #005ca9, 0 0 0 0 #f9fbfb, 0 0 0 0 #005ca9,
        0 0 0 0 #f9fbfb, 0 0 0 0 #005ca9, 0 0 0 0 #f9fbfb;
    }

    25% {
      box-shadow: 0 0 0 0 #005ca9, 0 0 0 0 #f9fbfb, 0 0 0 0 #005ca9,
        0 0 0 0 #f9fbfb, 0 0 0 12px #005ca9, 0 0 0 13px #f9fbfb;
    }

    50% {
      box-shadow: 0 0 0 0 #005ca9, 0 0 0 0 #f9fbfb, 0 0 0 8px #005ca9,
        0 0 0 9px #f9fbfb, 0 0 0 12px #005ca9, 0 0 0 13px #f9fbfb;
    }

    75% {
      box-shadow: 0 0 0 4px #005ca9, 0 0 0 5px #f9fbfb, 0 0 0 8px #005ca9,
        0 0 0 9px #f9fbfb, 0 0 0 12px #005ca9, 0 0 0 13px #f9fbfb;
    }

    to {
      box-shadow: 0 0 0 0 #005ca9, 0 0 0 0 #f9fbfb, 0 0 0 0 #005ca9,
        0 0 0 0 #f9fbfb, 0 0 0 0 #005ca9, 0 0 0 0 #f9fbfb;
    }
  }

  @keyframes mymove-standard {
    0% {
      box-shadow: 0 0 0 0 #005ca9, 0 0 0 0 #f9fbfb, 0 0 0 0 #005ca9,
        0 0 0 0 #f9fbfb, 0 0 0 0 #005ca9, 0 0 0 0 #f9fbfb;
    }

    25% {
      box-shadow: 0 0 0 0 #005ca9, 0 0 0 0 #f9fbfb, 0 0 0 0 #005ca9,
        0 0 0 0 #f9fbfb, 0 0 0 12px #005ca9, 0 0 0 13px #f9fbfb;
    }

    50% {
      box-shadow: 0 0 0 0 #005ca9, 0 0 0 0 #f9fbfb, 0 0 0 8px #005ca9,
        0 0 0 9px #f9fbfb, 0 0 0 12px #005ca9, 0 0 0 13px #f9fbfb;
    }

    75% {
      box-shadow: 0 0 0 4px #005ca9, 0 0 0 5px #f9fbfb, 0 0 0 8px #005ca9,
        0 0 0 9px #f9fbfb, 0 0 0 12px #005ca9, 0 0 0 13px #f9fbfb;
    }

    to {
      box-shadow: 0 0 0 0 #005ca9, 0 0 0 0 #f9fbfb, 0 0 0 0 #005ca9,
        0 0 0 0 #f9fbfb, 0 0 0 0 #005ca9, 0 0 0 0 #f9fbfb;
    }
  }

  @-webkit-keyframes mymove-grafite {
    0% {
      box-shadow: 0 0 0 0 #262f3a, 0 0 0 0 #f9fbfb, 0 0 0 0 #262f3a,
        0 0 0 0 #f9fbfb, 0 0 0 0 #262f3a, 0 0 0 0 #f9fbfb;
    }

    25% {
      box-shadow: 0 0 0 0 #262f3a, 0 0 0 0 #f9fbfb, 0 0 0 0 #262f3a,
        0 0 0 0 #f9fbfb, 0 0 0 12px #262f3a, 0 0 0 13px #f9fbfb;
    }

    50% {
      box-shadow: 0 0 0 0 #262f3a, 0 0 0 0 #f9fbfb, 0 0 0 8px #262f3a,
        0 0 0 9px #f9fbfb, 0 0 0 12px #262f3a, 0 0 0 13px #f9fbfb;
    }

    75% {
      box-shadow: 0 0 0 4px #262f3a, 0 0 0 5px #f9fbfb, 0 0 0 8px #262f3a,
        0 0 0 9px #f9fbfb, 0 0 0 12px #262f3a, 0 0 0 13px #f9fbfb;
    }

    to {
      box-shadow: 0 0 0 0 #262f3a, 0 0 0 0 #f9fbfb, 0 0 0 0 #262f3a,
        0 0 0 0 #f9fbfb, 0 0 0 0 #262f3a, 0 0 0 0 #f9fbfb;
    }
  }

  @keyframes mymove-grafite {
    0% {
      box-shadow: 0 0 0 0 #262f3a, 0 0 0 0 #f9fbfb, 0 0 0 0 #262f3a,
        0 0 0 0 #f9fbfb, 0 0 0 0 #262f3a, 0 0 0 0 #f9fbfb;
    }

    25% {
      box-shadow: 0 0 0 0 #262f3a, 0 0 0 0 #f9fbfb, 0 0 0 0 #262f3a,
        0 0 0 0 #f9fbfb, 0 0 0 12px #262f3a, 0 0 0 13px #f9fbfb;
    }

    50% {
      box-shadow: 0 0 0 0 #262f3a, 0 0 0 0 #f9fbfb, 0 0 0 8px #262f3a,
        0 0 0 9px #f9fbfb, 0 0 0 12px #262f3a, 0 0 0 13px #f9fbfb;
    }

    75% {
      box-shadow: 0 0 0 4px #262f3a, 0 0 0 5px #f9fbfb, 0 0 0 8px #262f3a,
        0 0 0 9px #f9fbfb, 0 0 0 12px #262f3a, 0 0 0 13px #f9fbfb;
    }

    to {
      box-shadow: 0 0 0 0 #262f3a, 0 0 0 0 #f9fbfb, 0 0 0 0 #262f3a,
        0 0 0 0 #f9fbfb, 0 0 0 0 #262f3a, 0 0 0 0 #f9fbfb;
    }
  }

  @-webkit-keyframes mymove-gelo {
    0% {
      box-shadow: 0 0 0 0 #fff, 0 0 0 0 #005ca9, 0 0 0 0 #fff, 0 0 0 0 #005ca9,
        0 0 0 0 #fff, 0 0 0 0 #005ca9;
    }

    25% {
      box-shadow: 0 0 0 0 #fff, 0 0 0 0 #005ca9, 0 0 0 0 #fff, 0 0 0 0 #005ca9,
        0 0 0 12px #fff, 0 0 0 13px #005ca9;
    }

    50% {
      box-shadow: 0 0 0 0 #fff, 0 0 0 0 #005ca9, 0 0 0 8px #fff,
        0 0 0 9px #005ca9, 0 0 0 12px #fff, 0 0 0 13px #005ca9;
    }

    75% {
      box-shadow: 0 0 0 4px #fff, 0 0 0 5px #005ca9, 0 0 0 8px #fff,
        0 0 0 9px #005ca9, 0 0 0 12px #fff, 0 0 0 13px #005ca9;
    }

    to {
      box-shadow: 0 0 0 0 #fff, 0 0 0 0 #005ca9, 0 0 0 0 #fff, 0 0 0 0 #005ca9,
        0 0 0 0 #fff, 0 0 0 0 #005ca9;
    }
  }

  @keyframes mymove-gelo {
    0% {
      box-shadow: 0 0 0 0 #fff, 0 0 0 0 #005ca9, 0 0 0 0 #fff, 0 0 0 0 #005ca9,
        0 0 0 0 #fff, 0 0 0 0 #005ca9;
    }

    25% {
      box-shadow: 0 0 0 0 #fff, 0 0 0 0 #005ca9, 0 0 0 0 #fff, 0 0 0 0 #005ca9,
        0 0 0 12px #fff, 0 0 0 13px #005ca9;
    }

    50% {
      box-shadow: 0 0 0 0 #fff, 0 0 0 0 #005ca9, 0 0 0 8px #fff,
        0 0 0 9px #005ca9, 0 0 0 12px #fff, 0 0 0 13px #005ca9;
    }

    75% {
      box-shadow: 0 0 0 4px #fff, 0 0 0 5px #005ca9, 0 0 0 8px #fff,
        0 0 0 9px #005ca9, 0 0 0 12px #fff, 0 0 0 13px #005ca9;
    }

    to {
      box-shadow: 0 0 0 0 #fff, 0 0 0 0 #005ca9, 0 0 0 0 #fff, 0 0 0 0 #005ca9,
        0 0 0 0 #fff, 0 0 0 0 #005ca9;
    }
  }
`;

export { ContainerElemento };

