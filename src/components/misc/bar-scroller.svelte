<div id="wrapper" class="flex items-center bar">
  <span class="bar_content text-primary-dark text-2xl font-bold">
    Economía creativa y decentralizada + arte & tecnología + innovación social
  </span>
</div>

<style>
  .bar_content {
    display: block; /* Important to give the content a width */

    width: 100%;
    transform: translateX(100%); /* Animation start out of the screen */

    /* Add the animation */
    animation: move 40s linear infinite
      /* infinite make reapeat the animation indefinitely */;
  }

  /* Create the animation */
  @keyframes move {
    to {
      transform: translateX(-100%);
    }
  }

  #wrapper {
    width: 100%;
    padding-top: 24px;
    padding-bottom: 24px;
    background: white;
    /* background: linear-gradient(-45deg, #ffe5df, #dbd2ff, #afffaf, #c1ebfc);
    background-size: 400% 400%;
    animation: gradient 30s ease infinite; */
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
