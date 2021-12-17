<div id="wrapper" class="flex items-center bar">
  <span class="bar_content text-primary-dark text-2xl font-bold">
    Economía creativa y decentralizada + arte & tecnología + innovación social
  </span>
</div>

<style>
  .bar {
    /* position: absolute;
    top: 0;
    left: 0; */

    width: 100%;
    padding: 25px 0;

    background-color: #00000000;
    color: white;

    font-family: Gelasio;
    font-size: 18px;
  }

  .bar_content {
    display: block; /* Important to give the content a width */

    width: 100%;
    transform: translateX(100%); /* Animation start out of the screen */

    /* Add the animation */
    animation: move 60s linear infinite
      /* infinite make reapeat the animation indefinitely */;
  }

  /* Create the animation */
  @keyframes move {
    to {
      transform: translateX(-100%);
    }
  }

  #wrapper {
    background: linear-gradient(-45deg, #ff5024, #6b45f3, #4eff4e, #39b6e7);
    background-size: 400% 400%;
    animation: gradient 30s ease infinite;
  }

  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
</style>
